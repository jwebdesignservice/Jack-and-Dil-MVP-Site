'use client'
import { motion } from 'framer-motion'
import CountUp from '@/components/ui/CountUp'
import Link from 'next/link'

const tags = ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase', 'Stripe', 'Vercel', 'Tailwind', 'Prisma']

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Hex shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute border border-orange-500"
            style={{ width: `${100 + i * 40}px`, height: `${100 + i * 40}px`, left: `${(i % 4) * 25}%`, top: `${Math.floor(i / 4) * 50}%`, transform: 'rotate(45deg)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats hub */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-2 border-orange-500/40 flex flex-col items-center justify-center"
                  style={{ boxShadow: '0 0 40px rgba(249,115,22,0.2)' }}>
                  <div className="text-3xl font-bold text-orange-500">
                    <CountUp end={50} suffix="+" />
                  </div>
                  <div className="text-xs text-neutral-500">MVPs Built</div>
                </div>
              </div>
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-orange-500/10" />
              {/* Satellite stats */}
              {[
                { label: 'Days Avg', value: '7', pos: 'top-0 left-1/2 -translate-x-1/2 -translate-y-2' },
                { label: 'Uptime', value: '99%', pos: 'top-1/2 right-0 translate-x-2 -translate-y-1/2' },
                { label: 'Clients', value: '40+', pos: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-2' },
                { label: 'Rating', value: '5★', pos: 'top-1/2 left-0 -translate-x-2 -translate-y-1/2' },
              ].map((s, i) => (
                <div key={i} className={`absolute ${s.pos} bg-[#111] border border-orange-500/20 rounded-xl px-3 py-2 text-center`}>
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
                  <div className="text-xs text-neutral-600">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Who We Are</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Built by Developers,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                For Founders
              </span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-8">
              We&apos;re a team of senior engineers obsessed with speed. We&apos;ve built MVPs for founders across fintech, SaaS, e-commerce, and AI. Our process cuts through the noise so you can validate your idea, get to market fast, and start learning from real users.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <span key={tag} className="bg-[#111] border border-[rgba(249,115,22,0.15)] text-neutral-400 text-xs px-3 py-1.5 rounded-full font-medium hover:border-orange-500/40 hover:text-orange-400 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
              Work With Us →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


