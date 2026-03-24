import { ReactNode } from 'react'

interface SectionLabelProps {
  icon: ReactNode
  children: string
}

export function SectionLabel({ icon, children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2.5 border border-orange-500/30 rounded-full px-4 py-1.5 bg-orange-500/5">
      <span className="text-orange-500 flex-shrink-0">{icon}</span>
      <span className="text-orange-400 text-[10px] font-mono font-bold tracking-[0.18em] uppercase">{children}</span>
    </div>
  )
}
