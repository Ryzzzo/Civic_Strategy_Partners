'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import TierComparison from '../components/TierComparison';

/* ───── Who This Is For / Not For ───── */
const isForItems = [
  'Companies that treat MAS as a revenue channel',
  'Companies that care about pricing posture and margin protection',
  'Companies with internal execution resources',
  'Companies that want insider-level strategic oversight',
  'Companies prepared to operate on retainer',
];

const notForItems = [
  'Low-cost filing seekers',
  'One-time upload support buyers',
  'Firms treating MAS as a credential',
  'Companies unwilling to adjust pricing posture',
  'Organizations seeking volume-based consulting models',
];

/* ───── Tier 1 Scope Items ───── */
const tier1Scope = [
  'New MAS offer development and negotiation',
  'Pricing architecture and posture correction',
  'Modification strategy and sequencing',
  'EPA management',
  'TDR compliance oversight',
  'Contract lifecycle management',
  'Revenue performance alignment',
  'Direct engagement support with contracting officers',
];

/* ───── Tier 2 Includes ───── */
const tier2Includes = [
  'Monthly or bi-weekly strategy sessions',
  'Pricing and compliance guidance',
  'Modification review prior to submission',
  'Risk posture analysis',
  'Government communication strategy',
  'Escalation planning',
];

const tier2OptionalAccess = [
  'CSP-developed templates',
  'Structured submission frameworks',
  'Pre-built modification packages',
  'Offer strategy blueprints',
];

/* ───── Tier 3 Options ───── */
const tier3Options = [
  'MAS Optimization Roadmap',
  'Offer Readiness Diagnostic',
  'Specific Modification Support',
  'Compliance Gap Assessment',
];

/* ───── Additional Capabilities ───── */
const additionalCapabilities = [
  'Proposal development and response strategy',
  'Past performance narratives and capability statements',
  'Teaming agreements and partnership structuring',
  'Compliance readiness — CMMC preparation, supply chain documentation',
];

/* ───── Scope Item Component ───── */
function ScopeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <span className="text-brand-gold mt-1.5 text-[10px]">◆</span>
      <span className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">{text}</span>
    </div>
  );
}

/* ───── Tier Card Component ───── */
function TierCard({
  tierLabel,
  title,
  subtitle,
  description,
  scopeTitle,
  scopeItems,
  optionalTitle,
  optionalItems,
  footnote,
}: {
  tierLabel: string;
  title: string;
  subtitle: string;
  description: string;
  scopeTitle?: string;
  scopeItems: string[];
  optionalTitle?: string;
  optionalItems?: string[];
  footnote?: string;
}) {
  return (
    <div
      className="p-5 sm:p-6 md:p-8 lg:p-10 border-l-[3px] border-l-brand-gold bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-brand-gold/20 hover:shadow-[0_0_24px_rgba(197,153,58,0.08)] transition-all duration-300"
    >
      {/* Tier Label */}
      <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-3">
        {tierLabel}
      </p>

      {/* Title */}
      <h3 className="font-playfair font-bold text-white text-lg sm:text-xl md:text-[26px] lg:text-[30px] mb-1" style={{ lineHeight: 1.35 }}>
        {title}
      </h3>

      {/* Subtitle */}
      <p className="font-playfair text-brand-gold/90 text-sm sm:text-base md:text-lg tracking-wide mb-4 sm:mb-6">
        {subtitle}
      </p>

      {/* Description */}
      <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 sm:mb-8">
        {description}
      </p>

      {/* Scope */}
      {scopeTitle && (
        <p className="font-playfair font-semibold text-white/60 text-[13px] sm:text-[14px] tracking-[0.25em] uppercase mb-3">
          {scopeTitle}
        </p>
      )}
      <div className="mb-6">
        {scopeItems.map((item, i) => (
          <ScopeItem key={i} text={item} />
        ))}
      </div>

      {/* Optional Access */}
      {optionalTitle && optionalItems && (
        <>
          <p className="font-playfair font-semibold text-white/60 text-[13px] sm:text-[14px] tracking-[0.25em] uppercase mb-3 mt-6">
            {optionalTitle}
          </p>
          <div className="mb-6">
            {optionalItems.map((item, i) => (
              <ScopeItem key={i} text={item} />
            ))}
          </div>
        </>
      )}

      {/* Footnote */}
      {footnote && (
        <p className="font-playfair text-brand-gold/90 text-sm sm:text-base italic mt-6 pt-6 border-t border-white/[0.06]">
          {footnote}
        </p>
      )}
    </div>
  );
}

