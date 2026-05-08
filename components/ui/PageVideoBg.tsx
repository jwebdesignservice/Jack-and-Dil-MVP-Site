'use client'
import { useEffect, useRef } from 'react'

const PLAYBACK_RATE = 0.5

export default function PageVideoBg() {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.playbackRate = PLAYBACK_RATE
    const reapply = () => { v.playbackRate = PLAYBACK_RATE }
    v.addEventListener('loadedmetadata', reapply)
    v.addEventListener('play', reapply)
    return () => {
      v.removeEventListener('loadedmetadata', reapply)
      v.removeEventListener('play', reapply)
    }
  }, [])
  return (
    <div aria-hidden="true" className="bg-page-video">
      <video ref={ref} autoPlay loop muted playsInline poster="/Images/Hero illustration.webp">
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
