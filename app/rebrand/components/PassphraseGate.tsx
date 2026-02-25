'use client';

import { useState, useEffect } from 'react';

const PASSPHRASE = 'kevin';

export default function PassphraseGate({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('csp-preview-auth') === 'true') {
      setAuthorized(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toLowerCase().trim() === PASSPHRASE) {
      sessionStorage.setItem('csp-preview-auth', 'true');
      setAuthorized(true);
      setError(false);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (checking) return null;

  if (authorized) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a1628]">
      <div className="text-center px-6 max-w-sm w-full">
        <img
          src="/fy26_update/new_logo_2026_clear.png"
          alt="Civic Strategy Partners"
          className="w-20 h-20 mx-auto mb-6 opacity-80"
          style={{ objectFit: 'contain' }}
        />

        <h1
          className="font-playfair font-bold text-white text-xl tracking-wider mb-2"
          style={{ lineHeight: 1.35 }}
        >
          CIVIC STRATEGY PARTNERS
        </h1>
        <p className="font-sans text-white/40 text-xs tracking-widest uppercase mb-8">
          Preview Access
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter passphrase"
            autoFocus
            className="w-full px-4 py-3 bg-white/[0.06] border rounded-lg font-sans text-sm text-white placeholder-white/30 focus:outline-none focus:shadow-[0_0_0_3px_rgba(201,162,39,0.15)] transition-all duration-300"
            style={{
              borderColor: error ? 'rgba(220, 50, 50, 0.5)' : 'rgba(255, 255, 255, 0.1)',
            }}
          />
          {error && (
            <p className="text-red-400/80 text-xs font-sans">
              Invalid passphrase. Please try again.
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-brand-gold text-[#0a1628] font-sans font-semibold text-sm tracking-wider uppercase rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,162,39,0.3)]"
          >
            Access Preview
          </button>
        </form>

        <p className="font-sans text-white/20 text-[11px] mt-8">
          This is a private preview. Unauthorized access is not permitted.
        </p>
      </div>
    </div>
  );
}
