'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import CTA from '@/components/sections/CTA'

const dotGrid = {
  backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
}

const invertedDotGrid = {
  backgroundImage: 'radial-gradient(rgba(249,115,22,0.2) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
}

/* ── SVG Graphics ── */

function DashboardSVG() {
  return (
    <motion.svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Window chrome */}
      <rect x="20" y="20" width="360" height="260" rx="10" fill="#0D0D0D" stroke="rgba(249,115,22,0.25)" strokeWidth="1"/>
      {/* Title bar */}
      <rect x="20" y="20" width="360" height="36" rx="10" fill="#141414"/>
      <rect x="20" y="44" width="360" height="12" fill="#141414"/>
      <circle cx="42" cy="38" r="5" fill="#ef4444" fillOpacity="0.7"/>
      <circle cx="58" cy="38" r="5" fill="#f59e0b" fillOpacity="0.7"/>
      <circle cx="74" cy="38" r="5" fill="#22c55e" fillOpacity="0.7"/>
      <text x="200" y="43" textAnchor="middle" fill="#4a4a4a" fontSize="10" fontFamily="monospace">dashboard.launchfast.dev</text>
      {/* Sidebar */}
      <rect x="20" y="56" width="70" height="224" fill="#0A0A0A"/>
      <rect x="28" y="74" width="54" height="7" rx="3" fill="#F97316" fillOpacity="0.8"/>
      <rect x="28" y="91" width="40" height="6" rx="3" fill="#333"/>
      <rect x="28" y="107" width="48" height="6" rx="3" fill="#333"/>
      <rect x="28" y="123" width="36" height="6" rx="3" fill="#333"/>
      <rect x="28" y="139" width="44" height="6" rx="3" fill="#333"/>
      {/* Main content area */}
      {/* Stats row */}
      <rect x="100" y="66" width="80" height="48" rx="6" fill="#111" stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
      <rect x="190" y="66" width="80" height="48" rx="6" fill="#111" stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
      <rect x="280" y="66" width="80" height="48" rx="6" fill="#111" stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
      <text x="140" y="84" textAnchor="middle" fill="#F97316" fontSize="14" fontFamily="monospace" fontWeight="bold">$24k</text>
      <text x="140" y="97" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">Revenue</text>
      <text x="230" y="84" textAnchor="middle" fill="#60a5fa" fontSize="14" fontFamily="monospace" fontWeight="bold">1,420</text>
      <text x="230" y="97" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">Users</text>
      <text x="320" y="84" textAnchor="middle" fill="#22c55e" fontSize="14" fontFamily="monospace" fontWeight="bold">98%</text>
      <text x="320" y="97" textAnchor="middle" fill="#555" fontSize="7" fontFamily="monospace">Uptime</text>
      {/* Chart area */}
      <rect x="100" y="126" width="260" height="100" rx="6" fill="#111" stroke="rgba(249,115,22,0.1)" strokeWidth="1"/>
      <text x="115" y="142" fill="#555" fontSize="8" fontFamily="monospace">Activity / 7 days</text>
      {/* Bar chart */}
      {[
        { x: 120, h: 40 }, { x: 150, h: 55 }, { x: 180, h: 35 }, { x: 210, h: 65 },
        { x: 240, h: 45 }, { x: 270, h: 75 }, { x: 300, h: 58 },
      ].map((bar, i) => (
        <motion.rect key={i} x={bar.x} y={210 - bar.h} width="20" height={bar.h} rx="3"
          fill={i === 5 ? '#F97316' : 'rgba(249,115,22,0.25)'}
          initial={{ scaleY: 0, originY: 1 }}
          whileInView={{ scaleY: 1 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          viewport={{ once: true }}
          style={{ transformOrigin: `${bar.x + 10}px 210px` }}
        />
      ))}
      {/* Deploy badge */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <rect x="240" y="238" width="120" height="28" rx="14" fill="#0D1A0D" stroke="rgba(34,197,94,0.4)" strokeWidth="1"/>
        <circle cx="258" cy="252" r="4" fill="#22c55e"/>
        <motion.circle cx="258" cy="252" r="7" fill="none" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4"
          animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}/>
        <text x="268" y="256" fill="#22c55e" fontSize="9" fontFamily="monospace">Deployed ✓</text>
      </motion.g>
    </motion.svg>
  )
}

function WireframeSVG() {
  return (
    <motion.svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Browser window */}
      <rect x="20" y="20" width="360" height="260" rx="10" fill="#0D0D0D" stroke="rgba(249,115,22,0.25)" strokeWidth="1"/>
      <rect x="20" y="20" width="360" height="36" rx="10" fill="#141414"/>
      <rect x="20" y="44" width="360" height="12" fill="#141414"/>
      <circle cx="42" cy="38" r="5" fill="#ef4444" fillOpacity="0.7"/>
      <circle cx="58" cy="38" r="5" fill="#f59e0b" fillOpacity="0.7"/>
      <circle cx="74" cy="38" r="5" fill="#22c55e" fillOpacity="0.7"/>
      {/* URL bar */}
      <rect x="130" y="29" width="180" height="16" rx="8" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1"/>
      <text x="220" y="41" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="monospace">figma.com/design</text>
      {/* Wireframe content */}
      {/* Nav bar wireframe */}
      <rect x="36" y="66" width="328" height="24" rx="4" fill="#1a1a1a" stroke="rgba(249,115,22,0.1)" strokeWidth="1"/>
      <rect x="46" y="72" width="40" height="12" rx="2" fill="rgba(249,115,22,0.3)"/>
      <rect x="220" y="74" width="25" height="8" rx="2" fill="#2a2a2a"/>
      <rect x="254" y="74" width="25" height="8" rx="2" fill="#2a2a2a"/>
      <rect x="288" y="74" width="25" height="8" rx="2" fill="#2a2a2a"/>
      <rect x="328" y="71" width="28" height="14" rx="7" fill="rgba(249,115,22,0.4)"/>
      {/* Hero wireframe */}
      <rect x="36" y="98" width="200" height="80" rx="4" fill="#111"/>
      <motion.rect x="46" y="108" width="140" height="10" rx="2" fill="rgba(249,115,22,0.25)"
        initial={{ width: 0 }} whileInView={{ width: 140 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}/>
      <motion.rect x="46" y="124" width="110" height="8" rx="2" fill="#2a2a2a"
        initial={{ width: 0 }} whileInView={{ width: 110 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}/>
      <motion.rect x="46" y="138" width="90" height="8" rx="2" fill="#2a2a2a"
        initial={{ width: 0 }} whileInView={{ width: 90 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}/>
      <rect x="46" y="155" width="50" height="16" rx="8" fill="rgba(249,115,22,0.5)"/>
      <rect x="106" y="155" width="50" height="16" rx="8" fill="#1a1a1a" stroke="rgba(249,115,22,0.3)" strokeWidth="1"/>
      {/* Image placeholder */}
      <rect x="246" y="98" width="118" height="80" rx="4" fill="#1a1a1a" stroke="rgba(249,115,22,0.1)" strokeWidth="1"/>
      <line x1="246" y1="98" x2="364" y2="178" stroke="rgba(249,115,22,0.08)" strokeWidth="1"/>
      <line x1="364" y1="98" x2="246" y2="178" stroke="rgba(249,115,22,0.08)" strokeWidth="1"/>
      <text x="305" y="142" textAnchor="middle" fill="#333" fontSize="9" fontFamily="monospace">image</text>
      {/* Feature cards row */}
      {[36, 128, 220, 312].map((x, i) => (
        <rect key={i} x={x} y={188} width="80" height="60" rx="4" fill="#111" stroke="rgba(249,115,22,0.08)" strokeWidth="1"/>
      ))}
      {/* Annotation lines */}
      <motion.line x1="10" y1="98" x2="30" y2="98" stroke="rgba(96,165,250,0.6)" strokeWidth="1" strokeDasharray="3 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}/>
      <text x="5" y="101" fill="rgba(96,165,250,0.6)" fontSize="7" fontFamily="monospace" textAnchor="middle">H1</text>
      <motion.line x1="390" y1="66" x2="370" y2="66" stroke="rgba(167,139,250,0.6)" strokeWidth="1" strokeDasharray="3 3"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1.0 }}/>
      <text x="395" y="69" fill="rgba(167,139,250,0.6)" fontSize="7" fontFamily="monospace">nav</text>
    </motion.svg>
  )
}

function TerminalSVG() {
  return (
    <motion.svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Terminal window */}
      <rect x="20" y="20" width="360" height="260" rx="10" fill="#0A0A0A" stroke="rgba(249,115,22,0.25)" strokeWidth="1"/>
      <rect x="20" y="20" width="360" height="36" rx="10" fill="#141414"/>
      <rect x="20" y="44" width="360" height="12" fill="#141414"/>
      <circle cx="42" cy="38" r="5" fill="#ef4444" fillOpacity="0.7"/>
      <circle cx="58" cy="38" r="5" fill="#f59e0b" fillOpacity="0.7"/>
      <circle cx="74" cy="38" r="5" fill="#22c55e" fillOpacity="0.7"/>
      <text x="200" y="43" textAnchor="middle" fill="#4a4a4a" fontSize="10" fontFamily="monospace">zsh — main</text>
      {/* Terminal lines */}
      {[
        { y: 76, color: '#60a5fa', prefix: '$ ', text: 'git push origin main', delay: 0.1 },
        { y: 94, color: '#22c55e', prefix: '', text: 'Enumerating objects: 12, done.', delay: 0.3 },
        { y: 110, color: '#22c55e', prefix: '', text: 'Writing objects: 100% (12/12)', delay: 0.5 },
        { y: 126, color: '#22c55e', prefix: '', text: '✓  Branch pushed to origin/main', delay: 0.7 },
        { y: 144, color: '#60a5fa', prefix: '$ ', text: 'npm run test', delay: 0.9 },
        { y: 162, color: '#555', prefix: '', text: 'Running test suites...', delay: 1.1 },
        { y: 178, color: '#22c55e', prefix: '', text: 'PASS  src/api/auth.test.ts', delay: 1.3 },
        { y: 194, color: '#22c55e', prefix: '', text: 'PASS  src/api/users.test.ts', delay: 1.5 },
        { y: 210, color: '#22c55e', prefix: '', text: 'Tests: 48 passed, 0 failed', delay: 1.7 },
        { y: 228, color: '#60a5fa', prefix: '$ ', text: 'vercel --prod', delay: 1.9 },
      ].map((line, i) => (
        <motion.text key={i} x="36" y={line.y} fill={line.color} fontSize="10" fontFamily="monospace"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: line.delay }}>
          <tspan fill="rgba(249,115,22,0.6)">{line.prefix}</tspan>{line.text}
        </motion.text>
      ))}
      {/* Deploy confirmation badge */}
      <motion.g initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.2 }}>
        <rect x="36" y="238" width="200" height="28" rx="6" fill="#0D1A0D" stroke="rgba(34,197,94,0.4)" strokeWidth="1"/>
        <text x="52" y="256" fill="#22c55e" fontSize="10" fontFamily="monospace">✓  Production deployment live</text>
      </motion.g>
      {/* Cursor blink */}
      <motion.rect x="36" y="252" width="6" height="11" fill="#F97316"
        animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}/>
    </motion.svg>
  )
}

