'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FileText, Target, Shield, ShieldCheck, ChevronDown } from 'lucide-react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    const elements = [statsRef.current, servicesRef.current, aboutRef.current, videoRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
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
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(var(--float-x, 5px), var(--float-y, -10px)); opacity: 0.4; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }

        .particle {
          position: absolute;
          width: 1.5px;
          height: 1.5px;
          background: white;
          border-radius: 50%;
          animation: float 12s ease-in-out infinite;
          pointer-events: none;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(201, 162, 39, 0.3);
          transform: translateY(-4px);
        }

        .glass-form-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .btn-primary {
          background: #c9a227;
          color: #0a1628;
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-primary:hover {
          background: #d4af37;
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(201, 162, 39, 0.3);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid rgba(248, 250, 252, 0.4);
          color: #f8fafc;
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-secondary:hover {
          background: rgba(248, 250, 252, 0.1);
          border-color: #f8fafc;
        }

        .input-field {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: #f8fafc;
          transition: border-color 300ms ease;
        }

        .input-field:focus {
          outline: none;
          border-bottom-color: #c9a227;
        }

        .input-field::placeholder {
          color: #94a3b8;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#162644] to-[#0f1d32]"></div>

        {mounted && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
              '--float-x': `${(Math.random() - 0.5) * 20}px`,
              '--float-y': `${(Math.random() - 0.5) * 20}px`,
            } as React.CSSProperties}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full text-center">
          <div className="mb-16 flex justify-center fade-in">
            <div className="bg-white/95 rounded-2xl p-6 shadow-2xl">
              <Image
                src="/Civic Strategy Partners LLC Logo NO TAGLINE.png"
                alt="Civic Strategy Partners, LLC"
                width={240}
                height={96}
                priority
                className="w-auto h-auto max-w-[240px]"
              />
            </div>
          </div>

          <p
            className="text-[#c9a227] text-xs font-['Inter'] font-semibold uppercase tracking-[0.3em] mb-8 fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Marine-Owned. Mission-Driven. Federal-Focused.
          </p>

          <h1
            className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f8fafc] mb-8 leading-tight fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            Expert Guidance for<br />Federal Market Success
          </h1>

          <p
            className="font-['Inter'] text-lg sm:text-xl text-[#94a3b8] mb-12 max-w-3xl mx-auto leading-relaxed fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Strategic consulting to help businesses win and perform on federal contracts
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 font-['Inter'] font-bold px-8 py-4 rounded-lg text-base"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="btn-secondary inline-flex items-center gap-2 font-['Inter'] font-semibold px-8 py-4 rounded-lg text-base"
            >
              View Services
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ChevronDown
              className="w-6 h-6 text-[#94a3b8]"
              style={{ animation: 'bounce 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </section>

      <section id="stats" ref={statsRef} className="py-20 bg-[#0f1d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '$500M+', label: 'in Proposals Supported', delay: 0 },
              { value: '14+', label: 'Years Federal Experience', delay: 0.1 },
              { value: 'SDVOSB', label: 'Certified', delay: 0.2 },
            ].map((stat, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-8 text-center ${
                  visibleSections.has('stats') ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <p className="font-['Playfair_Display'] text-4xl font-bold text-[#c9a227] mb-3">
                  {stat.value}
                </p>
                <p className="font-['Inter'] text-sm uppercase tracking-wider text-[#94a3b8]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" ref={servicesRef} className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-[#f8fafc] mb-6 ${
              visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
            }`}>
              Strategic Services
            </h2>
            <p className={`font-['Inter'] text-lg text-[#94a3b8] max-w-2xl mx-auto ${
              visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              Comprehensive support for every stage of federal contracting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: 'Proposal Development',
                description: 'Winning strategies from capture to submission',
                delay: 0
              },
              {
                icon: ShieldCheck,
                title: 'Compliance & DCAA Audit Support',
                description: 'Maintain FAR compliance and audit readiness',
                delay: 0.1
              },
              {
                icon: Target,
                title: 'Business Development',
                description: 'Pipeline development and opportunity identification',
                delay: 0.2
              },
              {
                icon: Shield,
                title: 'Capability Statement Design',
                description: 'Professional materials that open doors',
                delay: 0.3
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-8 ${
                  visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="w-12 h-12 mb-6">
                  <service.icon className="w-full h-full text-[#c9a227]" strokeWidth={1.5} />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#f8fafc] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="font-['Inter'] text-sm text-[#94a3b8] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-24 bg-[#0f1d32]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className={`text-[#c9a227] text-xs font-['Inter'] font-semibold uppercase tracking-widest mb-6 ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`}>
                About Civic Strategy Partners
              </p>

              <h2 className={`font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#f8fafc] mb-8 ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.1s' }}>
                Marine Discipline.<br />Federal Expertise.
              </h2>

              <div className={`space-y-6 font-['Inter'] text-base text-[#f8fafc] leading-relaxed ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.2s' }}>
                <p>
                  Led by a United States Marine Corps veteran, Civic Strategy Partners brings military precision and strategic thinking to federal contracting. We've helped businesses of all sizes navigate the complexities of government procurement—from initial registration to multi-million dollar contract awards.
                </p>
                <p>
                  Our approach combines deep regulatory knowledge with practical, results-driven strategies that actually win contracts.
                </p>
              </div>

              <div className={`mt-10 space-y-3 ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.3s' }}>
                {['SDVOSB Certified', 'SAM.gov Registration Expert', 'DCAA Compliant Systems'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#c9a227]"></div>
                    </div>
                    <span className="font-['Inter'] text-sm text-[#94a3b8]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-2 ${
              visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.4s' }}>
              <div className="glass-card rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="font-['Inter'] text-sm text-[#94a3b8] uppercase tracking-wider">
                    Photo Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video" ref={videoRef} className="py-20 bg-[#0a1628]">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`glass-card rounded-2xl aspect-video flex items-center justify-center ${
            visibleSections.has('video') ? 'fade-in-up' : 'opacity-0'
          }`}>
            <div className="text-center px-8">
              <p className="font-['Inter'] text-lg text-[#94a3b8] uppercase tracking-wider">
                Video Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-[#0a1628] to-[#0f1d32]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#f8fafc] mb-6">
              Ready to Win Federal Contracts?
            </h2>
            <p className="font-['Inter'] text-lg text-[#94a3b8]">
              Schedule a free consultation to discuss your federal contracting goals
            </p>
          </div>

          <div className="glass-form-card rounded-2xl p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Name"
                  className="input-field w-full px-0 py-3 font-['Inter'] text-base"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Email"
                  className="input-field w-full px-0 py-3 font-['Inter'] text-base"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Company"
                  className="input-field w-full px-0 py-3 font-['Inter'] text-base"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  placeholder="Tell us about your federal contracting needs..."
                  className="input-field w-full px-0 py-3 font-['Inter'] text-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full font-['Inter'] font-bold px-8 py-4 rounded-lg text-base"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#050a12] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#f8fafc] mb-2">
              CIVIC STRATEGY PARTNERS
            </h3>
            <p className="font-['Inter'] text-sm text-[#94a3b8] mb-6">
              Expert guidance for federal market success
            </p>
            <a
              href="mailto:kevin@civicstrategypartners.com"
              className="font-['Inter'] text-[#c9a227] hover:text-[#d4af37] transition-colors"
            >
              kevin@civicstrategypartners.com
            </a>
          </div>

          <div className="border-t border-white/5 pt-8 text-center">
            <p className="font-['Inter'] text-xs text-[#94a3b8]">
              © 2025 Civic Strategy Partners LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
