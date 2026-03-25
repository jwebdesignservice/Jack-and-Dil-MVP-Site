'use client'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { motion } from 'framer-motion'
import CountUp from '@/components/ui/CountUp'
import { Button } from '@/components/ui/Button'

const plans = [
  {
    name: 'Starter',
    price: 2500,
    desc: 'Validate your idea fast with a lean MVP.',
    features: ['Up to 5 core features', 'Mobile-responsive design', 'Basic auth + database', '1–4 day delivery', '2 weeks post-launch support'],
    popular: false,
  },
  {
    name: 'Growth',
    price: 9500,
    desc: 'The full package for founders ready to ship.',
    features: ['Up to 12 core features', 'Custom UI/UX design', 'Payments + advanced auth', '4–10 day delivery', '1 month post-launch support', 'Analytics dashboard'],
    popular: true,
  },
  {
    name: 'Scale',
    price: 20000,
    desc: 'Complex products built for serious traction.',
    features: ['Unlimited features', 'Full design system', 'Complex integrations', '14-day delivery', '3 months post-launch support', 'Dedicated Slack channel'],
    popular: false,
  },
]

const badges = ['Secure Payments', 'Fixed Price', 'No Hidden Fees', '100% Ownership', 'NDA Included']

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Orange grid lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,1) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      {/* Radial gradient center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}>Transparent Pricing</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-4">Simple, Fixed Pricing</h2>
          <p className="text-neutral-500 mt-4 max-w-lg mx-auto">No hourly rates, no surprises. You know exactly what you get.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl flex flex-col ${plan.popular
                ? 'mt-6 bg-[#0D0A00] border-2 border-orange-500/60'
                : 'bg-[#0A0A0A] border border-[rgba(249,115,22,0.15)]'}`}
              style={plan.popular ? { boxShadow: '0 0 60px rgba(249,115,22,0.15)' } : {}}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">MOST POPULAR</span>
                </div>
              )}
              <div className="p-8 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-neutral-600 text-sm mb-6">{plan.desc}</p>
                <div className="text-4xl font-bold text-white mb-1">
                  £<CountUp end={plan.price} duration={1500} />
                </div>
                <div className="text-neutral-600 text-sm mb-8">fixed price</div>
                <ul className="space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-neutral-400 text-sm">
                      <span className="text-orange-500 mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <Button href="/contact" variant={plan.popular ? 'primary' : 'outline'} className="w-full justify-center">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-16">
          {badges.map(badge => (
            <div key={badge} className="flex items-center gap-2 border border-[rgba(249,115,22,0.15)] rounded-full px-4 py-2 text-neutral-500 text-sm">
              <span className="text-orange-500">✓</span> {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}







