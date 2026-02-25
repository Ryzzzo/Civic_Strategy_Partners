'use client';

import Link from 'next/link';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

export default function HomeCTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ lineHeight: 1.5 }}>
            Ready to Engineer Your
            <br />
            Contract Position?
          </h2>
          <div className="flex justify-center">
            <GoldDivider width={60} />
          </div>
          <p className="font-sans text-white/80 text-[17px] leading-relaxed max-w-[560px] mx-auto mb-10">
            Book a strategy call. We&rsquo;ll talk through your current situation,
            what you&rsquo;re trying to accomplish, and whether there&rsquo;s a fit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/rebrand/contact"
              className="w-full sm:w-auto text-center px-9 py-4 font-playfair font-bold text-[14px] sm:text-[15px] tracking-[0.18em] uppercase text-brand-navy-deep no-underline transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
              style={{
                background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
                boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
              }}
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/rebrand/services"
              className="w-full sm:w-auto text-center px-9 py-4 font-playfair font-semibold text-[14px] sm:text-[15px] tracking-[0.18em] uppercase text-white/80 border border-white/15 hover:border-brand-gold/40 hover:text-brand-gold transition-all duration-300 no-underline"
            >
              View Services &rarr;
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