/* ───── Main Services Section ───── */
export default function Services() {
  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-[1000px] mx-auto">

        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              Engagement Models
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] mb-4" style={{ lineHeight: 1.35 }}>
              Strategic Advisory for
              <br />
              GSA MAS Contracts
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[600px] mx-auto">
              Civic Strategy Partners operates across three engagement tiers plus standalone
              project-based options. Scope and structure are tailored to where you are and
              what your contract requires.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Detailed Tier Cards ── */}
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-24 max-w-4xl mx-auto">

          {/* Tier 1 */}
          <ScrollReveal direction="left" distance="80px">
            <TierCard
              tierLabel="Tier 1 — Fractional Authorized Negotiator"
              title="Embedded Executive Advisory"
              subtitle="The firm's core and most senior engagement model"
              description="I serve as your fractional GSA MAS authorized negotiator and executive advisor. This model replaces the need for a full-time MAS contract manager while delivering senior-level oversight with direct Principal access."
              scopeTitle="Scope may include"
              scopeItems={tier1Scope}
              footnote="Retainer-based. Limited engagements."
            />
          </ScrollReveal>

          {/* Tier 2 */}
          <ScrollReveal direction="right" distance="80px">
            <TierCard
              tierLabel="Tier 2 — Strategic Retainer Advisory"
              title="Executive Coaching & Oversight"
              subtitle="Disciplined oversight and strategic direction"
              description="For companies that do not require full embedding but want disciplined oversight and strategic direction. You execute internally. I provide oversight, correction, and positioning strategy."
              scopeTitle="Includes"
              scopeItems={tier2Includes}
              optionalTitle="Optional access may include"
              optionalItems={tier2OptionalAccess}
            />
          </ScrollReveal>

          {/* Tier 3 */}
          <ScrollReveal direction="left" distance="80px">
            <TierCard
              tierLabel="Tier 3 — Project-Based Support"
              title="Defined Scope. Clear Outcome."
              subtitle="Targeted strategic projects"
              description="For companies that need specific, bounded deliverables rather than ongoing advisory. Each engagement is scoped, priced, and delivered as a standalone project."
              scopeItems={tier3Options}
              footnote="Clear scope. Defined outcome."
            />
          </ScrollReveal>
        </div>

        {/* ── Tier Comparison Table ── */}
        <TierComparison />

        {/* ── Additional Strategic Capabilities ── */}
        <ScrollReveal className="mb-16 sm:mb-24 max-w-4xl mx-auto">
          <div className="p-5 sm:p-6 md:p-8 lg:p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase mb-6">
              Additional Strategic Capabilities
            </p>
            {additionalCapabilities.map((item, i) => (
              <ScopeItem key={i} text={item} />
            ))}
          </div>
        </ScrollReveal>

        {/* ── Investment Philosophy ── */}
        <ScrollReveal className="text-center mb-16 sm:mb-24">
          <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
            Investment & Engagement Philosophy
          </p>
          <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[680px] mx-auto">
            Engagements are structured as retainers or defined strategic projects — not
            transactional filing services. Pricing reflects direct access to a former GSA 1102,
            fractional authorized negotiator authority, embedded contract leadership, and limited
            client capacity.
          </p>
        </ScrollReveal>

        {/* ── Who This Is For / Not For ── */}
        <ScrollReveal delay={150}>
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="font-playfair font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-[30px] mb-4" style={{ lineHeight: 1.35 }}>
              Not Every Company Needs This Level
              <br />
              of Contract Leadership.
            </h3>
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[600px] mx-auto">
              If your goal is simply to &ldquo;get on schedule&rdquo; as cheaply as possible, there are
              providers built for that. That is not this firm.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* LEFT — This IS For */}
          <ScrollReveal direction="left" distance="60px">
            <div className="h-full bg-white/[0.06] backdrop-blur-md border border-brand-gold/20 rounded-2xl p-6 sm:p-8">
              <h4 className="font-playfair font-bold text-brand-gold text-lg sm:text-xl mb-6" style={{ lineHeight: 1.35 }}>
                This Firm IS For
              </h4>
              <ul className="space-y-4">
                {isForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-gold mt-0.5 flex-shrink-0 font-bold">&#10003;</span>
                    <span className="font-sans text-white/85 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* RIGHT — This Is NOT For */}
          <ScrollReveal direction="right" distance="60px">
            <div className="h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
              <h4 className="font-playfair font-bold text-white/50 text-lg sm:text-xl mb-6" style={{ lineHeight: 1.35 }}>
                This Firm Is NOT For
              </h4>
              <ul className="space-y-4">
                {notForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white/30 mt-0.5 flex-shrink-0 font-bold">&#10005;</span>
                    <span className="font-sans text-white/45 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
