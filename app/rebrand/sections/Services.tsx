'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

/* ───── Service Lane Preview Cards (top of section) ───── */
const serviceLanes = [
  {
    label: 'Tier 1 — Flagship',
    title: 'GSA MAS Offer Strategy & Negotiation',
    description:
      'Full offer development and negotiation support for companies entering the Schedule program.',
  },
  {
    label: 'Tier 2 — Retainer',
    title: 'MAS Optimization & Revenue Performance',
    description:
      'Strategic diagnosis, pricing posture correction, modification sequencing, and contract performance engineering for active Schedule holders.',
  },
  {
    label: 'Tier 3 — Project-Based',
    title: 'White-Glove Retainer Advisory',
    description:
      'Fractional authorized negotiator services for companies that treat their GSA MAS contract as a managed revenue channel.',
  },
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
      <span className="font-sans text-white/80 text-[16px] md:text-[17px] leading-relaxed">{text}</span>
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
      className="p-8 md:p-10 border-l-[3px] border-l-brand-gold"
      style={{ background: 'rgba(21,42,69,0.6)' }}
    >
      {/* Tier Label */}
      <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.3em] uppercase mb-3">
        {tierLabel}
      </p>

      {/* Title */}
      <h3 className="font-playfair font-bold text-white text-[26px] md:text-[30px] leading-tight mb-1">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="font-playfair text-brand-gold/80 text-[15px] tracking-wide mb-6">
        {subtitle}
      </p>

      {/* Description */}
      <p className="font-sans text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-8">
        {description}
      </p>

      {/* Scope */}
      {scopeTitle && (
        <p className="font-playfair font-semibold text-white/60 text-[14px] tracking-[0.25em] uppercase mb-3">
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
          <p className="font-playfair font-semibold text-white/60 text-[14px] tracking-[0.25em] uppercase mb-3 mt-6">
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
        <p className="font-playfair text-brand-gold/65 text-[14px] italic mt-6 pt-6 border-t border-white/[0.06]">
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
      className="relative py-24 md:py-32 px-6"
    >
      <div className="max-w-[1000px] mx-auto">

        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.35em] uppercase mb-4">
              Engagement Models
            </p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-[40px] leading-tight mb-4">
              Strategic Advisory for
              <br />
              GSA MAS Contracts
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
            <p className="font-sans text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[600px] mx-auto">
              Civic Strategy Partners operates across three engagement tiers plus standalone
              project-based options. Scope and structure are tailored to where you are and
              what your contract requires.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Service Lane Preview Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {serviceLanes.map((lane, i) => (
            <ScrollReveal key={i} delay={i * 200} scale={true}>
              <div
                className="p-6 border border-white/[0.06] hover:border-brand-gold/20 transition-all duration-300"
                style={{ background: 'rgba(21,42,69,0.4)' }}
              >
                <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.3em] uppercase mb-3">
                  {lane.label}
                </p>
                <h4 className="font-playfair font-bold text-white text-[17px] md:text-[18px] leading-tight mb-3">
                  {lane.title}
                </h4>
                <p className="font-sans text-white/80 text-[15px] leading-relaxed">
                  {lane.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Standalone options note */}
        <div className="text-center mb-20">
          <p className="font-playfair text-white/60 text-[14px] tracking-wide">
            Standalone options: <span className="text-brand-gold/75">MAS Optimization Roadmaps</span> · <span className="text-brand-gold/75">À la Carte Modification Support</span>
          </p>
        </div>

        {/* ── Detailed Tier Cards ── */}
        <div className="space-y-12 mb-24">

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
        <ScrollReveal className="mb-24">
          <div className="p-8 md:p-10 border border-white/[0.06]" style={{ background: 'rgba(21,42,69,0.3)' }}>
            <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.3em] uppercase mb-6">
              Additional Strategic Capabilities
            </p>
            {additionalCapabilities.map((item, i) => (
              <ScopeItem key={i} text={item} />
            ))}
          </div>
        </ScrollReveal>

        {/* ── Investment Philosophy ── */}
        <ScrollReveal className="text-center mb-24">
          <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.35em] uppercase mb-4">
            Investment & Engagement Philosophy
          </p>
          <p className="font-sans text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[680px] mx-auto">
            Engagements are structured as retainers or defined strategic projects — not
            transactional filing services. Pricing reflects direct access to a former GSA 1102,
            fractional authorized negotiator authority, embedded contract leadership, and limited
            client capacity.
          </p>
        </ScrollReveal>

        {/* ── Who This Is For / Not For ── */}
        <ScrollReveal delay={150}>
          <div className="p-8 md:p-12 text-center border-t border-b border-brand-gold/20">
            <h3 className="font-playfair font-bold text-white text-2xl md:text-[30px] leading-tight mb-6">
              Not Every Company Needs This Level
              <br />
              of Contract Leadership.
            </h3>
            <p className="font-sans text-white/80 text-[17px] md:text-[18px] leading-relaxed max-w-[600px] mx-auto">
              If your goal is simply to &ldquo;get on schedule&rdquo; as cheaply as possible, there are
              providers built for that. That is not this firm.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
