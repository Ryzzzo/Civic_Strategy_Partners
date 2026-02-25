import { Metadata } from 'next';
import Services from '../sections/Services';

export const metadata: Metadata = {
  title: 'Services | Civic Strategy Partners',
  description: 'GSA MAS engagement models — fractional authorized negotiator, strategic retainer advisory, and project-based support.',
};

export default function ServicesPage() {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 lg:pt-48">
      <Services />
    </div>
  );
}
