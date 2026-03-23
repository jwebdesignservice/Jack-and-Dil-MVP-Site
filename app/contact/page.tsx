'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: string
  projectDescription: string
  features: string
  timeline: string
  budget: string
  additionalInfo: string
  howFound: string
}

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', company: '',
    projectType: '', projectDescription: '', features: '',
    timeline: '', budget: '', additionalInfo: '', howFound: ''
  })

  const totalSteps = 4
  const steps = ['About You', 'Your Project', 'Timeline', 'Final Details']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps))
  const handleBack = () => setStep(s => Math.max(s - 1, 1))
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full bg-[#0A0A0A] border border-[rgba(249,115,22,0.2)] rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
  const labelClass = "block text-sm font-medium text-neutral-300 mb-2"

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">You&apos;re All Set!</h1>
          <p className="text-neutral-400 mb-8">We&apos;ll reach out within 24 hours to schedule your free discovery call.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_70%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Let&apos;s Build Together</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">MVP Journey</span>
            </h1>
            <p className="text-neutral-400 text-lg mb-10">Tell us about your vision. We&apos;ll get back to you within 24 hours to schedule a free discovery call.</p>
            <div className="space-y-6 mb-10">
              {[
                { icon: '⏱', title: '24/7 Support', desc: "We're always available to help" },
                { icon: '✓', title: 'Fast Response', desc: 'Reply within 24 hours guaranteed' },
                { icon: '🔒', title: '100% Confidential', desc: 'Your idea stays protected' },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold">{f.title}</h4>
                    <p className="text-neutral-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border border-[rgba(249,115,22,0.15)] rounded-xl p-6 bg-[#0A0A0A]">
              <h3 className="text-white font-semibold mb-4">Contact Details</h3>
              <div className="space-y-3 text-neutral-400 text-sm">
                <a href="mailto:hello@launchfast.dev" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  hello@launchfast.dev
                </a>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  UK Based — Working Globally
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="bg-[#0A0A0A] border border-[rgba(249,115,22,0.15)] rounded-2xl p-8">
              {/* Progress */}
              <div className="flex items-center justify-between mb-8">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center">
                    <div className={`flex flex-col items-center gap-1 ${i + 1 <= step ? 'opacity-100' : 'opacity-40'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${i + 1 < step ? 'bg-orange-500 text-white' : i + 1 === step ? 'bg-orange-500 text-white ring-2 ring-orange-500/30' : 'bg-neutral-800 text-neutral-500'}`}>
                        {i + 1 < step ? '✓' : i + 1}
                      </div>
                      <span className="text-xs text-neutral-500 hidden sm:block">{s}</span>
                    </div>
                    {i < steps.length - 1 && <div className={`h-px w-8 sm:w-12 mx-1 transition-colors ${i + 1 < step ? 'bg-orange-500' : 'bg-neutral-800'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  <motion.div key={step} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.2 }}>
                    {step === 1 && (
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h2 className="text-xl font-bold text-white">Tell Us About Yourself</h2>
                          <p className="text-neutral-500 text-sm mt-1">Let&apos;s start with your basic information.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><label className={labelClass}>First Name *</label><input className={inputClass} name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required /></div>
                          <div><label className={labelClass}>Last Name *</label><input className={inputClass} name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required /></div>
                        </div>
                        <div><label className={labelClass}>Email Address *</label><input className={inputClass} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" required /></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><label className={labelClass}>Phone</label><input className={inputClass} type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7700 900000" /></div>
                          <div><label className={labelClass}>Company</label><input className={inputClass} name="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc." /></div>
                        </div>
                      </div>
                    )}
                    {step === 2 && (
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h2 className="text-xl font-bold text-white">Tell Us About Your Project</h2>
                          <p className="text-neutral-500 text-sm mt-1">Share your vision with us.</p>
                        </div>
                        <div>
                          <label className={labelClass}>Product Type *</label>
                          <select className={inputClass} name="projectType" value={formData.projectType} onChange={handleChange} required>
                            <option value="" disabled>Select product type</option>
                            <option value="saas">SaaS Platform</option>
                            <option value="marketplace">Marketplace</option>
                            <option value="mobile-app">Mobile App</option>
                            <option value="web-app">Web Application</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="ai-tool">AI / ML Tool</option>
                            <option value="dashboard">Dashboard / Analytics</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Describe your idea *</label>
                          <textarea className={inputClass} name="projectDescription" value={formData.projectDescription} onChange={handleChange} rows={4} placeholder="Tell us about your vision. What problem does it solve? Who is your target audience?" required />
                        </div>
                        <div>
                          <label className={labelClass}>Key features (optional)</label>
                          <textarea className={inputClass} name="features" value={formData.features} onChange={handleChange} rows={3} placeholder="E.g., User authentication, payment integration, dashboard..." />
                        </div>
                      </div>
                    )}
                    {step === 3 && (
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h2 className="text-xl font-bold text-white">Timeline &amp; Budget</h2>
                          <p className="text-neutral-500 text-sm mt-1">Help us understand your schedule and investment range.</p>
                        </div>
                        <div>
                          <label className={labelClass}>When do you need it? *</label>
                          <select className={inputClass} name="timeline" value={formData.timeline} onChange={handleChange} required>
                            <option value="" disabled>Select timeline</option>
                            <option value="asap">ASAP (1-2 weeks)</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="2-months">Within 2 months</option>
                            <option value="flexible">Flexible / Not sure</option>
                          </select>
                        </div>
                        <div>
                          <label className={labelClass}>Budget range *</label>
                          <select className={inputClass} name="budget" value={formData.budget} onChange={handleChange} required>
                            <option value="" disabled>Select budget</option>
                            <option value="5k-10k">£5,000 - £10,000</option>
                            <option value="10k-20k">£10,000 - £20,000</option>
                            <option value="20k-50k">£20,000 - £50,000</option>
                            <option value="50k+">£50,000+</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                      </div>
                    )}
                    {step === 4 && (
                      <div className="space-y-4">
                        <div className="mb-6">
                          <h2 className="text-xl font-bold text-white">Almost There!</h2>
                          <p className="text-neutral-500 text-sm mt-1">Any final details you&apos;d like to share?</p>
                        </div>
                        <div>
                          <label className={labelClass}>Additional information (optional)</label>
                          <textarea className={inputClass} name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows={4} placeholder="Any other details, links to competitors, design references, or questions..." />
                        </div>
                        <div>
                          <label className={labelClass}>How did you hear about us?</label>
                          <select className={inputClass} name="howFound" value={formData.howFound} onChange={handleChange}>
                            <option value="" disabled>Select an option</option>
                            <option value="google">Google Search</option>
                            <option value="social">Social Media</option>
                            <option value="referral">Referral</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="twitter">Twitter / X</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <p className="text-neutral-600 text-xs flex items-center gap-2">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                          Your information is secure and will never be shared.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(249,115,22,0.1)]">
                  {step > 1 ? (
                    <button type="button" onClick={handleBack} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors px-4 py-2 rounded-lg border border-neutral-800 hover:border-neutral-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" /></svg>
                      Back
                    </button>
                  ) : <div />}
                  {step < totalSteps ? (
                    <button type="button" onClick={handleNext} className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                      Next Step
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
                    </button>
                  ) : (
                    <button type="submit" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                      Submit &amp; Book Your Call
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" /></svg>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
