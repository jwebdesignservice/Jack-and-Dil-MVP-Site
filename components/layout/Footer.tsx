import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050505] relative">
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <svg className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              LaunchFast
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed">Production-ready MVPs in days, not months. Built by developers, for founders.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
            <div className="space-y-2">
              {['/#services', '/#process', '/#about', '/#faq'].map((href, i) => (
                <Link key={href} href={href} className="block text-neutral-500 hover:text-orange-500 transition-colors text-sm">
                  {['Services', 'Process', 'About', 'FAQ'][i]}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Get Started</h4>
            <div className="space-y-2">
              {['/contact', '/#pricing', '/#testimonials'].map((href, i) => (
                <Link key={href} href={href} className="block text-neutral-500 hover:text-orange-500 transition-colors text-sm">
                  {['Book a Call', 'View Packages', 'Case Studies'][i]}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@launchfast.dev" className="flex items-center gap-2 text-neutral-500 hover:text-orange-500 transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                hello@launchfast.dev
              </a>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                UK Based
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-neutral-900 text-center text-neutral-600 text-sm">
          © 2026 LaunchFast. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
