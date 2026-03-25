import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050505] relative z-10">
      {/* Top orange border */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <svg className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              FastLaunch
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xs">Production-ready MVPs in days, not months. Built by developers, for founders.</p>
            {/* Social / WhatsApp */}
            <div className="flex items-center gap-3">
              <a href="https://wa.me/447917328155" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#111] border border-[rgba(249,115,22,0.15)] flex items-center justify-center text-neutral-500 hover:border-[#25D366]/50 hover:text-[#25D366] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="mailto:support@fastlaunchmvp.com"
                className="w-9 h-9 rounded-lg bg-[#111] border border-[rgba(249,115,22,0.15)] flex items-center justify-center text-neutral-500 hover:border-orange-500/40 hover:text-orange-400 transition-colors">
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
            <div className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/work', label: 'Case Studies' },
                { href: '/#process', label: 'Process' },
                { href: '/#about', label: 'About' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="block text-neutral-500 hover:text-orange-400 transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Get Started</h4>
            <div className="space-y-2.5">
              {[
                { href: '/contact', label: 'Book a Call' },
                { href: '/#pricing', label: 'View Pricing' },
                { href: '/#faq', label: 'FAQ' },
                { href: '/#testimonials', label: 'Testimonials' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="block text-neutral-500 hover:text-orange-400 transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:support@fastlaunchmvp.com" className="flex items-center gap-2 text-neutral-500 hover:text-orange-400 transition-colors text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                support@fastlaunchmvp.com
              </a>
              <a href="https://wa.me/447917328155" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-[#25D366] transition-colors text-sm">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                UK Based
              </div>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                24/7 Support
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Large "FastLaunch" text — gradient: orange top, fades to black at bottom */}
      <div className="overflow-hidden mt-2 mb-6 max-w-full">
        <div className="text-center leading-none select-none pointer-events-none whitespace-nowrap"
          style={{ fontSize: 'min(16vw, 220px)', fontWeight: 900, letterSpacing: '-0.04em', background: 'linear-gradient(to bottom, rgba(249,115,22,0.25) 0%, rgba(249,115,22,0.08) 50%, rgba(5,5,5,0) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          FastLaunch
        </div>
      </div>

      {/* Line + Copyright — below the large text */}
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mx-6"/>
      <div className="text-center text-neutral-600 text-sm py-6">
        © 2026 FastLaunch. All rights reserved.
      </div>
    </footer>
  )
}

