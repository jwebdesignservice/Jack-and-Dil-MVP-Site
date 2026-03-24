import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import Comparison from '@/components/sections/Comparison'
import Process from '@/components/sections/Process'
import WorkMarquee from '@/components/sections/WorkMarquee'
import About from '@/components/sections/About'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <Comparison />
      <Process />
      <WorkMarquee />
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
