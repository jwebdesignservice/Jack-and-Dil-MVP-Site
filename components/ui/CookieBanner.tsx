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
          className="fixed bottom-4 left-4 right-4 z-[999999] sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-[calc(100%-2rem)] sm:max-w-2xl"
        >
          <div className="bg-[#0D0D0D] border border-[rgba(249,115,22,0.25)] rounded-2xl px-4 py-4 sm:px-5 shadow-2xl shadow-black/60">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              {/* Icon + text row */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4M12 16h.01"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium mb-0.5">We use cookies</p>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Analytics cookies help us improve our site.{' '}
                    <Link href="/cookies" className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2">
                      Cookie Policy
                    </Link>
                    {' '}·{' '}
                    <Link href="/privacy-policy" className="text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={decline}
                  className="flex-1 sm:flex-none text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors px-4 py-2 rounded-lg border border-neutral-800 hover:border-neutral-600 bg-transparent whitespace-nowrap"
                >
                  Decline
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none text-xs font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-lg whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
