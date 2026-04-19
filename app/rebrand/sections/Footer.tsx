'use client';

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/rebrand' },
  { label: 'About', href: '/rebrand/about' },
  { label: 'Testimonials', href: '/rebrand/testimonials' },
  { label: 'Contact', href: '/rebrand/contact' },
];

const naics = [
  { code: '541611', desc: 'Admin & Management Consulting' },
  { code: '541618', desc: 'Other Management Consulting' },
  { code: '541990', desc: 'Other Professional Services' },
];

export default function Footer() {
  return (
    <footer className="relative z-20 pt-5 pb-4 md:pt-6 md:pb-5">
      {/* Gold gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-5 md:pt-6">
        {/* Three-zone credentials grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center md:items-start">

          {/* Left: seal */}
          <div className="flex justify-center md:justify-start">
            <Link href="/rebrand" className="no-underline inline-flex items-center">
              <img
                src="/fy26_update/new_logo_2026_clear.png"
                alt="Civic Strategy Partners"
                className="h-10 md:h-12 w-auto opacity-80 object-contain"
              />
            </Link>
          </div>

          {/* Center: credentials */}
          <div className="flex flex-col items-center text-center text-white/55 text-[11px] md:text-[12px] font-playfair tracking-widest uppercase leading-snug gap-1">
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
              <span>UEI: NBDDCG8WGB75</span>
              <span className="text-white/20">|</span>
              <span>CAGE: 168R1</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-0.5 text-white/50">
              <span className="font-semibold text-white/60">NAICS:</span>
              {naics.map((n, i) => (
                <span key={n.code} className="flex items-center gap-2">
                  <span>{n.code}</span>
                  {i < naics.length - 1 && <span className="text-white/20">·</span>}
                </span>
              ))}
            </div>
            <p className="text-white/40 normal-case tracking-normal text-[11px] mt-1">
              &copy; 2026 Civic Strategy Partners. All rights reserved.
            </p>
          </div>

          {/* Right: SDVOSB + nav */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <Image
              src="/sdvosb.png"
              alt="SBA Certified Service-Disabled Veteran-Owned Small Business"
              width={90}
              height={90}
              className="h-auto w-[70px] md:w-[80px] object-contain opacity-90"
            />
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/50 hover:text-white text-[11px] tracking-widest uppercase transition-colors duration-300 no-underline font-playfair"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Thin separator + legal strip */}
        <div className="h-px w-full bg-white/10 mt-4 mb-3" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-1 text-[11px] font-playfair">
          <span className="text-white/30 italic tracking-wide">Virtuum Civium Ductus</span>
          <div className="flex items-center gap-2 text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors no-underline">Terms of Service</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/60 transition-colors no-underline">Privacy Policy</a>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="hidden md:inline text-white/30 tracking-wider uppercase">civicstrategypartners.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