function GlobeSVG() {
  return (
    <motion.svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Globe */}
      <motion.circle cx="200" cy="150" r="100" stroke="rgba(249,115,22,0.2)" strokeWidth="1" fill="#0A0A0A"
        initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}/>
      {/* Grid lines */}
      {[-60, -30, 0, 30, 60].map((lat, i) => (
        <ellipse key={i} cx="200" cy="150" rx={Math.abs(Math.cos(lat * Math.PI / 180) * 100)} ry="12"
          stroke="rgba(249,115,22,0.1)" strokeWidth="1" fill="none"/>
      ))}
      <line x1="200" y1="50" x2="200" y2="250" stroke="rgba(249,115,22,0.1)" strokeWidth="1"/>
      <line x1="130" y1="70" x2="130" y2="230" stroke="rgba(249,115,22,0.06)" strokeWidth="1"/>
      <line x1="270" y1="70" x2="270" y2="230" stroke="rgba(249,115,22,0.06)" strokeWidth="1"/>
      {/* Connection nodes */}
      {[
        { cx: 160, cy: 100, color: '#F97316', label: 'LHR', delay: 0.5 },
        { cx: 260, cy: 130, color: '#60a5fa', label: 'NYC', delay: 0.7 },
        { cx: 190, cy: 190, color: '#22c55e', label: 'SYD', delay: 0.9 },
        { cx: 130, cy: 160, color: '#a78bfa', label: 'FRA', delay: 1.1 },
        { cx: 270, cy: 175, color: '#F97316', label: 'SFO', delay: 1.3 },
      ].map((node, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: node.delay }}>
          <circle cx={node.cx} cy={node.cy} r="5" fill={node.color}/>
          <motion.circle cx={node.cx} cy={node.cy} r="10" fill="none" stroke={node.color} strokeWidth="1" strokeOpacity="0.4"
            animate={{ scale: [1, 2], opacity: [0.4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}/>
          <text x={node.cx + 8} y={node.cy - 6} fill={node.color} fontSize="8" fontFamily="monospace">{node.label}</text>
        </motion.g>
      ))}
      {/* Connection lines */}
      {[
        { x1: 160, y1: 100, x2: 260, y2: 130 },
        { x1: 260, y1: 130, x2: 270, y2: 175 },
        { x1: 160, y1: 100, x2: 130, y2: 160 },
        { x1: 130, y1: 160, x2: 190, y2: 190 },
      ].map((line, i) => (
        <motion.line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
          stroke="rgba(249,115,22,0.2)" strokeWidth="1" strokeDasharray="4 4"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
          transition={{ delay: 1.5 + i * 0.2, duration: 0.6 }}/>
      ))}
      {/* Uptime chart */}
      <rect x="30" y="220" width="150" height="60" rx="6" fill="#111" stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
      <text x="42" y="236" fill="#555" fontSize="8" fontFamily="monospace">Uptime / 30d</text>
      <motion.polyline points="42,270 60,262 78,265 96,258 114,261 132,255 150,252 168,256"
        stroke="#22c55e" strokeWidth="1.5" fill="none"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.8, duration: 0.8 }}/>
      <text x="42" y="280" fill="#22c55e" fontSize="8" fontFamily="monospace">99.97% avg</text>
      {/* Deploy badge */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 2 }}>
        <rect x="230" y="220" width="140" height="60" rx="6" fill="#111" stroke="rgba(249,115,22,0.15)" strokeWidth="1"/>
        <text x="242" y="236" fill="#555" fontSize="8" fontFamily="monospace">Last deploy</text>
        <text x="242" y="253" fill="#F97316" fontSize="10" fontFamily="monospace">v2.4.1 → prod</text>
        <circle cx="244" cy="268" r="4" fill="#22c55e"/>
        <motion.circle cx="244" cy="268" r="7" fill="none" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4"
          animate={{ scale: [1, 1.8], opacity: [0.4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}/>
        <text x="254" y="271" fill="#22c55e" fontSize="8" fontFamily="monospace">All systems go</text>
      </motion.g>
    </motion.svg>
  )
}

