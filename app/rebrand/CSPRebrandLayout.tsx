'use client';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ValueStrip from './sections/ValueStrip';
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
    <main className="bg-brand-navy-deep min-h-screen">
      <Navbar />
      <Hero />
      <ValueStrip />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Insights />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
