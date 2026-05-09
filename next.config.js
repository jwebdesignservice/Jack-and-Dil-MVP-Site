/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gzip / brotli the HTML/JS/CSS responses Next serves itself
  compress: true,

  // Drop the "powered by Next" header — tiny perf + sec win
  poweredByHeader: false,

  // Generate ETags so HTML responses can be served 304 on revisits
  generateEtags: true,

  // Avoid the multi-lockfile workspace-root warning during build
  outputFileTracingRoot: __dirname,

  images: {
    formats: ['image/avif', 'image/webp'],
    // Trim default device sizes to the breakpoints we actually use,
    // and add a 384 entry so small phones don't download larger images.
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Tell next/image to cache optimised images on the CDN for a year.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  // Tree-shake unused exports out of these big runtime libs.
  // framer-motion and lucide-react in particular ship dozens of barrel exports;
  // optimizePackageImports rewrites them to deep imports at build time.
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  devIndicators: false,

  // Long-cache static media + Next build artefacts.
  // /_next/static/* is already content-hashed so 1y immutable is safe.
  // /Images/* and /hero-bg.mp4 are stable assets — long cache + must-revalidate
  // gives us instant repeat-load wins without permanent staleness.
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/Images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/hero-bg.mp4',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/og-image.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, must-revalidate' },
        ],
      },
      {
        source: '/fastlaunch-logo.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}
module.exports = nextConfig
