'use client'
import { motion } from 'framer-motion'
import HeroDashboard from '@/components/svgs/HeroDashboard'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16 pb-4 md:pb-0">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        poster="/Images/Hero illustration.webp"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Darken + tint overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
      {/* Subtle orange wash to keep brand */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(249,115,22,0.08), transparent 60%)' }} />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-60"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Diagonal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="100" x2="100" y2="0" stroke="#F97316" strokeWidth="0.3" />
        <line x1="-20" y1="100" x2="80" y2="0" stroke="#F97316" strokeWidth="0.2" />
        <line x1="20" y1="100" x2="120" y2="0" stroke="#F97316" strokeWidth="0.2" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="glass-pill inline-flex items-center gap-3 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">67% of MVP&apos;s Built in 4–5 Days</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Production Ready MVP&apos;s. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Built, Shipped and Live in 3–14 Days.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-400 text-sm lg:text-base mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We build production-grade MVPs that launch in days. No fluff, no delays. Fast, high-quality software that gets you to market.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16 justify-center lg:justify-start">
              <Button href="/contact" variant="primary">Start Your MVP</Button>
              <Button href="/#process" variant="outline">See Our Process</Button>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block">
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
