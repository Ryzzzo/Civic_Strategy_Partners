'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip loading on subsequent navigations within the same session
    if (typeof window !== 'undefined' && sessionStorage.getItem('csp-loaded')) {
      setIsLoading(false);
      setProgress(100);
      return;
    }

    // Simulate loading progress with ease-out curve
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(1, (100 - prev) * 0.15);
        return Math.min(100, prev + increment);
      });
    }, 50);

    // Minimum display time
    const minTimer = setTimeout(() => {
      setProgress(100);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('csp-loaded', 'true');
      }
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(minTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100 && isLoading) {
      const exitTimer = setTimeout(() => setIsLoading(false), 400);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a1628]"
          style={{ zIndex: 100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* CSP Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: progress > 10 ? 0.9 : 0,
              scale: progress >= 100 ? 0.9 : 1,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8"
          >
            <img
              src="/fy26_update/new_logo_2026_clear.png"
              alt="Civic Strategy Partners"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: progress > 20 ? 1 : 0,
              y: progress > 20 ? 0 : 10,
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-playfair font-bold text-white text-lg sm:text-xl tracking-wider mb-8"
            style={{ lineHeight: 1.35 }}
          >
            CIVIC STRATEGY PARTNERS
          </motion.h1>

          {/* Gold Progress Bar */}
          <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-gold rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: progress > 60 ? 0.5 : 0 }}
            transition={{ duration: 0.4 }}
            className="font-sans text-white/40 text-xs tracking-widest uppercase mt-6"
          >
            Federal Market Excellence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
