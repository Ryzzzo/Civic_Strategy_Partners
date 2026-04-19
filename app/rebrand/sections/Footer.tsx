'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20">
      {/* Gold gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* ── Row 1: credentials zone ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 lg:py-10">

          {/* Left: seal + wordmark */}
          <Link href="/rebrand" className="flex items-center gap-3 no-underline shrink-0">
            <img
              src="/fy26_update/new_logo_2026_clear.png"
              alt="Civic Strategy Partners"
              className="h-10 w-auto opacity-80 object-contain"
            />
            <span className="font-playfair text-white/80 text-sm md:text-[15px] tracking-[0.12em] uppercase">
              Civic Strategy Partners
            </span>
          </Link>

          {/* Center: credentials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left text-white/60 text-xs lg:text-sm font-playfair tracking-wider uppercase leading-relaxed gap-1">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-1">
              <span>UEI: NBDDCG8WGB75</span>
              <span className="text-white/25">·</span>
              <span>CAGE: 168R1</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-2 gap-y-1">
              <span>NAICS:</span>
              <span>541611</span>
              <span className="text-white/25">·</span>
              <span>541618</span>
              <span className="text-white/25">·</span>
              <span>541990</span>
            </div>
          </div>

          {/* Right: SDVOSB badge */}
          <div className="shrink-0">
            <Image
              src="/sdvosb.png"
              alt="SBA Certified Service-Disabled Veteran-Owned Small Business"
              width={90}
              height={90}
              className="h-auto w-[70px] md:w-[80px] lg:w-[90px] object-contain opacity-90"
            />
          </div>
        </div>

        {/* ── Row 2: sign-off ── */}
        <div className="border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-4 text-xs text-white/40 font-playfair">
            <p className="text-center md:text-left">
              &copy; 2026 Civic Strategy Partners. All rights reserved.
              <span className="mx-2 text-white/20">·</span>
              <span className="italic text-white/35">Virtuum Civium Ductus</span>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
              <a href="#" className="hover:text-white/60 transition-colors no-underline">Terms of Service</a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-white/60 transition-colors no-underline">Privacy Policy</a>
              <span className="text-white/20">|</span>
              <span className="tracking-wider uppercase text-white/35">civicstrategypartners.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
