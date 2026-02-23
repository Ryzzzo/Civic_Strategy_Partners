'use client';

import { ScrollReveal } from '../components/ScrollReveal';

const pillars = [
  {
    label: 'Former GSA 1102',
    title: 'Inside Perspective',
    description:
      'Before founding Civic Strategy Partners, I served as a Contract Specialist (1102) inside GSA\'s Multiple Award Schedule program. I reviewed offers, audited contract files, negotiated pricing, and saw firsthand how companies won — or lost — on schedule.',
  },
  {
    label: 'Fractional Negotiator',
    title: 'Embedded. Accountable.',
    description:
      'I serve as a fractional GSA MAS authorized negotiator and executive advisor. Embedded within your organization. Accountable for outcomes. Direct access to the Principal.',
  },
  {
    label: 'Contract Strategy',
    title: 'Built to Withstand Scrutiny',
    description:
      'Pricing posture. Modification sequencing. Compliance architecture. Lifecycle management. Built to withstand real government review — not surface-level approval.',
  },
];

export default function ValueStrip() {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 border-t border-white/[0.06] border-b border-b-white/[0.06]"
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={i} delay={i * 200} direction="left" distance="80px">
            <div className="text-center md:text-left">
              {/* Gold label */}
              <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase mb-3">
                {pillar.label}
              </p>
              {/* Title */}
              <h3 className="font-playfair font-bold text-white text-lg sm:text-xl md:text-[24px] mb-4 leading-tight">
                {pillar.title}
              </h3>
              {/* Description */}
              <p className="font-sans text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
