import MarqueeTicker from '@/components/ui/MarqueeTicker'

export default function Marquee() {
  return (
    <section className="py-12 bg-[#050505] border-y border-[rgba(249,115,22,0.1)] overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />
      <div className="pause-on-hover space-y-4">
        <MarqueeTicker direction="left" />
        <MarqueeTicker direction="right" />
      </div>
    </section>
  )
}
