import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://newcrescentschool.in'
  const currentDate = new Date().toISOString().split('T')[0]

  // 1. Core Navigation Pages (High Priority)
  const staticRoutes = [
    '',
    '/about',
    '/academics',
    '/admissions',
    '/apply',
    '/contact',
    '/gallery',
    '/news',
    '/campus',
    '/best-schools-city-wise',
    '/school-list-mewat-haryana', // <-- Naya Page Added
    '/private-school-in-mewat',   // <-- Naya Page Added
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Brand Authority Page (Aapka NCPS Rehpua Biology Hub)
  const brandRoutes = [
    '/school/new-crescent-public-school-rehpua',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 1.0, 
  }))

  // 3. Authority URL Slugs
  const authoritySlugs = [
    'top-5-schools-in-mewat',
    'schools-with-transport-in-mewat',
    'smart-class-education-nuh',
    'affordable-fee-structure-mewat',
    'best-biology-school-in-mewat'
  ]

  const authorityRoutes = authoritySlugs.map((slug) => ({
    url: `${baseUrl}/authority/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9, 
  }))

  // 4. Hyper-Local Location Pages
  const locations = [
    'punhana', 'pinangwan', 'nuh', 'firojpur-jhirka', 
    'palwal', 'hatheen', 'sikrawa', 'hodal', 'alwar', 'tauru'
  ]

  const locationRoutes = locations.map((city) => ({
    url: `${baseUrl}/best-school-near-me/${city}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8, 
  }))

  return [...staticRoutes, ...brandRoutes, ...authorityRoutes, ...locationRoutes]
}