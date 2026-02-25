'use client';

import { useState } from 'react';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

const faqs = [
  {
    q: 'What exactly does a fractional GSA MAS authorized negotiator do?',
    a: "I function as your embedded GSA MAS expert — handling offer builds, modifications, pricing strategy, compliance management, and lifecycle decisions — without you hiring a full-time federal contracts specialist. You get direct access to someone who spent years inside GSA reviewing these exact contracts from the government side.",
  },
  {
    q: 'Who is an ideal client for Civic Strategy Partners?',
    a: "Companies that already hold a GSA MAS contract and aren't seeing the revenue it should generate. Companies entering the federal marketplace that want to do it right the first time. And companies that have had bad experiences with GovCon consultants who delivered paperwork instead of strategy. If you treat your contract like a checkbox, we're probably not a fit. If you treat it like a revenue channel, we are.",
  },
  {
    q: "What's the difference between Tier 1 and Tier 2 engagements?",
    a: "Tier 1 (Fractional Authorized Negotiator) is full embedding — I lead the work directly, including negotiation, modification execution, and direct engagement with contracting officers. Tier 2 (Strategic Retainer Advisory) is oversight-led — you execute internally, and I provide strategy, review, and correction. Both include direct Principal access. The difference is depth of execution involvement.",
  },
  {
    q: "What's wrong with most GSA MAS consultants?",
    a: "Most are upload shops. They help you submit documents and move on. They don't go deep on pricing posture, SIN alignment, EPA clause strategy, or what actually happens when a contracting officer opens your file. I've been that contracting officer. My work is built around what happens after submission.",
  },
  {
    q: "Do you work with companies that don't have a GSA Schedule yet?",
    a: "Yes. I offer Federal Market Readiness Roadmaps and Offer Readiness Diagnostics for companies evaluating whether MAS is the right path and how to position themselves competitively. I'll also tell you honestly if GSA MAS isn't the right vehicle for your situation.",
  },
  {
    q: 'Can you help with SBIR Phase III and GSA MAS combined strategy?',
    a: "Yes. The intersection of SBIR Phase III authority and GSA MAS is underutilized and often misunderstood. I help clients understand how to structure these vehicles together to maximize compliance defensibility and sales channel coverage. See the Resources section for a one-pager on this topic.",
  },
  {
    q: 'How do I get started?',
    a: "Book a strategy call through the Contact page. We'll talk through your current situation, what you're trying to accomplish, and whether there's a fit. No pitch — just a direct conversation about where you are and what it would take to get where you want to go.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="max-w-[720px] mx-auto">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[38px]" style={{ lineHeight: 1.5 }}>
              Frequently Asked Questions
            </h2>
            <div className="flex justify-center">
              <GoldDivider width={60} />
            </div>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal delay={150}>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`cursor-pointer ${
                  i < faqs.length - 1 ? 'border-b border-white/[0.08]' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {/* Question */}
                <div className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-6 md:px-8 min-h-[44px]">
                  <h3 className="font-playfair font-semibold text-white/90 text-base sm:text-[16px] md:text-[17px] pr-5" style={{ lineHeight: 1.5 }}>
                    {faq.q}
                  </h3>
                  <span
                    className={`text-brand-gold text-2xl font-light flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-white/70 text-sm sm:text-[15px] md:text-[16px] leading-relaxed pb-4 sm:pb-6 px-4 sm:px-6 md:px-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
