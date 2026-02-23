'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/rebrand' },
  { label: 'Services', href: '/rebrand/services' },
  { label: 'About', href: '/rebrand/about' },
  { label: 'Testimonials', href: '/rebrand/testimonials' },
  { label: 'FAQ', href: '/rebrand/faq' },
  { label: 'Insights', href: '/rebrand/insights' },
  { label: 'Contact', href: '/rebrand/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/rebrand') return pathname === '/rebrand';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 transition-all duration-400 ${
        scrolled || mobileOpen
          ? 'bg-[#0a1628]/95 backdrop-blur-md border-b border-brand-gold/10'
          : 'md:bg-transparent md:backdrop-blur-none bg-[#0a1628] border-b border-transparent'
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-400 ${
          scrolled ? 'h-16 lg:h-20' : 'h-16 lg:h-28 xl:h-32'
        }`}
      >
        {/* Logo — hidden on mobile and tablet, shown on desktop (lg+) */}
        <Link href="/rebrand" className="hidden lg:flex items-center gap-3 no-underline">
          <img
            src="/fy26_update/new_logo_2026_clear.png"
            alt="Civic Strategy Partners"
            className={`transition-all duration-400 ${scrolled ? 'h-12 lg:h-16' : 'h-16 lg:h-20 xl:h-24'}`}
          />
        </Link>

        {/* Desktop + Tablet Navigation — centered on tablet, right-aligned on desktop */}
        <div className="hidden md:flex items-center justify-center lg:justify-end gap-4 lg:gap-7 w-full lg:w-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-playfair font-semibold text-[12px] lg:text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 no-underline ${
                isActive(link.href)
                  ? 'text-brand-gold'
                  : 'text-white/70 hover:text-brand-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button — ALWAYS visible on mobile, no conditions */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 min-w-[44px] min-h-[44px] text-white z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu — absolute dropdown */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1628]/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-6 py-3 min-h-[44px] flex items-center font-playfair font-semibold text-sm tracking-[0.12em] uppercase transition-colors duration-300 no-underline ${
                  isActive(link.href)
                    ? 'text-brand-gold'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
