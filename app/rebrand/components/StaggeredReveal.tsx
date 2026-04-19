'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface StaggeredRevealProps {
  children: ReactNode;
  index: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'alternate';
  delay?: number;
  baseDelay?: number;
  threshold?: number;
  className?: string;
  preserveBackdrop?: boolean;
}

export default function StaggeredReveal({
  children,
  index,
  direction = 'up',
  delay = 100,
  baseDelay = 0,
  threshold = 0.15,
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
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

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
        case 'down':
          return 'translateY(-20px)';
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
        transitionDelay: `${index * delay + baseDelay}ms`,
      }}
    >
      {children}
    </div>
  );
}
