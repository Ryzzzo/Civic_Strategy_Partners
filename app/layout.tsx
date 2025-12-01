import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.civicstrategypartners.com'),
  title: 'Civic Strategy Partners | GSA Schedule Consulting',
  description: 'Expert guidance for federal market success. Professional government contracting consulting services specializing in GSA MAS contracts and federal marketplace strategy.',
  openGraph: {
    title: 'Civic Strategy Partners | GSA Schedule Consulting',
    description: 'Marine-Owned. Mission-Driven. Federal-Focused. Expert GSA MAS consulting and federal readiness advisory.',
    url: 'https://www.civicstrategypartners.com',
    siteName: 'Civic Strategy Partners',
    images: [
      {
        url: '/CSP_Wide_Smaller_Text.png',
        width: 1200,
        height: 630,
        alt: 'Civic Strategy Partners - GSA Schedule Consulting',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civic Strategy Partners | GSA Schedule Consulting',
    description: 'Marine-Owned. Mission-Driven. Federal-Focused.',
    images: ['/CSP_Wide_Smaller_Text.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Civic Strategy Partners Minus LLC.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Civic Strategy Partners Minus LLC.png" />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na2.hs-scripts.com/244293135.js"></script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
