'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#0A0A0A] ${className}`}
      style={{
        background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(249,115,22,0.08) 0%, transparent 60%), #0A0A0A`,
      }}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(249,115,22,0.3)' }} />
      {children}
    </motion.div>
  )
}
