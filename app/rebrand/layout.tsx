import { ReactNode } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';
import ParallaxWatermark from './components/ParallaxWatermark';
import PageTransition from './components/PageTransition';
import LoadingScreen from './components/LoadingScreen';

export default function RebrandLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ScrollProgress />

      {/* Layer 1: Solid navy base */}
      <div className="fixed inset-0 bg-[#0a1628]" style={{ zIndex: 0 }} />

      {/* Layer 2: CSP seal watermark — parallax on desktop, hidden on mobile */}
      <ParallaxWatermark />

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
