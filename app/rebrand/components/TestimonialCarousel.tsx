'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    quote:
      "Kevin helped us on our GSA contract efforts, and he delivered exceptional value from day one. He quickly understood our complex situation, clarified the path to compliance, and laid out a clear, actionable playbook to grow our federal business. Kevin is sharp, practical, and deeply knowledgeable about GSA. I highly recommend him for any team looking to get their contracts and pipeline on the right track.",
    name: 'Bruce Olson',
    title: 'AI Native GOVCON BD | GCH | Air Force Veteran',
  },
  {
    quote:
      "I worked with Kevin on an assessment focused on GSA MAS strategy and positioning for Colvin Run Networks. He brings a practical, informed understanding of how GSA MAS works in the real world based on his experience. Kevin was effective at translating acquisition and compliance nuances into clear, actionable guidance, and helped us distinguish where MAS is a strong fit versus where other contracting paths make more sense. He's thoughtful, direct, and focused on helping clients make informed decisions before moving into execution. Highly recommended for any company considering MAS and looking for executive education and support.",
    name: 'Nikhil Shenoy',
    title: 'CEO, Colvin Run Networks',
  },
  {
    quote:
      "Kevin is a contract specialist who recommends for award and manages millions of dollars worth of Federal Supply Schedule contracts. He communicates and writes well and shows an understanding of the work and how what we do benefits the Federal Government and ultimately, the American taxpayers, by negotiating the best value for products and services under his purview. Kevin was a pleasure to work with and a great teammate on projects.",
    name: 'Mark Dunkum',
    title:
      'Retired Deputy Director, Office of Multiple Award Schedule Contract Operations | GSA',
  },
  {
    quote:
      "I have been consistently impressed by his intelligence, dedication, and deep understanding of federal acquisition. As a veteran and a mid-career professional, Kevin brings a unique perspective to government contracting \u2014 one that combines mission focus with intense drive and strategic thinking. His ability to navigate complex procurement challenges and his commitment to public service stood out. Kevin is someone I would trust to drive meaningful results in any organization. For those looking for a sharp, principled, and capable acquisition professional, Kevin is a great asset.",
    name: 'Nicole Evans',
    title:
      'GovCon Chief Strategy Officer | Former Federal Senior Executive',
  },
  {
    quote:
      "When I was looking for help with growth opportunities for my small business, Kevin was among the shortlist of people who were highly recommended to me. He demonstrated enthusiasm and a collaborative spirit in our discussions and came ready to share creative ideas for approaching the challenges we faced. I\u2019m confident he\u2019ll bring the same level of enthusiasm to any new clients he serves.",
    name: 'Mika Cross',
    title:
      'Workplace Transformation Strategist & Futurist | Goldman Sachs 10KSB Alum',
  },
  {
    quote:
      'Kevin is wicked smart and driven, effective as both team player and independent leader. If you are searching for someone with a fantastic attitude willing to tackle any challenge, Kevin is your person. Highly recommend.',
    name: 'Karen Versuk',
    title: 'BA, MBA, PhD, Municipal Director of Operations',
  },
];

export { testimonials };

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      {/* Dot indicators — above carousel so always visible */}
      <div className="flex justify-center gap-2 mb-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === selectedIndex ? 'bg-brand-gold' : 'bg-white/30'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4">
              <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
                {/* Gold quotation mark */}
                <span className="font-playfair text-3xl sm:text-4xl md:text-[48px] text-brand-gold/80 leading-none block mb-2">
                  &ldquo;
                </span>

                {/* Quote */}
                <p className="font-playfair text-white/75 text-base sm:text-[17px] md:text-[18px] leading-relaxed italic mb-4 sm:mb-6">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="w-16 h-px bg-brand-gold/40 mb-3 sm:mb-4" />

                {/* Attribution */}
                <p className="font-playfair font-bold text-white text-sm sm:text-[15px]">
                  {t.name}
                </p>
                <p className="font-playfair text-brand-gold text-xs sm:text-sm md:text-base mt-1">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons — hidden on mobile */}
      <button
        onClick={scrollPrev}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
        aria-label="Previous testimonial"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12L6 8L10 4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
        aria-label="Next testimonial"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
