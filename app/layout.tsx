import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import PageVideoBg from '@/components/ui/PageVideoBg'
import FloatingOrbs from '@/components/ui/FloatingOrbs'
import WhatsAppFloating from '@/components/ui/WhatsAppFloating'
// Cookie banner is lazy-loaded client-side via a thin client wrapper —
// see components/ui/CookieBannerLazy.tsx for the rationale (ssr:false
// is not allowed in Server Components, which this layout is).
import CookieBannerLazy from '@/components/ui/CookieBannerLazy'

// Inter is a variable font on next/font, so leaving `weight` unspecified
// gives us the single variable WOFF2 file (covers every weight in one
// asset) rather than several per-weight files. `display: 'swap'` already
// avoids FOIT, and `preload: true` is the default for next/font.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://fastlaunchmvp.com'
const SITE_NAME = 'Fast Launch'
const DEFAULT_TITLE = 'Fast Launch | Premium custom websites and MVPs in 3-14 days'
const DEFAULT_DESCRIPTION =
  'Fast Launch is a UK web studio building premium, conversion-focused custom websites and production-ready MVPs in 3-14 days. No agencies, no retainers, fully owned by you.'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export const viewport: Viewport = {
  themeColor: '#F26B1A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | Fast Launch',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Jack Wilson', url: SITE_URL }],
  creator: 'Jack Wilson',
  publisher: 'Fast Launch',
  generator: 'Next.js',
  keywords: [
    'custom websites',
    'web design',
    'web development',
    'MVP development',
    'startup websites',
    'Next.js development',
    'fast website delivery',
    'premium websites',
    'web studio UK',
    'freelance web developer',
    'conversion-focused websites',
    'no-retainer web design',
    'product launch',
    'startup MVP',
    'Fast Launch',
    'Jack Wilson web developer',
  ],
  category: 'Web Design & Development',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/icon.svg'],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Fast Launch | Premium custom websites and MVPs in 3-14 days',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
    creator: '@fastlaunchmvp',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add real Google / Bing verification tokens here when you set them up:
    // google: 'xxxx',
    // other: { 'msvalidate.01': 'xxxx' },
  },
}

// ── Structured Data: Organization + WebSite ────────────────────────────────
// Promoted to ProfessionalService (a more specific subtype of Organization +
// LocalBusiness) so search engines can surface us as a service business while
// still rolling up under the same #organization @id used elsewhere on the site.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: ['Fast Launch MVP', 'FastLaunch'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  slogan: 'Premium custom websites and MVPs in 3-14 days.',
  email: 'support@fastlaunchmvp.com',
  telephone: '+44 7917 328155',
  founder: { '@type': 'Person', name: 'Jack Wilson' },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'Place', name: 'Worldwide' },
    { '@type': 'Country', name: 'United Kingdom' },
  ],
  knowsAbout: [
    'Custom website design',
    'MVP development',
    'Next.js development',
    'Full-stack development',
    'UI/UX design',
    'Conversion-focused web design',
    'Startup websites',
    'SaaS product development',
  ],
  priceRange: '££',
  sameAs: [
    'https://www.linkedin.com/company/fastlaunchmvp',
    'https://www.instagram.com/fastlaunchmvp',
    'https://www.tiktok.com/@fastlaunchmvp',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@fastlaunchmvp.com',
      telephone: '+44 7917 328155',
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'support@fastlaunchmvp.com',
      url: `${SITE_URL}/contact`,
      areaServed: 'Worldwide',
      availableLanguage: ['English'],
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: 'FastLaunch',
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}#organization` },
  inLanguage: 'en-GB',
  // Helps search engines understand the site search action (if a sitelinks
  // searchbox ever becomes eligible). The /work page is the closest thing
  // we have to a search-style index.
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/work?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} bg-black`}>
      <head>
        {/* JSON-LD: Organization + WebSite (root-level structured data) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Resource hints — preconnect for origins we hit on every page,
            dns-prefetch for less-critical third parties. next/font handles
            font origin preconnects internally. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body className="bg-transparent text-white antialiased">
        {/* Page-wide background video — sits behind every section so glass cards have something to blur */}
        <PageVideoBg />

        {/* Decorative floating orbs (server component, no JS shipped) */}
        <FloatingOrbs />
        {/* Skip-to-content link for keyboard / screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100000] focus:px-4 focus:py-2 focus:bg-orange-500 focus:text-black focus:rounded focus:font-medium focus:outline focus:outline-2 focus:outline-white"
        >
          Skip to main content
        </a>

        {/* Google Tag Manager — noscript fallback (must be first thing inside body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJKCWBW5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* Google Tag Manager — lazyOnload = fires once the browser is idle
            after the page has fully loaded. GTM/GA aren't on the LCP path,
            so deferring them removes ~100kb of script work from FCP/LCP. */}
        <Script id="gtm" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KJKCWBW5');` }}/>
        <Nav />
        <div id="main-content">{children}</div>
        <Footer />
        <CookieBannerLazy />

        <WhatsAppFloating />
      </body>
    </html>
  )
}

