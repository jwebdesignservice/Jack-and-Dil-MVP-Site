import type { Metadata } from 'next'

const SITE_URL = 'https://fastlaunchmvp.com'
const TITLE = 'Our Work — Custom websites & MVPs delivered in days'
const DESCRIPTION =
  'Selected case studies from Fast Launch — premium custom websites and production-ready MVPs shipped in 3–14 days. Eliminent, Aramas Property, Metalex Terminal, Desert Falcons and more.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work' },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/work`,
    siteName: 'Fast Launch',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/Images/Hero%20illustration.webp`,
        width: 1200,
        height: 630,
        alt: 'Fast Launch case studies and portfolio',
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
    'web design portfolio',
    'web development case studies',
    'MVP examples',
    'custom website portfolio',
    'startup case studies',
    'Fast Launch work',
    'Eliminent', 'Aramas Property', 'Metalex Terminal', 'Desert Falcons',
    'Memory Market', 'Insights Dashboard', 'AMS Tool', 'Speed Read',
  ],
}

// NOTE: This layout cascades into /work/[slug] pages too. Therefore it does
// NOT include JSON-LD scripts (those would incorrectly attach CollectionPage
// markup to individual case study pages). The /work page renders its own
// JSON-LD inline; the /work/[slug] layout overrides metadata + adds its own
// CreativeWork + BreadcrumbList schema per project.
export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
