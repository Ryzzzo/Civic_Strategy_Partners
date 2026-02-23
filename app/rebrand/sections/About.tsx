'use client';

import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

const credentials = [
  'Former GSA Contract Specialist (GS-1102) — MAS program',
  'Federal procurement experience across GSA, Department of Labor JCAS, and VA healthcare acquisitions',
  '8+ years federal contracting experience',
  'Marine Corps veteran — Operation Iraqi Freedom I, 2003',
  'MBA',
  'VP of Education, NCMA Boston Chapter',
];

const pursuing = [
  'PMP',
  'CFCM',
  'Agile Lean Six Sigma Black Belt',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6"
      style={{
        background: 'linear-gradient(180deg, #152A45 0%, #0C1B2E 50%, #152A45 100%)',
      }}
    >
      <div className="max-w-[800px] mx-auto">

        {/* ── Section Header ── */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.35em] uppercase mb-4">
              About
            </p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-[40px] leading-tight">
              Built From the Government
              <br />
              Side of the Table.
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Origin Story ── */}
        <ScrollReveal delay={150}>
          <div className="space-y-6 mb-20">
            <p className="font-sans text-white/70 text-[17px] md:text-[18px] leading-relaxed">
              Before founding Civic Strategy Partners, I served as a Contract Specialist (1102)
              inside GSA&rsquo;s Multiple Award Schedule program.
            </p>
            <p className="font-sans text-white/70 text-[17px] md:text-[18px] leading-relaxed">
              I reviewed and evaluated offers. I negotiated pricing. I audited contract files.
              I assessed compliance posture. I saw exactly where companies strengthened their
              position — and where they quietly lost leverage.
            </p>
            <p className="font-playfair font-bold text-white text-xl md:text-2xl leading-snug mt-8 mb-8">
              I&rsquo;ve sat in the contracting officer&rsquo;s chair.
              <br />
              <span className="text-brand-gold">Now I sit in yours.</span>
            </p>
            <p className="font-sans text-white/70 text-[17px] md:text-[18px] leading-relaxed">
              Civic Strategy Partners was built around a simple premise: if you understand how
              government evaluators think, how negotiations unfold, and where scrutiny actually
              lands — you can engineer contract position, not just file paperwork.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Firm Philosophy ── */}
        <ScrollReveal delay={300}>
          <div
            className="p-8 md:p-10 mb-20 border-l-[3px] border-l-brand-gold"
            style={{ background: 'rgba(21,42,69,0.5)' }}
          >
            <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.3em] uppercase mb-4">
              Firm Philosophy
            </p>
            <p className="font-sans text-white/80 text-[17px] md:text-[18px] leading-relaxed">
              This firm is intentionally structured as an elite boutique advisory. Limited client
              load. Direct Principal access. Embedded execution when necessary. No junior layers.
              No outsourced drafting teams. No volume-based template business. One contract vehicle.
              One expert.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Background & Credentials ── */}
        <ScrollReveal delay={200}>
          <div className="mb-8">
            <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.3em] uppercase mb-6">
              Background & Credentials
            </p>
            <div className="space-y-3">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1.5 text-[10px]">◆</span>
                  <span className="font-sans text-white/80 text-[16px] md:text-[17px] leading-relaxed">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Currently Pursuing ── */}
        <ScrollReveal delay={250}>
          <div className="mb-20">
            <p className="font-playfair font-semibold text-white/60 text-[14px] tracking-[0.25em] uppercase mb-4">
              Currently Pursuing
            </p>
            <div className="space-y-3">
              {pursuing.map((cert, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-brand-gold/65 mt-1.5 text-[10px]">◆</span>
                  <span className="font-sans text-white/60 text-[15px] leading-relaxed">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── Motto ── */}
        <ScrollReveal delay={200}>
          <div className="text-center pt-12 border-t border-white/[0.06]">
            <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.3em] uppercase mb-3">
              Our Motto
            </p>
            <p className="font-playfair font-bold text-white text-xl md:text-2xl italic mb-3">
              Virtuum Civium Ductus
            </p>
            <p className="font-sans text-white/60 text-[15px] leading-relaxed max-w-[550px] mx-auto">
              &ldquo;The Leadership of the Citizens&rsquo; Virtues.&rdquo; The government runs on the
              capabilities of its contractors. This motto signifies our role in mobilizing the best
              of the commercial world for public service.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
