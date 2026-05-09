import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CASE_STUDIES, getCaseStudy } from '@/lib/case-studies'

const SITE_URL = 'https://fastlaunchmvp.com'

export async function generateStaticParams() {
  // Use the shared slug catalogue so sitemap, generateStaticParams and
  // metadata always agree on which case studies exist.
  return CASE_STUDIES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudy(slug)
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
      creator: '@fastlaunchmvp',
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
  const project = getCaseStudy(slug)
  if (!project) notFound()

  const url = `${SITE_URL}/work/${slug}`
  const image = `${SITE_URL}${project.image}`

  // CreativeWork JSON-LD for the case study itself.
  // We keep @type as CreativeWork (not Article) because these are portfolio
  // pieces rather than journalism — Article/NewsArticle would be misleading.
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
    datePublished: project.year,
    about: project.tags.map((tag) => ({ '@type': 'Thing', name: tag })),
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
