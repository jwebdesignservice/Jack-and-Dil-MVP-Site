import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fast Launch — Premium custom websites & MVPs in 3–14 days',
    short_name: 'Fast Launch',
    description:
      'UK web studio building premium, conversion-focused custom websites and production-ready MVPs in 3–14 days. No agencies, no retainers — fully owned by you.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#F26B1A',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
    categories: ['business', 'productivity', 'developer'],
    lang: 'en-GB',
    dir: 'ltr',
    orientation: 'portrait-primary',
  }
}
