'use client';

import { ScrollReveal } from '../components/ScrollReveal';

export default function Footer() {
  const navLinks = ['Home', 'Services', 'About', 'Testimonials', 'FAQ', 'Insights', 'Contact'];

  return (
    <footer className="border-t border-white/[0.06] px-6 py-12">
      <ScrollReveal distance="20px" duration={500}>
        <div className="max-w-[1100px] mx-auto">

          {/* Top row — Logo area + Nav */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            {/* Logo area */}
            <div className="flex items-center gap-3">
              <img
                src="/fy26_update/new_logo_2026_clear.png"
                alt="Civic Strategy Partners"
                className="h-20"
              />
            </div>

            {/* Footer Nav */}
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-playfair font-semibold text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-brand-gold transition-colors duration-300 no-underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-8" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-playfair text-white/60 text-[13px]">
                &copy; 2026 Civic Strategy Partners. All rights reserved.
              </p>
              <p className="font-playfair text-white/20 text-[11px] italic mt-1">
                Virtuum Civium Ductus
              </p>
            </div>
            <p className="font-playfair text-white/25 text-[12px] tracking-[0.15em] uppercase">
              civicstrategypartners.com
            </p>
          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
}
