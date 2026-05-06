'use client'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'

function ScopeSVG() {
  return (
    <div className="relative w-full max-w-[360px] aspect-[220/180]">
      <svg viewBox="0 0 220 180" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0"/>
            <stop offset="50%" stopColor="#F97316" stopOpacity="0.15"/>
            <stop offset="100%" stopColor="#F97316" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#F97316" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Center glow */}
        <circle cx="110" cy="90" r="40" fill="url(#centerGlow)"/>

        {/* Outer ring — rotating dashed */}
        <motion.circle cx="110" cy="90" r="74" stroke="rgba(249,115,22,0.3)" strokeWidth="1" strokeDasharray="6 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '110px 90px' }}/>

        {/* Middle ring — counter-rotating */}
        <motion.circle cx="110" cy="90" r="54" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" strokeDasharray="3 6"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '110px 90px' }}/>

        {/* Inner solid ring */}
        <circle cx="110" cy="90" r="34" stroke="#F97316" strokeWidth="2" fill="rgba(249,115,22,0.06)"/>

        {/* Core ring — pulsing */}
        <motion.circle cx="110" cy="90" r="14" stroke="#FB923C" strokeWidth="2" fill="rgba(249,115,22,0.15)"
          animate={{ r: [14, 16, 14], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}/>

        {/* Center dot — pulsing */}
        <motion.circle cx="110" cy="90" r="5" fill="#F97316"
          animate={{ r: [5, 7, 5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}/>
        <motion.circle cx="110" cy="90" r="12" fill="none" stroke="#F97316" strokeWidth="1"
          animate={{ r: [12, 22, 12], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}/>

        {/* Crosshairs */}
        <line x1="110" y1="8" x2="110" y2="54" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
        <line x1="110" y1="126" x2="110" y2="172" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="90" x2="74" y2="90" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
        <line x1="146" y1="90" x2="192" y2="90" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>

        {/* Tick marks */}
        {[0,45,90,135,180,225,270,315].map((deg,i)=>{
          const r=74,rad=(deg*Math.PI)/180
          return <line key={i} x1={110+r*Math.cos(rad)} y1={90+r*Math.sin(rad)} x2={110+(r-10)*Math.cos(rad)} y2={90+(r-10)*Math.sin(rad)} stroke="rgba(249,115,22,0.55)" strokeWidth="1.5"/>
        })}

        {/* Corner brackets — fade in */}
        <motion.path d="M18 20 L18 36 M18 20 L34 20" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0.6, 1] }} transition={{ duration: 3, repeat: Infinity }}/>
        <motion.path d="M202 20 L202 36 M202 20 L186 20" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0.6, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}/>
        <motion.path d="M18 160 L18 144 M18 160 L34 160" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0.6, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}/>
        <motion.path d="M202 160 L202 144 M202 160 L186 160" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0.6, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 0.9 }}/>

        {/* Orbiting dots on the outer ring */}
        <motion.circle r="3.5" fill="#60a5fa"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '110px 90px', offsetPath: 'circle(74px at 110px 90px)', offsetDistance: '0%' }}>
        </motion.circle>

        {/* Scanning line — sweeps across */}
        <motion.rect x="36" y="85" width="148" height="10" fill="url(#scanGrad)" rx="2"
          animate={{ y: [30, 150, 30] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}/>

        {/* Cardinal blue dots — pulsing */}
        <motion.circle cx="110" cy="8" r="3.5" fill="#60a5fa"
          animate={{ r: [3.5, 5, 3.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}/>
        <motion.circle cx="110" cy="172" r="3.5" fill="#60a5fa"
          animate={{ r: [3.5, 5, 3.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}/>
        <motion.circle cx="28" cy="90" r="3.5" fill="#60a5fa"
          animate={{ r: [3.5, 5, 3.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}/>
        <motion.circle cx="192" cy="90" r="3.5" fill="#60a5fa"
          animate={{ r: [3.5, 5, 3.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}/>

        {/* Data labels */}
        <text x="110" y="174" fill="rgba(249,115,22,0.4)" fontSize="6" fontFamily="monospace" textAnchor="middle" letterSpacing="2">SCANNING</text>
      </svg>
    </div>
  )
}

function DesignSVG() {
  return (
    <svg viewBox="0 0 280 180" fill="none" className="w-full max-w-[360px]">
      <rect x="14" y="16" width="252" height="148" rx="10" stroke="rgba(249,115,22,0.45)" strokeWidth="1.5" fill="rgba(249,115,22,0.03)"/>
      <rect x="14" y="16" width="252" height="26" rx="10" fill="rgba(249,115,22,0.12)"/>
      <rect x="14" y="36" width="252" height="6" fill="rgba(249,115,22,0.12)"/>
      <circle cx="30" cy="29" r="5" fill="#ef4444"/>
      <circle cx="44" cy="29" r="5" fill="#f59e0b"/>
      <circle cx="58" cy="29" r="5" fill="#22c55e"/>
      <rect x="80" y="20" width="140" height="16" rx="8" stroke="rgba(249,115,22,0.35)" strokeWidth="1" fill="rgba(0,0,0,0.4)"/>
      <text x="150" y="31" fill="rgba(249,115,22,0.6)" fontSize="7" fontFamily="monospace" textAnchor="middle">FastLaunch.dev</text>
      <rect x="22" y="50" width="236" height="10" rx="2" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.28)" strokeWidth="0.5"/>
      {[22,100,168].map((x,i)=><rect key={i} x={x+6} y="52" width={i===0?52:40} height="6" rx="1" fill="rgba(249,115,22,0.28)"/>)}
      <rect x="22" y="68" width="134" height="72" rx="3" fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.32)" strokeWidth="1"/>
      <rect x="30" y="78" width="90" height="7" rx="2" fill="#F97316" fillOpacity="0.55"/>
      <rect x="30" y="89" width="72" height="4.5" rx="1" fill="rgba(249,115,22,0.32)"/>
      <rect x="30" y="97" width="56" height="4" rx="1" fill="rgba(249,115,22,0.2)"/>
      <rect x="30" y="106" width="44" height="10" rx="4" fill="#F97316" fillOpacity="0.65)"/>
      <rect x="30" y="106" width="44" height="10" rx="4" fill="#F97316" fillOpacity="0.65"/>
      <rect x="164" y="68" width="94" height="72" rx="3" fill="rgba(96,165,250,0.08)" stroke="rgba(96,165,250,0.4)" strokeWidth="1"/>
      <line x1="164" y1="68" x2="258" y2="140" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <line x1="258" y1="68" x2="164" y2="140" stroke="rgba(96,165,250,0.2)" strokeWidth="1"/>
      <circle cx="211" cy="104" r="16" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5" fill="rgba(96,165,250,0.1)"/>
      <circle cx="211" cy="104" r="6" fill="rgba(96,165,250,0.4)"/>
      {[22,106,190].map(x=><rect key={x} x={x} y="148" width="72" height="10" rx="2" fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.22)" strokeWidth="0.8"/>)}
    </svg>
  )
}

function BuildSVG() {
  return (
    <svg viewBox="0 0 280 180" fill="none" className="w-full max-w-[360px]">
      <rect x="10" y="10" width="260" height="160" rx="10" stroke="rgba(249,115,22,0.45)" strokeWidth="1.5" fill="rgba(0,0,0,0.5)"/>
      <rect x="10" y="10" width="260" height="28" rx="10" fill="rgba(249,115,22,0.12)"/>
      <rect x="10" y="32" width="260" height="6" fill="rgba(249,115,22,0.12)"/>
      <circle cx="26" cy="24" r="5" fill="#ef4444"/>
      <circle cx="40" cy="24" r="5" fill="#f59e0b"/>
      <circle cx="54" cy="24" r="5" fill="#22c55e"/>
      <text x="140" y="28" fill="rgba(249,115,22,0.5)" fontSize="7.5" fontFamily="monospace" textAnchor="middle">bash — fast-launch — zsh</text>
      <text x="22" y="54" fill="#60a5fa" fontSize="8.5" fontFamily="monospace">$ git push origin main</text>
      <text x="22" y="69" fill="rgba(249,115,22,0.75)" fontSize="8.5" fontFamily="monospace">→ Compiling modules...</text>
      <text x="22" y="84" fill="rgba(249,115,22,0.75)" fontSize="8.5" fontFamily="monospace">→ Running test suite (42)...</text>
      <text x="22" y="99" fill="#22c55e" fontSize="8.5" fontFamily="monospace">✓ All tests passed</text>
      <text x="22" y="114" fill="#22c55e" fontSize="8.5" fontFamily="monospace">✓ Build complete in 3.2s</text>
      <text x="22" y="129" fill="#F97316" fontSize="8.5" fontFamily="monospace">→ Deploying to production...</text>
      <text x="22" y="144" fill="#a78bfa" fontSize="8.5" fontFamily="monospace">✓ Preview URL ready</text>
      <rect x="22" y="149" width="10" height="11" rx="1.5" fill="#F97316" opacity="0.85"/>
      <rect x="10" y="158" width="260" height="12" rx="0" fill="rgba(249,115,22,0.06)" clipPath="url(#progressClip)"/>
      <motion.rect x="10" y="158" width="0" height="12" fill="url(#bp)" clipPath="url(#progressClip)"
        animate={{ width: [0, 260] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', repeatDelay: 0.5 }}/>
      <defs>
        <linearGradient id="bp" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6"/>
        </linearGradient>
        <clipPath id="progressClip">
          <rect x="10" y="158" width="260" height="12" rx="6"/>
        </clipPath>
      </defs>
    </svg>
  )
}

function LaunchSVG() {
  return (
    <svg viewBox="0 0 280 180" fill="none" className="w-full max-w-[360px]">
      <circle cx="140" cy="88" r="72" stroke="rgba(249,115,22,0.38)" strokeWidth="1.5"/>
      <ellipse cx="140" cy="88" rx="72" ry="26" stroke="rgba(249,115,22,0.2)" strokeWidth="1"/>
      <ellipse cx="140" cy="88" rx="72" ry="52" stroke="rgba(249,115,22,0.13)" strokeWidth="1"/>
      <line x1="140" y1="16" x2="140" y2="160" stroke="rgba(249,115,22,0.1)" strokeWidth="1"/>
      <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <path d="M140 36 C140 36 156 46 156 64 C156 78 148 84 140 88 C132 84 124 78 124 64 C124 46 140 36 140 36Z" fill="rgba(249,115,22,0.22)" stroke="#F97316" strokeWidth="2.5"/>
        <circle cx="140" cy="62" r="9" fill="rgba(96,165,250,0.3)" stroke="#60a5fa" strokeWidth="2"/>
        <circle cx="140" cy="62" r="4" fill="#60a5fa"/>
        <path d="M124 69 L113 82 L124 77Z" fill="rgba(249,115,22,0.5)" stroke="#F97316" strokeWidth="1.5"/>
        <path d="M156 69 L167 82 L156 77Z" fill="rgba(249,115,22,0.5)" stroke="#F97316" strokeWidth="1.5"/>
        <path d="M131 88 Q 140 102 149 88" stroke="#F97316" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <motion.path d="M134 94 Q 140 108 146 94" stroke="#f59e0b" strokeWidth="2.5" fill="none"
          animate={{ opacity: [0.4,1,0.4] }} transition={{ duration: 0.4, repeat: Infinity }}/>
        <motion.path d="M137 100 Q 140 114 143 100" stroke="#fde047" strokeWidth="2" fill="none"
          animate={{ opacity: [0.2,0.8,0.2] }} transition={{ duration: 0.3, repeat: Infinity, delay: 0.1 }}/>
      </motion.g>
      <path d="M72 52 Q 140 12 208 52" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" strokeDasharray="5 5" fill="none"/>
      {[[16,16],[264,16],[16,160],[264,160]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="3" fill={i%2===0?"#a78bfa":"#60a5fa"}/>
      ))}
      <rect x="68" y="144" width="144" height="24" rx="12" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.5"/>
      <circle cx="88" cy="156" r="4" fill="#22c55e"/>
      <text x="148" y="160" fill="#22c55e" fontSize="8.5" fontFamily="monospace" textAnchor="middle">LIVE ON VERCEL ✓</text>
    </svg>
  )
}

const steps = [
  { num: '01', label: 'SCOPE',  title: 'Discovery & Scope',    day: 'Day 1',     desc: 'We start with a focused kick-off to define your core features, eliminate scope creep, and align on success metrics. Everything is agreed and signed off before a single line of code is written.', details: ['Feature prioritisation', 'Tech stack decision', 'Timeline locked', 'Spec doc signed'], SVG: ScopeSVG },
  { num: '02', label: 'DESIGN', title: 'Architecture & Design', day: 'Days 2–3',  desc: 'UI wireframes, database schema, and API contracts are all designed upfront. You review and approve everything before development begins — no surprises later.', details: ['Figma wireframes', 'Database schema', 'API contract', 'Client approval'], SVG: DesignSVG },
  { num: '03', label: 'BUILD',  title: 'Build & Iterate',       day: 'Days 4–12', desc: 'Daily standups and code shipped every 24 hours. You see real progress each day — not a black box. Issues are caught early, not at the end.', details: ['Daily progress updates', 'Feature branches', 'Code review cycle', 'QA on each PR'], SVG: BuildSVG },
  { num: '04', label: 'LAUNCH', title: 'Go Live',               day: 'Day 14',    desc: 'Production deployment, monitoring configured, full documentation written, and complete knowledge transfer. You own 100% of the code from minute one.', details: ['Production deploy', 'Monitoring live', 'Full documentation', '100% code ownership'], isLast: true, SVG: LaunchSVG },
]

export default function Process() {
  return (
    <section id="process" className="pt-20 pb-28 bg-[#060606] relative overflow-hidden">
      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_,i)=>(
          <div key={i} className="absolute rounded-full bg-white/10 animate-float"
            style={{ width:`${1+(i*.3)%2}px`, height:`${1+(i*.3)%2}px`, left:`${(i*37)%100}%`, top:`${(i*53)%100}%`, animationDelay:`${(i*.7)%8}s`, animationDuration:`${5+(i*.4)%5}s` }}/>
        ))}
      </div>



      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}>How We Work</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-4">The Process</h2>
          <p className="text-neutral-500 mt-4 max-w-md mx-auto text-sm">Concept to production in 14 days. No surprises, no delays.</p>
        </motion.div>

        {/* Vertical center line — desktop only */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block -translate-x-1/2"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.25) 10%, rgba(249,115,22,0.25) 90%, transparent)' }}/>

        {/* Steps */}
        <div className="space-y-16 md:space-y-28">
          {steps.map((step, i) => {
            const svgLeft = i % 2 === 0
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col-reverse lg:flex-row items-center gap-10 relative ${!svgLeft ? 'lg:flex-row-reverse' : ''}`}>

                {/* SVG side */}
                <div className="flex-1 w-full flex justify-center py-4">
                  <step.SVG />
                </div>

                {/* Center node on vertical line */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${step.isLast ? 'border-orange-500 bg-orange-500/20 shadow-[0_0_24px_rgba(249,115,22,0.4)]' : 'border-orange-500/40 bg-[#060606]'}`}>
                    {step.isLast
                      ? <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse"/>
                      : <div className="w-3 h-3 rounded-full bg-orange-500/50"/>}
                  </div>
                </div>

                {/* Text side — centered */}
                <div className="flex-1 w-full text-center flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 ${step.isLast ? 'border-orange-500 bg-orange-500/20 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'border-orange-500/40 bg-[#0A0A0A] text-orange-500/70'}`}>
                      {step.num}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-orange-500/50 uppercase font-mono">{step.label}</span>
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${step.isLast ? 'border-orange-500/40 text-orange-400 bg-orange-500/10' : 'border-neutral-800 text-neutral-500'}`}>
                      {step.day}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-semibold mb-3 ${step.isLast ? 'text-orange-100' : 'text-white'}`}>{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-5 max-w-sm">{step.desc}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {step.details.map(d => (
                      <span key={d} className={`text-[10px] font-mono px-2.5 py-1 rounded border ${step.isLast ? 'border-orange-500/30 text-orange-400/80 bg-orange-500/5' : 'border-neutral-800 text-neutral-500 bg-[#0D0D0D]'}`}>{d}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}






