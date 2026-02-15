import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://newcrescent.edu' // Bhai yahan apni asli domain dalna baad mein

  // Aapke saare premium pages ki list
  const routes = [
    '',
    '/about',
    '/academics',
    '/admissions',
    '/apply',
    '/contact',
    '/gallery',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Home page ko sabse zyada priority
  }))

  return routes
}