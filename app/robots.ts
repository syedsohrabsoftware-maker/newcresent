import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://newcrescentschool.in'

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/admissions', // Folder structure ke hisaab se sahi path
        '/contact',
        '/about',
        '/gallery',
        '/campus',      // Naya folder added
        '/news',        // Naya folder added
        '/apply',       // Naya folder added
        '/smart-class-nuh', // Specific SEO folder
        '/best-school-near-me/' // Local SEO paths
      ],
      disallow: [
        '/admin/', 
        '/api/', 
        '/_next/', 
        '/static/'
      ], 
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
