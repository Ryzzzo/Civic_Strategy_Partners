'use client';

interface GoldDividerProps {
  width?: number;
  className?: string;
}

export default function GoldDivider({ width = 80, className = '' }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
      <div
        className="h-px bg-gradient-to-r from-transparent to-brand-gold/40"
        style={{ width: `${width * 0.4}px` }}
      />
      <div className="w-1.5 h-1.5 rotate-45 bg-brand-gold/60" />
      <div
        className="h-px bg-gradient-to-l from-transparent to-brand-gold/40"
        style={{ width: `${width * 0.4}px` }}
      />
    </div>
  );
}
