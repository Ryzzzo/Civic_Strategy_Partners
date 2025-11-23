import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  timeout: 10000,
  customFields: {
    item: ['description', 'content', 'summary']
  }
});

export const revalidate = 300;

const fallbackNews = [
  {
    title: 'GSA Announces New Initiatives to Modernize Federal Acquisition',
    link: 'https://www.gsa.gov/blog',
    pubDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'The General Services Administration continues to lead efforts in modernizing federal procurement processes, making it easier for agencies to acquire innovative solutions and for vendors to do business with the government.'
  },
  {
    title: 'Updates to GSA Multiple Award Schedule Program',
    link: 'https://www.gsa.gov/blog',
    pubDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'Recent updates to the MAS program provide greater flexibility for contract holders and improved access for federal buyers. Learn about the latest changes and how they impact your contracting strategy.'
  },
  {
    title: 'Federal Marketplace Trends: What Contractors Need to Know',
    link: 'https://www.gsa.gov/blog',
    pubDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'Industry insights and federal acquisition trends show increasing emphasis on commercial solutions, streamlined procurement, and expanded small business opportunities across federal agencies.'
  },
  {
    title: 'GSA Technology Initiatives Support Agency Modernization',
    link: 'https://www.gsa.gov/blog',
    pubDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'New technology acquisition vehicles and modernization initiatives help federal agencies access cutting-edge solutions while maintaining compliance and security requirements.'
  }
];

export async function GET() {
  const feedUrls = [
    'https://www.gsa.gov/about-us/newsroom/news-releases.rss',
    'https://www.gsa.gov/resources/rss',
    'https://blog.gsa.gov/feed/',
    'https://www.gsa.gov/blog/feed/',
    'https://www.gsa.gov/newsroom/rss'
  ];

  for (const feedUrl of feedUrls) {
    try {
      const feed = await parser.parseURL(feedUrl);

      if (feed.items && feed.items.length > 0) {
        const items = feed.items.slice(0, 4).map(item => ({
          title: item.title || 'Untitled',
          link: item.link || 'https://www.gsa.gov/blog',
          pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
          description: (item.contentSnippet || item.description || item.content || item.summary || '').substring(0, 250)
        }));

        return NextResponse.json({ items }, {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
          }
        });
      }
    } catch (error) {
      console.error(`Error fetching GSA news from ${feedUrl}:`, error);
      continue;
    }
  }

  console.log('Using fallback GSA news data');
  return NextResponse.json({ items: fallbackNews }, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
    }
  });
}
