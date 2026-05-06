import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import WorkMarquee from '@/components/sections/WorkMarquee'
import Services from '@/components/sections/Services'

// Above-the-fold sections load with the initial bundle (priority).
// Below-the-fold sections lazy-load to reduce First Load JS and improve LCP.
const Comparison   = dynamic(() => import('@/components/sections/Comparison'))
const Process      = dynamic(() => import('@/components/sections/Process'))
const Marquee      = dynamic(() => import('@/components/sections/Marquee'))
const About        = dynamic(() => import('@/components/sections/About'))
const Pricing      = dynamic(() => import('@/components/sections/Pricing'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const FAQ          = dynamic(() => import('@/components/sections/FAQ'))
const CTA          = dynamic(() => import('@/components/sections/CTA'))

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkMarquee />
      <Services />
      <Comparison />
      <Process />
      <Marquee />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
