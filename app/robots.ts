import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://newcrescentschool.in'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // Private folders ko hide rakhein
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Sitemap ka link hamesha .xml hi rahega
  }
}