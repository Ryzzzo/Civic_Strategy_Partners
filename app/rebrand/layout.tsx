import { ReactNode } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function RebrandLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />

      {/* Layer 1: Solid navy base */}
      <div className="fixed inset-0 bg-[#0a1628]" style={{ zIndex: 0 }} />

      {/* Layer 2: CSP seal watermark — hidden on mobile, visible on md+ */}
      <div
        className="hidden md:flex fixed inset-0 items-center justify-center pointer-events-none"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <img
          src="/fy26_update/new_logo_2026_clear.png"
          alt=""
          className="object-contain"
          style={{ width: '90vmin', height: '90vmin', opacity: 0.07 }}
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
