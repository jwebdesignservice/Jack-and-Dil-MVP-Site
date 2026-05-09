import type { MetadataRoute } from 'next'
import { CASE_STUDY_SLUGS } from '@/lib/case-studies'

const SITE_URL = 'https://fastlaunchmvp.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`,                lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/services`,        lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/work`,            lastModified, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE_URL}/contact`,         lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`,  lastModified, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/terms`,           lastModified, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${SITE_URL}/cookies`,         lastModified, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  // Case study slugs come from a single source of truth (lib/case-studies.ts)
  // so the sitemap can never drift from the actual generated routes.
  const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}
