import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

const SITE_URL = 'https://fastlaunchmvp.com'

// Project metadata catalogue — keep slugs in sync with app/work/[slug]/page.tsx
// and app/sitemap.ts.
const PROJECTS: Record<
  string,
  { title: string; tagline: string; image: string; tags: string[]; delivery: string }
> = {
  'eliminent': {
    title: 'Eliminent',
    tagline: 'Find the AI among you. Or die trying.',
    image: '/Images/work/eliminent.webp',
    tags: ['Gaming', 'AI', 'Multiplayer', 'Real-Time'],
    delivery: '8 days',
  },
  'metalex-terminal': {
    title: 'Metalex Terminal',
    tagline: 'Professional-grade precious metals intelligence for serious traders.',
    image: '/Images/work/metalex-terminal.webp',
    tags: ['Fintech', 'Real-Time Data', 'Trading'],
    delivery: '12 days',
  },
  'desert-falcons': {
    title: 'Desert Falcons Collective',
    tagline: "The premium digital home for Saudi Arabia's automotive elite.",
    image: '/Images/work/desert-falcons.webp',
    tags: ['Membership', 'Luxury', 'Community'],
    delivery: '6 days',
  },
  'memory-market': {
    title: 'Memory Market',
    tagline: 'Where AI memory becomes a tradeable on-chain asset.',
    image: '/Images/work/memory-market.webp',
    tags: ['Web3', 'Marketplace', 'AI'],
    delivery: '10 days',
  },
  'aramas-property': {
    title: 'Aramas Property',
    tagline: 'Premium off-plan UAE investments, made accessible to global buyers.',
    image: '/Images/work/aramas.webp',
    tags: ['Real Estate', 'Marketplace', 'UAE'],
    delivery: '6 days',
  },
  'insights-dashboard': {
    title: 'Insights Dashboard',
    tagline: 'Your entire business in one view — real-time, actionable, beautiful.',
    image: '/Images/work/insights-dashboard.webp',
    tags: ['Dashboard', 'SaaS', 'Analytics'],
    delivery: '9 days',
  },
  'ams-tool': {
    title: 'AMS Tool',
    tagline: 'AI-powered adverse media screening — from manual searches to automated compliance workflows.',
    image: '/Images/work/ams-tool.webp',
    tags: ['Compliance', 'AI', 'B2B SaaS'],
    delivery: '11 days',
  },
  'speed-read': {
    title: 'Speed Read',
    tagline: 'Eliminate eye movement. Bypass subvocalization. Read at the speed of thought.',
    image: '/Images/work/speed-read.webp',
    tags: ['Productivity', 'Reading', 'Web App'],
    delivery: '5 days',
  },
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS[slug]
  if (!project) return { title: 'Case Study Not Found' }

  const url = `${SITE_URL}/work/${slug}`
  const title = `${project.title} — ${project.tagline}`
  const description = `Case study: ${project.title}. ${project.tagline} Custom-built by Fast Launch in ${project.delivery}. ${project.tags.join(', ')}.`
  const image = `${SITE_URL}${project.image}`

  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      type: 'article',
      url,
      siteName: 'Fast Launch',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${project.title} — Fast Launch case study` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    keywords: [
      project.title,
      'case study',
      'Fast Launch',
      ...project.tags,
      'custom website',
      'web development',
      'MVP build',
    ],
  }
}

export default async function CaseStudyLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS[slug]
  if (!project) notFound()

  const url = `${SITE_URL}/work/${slug}`
  const image = `${SITE_URL}${project.image}`

  // CreativeWork JSON-LD for the case study itself
  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${url}#work`,
    name: project.title,
    headline: `${project.title} — ${project.tagline}`,
    abstract: project.tagline,
    description: project.tagline,
    url,
    image,
    keywords: project.tags.join(', '),
    creator: { '@id': `${SITE_URL}#organization` },
    publisher: { '@id': `${SITE_URL}#organization` },
    isPartOf: { '@id': `${SITE_URL}#website` },
    inLanguage: 'en-GB',
    timeRequired: project.delivery,
  }

  // BreadcrumbList JSON-LD: Home > Work > [Project]
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/work` },
      { '@type': 'ListItem', position: 3, name: project.title, item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
