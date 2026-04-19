'use client';

import Image from 'next/image';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';

const credentials = [
  {
    label: 'Marine Corps — Operation Iraqi Freedom (2003)',
    description:
      'Served as an 0431 Embarkation Specialist during OIF I. The discipline and mission orientation from that period still shape how I run engagements.',
  },
  {
    label: 'GSA Contract Specialist — GS-1102 Series',
    description:
      'Federal contracting career spanning GSA MAS, DOL Job Corps Acquisition Services, and VA healthcare acquisitions.',
  },
  {
    label: 'MBA — Southern New Hampshire University',
    description:
      'Formal grounding in business strategy, financial analysis, and operations — paired with the federal side. Public Administration concentration.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-10 sm:py-14 md:py-20 lg:py-20 xl:py-32 px-4 sm:px-6"
    >
      <div className="max-w-[900px] xl:max-w-[1080px] mx-auto">

        {/* ── Section 1: Hero/Intro ── */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] xl:grid-cols-[1fr_260px] gap-8 md:gap-10 xl:gap-14 items-center mb-8 md:mb-10 xl:mb-12">
            <div className="order-2 md:order-1">
              <h1
                className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-[40px] lg:text-[40px] xl:text-[54px] mb-5 lg:mb-5 xl:mb-6"
                style={{ lineHeight: 1.15 }}
              >
                Built from the government side of the table.
              </h1>
              <div className="flex md:justify-start justify-center">
                <GoldDivider width={60} />
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-brand-gold/30 shadow-[0_0_30px_rgba(197,153,58,0.12)]">
                <Image
                  src="/kevin_headshot.jpeg"
                  alt="Kevin Martin, Founder of Civic Strategy Partners"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="space-y-6 mb-10 md:mb-14">
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              Before founding Civic Strategy Partners, I spent years as a GS-1102 Contract
              Specialist &mdash; most recently inside GSA&rsquo;s Multiple Award Schedule
              program. I reviewed offers. Negotiated pricing. Audited files. Assessed
              compliance. I saw where contractors strengthened their position, and where
              they gave up leverage without realizing it.
            </p>
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              I&rsquo;ve sat in both seats: the federal 1102 and the government contractor
              chairs. That dual perspective is what CSP is built on.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Pull quote ── */}
        <ScrollReveal delay={200} scale preserveBackdrop>
          <div className="text-center p-6 sm:p-8 md:p-10 mb-16 md:mb-20 border-l-[3px] border-l-brand-gold bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
            <p className="font-playfair font-semibold text-brand-gold/90 text-lg sm:text-xl md:text-[22px] italic leading-relaxed">
              &ldquo;If you understand the challenges from both sides of the table &mdash;
              you can build contract position instead of just filing paperwork.&rdquo;
            </p>
          </div>
        </ScrollReveal>

        {/* ── Section 2: How I work ── */}
        <ScrollReveal delay={150}>
          <div className="mb-16 md:mb-20">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.15em] uppercase mb-5">
              How I work
            </p>
            <div className="space-y-5">
              <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                CSP runs a limited engagement model by design. One advisor, one contract,
                full focus.
              </p>
              <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
                Engagements are advisory or white-glove. I guide your team, or I drive the
                work &mdash; no middle ground, no billable-hour games.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Section 3: Background & Credentials ── */}
        <ScrollReveal delay={150}>
          <div className="mb-16 md:mb-20">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.15em] uppercase mb-6">
              Background &amp; Credentials
            </p>

            {/* Military photo anchor */}
            <div className="mb-8 md:mb-10 max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/kevin_marine_group.JPG"
                alt="Operation Iraqi Freedom 2003, Force Protection 1st Squad, Camp Viper"
                width={1600}
                height={1067}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 640px, 672px"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6">
              {credentials.map((item, i) => (
                <div key={i} className="border-l-2 border-brand-gold/40 pl-5">
                  <p className="font-playfair font-bold text-white text-base sm:text-lg md:text-xl mb-2" style={{ lineHeight: 1.35 }}>
                    {item.label}
                  </p>
                  <p className="font-sans text-white/70 text-[15px] sm:text-[16px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

              <p className="font-sans text-white/60 text-[14px] sm:text-[15px] italic pt-2">
                Currently pursuing: PMP, CFCM, Agile Lean Six Sigma Black Belt.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Section 4: Motto ── */}
        <ScrollReveal delay={150}>
          <div className="mb-12 md:mb-16">
            <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.15em] uppercase mb-5">
              Motto
            </p>
            <p className="font-sans text-white/80 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed">
              <span className="italic">Virtuum Civium Ductus</span> &mdash; &ldquo;The
              leadership of the citizens&rsquo; virtues.&rdquo; The government runs on the
              capability of its contractors. CSP exists to bring commercial excellence
              into public service.
            </p>
          </div>
        </ScrollReveal>

        {/* ── LinkedIn link ── */}
        <ScrollReveal delay={200}>
          <div className="pt-10 border-t border-white/[0.08] text-center">
            <a
              href="https://www.linkedin.com/in/kevinmartinmba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-playfair font-semibold text-brand-gold/90 hover:text-brand-gold text-sm sm:text-base tracking-[0.15em] uppercase transition-colors duration-300 no-underline"
            >
              Connect on LinkedIn <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
