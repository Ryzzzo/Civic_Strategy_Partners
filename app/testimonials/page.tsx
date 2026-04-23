import { Metadata } from 'next';
import Testimonials from '../sections/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials | Civic Strategy Partners',
  description: 'Client testimonials from federal contractors who have worked with Civic Strategy Partners.',
};

export default function TestimonialsPage() {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 lg:pt-48">
      <Testimonials />
    </div>
  );
}
