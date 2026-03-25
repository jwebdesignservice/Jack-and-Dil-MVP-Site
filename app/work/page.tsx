'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import CTA from '@/components/sections/CTA'

const projects = [
  {
    slug: 'eliminent',
    title: 'Eliminent',
    desc: 'An AI-powered social deduction game where 4-12 players must identify the AI hidden among them. Real-time multiplayer, timed discussion rounds, and strategic voting — built to blur the line between human and machine.',
    image: '/Images/work/eliminent.png',
    hoverImage: '/Images/work/eliminent-tablet.png',
    tags: ['Gaming', 'AI', 'Multiplayer'],
    services: ['Full-Stack', 'Real-Time', 'UI/UX Design'],
    delivery: '8 days',
    year: '2026',
  },
  {
    slug: 'metalex-terminal',
    title: 'Metalex Terminal',
    desc: 'A professional-grade precious metals trading terminal with live spot prices, AI signals, futures curves, and real-time market depth — built for serious metals traders.',
    image: '/Images/work/metalex-phone.png',
    hoverImage: '/Images/work/metalex.png',
    tags: ['FinTech', 'Trading', 'Real-Time'],
    services: ['Full-Stack', 'Real-Time Data', 'UI/UX Design'],
    delivery: '14 days',
    year: '2026',
  },
  {
    slug: 'desert-falcons',
    title: 'Desert Falcons Collective',
    desc: 'A premium automotive community platform for luxury car enthusiasts across the Middle East. Built with a focus on sleek visuals and member engagement.',
    image: '/Images/work/desertfalcons.png',
    hoverImage: '/Images/work/desertfalcons-phone.png',
    tags: ['Automotive', 'Community', 'Luxury'],
    services: ['UI/UX Design', 'Next.js', 'Full-Stack'],
    delivery: '7 days',
    year: '2026',
  },
  {
    slug: 'memory-market',
    title: 'Memory Market',
    desc: 'A Web3 prediction and memory trading platform. Real-time data feeds, wallet integration, and a custom trading interface built for speed.',
    image: '/Images/work/memorymarket.png',
    hoverImage: '/Images/work/memorymarket-phone.png',
    tags: ['Web3', 'DeFi', 'Trading'],
    services: ['Full-Stack', 'API Integration', 'Real-Time'],
    delivery: '9 days',
    year: '2025',
  },
  {
    slug: 'aramas-property',
    title: 'Aramas Property',
    desc: 'A modern real estate platform with property listings, advanced search filters, and agent dashboard. Designed for the UK rental market.',
    image: '/Images/work/aramas.png',
    hoverImage: '/Images/work/aramas-phone.png',
    tags: ['Real Estate', 'SaaS', 'Marketplace'],
    services: ['UI/UX Design', 'Next.js', 'Supabase'],
    delivery: '6 days',
    year: '2025',
  },
  {
    slug: 'insights-dashboard',
    title: 'Insights Dashboard',
    desc: 'An analytics SaaS dashboard for tracking business KPIs, revenue metrics, and team performance. Clean data visualisation with real-time updates.',
    image: '/Images/work/insights.png',
    tags: ['Analytics', 'SaaS', 'Dashboard'],
    services: ['UI/UX Design', 'React', 'PostgreSQL'],
    delivery: '5 days',
    year: '2025',
  },
]

export default function WorkPage() {
  return (
    <main className="bg-black">
      {/* Dot grid */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}/>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-40 pb-14 sm:pb-20">
        <div className="absolute inset-0 bg-black/75"/>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}/>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center mb-5">
            <SectionLabel icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
              </svg>
            }>Case Studies</SectionLabel>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-5 leading-tight">
            Work That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Speaks</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
            className="text-neutral-400 text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Real products we&apos;ve shipped for real founders. Every project delivered on time, on budget, production-ready.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">Start Your Project</Button>
            <Button href="/services" variant="outline">View Services</Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative pb-24">
        <div className="absolute inset-0 bg-black/80"/>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Link key={i} href={`/work/${project.slug}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] bg-[#0A0A0A] hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: 'none' }}
                whileHover={{ boxShadow: '0 12px 40px rgba(249,115,22,0.12), 0 0 0 1px rgba(249,115,22,0.25)' }}>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className={`object-cover transition-opacity duration-500 ${project.hoverImage ? 'group-hover:opacity-0' : ''}`}/>
                  {/* Hover image (Aramas phone) */}
                  {project.hoverImage && (
                    <Image src={project.hoverImage} alt={`${project.title} mobile`} fill className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/20 to-transparent pointer-events-none"/>
                  {/* Service tags on image */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.services.map(s => (
                      <span key={s} className="text-[10px] font-mono text-white/80 bg-white/10 backdrop-blur-sm border border-white/10 rounded px-2.5 py-1 tracking-wide">
                        {s}
                      </span>
                    ))}
                  </div>
                  {/* Corner accents */}
                  <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-orange-500/50"/>
                  <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-orange-500/50"/>
                </div>

                {/* Text content — connected below image */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-neutral-600">
                      <span>{project.delivery}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700"/>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded border border-[rgba(249,115,22,0.15)] text-neutral-500 bg-[#111] cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-orange-500 text-xs font-medium flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                      View More <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  )
}


