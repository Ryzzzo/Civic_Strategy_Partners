'use client';

import { useFadeIn } from '../hooks/useFadeIn';
import GoldDivider from '../components/GoldDivider';

/*
 * PLACEHOLDER TESTIMONIALS
 * Kevin's brief references 7 real testimonials from LinkedIn contacts.
 * Replace these with actual client testimonials when Kevin provides them.
 */
const testimonials = [
  {
    text: "Kevin helped me navigate a complex GSA Schedule acquisition with precision and insight. His knowledge of the federal procurement landscape is unmatched.",
    author: "Client Testimonial",
    title: "Federal Contractor",
    context: "GSA MAS Offer Engagement",
  },
  {
    text: "What sets Kevin apart is that he's actually been on the other side of the table. He doesn't guess at what contracting officers are looking for — he knows.",
    author: "Client Testimonial",
    title: "Government Solutions Director",
    context: "Strategic Advisory",
  },
  {
    text: "We were spinning our wheels with our Schedule contract for two years. Kevin came in, diagnosed the issues within a week, and built a plan that actually moved the needle on revenue.",
    author: "Client Testimonial",
    title: "CEO, Defense Technology Firm",
    context: "MAS Optimization Engagement",
  },
  {
    text: "Kevin's retainer model is worth every dollar. Having a former 1102 on call who actually understands the nuances of pricing and compliance has been a game changer for our team.",
    author: "Client Testimonial",
    title: "VP of Federal Sales",
    context: "Retainer Advisory",
  },
  {
    text: "I've worked with several GovCon consultants before Kevin. The difference is night and day. He doesn't just file paperwork — he engineers your position.",
    author: "Client Testimonial",
    title: "Managing Director",
    context: "Full Lifecycle Support",
  },
  {
    text: "Kevin told us honestly that GSA MAS wasn't the right vehicle for our situation and pointed us in a better direction. That kind of integrity is rare in this space.",
    author: "Client Testimonial",
    title: "Founder, Professional Services Firm",
    context: "Market Readiness Diagnostic",
  },
];

export default function Testimonials() {
  const headerFade = useFadeIn();
  const gridFade = useFadeIn();

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 px-6"
      style={{
        background: 'linear-gradient(165deg, #0C1B2E 0%, #152A45 50%, #0C1B2E 100%)',
      }}
    >
      <div className="max-w-[1100px] mx-auto">

        {/* ── Header ── */}
        <div
          ref={headerFade.ref}
          className={`text-center mb-16 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
            headerFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-playfair font-semibold text-brand-gold text-[14px] tracking-[0.35em] uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="font-playfair font-bold text-white text-3xl md:text-[40px] leading-tight">
            Results That Speak
          </h2>
          <div className="flex justify-center">
            <GoldDivider width={60} />
          </div>
        </div>

        {/* ── Testimonial Grid ── */}
        <div
          ref={gridFade.ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
            gridFade.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 border-l-[3px] border-l-brand-gold"
              style={{ background: 'rgba(21,42,69,0.6)' }}
            >
              {/* Quote Mark */}
              <div className="font-playfair text-[48px] text-brand-gold/30 leading-none mb-2">
                &ldquo;
              </div>

              {/* Quote Text */}
              <p className="font-playfair text-white/75 text-[17px] md:text-[18px] leading-relaxed italic mb-6">
                {t.text}
              </p>

              {/* Attribution */}
              <div className="border-t border-white/[0.08] pt-4">
                <p className="font-playfair font-bold text-white text-[15px]">
                  {t.author}
                </p>
                <p className="font-playfair text-brand-gold text-[13px] mt-1">
                  {t.title}
                </p>
                <p className="font-playfair text-white/35 text-[12px] mt-1">
                  {t.context}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
