'use client'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const oldWay = [
  { text: '3–6 month timelines', icon: '✕' },
  { text: 'Huge upfront cost', icon: '✕' },
  { text: 'Bloated feature scope', icon: '✕' },
  { text: 'No code ownership', icon: '✕' },
  { text: 'Slow, opaque process', icon: '✕' },
]

const fastWay = [
  { text: '3–14 day delivery', icon: '✓' },
  { text: 'Fixed transparent pricing', icon: '✓' },
  { text: 'MVP-focused scope', icon: '✓' },
  { text: '100% code ownership', icon: '✓' },
  { text: 'Daily progress updates', icon: '✓' },
]

export default function Comparison() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle orange-tinted darken so video shows through */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Dramatic grid */}
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Orange radial bloom */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />

      {/* Top/bottom fade */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* Large decorative "VS" watermark — hidden on mobile to prevent overflow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 hidden md:flex">
        <span className="text-[320px] font-black text-orange-500/[0.04] leading-none select-none tracking-tighter">VS</span>
      </div>

      {/* Circuit traces */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" fill="none">
        <line x1="0" y1="150" x2="300" y2="150" stroke="#F97316" strokeWidth="1"/>
        <circle cx="300" cy="150" r="4" fill="#F97316"/>
        <line x1="300" y1="150" x2="300" y2="300" stroke="#F97316" strokeWidth="1"/>
        <line x1="300" y1="300" x2="500" y2="300" stroke="#F97316" strokeWidth="1"/>
        <line x1="900" y1="150" x2="1200" y2="150" stroke="#F97316" strokeWidth="1"/>
        <circle cx="900" cy="150" r="4" fill="#F97316"/>
        <line x1="900" y1="150" x2="900" y2="300" stroke="#F97316" strokeWidth="1"/>
        <line x1="700" y1="300" x2="900" y2="300" stroke="#F97316" strokeWidth="1"/>
        <line x1="0" y1="450" x2="200" y2="450" stroke="#F97316" strokeWidth="1"/>
        <circle cx="200" cy="450" r="3" fill="#F97316"/>
        <line x1="1000" y1="450" x2="1200" y2="450" stroke="#F97316" strokeWidth="1"/>
        <circle cx="1000" cy="450" r="3" fill="#F97316"/>
      </svg>

      <div className="container mx-auto px-6 relative z-20 py-28">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>}>Why FastLaunch</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-4">The Difference is <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Clear</span></h2>
          <p className="text-orange-200/40 mt-3 text-sm max-w-md mx-auto">Stop burning time and money on bloated agency processes.</p>
        </motion.div>

        {/* Main comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-0 items-stretch">

            {/* Old Way */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl overflow-hidden border border-b-0 lg:border-b lg:border-r-0 border-red-500/30 bg-[#120000]">
              {/* Strong red tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-red-950/20 to-transparent pointer-events-none"/>
              {/* Top red accent bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent"/>
              <div className="p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-300">The Old Way</h3>
                  <span className="ml-auto text-[10px] font-mono text-red-500/60 border border-red-500/20 rounded-full px-2 py-0.5">~6 months</span>
                </div>
                <ul className="space-y-3.5">
                  {oldWay.map((item, i) => (
                    <motion.li key={item.text} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06 }}
                      className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 text-[10px] font-bold flex-shrink-0">✕</span>
                      <span className="text-sm text-neutral-400">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-red-500/15">
                  <div className="text-3xl font-light text-red-400/50">~180</div>
                  <div className="text-xs text-neutral-500 mt-1">days average</div>
                </div>
              </div>
            </div>
            </motion.div>

            {/* VS divider */}
            <div className="flex items-center justify-center relative">
              <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent -translate-x-1/2"/>
              {/* Mobile: horizontal line */}
              <div className="lg:hidden absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent -translate-y-1/2"/>
              <div className="relative z-10 w-14 h-14 rounded-full bg-[#0A0500] border-2 border-orange-500/50 flex items-center justify-center my-2 lg:my-0"
                style={{ boxShadow: '0 0 24px rgba(249,115,22,0.25)' }}>
                <span className="text-sm font-black text-orange-400">VS</span>
              </div>
            </div>

            {/* Fast Way */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative rounded-b-2xl lg:rounded-bl-none lg:rounded-r-2xl overflow-hidden border border-t-0 lg:border-t lg:border-l-0 border-orange-500/50 bg-[#0D0900]"
              style={{ boxShadow: '0 0 60px rgba(249,115,22,0.15), inset 0 0 40px rgba(249,115,22,0.04)' }}>
              <div className="absolute inset-0 bg-gradient-to-bl from-orange-900/20 via-orange-950/15 to-transparent pointer-events-none"/>
              {/* Top orange accent bar */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"/>
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#F97316"/></svg>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-300">The Fast Way</h3>
                  <span className="ml-auto text-[10px] font-mono text-orange-400/70 border border-orange-500/30 rounded-full px-2 py-0.5 bg-orange-500/10">~14 days</span>
                </div>
                <ul className="space-y-3.5">
                  {fastWay.map((item, i) => (
                    <motion.li key={item.text} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06 }}
                      className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 text-[10px] font-bold flex-shrink-0">✓</span>
                      <span className="text-sm text-neutral-200">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-orange-500/20">
                  <div className="text-3xl font-light text-orange-400">~14</div>
                  <div className="text-xs text-neutral-500 mt-1">days average</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Speed comparison bar */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="mt-8 bg-[#0D0800]/60 border border-orange-500/15 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">Speed comparison</span>
                <div className="text-2xl font-light text-orange-400 mt-1">12× faster</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-neutral-500 mb-1">14 days vs 6 months</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500/50"/>
                  <span className="text-[10px] text-neutral-500">Traditional</span>
                  <span className="w-2 h-2 rounded-full bg-orange-500 ml-2"/>
                  <span className="text-[10px] text-neutral-500">FastLaunch</span>
                </div>
              </div>
            </div>
            <div className="space-y-2.5">
              <div>
                <div className="h-3 bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
                    className="h-full bg-gradient-to-r from-red-900 to-red-700/60 rounded-full"/>
                </div>
              </div>
              <div>
                <div className="h-3 bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '8%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                    style={{ boxShadow: '0 0 12px rgba(249,115,22,0.6)' }}/>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


