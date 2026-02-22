/**
 * CSP Brand Color System — Single Source of Truth
 * Elite Boutique Federal Advisory Aesthetic
 */
export const brand = {
  // Primary Navy Spectrum
  navy: {
    deep: '#0C1B2E',      // Deepest backgrounds, hero
    DEFAULT: '#152A45',    // Primary background
    light: '#1B3A5C',      // Cards, elevated surfaces
    medium: '#1e3a5f',     // Legacy reference (HubSpot forms)
  },
  // Gold Accents
  gold: {
    DEFAULT: '#C5993A',    // Primary gold — CTAs, borders, accents
    light: '#D4AA4F',      // Hover states, gradients
    muted: '#B8924A',      // Subtle accents
  },
  // Neutrals
  cream: '#F5F1EB',        // Light section backgrounds (FAQ, alternating)
  white: '#FFFFFF',
  gray: '#8A9AAE',         // Secondary text on dark backgrounds
  // Semantic
  text: {
    primary: '#FFFFFF',     // Primary text on dark
    secondary: '#FFFFFFC0', // 75% white — body text on dark
    muted: '#FFFFFFB0',     // 69% white — subtle text on dark
    dark: '#0C1B2E',        // Text on light backgrounds
    darkMuted: '#152A45',   // Secondary text on light backgrounds
  },
} as const;

// Typography class presets for consistent usage
export const type = {
  // Headings — Playfair Display
  h1: 'font-playfair font-bold',
  h2: 'font-playfair font-bold',
  h3: 'font-playfair font-semibold',
  // Accent/Nav/Labels — Cormorant Garamond
  label: 'font-cormorant font-semibold uppercase tracking-[0.2em]',
  nav: 'font-cormorant font-semibold uppercase tracking-[0.15em]',
  accent: 'font-cormorant',
  // Body — Inter
  body: 'font-sans',
} as const;
