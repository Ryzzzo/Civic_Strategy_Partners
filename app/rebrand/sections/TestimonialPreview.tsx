'use client';

import Link from 'next/link';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

const featured = [
  {
    text: "Kevin helped me navigate a complex GSA Schedule acquisition with precision and insight. His knowledge of the federal procurement landscape is unmatched.",
    author: "Client Testimonial",
    title: "Federal Contractor",
    context: "GSA MAS Offer Engagement",
  },
  {
    text: "We were spinning our wheels with our Schedule contract for two years. Kevin came in, diagnosed the issues within a week, and built a plan that actually moved the needle on revenue.",
    author: "Client Testimonial",
    title: "CEO, Defense Technology Firm",
    context: "MAS Optimization Engagement",
  },
  {
    text: "Kevin told us honestly that GSA MAS wasn't the right vehicle for our situation and pointed us in a better direction. That kind of integrity is rare in this space.",
    author: "Client Testimonial",
    title: "Founder, Professional Services Firm",
    context: "Market Readiness Diagnostic",
  },
];

export default function TestimonialPreview() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-[1100px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-playfair font-bold text-brand-gold text-xl md:text-2xl tracking-[0.15em] uppercase mb-4">
              Client Testimonials
            </p>
            <h2 className="font-playfair font-bold text-white text-3xl md:text-[40px] leading-tight">
              Results That Speak
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((t, i) => (
            <ScrollReveal key={i} delay={i * 150} scale={true}>
              <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <div className="font-playfair text-[48px] text-brand-gold/80 leading-none mb-2">
                  &ldquo;
                </div>
                <p className="font-playfair text-white/75 text-[17px] md:text-[18px] leading-relaxed italic mb-6">
                  {t.text}
                </p>
                <div className="border-t border-white/[0.08] pt-4">
                  <p className="font-playfair font-bold text-white text-[15px]">
                    {t.author}
                  </p>
                  <p className="font-playfair text-brand-gold text-base mt-1">
                    {t.title}
                  </p>
                  <p className="font-playfair text-white/60 text-[12px] mt-1">
                    {t.context}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center">
            <Link
              href="/rebrand/testimonials"
              className="inline-block px-9 py-4 font-playfair font-semibold text-[15px] tracking-[0.18em] uppercase text-white/80 border border-white/15 hover:border-brand-gold/40 hover:text-brand-gold transition-all duration-300 no-underline"
            >
              Read All Testimonials →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
