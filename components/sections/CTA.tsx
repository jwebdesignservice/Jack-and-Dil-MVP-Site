'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-28 bg-black relative overflow-hidden">
      {/* Circuit-style background lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* Horizontal traces */}
        <line x1="0" y1="80" x2="240" y2="80" stroke="#F97316" strokeWidth="1"/>
        <circle cx="240" cy="80" r="3" fill="#F97316"/>
        <line x1="240" y1="80" x2="240" y2="160" stroke="#F97316" strokeWidth="1"/>
        <line x1="240" y1="160" x2="560" y2="160" stroke="#F97316" strokeWidth="1"/>
        <circle cx="560" cy="160" r="3" fill="#F97316"/>
        <line x1="560" y1="160" x2="560" y2="80" stroke="#F97316" strokeWidth="1"/>
        <line x1="560" y1="80" x2="800" y2="80" stroke="#F97316" strokeWidth="1"/>
        {/* Bottom traces */}
        <line x1="0" y1="320" x2="160" y2="320" stroke="#F97316" strokeWidth="1"/>
        <circle cx="160" cy="320" r="3" fill="#F97316"/>
        <line x1="160" y1="320" x2="160" y2="240" stroke="#F97316" strokeWidth="1"/>
        <line x1="160" y1="240" x2="400" y2="240" stroke="#F97316" strokeWidth="1"/>
        <circle cx="400" cy="240" r="3" fill="#F97316"/>
        <line x1="400" y1="240" x2="640" y2="240" stroke="#F97316" strokeWidth="1"/>
        <line x1="640" y1="240" x2="640" y2="320" stroke="#F97316" strokeWidth="1"/>
        <line x1="640" y1="320" x2="800" y2="320" stroke="#F97316" strokeWidth="1"/>
        {/* Node dots */}
        <circle cx="120" cy="80" r="2" fill="#F97316"/>
        <circle cx="680" cy="80" r="2" fill="#F97316"/>
        <circle cx="320" cy="320" r="2" fill="#F97316"/>
        <circle cx="480" cy="320" r="2" fill="#F97316"/>
      </svg>

      {/* Corner scan lines */}
      {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-20 h-20 pointer-events-none`}>
          <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <path
              d={i === 0 ? 'M4 20 L4 4 L20 4' : i === 1 ? 'M76 20 L76 4 L60 4' : i === 2 ? 'M4 60 L4 76 L20 76' : 'M76 60 L76 76 L60 76'}
              stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" strokeLinecap="round"
            />
          </svg>
        </div>
      ))}

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

            {/* Dot grid — same as hero */}
            <div className="absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            {/* Orange-to-black gradient */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(0,0,0,0) 50%, rgba(234,88,12,0.12) 100%)' }}/>
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}/>

            <div className="relative z-10 px-12 py-20 text-center">
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
                Join 50+ founders who launched with LaunchFast. One free call. Zero commitment. Just bring your idea.
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
                <Button href="#services" variant="outline">View Services</Button>
              </motion.div>

              {/* Bottom tech label */}
              <div className="mt-10 flex items-center justify-center gap-2 text-neutral-700 text-xs font-mono">
                <span className="w-8 h-px bg-neutral-800" />
                <span>LAUNCHFAST_v2.0 // EST. 2024 // UK</span>
                <span className="w-8 h-px bg-neutral-800" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



