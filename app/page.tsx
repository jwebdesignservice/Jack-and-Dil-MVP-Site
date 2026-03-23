import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import Services from '@/components/sections/Services'
import Comparison from '@/components/sections/Comparison'
import Process from '@/components/sections/Process'
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
      <About />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
