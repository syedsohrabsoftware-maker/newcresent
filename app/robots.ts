import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://newcrescentschool.in'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // Isse saare pages (/about, /contact, etc.) by default allow ho jayenge
        disallow: [
          '/admin/', 
          '/api/', 
          '/_next/', 
          '/static/',
          '/private/', // Agar koi hidden folder ho toh yahan add karein
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
