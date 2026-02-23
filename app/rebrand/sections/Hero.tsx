'use client';

import { useState, useEffect } from 'react';
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
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#C5993A 1px, transparent 1px), linear-gradient(90deg, #C5993A 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(197,153,58,0.024), transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] px-6 pt-28 pb-20">
        {/* Eyebrow */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="font-playfair font-semibold text-brand-gold text-[16px] tracking-[0.3em] uppercase mb-8">
            Elite Federal Contract Advisory
          </p>
        </div>

        {/* Main Headline */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="font-playfair font-bold text-white text-[42px] md:text-[58px] leading-[1.15] mb-2">
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
          <p className="font-playfair text-white/75 text-xl md:text-[22px] leading-relaxed max-w-[580px] mx-auto mb-10 font-normal">
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
          <p className="font-playfair text-brand-gold/75 text-[15px] tracking-[0.18em] uppercase mb-10">
            Principal-led · Retainer-based · Built for revenue performance
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] delay-[1200ms] flex gap-4 justify-center flex-wrap ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <a
            href="#contact"
            className="inline-block px-9 py-4 font-playfair font-bold text-[15px] tracking-[0.18em] uppercase text-brand-navy-deep no-underline transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
              boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
            }}
          >
            Book a Strategy Call
          </a>
          <a
            href="#services"
            className="inline-block px-9 py-4 font-playfair font-semibold text-[15px] tracking-[0.18em] uppercase text-white/80 border border-white/15 hover:border-brand-gold/40 hover:text-brand-gold transition-all duration-300 no-underline"
          >
            How I Work →
          </a>
        </div>
      </div>
    </section>
  );
}
