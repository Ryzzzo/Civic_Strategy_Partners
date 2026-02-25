'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface StaggeredRevealProps {
  children: ReactNode;
  index: number;
  direction?: 'up' | 'left' | 'right' | 'alternate';
  delay?: number;
  className?: string;
  preserveBackdrop?: boolean;
}

export default function StaggeredReveal({
  children,
  index,
  direction = 'up',
  delay = 100,
  className = '',
  preserveBackdrop = false,
}: StaggeredRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!visible) {
      const dir =
        direction === 'alternate'
          ? index % 2 === 0
            ? 'left'
            : 'right'
          : direction;

      switch (dir) {
        case 'left':
          return 'translateX(-30px)';
        case 'right':
          return 'translateX(30px)';
        case 'up':
        default:
          return 'translateY(20px)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: preserveBackdrop ? 1 : (visible ? 1 : 0),
        transform: getTransform(),
        transition: preserveBackdrop
          ? 'transform 0.6s ease-out'
          : 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${index * delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
