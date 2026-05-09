'use client'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Alex Reid',
    role: 'Founder, Eliminent',
    quote: "We had a concept that lived entirely in our heads. FastLaunch turned it into a real, playable game with thousands of concurrent users in 8 days. The AI agent is genuinely unsettling. Exactly what we wanted.",
    initials: 'AR',
    color: 'bg-orange-600',
  },
  {
    name: 'James Hartwell',
    role: 'Head of Trading, Metalex',
    quote: "We've tried every metals terminal out there. Metalex is the first one that gives us Bloomberg-level data without the Bloomberg price tag, and it works perfectly on mobile. FastLaunch built it in 2 weeks.",
    initials: 'JH',
    color: 'bg-sky-700',
  },
  {
    name: 'Khalid Al-Rashidi',
    role: 'Founder, Desert Falcons Collective',
    quote: "FastLaunch delivered something we didn't think was possible in this timeframe. The platform looks like it cost 10x what we paid. Our members were blown away on launch day.",
    initials: 'KA',
    color: 'bg-violet-600',
  },
  {
    name: 'Zara Okonkwo',
    role: 'Co-Founder, Memory Market',
    quote: "We had a concept that most devs told us couldn't ship in under a month. FastLaunch had us live in 9 days with a product that actually works. The on-chain integration is rock solid.",
    initials: 'ZO',
    color: 'bg-emerald-700',
  },
  {
    name: 'Ahmed Al-Mansoori',
    role: 'Director, Aramas Property',
    quote: "We went from a static brochure site to a full property marketplace in 6 days. The search functionality alone has already converted 3 international buyers in the first week.",
    initials: 'AA',
    color: 'bg-rose-600',
  },
  {
    name: 'Compliance Lead',
    role: 'AMS Tool',
    quote: "We went from doing this manually to having a full AI-powered compliance tool in 10 days. The risk scoring alone saves our analysts hours every week, and the audit trail means we can demonstrate compliance instantly.",
    initials: 'CL',
    color: 'bg-amber-700',
  },
]

