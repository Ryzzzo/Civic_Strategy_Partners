'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import StaggeredReveal from '../components/StaggeredReveal';

const articles = [
  {
    tag: 'GSA MAS Strategy',
    title: 'The Top 10 Reasons Why the GSA Multiple Award Schedule (MAS) Program Is a Structural Advantage in 2026',
    byline: 'From a Former GS-1102',
    synopsis:
      'A data- and experience-driven breakdown of why GSA MAS remains one of the strongest federal contract vehicles available — covering procurement efficiency, contract ceiling advantages, agency preference, competitive positioning, and more.',
  },
  {
    tag: 'GSA MAS Strategy · Market Readiness',
    title: 'The "Golden Ticket" Myth: When GSA MAS Is a Bad Bet',
    byline: '',
    synopsis:
      'A counterbalance to the hype — direct analysis of when GSA MAS is the wrong vehicle, common mistakes companies make by pursuing a Schedule before they\'re ready, and what the real prerequisites for a productive MAS contract look like.',
  },
  {
    tag: 'GSA MAS · Compliance · Policy',
    title: 'The MAS Program Is Being Rebuilt Under Your Feet: OLMs, TDR, EPA Clauses, and What the RFO Means for Your Contract',
    byline: '',
    synopsis:
      'A practitioner\'s breakdown of the structural changes inside the MAS program — OLMs, Transactional Data Reporting, EPA clause evolution, and what the latest Refresh/RFO updates mean for contract holders.',
  },
];

function readingTime(text: string) {
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function Insights() {
  const [featured, ...remaining] = articles;

  return (
    <section
      id="insights"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-[1000px] mx-auto">

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

        {/* ── Featured Briefing ── */}
        <ScrollReveal delay={150}>
          <article className="bg-white/[0.06] backdrop-blur-md border border-brand-gold/15 rounded-2xl p-6 sm:p-8 md:p-10 mb-8 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,153,58,0.06)] hover:border-brand-gold/25">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brand-gold/70 text-xs font-sans uppercase tracking-widest">Featured Briefing</span>
              <span className="h-px flex-1 bg-brand-gold/20" />
              <span className="text-white/40 text-xs font-sans">{readingTime(featured.synopsis)}</span>
            </div>
            <h3
              className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl mb-4 group-hover:text-brand-gold/90 transition-colors duration-300"
              style={{ lineHeight: 1.35 }}
            >
              {featured.title}
            </h3>
            {featured.byline && (
              <p className="font-playfair text-white/50 text-[14px] italic mb-4">
                {featured.byline}
              </p>
            )}
            <p className="font-sans text-white/60 text-[15px] leading-relaxed mb-6 max-w-3xl">
              {featured.synopsis}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-brand-gold/60 text-xs font-sans uppercase tracking-widest">{featured.tag}</span>
              <span className="text-brand-gold text-sm font-sans group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                Read Briefing <span aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </article>
        </ScrollReveal>

        {/* ── Remaining Briefings — 2 column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {remaining.map((article, i) => (
            <StaggeredReveal key={i} index={i} direction="up" delay={120} className="flex">
              <article className="flex flex-col h-full bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,153,58,0.06)] hover:border-brand-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-brand-gold/60 text-xs font-sans uppercase tracking-widest">{article.tag}</span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-white/30 text-xs font-sans">{readingTime(article.synopsis)}</span>
                </div>
                <h3
                  className="font-playfair font-bold text-white text-lg sm:text-xl mb-3 group-hover:text-brand-gold/90 transition-colors duration-300"
                  style={{ lineHeight: 1.35 }}
                >
                  {article.title}
                </h3>
                <p className="flex-1 font-sans text-white/55 text-[14px] leading-relaxed mb-5">
                  {article.synopsis}
                </p>
                <div className="flex items-center justify-end pt-4 border-t border-white/[0.06]">
                  <span className="text-brand-gold text-sm font-sans group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    Read Briefing <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </article>
            </StaggeredReveal>
          ))}
        </div>

        {/* DEV NOTE: These are static placeholders. Kevin will supply final article body copy.
           Article 4 ("The GovCon LinkedIn Problem") is flagged as DO NOT PUBLISH.
           Eventually these will pull from HubSpot API via /api/briefings endpoint. */}

      </div>
    </section>
  );
}
