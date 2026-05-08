import MarqueeTicker from '@/components/ui/MarqueeTicker'

export default function Marquee() {
  return (
    <section className="py-3 bg-black/30 backdrop-blur-md border-y border-white/10 overflow-hidden relative">
      {/* Constrain to content width */}
      <div className="container mx-auto px-6 relative">
        <div className="absolute left-6 top-0 bottom-0 w-16 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-6 top-0 bottom-0 w-16 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden">
          <MarqueeTicker direction="left" />
        </div>
      </div>
    </section>
  )
}

