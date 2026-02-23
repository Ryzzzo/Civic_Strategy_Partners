'use client';

interface GoldDividerProps {
  width?: number;
  className?: string;
}

export default function GoldDivider({ width = 80, className = '' }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
      <div
        className="h-px bg-gradient-to-r from-transparent to-brand-gold/50"
        style={{ width: `${width * 0.55}px` }}
      />
      <div className="w-2.5 h-2.5 rotate-45 bg-brand-gold/70" />
      <div
        className="h-px bg-gradient-to-l from-transparent to-brand-gold/50"
        style={{ width: `${width * 0.55}px` }}
      />
    </div>
  );
}
