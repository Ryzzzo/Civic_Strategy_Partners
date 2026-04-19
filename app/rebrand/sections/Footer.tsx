'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20">
      {/* Gold gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 py-12 lg:py-16 xl:py-20 flex flex-col items-center text-center">

        {/* ── Zone 1: Brand anchor ── */}
        <Link href="/rebrand" className="flex flex-col items-center no-underline">
          <img
            src="/fy26_update/new_logo_2026_clear.png"
            alt="Civic Strategy Partners"
            className="h-12 sm:h-14 lg:h-16 w-auto opacity-90 object-contain mb-4"
          />
          <span className="font-playfair font-semibold text-white/90 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase">
            Civic Strategy Partners
          </span>
        </Link>

        {/* ── Divider 1 ── */}
        <div className="w-60 border-t border-white/10 my-8" />

        {/* ── Zone 2: Compliance ── */}
        <div className="flex flex-col items-center gap-2 text-white/60 text-xs lg:text-sm font-playfair tracking-wider uppercase">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
            <span>UEI: NBDDCG8WGB75</span>
            <span className="text-white/25">·</span>
            <span>CAGE: 168R1</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <span>NAICS:</span>
            <span>541611</span>
            <span className="text-white/25">·</span>
            <span>541618</span>
            <span className="text-white/25">·</span>
            <span>541990</span>
          </div>
        </div>

        {/* ── Zone 3: SDVOSB badge ── */}
        <div className="mt-8">
          <Image
            src="/sdvosb.png"
            alt="SBA Certified Service-Disabled Veteran-Owned Small Business"
            width={120}
            height={120}
            className="h-auto w-[100px] lg:w-[120px] object-contain opacity-95"
          />
        </div>

        {/* ── Divider 2 ── */}
        <div className="w-60 border-t border-white/10 my-8" />

        {/* ── Zone 4: Sign-off ── */}
        <div className="flex flex-col items-center gap-2 text-xs text-white/40 font-playfair">
          <p>
            &copy; 2026 Civic Strategy Partners
            <span className="mx-2 text-white/20">·</span>
            <span className="italic text-white/50">Virtuum Civium Ductus</span>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <a href="#" className="hover:text-white/70 transition-colors no-underline">Terms of Service</a>
            <span className="text-white/20">·</span>
            <a href="#" className="hover:text-white/70 transition-colors no-underline">Privacy Policy</a>
            <span className="text-white/20">·</span>
            <span className="tracking-wider uppercase text-white/50">civicstrategypartners.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
