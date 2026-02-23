'use client';

import Link from 'next/link';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function TestimonialPreview() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-playfair font-bold text-brand-gold text-xl md:text-2xl tracking-[0.15em] uppercase mb-4">
              Client Testimonials
            </p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-[40px] leading-tight">
              Results That Speak
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12">
            <TestimonialCarousel />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="text-center">
            <Link
              href="/rebrand/testimonials"
              className="inline-block px-9 py-4 font-playfair font-semibold text-[15px] tracking-[0.18em] uppercase text-white/80 border border-white/15 hover:border-brand-gold/40 hover:text-brand-gold transition-all duration-300 no-underline"
            >
              Read All Testimonials &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
