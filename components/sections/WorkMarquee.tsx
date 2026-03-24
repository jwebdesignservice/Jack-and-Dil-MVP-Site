'use client'
import Image from 'next/image'

const works = [
  { src: '/Images/work/insights.png', label: 'Insights Dashboard', tag: 'Analytics SaaS' },
  { src: '/Images/work/memorymarket.png', label: 'Memory Market', tag: 'Web3 / DeFi' },
  { src: '/Images/work/aramas.png', label: 'Aramas Property', tag: 'Real Estate' },
  { src: '/Images/work/desertfalcons.png', label: 'Desert Falcons Collective', tag: 'Automotive / Luxury' },
  // duplicates for seamless loop
  { src: '/Images/work/insights.png', label: 'Insights Dashboard', tag: 'Analytics SaaS' },
  { src: '/Images/work/memorymarket.png', label: 'Memory Market', tag: 'Web3 / DeFi' },
  { src: '/Images/work/aramas.png', label: 'Aramas Property', tag: 'Real Estate' },
  { src: '/Images/work/desertfalcons.png', label: 'Desert Falcons Collective', tag: 'Automotive / Luxury' },
]

export default function WorkMarquee() {
  return (
    <section className="py-8 overflow-hidden relative" style={{ zIndex: 10000 }}>
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"/>
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"/>

      {/* Scrolling row */}
      <div className="flex group relative z-10">
        <div className="flex gap-6 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0">
          {works.map((item, i) => (
            <div key={`a-${i}`} className="relative flex-shrink-0 w-[693px] h-[429px] rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] group/card">
              <Image src={item.src} alt={item.label} fill className="object-cover transition-transform duration-500 group-hover/card:scale-105"/>
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
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-6 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0">
          {works.map((item, i) => (
            <div key={`b-${i}`} className="relative flex-shrink-0 w-[693px] h-[429px] rounded-lg overflow-hidden border border-[rgba(249,115,22,0.12)] group/card">
              <Image src={item.src} alt={item.label} fill className="object-cover transition-transform duration-500 group-hover/card:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[10px] font-mono text-orange-400/80 tracking-widest uppercase mb-1">{item.tag}</div>
                <div className="text-white font-semibold text-sm">{item.label}</div>
              </div>
              <div className="absolute top-3 right-3 w-4 h-4">
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-orange-500/60"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




