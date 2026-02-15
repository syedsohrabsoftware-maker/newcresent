import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Agar koi private folder ho toh use mana kar sakte ho
    },
    sitemap: 'https://newcrescent.edu/sitemap.xml', // Domain change kar lena
  }
}