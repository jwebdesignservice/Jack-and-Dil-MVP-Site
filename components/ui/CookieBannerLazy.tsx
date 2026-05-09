'use client'
import dynamic from 'next/dynamic'

// Client-side wrapper that lazy-loads the cookie banner. We need a client
// component as the host because next/dynamic with `ssr: false` is not
// permitted directly inside a Server Component (which app/layout.tsx is).
//
// Effect: the banner JS chunk only ships to the browser when this component
// hydrates, and only renders for visitors without consent (~first visit).
// Repeat visitors load nothing.
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false })

export default function CookieBannerLazy() {
  return <CookieBanner />
}
