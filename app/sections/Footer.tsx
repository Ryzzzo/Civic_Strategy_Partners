'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20">
      {/* Gold gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* ── Zone 1: seal (left) | credentials (center) | SDVOSB (right) ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-8 lg:py-10">

          {/* Left: seal */}
          <Link href="/" className="no-underline shrink-0 flex items-center">
            <img
              src="/fy26_update/new_logo_2026_clear.png"
              alt="Civic Strategy Partners"
              className="h-32 lg:h-40 w-auto opacity-90 object-contain"
            />
          </Link>

          {/* Center: wordmark + compliance */}
          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-playfair font-semibold text-white/90 text-sm lg:text-base tracking-[0.2em] uppercase">
              Civic Strategy Partners
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-2 text-[11px] lg:text-xs text-white/60 tracking-wider">
              <span>UEI: NBDDCG8WGB75</span>
              <span className="text-white/25">·</span>
              <span>CAGE: 168R1</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-2 text-[11px] lg:text-xs text-white/60 tracking-wider">
              <span>NAICS:</span>
              <span>541611</span>
              <span className="text-white/25">·</span>
              <span>541618</span>
              <span className="text-white/25">·</span>
              <span>541990</span>
            </div>
          </div>

          {/* Right: SDVOSB badge */}
          <Image
            src="/sdvosb.png"
            alt="SBA Certified Service-Disabled Veteran-Owned Small Business"
            width={160}
            height={160}
            className="h-auto w-32 lg:w-40 object-contain opacity-95 shrink-0"
          />
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/10" />

        {/* ── Zone 2: sign-off (3 stacked lines, centered) ── */}
        <div className="py-4 flex flex-col items-center text-center space-y-1">
          <p className="font-playfair italic text-white/50 text-xs lg:text-sm">
            Virtuum Civium Ductus
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-2 text-xs text-white/40 font-playfair">
            <a href="#" className="hover:text-white/70 transition-colors no-underline">Terms of Service</a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-white/70 transition-colors no-underline">Privacy Policy</a>
          </div>
          <p className="text-xs text-white/40 font-playfair">
            &copy; 2026 Civic Strategy Partners. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
