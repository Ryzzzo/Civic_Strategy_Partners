'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FileText, Target, Shield, CheckCircle2, Award, Building2, ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:kevin@civicstrategypartners.com?subject=Federal Contracting Consultation - ${formData.company}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
  };

  return (
    <div className="min-h-screen bg-[#0a1628]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap');

        @keyframes float-stars {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
        }

        .star {
          animation: float-stars 8s ease-in-out infinite;
        }

        .star:nth-child(2) { animation-delay: 1s; }
        .star:nth-child(3) { animation-delay: 2s; }
        .star:nth-child(4) { animation-delay: 3s; }
        .star:nth-child(5) { animation-delay: 4s; }
      `}</style>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#1e3a8a] to-[#1e40af]"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="star absolute top-20 left-10 w-1 h-1 bg-white rounded-full"></div>
          <div className="star absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="star absolute top-60 right-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="star absolute top-32 right-20 w-1 h-1 bg-white rounded-full"></div>
          <div className="star absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="text-center mb-16">
            <div className="mb-12 flex justify-center">
              <Image
                src="/Civic Strategy Partners LLC Logo NO TAGLINE.png"
                alt="Civic Strategy Partners, LLC"
                width={280}
                height={112}
                priority
                className="w-auto h-auto max-w-[280px]"
              />
            </div>

            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-wide">
              Expert Guidance for Federal Market Success
            </h1>

            <p className="font-['Inter'] text-2xl sm:text-3xl text-white/80 mb-16 font-medium tracking-wide">
              Marine-Owned. Mission-Driven. Federal-Focused.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <p className="font-['Inter'] text-white text-lg font-semibold">14+ Years Federal Contracting Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <p className="font-['Inter'] text-white text-lg font-semibold">Former Marine Corps Leadership</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <p className="font-['Inter'] text-white text-lg font-semibold">$500M+ in Proposals Supported</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <p className="font-['Inter'] text-white text-lg font-semibold">Nationwide Agency Relationships</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:kevin@civicstrategypartners.com?subject=Federal Contracting Consultation"
                className="inline-flex items-center gap-2 bg-[#d4af37] text-[#0a1628] font-['Inter'] font-bold px-10 py-5 rounded-lg hover:bg-[#c29d2f] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 text-lg"
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-transparent text-white font-['Inter'] font-semibold px-10 py-5 rounded-lg border-2 border-white/80 hover:bg-white/10 hover:border-white transition-all duration-300 text-lg"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-5xl sm:text-6xl font-bold text-[#0a1628] text-center mb-20 tracking-wide">
            Strategic Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-transparent rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1e3a8a] rounded-2xl transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0a1628] mb-6">
                  Proposal Development & Strategy
                </h3>
                <p className="font-['Inter'] text-gray-700 leading-relaxed text-base">
                  Compliant, compelling proposals for SBIRs, RFPs, and federal opportunities. We craft winning narratives that resonate with government evaluators and secure contracts.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-transparent rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1e3a8a] rounded-2xl transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0a1628] mb-6">
                  Market Intelligence & Positioning
                </h3>
                <p className="font-['Inter'] text-gray-700 leading-relaxed text-base">
                  Strategic market analysis, opportunity identification, and positioning for sustained federal growth. Navigate complex procurement landscapes with confidence and precision.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-transparent rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1e3a8a] rounded-2xl transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-8 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0a1628] mb-6">
                  Compliance & Capability Assessment
                </h3>
                <p className="font-['Inter'] text-gray-700 leading-relaxed text-base">
                  Expert guidance through SBA 8(a), GSA Schedule, and federal regulations. Comprehensive capability assessments and certification support for competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-5xl sm:text-6xl font-bold text-white text-center mb-20 tracking-wide">
            Federal Market Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h3 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-6">
                Our Approach
              </h3>
              <p className="font-['Inter'] text-white/90 leading-relaxed text-lg">
                Civic Strategy Partners combines military precision with deep federal procurement expertise. Our methodology is built on strategic planning, compliant execution, and relationship-driven results.
              </p>
              <p className="font-['Inter'] text-white/90 leading-relaxed text-lg">
                We guide businesses through every phase of federal contracting—from initial market entry and capability development to proposal submission and contract management. Our veteran leadership brings mission-focused discipline to complex government processes.
              </p>
              <p className="font-['Inter'] text-white/90 leading-relaxed text-lg">
                With established relationships across DoD, VA, GSA, DHS, and civilian agencies, we position our clients for sustainable federal market growth and competitive advantage.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  <p className="font-['Inter'] text-white font-semibold text-base">SAM.gov Registered</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
                  <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  <p className="font-['Inter'] text-white font-semibold text-base">GSA Schedule Holder</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
                  <Shield className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  <p className="font-['Inter'] text-white font-semibold text-base">SDVOSB Certified</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
                  <Building2 className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  <p className="font-['Inter'] text-white font-semibold text-base">SBA 8(a) Expert</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 backdrop-blur-lg border border-[#d4af37]/30 rounded-xl p-8 mt-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="font-['Playfair_Display'] text-4xl font-bold text-white mb-2">14+</p>
                    <p className="font-['Inter'] text-white/80 text-sm">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-['Playfair_Display'] text-4xl font-bold text-white mb-2">$500M+</p>
                    <p className="font-['Inter'] text-white/80 text-sm">Proposals Supported</p>
                  </div>
                  <div>
                    <p className="font-['Playfair_Display'] text-4xl font-bold text-white mb-2">50+</p>
                    <p className="font-['Inter'] text-white/80 text-sm">Agency Relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-white mb-12 tracking-wide">
            Serving Businesses Nationwide
          </h2>

          <div className="mb-16">
            <p className="font-['Inter'] text-2xl text-[#d4af37] font-semibold mb-8">
              Your Mission. Our Expertise. Federal Results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <p className="font-['Inter'] text-white/90 font-semibold text-lg">DoD</p>
            </div>
            <div className="text-center">
              <p className="font-['Inter'] text-white/90 font-semibold text-lg">VA</p>
            </div>
            <div className="text-center">
              <p className="font-['Inter'] text-white/90 font-semibold text-lg">GSA</p>
            </div>
            <div className="text-center">
              <p className="font-['Inter'] text-white/90 font-semibold text-lg">DHS</p>
            </div>
            <div className="text-center">
              <p className="font-['Inter'] text-white/90 font-semibold text-lg">HHS</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-8">
              Ready to Enter the Federal Market?
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block font-['Inter'] text-white font-semibold mb-3 text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-white/95 border-2 border-white/30 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all font-['Inter']"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-['Inter'] text-white font-semibold mb-3 text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-white/95 border-2 border-white/30 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all font-['Inter']"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block font-['Inter'] text-white font-semibold mb-3 text-base">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-white/95 border-2 border-white/30 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all font-['Inter']"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-['Inter'] text-white font-semibold mb-3 text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-6 py-4 rounded-lg bg-white/95 border-2 border-white/30 focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/50 transition-all resize-none font-['Inter']"
                  placeholder="Tell us about your federal contracting needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d4af37] text-[#0a1628] font-['Inter'] font-bold px-10 py-5 rounded-lg hover:bg-[#c29d2f] transition-all duration-300 shadow-2xl hover:shadow-[#d4af37]/50 hover:scale-105 text-lg"
              >
                Submit Consultation Request
              </button>
            </form>

            <div className="mt-10 pt-10 border-t border-white/20">
              <p className="font-['Inter'] text-white/80 mb-4 text-base">Or contact us directly:</p>
              <a
                href="mailto:kevin@civicstrategypartners.com"
                className="font-['Inter'] text-[#d4af37] font-semibold text-xl hover:text-[#c29d2f] transition-colors"
              >
                kevin@civicstrategypartners.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a1628] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Image
              src="/Civic Strategy Partners LLC Logo NO TAGLINE.png"
              alt="Civic Strategy Partners, LLC"
              width={200}
              height={80}
              className="w-auto h-auto max-w-[200px] mx-auto mb-8 opacity-90"
            />
            <p className="font-['Playfair_Display'] text-2xl text-[#d4af37] font-bold mb-2">
              Veteran-Owned. Mission-Focused.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-['Inter'] text-white/70 text-sm">
                © 2024 Civic Strategy Partners, LLC. All rights reserved.
              </p>
              <a
                href="mailto:kevin@civicstrategypartners.com"
                className="font-['Inter'] text-white/70 hover:text-[#d4af37] transition-colors text-sm"
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
