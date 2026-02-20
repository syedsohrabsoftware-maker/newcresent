import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://newcrescentschool.in' 

  // 1. Static Premium Pages
  const staticRoutes = [
    '',
    '/about',
    '/academics',
    '/admissions',
    '/apply',
    '/contact',
    '/gallery',
    '/best-schools-city-wise',
    '/top-5-schools-in-mewat',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Local SEO Location Pages (Dynamic)
  const locations = [
    'punhana', 'pinangwan', 'nuh', 'firojpur-jhirka', 
    'palwal', 'hatheen', 'sikrawa', 'hodal', 'alwar'
  ]

  const locationRoutes = locations.map((city) => ({
    url: `${baseUrl}/best-school-near-me/${city}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.9, 
  }))

  // 3. New Authority Pages (Abhi jo humne banaye hain)
  const authorityPages = [
    'schools-with-transport-in-mewat',
    'smart-class-education-nuh',
    'affordable-fee-structure-mewat'
  ]

  const authorityRoutes = authorityPages.map((slug) => ({
    url: `${baseUrl}/authority/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Sabhi lists ko merge karke return karna
  return [...staticRoutes, ...locationRoutes, ...authorityRoutes]
}