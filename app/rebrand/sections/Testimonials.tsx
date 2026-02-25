'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import { testimonials } from '../components/TestimonialCarousel';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              Client Testimonials
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ lineHeight: 1.5 }}>
              Results That Speak
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Grid — equal height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150} scale={true} className="flex">
              <div className="flex flex-col h-full p-5 sm:p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                {/* Quote Mark */}
                <div className="font-playfair text-3xl sm:text-4xl md:text-[48px] text-brand-gold/80 leading-none mb-2">
                  &ldquo;
                </div>

                {/* Quote Text */}
                <p className="flex-1 font-playfair text-white/75 text-base sm:text-[17px] md:text-[18px] leading-relaxed italic mb-4 sm:mb-6">
                  {t.quote}
                </p>

                {/* Attribution */}
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-playfair font-bold text-white text-sm sm:text-[15px]">
                    {t.name}
                  </p>
                  <p className="font-playfair text-brand-gold text-xs sm:text-sm md:text-base mt-1">
                    {t.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
