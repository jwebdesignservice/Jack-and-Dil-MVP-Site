'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

const works = [
  { src: '/Images/work/speedread-laptop.webp', hoverSrc: '/Images/work/speedread-phone.webp', label: 'Speed Read', tag: 'EdTech / Productivity', href: '/work/speed-read' },
  { src: '/Images/work/eliminent-tablet.webp', hoverSrc: '/Images/work/eliminent.webp', label: 'Eliminent', tag: 'AI / Gaming', href: '/work/eliminent' },
  { src: '/Images/work/metalex-phone.webp', hoverSrc: '/Images/work/metalex.webp', label: 'Metalex Terminal', tag: 'FinTech / Trading', href: '/work/metalex-terminal' },
  { src: '/Images/work/insights.webp', label: 'Insights Dashboard', tag: 'Analytics SaaS', href: '/work/insights-dashboard' },
  { src: '/Images/work/memorymarket.webp', hoverSrc: '/Images/work/memorymarket-phone.webp', label: 'Memory Market', tag: 'Web3 / DeFi', href: '/work/memory-market' },
  { src: '/Images/work/ams-tablet.webp', hoverSrc: '/Images/work/ams-laptop.webp', label: 'AMS Tool', tag: 'RegTech / Compliance', href: '/work/ams-tool' },
  { src: '/Images/work/desertfalcons.webp', hoverSrc: '/Images/work/desertfalcons-phone.webp', label: 'Desert Falcons Collective', tag: 'Automotive / Luxury', href: '/work/desert-falcons' },
  { src: '/Images/work/aramas.webp', hoverSrc: '/Images/work/aramas-phone.webp', label: 'Aramas Property', tag: 'Real Estate', href: '/work/aramas-property' },
]

// Duplicates for seamless desktop marquee
const marqueeWorks = [...works, ...works]

export default function WorkMarquee() {
  const [isMobile, setIsMobile] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth * 0.9 + 16 // 90vw + gap
      sliderRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' })
      setCurrentSlide(index)
    }
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth * 0.9 + 16
      const newIndex = Math.round(sliderRef.current.scrollLeft / slideWidth)
      setCurrentSlide(newIndex)
    }
  }

  // Mobile: Swipeable slider
  if (isMobile) {
    return (
      <section className="py-8 overflow-hidden relative bg-black" style={{ zIndex: 10000 }}>
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}/>
        
        {/* Slider container */}
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-[5vw]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {works.map((item, i) => (
            <Link 
              key={i} 
              href={item.href} 
              className="relative flex-shrink-0 w-[90vw] aspect-[693/429] rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] snap-center block"
            >
              <Image src={item.src} alt={item.label} fill sizes="90vw" className="object-cover"/>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] font-mono text-orange-400/80 tracking-widest uppercase mb-1">{item.tag}</div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
              </div>
              {/* Orange corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4">
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/60"/>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Featured work slides">
          {works.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              type="button"
              role="tab"
              aria-selected={currentSlide === i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === i ? 'bg-orange-500 w-4' : 'bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </section>
    )
  }

  // Desktop: Original marquee
  return (
    <section className="py-8 overflow-hidden relative bg-black" style={{ zIndex: 10000 }}>
      {/* Dot grid — continuous from hero/services */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}/>
      {/* Edge fades — pure black fading to transparent */}
      <div className="absolute left-0 top-0 bottom-0 w-48 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, black 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.5) 60%, transparent 100%)' }}/>
      <div className="absolute right-0 top-0 bottom-0 w-48 z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, black 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.5) 60%, transparent 100%)' }}/>

      {/* Scrolling row */}
      <div className="flex group relative z-10">
        <div className="flex gap-6 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0">
          {marqueeWorks.map((item, i) => (
            <Link key={`a-${i}`} href={item.href} className="relative flex-shrink-0 w-[500px] md:w-[693px] h-[310px] md:h-[429px] rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] group/card block">
              <Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 500px, 693px" className={`object-cover transition-opacity duration-500 ${item.hoverSrc ? 'group-hover/card:opacity-0' : ''}`}/>
              {item.hoverSrc && <Image src={item.hoverSrc} alt={`${item.label} mobile`} fill sizes="(max-width: 768px) 500px, 693px" className="object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"/>}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] font-mono text-orange-400/80 tracking-widest uppercase mb-1">{item.tag}</div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
              </div>
              {/* Orange corner accent */}
              <div className="absolute top-3 right-3 w-4 h-4">
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/60"/>
              </div>
            </Link>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-6 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0">
          {marqueeWorks.map((item, i) => (
            <Link key={`b-${i}`} href={item.href} className="relative flex-shrink-0 w-[500px] md:w-[693px] h-[310px] md:h-[429px] rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] group/card block">
              <Image src={item.src} alt={item.label} fill sizes="(max-width: 768px) 500px, 693px" className={`object-cover transition-opacity duration-500 ${item.hoverSrc ? 'group-hover/card:opacity-0' : ''}`}/>
              {item.hoverSrc && <Image src={item.hoverSrc} alt={`${item.label} mobile`} fill sizes="(max-width: 768px) 500px, 693px" className="object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"/>}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] font-mono text-orange-400/80 tracking-widest uppercase mb-1">{item.tag}</div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
              </div>
              <div className="absolute top-3 right-3 w-4 h-4">
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/60"/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
