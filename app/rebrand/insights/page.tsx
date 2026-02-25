import { Metadata } from 'next';
import Insights from '../sections/Insights';

export const metadata: Metadata = {
  title: 'Insights | Civic Strategy Partners',
  description: 'Analysis and perspective from a former GSA Contract Specialist — the Civic Strategy Briefing.',
};

export default function InsightsPage() {
  return (
    <div className="pt-36 sm:pt-40 md:pt-44 lg:pt-48">
      <Insights />
    </div>
  );
}
