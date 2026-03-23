'use client'
import { motion } from 'framer-motion'

export default function HeroGraphic() {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, delay: i * 0.2, ease: 'easeInOut' as const }
    })
  }

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer orbit ring */}
        <motion.circle cx="200" cy="200" r="160" stroke="rgba(249,115,22,0.15)" strokeWidth="1"
          variants={pathVariants} initial="hidden" animate="visible" custom={0} strokeDasharray="4 8" />
        {/* Inner orbit ring */}
        <motion.circle cx="200" cy="200" r="100" stroke="rgba(249,115,22,0.2)" strokeWidth="1"
          variants={pathVariants} initial="hidden" animate="visible" custom={0.5} />
        {/* Center glow */}
        <circle cx="200" cy="200" r="30" fill="rgba(249,115,22,0.1)" />
        <circle cx="200" cy="200" r="20" fill="rgba(249,115,22,0.2)" />
        <circle cx="200" cy="200" r="12" fill="#F97316" />
        {/* Rocket body */}
        <motion.path d="M200 140 L215 175 L200 168 L185 175 Z" fill="rgba(249,115,22,0.8)"
          variants={pathVariants} initial="hidden" animate="visible" custom={1} />
        <motion.path d="M192 172 L195 195 L200 190 L205 195 L208 172 Z" fill="rgba(249,115,22,0.4)"
          variants={pathVariants} initial="hidden" animate="visible" custom={1.2} />
        {/* Data lines */}
        <motion.line x1="200" y1="100" x2="280" y2="120" stroke="rgba(249,115,22,0.4)" strokeWidth="1"
          variants={pathVariants} initial="hidden" animate="visible" custom={1.5} />
        <motion.line x1="200" y1="100" x2="120" y2="130" stroke="rgba(249,115,22,0.4)" strokeWidth="1"
          variants={pathVariants} initial="hidden" animate="visible" custom={1.7} />
        <motion.line x1="280" y1="120" x2="300" y2="200" stroke="rgba(249,115,22,0.3)" strokeWidth="1"
          variants={pathVariants} initial="hidden" animate="visible" custom={1.9} />
        <motion.line x1="120" y1="130" x2="100" y2="220" stroke="rgba(249,115,22,0.3)" strokeWidth="1"
          variants={pathVariants} initial="hidden" animate="visible" custom={2.1} />
        {/* Nodes */}
        {[
          { cx: 280, cy: 120 }, { cx: 120, cy: 130 }, { cx: 300, cy: 200 },
          { cx: 100, cy: 220 }, { cx: 240, cy: 300 }, { cx: 160, cy: 290 }
        ].map((node, i) => (
          <motion.circle key={i} cx={node.cx} cy={node.cy} r="6" fill="rgba(249,115,22,0.6)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 + i * 0.15, duration: 0.4 }} />
        ))}
        {/* Code brackets */}
        <motion.text x="60" y="200" fill="rgba(249,115,22,0.3)" fontSize="40" fontFamily="monospace"
          variants={pathVariants} initial="hidden" animate="visible" custom={2.5}>{'{'}</motion.text>
        <motion.text x="330" y="200" fill="rgba(249,115,22,0.3)" fontSize="40" fontFamily="monospace"
          variants={pathVariants} initial="hidden" animate="visible" custom={2.5}>{'}'}</motion.text>
      </svg>
      {/* Orbiting dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-spin-slow w-full h-full absolute">
          <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-orange-500 -translate-x-1/2" />
        </div>
      </div>
    </div>
  )
}
