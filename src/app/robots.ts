import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: [
      'https://solvegrid.com.br/sitemap.xml',
      'https://solvegrid.com.br/growth/sitemaps/sitemap-index.xml'
    ],
    host: 'https://solvegrid.com.br'
  };
}
