'use client';

import Link from 'next/link';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import StaggeredReveal from '../components/StaggeredReveal';

const tiers = [
  {
    label: 'Tier 1 — Flagship',
    title: 'GSA MAS Offer Strategy & Negotiation',
    description:
      'Full offer development and negotiation support for companies entering the Schedule program.',
  },
  {
    label: 'Tier 2 — Retainer',
    title: 'MAS Optimization & Revenue Performance',
    description:
      'Strategic diagnosis, pricing posture correction, modification sequencing, and contract performance engineering for active Schedule holders.',
  },
  {
    label: 'Tier 3 — Project-Based',
    title: 'White-Glove Retainer Advisory',
    description:
      'Fractional authorized negotiator services for companies that treat their GSA MAS contract as a managed revenue channel.',
  },
];

export default function ServicePreview() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-[1000px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              Engagement Models
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ lineHeight: 1.35 }}>
              Strategic Advisory for
              <br />
              GSA MAS Contracts
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {tiers.map((tier, i) => (
            <StaggeredReveal key={i} index={i} direction="up" delay={150} className="flex" preserveBackdrop>
              <div className="flex flex-col h-full p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-brand-gold/20 hover:shadow-[0_0_24px_rgba(197,153,58,0.08)] transition-all duration-300">
                <p className="font-playfair font-bold text-brand-gold text-base md:text-lg tracking-[0.12em] uppercase mb-3">
                  {tier.label}
                </p>
                <h4 className="font-playfair font-bold text-white text-[17px] md:text-[18px] mb-3" style={{ lineHeight: 1.35 }}>
                  {tier.title}
                </h4>
                <p className="flex-1 font-sans text-white/80 text-[15px] leading-relaxed">
                  {tier.description}
                </p>
              </div>
            </StaggeredReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center">
            <Link
              href="/rebrand/services"
              className="inline-block px-9 py-4 font-playfair font-semibold text-[15px] tracking-[0.18em] uppercase text-white/80 border border-white/15 hover:border-brand-gold/40 hover:text-brand-gold hover:-translate-y-[2px] active:translate-y-0 transition-all duration-300 no-underline"
            >
              Compare All Services →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
