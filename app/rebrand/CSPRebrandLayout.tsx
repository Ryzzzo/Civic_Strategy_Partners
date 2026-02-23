'use client';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ValueStrip from './sections/ValueStrip';
import CorePositioning from './sections/CorePositioning';
import Services from './sections/Services';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Insights from './sections/Insights';
import Resources from './sections/Resources';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function CSPRebrandLayout() {
  return (
    <main className="relative min-h-screen" style={{ background: '#0C1B2E' }}>
      {/* Fixed watermark — stays centered in viewport behind all content */}
      <div
        className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/fy26_update/new_logo_2026_clear.png"
          alt=""
          className="w-[90vw] max-w-[1400px] opacity-[0.04] select-none"
        />
      </div>

      {/* All page content — above watermark */}
      <div className="relative z-[1]">
        <Navbar />

        {/* Unified dark gradient — Hero through Testimonials */}
        <div
          style={{
            background:
              'linear-gradient(180deg, #0C1B2E 0%, #132238 15%, #162a45 35%, #1a3050 50%, #162a45 65%, #132238 85%, #0C1B2E 100%)',
          }}
        >
          <Hero />
          <ValueStrip />
          <CorePositioning />
          <Services />
          <About />
          <Testimonials />
        </div>

        {/* Dark-to-cream transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #0C1B2E, #F5F1EB)' }}
        />

        <FAQ />

        {/* Cream-to-dark transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #F5F1EB, #0C1B2E)' }}
        />

        <Insights />

        {/* Dark-to-cream transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #0C1B2E, #F5F1EB)' }}
        />

        <Resources />

        {/* Cream-to-dark transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #F5F1EB, #0C1B2E)' }}
        />

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
