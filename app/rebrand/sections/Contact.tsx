'use client';

import Link from 'next/link';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-[900px] mx-auto">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ lineHeight: 1.35 }}>
              Let&rsquo;s Talk About Your Contract.
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">

          {/* ── Contact Form (3 cols) ── */}
          <ScrollReveal delay={150} className="md:col-span-3">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55"
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55"
              />

              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55"
              />

              <select
                className="w-full px-4 py-3.5 font-sans text-[15px] text-white/60 bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 appearance-none"
                defaultValue=""
              >
                <option value="" disabled>What are you looking for help with?</option>
                <option value="new-offer" className="text-[#0C1B2E]">New GSA MAS Offer</option>
                <option value="optimization" className="text-[#0C1B2E]">MAS Optimization</option>
                <option value="retainer" className="text-[#0C1B2E]">Retainer Advisory</option>
                <option value="readiness" className="text-[#0C1B2E]">Federal Market Readiness</option>
                <option value="other" className="text-[#0C1B2E]">Other</option>
              </select>

              <textarea
                placeholder="Brief description of your situation"
                rows={4}
                className="w-full px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 resize-none placeholder:text-white/55"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 font-playfair font-bold text-[14px] tracking-[0.2em] uppercase text-[#0C1B2E] transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0"
                style={{
                  background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
                  boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,153,58,0.35)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(197,153,58,0.2)'; }}
              >
                Request a Consultation
              </button>
            </form>
          </ScrollReveal>

          {/* ── Contact Info (2 cols) ── */}
          <ScrollReveal delay={300} direction="right" distance="100px" className="md:col-span-2" preserveBackdrop>
            <div className="space-y-8">
              {/* CTA Block */}
              <div className="p-6 border-l-[3px] border-l-brand-gold bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <p className="font-sans text-white/90 text-[15px] leading-relaxed mb-4">
                  If your GSA MAS contract exists but is not producing, that is a strategy issue — not a paperwork issue.
                </p>
                <Link
                  href="/rebrand/contact"
                  className="inline-block font-playfair font-semibold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase no-underline hover:tracking-[0.15em] transition-all duration-300"
                >
                  Schedule a Consultation →
                </Link>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 pt-4">
                <div>
                  <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase mb-1">
                    Phone
                  </p>
                  <p className="font-sans text-white/70 text-[15px]">
                    (202) 796-7987
                  </p>
                </div>

                <div>
                  <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase mb-1">
                    Email
                  </p>
                  <a href="mailto:info@civicstrategypartners.com" className="font-sans text-white/70 text-[15px] hover:text-brand-gold transition-colors no-underline">
                    info@civicstrategypartners.com
                  </a>
                </div>

                <div>
                  <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase mb-1">
                    Website
                  </p>
                  <p className="font-sans text-white/70 text-[15px]">
                    civicstrategypartners.com
                  </p>
                </div>

                <div>
                  <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase mb-1">
                    Signal
                  </p>
                  <p className="font-sans text-white/70 text-[15px]">
                    civicstrategy.09
                  </p>
                </div>
              </div>

              {/* DEV NOTE: Kevin to provide Calendly or booking link for embedded scheduling widget.
                 Kevin to confirm LinkedIn profile URL for link. */}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
