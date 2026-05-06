'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface SlideImage {
  src: string
  alt: string
}

interface HeroSlideshowProps {
  images: SlideImage[]
  heroImage: string
  title: string
}

export default function HeroSlideshow({ images, heroImage, title }: HeroSlideshowProps) {
  // Build the full slide list: hero image first, then any additional images not already the hero
  const allSlides: SlideImage[] = [
    { src: heroImage, alt: title },
    ...images.filter(img => img.src !== heroImage),
  ]

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const prev = () => {
    const idx = (current - 1 + allSlides.length) % allSlides.length
    setDirection(-1)
    setCurrent(idx)
  }

  const next = useCallback(() => {
    const idx = (current + 1) % allSlides.length
    setDirection(1)
    setCurrent(idx)
  }, [current, allSlides.length])

  // Auto-advance if multiple slides
  useEffect(() => {
    if (allSlides.length <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [allSlides.length, next])

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-[rgba(249,115,22,0.15)] bg-[#0A0A0A]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={allSlides[current].src}
              alt={allSlides[current].alt}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Corner accents */}
        <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-orange-500/50 pointer-events-none" />
        <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-orange-500/50 pointer-events-none" />

        {/* Prev/Next arrows — only show if >1 slide */}
        {allSlides.length > 1 && (
          <>
            <button onClick={prev} type="button" aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-[rgba(249,115,22,0.3)] flex items-center justify-center text-white hover:border-orange-500/60 hover:bg-black/80 transition-all z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button onClick={next} type="button" aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-[rgba(249,115,22,0.3)] flex items-center justify-center text-white hover:border-orange-500/60 hover:bg-black/80 transition-all z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </>
        )}
      </div>

      {/* Dot indicators — only if >1 slide */}
      {allSlides.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4" role="tablist" aria-label="Hero slides">
          {allSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} type="button" role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-orange-500' : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'}`} />
          ))}
        </div>
      )}
    </div>
  )
}
