'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const simpleLinks = [
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
]

const servicesItems = [
  {
    href: '/services#mvp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'MVP Development',
    desc: 'Production-ready apps in 3–14 days',
  },
  {
    href: '/services#design',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Wireframes, prototypes & Figma files',
  },
  {
    href: '/services#fullstack',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'Complex integrations, APIs & real-time features',
  },
  {
    href: '/services#launch',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/>
      </svg>
    ),
    title: 'Launch & Scale',
    desc: 'CI/CD, monitoring, SEO & post-launch support',
  },
]

const caseStudyItems = [
  {
    href: '/work/speed-read',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Speed Read',
    desc: 'EdTech · RSVP speed reading tool',
  },
  {
    href: '/work/eliminent',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
      </svg>
    ),
    title: 'Eliminent',
    desc: 'AI Gaming · Social deduction multiplayer',
  },
  {
    href: '/work/metalex-terminal',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'Metalex Terminal',
    desc: 'FinTech · Precious metals trading platform',
  },
  {
    href: '/work/ams-tool',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'AMS Tool',
    desc: 'RegTech · Adverse media screening',
  },
  {
    href: '/work/desert-falcons',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Desert Falcons',
    desc: 'Automotive · Luxury community platform',
  },
  {
    href: '/work/memory-market',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Memory Market',
    desc: 'Web3 · AI memory trading on Solana',
  },
  {
    href: '/work/aramas-property',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Aramas Property',
    desc: 'PropTech · UAE off-plan real estate',
  },
  {
    href: '/work/insights-dashboard',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: 'Insights Dashboard',
    desc: 'Analytics SaaS · Business KPI platform',
  },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<'services' | 'cases' | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<'services' | 'cases' | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return false // anchor links — no active state
    return pathname?.startsWith(href) ?? false
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'}`}
      style={{ zIndex: 99999, borderBottom: '1px solid rgba(249,115,22,0.2)' }}
      ref={menuRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 py-3">
          <Link
            href="/"
            aria-label="Fast Launch — home"
            aria-current={isActive('/') ? 'page' : undefined}
            className="flex items-center gap-2 text-white font-bold text-xl flex-shrink-0"
          >
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span aria-hidden="true" className="absolute inset-0 rounded-md bg-orange-500/35 animate-ping" />
              <span aria-hidden="true" className="absolute inset-0 rounded-md ring-1 ring-orange-500/40" />
              <Image src="/logo.png" alt="" width={32} height={32} className="relative rounded-md" />
            </span>
            <span className="hidden sm:inline">FastLaunch</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <li>
              <Link href="/" aria-current={isActive('/') ? 'page' : undefined} className="text-neutral-400 hover:text-white transition-colors text-sm relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
              </Link>
            </li>

            {/* Services mega menu trigger */}
            <li className="relative" onMouseEnter={() => setActiveMenu('services')} onMouseLeave={() => setActiveMenu(null)}>
              <Link
                href="/services"
                aria-current={isActive('/services') ? 'page' : undefined}
                aria-haspopup="menu"
                aria-expanded={activeMenu === 'services'}
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-sm relative group"
              >
                Services
                <svg
                  aria-hidden="true"
                  width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className={`transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`}
                >
                  <path d="M2 4l4 4 4-4"/>
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
              </Link>
            </li>

            {/* Case Studies mega menu trigger */}
            <li className="relative" onMouseEnter={() => setActiveMenu('cases')} onMouseLeave={() => setActiveMenu(null)}>
              <Link
                href="/work"
                aria-current={isActive('/work') ? 'page' : undefined}
                aria-haspopup="menu"
                aria-expanded={activeMenu === 'cases'}
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors text-sm relative group"
              >
                Case Studies
                <svg
                  aria-hidden="true"
                  width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                  className={`transition-transform duration-200 ${activeMenu === 'cases' ? 'rotate-180' : ''}`}
                >
                  <path d="M2 4l4 4 4-4"/>
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
              </Link>
            </li>

            {/* Simple links */}
            {simpleLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant="primary">Book a Call</Button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            type="button"
          >
            <div className={`w-5 h-0.5 bg-white mb-1 transition-transform ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-white mb-1 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Services Mega Menu ── */}
      <AnimatePresence>
        {activeMenu === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass-card-strong absolute inset-x-0 mx-auto w-full max-w-[1200px] !rounded-t-none rounded-b-xl"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono text-orange-500 tracking-widest uppercase">What we build</span>
                <div className="flex-1 h-px bg-[rgba(249,115,22,0.15)]" />
                <Link href="/services" onClick={() => setActiveMenu(null)}
                  className="text-xs font-mono text-neutral-500 hover:text-orange-400 transition-colors flex items-center gap-1">
                  View all services
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 10L10 2M10 2H5M10 2V7"/></svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="glass-card !rounded-lg flex items-start gap-3 p-4 hover:!border-orange-500/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500/15 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5 group-hover:text-orange-400 transition-colors">{item.title}</div>
                      <div className="text-neutral-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Case Studies Mega Menu ── */}
      <AnimatePresence>
        {activeMenu === 'cases' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass-card-strong absolute inset-x-0 mx-auto w-full max-w-[1200px] !rounded-t-none rounded-b-xl"
            onMouseEnter={() => setActiveMenu('cases')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-mono text-orange-500 tracking-widest uppercase">Our work</span>
                <div className="flex-1 h-px bg-[rgba(249,115,22,0.15)]" />
                <Link href="/work" onClick={() => setActiveMenu(null)}
                  className="text-xs font-mono text-neutral-500 hover:text-orange-400 transition-colors flex items-center gap-1">
                  View all case studies
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 10L10 2M10 2H5M10 2V7"/></svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {caseStudyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className="glass-card !rounded-lg flex items-start gap-3 p-4 hover:!border-orange-500/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-md bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0 group-hover:bg-orange-500/15 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium mb-0.5 group-hover:text-orange-400 transition-colors">{item.title}</div>
                      <div className="text-neutral-500 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 overflow-hidden max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">

              {/* Home */}
              <Link href="/" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between text-neutral-400 hover:text-white transition-colors py-3 text-sm border-b border-[rgba(249,115,22,0.08)]">
                Home
              </Link>

              {/* Services accordion */}
              <div className="border-b border-[rgba(249,115,22,0.08)]">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  className="flex items-center justify-between w-full text-neutral-400 hover:text-white transition-colors py-3 text-sm"
                >
                  <span>Services</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className={`transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}>
                    <path d="M2 4l4 4 4-4"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'services' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="pb-2 pl-2 space-y-0.5">
                        {servicesItems.map(item => (
                          <Link key={item.href} href={item.href} onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                            className="flex items-center gap-3 py-2 text-neutral-500 hover:text-white transition-colors">
                            <span className="text-orange-500/60 flex-shrink-0">{item.icon}</span>
                            <span className="text-sm">{item.title}</span>
                          </Link>
                        ))}
                        <Link href="/services" onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                          className="flex items-center gap-1.5 py-2 text-orange-500 text-xs font-mono hover:text-orange-400 transition-colors">
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Case Studies accordion */}
              <div className="border-b border-[rgba(249,115,22,0.08)]">
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'cases' ? null : 'cases')}
                  className="flex items-center justify-between w-full text-neutral-400 hover:text-white transition-colors py-3 text-sm"
                >
                  <span>Case Studies</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"
                    className={`transition-transform duration-200 ${mobileExpanded === 'cases' ? 'rotate-180' : ''}`}>
                    <path d="M2 4l4 4 4-4"/>
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'cases' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <div className="pb-2 pl-2 space-y-0.5">
                        {caseStudyItems.map(item => (
                          <Link key={item.href} href={item.href} onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                            className="flex items-center gap-3 py-2 text-neutral-500 hover:text-white transition-colors">
                            <span className="text-orange-500/60 flex-shrink-0">{item.icon}</span>
                            <span className="text-sm">{item.title}</span>
                          </Link>
                        ))}
                        <Link href="/work" onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                          className="flex items-center gap-1.5 py-2 text-orange-500 text-xs font-mono hover:text-orange-400 transition-colors">
                          View all case studies →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple links */}
              {simpleLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className="block text-neutral-400 hover:text-white transition-colors py-3 text-sm border-b border-[rgba(249,115,22,0.08)]">
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 pb-2">
                <Button href="/contact" variant="primary" className="w-full justify-center">Book a Call</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
