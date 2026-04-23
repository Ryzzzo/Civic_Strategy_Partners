'use client';

interface GoldDividerProps {
  width?: number;
  className?: string;
}

export default function GoldDivider({ width = 80, className = '' }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
      <div
        className="h-px bg-gradient-to-r from-transparent to-brand-gold/50 origin-right"
        style={{
          width: `${width * 0.55}px`,
          animation: 'divider-draw 0.8s ease-out 0.2s both',
        }}
      />
      <div
        className="w-2.5 h-2.5 bg-brand-gold/70"
        style={{ animation: 'diamond-pop 0.5s ease-out 0.6s both' }}
      />
      <div
        className="h-px bg-gradient-to-l from-transparent to-brand-gold/50 origin-left"
        style={{
          width: `${width * 0.55}px`,
          animation: 'divider-draw 0.8s ease-out 0.2s both',
        }}
      />
    </div>
  );
}
