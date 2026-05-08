'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-[1px]"
          style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.5), rgba(249,115,22,0.1) 40%, rgba(249,115,22,0.4) 70%, rgba(249,115,22,0.1))' }}>

          <div className="relative bg-[#050505] rounded-[calc(1.5rem-1px)] overflow-hidden">
            {/* Animated gradient blobs */}
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-32 -left-32 w-80 h-80 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)', filter: 'blur(40px)' }} />
            <motion.div
              animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.1), transparent 70%)', filter: 'blur(40px)' }} />

            {/* Orange-to-black gradient */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(0,0,0,0) 50%, rgba(234,88,12,0.12) 100%)' }}/>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}/>

            <div className="relative z-10 px-6 sm:px-12 py-12 sm:py-20 text-center">
              {/* Status chip */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 border border-orange-500/20 rounded-full px-4 py-1.5 mb-8 bg-orange-500/5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
                </span>
                <span className="text-orange-400 text-[10px] font-mono font-bold tracking-[0.18em] uppercase">Systems Online</span>
              </motion.div>

              <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                className="text-4xl lg:text-6xl font-semibold text-white mb-4 leading-tight">
                Ready to Ship Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">MVP?</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="text-neutral-500 text-base max-w-lg mx-auto mb-10 leading-relaxed">
                Join 50+ founders who launched with FastLaunch. One free call. Zero commitment. Just bring your idea.
              </motion.p>

              {/* Stats row */}
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
                className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm">
                {['50+ MVPs Shipped', '14 Days Max', '100% Code Ownership', 'Money-Back Guarantee'].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 text-neutral-500">
                    <span className="text-orange-500 text-xs">✓</span>
                    <span className="font-mono text-xs tracking-wide">{stat}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="primary">Book a Free Call</Button>
                <a
                  href="https://wa.me/447917328155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden px-7 py-3.5 rounded-lg text-sm font-medium text-white transition-all duration-300 border border-[rgba(249,115,22,0.3)] hover:border-orange-500/60 bg-transparent hover:bg-orange-500/5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </motion.div>

              {/* Bottom tech label */}
              <div className="mt-10 flex items-center justify-center gap-2 text-neutral-500 text-xs font-mono">
                <span className="w-8 h-px bg-neutral-800" />
                <span>FastLaunch_v2.0 // EST. 2024 // UK</span>
                <span className="w-8 h-px bg-neutral-800" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}




