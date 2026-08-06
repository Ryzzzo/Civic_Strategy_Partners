'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import GoldDivider from '../components/GoldDivider';
import { ScrollReveal } from '../components/ScrollReveal';
import TurnstileWidget, { TurnstileHandle } from '../components/TurnstileWidget';

// Inlined at build time by Next. Empty when unset, which degrades the form to
// honeypot + server-side rate limiting rather than blocking every enquiry.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

const helpOptions = [
  { value: '', label: 'What are you looking for help with?' },
  { value: 'New GSA MAS Offer', label: 'New GSA MAS Offer' },
  { value: 'MAS Optimization', label: 'MAS Optimization' },
  { value: 'Retainer Advisory', label: 'Retainer Advisory' },
  { value: 'Federal Market Readiness', label: 'Federal Market Readiness' },
  { value: 'Other', label: 'Other' },
];

const contactLinks = [
  {
    label: 'Email',
    display: 'info@civicstrategypartners.com',
    href: 'mailto:info@civicstrategypartners.com',
    external: false,
  },
  {
    label: 'Website',
    display: 'civicstrategypartners.com',
    href: 'https://civicstrategypartners.com',
    external: true,
  },
  {
    label: 'Signal',
    display: 'civicstrategy.09',
    href: null,
    external: false,
  },
  {
    label: 'LinkedIn',
    display: 'Connect on LinkedIn →',
    href: 'https://www.linkedin.com/in/kevinmartinmba/',
    external: true,
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'w-full px-4 py-3.5 font-sans text-[15px] text-white bg-white/[0.06] border border-white/10 csp-input-glow focus:outline-none transition-all duration-300 placeholder:text-white/55';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [helpTopic, setHelpTopic] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState(''); // honeypot — always empty for humans
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileError, setTurnstileError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const bannerRef = useRef<HTMLDivElement | null>(null);
  const turnstileRef = useRef<TurnstileHandle | null>(null);

  useEffect(() => {
    if (status !== 'success' && status !== 'error') return;
    const id = requestAnimationFrame(() => {
      const el = bannerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY - 120; // clear fixed navbar
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
    return () => cancelAnimationFrame(id);
  }, [status]);

  const validate = () => {
    const next: { email?: string; phone?: string } = {};
    if (!email.trim()) next.email = 'Email is required.';
    else if (!emailRegex.test(email.trim())) next.email = 'Enter a valid email address.';
    if (!phone.trim()) next.phone = 'Phone number is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot. A real visitor can neither see nor tab to this field, so any
    // value means an automated fill — refuse without touching the network.
    if (website.trim() !== '') {
      setErrorMessage('This submission could not be processed.');
      setStatus('error');
      return;
    }

    if (!validate()) return;

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setTurnstileError('Please complete the verification below.');
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          company,
          email: email.trim(),
          phone: phone.trim(),
          helpTopic,
          description,
          website,
          turnstileToken,
        }),
      });

      const data = await res.json().catch(() => ({ ok: false, error: '' }));
      if (!res.ok || !data.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : '');
      }

      setStatus('success');
      setFirstName('');
      setLastName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setHelpTopic('');
      setDescription('');
      setErrors({});
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : '');
      setStatus('error');
    } finally {
      // Turnstile tokens are single-use — clear and re-arm for the next attempt.
      turnstileRef.current?.reset();
      setTurnstileToken('');
    }
  };

  const resetToIdle = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  const submitting = status === 'submitting';

  return (
    <section
      id="contact"
      className="relative pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32 px-4 sm:px-6"
    >
      <div className="max-w-[720px] mx-auto">

        {/* ── Header (hidden after successful submit) ── */}
        {status !== 'success' && (
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <p className="font-playfair font-bold text-brand-gold text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.15em] uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="font-playfair font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[40px]" style={{ lineHeight: 1.3 }}>
                Let&rsquo;s Talk About Your Contract.
              </h2>
              <div className="flex justify-center">
                <GoldDivider width={60} />
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ── Status banner (above form) ── */}
        {(status === 'success' || status === 'error') && (
          <div ref={bannerRef} className="mb-8 scroll-mt-32">
            {status === 'success' ? (
              <div
                role="status"
                className="flex items-start gap-4 px-5 py-4 rounded-lg bg-brand-gold/10 border border-brand-gold/30 backdrop-blur-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full border border-brand-gold/60 text-brand-gold"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10.5L8 14.5L16 5.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="font-playfair font-semibold text-brand-gold text-base sm:text-lg">
                    Thanks — I&rsquo;ll be in touch shortly.
                  </p>
                  <p className="mt-1 font-sans text-white/70 text-sm">
                    Your message is on its way. Expect a reply within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={resetToIdle}
                    className="mt-3 font-playfair font-semibold text-brand-gold/90 hover:text-brand-gold text-xs tracking-[0.15em] uppercase transition-colors duration-300 csp-focus-ring"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <div
                role="alert"
                className="flex items-start gap-4 px-5 py-4 rounded-lg bg-red-500/10 border border-red-400/30 backdrop-blur-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full border border-red-300/60 text-red-300"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6V11" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
                    <circle cx="10" cy="14" r="1" fill="currentColor" />
                  </svg>
                </span>
                <div className="flex-1">
                  <p className="font-playfair font-semibold text-red-200 text-base sm:text-lg">
                    Something went wrong.
                  </p>
                  <p className="mt-1 font-sans text-white/75 text-sm">
                    {errorMessage || 'Your message could not be sent.'}
                  </p>
                  <p className="mt-1 font-sans text-white/75 text-sm">
                    You can always email{' '}
                    <a href="mailto:info@civicstrategypartners.com" className="underline hover:text-brand-gold csp-focus-ring">
                      info@civicstrategypartners.com
                    </a>{' '}
                    directly.
                  </p>
                  <button
                    type="button"
                    onClick={resetToIdle}
                    className="mt-3 font-playfair font-semibold text-red-200/90 hover:text-red-100 text-xs tracking-[0.15em] uppercase transition-colors duration-300 csp-focus-ring"
                  >
                    Try again &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Form ── */}
        {status !== 'success' && (
          <ScrollReveal delay={150}>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  aria-label="First name"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={submitting}
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last name"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={submitting}
                  className={inputClasses}
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                aria-label="Company name"
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                disabled={submitting}
                className={inputClasses}
              />

              {/*
                Honeypot. Hidden from sight, from the accessibility tree and from
                the tab order, so only an automated filler ever populates it.
              */}
              <div aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  aria-label="Email address (required)"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  className={inputClasses}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1.5 text-xs text-red-300 font-sans">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone *"
                  aria-label="Phone number (required)"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={submitting}
                  required
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                  className={inputClasses}
                />
                {errors.phone && (
                  <p id="contact-phone-error" className="mt-1.5 text-xs text-red-300 font-sans">
                    {errors.phone}
                  </p>
                )}
              </div>

              <select
                value={helpTopic}
                aria-label="What are you looking for help with?"
                onChange={(e) => setHelpTopic(e.target.value)}
                disabled={submitting}
                className={`${inputClasses} appearance-none ${helpTopic ? '' : 'text-white/60'}`}
              >
                {helpOptions.map((opt) => (
                  <option
                    key={opt.label}
                    value={opt.value}
                    disabled={opt.value === ''}
                    className="text-[#0C1B2E]"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>

              <textarea
                placeholder="Brief description of your situation"
                aria-label="Brief description of your situation"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={submitting}
                className={`${inputClasses} resize-none`}
              />

              {/* ── Bot verification ── */}
              {TURNSTILE_SITE_KEY && (
                <div>
                  <TurnstileWidget
                    ref={turnstileRef}
                    siteKey={TURNSTILE_SITE_KEY}
                    theme="dark"
                    className="csp-turnstile"
                    onVerify={(token) => {
                      setTurnstileToken(token);
                      setTurnstileError('');
                    }}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => {
                      setTurnstileToken('');
                      setTurnstileError(
                        'Verification could not load. Please refresh the page, or email us directly.',
                      );
                    }}
                  />
                  {turnstileError && (
                    <p role="alert" className="mt-2 text-xs text-red-300 font-sans">
                      {turnstileError}
                    </p>
                  )}
                </div>
              )}

              <div className="flex flex-col items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="csp-submit csp-focus-ring w-full sm:w-auto px-10 py-4 min-h-[44px] font-playfair font-bold text-[14px] tracking-[0.2em] uppercase text-[#0C1B2E] transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{
                    background: 'linear-gradient(135deg, #C5993A, #D4AA4F)',
                    boxShadow: '0 4px 24px rgba(197,153,58,0.2)',
                  }}
                  onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.boxShadow = '0 8px 32px rgba(197,153,58,0.35)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(197,153,58,0.2)'; }}
                >
                  {submitting ? 'Sending…' : 'Request a Consultation'}
                </button>
              </div>
            </form>
          </ScrollReveal>
        )}

        {/* ── Divider ── */}
        <div className="mt-14 sm:mt-16 mb-10 sm:mb-12">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Contact strip — 2x2 grid ── */}
        <ScrollReveal delay={150}>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12 md:gap-y-8">
            {contactLinks.map((item) => {
              const labelEl = (
                <p className="font-playfair font-bold text-brand-gold text-xs sm:text-sm tracking-[0.15em] uppercase mb-1.5">
                  {item.label}
                </p>
              );
              const valueClass = 'font-sans text-white/80 text-sm xl:text-base break-words';

              if (!item.href) {
                return (
                  <div key={item.label} className="text-center">
                    {labelEl}
                    <p className={valueClass}>{item.display}</p>
                  </div>
                );
              }

              return (
                <div key={item.label} className="text-center">
                  {labelEl}
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`${valueClass} hover:text-brand-gold transition-colors duration-300 no-underline csp-focus-ring`}
                  >
                    {item.display}
                  </a>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── Gold diamond divider ── */}
        <div className="mt-16 flex justify-center">
          <GoldDivider width={40} />
        </div>

        {/* ── Secondary scheduler link ── */}
        <div className="mt-6 text-center max-w-md mx-auto">
          <p className="font-sans italic text-white/60 text-sm mb-1.5">
            Prefer to schedule directly?
          </p>
          <a
            href="https://meetings-na2.hubspot.com/kmartin"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-playfair font-medium text-brand-gold text-base tracking-wider uppercase no-underline hover:tracking-widest transition-all duration-300 csp-focus-ring"
          >
            Book a call
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
