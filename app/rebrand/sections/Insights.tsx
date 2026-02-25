'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

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
  return (
    <section
      id="insights"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-[1000px] mx-auto">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            {/* Civic Strategy Briefing logo placeholder */}
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              Civic Strategy Briefing
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ lineHeight: 1.35 }}>
              Insights
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] leading-relaxed max-w-[500px] mx-auto">
              Analysis and perspective from a former GSA Contract Specialist.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Article Cards ── */}
        <div className="space-y-6">
          {articles.map((article, i) => (
            <ScrollReveal key={i} delay={i * 200} direction="right" distance="60px">
              <div
                className="p-5 sm:p-6 md:p-8 lg:p-10 border-l-[3px] border-l-brand-gold/40 hover:border-l-brand-gold hover:shadow-[0_0_24px_rgba(197,153,58,0.08)] transition-all duration-300 cursor-pointer group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
              >
                {/* Tag */}
                <p className="font-playfair font-bold text-brand-gold/90 text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.12em] uppercase mb-3">
                  {article.tag}
                </p>

                {/* Title */}
                <h3 className="font-playfair font-bold text-white text-lg sm:text-xl md:text-[22px] mb-2 group-hover:text-brand-gold transition-colors duration-300" style={{ lineHeight: 1.35 }}>
                  {article.title}
                </h3>

                {/* Byline */}
                {article.byline && (
                  <p className="font-playfair text-white/60 text-[14px] italic mb-4">
                    {article.byline}
                  </p>
                )}

                {/* Synopsis */}
                <p className="font-sans text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
                  {article.synopsis}
                </p>

                {/* Read More */}
                <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase mt-5 group-hover:tracking-[0.15em] transition-all duration-300">
                  Read More →
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* DEV NOTE: These are static placeholders. Kevin will supply final article body copy.
           Article 4 ("The GovCon LinkedIn Problem") is flagged as DO NOT PUBLISH.
           Eventually these will pull from HubSpot API via /api/briefings endpoint. */}

      </div>
    </section>
  );
}
