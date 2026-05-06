import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Fast Launch uses cookies on fastlaunchmvp.com — what we collect, why, and how to control them.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    type: 'article',
    url: 'https://fastlaunchmvp.com/cookies',
    siteName: 'Fast Launch',
    title: 'Cookie Policy — Fast Launch',
    description: 'How Fast Launch uses cookies on its website.',
    images: ['https://fastlaunchmvp.com/Images/Hero%20illustration.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy — Fast Launch',
    description: 'How Fast Launch uses cookies on its website.',
  },
  robots: { index: true, follow: true },
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10 max-w-3xl">
        <div className="mb-10">
          <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm transition-colors">← Back to Home</Link>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
        <p className="text-neutral-500 text-sm mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-neutral-400 leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you interact with the site.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Cookies We Use</h2>

            <div className="mt-4 space-y-4">
              <div className="border border-[rgba(249,115,22,0.15)] rounded-lg p-4 bg-[#0A0A0A]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono bg-green-500/15 text-green-400 border border-green-500/20 rounded px-2 py-0.5">Essential</span>
                </div>
                <p className="text-sm">Required for the website to function. These cannot be disabled. They include session cookies and security tokens. No personal data is stored.</p>
              </div>

              <div className="border border-[rgba(249,115,22,0.15)] rounded-lg p-4 bg-[#0A0A0A]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono bg-orange-500/15 text-orange-400 border border-orange-500/20 rounded px-2 py-0.5">Analytics</span>
                </div>
                <p className="text-sm">We use Google Analytics (via Google Tag Manager) to understand how visitors use our site. This data is anonymised and aggregated. These cookies are only set with your consent.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-neutral-500">
                  <li><strong className="text-neutral-400">_ga</strong> — distinguishes users (expires 2 years)</li>
                  <li><strong className="text-neutral-400">_ga_*</strong> — maintains session state (expires 2 years)</li>
                  <li><strong className="text-neutral-400">_gid</strong> — distinguishes users (expires 24 hours)</li>
                </ul>
              </div>

              <div className="border border-[rgba(249,115,22,0.15)] rounded-lg p-4 bg-[#0A0A0A]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono bg-blue-500/15 text-blue-400 border border-blue-500/20 rounded px-2 py-0.5">Preference</span>
                </div>
                <p className="text-sm">We store your cookie consent preference so we don&apos;t ask you every time you visit.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-neutral-500">
                  <li><strong className="text-neutral-400">fl_cookie_consent</strong> — stores your cookie choice (expires 12 months)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Managing Cookies</h2>
            <p>You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of the website.</p>
            <p className="mt-3">You can also update your preferences at any time by clearing the <code className="text-orange-400 bg-[#111] px-1 rounded text-xs">fl_cookie_consent</code> cookie from your browser and reloading the page.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Third-Party Cookies</h2>
            <p>Google Analytics sets cookies on our behalf. You can opt out of Google Analytics tracking across all websites using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">Google Analytics Opt-out Browser Add-on</a>.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Contact</h2>
            <p>Questions about our use of cookies? Email <a href="mailto:support@fastlaunchmvp.com" className="text-orange-400 hover:text-orange-300">support@fastlaunchmvp.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
