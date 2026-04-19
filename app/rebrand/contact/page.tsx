import { Metadata } from 'next';
import Contact from '../sections/Contact';

export const metadata: Metadata = {
  title: 'Contact | Civic Strategy Partners',
  description: 'Schedule a consultation with Civic Strategy Partners for GSA MAS advisory services.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 md:pt-28 lg:pt-32">
      <Contact />
    </div>
  );
}
