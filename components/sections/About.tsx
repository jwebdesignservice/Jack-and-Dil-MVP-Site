'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

const tags = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Stripe', 'Vercel', 'Tailwind', 'Prisma']

// Commit graph data — 7 weeks × 7 days
const weeks = Array.from({ length: 14 }, (_, w) =>
  Array.from({ length: 7 }, (_, d) => {
    const seed = (w * 7 + d) * 13 + 7
    const v = (seed * 1103515245 + 12345) & 0x7fffffff
    return v % 4 // 0=none, 1=low, 2=med, 3=high
  })
)

const commitColors = ['bg-neutral-800/60', 'bg-orange-500/25', 'bg-orange-500/55', 'bg-orange-500']


export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0500] relative overflow-hidden">
      {/* Top/bottom section fades */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#060606] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
      {/* Orange radial bloom */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }} />
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}>About Us</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-4">Who We Are</h2>
          <p className="text-neutral-500 mt-4 max-w-md mx-auto text-sm">Two senior engineers obsessed with shipping. We build fast, we build right.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[rgba(249,115,22,0.2)] bg-[#0A0A0A] overflow-hidden"
          style={{ boxShadow: '0 0 40px rgba(249,115,22,0.08)' }}>
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(249,115,22,0.1)]">

            {/* Left: Team graphic — no outer card, just inner content */}
            <div>
              {/* Card top bar */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-[rgba(249,115,22,0.1)] bg-[#0D0D0D]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"/>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60"/>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"/>
                <span className="ml-3 text-[11px] font-mono text-neutral-600">jwebdesign / FastLaunch</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"/>
                  <span className="text-[10px] font-mono text-orange-400">active</span>
                </div>
              </div>
              {/* Team members */}
              <div className="px-5 py-4 border-b border-[rgba(249,115,22,0.08)] flex items-center gap-4">
                {[
                  { initials: 'JW', name: 'Jack W.', role: 'Full-Stack', color: 'bg-orange-500' },
                  { initials: 'DM', name: 'Dil M.', role: 'Full-Stack', color: 'bg-sky-500' },
                ].map((dev, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full ${dev.color} flex items-center justify-center text-white text-xs font-bold`}>{dev.initials}</div>
                    <div>
                      <div className="text-white text-xs font-medium">{dev.name}</div>
                      <div className="text-neutral-600 text-[10px]">{dev.role}</div>
                    </div>
                    <div className="ml-1 w-1.5 h-1.5 rounded-full bg-green-400"/>
                  </div>
                ))}
                <div className="ml-auto text-[10px] font-mono text-neutral-600">10+ yrs combined</div>
              </div>
              {/* Commit graph */}
              <div className="px-5 py-4 border-b border-[rgba(249,115,22,0.08)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase">Commit Activity</span>
                  <span className="text-[10px] font-mono text-orange-400">342 contributions</span>
                </div>
                <div className="overflow-x-auto max-w-full pb-1">
                <div className="flex gap-1">
                  {weeks.map((week, w) => (
                    <div key={w} className="flex flex-col gap-1">
                      {week.map((level, d) => (
                        <div key={d} className={`w-3.5 h-3.5 rounded-sm ${commitColors[level]}`}/>
                      ))}
                    </div>
                  ))}
                </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[9px] text-neutral-700">Less</span>
                  {commitColors.map((c, i) => <div key={i} className={`w-2.5 h-2.5 rounded-sm ${c}`}/>)}
                  <span className="text-[9px] text-neutral-700">More</span>
                </div>
              </div>
              {/* Recent commits */}
              <div className="px-5 py-4 border-b border-[rgba(249,115,22,0.08)] space-y-3">
                <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase">Recent Commits</span>
                {[
                  { hash: 'a3f9c2', msg: 'feat: add stripe payment flow', time: '2h ago', author: 'JW' },
                  { hash: 'b71e4d', msg: 'fix: auth token refresh logic', time: '5h ago', author: 'DM' },
                  { hash: 'c9a2f1', msg: 'perf: optimise DB query plan', time: '1d ago', author: 'JW' },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-orange-500/50 w-12 flex-shrink-0">{c.hash}</span>
                    <span className="text-[11px] text-neutral-400 flex-1 truncate">{c.msg}</span>
                    <span className="text-[10px] font-mono text-neutral-700 flex-shrink-0">{c.time}</span>
                    <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[9px] font-bold ${c.author === 'JW' ? 'bg-orange-500' : 'bg-sky-500'}`}>{c.author}</div>
                  </div>
                ))}
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[rgba(249,115,22,0.08)] divide-y sm:divide-y-0">
                {[
                  { label: 'MVPs Shipped', value: '50+' },
                  { label: 'Avg Delivery', value: '9 days' },
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Satisfaction', value: '100%' },
                ].map((s, i) => (
                  <div key={i} className="px-4 py-4 text-center">
                    <div className="text-sm font-semibold text-orange-400">{s.value}</div>
                    <div className="text-[10px] text-neutral-700 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Text */}
            <div className="p-8 lg:p-10 flex flex-col justify-center bg-[#0D0D0D]">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-5">
                Built by Developers,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">For Founders</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6 text-sm">
                We&apos;re a team of senior engineers obsessed with speed. We&apos;ve built MVPs for founders across fintech, SaaS, e-commerce, and AI. Our process cuts through the noise so you can validate your idea, get to market fast, and start learning from real users.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map(tag => (
                  <span key={tag} className="bg-[#111] border border-[rgba(249,115,22,0.15)] text-neutral-400 text-xs px-3 py-1.5 rounded-full font-medium hover:border-orange-500/40 hover:text-orange-400 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <Button href="/contact" variant="outline">Work With Us</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

