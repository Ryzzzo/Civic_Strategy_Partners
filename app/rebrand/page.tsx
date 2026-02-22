import { Metadata } from 'next';
import CSPRebrandLayout from './CSPRebrandLayout';

export const metadata: Metadata = {
  title: 'Civic Strategy Partners | Elite Federal Contract Advisory',
  description: 'Fractional GSA MAS Authorized Negotiator. Embedded executive advisory for federal contractors navigating offers, modifications, and lifecycle compliance.',
};

export default function RebrandPage() {
  return <CSPRebrandLayout />;
}
