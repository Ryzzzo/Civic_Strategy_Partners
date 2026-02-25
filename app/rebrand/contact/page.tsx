import { Metadata } from 'next';
import Contact from '../sections/Contact';

export const metadata: Metadata = {
  title: 'Contact | Civic Strategy Partners',
  description: 'Schedule a consultation with Civic Strategy Partners for GSA MAS advisory services.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 md:pt-36 lg:pt-40">
      <Contact />
    </div>
  );
}
