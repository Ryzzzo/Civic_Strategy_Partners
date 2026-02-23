'use client';

import { useState } from 'react';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

const resources = [
  {
    title: 'SBIR Phase III + GSA MAS Combined Strategy One-Pager',
    description: 'How to structure SBIR Phase III authority alongside your GSA MAS contract for maximum compliance defensibility and sales channel coverage.',
    tag: 'Strategy Brief',
  },
  {
    title: 'GSA MAS Offer Readiness Checklist',
    description: 'Key prerequisites and positioning considerations before pursuing a GSA Schedule — built from the evaluator\'s perspective.',
    tag: 'Checklist',
  },
  {
    title: 'MAS Optimization Self-Assessment',
    description: 'A diagnostic framework to evaluate whether your current Schedule contract is performing, drifting, or at risk.',
    tag: 'Diagnostic Tool',
  },
];

export default function Resources() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Kevin's email platform (Mailchimp, ConvertKit, or equivalent)
    setSubmitted(true);
  };

  return (
    <section
      id="resources"
      className="py-24 md:py-32 px-6"
      style={{ background: '#F5F1EB' }}
    >
      <div className="max-w-[800px] mx-auto">

        {/* ── Header + Email Form ── */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.35em] uppercase mb-4">
              Resource Library
            </p>
            <h2 className="font-playfair font-bold text-[#0C1B2E] text-3xl md:text-[38px] leading-tight mb-2">
              Tools for Federal Contractors.
              <br />
              Built from the Inside.
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
            <p className="font-sans text-[#1B3A5C] text-[16px] leading-relaxed max-w-[520px] mx-auto">
              Practical resources developed from years of federal procurement experience.
              Enter your email below to access the library.
            </p>
          </div>

          {/* ── Email Capture Form ── */}
          <div className="mb-16">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[560px] mx-auto">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="flex-1 px-4 py-3.5 font-sans text-[15px] text-[#0C1B2E] bg-white border border-[#0C1B2E]/15 focus:border-brand-gold focus:outline-none transition-colors placeholder:text-[#1B3A5C]/40"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="flex-1 px-4 py-3.5 font-sans text-[15px] text-[#0C1B2E] bg-white border border-[#0C1B2E]/15 focus:border-brand-gold focus:outline-none transition-colors placeholder:text-[#1B3A5C]/40"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 font-playfair font-bold text-[13px] tracking-[0.2em] uppercase text-[#0C1B2E] transition-all duration-300 hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
                  }}
                >
                  Access Resources
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <p className="font-playfair font-bold text-[#0C1B2E] text-lg mb-1">
                  You&rsquo;re in.
                </p>
                <p className="font-sans text-[#1B3A5C] text-[15px]">
                  Check your email for access.
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* ── Resource Cards ── */}
        <div className="space-y-4">
          {resources.map((resource, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div
                className="p-6 md:p-8 bg-white border border-[#0C1B2E]/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex-1">
                  <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.25em] uppercase mb-2">
                    {resource.tag}
                  </p>
                  <h4 className="font-playfair font-bold text-[#0C1B2E] text-[16px] md:text-[17px] leading-tight mb-2">
                    {resource.title}
                  </h4>
                  <p className="font-sans text-[#1B3A5C] text-[14px] leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <button
                  className="flex-shrink-0 px-5 py-2.5 font-playfair font-semibold text-[12px] tracking-[0.15em] uppercase border border-[#0C1B2E]/20 text-[#0C1B2E] hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                >
                  Download
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* DEV NOTE: Resource cards are visible to all visitors. Download buttons should
           trigger the email gate (only show download after email submitted).
           Kevin to confirm email platform for form integration. */}

      </div>
    </section>
  );
}
