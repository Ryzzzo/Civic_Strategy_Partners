import { Metadata } from 'next';
import About from '../sections/About';

export const metadata: Metadata = {
  title: 'About | Civic Strategy Partners',
  description: 'Kevin Martin — former GSA Contract Specialist (1102), Marine Corps veteran, and founder of Civic Strategy Partners.',
};

export default function AboutPage() {
  return (
    <div className="pt-32">
      <About />
    </div>
  );
}
