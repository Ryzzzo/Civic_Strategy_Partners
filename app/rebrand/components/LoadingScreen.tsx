'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Skip loading on subsequent navigations within the same session
    if (sessionStorage.getItem('csp-loaded')) {
      setIsLoading(false);
      setShouldRender(false);
      return;
    }

    // Simulate loading progress with ease-out curve
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(1, (100 - prev) * 0.15);
        return Math.min(100, prev + increment);
      });
    }, 50);

    // Minimum display time
    const minTimer = setTimeout(() => {
      setProgress(100);
      sessionStorage.setItem('csp-loaded', 'true');
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(minTimer);
    };
  }, []);

  // Trigger exit when progress reaches 100
  useEffect(() => {
    if (progress >= 100 && isLoading) {
      const exitTimer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, isLoading]);

  // Remove from DOM after fade-out completes
  useEffect(() => {
    if (!isLoading && shouldRender) {
      const timer = setTimeout(() => setShouldRender(false), 700);
      return () => clearTimeout(timer);
    }
  }, [isLoading, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0a1628] transition-opacity duration-[600ms] ease-out ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 100 }}
    >
      {/* CSP Seal */}
      <div
        className={`mb-8 transition-all duration-500 ease-out ${
          progress > 10 ? 'opacity-90 scale-100' : 'opacity-0 scale-[0.8]'
        } ${progress >= 100 ? 'scale-[0.9]' : ''}`}
      >
        <img
          src="/fy26_update/new_logo_2026_clear.png"
          alt="Civic Strategy Partners"
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
        />
      </div>

      {/* Company Name */}
      <h1
        className={`font-playfair font-bold text-white text-lg sm:text-xl tracking-wider mb-8 transition-all duration-400 ease-out ${
          progress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'
        }`}
        style={{ lineHeight: 1.35 }}
      >
        CIVIC STRATEGY PARTNERS
      </h1>

      {/* Gold Progress Bar */}
      <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-gold rounded-full"
          style={{
            width: `${progress}%`,
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className={`font-sans text-white/40 text-xs tracking-widest uppercase mt-6 transition-opacity duration-400 ${
          progress > 60 ? 'opacity-50' : 'opacity-0'
        }`}
      >
        Federal Market Excellence
      </p>
    </div>
  );
}
