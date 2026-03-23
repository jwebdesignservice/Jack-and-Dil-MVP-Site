'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Particle bursts in corners */}
      {[
        'top-8 left-8',
        'top-8 right-8',
        'bottom-8 left-8',
        'bottom-8 right-8',
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos}`}>
          {[...Array(6)].map((_, j) => (
            <motion.div key={j} className="absolute w-1 h-1 rounded-full bg-orange-500"
              animate={{ x: [0, (j % 3 - 1) * 30], y: [0, (Math.floor(j / 3) - 0.5) * 30], opacity: [1, 0] }}
              transition={{ duration: 2 + j * 0.3, repeat: Infinity, delay: j * 0.2 }} />
          ))}
        </div>
      ))}

      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-1"
          style={{ background: 'conic-gradient(from 0deg, #F97316, #FBBF24, #F97316, #EA580C, #F97316)' }}>
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
          <div className="relative bg-[#050505] rounded-[calc(1.5rem-4px)] p-16 text-center overflow-hidden">
            {/* Gradient blobs */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-orange-600/10 blur-3xl" />
            <div className="relative z-10">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Ready to Launch?</span>
                <h2 className="text-4xl lg:text-6xl font-bold text-white mt-4 mb-6">
                  Let&apos;s Build Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">MVP</span>
                </h2>
                <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-10">
                  Join 50+ founders who launched with LaunchFast. Book a free 30-minute discovery call today.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors">
                    Book a Free Call
                  </Link>
                  <Link href="/#services" className="border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-xl transition-colors">
                    View Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
