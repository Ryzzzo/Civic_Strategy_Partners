'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FileText, Target, Shield, CheckCircle2, Award, Building2, ChevronRight, FileCheck } from 'lucide-react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const credentialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...Array.from(prev), entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const elements = [heroStatsRef.current, servicesRef.current, credentialsRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:kevin@civicstrategypartners.com?subject=Federal Contracting Consultation - ${formData.company}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-[#0a1628] overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(var(--float-x, 10px), var(--float-y, -20px)); opacity: 0.6; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
          pointer-events: none;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .glass-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow:
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.1),
            0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .glass-card:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
          border: 1px solid rgba(212, 175, 55, 0.4);
          box-shadow:
            0 12px 48px 0 rgba(0, 0, 0, 0.5),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.15),
            0 0 60px rgba(212, 175, 55, 0.2);
        }

        .premium-shadow {
          box-shadow:
            0 4px 6px rgba(0, 0, 0, 0.1),
            0 12px 24px rgba(0, 0, 0, 0.15),
            0 24px 48px rgba(0, 0, 0, 0.2),
            0 48px 96px rgba(0, 0, 0, 0.25);
        }

        .text-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4c1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .border-gradient {
          position: relative;
          border-radius: 24px;
        }

        .border-gradient::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(135deg, #1e3a8a, #d4af37);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .border-gradient:hover::before {
          opacity: 1;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-[#1e3a8a] via-[#0f172a] to-[#0a1628]"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)'
          }}></div>
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              '--float-x': `${(Math.random() - 0.5) * 40}px`,
              '--float-y': `${(Math.random() - 0.5) * 40}px`,
            } as React.CSSProperties}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="text-center">
            <div className="mb-16 flex justify-center fade-in">
              <div className="bg-white/95 rounded-3xl p-8 premium-shadow">
                <Image
                  src="/Civic Strategy Partners LLC Logo NO TAGLINE.png"
                  alt="Civic Strategy Partners, LLC"
                  width={320}
                  height={128}
                  priority
                  className="w-auto h-auto max-w-[320px]"
                />
              </div>
            </div>

            <h1
              className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-10 leading-[1.1] tracking-tight fade-in"
              style={{ animationDelay: '0.2s', letterSpacing: '-0.02em' }}
            >
              Expert Guidance for<br />Federal Market Success
            </h1>

            <p
              className="font-['Inter'] text-xl sm:text-2xl lg:text-3xl text-white/80 mb-20 font-medium tracking-wide fade-in"
              style={{ animationDelay: '0.4s', letterSpacing: '0.02em' }}
            >
              Marine-Owned. Mission-Driven. Federal-Focused.
            </p>

            <div
              id="hero-stats"
              ref={heroStatsRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16"
            >
              {[
                { value: '14+', label: 'Years Federal Experience', delay: 0 },
                { value: '$500M+', label: 'Proposals Supported', delay: 0.1 },
                { value: '50+', label: 'Agency Relationships', delay: 0.2 },
                { value: 'Marine', label: 'Corps Leadership', delay: 0.3 },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-[20px] p-8 transition-all duration-500 hover:-translate-y-2 group ${
                    visibleSections.has('hero-stats') ? 'fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${stat.delay}s` }}
                >
                  <p className="font-['Playfair_Display'] text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="font-['Inter'] text-[#d4af37] text-base font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="mailto:kevin@civicstrategypartners.com?subject=Federal Contracting Consultation"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#c5a572] text-[#0a1628] font-['Inter'] font-bold px-12 py-6 rounded-xl hover:from-[#c29d2f] hover:to-[#b8995d] transition-all duration-300 text-lg premium-shadow hover:scale-105"
                style={{ animation: 'pulse-gold 3s ease-in-out infinite' }}
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm text-white font-['Inter'] font-semibold px-12 py-6 rounded-xl border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" ref={servicesRef} className="relative py-32 bg-[#0f172a] grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-24 tracking-tight ${
            visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
          }`}>
            Strategic Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Proposal Development & Strategy',
                description: 'Compliant, compelling proposals for SBIRs, RFPs, and federal opportunities. We craft winning narratives that resonate with government evaluators and secure contracts.',
                delay: 0
              },
              {
                icon: Target,
                title: 'Market Intelligence & Positioning',
                description: 'Strategic market analysis, opportunity identification, and positioning for sustained federal growth. Navigate complex procurement landscapes with confidence and precision.',
                delay: 0.1
              },
              {
                icon: Shield,
                title: 'Compliance & Capability Assessment',
                description: 'Expert guidance through SBA 8(a), GSA Schedule, and federal regulations. Comprehensive capability assessments and certification support for competitive advantage.',
                delay: 0.2
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`group border-gradient transition-all duration-500 ${
                  visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="glass-card rounded-[24px] p-12 h-full hover:-translate-y-2 transition-all duration-500">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl flex items-center justify-center mb-8 group-hover:from-[#d4af37] group-hover:to-[#c5a572] transition-all duration-500 premium-shadow">
                    <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl lg:text-3xl font-semibold text-white mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-['Inter'] text-white/70 leading-relaxed text-base lg:text-lg mb-6">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#d4af37] font-['Inter'] font-semibold text-base group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="relative py-32 bg-[#1e293b]">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-24 tracking-tight">
            Federal Market Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
            <div className="lg:col-span-3 space-y-8">
              <h3 className="font-['Playfair_Display'] text-3xl lg:text-4xl font-semibold text-white mb-6">
                Our Approach
              </h3>
              <p className="font-['Inter'] text-white/80 leading-[1.7] text-lg lg:text-xl">
                Civic Strategy Partners combines military precision with deep federal procurement expertise. Our methodology is built on strategic planning, compliant execution, and relationship-driven results.
              </p>
              <p className="font-['Inter'] text-white/80 leading-[1.7] text-lg lg:text-xl">
                We guide businesses through every phase of federal contracting—from initial market entry and capability development to proposal submission and contract management. Our veteran leadership brings mission-focused discipline to complex government processes.
              </p>
              <p className="font-['Inter'] text-white/80 leading-[1.7] text-lg lg:text-xl">
                With established relationships across DoD, VA, GSA, DHS, and civilian agencies, we position our clients for sustainable federal market growth and competitive advantage.
              </p>
            </div>

            <div id="credentials" ref={credentialsRef} className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle2, label: 'SAM.gov Registered' },
                  { icon: Award, label: 'GSA Schedule Holder' },
                  { icon: Shield, label: 'SDVOSB Certified' },
                  { icon: FileCheck, label: 'SBA 8(a) Expert' }
                ].map((credential, i) => (
                  <div
                    key={i}
                    className={`glass-card rounded-[20px] p-6 text-center hover:-translate-y-1 transition-all duration-300 ${
                      visibleSections.has('credentials') ? 'fade-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <credential.icon className="w-10 h-10 text-[#d4af37] mx-auto mb-3" strokeWidth={1.5} />
                    <p className="font-['Inter'] text-white text-sm font-medium leading-tight">
                      {credential.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[24px] p-12 premium-shadow" style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(197, 165, 114, 0.1) 100%)',
            borderColor: 'rgba(212, 175, 55, 0.3)'
          }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { value: '14+', label: 'Years Experience' },
                { value: '$500M+', label: 'Proposals Supported' },
                { value: '50+', label: 'Agency Relationships' }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <p className="font-['Playfair_Display'] text-5xl lg:text-6xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {stat.value}
                  </p>
                  <p className="font-['Inter'] text-white/80 text-base font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#0a1628]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
            Serving Businesses Nationwide
          </h2>

          <div className="mb-16">
            <p className="font-['Playfair_Display'] text-2xl lg:text-3xl text-gradient font-semibold mb-8">
              Your Mission. Our Expertise. Federal Results.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-20">
            {['DoD', 'VA', 'GSA', 'DHS', 'DOE', 'DOJ', 'HHS'].map((agency, i) => (
              <span key={i} className="inline-flex items-center gap-3">
                <span className="font-['Inter'] text-white/60 text-sm font-semibold uppercase tracking-[0.2em]">
                  {agency}
                </span>
                {i < 6 && <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 bg-gradient-to-b from-[#1e3a8a] to-[#0a1628] overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            } as React.CSSProperties}
          />
        ))}

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-6 tracking-tight">
            Ready to Enter the Federal Market?
          </h2>
          <p className="font-['Inter'] text-white/80 text-lg text-center mb-16">
            Schedule your complimentary consultation today
          </p>

          <div className="glass-card rounded-[24px] p-12 premium-shadow">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block font-['Inter'] text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] focus:bg-white/15 focus:ring-4 focus:ring-[#d4af37]/20 transition-all duration-300 font-['Inter'] backdrop-blur-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-['Inter'] text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] focus:bg-white/15 focus:ring-4 focus:ring-[#d4af37]/20 transition-all duration-300 font-['Inter'] backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block font-['Inter'] text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] focus:bg-white/15 focus:ring-4 focus:ring-[#d4af37]/20 transition-all duration-300 font-['Inter'] backdrop-blur-sm"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-['Inter'] text-white text-sm font-semibold mb-3 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white placeholder-white/40 focus:outline-none focus:border-[#d4af37] focus:bg-white/15 focus:ring-4 focus:ring-[#d4af37]/20 transition-all duration-300 resize-none font-['Inter'] backdrop-blur-sm"
                  placeholder="Tell us about your federal contracting needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#c5a572] text-[#0a1628] font-['Inter'] font-bold px-12 py-5 rounded-xl hover:from-[#c29d2f] hover:to-[#b8995d] transition-all duration-300 text-lg premium-shadow hover:scale-[1.02]"
              >
                Submit Consultation Request
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="font-['Inter'] text-white/70 mb-4 text-base text-center">Or contact us directly:</p>
              <a
                href="mailto:kevin@civicstrategypartners.com"
                className="block font-['Inter'] text-[#d4af37] font-semibold text-xl hover:text-[#c29d2f] transition-colors text-center"
              >
                kevin@civicstrategypartners.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-[#0a1628] border-t border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/95 rounded-3xl p-6 premium-shadow mb-8">
              <Image
                src="/Civic Strategy Partners LLC Logo NO TAGLINE.png"
                alt="Civic Strategy Partners, LLC"
                width={240}
                height={96}
                className="w-auto h-auto max-w-[240px]"
              />
            </div>
            <p className="font-['Playfair_Display'] text-xl lg:text-2xl text-gradient font-bold mb-3">
              Veteran-Owned. Mission-Focused.
            </p>
          </div>

          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="font-['Inter'] text-white/50 text-sm">
                © 2024 Civic Strategy Partners, LLC. All rights reserved.
              </p>
              <a
                href="mailto:kevin@civicstrategypartners.com"
                className="font-['Inter'] text-white/50 hover:text-[#d4af37] transition-colors text-sm"
              >
                kevin@civicstrategypartners.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
