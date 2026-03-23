'use client'
import { motion } from 'framer-motion'
import GlowCard from '@/components/ui/GlowCard'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'MVP Development',
    description: 'Full-stack MVP built and deployed in as little as 3 days. From idea to production with modern tech.',
    features: ['Next.js + TypeScript', 'Database & API', 'Auth & Payments', 'Deployed to Vercel'],
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Beautiful, conversion-focused interfaces designed with your users in mind.',
    features: ['Figma Prototypes', 'Mobile-first', 'Design System', 'User Testing'],
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
        <circle cx="8" cy="10" r="2" strokeWidth={1.5} />
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    description: 'End-to-end development with scalable architecture. Your product, built to last.',
    features: ['React / Next.js', 'Node.js / PostgreSQL', 'REST / GraphQL APIs', 'Cloud Infra'],
    badge: 'POPULAR',
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch & Scale',
    description: 'Go live with confidence. We handle deployment, monitoring and post-launch support.',
    features: ['CI/CD Pipeline', 'Performance Monitoring', 'SEO Optimization', 'Ongoing Support'],
    icon: (
      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      {/* Corner brackets */}
      <svg className="absolute top-8 left-8 w-12 h-12 text-orange-500/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4H4v2M4 18v2h2M18 4h2v2M20 18v2h-2" />
      </svg>
      <svg className="absolute bottom-8 right-8 w-12 h-12 text-orange-500/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4H4v2M4 18v2h2M18 4h2v2M20 18v2h-2" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">What We Build</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <GlowCard className="p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      {svc.icon}
                    </div>
                    <span className="font-mono text-orange-500/50 text-3xl font-bold">{svc.num}</span>
                  </div>
                  {svc.badge && (
                    <span className="bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                      {svc.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">{svc.description}</p>
                <ul className="space-y-2 mb-6">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-neutral-400 text-sm">
                      <span className="text-orange-500">→</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors group">
                  Get Started <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
