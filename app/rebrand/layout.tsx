import { ReactNode } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

export default function RebrandLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Layer 1: Solid navy base */}
      <div className="fixed inset-0 bg-[#0a1628]" style={{ zIndex: 0 }} />

      {/* Layer 2: Animated gradient wave — above navy, below seal */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 gradient-wave-bg" />
      </div>

      {/* Layer 3: CSP seal watermark — above wave, below content */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <img
          src="/fy26_update/new_logo_2026_clear.png"
          alt=""
          className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[90vw] lg:h-auto lg:max-w-[1400px] opacity-[0.05] select-none"
        />
      </div>

      {/* Layer 4: Site content — above everything */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
