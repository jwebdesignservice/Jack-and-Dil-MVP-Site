'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CircuitPattern from '@/components/svgs/CircuitPattern'

const oldWay = ['6+ month timelines', 'Huge upfront cost', 'Bloated features', 'No ownership', 'Slow iteration']
const fastWay = ['3-14 day delivery', 'Fixed transparent pricing', 'MVP-focused scope', '100% code ownership', 'Weekly sprints']

export default function Comparison() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <CircuitPattern />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Why LaunchFast</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">The Difference is Clear</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Old Way */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-red-950/20 border border-red-500/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-red-400 mb-6 text-center">The Old Way</h3>
            <ul className="space-y-4">
              {oldWay.map(item => (
                <li key={item} className="flex items-center gap-3 text-neutral-500">
                  <span className="text-red-500 text-lg">✕</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS */}
          <div className="flex items-center justify-center">
            <motion.div style={{ rotate }}
              className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-orange-700 select-none">
              VS
            </motion.div>
          </div>

          {/* Fast Way */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-orange-950/20 border border-orange-500/30 rounded-2xl p-8 relative"
            style={{ boxShadow: '0 0 40px rgba(249,115,22,0.1)' }}>
            <h3 className="text-xl font-bold text-orange-400 mb-6 text-center">The Fast Way</h3>
            <ul className="space-y-4">
              {fastWay.map(item => (
                <li key={item} className="flex items-center gap-3 text-neutral-300">
                  <span className="text-orange-500 text-lg">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-sm text-neutral-500 mb-3">
            <span className="text-red-400 font-medium">Traditional: 3-6 months</span>
            <span className="text-orange-400 font-medium">LaunchFast: 14 days</span>
          </div>
          <div className="h-3 bg-neutral-900 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: '12%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" />
          </div>
          <p className="text-center text-neutral-600 text-xs mt-3">14 days vs 6 months — 12× faster</p>
        </motion.div>
      </div>
    </section>
  )
}
