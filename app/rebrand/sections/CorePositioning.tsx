'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

export default function CorePositioning() {
  return (
    <section
      className="relative py-24 md:py-32 px-6"
      style={{
        background: 'linear-gradient(165deg, #0C1B2E 0%, #152A45 100%)',
      }}
    >
      <div className="max-w-[720px] mx-auto text-center">
        <ScrollReveal>
          <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.35em] uppercase mb-6">
            How I Work
          </p>

          <h2 className="font-playfair font-bold text-white text-[32px] md:text-[42px] leading-tight mb-4">
            I embed with companies as their fractional
            <span className="text-brand-gold"> GSA MAS authorized negotiator.</span>
          </h2>

          <div className="flex justify-center">
            <GoldDivider width={60} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="space-y-6 text-left mt-8">
            <p className="font-sans text-white/70 text-[17px] md:text-[18px] leading-relaxed">
              New offers. Modifications. Pricing strategy. Lifecycle compliance. Full contract
              management — without the full-time hire.
            </p>

            <p className="font-sans text-white/70 text-[17px] md:text-[18px] leading-relaxed">
              If you need to get on the GSA Schedule, I will build and negotiate your offer from scratch.
            </p>

            <p className="font-sans text-white/70 text-[17px] md:text-[18px] leading-relaxed">
              If you are already on schedule and your contract is collecting dust, bleeding margin, or
              drifting out of compliance — I will diagnose the problem and correct it.
            </p>

            <p className="font-sans text-white/70 text-[17px] md:text-[18px] leading-relaxed">
              If you want a former government insider managing mods, pricing, and lifecycle decisions
              month to month — that is exactly what I do on retainer.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