function CornerCard({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div className={`glass-card relative p-8 transition-all duration-300 ${active ? '!border-orange-500/35' : ''}`}
      style={active ? { boxShadow: '0 16px 50px -16px rgba(249,115,22,0.30), inset 0 1px 0 0 rgba(255,255,255,0.08)' } : undefined}>
      {/* Corner accents — 4px outside the card corners */}
      <span className="absolute -top-[4px] -left-[4px] w-5 h-5 border-t-2 border-l-2 border-orange-500 rounded-tl-sm pointer-events-none"/>
      <span className="absolute -top-[4px] -right-[4px] w-5 h-5 border-t-2 border-r-2 border-orange-500 rounded-tr-sm pointer-events-none"/>
      <span className="absolute -bottom-[4px] -left-[4px] w-5 h-5 border-b-2 border-l-2 border-orange-500 rounded-bl-sm pointer-events-none"/>
      <span className="absolute -bottom-[4px] -right-[4px] w-5 h-5 border-b-2 border-r-2 border-orange-500 rounded-br-sm pointer-events-none"/>
      {children}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(2)

  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(i => (i + 1) % testimonials.length)

  const getPos = (i: number) => {
    const diff = (i - active + testimonials.length) % testimonials.length
    if (diff === 0) return 'center'
    if (diff === 1) return 'right1'
    if (diff === 2) return 'right2'
    if (diff === testimonials.length - 1) return 'left1'
    if (diff === testimonials.length - 2) return 'left2'
    return 'hidden'
  }

  return (
    <section id="testimonials" className="py-10 md:py-16 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}>Social Proof</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-4">Founders Who Shipped Fast</h2>
          <p className="text-neutral-500 mt-4 max-w-md mx-auto text-sm">Real results from founders who trusted us to build their product.</p>
        </motion.div>

        {/* Avatar row */}
        <div className="flex items-center justify-center gap-3 mb-14 flex-wrap">
          {testimonials.map((t, i) => (
            <button key={i} onClick={() => setActive(i)} type="button"
              aria-label={`Show testimonial from ${t.initials}`}
              aria-pressed={active === i}
              className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-200 ${active === i ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-[#080808] scale-110' : 'opacity-40 hover:opacity-70'}`}>
              <div className={`w-full h-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}>{t.initials}</div>
            </button>
          ))}
        </div>

        {/* Cards carousel — mobile: single full-width card */}
        <div className="md:hidden px-2 mb-0">
          <CornerCard active={true}>
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => <span key={j} className="text-orange-500 text-sm">★</span>)}
            </div>
            <p className="leading-relaxed mb-5 text-neutral-200 text-sm">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex-shrink-0 ring-2 ring-orange-500/40 ${testimonials[active].color} flex items-center justify-center text-white text-sm font-bold`}>
                {testimonials[active].initials}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{testimonials[active].name}</div>
                <div className="text-neutral-500 text-xs">{testimonials[active].role}</div>
              </div>
            </div>
          </CornerCard>
        </div>

        {/* Cards carousel — desktop: 5 visible */}
        <div className="hidden md:block">
        <div className="relative max-w-full overflow-hidden min-h-[320px] md:h-[320px] flex items-center justify-center">
          {testimonials.map((t, i) => {
            const pos = getPos(i)
            const isCenter = pos === 'center'
            const isL1 = pos === 'left1'
            const isL2 = pos === 'left2'
            const isR1 = pos === 'right1'
            const isR2 = pos === 'right2'
            const isHidden = pos === 'hidden'

            const xMap: Record<string,string> = { center:'0%', left1:'-52%', left2:'-100%', right1:'52%', right2:'100%' }
            const opacityMap: Record<string,number> = { center:1, left1:0.5, left2:0.25, right1:0.5, right2:0.25 }
            const scaleMap: Record<string,number> = { center:1, left1:0.84, left2:0.72, right1:0.84, right2:0.72 }
            const zMap: Record<string,number> = { center:30, left1:20, left2:10, right1:20, right2:10 }

            return (
              <motion.div key={i}
                className="absolute cursor-pointer select-none w-[90vw] max-w-[480px]"
                style={{ zIndex: isHidden ? 0 : zMap[pos] }}
                animate={{
                  x: isHidden ? 0 : xMap[pos],
                  opacity: isHidden ? 0 : opacityMap[pos],
                  scale: isHidden ? 0.6 : scaleMap[pos],
                  filter: isCenter ? 'blur(0px)' : `blur(${isL1||isR1?'1px':'2px'})`,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                onClick={() => !isCenter && setActive(i)}>
                <CornerCard active={isCenter}>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-orange-500 text-sm">★</span>)}
                  </div>
                  <p className={`leading-relaxed mb-5 ${isCenter ? 'text-neutral-200 text-sm' : 'text-neutral-500 text-xs'}`}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 ring-2 ring-orange-500/40 ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">{t.name}</div>
                      <div className="text-neutral-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </CornerCard>
              </motion.div>
            )
          })}
        </div>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-center gap-5 mt-14" role="group" aria-label="Testimonial carousel controls">
          <button onClick={prev} type="button" aria-label="Previous testimonial"
            className="glass-pill w-11 h-11 rounded-full flex items-center justify-center text-neutral-400 hover:!border-orange-500/60 hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="flex gap-2 items-center" role="tablist" aria-label="Select testimonial">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} type="button" role="tab"
                aria-selected={active === i}
                aria-label={`Go to testimonial ${i + 1}`}
                className="inline-flex items-center justify-center h-6 -my-2 px-1">
                <span aria-hidden className={`block h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-7 bg-orange-500' : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'}`} />
              </button>
            ))}
          </div>
          <button onClick={next} type="button" aria-label="Next testimonial"
            className="glass-pill w-11 h-11 rounded-full flex items-center justify-center text-neutral-400 hover:!border-orange-500/60 hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}




