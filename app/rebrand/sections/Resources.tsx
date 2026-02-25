'use client';

import { useState } from 'react';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import StaggeredReveal from '../components/StaggeredReveal';

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
    >
      <div className="max-w-[800px] mx-auto">

        {/* Header + Email Form */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-playfair font-bold text-brand-gold text-xl md:text-2xl tracking-[0.15em] uppercase mb-4">
              Resource Library
            </p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-[38px] mb-2" style={{ lineHeight: 1.35 }}>
              Tools for Federal Contractors.
              <br />
              Built from the Inside.
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
            <p className="font-sans text-white/80 text-[16px] leading-relaxed max-w-[520px] mx-auto">
              Practical resources developed from years of federal procurement experience.
              Enter your email below to access the library.
            </p>
          </div>

          {/* Email Capture Form */}
          <div className="mb-16">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[560px] mx-auto">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="flex-1 px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="flex-1 px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 font-playfair font-bold text-[13px] tracking-[0.2em] uppercase text-brand-navy-deep transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
                    boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,153,58,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(197,153,58,0.2)'; }}
                >
                  Access Resources
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <p className="font-playfair font-bold text-white text-lg mb-1">
                  You&rsquo;re in.
                </p>
                <p className="font-sans text-white/70 text-[15px]">
                  Check your email for access.
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Resource Cards */}
        <div className="space-y-4">
          {resources.map((resource, i) => (
            <StaggeredReveal key={i} index={i} direction="up" delay={100} preserveBackdrop>
              <div
                className="p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-brand-gold/20 hover:shadow-[0_0_24px_rgba(197,153,58,0.08)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div className="flex-1">
                  <p className="font-playfair font-bold text-brand-gold text-base md:text-lg tracking-[0.12em] uppercase mb-2">
                    {resource.tag}
                  </p>
                  <h4 className="font-playfair font-bold text-white text-[16px] md:text-[17px] mb-2" style={{ lineHeight: 1.35 }}>
                    {resource.title}
                  </h4>
                  <p className="font-sans text-white/70 text-[14px] leading-relaxed">
                    {resource.description}
                  </p>
                </div>
                <button
                  className="flex-shrink-0 px-5 py-2.5 font-playfair font-semibold text-sm tracking-[0.15em] uppercase border border-white/20 text-white/80 hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
                >
                  Download
                </button>
              </div>
            </StaggeredReveal>
          ))}
        </div>

        {/* DEV NOTE: Resource cards are visible to all visitors. Download buttons should
           trigger the email gate (only show download after email submitted).
           Kevin to confirm email platform for form integration. */}

      </div>
    </section>
  );
}
