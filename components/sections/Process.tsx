'use client'
import { motion } from 'framer-motion'

const steps = [
  { num: '01', label: 'SCOPE', title: 'Discovery & Scope', desc: 'We define your MVP scope, core features, and success metrics in a focused kick-off session.', icon: '🔍' },
  { num: '02', label: 'DESIGN', title: 'Design & Architecture', desc: 'We design the UI/UX and architect the technical foundation for your product.', icon: '🎨' },
  { num: '03', label: 'BUILD', title: 'Build & Iterate', desc: 'Rapid development with daily check-ins. You see progress every day until launch.', icon: '⚙️' },
  { num: '04', label: 'LAUNCH', title: 'Go Live 🚀', desc: 'Deploy to production with monitoring, analytics, and support. Your MVP is live.', icon: '🚀' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Vertical center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent hidden md:block" />
      {/* Particle field */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-orange-500/10 animate-float"
            style={{ width: `${Math.random() * 4 + 2}px`, height: `${Math.random() * 4 + 2}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 6}s`, animationDuration: `${4 + Math.random() * 4}s` }} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">How We Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Our Process</h2>
        </motion.div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="flex-1">
                <div className={`bg-[#111] border border-[rgba(249,115,22,0.15)] rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300 ${step.num === '04' ? 'border-orange-500/40 shadow-[0_0_30px_rgba(249,115,22,0.15)]' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-orange-500/60 font-bold text-lg">{step.num}</span>
                    <span className="text-xs font-bold text-orange-500/60 tracking-widest">{step.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {/* Center dot */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
              </div>
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
