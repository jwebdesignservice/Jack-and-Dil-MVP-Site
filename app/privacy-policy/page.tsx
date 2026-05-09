import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Fast Launch collects, uses and protects your personal data when you use fastlaunchmvp.com.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    type: 'article',
    url: 'https://fastlaunchmvp.com/privacy-policy',
    siteName: 'Fast Launch',
    title: 'Privacy Policy — Fast Launch',
    description: 'How Fast Launch collects, uses and protects your personal data.',
    locale: 'en_GB',
    images: [
      {
        url: 'https://fastlaunchmvp.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fast Launch privacy policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy — Fast Launch',
    description: 'How Fast Launch collects, uses and protects your personal data.',
    images: ['https://fastlaunchmvp.com/og-image.png'],
    creator: '@fastlaunchmvp',
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10 max-w-3xl">
        <div className="mb-10">
          <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm transition-colors">← Back to Home</Link>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-neutral-400 text-sm mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-neutral-400 leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Who We Are</h2>
            <p>FastLaunch (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a UK-based software development agency. We build production-ready MVPs for founders and businesses. Our contact email is <a href="mailto:support@fastlaunchmvp.com" className="text-orange-400 hover:text-orange-300">support@fastlaunchmvp.com</a>.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. What Data We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Name, email address and mobile number (via our contact form)</li>
              <li>Company name and project details</li>
              <li>Budget and timeline preferences</li>
              <li>Any files or documents you attach to a project brief</li>
            </ul>
            <p className="mt-3">We also collect data automatically when you visit our website, including IP address, browser type, pages visited, and time spent on pages (via Google Analytics / Google Tag Manager).</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your project enquiry and contact you about your brief</li>
              <li>To schedule discovery calls and manage client relationships</li>
              <li>To improve our website and services using anonymised analytics</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-3">We will never sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Legal Basis for Processing</h2>
            <p>We process your data under the following legal bases:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong className="text-white">Legitimate interest</strong>: responding to your enquiry and running our business</li>
              <li><strong className="text-white">Consent</strong>: for non-essential cookies and analytics</li>
              <li><strong className="text-white">Contract</strong>: where we have entered into an agreement with you</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services that may process your data:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong className="text-white">Resend</strong>: email delivery for contact form submissions</li>
              <li><strong className="text-white">Google Analytics / GTM</strong>: website analytics (anonymised)</li>
              <li><strong className="text-white">Vercel</strong>: website hosting and deployment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Data Retention</h2>
            <p>We retain your contact form data for up to 24 months. If you become a client, we retain relevant project data for up to 7 years for legal and accounting purposes. You can request deletion at any time.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">7. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, email us at <a href="mailto:support@fastlaunchmvp.com" className="text-orange-400 hover:text-orange-300">support@fastlaunchmvp.com</a>.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">8. Cookies</h2>
            <p>We use cookies to improve your experience. Please see our <Link href="/cookies" className="text-orange-400 hover:text-orange-300">Cookie Policy</Link> for full details.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p>We may update this policy from time to time. The date at the top of this page will reflect when it was last updated.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">10. Contact</h2>
            <p>For any privacy-related queries, contact us at <a href="mailto:support@fastlaunchmvp.com" className="text-orange-400 hover:text-orange-300">support@fastlaunchmvp.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
