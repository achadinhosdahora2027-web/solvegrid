import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: [
      'https://solvegrid.com.br/sitemap.xml'
    ],
    host: 'https://solvegrid.com.br'
  };
}
