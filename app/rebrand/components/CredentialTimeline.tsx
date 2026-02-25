'use client';

import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '2003',
    title: 'Marine Corps — Operation Iraqi Freedom',
    description:
      'Served in the United States Marine Corps during OIF. Built the discipline, structure, and mission-first mindset that defines the firm today.',
  },
  {
    year: '1102 Series',
    title: 'GSA Contract Specialist',
    description:
      'Served as a federal 1102 Contract Specialist within GSA, gaining insider knowledge of how the government evaluates, negotiates, and awards MAS contracts.',
  },
  {
    year: 'MBA',
    title: 'Advanced Business Degree',
    description:
      'Completed an MBA, adding formal business strategy and financial analysis capabilities to deep federal contracting expertise.',
  },
  {
    year: 'Present',
    title: 'Civic Strategy Partners — Principal',
    description:
      'Founded CSP to provide insider-level GSA MAS consulting. Operates as a fractional authorized negotiator embedded directly within client companies.',
  },
];

export default function CredentialTimeline() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto py-8">
      {/* Vertical timeline line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/40 via-brand-gold/20 to-transparent" />

      {milestones.map((milestone, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          data-index={i}
          className={`relative pl-16 md:pl-20 pb-12 last:pb-0 transition-all duration-700 ${
            visibleItems.has(i)
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-5'
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {/* Timeline dot */}
          <div className="absolute left-[16px] md:left-[24px] top-1 w-4 h-4 rounded-full border-2 border-brand-gold bg-[#0a1628]" style={{ zIndex: 10 }} />

          {/* Year badge */}
          <span className="inline-block font-playfair font-bold text-brand-gold text-sm tracking-wider mb-2">
            {milestone.year}
          </span>

          {/* Title */}
          <h4
            className="font-playfair font-bold text-white text-lg md:text-xl mb-2"
            style={{ lineHeight: 1.35 }}
          >
            {milestone.title}
          </h4>

          {/* Description */}
          <p
            className="font-sans text-[15px] leading-relaxed max-w-xl"
            style={{ color: 'rgba(255, 255, 255, 0.65)' }}
          >
            {milestone.description}
          </p>
        </div>
      ))}
    </div>
  );
}
