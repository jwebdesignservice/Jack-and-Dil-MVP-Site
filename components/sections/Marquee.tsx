import MarqueeTicker from '@/components/ui/MarqueeTicker'

export default function Marquee() {
  return (
    <section className="py-5 bg-[#050505] border-y border-[rgba(249,115,22,0.1)] overflow-hidden relative">
      {/* Constrain to content width */}
      <div className="container mx-auto px-6 relative">
        <div className="absolute left-6 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-6 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="overflow-hidden">
          <MarqueeTicker direction="left" />
        </div>
      </div>
    </section>
  )
}

