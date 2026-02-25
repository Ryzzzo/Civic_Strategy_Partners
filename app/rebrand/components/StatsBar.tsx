'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '8+', label: 'Years Federal Contracting' },
  { value: '1102', label: 'Former GSA Specialist Series' },
  { value: 'OIF', label: 'Marine Corps Veteran' },
  { value: 'MBA', label: 'Advanced Business Degree' },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-10 md:py-14 max-w-3xl mx-auto">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`text-center transition-all duration-700 ${
            visible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <p
            className="font-playfair font-bold text-brand-gold text-2xl sm:text-3xl md:text-4xl mb-2"
            style={{ lineHeight: 1.35 }}
          >
            {stat.value}
          </p>
          <p className="font-sans text-white/60 text-xs sm:text-sm tracking-wider uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
