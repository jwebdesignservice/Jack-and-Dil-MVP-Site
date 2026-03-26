'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const COOKIE_KEY = 'fl_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
    // Fire GTM consent update if available
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'cookie_consent_accepted' })
    }
  }

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999999] w-[calc(100%-2rem)] max-w-2xl"
        >
          <div className="bg-[#0D0D0D] border border-[rgba(249,115,22,0.25)] rounded-2xl px-5 py-4 shadow-2xl shadow-black/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon */}
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/>
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3"/>
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium mb-0.5">We use cookies</p>
              <p className="text-neutral-500 text-xs leading-relaxed">
                We use analytics cookies to understand how you use our site and improve it.{' '}
                <Link href="/cookies" className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2">
                  Cookie Policy
                </Link>{' '}·{' '}
                <Link href="/privacy-policy" className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={decline}
                className="flex-1 sm:flex-none text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors px-4 py-2 rounded-lg border border-neutral-800 hover:border-neutral-600 bg-transparent"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 sm:flex-none text-xs font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-lg"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
