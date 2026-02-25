import { Metadata } from 'next';
import FAQ from '../sections/FAQ';

export const metadata: Metadata = {
  title: 'FAQ | Civic Strategy Partners',
  description: 'Frequently asked questions about GSA MAS advisory, engagement models, and working with Civic Strategy Partners.',
};

export default function FAQPage() {
  return (
    <div className="pt-32 md:pt-36 lg:pt-40">
      <FAQ />
    </div>
  );
}
