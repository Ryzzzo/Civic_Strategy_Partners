'use client';

import GoldDivider from './GoldDivider';
import { ScrollReveal } from './ScrollReveal';

const tierNames = [
  'Tier 1 — Flagship',
  'Tier 2 — Retainer',
  'Tier 3 — Project',
];

const features: { label: string; tiers: (boolean | string)[] }[] = [
  { label: 'Direct Principal Access', tiers: [true, true, false] },
  { label: 'New MAS Offer Development', tiers: [true, false, false] },
  { label: 'Pricing Architecture & Posture', tiers: [true, true, false] },
  { label: 'Modification Strategy & Execution', tiers: [true, false, false] },
  { label: 'EPA Management', tiers: [true, false, false] },
  { label: 'TDR Compliance Oversight', tiers: [true, false, false] },
  { label: 'Contract Lifecycle Management', tiers: [true, false, false] },
  { label: 'Revenue Performance Alignment', tiers: [true, true, false] },
  { label: 'Direct CO Engagement Support', tiers: [true, false, false] },
  { label: 'Monthly Strategy Sessions', tiers: [true, true, false] },
  { label: 'Modification Review Pre-Submission', tiers: [true, true, false] },
  { label: 'Risk Posture Analysis', tiers: [true, true, false] },
  { label: 'CSP Templates & Frameworks', tiers: [false, 'Optional', false] },
  { label: 'MAS Optimization Roadmap', tiers: [true, true, true] },
  { label: 'Offer Readiness Diagnostic', tiers: [true, false, true] },
  { label: 'Specific Modification Support', tiers: [true, false, true] },
  { label: 'Compliance Gap Assessment', tiers: [true, true, true] },
];

export default function TierComparison() {
  return (
    <div className="mt-16 sm:mt-24 mb-16 md:mb-20 max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
            Compare
          </p>
          <h2
            className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] mb-4"
            style={{ lineHeight: 1.35 }}
          >
            At a Glance
          </h2>
          <div className="flex justify-center">
            <GoldDivider width={60} />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-white/[0.06]">
                <th className="text-left font-sans text-white/60 text-xs sm:text-sm p-3 sm:p-4 w-[40%]">
                  Feature
                </th>
                {tierNames.map((name, i) => (
                  <th
                    key={i}
                    className={`text-center font-playfair font-bold text-xs sm:text-sm p-3 sm:p-4 ${
                      i === 0 ? 'text-brand-gold' : 'text-white/70'
                    }`}
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}
                >
                  <td className="font-sans text-white/80 text-xs sm:text-sm p-3 sm:p-4">
                    {feature.label}
                  </td>
                  {feature.tiers.map((included, j) => (
                    <td key={j} className="text-center p-3 sm:p-4">
                      {included === true ? (
                        <span className="text-brand-gold font-bold">&#10003;</span>
                      ) : included === 'Optional' ? (
                        <span className="text-white/40 text-xs italic">Optional</span>
                      ) : (
                        <span className="text-white/20">&mdash;</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>
    </div>
  );
}
