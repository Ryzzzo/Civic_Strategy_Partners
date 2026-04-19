/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' removed — API routes (e.g. /api/contact) require a
  // server runtime. Static export strips them, which was causing 404s in prod.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: '**.hubspot.com',
      },
      {
        protocol: 'https',
        hostname: '**.hubspotusercontent.net',
      },
    ],
  },
};

module.exports = nextConfig;
