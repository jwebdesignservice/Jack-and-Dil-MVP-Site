'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroGraphic from '@/components/svgs/HeroGraphic'

const stats = [
  { value: '50+', label: 'MVPs Built' },
  { value: '3-14', label: 'Days' },
  { value: '100%', label: 'Ownership' },
  { value: '24/7', label: 'Support' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16">
      {/* Dot grid */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      {/* Breathing animation overlay */}
      <div className="absolute inset-0 animate-breathe"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.03) 0%, transparent 70%)' }} />
      {/* Blurred orange circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #F97316, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #EA580C, transparent 70%)', filter: 'blur(60px)' }} />
      {/* Diagonal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="100" x2="100" y2="0" stroke="#F97316" strokeWidth="0.3" />
        <line x1="-20" y1="100" x2="80" y2="0" stroke="#F97316" strokeWidth="0.2" />
        <line x1="20" y1="100" x2="120" y2="0" stroke="#F97316" strokeWidth="0.2" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 border border-orange-500/30 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-orange-400 text-sm font-medium">⚡ Now accepting projects Q1 2026</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Production-Ready</span>
              <br />
              <span className="text-white">MVPs</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                For Ambitious Founders
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-400 text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
              We build production-grade MVPs that launch in days. No fluff, no delays — just fast, high-quality software that gets you to market.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16">
              <Link href="/contact" className="relative overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors group">
                <span className="relative z-10">Start Your MVP</span>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-gradient-to-r from-orange-400/20 to-transparent transition-transform duration-300" />
              </Link>
              <Link href="/#process" className="relative overflow-hidden border border-orange-500/30 text-white hover:border-orange-500/60 font-semibold px-8 py-4 rounded-lg text-base transition-colors group">
                <span className="relative z-10">See Our Process</span>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transition-transform duration-700" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="border border-[rgba(249,115,22,0.15)] rounded-xl p-4 bg-[#0A0A0A]/50">
                  <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
                  <div className="text-neutral-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block">
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