/* ── Service Section Component ── */

interface ServiceSectionProps {
  id: string
  reverse?: boolean
  label: { icon: React.ReactNode; text: string }
  title: string
  paragraphs: string[]
  features: string[][]
  deliverables: string[]
  ctaHref: string
  ctaText: string
  graphic: React.ReactNode
}

function ServiceSection({ id, reverse, label, title, paragraphs, features, deliverables, ctaHref, ctaText, graphic }: ServiceSectionProps) {
  return (
    <section id={id} className="py-24 bg-black relative overflow-hidden" style={dotGrid}>
      <div className="absolute inset-0 bg-black/80" />
      {/* Full-width grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}/>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: reverse ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className={reverse ? 'lg:col-start-2' : ''}>
            <SectionLabel icon={label.icon}>{label.text}</SectionLabel>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mt-4 mb-6 leading-tight">{title}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-neutral-400 leading-relaxed mb-4">{p}</p>
            ))}
            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3 mt-6 mb-8">
              {features.flat().map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs text-neutral-400 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
            {/* Deliverables card */}
            <div className="rounded-xl border border-[rgba(249,115,22,0.12)] bg-[#0A0A0A] p-5 mb-8">
              <p className="text-xs font-mono text-orange-500/70 uppercase tracking-widest mb-3">What you get</p>
              <ul className="space-y-2">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                    <span className="text-orange-500 mt-0.5">→</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href={ctaHref} variant="primary">{ctaText}</Button>
          </motion.div>
          {/* Graphic side */}
          <motion.div initial={{ opacity: 0, x: reverse ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            className={`rounded-2xl border border-[rgba(249,115,22,0.12)] bg-[#0D0D0D] p-4 aspect-[4/3] flex items-center justify-center ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            {graphic}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Page ── */

export default function ServicesPage() {
  return (
    <main className="bg-black">

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden pt-40 pb-28" style={dotGrid}>
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}/>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            }>Our Services</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="text-5xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Launch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="text-neutral-400 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            From wireframe to production in days — not months. We handle design, development, and deployment so you can focus on your users.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">Book a Free Call</Button>
            <Button href="/#pricing" variant="outline">View Pricing</Button>
          </motion.div>
        </div>
      </section>

      {/* ── 2a. MVP Development ── */}
      <ServiceSection
        id="mvp"
        label={{
          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
          text: 'MVP Development',
        }}
        title="Production-Ready MVPs in 3–14 Days"
        paragraphs={[
          "We cut every non-essential step so your MVP hits production fast. Built on Next.js, TypeScript, and Supabase — real scalable architecture, not throwaway prototypes. You see builds daily and own 100% of the code from day one.",
        ]}
        features={[
          ['Next.js + TypeScript frontend', 'PostgreSQL / Supabase database', 'Node.js REST API backend', 'Auth, payments, email built-in'],
          ['Daily build previews', 'Production-grade code quality', 'Full git history handed over', 'Deployable on Day 1'],
        ]}
        deliverables={[
          'Deployed production application (Vercel or your infra)',
          'Full source code — 100% ownership, no lock-in',
          'Admin dashboard or CMS (if required)',
          'Environment setup guide + deployment docs',
          'Post-launch support window (7 days included)',
        ]}
        ctaHref="/contact"
        ctaText="Start Your MVP"
        graphic={<DashboardSVG />}
      />

      {/* ── 2b. UI/UX Design ── */}
      <ServiceSection
        id="design"
        reverse
        label={{
          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
          text: 'UI/UX Design',
        }}
        title="Interfaces That Convert — Designed Before We Code"
        paragraphs={[
          "Every project starts with wireframes and a clickable Figma prototype. You see exactly how the product works before development begins. Mobile-first, conversion-optimised, and delivered with a design system so your product stays consistent as it scales.",
        ]}
        features={[
          ['Wireframes for all key screens', 'Interactive Figma prototype', 'Mobile-first responsive layouts', 'User flow diagrams'],
          ['Design system (colours + type)', 'Component library in Figma', 'Accessibility (WCAG AA)', 'Handoff-ready specs'],
        ]}
        deliverables={[
          'Figma file with all screens — desktop + mobile',
          'Clickable prototype for user testing or investor demos',
          'Design system: colour tokens, type scale, component set',
          'Annotated handoff specs for developers',
          'Export-ready assets (SVG, PNG, WebP)',
        ]}
        ctaHref="/contact"
        ctaText="Get a Design Quote"
        graphic={<WireframeSVG />}
      />

      {/* ── 2c. Full-Stack Development ── */}
      <ServiceSection
        id="fullstack"
        label={{
          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
          text: 'Full-Stack Development',
        }}
        title="Complex Features, Clean Code, Zero Compromise"
        paragraphs={[
          "React/Next.js frontend, Node.js backend, PostgreSQL database. Stripe, SendGrid, Twilio — whatever integrations you need. We ship with tests, CI/CD, and code reviews from day one so your future team can actually maintain it.",
        ]}
        features={[
          ['React / Next.js frontend', 'Node.js + Express / tRPC API', 'PostgreSQL + Prisma ORM', 'Stripe, Twilio, SendGrid'],
          ['Jest + Playwright testing', 'GitHub Actions CI/CD', 'REST + GraphQL APIs', 'WebSockets / real-time'],
        ]}
        deliverables={[
          'Full application codebase with test coverage',
          'CI/CD pipeline (GitHub Actions) — auto-deploy on push',
          'API documentation (Swagger or Postman collection)',
          'Database schema + migration scripts',
          'Third-party integration setup and documentation',
        ]}
        ctaHref="/contact"
        ctaText="Discuss Your Project"
        graphic={<TerminalSVG />}
      />

      {/* ── 2d. Launch & Scale ── */}
      <ServiceSection
        id="launch"
        reverse
        label={{
          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
          text: 'Launch & Scale',
        }}
        title="Ship to Production — Then Keep It Running"
        paragraphs={[
          "We deploy to Vercel or AWS with CI/CD, staging environments, and rollback strategies. Uptime monitoring, error tracking, SEO, and analytics are configured before handover — not patched in later.",
        ]}
        features={[
          ['Vercel / AWS deployment', 'Staging + production envs', 'Uptime monitoring (Betterstack)', 'Error tracking (Sentry)'],
          ['Core Web Vitals optimisation', 'SEO + structured data', 'Analytics (PostHog / GA4)', '2 weeks post-launch support'],
        ]}
        deliverables={[
          'Production deployment with custom domain + SSL',
          'Staging environment for safe testing pre-release',
          'Uptime + error alerting (email/Slack notifications)',
          'SEO audit report + implementation',
          'Analytics dashboard configured and verified',
          'Post-launch support (2 weeks standard, up to 3 months)',
        ]}
        ctaHref="/contact"
        ctaText="Plan Your Launch"
        graphic={<GlobeSVG />}
      />

      {/* ── 3. Why LaunchFast ── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0A0500', ...invertedDotGrid }}>
        <div className="absolute inset-0 bg-[#0A0500]/70" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            }>Why LaunchFast</SectionLabel>
            <h2 className="text-3xl lg:text-5xl font-semibold text-white mt-4">
              The honest comparison
            </h2>
            <p className="text-neutral-400 text-sm mt-4 max-w-md mx-auto">We're not for everyone. Here's exactly where we win — and where we don't.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                label: 'LaunchFast',
                highlight: true,
                items: [
                  '3–14 days to production',
                  'Daily build previews',
                  'Modern stack: Next.js, Supabase, TypeScript',
                  '100% code ownership — no lock-in',
                  'Fixed-scope, fixed-price packages',
                  'Direct line to the developer building it',
                  'Post-launch support included',
                  'Money-back guarantee',
                ],
              },
              {
                label: 'Traditional Agency',
                highlight: false,
                items: [
                  '3–6 month timelines',
                  'Monthly reports, no daily visibility',
                  'Legacy stacks, sometimes outsourced',
                  'IP and hosting often retained',
                  'Hourly billing — scope creep is expensive',
                  'Account managers, not builders',
                  'Support sold separately (retainer)',
                  'No guarantee — "best efforts"',
                ],
              },
              {
                label: 'Freelancer',
                highlight: false,
                items: [
                  'Variable timeline — depends on availability',
                  'Inconsistent communication',
                  'Skill gaps (design OR backend, rarely both)',
                  'Code ownership is fine, but bus-factor = 1',
                  'Hourly or loose fixed-price',
                  'Direct, but single point of failure',
                  'Disappears after handoff',
                  'No formal guarantee',
                ],
              },
            ].map((col, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-6 ${col.highlight
                  ? 'border-orange-500/40 bg-[#0D0A00]'
                  : 'border-[rgba(249,115,22,0.1)] bg-[#0A0A0A]'}`}>
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 text-xs font-mono font-bold tracking-widest uppercase ${col.highlight ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30' : 'bg-neutral-900 text-neutral-500 border border-neutral-800'}`}>
                  {col.highlight && <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"/>}
                  {col.label}
                </div>
                <ul className="space-y-2.5">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <span className={col.highlight ? 'text-orange-500' : 'text-neutral-600'}>
                        {col.highlight ? '✓' : '–'}
                      </span>
                      <span className={col.highlight ? 'text-neutral-300' : 'text-neutral-500'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Tech Stack ── */}
      <section className="py-24 bg-black relative overflow-hidden" style={dotGrid}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-4">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            }>Tech Stack</SectionLabel>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            className="text-3xl lg:text-4xl font-semibold text-white text-center mt-4 mb-3">
            Best tools for the job
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-neutral-400 text-sm text-center max-w-md mx-auto mb-14">
            No legacy frameworks. No bloat. We pick the stack that ships fast and scales further.
          </motion.p>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Next.js', color: '#fff' },
              { name: 'React', color: '#60a5fa' },
              { name: 'TypeScript', color: '#60a5fa' },
              { name: 'Node.js', color: '#22c55e' },
              { name: 'PostgreSQL', color: '#60a5fa' },
              { name: 'Supabase', color: '#22c55e' },
              { name: 'Stripe', color: '#a78bfa' },
              { name: 'Vercel', color: '#fff' },
              { name: 'Tailwind CSS', color: '#60a5fa' },
              { name: 'Prisma', color: '#a78bfa' },
              { name: 'Redis', color: '#ef4444' },
              { name: 'AWS', color: '#f59e0b' },
            ].map((tech, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                whileHover={{ borderColor: 'rgba(249,115,22,0.4)', y: -2 }}
                className="rounded-xl border border-[rgba(249,115,22,0.1)] bg-[#0A0A0A] p-4 flex flex-col items-center gap-2 transition-colors cursor-default">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${tech.color}12` }}>
                  <span className="text-[10px] font-bold font-mono" style={{ color: tech.color }}>
                    {tech.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-[11px] text-neutral-500 text-center leading-tight">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <CTA />
    </main>
  )
}
