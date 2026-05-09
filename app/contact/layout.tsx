import type { Metadata } from 'next'

const SITE_URL = 'https://fastlaunchmvp.com'
const TITLE = 'Contact — Start your Fast Launch project'
const DESCRIPTION =
  'Get in touch with Fast Launch to brief your project. Custom websites and MVPs delivered in 3–14 working days. Quick replies, no agency overhead.'
const URL = `${SITE_URL}/contact`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    url: URL,
    siteName: 'Fast Launch',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/Images/Hero%20illustration.webp`,
        width: 1200,
        height: 630,
        alt: 'Get in touch with Fast Launch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/Images/Hero%20illustration.webp`],
  },
  keywords: [
    'contact Fast Launch',
    'hire web developer',
    'project brief',
    'web development quote',
    'MVP quote',
    'custom website enquiry',
  ],
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { '@id': `${SITE_URL}#website` },
  about: { '@id': `${SITE_URL}#organization` },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: URL },
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
