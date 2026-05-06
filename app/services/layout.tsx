import type { Metadata } from 'next'

const SITE_URL = 'https://fastlaunchmvp.com'
const TITLE = 'Services — Custom websites, MVPs, e-commerce & more'
const DESCRIPTION =
  'Fast Launch builds premium custom websites, production-ready MVPs, e-commerce stores, dashboards and SaaS products — all delivered in 3–14 working days. No agencies, no retainers.'
const URL = `${SITE_URL}/services`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/services' },
  openGraph: {
    type: 'website',
    url: URL,
    siteName: 'Fast Launch',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/Images/Hero%20illustration.png`,
        width: 1200,
        height: 630,
        alt: 'Fast Launch services — custom websites, MVPs, e-commerce, dashboards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/Images/Hero%20illustration.png`],
  },
  keywords: [
    'web design services',
    'web development services',
    'MVP development',
    'custom website',
    'e-commerce website',
    'dashboard design',
    'SaaS website',
    'landing page design',
    'startup website',
    'Next.js development services',
    'Fast Launch services',
  ],
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  serviceType: 'Web Design & Development',
  provider: { '@id': `${SITE_URL}#organization` },
  url: URL,
  name: 'Custom Websites & MVPs Shipped in 3–14 Days',
  description: DESCRIPTION,
  areaServed: 'Worldwide',
  audience: { '@type': 'BusinessAudience', name: 'Founders, startups and SMEs' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fast Launch Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Marketing Website',  description: 'Bespoke marketing and brand websites built from scratch in days.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Production-Ready MVP',     description: 'Functional, deployable MVPs for ambitious founders — typically shipped in 6–14 days.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Store',          description: 'Conversion-focused e-commerce builds with custom checkouts and product management.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dashboards & Internal Tools', description: 'Real-time dashboards, admin panels and internal tooling for operating businesses.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Product Builds',       description: 'Full-stack SaaS products with auth, billing, and core feature delivery.' } },
    ],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: URL },
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
