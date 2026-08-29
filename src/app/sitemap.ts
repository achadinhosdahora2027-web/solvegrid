import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://solvegrid.com.br';
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/growth/en-us/nordvpn-infra-cybersecurity/tecnologia-coupons`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8
    }
  ];
}
