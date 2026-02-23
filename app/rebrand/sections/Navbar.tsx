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
        scrolled
          ? 'bg-brand-navy-deep/95 backdrop-blur-md border-b border-brand-gold/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between transition-all duration-400 ${
          scrolled ? 'h-20' : 'h-32'
        }`}
      >
        {/* Logo Area */}
        <Link href="/rebrand" className="flex items-center gap-3 no-underline">
          <img
            src="/fy26_update/new_logo_2026_clear.png"
            alt="Civic Strategy Partners"
            className={`transition-all duration-400 ${scrolled ? 'h-12 sm:h-16' : 'h-16 sm:h-20 md:h-24'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-playfair font-semibold text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 no-underline ${
                isActive(link.href)
                  ? 'text-brand-gold'
                  : 'text-white/70 hover:text-brand-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/70 hover:text-brand-gold transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden pb-6 border-t border-white/[0.06]">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-playfair font-semibold text-[14px] tracking-[0.12em] uppercase transition-colors duration-300 no-underline px-2 py-2.5 min-h-[44px] flex items-center ${
                  isActive(link.href)
                    ? 'text-brand-gold'
                    : 'text-white/70 hover:text-brand-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
