import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://newcrescentschool.in'
  const currentDate = new Date().toISOString().split('T')[0]

  // 1. Static Core Pages (Aapke sidebar folders ke mutabiq)
  const staticRoutes = [
    '',
    '/about',
    '/academics',
    '/admissions',
    '/apply',
    '/contact',
    '/gallery',
    '/news',            // Folder detected from sidebar
    '/campus',          // Folder detected from sidebar
    '/best-schools-city-wise',
    '/top-5-schools-in-mewat',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Hyper-Local SEO Pages (Mewat, Palwal & Alwar region)
  const locations = [
    'punhana', 
    'pinangwan', 
    'nuh', 
    'firojpur-jhirka', 
    'palwal', 
    'hatheen', 
    'sikrawa', 
    'hodal', 
    'alwar',
    'tauru'
  ]

  const locationRoutes = locations.map((city) => ({
    url: `${baseUrl}/best-school-near-me/${city}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9, 
  }))

  // 3. Authority & Special SEO Pages (Folder matching)
  const authorityRoutes = [
    '/schools-with-transport-in-mewat',
    '/smart-class-nuh',      // Corrected folder path from your sidebar
    '/authority/affordable-fee-structure-mewat',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Saare routes ko ek master sitemap mein merge karna
  return [...staticRoutes, ...locationRoutes, ...authorityRoutes]
}