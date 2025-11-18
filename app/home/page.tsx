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
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = [statsRef.current, servicesRef.current, aboutRef.current, processRef.current, videoRef.current, testimonialsRef.current];
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
          animation: fadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fade-in {
          animation: fadeIn 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .btn-primary {
          background: #1E40AF;
          color: #FFFFFF;
          transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
        }

        .btn-primary:hover {
          background: #1E3A8A;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 40px rgba(30, 64, 175, 0.2);
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid #B8860B;
          color: #B8860B;
          transition: all 250ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-secondary:hover {
          background: #B8860B;
          color: #FFFFFF;
          transform: scale(1.02);
        }

        .service-card {
          background: white;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }

        .input-field {
          background: #F8FAFC;
          border: 2px solid transparent;
          color: #1E293B;
          transition: all 250ms ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #1E40AF;
          background: #FFFFFF;
        }

        .input-field::placeholder {
          color: #94A3B8;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F172A] shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="flex items-center justify-between h-20">
            <div className="text-white font-semibold text-lg tracking-wide">
              CIVIC STRATEGY PARTNERS
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white text-sm font-medium hover:text-[#B8860B] transition-colors">
                Services
              </a>
              <a href="#about" className="text-white text-sm font-medium hover:text-[#B8860B] transition-colors">
                About
              </a>
              <a href="#contact" className="text-white text-sm font-medium hover:text-[#B8860B] transition-colors">
                Contact
              </a>
              <a
                href="#contact"
                className="btn-secondary px-6 py-2.5 rounded-lg text-sm font-semibold"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative bg-[#0F172A] pt-40 pb-32">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <p
                className="text-[#B8860B] text-sm font-medium uppercase tracking-[0.1em] mb-6 fade-in"
              >
                Federal Contracting Excellence
              </p>

              <h1
                className="text-6xl lg:text-[96px] font-bold text-white mb-8 leading-[1.1] tracking-tight fade-in"
                style={{ animationDelay: '0.1s' }}
              >
                Expert Guidance for Federal Market Success
              </h1>

              <p
                className="text-xl text-[#94A3B8] mb-6 leading-relaxed max-w-[520px] fade-in"
                style={{ animationDelay: '0.2s', lineHeight: '1.8' }}
              >
                Marine-Owned. Mission-Driven. Federal-Focused.
              </p>

              <p
                className="text-lg text-[#94A3B8] mb-10 leading-relaxed max-w-[520px] fade-in"
                style={{ animationDelay: '0.3s', lineHeight: '1.8' }}
              >
                Strategic consulting to help businesses win and perform on federal contracts with military precision and proven methodologies.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                <a
                  href="#contact"
                  className="btn-primary inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg text-base"
                >
                  Schedule Consultation
                </a>
                <a
                  href="#services"
                  className="btn-secondary inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg text-base"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-[#1E293B] rounded-2xl p-8 shadow-2xl">
                <div className="text-6xl font-bold text-[#B8860B] mb-2">30+</div>
                <div className="text-sm font-medium text-white uppercase tracking-wider">
                  Years Combined Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" ref={statsRef} className="py-20 bg-[#1E293B]">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              { value: '$500M+', label: 'Proposals Supported', delay: 0 },
              { value: '14+', label: 'Years Federal Experience', delay: 0.1 },
              { value: '100+', label: 'Contracts Won', delay: 0.2 },
              { value: 'USMC', label: 'Veteran Owned', delay: 0.3 },
            ].map((stat, i) => (
              <div
                key={i}
                className={`${visibleSections.has('stats') ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${stat.delay}s` }}
              >
                <p className="text-5xl lg:text-6xl font-bold text-[#B8860B] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-medium uppercase tracking-wider text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" ref={servicesRef} className="py-36 bg-white">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="text-center mb-20">
            <p className={`text-[#B8860B] text-sm font-medium uppercase tracking-[0.1em] mb-4 ${
              visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
            }`}>
              Our Services
            </p>
            <h2 className={`text-5xl lg:text-6xl font-semibold text-[#1E293B] mb-6 ${
              visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              Comprehensive Federal Contracting Support
            </h2>
            <p className={`text-lg text-[#475569] max-w-[600px] mx-auto ${
              visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s', lineHeight: '1.8' }}>
              End-to-end consulting services designed to help you navigate the federal marketplace with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                number: '01',
                title: 'Capture Management',
                description: 'Strategic opportunity identification and pursuit planning to position your business for success in the federal marketplace',
                delay: 0
              },
              {
                number: '02',
                title: 'Proposal Development',
                description: 'Compliant, compelling submissions that clearly demonstrate your value proposition and technical capabilities',
                delay: 0.1
              },
              {
                number: '03',
                title: 'Compliance & Certifications',
                description: '8(a), SDVOSB, GSA Schedule guidance and ongoing FAR compliance support to maintain audit readiness',
                delay: 0.2
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`service-card rounded-2xl p-10 ${
                  visibleSections.has('services') ? 'fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${service.delay}s` }}
              >
                <div className="text-2xl font-bold text-[#B8860B] mb-6">{service.number}</div>
                <h3 className="text-2xl font-semibold text-[#1E293B] mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
                  {service.description}
                </p>
                <a href="#contact" className="text-[#1E40AF] font-medium text-sm hover:text-[#1E3A8A] transition-colors">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" ref={aboutRef} className="py-36 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className={`text-[#B8860B] text-sm font-medium uppercase tracking-[0.1em] mb-4 ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`}>
                About Civic Strategy
              </p>
              <h2 className={`text-5xl font-semibold text-[#1E293B] mb-8 ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.1s' }}>
                Your Trusted Partner in Government Contracting
              </h2>

              <div className={`space-y-6 text-lg text-[#475569] ${
                visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
              }`} style={{ animationDelay: '0.2s', lineHeight: '1.8' }}>
                <p>
                  Led by a United States Marine Corps veteran, Civic Strategy Partners brings military precision and strategic thinking to federal contracting. We've helped businesses of all sizes navigate the complexities of government procurement—from initial registration to multi-million dollar contract awards.
                </p>
                <p>
                  Our approach combines deep regulatory knowledge with practical, results-driven strategies that actually win contracts. We don't just guide you through the process—we become your strategic partner in building a sustainable federal contracting business.
                </p>
                <p className="font-semibold text-[#1E293B]">
                  With over 14 years of federal experience and hundreds of millions in supported proposals, we understand what it takes to succeed in this demanding marketplace.
                </p>
              </div>
            </div>

            <div className={`${
              visibleSections.has('about') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center px-8">
                  <p className="text-sm text-[#94A3B8] uppercase tracking-wider">
                    Professional Photo Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" ref={processRef} className="py-36 bg-white">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="text-center mb-20">
            <p className={`text-[#B8860B] text-sm font-medium uppercase tracking-[0.1em] mb-4 ${
              visibleSections.has('process') ? 'fade-in-up' : 'opacity-0'
            }`}>
              How We Work
            </p>
            <h2 className={`text-5xl lg:text-6xl font-semibold text-[#1E293B] ${
              visibleSections.has('process') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              Your Path to Federal Contract Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We assess your capabilities, goals, and competitive positioning to identify the best federal opportunities for your business',
                delay: 0
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop your comprehensive capture and proposal plan with clear milestones and deliverables aligned to agency requirements',
                delay: 0.1
              },
              {
                step: '03',
                title: 'Execution',
                description: 'We guide you through submission to award with hands-on support, ensuring compliance and maximizing your win probability',
                delay: 0.2
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`${visibleSections.has('process') ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${item.delay}s` }}
              >
                <div className="text-7xl font-bold text-[#B8860B] mb-6 opacity-20">
                  {item.step}
                </div>
                <h3 className="text-3xl font-semibold text-[#1E293B] mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed" style={{ lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" ref={videoRef} className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="text-center mb-12">
            <p className={`text-[#B8860B] text-sm font-medium uppercase tracking-[0.1em] ${
              visibleSections.has('video') ? 'fade-in-up' : 'opacity-0'
            }`}>
              See Us In Action
            </p>
          </div>

          <div className={`max-w-[900px] mx-auto ${
            visibleSections.has('video') ? 'fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl aspect-video flex items-center justify-center shadow-2xl">
              <div className="text-center px-8">
                <div className="w-20 h-20 rounded-full bg-[#1E40AF] flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                </div>
                <p className="text-lg font-semibold text-white uppercase tracking-wider">
                  Video Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" ref={testimonialsRef} className="py-36 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="text-center mb-20">
            <p className={`text-[#B8860B] text-sm font-medium uppercase tracking-[0.1em] mb-4 ${
              visibleSections.has('testimonials') ? 'fade-in-up' : 'opacity-0'
            }`}>
              Client Success
            </p>
            <h2 className={`text-5xl lg:text-6xl font-semibold text-white ${
              visibleSections.has('testimonials') ? 'fade-in-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              {
                quote: "Kevin's expertise was instrumental in winning our first federal contract. His guidance through the proposal process was invaluable, and his attention to compliance details gave us confidence throughout the entire submission.",
                author: "Michael Rodriguez",
                title: "Federal Contractor",
                delay: 0
              },
              {
                quote: "Professional, knowledgeable, and results-driven. Civic Strategy Partners helped us navigate complex FAR requirements with confidence. The strategic approach to capture management completely transformed our win rate.",
                author: "Sarah Chen",
                title: "Small Business Owner",
                delay: 0.1
              }
            ].map((testimonial, i) => (
              <div
                key={i}
                className={`${visibleSections.has('testimonials') ? 'fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${testimonial.delay}s` }}
              >
                <div className="text-[#B8860B] text-7xl font-bold mb-6 leading-none">"</div>
                <p className="text-2xl text-white leading-relaxed mb-8 italic" style={{ lineHeight: '1.7' }}>
                  {testimonial.quote}
                </p>
                <div>
                  <p className="text-lg font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-[#94A3B8]">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#1E293B]">
        <div className="max-w-[1280px] mx-auto px-[5%] text-center">
          <h2 className="text-5xl lg:text-6xl font-semibold text-white mb-6">
            Ready to Win Federal Contracts?
          </h2>
          <p className="text-xl text-[#94A3B8] mb-10 max-w-[600px] mx-auto" style={{ lineHeight: '1.8' }}>
            Schedule a consultation to discuss your goals and learn how we can help you succeed in the federal marketplace
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg text-base"
            >
              Schedule Consultation
            </a>
            <a
              href="mailto:kevin@civicstrategypartners.com"
              className="btn-secondary inline-flex items-center justify-center font-semibold px-8 py-4 rounded-lg text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-36 bg-white">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-semibold text-[#1E293B] mb-10">
                Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Full Name"
                    className="input-field w-full px-4 py-4 rounded-lg text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Email Address"
                    className="input-field w-full px-4 py-4 rounded-lg text-base"
                  />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Phone Number"
                    className="input-field w-full px-4 py-4 rounded-lg text-base"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Company Name"
                    className="input-field w-full px-4 py-4 rounded-lg text-base"
                  />
                </div>

                <div>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    placeholder="Tell us about your federal contracting needs..."
                    className="input-field w-full px-4 py-4 rounded-lg text-base resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full font-semibold px-8 py-4 rounded-lg text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#1E293B] mb-4">
                  Contact Information
                </h3>
                <p className="text-lg text-[#475569] mb-6" style={{ lineHeight: '1.8' }}>
                  Reach out to discuss your federal contracting goals. We typically respond within 24 hours.
                </p>
                <a
                  href="mailto:kevin@civicstrategypartners.com"
                  className="text-[#1E40AF] hover:text-[#1E3A8A] font-semibold text-lg transition-colors"
                >
                  kevin@civicstrategypartners.com
                </a>
              </div>

              <div className="border-t border-[#E2E8F0] pt-8">
                <p className="text-base text-[#475569] mb-2">
                  A Gov Con Proposals Company
                </p>
                <p className="text-sm text-[#94A3B8]">
                  Service-Disabled Veteran-Owned Small Business (SDVOSB)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] py-20">
        <div className="max-w-[1280px] mx-auto px-[5%]">
          <div className="border-t-2 border-[#B8860B] mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                CIVIC STRATEGY PARTNERS
              </h3>
              <p className="text-sm text-[#94A3B8] mb-2">
                Expert guidance for federal market success
              </p>
              <p className="text-xs text-[#64748B]">
                A Gov Con Proposals Company
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-[#94A3B8] hover:text-[#B8860B] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-[#94A3B8] hover:text-[#B8860B] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-[#94A3B8] hover:text-[#B8860B] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <a
                href="mailto:kevin@civicstrategypartners.com"
                className="text-sm text-[#94A3B8] hover:text-[#B8860B] transition-colors"
              >
                kevin@civicstrategypartners.com
              </a>
            </div>
          </div>

          <div className="border-t border-[#1E293B] pt-8 text-center">
            <p className="text-xs text-[#64748B]">
              © 2025 Civic Strategy Partners LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
