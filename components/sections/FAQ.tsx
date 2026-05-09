'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const faqs = [
  { q: 'How long does it take to build an MVP?', a: 'Depending on complexity, we deliver in 3-14 days. Simple MVPs can be done in 3-7 days. Complex platforms with multiple integrations take 14 days.' },
  { q: 'What tech stack do you use?', a: 'We use Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, and Stripe by default. We adapt to your needs.' },
  { q: 'Do I own the code after the project?', a: '100%. You own all the code, design assets, and infrastructure. We hand over everything at project end.' },
  { q: 'What is included in the post-launch support?', a: 'Bug fixes, performance monitoring, and feature adjustments. Duration depends on your plan (2 weeks to 3 months).' },
  { q: 'Can you work with an existing codebase?', a: 'Yes. We can audit, refactor, or extend existing codebases. Contact us for a code review first.' },
  { q: 'How do payments work?', a: '50% upfront, 50% on delivery. We accept bank transfer and card via Stripe.' },
]

// JSON-LD: FAQPage schema (helps Google show rich FAQ snippets in search)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-10 md:py-16 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>}>Common Questions</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mt-4">Common Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`glass-card overflow-hidden transition-colors !rounded-xl ${open === i ? '!border-orange-500/40' : ''}`}>
              <button className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className={`font-medium transition-colors ${open === i ? 'text-white' : 'text-neutral-300'}`}>{faq.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-orange-500 text-xl flex-shrink-0 ml-4">+</motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <div className="px-6 pb-5 border-l-2 border-orange-500/50 ml-6">
                      <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


