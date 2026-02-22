'use client';

import { useFadeIn } from '../hooks/useFadeIn';

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
  const { ref, visible } = useFadeIn();

  return (
    <section
      className="relative py-20 md:py-24 px-6 border-t border-white/[0.06] border-b border-b-white/[0.06]"
      style={{
        background: 'linear-gradient(180deg, #152A45 0%, #0C1B2E 100%)',
      }}
    >
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {pillars.map((pillar, i) => (
          <div key={i} className="text-center md:text-left">
            {/* Gold label */}
            <p className="font-cormorant font-semibold text-brand-gold text-[11px] tracking-[0.3em] uppercase mb-3">
              {pillar.label}
            </p>
            {/* Title */}
            <h3 className="font-playfair font-bold text-white text-[22px] md:text-[24px] mb-4 leading-tight">
              {pillar.title}
            </h3>
            {/* Description */}
            <p className="font-sans text-white/80 text-[16px] leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
