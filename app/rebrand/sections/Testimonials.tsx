'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import StaggeredReveal from '../components/StaggeredReveal';
import { testimonials } from '../components/TestimonialCarousel';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              Client Testimonials
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ lineHeight: 1.35 }}>
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
            <StaggeredReveal key={i} index={i} direction="down" delay={150} className="flex" preserveBackdrop>
              <div className="flex flex-col h-full p-5 sm:p-6 md:p-7 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-brand-gold/20 hover:shadow-[0_0_24px_rgba(197,153,58,0.08)] transition-all duration-300">
                {/* Quote Mark */}
                <div
                  className="font-playfair text-3xl sm:text-4xl md:text-[48px] text-brand-gold/80 leading-none mb-2"
                  style={{ animation: 'quote-fade-in 0.6s ease-out both' }}
                >
                  &ldquo;
                </div>

                {/* Quote Text */}
                <p className="flex-1 font-playfair italic leading-relaxed mb-4 sm:mb-6 text-sm sm:text-[15px]" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>
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
            </StaggeredReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
