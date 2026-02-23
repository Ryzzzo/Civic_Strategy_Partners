'use client';

import Link from 'next/link';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

export default function HomeCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.35em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="font-playfair font-bold text-white text-3xl md:text-[40px] leading-tight">
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
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/rebrand/contact"
              className="inline-block px-9 py-4 font-playfair font-bold text-[15px] tracking-[0.18em] uppercase text-brand-navy-deep no-underline transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
              style={{
                background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
                boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
              }}
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/rebrand/services"
              className="inline-block px-9 py-4 font-playfair font-semibold text-[15px] tracking-[0.18em] uppercase text-white/80 border border-white/15 hover:border-brand-gold/40 hover:text-brand-gold transition-all duration-300 no-underline"
            >
              View Services →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
