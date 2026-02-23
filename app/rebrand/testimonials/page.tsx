import { Metadata } from 'next';
import Testimonials from '../sections/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials | Civic Strategy Partners',
  description: 'Client testimonials from federal contractors who have worked with Civic Strategy Partners.',
};

export default function TestimonialsPage() {
  return (
    <div className="pt-32">
      <Testimonials />
    </div>
  );
}
