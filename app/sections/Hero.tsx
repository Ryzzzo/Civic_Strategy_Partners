'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import GoldDivider from '../components/GoldDivider';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden min-[1500px]:min-h-screen"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-[820px] px-6 sm:px-8 md:px-12 lg:px-16 pt-28 sm:pt-32 md:pt-36 lg:pt-20 xl:pt-44 pb-12 sm:pb-16 md:pb-20 lg:pb-12 xl:pb-24">

        {/* CSP Seal — mobile only (replaces watermark which is hidden on mobile) */}
        <div
          className={`md:hidden transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] mb-6 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img
            src="/fy26_update/new_logo_2026_clear.png"
            alt="Civic Strategy Partners"
            className="w-48 h-48 sm:w-56 sm:h-56 object-contain mx-auto"
          />
        </div>

        {/* Headline */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1
            className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[36px] xl:text-[58px] mb-3 lg:mb-3 xl:mb-6"
            style={{ lineHeight: 1.15 }}
          >
            Fractional <span className="text-brand-gold">GSA MAS Advisor</span>
          </h1>
        </div>

        {/* Divider */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex justify-center mb-4 lg:mb-3 xl:mb-8">
            <GoldDivider width={80} />
          </div>
        </div>

        {/* Subhead */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[600ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="font-sans text-white/85 text-base sm:text-lg md:text-xl lg:text-base xl:text-[22px] leading-relaxed lg:leading-snug xl:leading-relaxed max-w-[640px] mx-auto mb-3 lg:mb-3 xl:mb-6">
            A former GS-1102 contract specialist guiding offers, modifications, and pricing strategy &mdash; at a fraction of the cost of a full-time contracts hire.
          </p>
        </div>

        {/* Pricing paragraph */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[800ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="font-sans text-white/75 text-sm sm:text-base md:text-lg lg:text-sm xl:text-lg leading-relaxed lg:leading-snug xl:leading-relaxed max-w-[620px] mx-auto mb-3 lg:mb-3 xl:mb-6">
            Advisory or white-glove engagements. Retainers from $3,500/month. Flat fees on a per project basis &mdash; contact for scoping and pricing.
          </p>
        </div>

        {/* Value statement */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[1000ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="font-playfair font-semibold text-brand-gold/90 text-base sm:text-lg md:text-xl lg:text-base xl:text-[22px] leading-relaxed lg:leading-snug xl:leading-relaxed max-w-[620px] mx-auto mb-4 lg:mb-3 xl:mb-8">
            I don&rsquo;t bill hours. I own outcomes &mdash; offers awarded, mods approved, pricing that holds up under scrutiny.
          </p>
        </div>

        {/* Scarcity line */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[1200ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="font-sans italic text-white/60 text-sm sm:text-base mb-5 lg:mb-5 xl:mb-10">
            Limited engagement model. Select clientele.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[1400ms] w-full sm:w-auto ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto text-center px-9 py-4 min-h-[44px] font-playfair font-bold text-[14px] sm:text-[15px] tracking-[0.18em] uppercase text-brand-navy-deep no-underline transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
              boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,153,58,0.35)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(197,153,58,0.2)'; }}
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
