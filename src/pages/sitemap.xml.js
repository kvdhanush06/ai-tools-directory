import data from '../data/tools.json';

export async function GET() {
  const base = 'https://aitoolsdirectory.allkvd.me';
  const staticPages = [
    '/', '/ai-tools', '/categories', '/guides', '/about', '/privacy', '/terms', '/contact', '/search'
  ];
  const guideSlugs = [
    'best-ai-tools-for-students','best-ai-tools-for-developers','best-ai-tools-for-marketing',
    'ai-tools-for-video-editing','free-ai-tools-worth-using','ai-tools-for-seo','ai-tools-for-presentations',
    'ai-tools-for-resume','ai-tools-for-meeting-notes','ai-tools-for-product-managers','ai-tools-for-startups',
    'ai-tools-for-designers','ai-tools-for-customer-support','ai-tools-for-content-creators','ai-tools-for-research',
    'ai-tools-for-notion-workflows','ai-tools-for-email-writing','ai-tools-for-interview-prep','ai-tools-for-learning',
    'ai-tools-for-small-business'
  ];

  const urls = [
    ...staticPages,
    ...data.categories.map(c => `/category/${c.slug}`),
    ...data.tools.map(t => `/tool/${t.slug}`),
    ...guideSlugs.map(s => `/guides/${s}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
` +
    urls.map(u => `  <url><loc>${base}${u}</loc></url>`).join('\n') +
    `
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
