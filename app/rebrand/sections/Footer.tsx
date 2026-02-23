'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/ScrollReveal';

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
    <footer className="border-t border-white/[0.06] px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <ScrollReveal distance="20px" duration={500}>
        <div className="max-w-[1100px] mx-auto">

          {/* Top row — Logo area + Nav */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6 sm:mb-8">
            {/* Logo area */}
            <Link href="/rebrand" className="flex items-center gap-3 no-underline">
              <img
                src="/fy26_update/new_logo_2026_clear.png"
                alt="Civic Strategy Partners"
                className="h-16 sm:h-20"
              />
            </Link>

            {/* Footer Nav */}
            <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-playfair font-semibold text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-brand-gold transition-colors duration-300 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-6" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left space-y-1">
              <p className="font-playfair text-white/60 text-xs sm:text-[13px]">
                &copy; 2026 Civic Strategy Partners. All rights reserved.
              </p>
              <p className="font-playfair text-white/60 text-[11px] italic">
                Virtuum Civium Ductus
              </p>
            </div>

            {/* Legal + domain */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-3 font-playfair text-white/40 text-[10px] sm:text-[11px] tracking-[0.1em] uppercase">
                <a href="#" className="hover:text-white/60 transition-colors no-underline">Terms of Service</a>
                <span>|</span>
                <a href="#" className="hover:text-white/60 transition-colors no-underline">Privacy Policy</a>
              </div>
              <p className="font-playfair text-white/60 text-[11px] sm:text-[12px] tracking-[0.15em] uppercase">
                civicstrategypartners.com
              </p>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
}
