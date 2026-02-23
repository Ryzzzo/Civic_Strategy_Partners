'use client';

import { useState, useEffect } from 'react';

const navLinks = ['Home', 'Services', 'About', 'Testimonials', 'FAQ', 'Insights', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-400 ${
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
        <a href="#home" className="flex items-center gap-3 no-underline">
          <img
            src="/fy26_update/new_logo_2026_clear.png"
            alt="Civic Strategy Partners"
            className={`transition-all duration-400 ${scrolled ? 'h-16' : 'h-24'}`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-cormorant font-semibold text-[13px] tracking-[0.12em] uppercase text-white/70 hover:text-brand-gold transition-colors duration-300 no-underline"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white/70 hover:text-brand-gold transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
