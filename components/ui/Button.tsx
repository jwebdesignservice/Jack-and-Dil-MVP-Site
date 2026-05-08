'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  if (variant === 'primary') {
    return (
      <Link href={href} className={`group relative inline-flex items-center gap-2 overflow-hidden px-7 py-3.5 rounded-lg text-sm font-medium text-white transition-all duration-300 border border-orange-500/40 group-hover:border-orange-500/70 ${className}`}
        style={{
          backgroundColor: 'rgba(249, 115, 22, 0.18)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.15), 0 8px 28px -8px rgba(249,115,22,0.4)',
        }}>
        {/* Hover lift bg */}
        <span className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/15 transition-all duration-300" />
        {/* Scan line sweep on hover */}
        <span className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out skew-x-12" />
        {/* Glow on hover */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg shadow-[0_0_28px_rgba(249,115,22,0.55)]" />
        <span className="relative z-10">{children}</span>
        {/* Arrow */}
        <svg className="relative z-10 w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    )
  }

  return (
    <Link href={href} className={`group relative inline-flex items-center gap-2 overflow-hidden px-7 py-3.5 rounded-lg text-sm font-medium text-white transition-all duration-300 ${className}`}>
      {/* Border — animates on hover */}
      <span className="absolute inset-0 rounded-lg border border-orange-500/30 group-hover:border-orange-500/70 transition-colors duration-300" />
      {/* Background fill sweep */}
      <span className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/8 transition-all duration-300 rounded-lg" />
      {/* Scan line */}
      <span className="absolute top-0 left-0 right-0 h-[1px] translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent transition-transform duration-600 ease-in-out" />
      {/* Bottom scan line */}
      <span className="absolute bottom-0 left-0 right-0 h-[1px] translate-x-[100%] group-hover:translate-x-[-100%] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent transition-transform duration-600 ease-in-out" />
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-0 h-0 border-t-0 border-l-0 group-hover:w-3 group-hover:h-3 group-hover:border-t group-hover:border-l border-orange-500/60 transition-all duration-300 rounded-tl-sm" />
      <span className="absolute bottom-0 right-0 w-0 h-0 group-hover:w-3 group-hover:h-3 group-hover:border-b group-hover:border-r border-orange-500/60 transition-all duration-300 rounded-br-sm" />
      <span className="relative z-10 text-neutral-300 group-hover:text-white transition-colors duration-200">{children}</span>
      <svg className="relative z-10 w-3.5 h-3.5 text-orange-500/60 group-hover:text-orange-400 translate-x-0 group-hover:translate-x-1 transition-all duration-200" viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  )
}
