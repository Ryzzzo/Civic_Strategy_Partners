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
    <main
      className="relative min-h-screen"
      style={{
        background: `linear-gradient(180deg, #0d1a2d 0%, #142438 5%, #1a3050 12%, #162a45 20%, #1e3a5f 30%, #1a3352 38%, #213d62 45%, #182e4a 52%, #1e3a5f 60%, #152840 68%, #1b3355 75%, #1e3a5f 82%, #162a45 90%, #0f1f33 100%)`,
      }}
    >
      {/* Fixed watermark — z-[1], above gradient bg, below content */}
      <div
        className="fixed inset-0 z-[1] flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/fy26_update/new_logo_2026_clear.png"
          alt=""
          className="w-[90vw] max-w-[1400px] opacity-[0.05] select-none"
        />
      </div>

      {/* All page content — z-[2], above watermark */}
      <div className="relative z-[2]">
        <Navbar />

        <Hero />
        <ValueStrip />
        <CorePositioning />
        <Services />
        <About />
        <Testimonials />

        {/* Dark-to-cream transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #1a3050, #F5F1EB)' }}
        />

        <FAQ />

        {/* Cream-to-dark transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #F5F1EB, #1a3050)' }}
        />

        <Insights />

        {/* Dark-to-cream transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #1a3050, #F5F1EB)' }}
        />

        <Resources />

        {/* Cream-to-dark transition */}
        <div
          className="h-24"
          style={{ background: 'linear-gradient(180deg, #F5F1EB, #1a3050)' }}
        />

        <Contact />
        <Footer />
      </div>
    </main>
  );
}
