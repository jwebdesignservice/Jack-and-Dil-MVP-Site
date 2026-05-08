import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/ui/CookieBanner'
import PageVideoBg from '@/components/ui/PageVideoBg'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

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
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: 'Fast Launch MVP',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: DEFAULT_DESCRIPTION,
  email: 'support@fastlaunch.com',
  telephone: '+44 7917 328155',
  founder: { '@type': 'Person', name: 'Jack Wilson' },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  areaServed: 'Worldwide',
  sameAs: [
    'https://www.linkedin.com/company/fastlaunchmvp',
    'https://www.instagram.com/fastlaunchmvp',
    'https://www.tiktok.com/@fastlaunchmvp',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@fastlaunch.com',
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
  description: DEFAULT_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}#organization` },
  inLanguage: 'en-GB',
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
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-transparent text-white antialiased">
        {/* Page-wide background video — sits behind every section so glass cards have something to blur */}
        <PageVideoBg />

        {/* Floating orange orbs — spread across viewport, drift upward */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[
            { l: 8,  s: 5, o: 0.55, d: 0,    dur: 11 },
            { l: 18, s: 4, o: 0.40, d: 1.5,  dur: 13 },
            { l: 27, s: 6, o: 0.65, d: 3,    dur: 10 },
            { l: 38, s: 3, o: 0.35, d: 0.8,  dur: 14 },
            { l: 48, s: 5, o: 0.50, d: 2.2,  dur: 12 },
            { l: 58, s: 4, o: 0.40, d: 4,    dur: 13 },
            { l: 68, s: 6, o: 0.60, d: 1.2,  dur: 11 },
            { l: 78, s: 4, o: 0.45, d: 3.4,  dur: 14 },
            { l: 88, s: 5, o: 0.55, d: 0.5,  dur: 12 },
            { l: 95, s: 3, o: 0.35, d: 2.7,  dur: 13 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${p.s}px`,
                height: `${p.s}px`,
                left: `${p.l}%`,
                bottom: '-20px',
                background: '#F97316',
                opacity: p.o,
                boxShadow: '0 0 10px #F97316',
                animation: `floatUp ${p.dur}s linear ${p.d}s infinite`,
              }}
            />
          ))}
        </div>
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
        {/* Google Tag Manager — afterInteractive = loaded after page is interactive, doesn't block FCP/LCP */}
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KJKCWBW5');` }}/>
        <Nav />
        <div id="main-content">{children}</div>
        <Footer />
        <CookieBanner />

        {/* WhatsApp floating button */}
        <a href="https://wa.me/447917328155?text=Hi%2C%20I%27m%20interested%20in%20your%20MVP%20services" target="_blank" rel="noopener noreferrer"
          className="fixed z-[99998] group"
          style={{ bottom: '21px', right: '21px' }}
          aria-label="Chat on WhatsApp">
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-45 transition-opacity"/>
          <span className="absolute inset-[-8px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity"
            style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.45) 0%, transparent 70%)', filter: 'blur(12px)' }}/>
          <span
            className="relative flex items-center justify-center w-16 h-16 rounded-full hover:scale-110 transition-all duration-300 border border-[rgba(37,211,102,0.55)] hover:border-[rgba(37,211,102,0.85)]"
            style={{
              backgroundColor: 'rgba(37, 211, 102, 0.22)',
              backdropFilter: 'blur(20px) saturate(160%)',
              WebkitBackdropFilter: 'blur(20px) saturate(160%)',
              boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.18), 0 8px 32px -8px rgba(37,211,102,0.55)',
            }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white" className="drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </span>
        </a>
      </body>
    </html>
  )
}

