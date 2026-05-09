import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import WorkMarquee from '@/components/sections/WorkMarquee'
import Services from '@/components/sections/Services'

// Above-the-fold sections load with the initial bundle (priority).
// Below-the-fold sections lazy-load to reduce First Load JS and improve LCP.
const Comparison   = dynamic(() => import('@/components/sections/Comparison'))
const Process      = dynamic(() => import('@/components/sections/Process'))
const Marquee      = dynamic(() => import('@/components/sections/Marquee'))
const About        = dynamic(() => import('@/components/sections/About'))
const Pricing      = dynamic(() => import('@/components/sections/Pricing'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const FAQ          = dynamic(() => import('@/components/sections/FAQ'))
const CTA          = dynamic(() => import('@/components/sections/CTA'))

const SITE_URL = 'https://fastlaunchmvp.com'

// ── Home-page JSON-LD ───────────────────────────────────────────────────────
// We attach schema.org markup for the most "ranking-relevant" sections on the
// home page so Google + LLM crawlers can ground answers in structured data:
//
//   - HowTo:       the 4-step Process section ("How We Work")
//   - ItemList of   the 4 service cards in the Services section, each
//     services    referencing the canonical /services Service entity
//   - OfferCatalog: the 3 pricing tiers (Starter, Growth, Scale) with
//                  GBP price ranges
//   - AggregateRating: derived from testimonials count + 5★ ratings shown
//                      in the Testimonials section
//
// All entities reference the global #organization @id from app/layout.tsx so
// Google can stitch them into a single knowledge graph.

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Fast Launch builds a production-ready MVP in 3-14 days',
  description:
    'Our four-stage delivery process: discovery, architecture & design, build & iterate, and go live — concept to production in up to 14 days.',
  totalTime: 'P14D',
  inLanguage: 'en-GB',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discovery & Scope',
      text: 'A focused kick-off to define core features, eliminate scope creep, and align on success metrics. Everything is agreed and signed off before a single line of code is written.',
      url: `${SITE_URL}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Architecture & Design',
      text: 'UI wireframes, database schema, and API contracts are designed upfront. You review and approve everything before development begins.',
      url: `${SITE_URL}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Build & Iterate',
      text: 'Daily standups and code shipped every 24 hours. You see real progress each day, not a black box. Issues are caught early, not at the end.',
      url: `${SITE_URL}/#process`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Go Live',
      text: 'Production deployment, monitoring configured, full documentation written, and complete knowledge transfer. You own 100% of the code from day one.',
      url: `${SITE_URL}/#process`,
    },
  ],
}

const servicesItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fast Launch services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'MVP Development',
        description:
          'Production-ready MVPs delivered in 3-14 days using Next.js, TypeScript and Supabase.',
        provider: { '@id': `${SITE_URL}#organization` },
        url: `${SITE_URL}/services#mvp`,
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'UI/UX Design',
        description:
          'Wireframes, clickable prototypes, mobile-first layouts and design systems handed off ready for development.',
        provider: { '@id': `${SITE_URL}#organization` },
        url: `${SITE_URL}/services#design`,
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Full-Stack Development',
        description:
          'React/Next.js frontend, Node.js + PostgreSQL backend, third-party integrations, CI/CD and tests included.',
        provider: { '@id': `${SITE_URL}#organization` },
        url: `${SITE_URL}/services#fullstack`,
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Launch & Scale',
        description:
          'Vercel/AWS deploys, uptime monitoring, error tracking, SEO, analytics and post-launch support.',
        provider: { '@id': `${SITE_URL}#organization` },
        url: `${SITE_URL}/services#launch`,
      },
    },
  ],
}

const pricingOfferCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': `${SITE_URL}/#pricing`,
  name: 'Fast Launch pricing plans',
  url: `${SITE_URL}/#pricing`,
  provider: { '@id': `${SITE_URL}#organization` },
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Starter',
      description: 'Validate your idea fast with a lean MVP.',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GBP',
        minPrice: 2500,
        maxPrice: 5000,
      },
      itemOffered: {
        '@type': 'Service',
        name: 'Starter MVP build',
        description:
          'Up to 5 core features, mobile-responsive design, basic auth + database, 1-4 day delivery, 2 weeks post-launch support.',
        provider: { '@id': `${SITE_URL}#organization` },
      },
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      description: 'The full package for founders ready to ship.',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GBP',
        minPrice: 5000,
        maxPrice: 10000,
      },
      itemOffered: {
        '@type': 'Service',
        name: 'Growth MVP build',
        description:
          'Up to 12 core features, custom UI/UX design, payments + advanced auth, 4-10 day delivery, 1 month post-launch support, analytics dashboard.',
        provider: { '@id': `${SITE_URL}#organization` },
      },
    },
    {
      '@type': 'Offer',
      name: 'Scale',
      description: 'Complex products built for serious traction.',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GBP',
        minPrice: 10000,
        maxPrice: 20000,
      },
      itemOffered: {
        '@type': 'Service',
        name: 'Scale MVP build',
        description:
          'Unlimited features, full design system, complex integrations, 14-day delivery, 3 months post-launch support, dedicated Slack channel.',
        provider: { '@id': `${SITE_URL}#organization` },
      },
    },
  ],
}

// AggregateRating attached to the Organization. Numbers are derived directly
// from the on-page testimonial set (6 published reviews, all 5★ in the UI).
// Update reviewCount as new testimonials are added.
const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '5',
    reviewCount: 6,
  },
}

export default function Home() {
  return (
    <>
      {/* Home-page structured data — kept in app/page.tsx (server component)
          so it ships in the initial HTML, not after hydration. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingOfferCatalogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />

      <main>
        <Hero />
        <WorkMarquee />
        <Services />
        <Comparison />
        <Process />
        <Marquee />
        <About />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  )
}
