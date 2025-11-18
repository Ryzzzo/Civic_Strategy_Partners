'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...Array.from(prev), entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = [statsRef.current, servicesRef.current, aboutRef.current, processRef.current, testimonialsRef.current, videoRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:kevin@civicstrategypartners.com?subject=Federal Contracting Consultation - ${formData.company}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .btn-primary {
          background: #991B1B;
          color: #FFFFFF;
          transition: all 250ms ease;
          border: none;
        }

        .btn-primary:hover {
          background: #B91C1C;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(153, 27, 27, 0.3);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid #C9A227;
          color: #C9A227;
          transition: all 250ms ease;
        }

        .btn-secondary:hover {
          background: #C9A227;
          color: #0D0D0D;
        }

        .service-card {
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
          transition: all 300ms ease;
        }

        .service-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.06);
          transform: translateY(-4px);
        }

        .process-card {
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 300ms ease;
        }

        .process-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .input-field {
          background: #1A1A1A;
          border: 1px solid #2D2D2D;
          color: #FFFFFF;
          transition: border-color 250ms ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #C9A227;
        }

        .input-field::placeholder {
          color: #6B7280;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12 flex justify-center fade-in">
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <Image
                src="/Civic Strategy Partners LLC Logo NO TAGLINE.png"
                alt="Civic Strategy Partners, LLC"
                width={280}
                height={112}
                priority
                className="w-auto h-auto max-w-[280px]"
              />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p
              className="text-[#C9A227] text-sm font-bold uppercase tracking-widest mb-6 fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Marine-Owned. Mission-Driven. Federal-Focused.
            </p>

            <h1
              className="text-5xl sm:text-6xl font-bold text-white mb-8 leading-tight fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              Expert Guidance for Federal Market Success
            </h1>

            <p
              className="text-xl text-[#9CA3AF] mb-12 leading-relaxed fade-in"
              style={{ animationDelay: '0.4s', lineHeight: '1.7' }}
            >
              Strategic consulting to help businesses win and perform on federal contracts. Led by a Marine Corps veteran with proven success in government procurement.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center font-bold px-10 py-4 rounded-lg text-base w-full sm:w-auto"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="btn-secondary inline-flex items-center justify-center font-bold px-10 py-4 rounded-lg text-base w-full sm:w-auto"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" ref={statsRef} className="py-16 bg-[#1A1A1A] border-y border-[#2D2D2D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { value: '$500M+', label: 'Proposals Supported', delay: 0 },
              { value: '14+', label: 'Years Federal Experience', delay: 0.1 },
              { value: 'SDVOSB', label: 'Certified Veteran-Owned', delay: 0.2 },
            ].map((stat, i) => (
              <div
                key={i}
                className={`${visibleSections.has('stats') ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <p className="text-5xl font-bold text-[#C9A227] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" ref={servicesRef} className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold text-[#1F2937] mb-6 ${
              visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
            }`}>
              Strategic Services
            </h2>
            <p className={`text-lg text-[#6B7280] max-w-2xl mx-auto ${
              visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s', lineHeight: '1.7' }}>
              Comprehensive support for every stage of federal contracting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Proposal Development',
                description: 'Winning strategies from capture to submission',
                delay: 0
              },
              {
                title: 'Compliance & DCAA Audit Support',
                description: 'Maintain FAR compliance and audit readiness',
                delay: 0.1
              },
              {
                title: 'Business Development',
                description: 'Pipeline development and opportunity identification',
                delay: 0.2
              },
              {
                title: 'Capability Statement Design',
                description: 'Professional materials that open doors',
                delay: 0.3
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`service-card rounded-xl p-8 ${
                  visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#991B1B] rounded-lg">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className={`border-l-4 border-[#991B1B] pl-6 mb-8 ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`}>
                <p className="text-[#C9A227] text-sm font-bold uppercase tracking-widest mb-4">
                  About Civic Strategy Partners
                </p>
                <h2 className="text-4xl font-bold text-[#1F2937] mb-6">
                  Marine Discipline.<br />Federal Expertise.
                </h2>
              </div>

              <div className={`space-y-6 text-base text-[#374151] leading-relaxed ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.2s', lineHeight: '1.7' }}>
                <p>
                  Led by a United States Marine Corps veteran, Civic Strategy Partners brings military precision and strategic thinking to federal contracting. We've helped businesses of all sizes navigate the complexities of government procurement—from initial registration to multi-million dollar contract awards.
                </p>
                <p>
                  Our approach combines deep regulatory knowledge with practical, results-driven strategies that actually win contracts.
                </p>
              </div>

              <div className={`mt-10 space-y-4 ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.3s' }}>
                {['SDVOSB Certified', 'SAM.gov Registration Expert', 'DCAA Compliant Systems'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C9A227] rounded-full"></div>
                    <span className="text-sm font-semibold text-[#1F2937]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${
              visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-[#F3F4F6] border-2 border-[#C9A227] rounded-xl aspect-square flex items-center justify-center shadow-md">
                <div className="text-center px-8">
                  <p className="text-sm text-[#6B7280] uppercase tracking-wider">
                    Photo Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" ref={processRef} className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold text-[#1F2937] mb-6 ${
              visibleSections.has('process') ? 'fade-in-up' : 'opacity-0'
            }`}>
              How We Work
            </h2>
            <p className={`text-lg text-[#6B7280] max-w-2xl mx-auto ${
              visibleSections.has('process') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s', lineHeight: '1.7' }}>
              A proven process to guide you from opportunity to award
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Capture',
                description: 'Identify opportunities aligned with your capabilities and build winning relationships',
                delay: 0
              },
              {
                step: '02',
                title: 'Proposal',
                description: 'Develop compelling, compliant proposals that demonstrate clear value to the government',
                delay: 0.1
              },
              {
                step: '03',
                title: 'Compliance',
                description: 'Ensure ongoing FAR compliance and maintain audit-ready systems for contract performance',
                delay: 0.2
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`process-card rounded-xl p-8 ${
                  visibleSections.has('process') ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${item.delay}s` }}
              >
                <div className="text-6xl font-bold text-[#C9A227] mb-4 opacity-20">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" ref={testimonialsRef} className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold text-white mb-6 ${
              visibleSections.has('testimonials') ? 'fade-in-up' : 'opacity-0'
            }`}>
              Trusted by Federal Contractors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Kevin's expertise was instrumental in winning our first federal contract. His guidance through the proposal process was invaluable.",
                author: "Federal Contractor",
                delay: 0
              },
              {
                quote: "Professional, knowledgeable, and results-driven. Civic Strategy Partners helped us navigate complex compliance requirements with confidence.",
                author: "Small Business Owner",
                delay: 0.1
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className={`bg-[#0D0D0D] border-l-4 border-[#991B1B] p-8 rounded-lg ${
                  visibleSections.has('testimonials') ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${testimonial.delay}s` }}
              >
                <div className="text-[#C9A227] text-5xl font-bold mb-4">"</div>
                <p className="text-lg text-[#F5F5F5] leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
                  {testimonial.quote}
                </p>
                <p className="text-sm font-bold text-[#C9A227] uppercase tracking-wider">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" ref={videoRef} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className={`bg-[#F3F4F6] border border-[#E5E7EB] rounded-xl aspect-video flex items-center justify-center shadow-md ${
            visibleSections.has('video') ? 'fade-in-up' : 'opacity-0'
          }`}>
            <div className="text-center px-8">
              <div className="w-20 h-20 rounded-full bg-[#991B1B] flex items-center justify-center mb-4 mx-auto shadow-lg">
                <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
              </div>
              <p className="text-lg font-bold text-[#1F2937] uppercase tracking-wider">
                Video Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Win Federal Contracts?
            </h2>
            <p className="text-lg text-[#9CA3AF]" style={{ lineHeight: '1.7' }}>
              Schedule a free consultation to discuss your federal contracting goals
            </p>
          </div>

          <div className="bg-[#1A1A1A] border border-[#2D2D2D] rounded-xl p-10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Full Name"
                  className="input-field w-full px-4 py-3 rounded-lg text-base"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Email Address"
                  className="input-field w-full px-4 py-3 rounded-lg text-base"
                />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Phone Number"
                  className="input-field w-full px-4 py-3 rounded-lg text-base"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Company Name"
                  className="input-field w-full px-4 py-3 rounded-lg text-base"
                />
              </div>

              <div>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  placeholder="Tell us about your federal contracting needs..."
                  className="input-field w-full px-4 py-3 rounded-lg text-base resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full font-bold px-10 py-4 rounded-lg text-base"
              >
                Submit Consultation Request
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-[#2D2D2D] text-center">
              <p className="text-sm text-[#9CA3AF] mb-2">Or contact directly:</p>
              <a
                href="mailto:kevin@civicstrategypartners.com"
                className="text-[#C9A227] hover:text-[#D4A252] font-semibold transition-colors"
              >
                kevin@civicstrategypartners.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#000000] border-t border-[#2D2D2D] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-[#C9A227] mb-6"></div>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              CIVIC STRATEGY PARTNERS
            </h3>
            <p className="text-sm text-[#9CA3AF] mb-1">
              Expert guidance for federal market success
            </p>
            <p className="text-xs text-[#6B7280]">
              A Gov Con Proposals Company
            </p>
          </div>

          <div className="border-t border-[#2D2D2D] pt-6 text-center">
            <p className="text-xs text-[#6B7280]">
              © 2025 Civic Strategy Partners LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
