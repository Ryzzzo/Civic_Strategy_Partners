'use client';

import { useFadeIn } from '../hooks/useFadeIn';
import GoldDivider from '../components/GoldDivider';

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

export default function Insights() {
  const headerFade = useFadeIn();
  const articlesFade = useFadeIn();

  return (
    <section
      id="insights"
      className="relative py-24 md:py-32 px-6"
      style={{
        background: 'linear-gradient(165deg, #0C1B2E 0%, #152A45 50%, #0C1B2E 100%)',
      }}
    >
      <div className="max-w-[1000px] mx-auto">

        {/* ── Header ── */}
        <div
          ref={headerFade.ref}
          className={`text-center mb-16 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
            headerFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Civic Strategy Briefing logo placeholder */}
          <p className="font-cormorant font-semibold text-brand-gold text-[12px] tracking-[0.35em] uppercase mb-4">
            Civic Strategy Briefing
          </p>
          <h2 className="font-playfair font-bold text-white text-3xl md:text-[40px] leading-tight">
            Insights
          </h2>
          <div className="flex justify-center">
            <GoldDivider width={60} />
          </div>
          <p className="font-sans text-white/55 text-[16px] leading-relaxed max-w-[500px] mx-auto">
            Analysis and perspective from a former GSA Contract Specialist.
          </p>
        </div>

        {/* ── Article Cards ── */}
        <div
          ref={articlesFade.ref}
          className={`space-y-6 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
            articlesFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {articles.map((article, i) => (
            <div
              key={i}
              className="p-8 md:p-10 border-l-[3px] border-l-brand-gold/40 hover:border-l-brand-gold transition-all duration-300 cursor-pointer group"
              style={{ background: 'rgba(21,42,69,0.5)' }}
            >
              {/* Tag */}
              <p className="font-cormorant font-semibold text-brand-gold/70 text-[11px] tracking-[0.25em] uppercase mb-3">
                {article.tag}
              </p>

              {/* Title */}
              <h3 className="font-playfair font-bold text-white text-xl md:text-[22px] leading-tight mb-2 group-hover:text-brand-gold transition-colors duration-300">
                {article.title}
              </h3>

              {/* Byline */}
              {article.byline && (
                <p className="font-cormorant text-white/40 text-[14px] italic mb-4">
                  {article.byline}
                </p>
              )}

              {/* Synopsis */}
              <p className="font-sans text-white/55 text-[15px] leading-relaxed">
                {article.synopsis}
              </p>

              {/* Read More */}
              <p className="font-cormorant font-semibold text-brand-gold text-[13px] tracking-[0.15em] uppercase mt-5 group-hover:tracking-[0.2em] transition-all duration-300">
                Read More →
              </p>
            </div>
          ))}
        </div>

        {/* DEV NOTE: These are static placeholders. Kevin will supply final article body copy.
           Article 4 ("The GovCon LinkedIn Problem") is flagged as DO NOT PUBLISH.
           Eventually these will pull from HubSpot API via /api/briefings endpoint. */}

      </div>
    </section>
  );
}
