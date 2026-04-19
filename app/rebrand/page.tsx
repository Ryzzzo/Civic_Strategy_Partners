import { Metadata } from 'next';
import Hero from './sections/Hero';
import ValueStrip from './sections/ValueStrip';
import CorePositioning from './sections/CorePositioning';
import TestimonialPreview from './sections/TestimonialPreview';
import HomeCTA from './sections/HomeCTA';

export const metadata: Metadata = {
  title: 'Civic Strategy Partners | Elite Federal Contract Advisory',
  description: 'Fractional GSA MAS Authorized Negotiator. Embedded executive advisory for federal contractors navigating offers, modifications, and lifecycle compliance.',
};

export default function RebrandPage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <CorePositioning />
      <TestimonialPreview />
      <HomeCTA />
    </>
  );
}
