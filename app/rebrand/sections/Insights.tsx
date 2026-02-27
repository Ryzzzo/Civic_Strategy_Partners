'use client';

import { useEffect, useState } from 'react';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import StaggeredReveal from '../components/StaggeredReveal';

interface Briefing {
  title: string;
  publishDate: string;
  rawPublishDate: string;
  excerpt: string;
  fullContent: string;
  canonicalUrl: string | null;
  linkedInUrl: string;
  authorName: string;
  authorAvatar: string;
}

function readingTime(content: string) {
  const text = content?.replace(/<[^>]*>/g, '') || '';
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export default function Insights() {
  const [briefings, setBriefings] = useState<Briefing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/briefings')
      .then((res) => res.json())
      .then((data) => {
        setBriefings(data.briefings || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const [featured, ...remaining] = briefings;

  return (
    <section
      id="insights"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              Civic Strategy Briefing
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ lineHeight: 1.35 }}>
              Strategic Intelligence
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] leading-relaxed max-w-[500px] mx-auto">
              Analysis and perspective from a former GSA Contract Specialist.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Loading State ── */}
        {loading && (
          <div className="text-center py-16">
            <div className="inline-block h-8 w-8 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
            <p className="text-white/50 text-sm font-sans mt-4">Loading briefings&hellip;</p>
          </div>
        )}

        {/* ── Empty / Error State ── */}
        {!loading && (error || briefings.length === 0) && (
          <div className="text-center py-16">
            <p className="text-white/60 text-sm font-sans">
              No briefings available at this time. Please check back soon.
            </p>
          </div>
        )}

        {/* ── Featured Briefing ── */}
        {!loading && featured && (
          <ScrollReveal delay={150} preserveBackdrop>
            <a
              href={featured.canonicalUrl || featured.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <article className="bg-white/[0.06] backdrop-blur-md border border-brand-gold/15 rounded-2xl p-6 sm:p-8 md:p-10 mb-8 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,153,58,0.06)] hover:border-brand-gold/25">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-brand-gold/70 text-xs font-sans uppercase tracking-widest">Featured Briefing</span>
                  <span className="h-px flex-1 bg-brand-gold/20" />
                  <span className="text-white/40 text-xs font-sans">{readingTime(featured.fullContent || featured.excerpt)}</span>
                </div>
                <h3
                  className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl mb-4 group-hover:text-brand-gold/90 transition-colors duration-300"
                  style={{ lineHeight: 1.35 }}
                >
                  {featured.title}
                </h3>
                <p className="font-sans text-[15px] leading-relaxed mb-6 max-w-3xl" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-sans">{featured.publishDate}</span>
                  <span className="text-brand-gold text-sm font-sans group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    Read Briefing <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </article>
            </a>
          </ScrollReveal>
        )}

        {/* ── Remaining Briefings — 2 column grid ── */}
        {!loading && remaining.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {remaining.map((briefing, i) => (
              <StaggeredReveal key={briefing.rawPublishDate || i} index={i} direction="down" delay={150} className="flex" preserveBackdrop>
                <a
                  href={briefing.canonicalUrl || briefing.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full"
                >
                  <article className="flex flex-col h-full w-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,153,58,0.06)] hover:border-brand-gold/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-white/40 text-xs font-sans">{briefing.publishDate}</span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="text-white/30 text-xs font-sans">{readingTime(briefing.fullContent || briefing.excerpt)}</span>
                    </div>
                    <h3
                      className="font-playfair font-bold text-white text-lg sm:text-xl mb-3 group-hover:text-brand-gold/90 transition-colors duration-300"
                      style={{ lineHeight: 1.35 }}
                    >
                      {briefing.title}
                    </h3>
                    <p className="flex-1 font-sans text-[14px] leading-relaxed mb-5" style={{ color: 'rgba(255, 255, 255, 0.55)' }}>
                      {briefing.excerpt}
                    </p>
                    <div className="flex items-center justify-end pt-4 border-t border-white/[0.06]">
                      <span className="text-brand-gold text-sm font-sans group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                        Read Briefing <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </article>
                </a>
              </StaggeredReveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
