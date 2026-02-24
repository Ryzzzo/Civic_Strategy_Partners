'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

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
      className="p-5 sm:p-6 md:p-8 lg:p-10 border-l-[3px] border-l-brand-gold bg-white/5 backdrop-blur-md border border-white/10 rounded-xl"
    >
      {/* Tier Label */}
      <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-3">
        {tierLabel}
      </p>

      {/* Title */}
      <h3 className="font-playfair font-bold text-white text-lg sm:text-xl md:text-[26px] lg:text-[30px] leading-[1.3] mb-1">
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
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-[1.3] mb-4">
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
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-24">

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

        {/* ── Additional Strategic Capabilities ── */}
        <ScrollReveal className="mb-16 sm:mb-24">
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
          <div className="p-5 sm:p-6 md:p-8 lg:p-12 text-center border-t border-b border-brand-gold/20">
            <h3 className="font-playfair font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-[1.3] mb-4 sm:mb-6">
              Not Every Company Needs This Level
              <br />
              of Contract Leadership.
            </h3>
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed max-w-[600px] mx-auto">
              If your goal is simply to &ldquo;get on schedule&rdquo; as cheaply as possible, there are
              providers built for that. That is not this firm.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
