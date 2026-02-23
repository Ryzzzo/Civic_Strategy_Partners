import { Metadata } from 'next';
import Services from '../sections/Services';

export const metadata: Metadata = {
  title: 'Services | Civic Strategy Partners',
  description: 'GSA MAS engagement models — fractional authorized negotiator, strategic retainer advisory, and project-based support.',
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <Services />
    </div>
  );
}
