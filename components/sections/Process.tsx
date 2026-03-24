'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    label: 'SCOPE',
    title: 'Discovery & Scope',
    day: 'Day 1',
    desc: 'We run a focused kick-off session to define your core features, cut scope creep, and agree on success metrics. Output: a spec doc both parties sign off on.',
    details: ['Feature prioritisation', 'Tech stack decision', 'Timeline locked', 'Spec doc signed'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="12" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.5"/>
        <circle cx="20" cy="20" r="6" stroke="#F97316" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="2" fill="#F97316"/>
        <line x1="20" y1="4" x2="20" y2="8" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="20" y1="32" x2="20" y2="36" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="4" y1="20" x2="8" y2="20" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="32" y1="20" x2="36" y2="20" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    num: '02',
    label: 'DESIGN',
    title: 'Architecture & Design',
    day: 'Days 2–3',
    desc: 'UI wireframes, database schema, API contract — all designed before a single line of production code is written. You review and approve.',
    details: ['Figma wireframes', 'DB schema design', 'API contract', 'Design approval'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="8" width="24" height="18" rx="2" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.6" fill="none"/>
        <rect x="12" y="12" width="7" height="5" rx="0.5" fill="#F97316" fillOpacity="0.3"/>
        <rect x="22" y="12" width="6" height="1.5" rx="0.5" fill="#F97316" fillOpacity="0.3"/>
        <rect x="22" y="15" width="4" height="1.5" rx="0.5" fill="#F97316" fillOpacity="0.2"/>
        <line x1="20" y1="30" x2="20" y2="26" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4"/>
        <line x1="14" y1="32" x2="26" y2="32" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4"/>
      </svg>
    ),
  },
  {
    num: '03',
    label: 'BUILD',
    title: 'Build & Iterate',
    day: 'Days 4–12',
    desc: 'Daily standups. Code shipped every 24 hours. You see real progress — not a black box. If something needs adjusting, we catch it early.',
    details: ['Daily progress updates', 'Feature branches', 'Code review cycle', 'QA on each PR'],
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M14 18 L8 20 L14 22" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 18 L32 20 L26 22" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 14 L17 26" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="10" r="2" fill="#F97316" fillOpacity="0.5"/>
        <circle cx="8" cy="30" r="2" fill="#F97316" fillOpacity="0.5"/>
        <line x1="28" y1="12" x2="32" y2="10" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2"/>
        <line x1="12" y1="28" x2="8" y2="30" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    label: 'LAUNCH',
    title: 'Go Live 🚀',
    day: 'Day 14',
    desc: 'Production deployment, monitoring configured, docs written, knowledge transfer done. You own 100% of the code from minute one.',
    details: ['Production deploy', 'Monitoring live', 'Full documentation', '100% code ownership'],
    isLast: true,
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 6 C20 6 28 10 28 20 C28 28 22 32 20 34 C18 32 12 28 12 20 C12 10 20 6 20 6Z" stroke="#F97316" strokeWidth="1.5" fill="none" strokeOpacity="0.7"/>
        <circle cx="20" cy="20" r="3" fill="#F97316"/>
        <path d="M12 28 L8 32" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
        <path d="M28 28 L32 32" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5"/>
        <circle cx="8" cy="33" r="1.5" fill="#F97316" fillOpacity="0.4"/>
        <circle cx="32" cy="33" r="1.5" fill="#F97316" fillOpacity="0.4"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 bg-[#060606] relative overflow-hidden">
      {/* Vertical glow line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.3) 20%, rgba(249,115,22,0.3) 80%, transparent)' }} />

      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-20">
          <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">How We Work</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">The Process</h2>
          <p className="text-neutral-500 mt-4 max-w-md mx-auto text-sm">No surprises. No delays. A proven path from concept to production in 14 days.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center gap-0 lg:gap-10 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

              {/* Card */}
              <div className={`flex-1 group relative rounded-2xl border p-7 transition-all duration-300 overflow-hidden ${step.isLast
                ? 'border-orange-500/40 bg-[#0D0900]'
                : 'border-[rgba(249,115,22,0.12)] bg-[#0A0A0A] hover:border-orange-500/30'}`}
                style={step.isLast ? { boxShadow: '0 0 50px rgba(249,115,22,0.15), inset 0 0 30px rgba(249,115,22,0.05)' } : {}}>

                {/* Sweep border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, transparent 60%)' }} />

                {/* Top row */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="flex items-center gap-3">
                    {step.icon}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-orange-500/50 font-bold text-sm">{step.num}</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500/50 uppercase">{step.label}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-[11px] font-mono px-3 py-1 rounded-full border tracking-wide ${step.isLast
                    ? 'border-orange-500/40 text-orange-400 bg-orange-500/10'
                    : 'border-neutral-800 text-neutral-600'}`}>
                    {step.day}
                  </span>
                </div>

                {/* Title + desc */}
                <div className="relative z-10 mb-5">
                  <h3 className={`text-lg font-bold mb-2 ${step.isLast ? 'text-orange-100' : 'text-white'}`}>{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {/* Detail chips */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {step.details.map(d => (
                    <span key={d} className={`text-[11px] font-mono px-2.5 py-1 rounded border ${step.isLast
                      ? 'border-orange-500/25 text-orange-400/80 bg-orange-500/5'
                      : 'border-neutral-800 text-neutral-600 bg-[#111]'}`}>
                      {d}
                    </span>
                  ))}
                </div>

                {step.isLast && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-bold tracking-widest text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full px-3 py-1">
                      GO LIVE 🚀
                    </span>
                  </div>
                )}
              </div>

              {/* Center node */}
              <div className="hidden lg:flex items-center justify-center w-16 flex-shrink-0">
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${step.isLast ? 'border-orange-500 bg-orange-500/20' : 'border-orange-500/40 bg-[#0A0A0A]'}`}>
                  <div className={`w-2 h-2 rounded-full ${step.isLast ? 'bg-orange-500' : 'bg-orange-500/60'}`} />
                  {step.isLast && (
                    <div className="absolute inset-0 rounded-full animate-ping bg-orange-500/20" />
                  )}
                </div>
              </div>

              {/* Spacer for alternate side */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
