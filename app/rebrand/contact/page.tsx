import { Metadata } from 'next';
import Contact from '../sections/Contact';

export const metadata: Metadata = {
  title: 'Contact | Civic Strategy Partners',
  description: 'Schedule a consultation with Civic Strategy Partners for GSA MAS advisory services.',
};

export default function ContactPage() {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 lg:pt-48">
      <Contact />
    </div>
  );
}
