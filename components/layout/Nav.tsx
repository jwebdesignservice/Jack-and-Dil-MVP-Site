'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Case Studies' },
  { href: '/#process', label: 'Process' },
  { href: '/#about', label: 'About' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'}`}
      style={{ zIndex: 99999, borderBottom: '1px solid rgba(249,115,22,0.2)' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 py-3">
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
            <svg className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            FastLaunch
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Button href="/contact" variant="primary">Book a Call</Button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <div className={`w-5 h-0.5 bg-white mb-1 transition-transform ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-white mb-1 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-[rgba(249,115,22,0.1)] overflow-hidden">
            <div className="container mx-auto px-6 py-6 space-y-4">
              {links.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
                  className="block text-neutral-400 hover:text-white transition-colors py-2">
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="w-full justify-center">Book a Call</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}


