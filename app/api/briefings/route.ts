import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
    
    if (!HUBSPOT_ACCESS_TOKEN) {
      console.error('Missing HUBSPOT_ACCESS_TOKEN');
      return NextResponse.json({ briefings: [] });
    }

    // Added content_group_id filter for the specific blog
    // Request htmlHead to get canonical URL from meta tags
    const url = 'https://api.hubapi.com/cms/v3/blogs/posts?limit=10&state=PUBLISHED&sort=-publishDate&content_group_id=267778497252&properties=name,htmlTitle,publishDate,metaDescription,postSummary,postBody,featuredImage,htmlHead,headHtml,linkRelCanonicalUrl';
    
    console.log('Fetching from HubSpot:', url);

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('HubSpot API error:', response.status, errorText);
      return NextResponse.json({ briefings: [] });
    }

    const data = await response.json();
    console.log('HubSpot returned', data.results?.length || 0, 'posts');

    // Helper function to extract canonical URL from HTML head
    const extractCanonicalUrl = (htmlHead: string): string | null => {
      if (!htmlHead) return null;
      const match = htmlHead.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                    htmlHead.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
      return match ? match[1] : null;
    };

    // Debug: Log first post to see available fields
    if (data.results && data.results.length > 0) {
      console.log('First post fields:', Object.keys(data.results[0]));
      console.log('linkRelCanonicalUrl:', data.results[0].linkRelCanonicalUrl);
      console.log('htmlHead sample:', data.results[0].htmlHead?.substring(0, 500));
      console.log('headHtml sample:', data.results[0].headHtml?.substring(0, 500));
    }

    const briefings = data.results?.map((post: any) => {
      // Try to get canonical URL from various possible fields
      let linkedInUrl = post.linkRelCanonicalUrl ||
                        extractCanonicalUrl(post.htmlHead) ||
                        extractCanonicalUrl(post.headHtml);

      // Only use LinkedIn canonical URLs, fall back to profile if not found or not a LinkedIn URL
      if (!linkedInUrl || !linkedInUrl.includes('linkedin.com')) {
        linkedInUrl = 'https://www.linkedin.com/in/kevinmartincsp/';
      }

      console.log(`Post "${post.name}" canonical URL:`, linkedInUrl);

      return {
        title: post.name || post.htmlTitle || 'Untitled',
        publishDate: new Date(post.publishDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        excerpt: post.metaDescription || post.postSummary || '',
        fullContent: post.postBody || post.post_body || '',
        featuredImage: post.featuredImage || 'https://placehold.co/1200x627/1e3a5f/ffffff?text=Civic+Strategy+Briefing',
        linkedInUrl,
        authorName: 'Kevin Martin, MBA',
        authorAvatar: '/1743701547902.jpeg'
      };
    }) || [];

    return NextResponse.json({ briefings });
  } catch (error) {
    console.error('Error fetching briefings:', error);
    return NextResponse.json({ briefings: [] });
  }
}