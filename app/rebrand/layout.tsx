import { ReactNode } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';

export default function RebrandLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />

      {/* Layer 1: Solid navy base */}
      <div className="fixed inset-0 bg-[#0a1628]" style={{ zIndex: 0 }} />

      {/* Layer 2: Static CSP Seal Watermark — desktop only */}
      <div
        className="fixed inset-0 hidden md:flex items-center justify-center pointer-events-none"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <img
          src="/fy26_update/new_logo_2026_clear.png"
          alt=""
          className="opacity-[0.10]"
          style={{
            width: 'min(110vmin, 1000px)',
            height: 'min(110vmin, 1000px)',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Layer 4: Site content — above everything */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />

        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        <Footer />
      </div>
    </div>
  );
}
