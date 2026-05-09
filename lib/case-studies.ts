// Single source of truth for case study slugs + minimal metadata.
// Imported by:
//   - app/sitemap.ts          (so XML sitemap covers every /work/[slug])
//   - app/work/[slug]/layout.tsx (lookup for per-page metadata + JSON-LD)
//
// Keep this file in sync with the rich `projects` data in
// app/work/[slug]/page.tsx — the page-level data has more fields (gallery
// images, testimonials, results, etc.) which aren't needed for the
// metadata layer.

export type CaseStudySummary = {
  slug: string
  title: string
  tagline: string
  image: string
  tags: string[]
  delivery: string
  /** ISO date or year string. Used as `datePublished` in JSON-LD. */
  year: string
}

export const CASE_STUDIES: CaseStudySummary[] = [
  {
    slug: 'eliminent',
    title: 'Eliminent',
    tagline: 'Find the AI among you. Or die trying.',
    image: '/Images/work/eliminent.webp',
    tags: ['Gaming', 'AI', 'Multiplayer', 'Real-Time'],
    delivery: '8 days',
    year: '2026',
  },
  {
    slug: 'metalex-terminal',
    title: 'Metalex Terminal',
    tagline: 'Professional-grade precious metals intelligence for serious traders.',
    image: '/Images/work/metalex.webp',
    tags: ['Fintech', 'Real-Time Data', 'Trading'],
    delivery: '14 days',
    year: '2026',
  },
  {
    slug: 'desert-falcons',
    title: 'Desert Falcons Collective',
    tagline: "The premium digital home for Saudi Arabia's automotive elite.",
    image: '/Images/work/desertfalcons.webp',
    tags: ['Membership', 'Luxury', 'Community'],
    delivery: '7 days',
    year: '2026',
  },
  {
    slug: 'memory-market',
    title: 'Memory Market',
    tagline: 'Where AI memory becomes a tradeable on-chain asset.',
    image: '/Images/work/memorymarket.webp',
    tags: ['Web3', 'Marketplace', 'AI'],
    delivery: '9 days',
    year: '2025',
  },
  {
    slug: 'aramas-property',
    title: 'Aramas Property',
    tagline: 'Premium off-plan UAE investments, made accessible to global buyers.',
    image: '/Images/work/aramas.webp',
    tags: ['Real Estate', 'Marketplace', 'UAE'],
    delivery: '6 days',
    year: '2025',
  },
  {
    slug: 'insights-dashboard',
    title: 'Insights Dashboard',
    tagline: 'Your entire business in one view — real-time, actionable, beautiful.',
    image: '/Images/work/insights.webp',
    tags: ['Dashboard', 'SaaS', 'Analytics'],
    delivery: '5 days',
    year: '2025',
  },
  {
    slug: 'ams-tool',
    title: 'AMS Tool',
    tagline: 'AI-powered adverse media screening — from manual searches to automated compliance workflows.',
    image: '/Images/work/ams-desktop.webp',
    tags: ['Compliance', 'AI', 'B2B SaaS'],
    delivery: '10 days',
    year: '2026',
  },
  {
    slug: 'speed-read',
    title: 'Speed Read',
    tagline: 'Eliminate eye movement. Bypass subvocalization. Read at the speed of thought.',
    image: '/Images/work/speedread-desktop.webp',
    tags: ['Productivity', 'Reading', 'Web App'],
    delivery: '7 days',
    year: '2026',
  },
]

export const CASE_STUDY_SLUGS: string[] = CASE_STUDIES.map((c) => c.slug)

export function getCaseStudy(slug: string): CaseStudySummary | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}
