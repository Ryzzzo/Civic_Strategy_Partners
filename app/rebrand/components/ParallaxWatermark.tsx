'use client';

import { useEffect, useState } from 'react';

export default function ParallaxWatermark() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="hidden md:flex fixed inset-0 items-center justify-center pointer-events-none overflow-hidden"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      <img
        src="/fy26_update/new_logo_2026_clear.png"
        alt=""
        className="object-contain"
        style={{
          width: 'min(95vmin, 800px)',
          height: 'min(95vmin, 800px)',
          opacity: 0.10,
          transform: `translateY(${offset}px)`,
        }}
      />
    </div>
  );
}
