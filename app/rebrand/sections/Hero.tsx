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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] px-6 sm:px-8 md:px-12 lg:px-16 pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-20 md:pb-28">

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

        {/* Eyebrow */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl tracking-[0.15em] uppercase mb-6 sm:mb-8">
            Elite Federal Contract Advisory
          </p>
        </div>

        {/* Main Headline */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[58px] mb-2" style={{ lineHeight: 1.35 }}>
            Fractional GSA MAS
            <br />
            <span className="text-brand-gold">Authorized Negotiator</span>
          </h1>
        </div>

        {/* Divider + Subheadline */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[800ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <div className="flex justify-center">
            <GoldDivider width={80} />
          </div>
          <p className="font-playfair text-white/75 text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed max-w-[580px] mx-auto mb-8 sm:mb-10 font-normal">
            I embed with companies as their fractional GSA MAS authorized negotiator
            and executive advisor — leading new offers, modifications, pricing strategy,
            and lifecycle compliance without the overhead of a full-time hire.
          </p>
        </div>

        {/* Supporting Line */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[1000ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="font-playfair text-brand-gold/90 text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-[0.12em] uppercase mb-8 sm:mb-10">
            Principal-led · Retainer-based · Built for revenue performance
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[1200ms] flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <Link
            href="/rebrand/contact"
            className="w-full sm:w-auto text-center px-9 py-4 font-playfair font-bold text-[14px] sm:text-[15px] tracking-[0.18em] uppercase text-brand-navy-deep no-underline transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
              boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,153,58,0.35)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(197,153,58,0.2)'; }}
          >
            Book a Strategy Call
          </Link>
          <Link
            href="/rebrand/services"
            className="w-full sm:w-auto text-center px-9 py-4 font-playfair font-semibold text-[14px] sm:text-[15px] tracking-[0.18em] uppercase text-white/80 border border-white/15 hover:border-brand-gold/40 hover:text-brand-gold hover:-translate-y-[2px] active:translate-y-0 transition-all duration-300 no-underline"
          >
            How I Work &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
