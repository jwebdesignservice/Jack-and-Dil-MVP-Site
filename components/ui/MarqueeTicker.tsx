// Pure-CSS marquee — no useState, no event handlers, no client-only APIs.
// Removing the `'use client'` directive lets this render as a Server
// Component, so its JS doesn't ship to the browser at all.
const TECH_ITEMS = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'Supabase' },
  { name: 'Stripe' },
  { name: 'Vercel' },
  { name: 'Tailwind CSS' },
  { name: 'Prisma' },
  { name: 'Redis' },
  { name: 'AWS' },
  { name: 'GraphQL' },
  { name: 'Docker' },
  { name: 'Figma' },
]

function MarqueeItem({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-3 mx-8 text-neutral-400 font-medium text-sm whitespace-nowrap">
      <span className="text-white font-semibold">{name}</span>
      <span className="text-orange-500 text-xs">◆</span>
    </span>
  )
}

interface MarqueeTickerProps {
  direction?: 'left' | 'right'
}

export default function MarqueeTicker({ direction = 'left' }: MarqueeTickerProps) {
  // Triple the items so there's always enough content to fill any screen width
  const items = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS]
  return (
    <div className="flex overflow-hidden group">
      <div
        className={`flex shrink-0 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused]`}
        aria-hidden="true"
      >
        {items.map((item, i) => <MarqueeItem key={`a-${i}`} name={item.name} />)}
      </div>
      {/* Duplicate for seamless loop */}
      <div
        className={`flex shrink-0 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused]`}
        aria-hidden="true"
      >
        {items.map((item, i) => <MarqueeItem key={`b-${i}`} name={item.name} />)}
      </div>
    </div>
  )
}
