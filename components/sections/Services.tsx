'use client'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const services = [
  {
    num: '01',
    title: 'MVP Development',
    description: 'Zero to production in as little as 3 days. We scope tight, build fast, and ship clean — no technical debt from day one.',
    features: ['Next.js + TypeScript', 'Database & API layer', 'Auth & Payments', 'Deployed to Vercel'],
    detail: 'avg. 7 days to ship',
    color: 'from-orange-500/20 to-transparent',
    borderHover: 'hover:border-orange-500/50',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="12" fill="#F97316" fillOpacity="0.1"/>
        <path d="M24 10 L30 22 H24 L24 38 L18 26 H24 L24 10Z" fill="#F97316"/>
        <circle cx="36" cy="14" r="3" fill="#F97316" fillOpacity="0.5"/>
        <circle cx="12" cy="34" r="3" fill="#F97316" fillOpacity="0.5"/>
        <line x1="30" y1="22" x2="36" y2="14" stroke="#F97316" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="18" y1="26" x2="12" y2="34" stroke="#F97316" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="3 2"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Interfaces that convert. We design with real users in mind — clean flows, clear hierarchy, and pixel-perfect execution.',
    features: ['Figma prototypes', 'Mobile-first responsive', 'Design system setup', 'Interaction design'],
    detail: 'design + dev in sync',
    color: 'from-sky-500/10 to-transparent',
    borderHover: 'hover:border-sky-500/40',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="12" fill="#F97316" fillOpacity="0.1"/>
        <rect x="10" y="10" width="28" height="20" rx="2" stroke="#F97316" strokeWidth="1.5" fill="none"/>
        <rect x="14" y="14" width="8" height="6" rx="1" fill="#F97316" fillOpacity="0.4"/>
        <rect x="26" y="14" width="8" height="2" rx="0.5" fill="#F97316" fillOpacity="0.3"/>
        <rect x="26" y="18" width="5" height="2" rx="0.5" fill="#F97316" fillOpacity="0.2"/>
        <line x1="14" y1="34" x2="34" y2="34" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1.5"/>
        <circle cx="24" cy="37" r="2" fill="#F97316" fillOpacity="0.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    description: 'End-to-end engineering. Scalable architecture, clean APIs, real-time features — production-grade code that grows with you.',
    features: ['React / Next.js frontend', 'Node.js + PostgreSQL', 'REST & GraphQL APIs', 'Cloud infrastructure'],
    detail: 'most requested',
    badge: 'POPULAR',
    color: 'from-orange-500/20 to-transparent',
    borderHover: 'hover:border-orange-500/50',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="12" fill="#F97316" fillOpacity="0.15"/>
        <path d="M16 20 L10 24 L16 28" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 20 L38 24 L32 28" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 16 L20 32" stroke="#F97316" strokeWidth="2" strokeLinecap="round" fillOpacity="0.6"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch & Scale',
    description: 'Go live with confidence. CI/CD, monitoring, SEO — everything set up so you can focus on growth, not infrastructure.',
    features: ['CI/CD pipeline', 'Uptime monitoring', 'SEO + Core Web Vitals', '90-day support included'],
    detail: 'from deploy to growth',
    color: 'from-emerald-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/30',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect width="48" height="48" rx="12" fill="#F97316" fillOpacity="0.1"/>
        <path d="M12 32 L18 24 L24 28 L30 18 L36 22" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="36" cy="22" r="3" fill="#F97316" fillOpacity="0.8"/>
        <line x1="12" y1="36" x2="36" y2="36" stroke="#F97316" strokeOpacity="0.2" strokeWidth="1"/>
      </svg>
    ),
  },
]

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="services" className="py-28 bg-black relative overflow-hidden">
      {/* Dot grid — continuing from hero */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Subtle fade to black at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"/>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}>What We Build</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-4">Our Services</h2>
          <p className="text-neutral-500 mt-4 max-w-lg mx-auto text-sm">Everything you need to go from idea to live product. Nothing you don&apos;t.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((svc, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative rounded-2xl border border-[rgba(249,115,22,0.1)] ${svc.borderHover} bg-[#0D0D0D] p-8 transition-all duration-300 overflow-hidden cursor-default`}
              style={{ boxShadow: hovered === i ? '0 0 40px rgba(249,115,22,0.08), inset 0 0 40px rgba(249,115,22,0.03)' : 'none' }}>

              {/* Gradient wash on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Header row */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  {svc.icon}
                  <div>
                    <span className="font-mono text-orange-500/40 text-xs font-bold tracking-widest">{svc.num}</span>
                    {svc.badge && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        <span className="text-orange-500 text-xs font-bold tracking-widest">{svc.badge}</span>
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-600 border border-neutral-800 rounded px-2 py-1 tracking-wide">
                  {svc.detail}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-100 transition-colors">{svc.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">{svc.description}</p>

                {/* Feature list */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-neutral-400 text-xs">
                      <span className="text-orange-500 text-[10px] font-bold">→</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[rgba(249,115,22,0.2)] to-transparent mb-5" />

                <Button href="/contact" variant="outline" className="!py-2 !px-4 !text-xs">Get started</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




