'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const testimonials = [
  { name: 'Sarah Chen', role: 'CEO, Finflow', quote: "LaunchFast delivered our fintech MVP in 11 days. The code quality is exceptional.", initials: 'SC' },
  { name: 'Marcus Wright', role: 'Founder, Shopify App', quote: "From idea to paying customers in under 2 weeks. These guys are unreal.", initials: 'MW' },
  { name: 'Priya Patel', role: 'CTO, Healthtech', quote: "Best engineering team I've worked with. They understood our vision immediately.", initials: 'PP' },
  { name: 'James Liu', role: 'Founder, EdTech', quote: "Launched our platform to 500 users on day one. The product was rock solid.", initials: 'JL' },
  { name: 'Emma Davis', role: 'CEO, AI Startup', quote: "LaunchFast's process is so efficient. 14 days to a production-ready AI product.", initials: 'ED' },
  { name: 'Alex Torres', role: 'Founder, SaaS', quote: "I had tried 3 agencies before. LaunchFast is in a different league entirely.", initials: 'AT' },
]

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-[#0A0A0A] border border-[rgba(249,115,22,0.1)] rounded-xl p-6 mb-4">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => <span key={i} className="text-orange-500 text-sm">★</span>)}
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center text-orange-500 text-xs font-bold">{t.initials}</div>
        <div>
          <div className="text-white text-sm font-semibold">{t.name}</div>
          <div className="text-neutral-600 text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const col1 = testimonials.slice(0, 3)
  const col2 = testimonials.slice(3, 6)

  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Wave shapes */}
      <svg className="absolute top-0 left-0 right-0 w-full opacity-5" viewBox="0 0 1440 100" fill="none">
        <path d="M0 50 Q360 100 720 50 Q1080 0 1440 50 L1440 0 L0 0 Z" fill="#F97316" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Social Proof</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Founders{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Love</span>{' '}
              LaunchFast
            </h2>
            <p className="text-neutral-500 mb-8 leading-relaxed">Don&apos;t take our word for it. Here&apos;s what our clients say about working with us.</p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { val: '50+', label: 'MVPs delivered' },
                { val: '100%', label: 'on-time delivery' },
                { val: '5★', label: 'average rating' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{s.val}</div>
                  <div className="text-neutral-600 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Join our clients →
            </Link>
          </motion.div>

          {/* Right: Two columns */}
          <div className="hidden lg:grid grid-cols-2 gap-4 max-h-[500px] overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#080808] to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080808] to-transparent z-10" />
            {/* Col 1: scrolls up */}
            <motion.div animate={{ y: [0, -300] }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}>
              {[...col1, ...col1].map((t, i) => <TestimonialCard key={i} t={t} />)}
            </motion.div>
            {/* Col 2: scrolls down */}
            <motion.div animate={{ y: [-300, 0] }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}>
              {[...col2, ...col2].map((t, i) => <TestimonialCard key={i} t={t} />)}
            </motion.div>
          </div>

          {/* Mobile: single column */}
          <div className="lg:hidden space-y-4">
            {testimonials.slice(0, 3).map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
