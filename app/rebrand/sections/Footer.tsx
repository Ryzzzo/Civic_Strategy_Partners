'use client';

import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/rebrand' },
  { label: 'Services', href: '/rebrand/services' },
  { label: 'About', href: '/rebrand/about' },
  { label: 'Testimonials', href: '/rebrand/testimonials' },
  { label: 'FAQ', href: '/rebrand/faq' },
  { label: 'Insights', href: '/rebrand/insights' },
  { label: 'Contact', href: '/rebrand/contact' },
];

export default function Footer() {
  return (
    <footer className="relative z-20 py-6 md:py-8">
      {/* Gold gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-6">
        {/* Row 1: Logo + Nav Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <Link href="/rebrand" className="no-underline">
            <img
              src="/fy26_update/new_logo_2026_clear.png"
              alt="CSP"
              className="h-10 w-auto opacity-80 object-contain aspect-square"
            />
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors duration-300 no-underline font-playfair"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Thin separator */}
        <div className="h-px w-full bg-white/10 mb-4" />

        {/* Row 2: Copyright + Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <div className="text-white/40 text-center md:text-left font-playfair">
            <span>&copy; 2026 Civic Strategy Partners. All rights reserved.</span>
            <span className="block md:inline md:ml-3 italic text-white/30">
              Virtuum Civium Ductus
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/40 font-playfair">
            <a href="#" className="hover:text-white/60 transition-colors no-underline">Terms of Service</a>
            <span className="text-white/20">|</span>
            <a href="#" className="hover:text-white/60 transition-colors no-underline">Privacy Policy</a>
          </div>
        </div>

        {/* Domain */}
        <p className="text-center md:text-right text-[11px] text-white/30 mt-2 tracking-wider uppercase font-playfair">
          civicstrategypartners.com
        </p>
      </div>
    </footer>
  );
}
