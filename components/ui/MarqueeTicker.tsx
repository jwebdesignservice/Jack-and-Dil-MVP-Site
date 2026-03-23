'use client'

const TECH_ITEMS = [
  { name: 'React' }, { name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Node.js' },
  { name: 'PostgreSQL' }, { name: 'Supabase' }, { name: 'Stripe' }, { name: 'Vercel' },
  { name: 'Tailwind' }, { name: 'Prisma' }, { name: 'Redis' }, { name: 'AWS' },
]

function MarqueeItem({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-3 mx-6 text-neutral-400 font-medium text-sm whitespace-nowrap">
      <span className="text-white">{name}</span>
      <span className="text-orange-500 text-xs">◆</span>
    </span>
  )
}

interface MarqueeTickerProps {
  direction?: 'left' | 'right'
}

export default function MarqueeTicker({ direction = 'left' }: MarqueeTickerProps) {
  const items = [...TECH_ITEMS, ...TECH_ITEMS]
  return (
    <div className="flex overflow-hidden">
      <div className={`flex ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
        {items.map((item, i) => <MarqueeItem key={i} name={item.name} />)}
      </div>
    </div>
  )
}
