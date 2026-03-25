'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { SectionLabel } from '@/components/ui/SectionLabel'

type FormData = {
  name: string
  email: string
  company: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

const inputClass = "w-full bg-[#0A0A0A] border border-[rgba(249,115,22,0.2)] rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/60 transition-colors text-sm"
const labelClass = "block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-widest"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-9 h-9 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold text-white mb-4">Request Received</h1>
          <p className="text-neutral-400 text-sm mb-8 leading-relaxed">We&apos;ll review your brief and get back to you within 24 hours to schedule your free discovery call.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors text-sm">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Dot grid — same as hero */}
      <div className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }}/>
      {/* Orange-to-black gradient */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(249,115,22,0.1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)' }}/>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 20% 30%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}/>

      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">

        {/* Header — centered, above everything */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto">
          <SectionLabel icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}>Let&apos;s Build Together</SectionLabel>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mt-4 mb-5">
            Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">MVP Journey</span>
          </h1>
          <p className="text-neutral-400 text-base leading-relaxed">
            Tell us about your vision. We&apos;ll get back to you within 24 hours to schedule a free discovery call. No commitment — just a conversation.
          </p>
        </motion.div>

        {/* Trust badges row */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {[
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: 'Reply within 24 hours' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, text: '100% Confidential' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>, text: 'No commitment required' },
            { icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>, text: 'support@fastlaunchmvp.com' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-neutral-500 text-sm">
              <span className="text-orange-500">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Form — full width, max-w-3xl centered */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[rgba(249,115,22,0.18)] bg-[#0A0A0A] overflow-hidden"
            style={{ boxShadow: '0 0 60px rgba(249,115,22,0.06)' }}>
            {/* Card header */}
            <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-[rgba(249,115,22,0.1)] bg-[#0D0D0D] flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500/60"/>
              <div className="w-2 h-2 rounded-full bg-amber-500/60"/>
              <div className="w-2 h-2 rounded-full bg-green-500/60"/>
              <span className="ml-3 text-[11px] font-mono text-neutral-600">new_project_brief.json</span>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"/>
                <span className="text-[10px] font-mono text-orange-400/70">secure</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                      Full Name *
                    </span>
                  </label>
                  <input className={inputClass} name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" required/>
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      Email Address *
                    </span>
                  </label>
                  <input className={inputClass} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required/>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      Company (optional)
                    </span>
                  </label>
                  <input className={inputClass} name="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc."/>
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      Product Type *
                    </span>
                  </label>
                  <select className={inputClass} name="projectType" value={formData.projectType} onChange={handleChange} required>
                    <option value="" disabled>Select type</option>
                    <option>SaaS Platform</option>
                    <option>Marketplace</option>
                    <option>Mobile App</option>
                    <option>Web Application</option>
                    <option>E-commerce</option>
                    <option>AI / ML Tool</option>
                    <option>Dashboard / Analytics</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Budget Range *
                    </span>
                  </label>
                  <select className={inputClass} name="budget" value={formData.budget} onChange={handleChange} required>
                    <option value="" disabled>Select budget</option>
                    <option>£2,500 – £5,000</option>
                    <option>£5,000 – £10,000</option>
                    <option>£10,000 – £20,000</option>
                    <option>£20,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Timeline *
                    </span>
                  </label>
                  <select className={inputClass} name="timeline" value={formData.timeline} onChange={handleChange} required>
                    <option value="" disabled>Select timeline</option>
                    <option>ASAP (1–2 weeks)</option>
                    <option>Within 1 month</option>
                    <option>Within 2 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                    Tell Us About Your Idea *
                  </span>
                </label>
                <textarea className={inputClass} name="message" value={formData.message} onChange={handleChange} rows={5}
                  placeholder="Describe your product idea — what problem it solves, who the target audience is, and any key features you have in mind..." required/>
              </div>

              {/* File upload */}
              <div>
                <label className={labelClass}>
                  <span className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                    Attach Project Brief (optional)
                  </span>
                </label>
                <label className="flex items-center justify-center gap-3 w-full border-2 border-dashed border-[rgba(249,115,22,0.2)] hover:border-orange-500/40 rounded-lg px-4 py-6 cursor-pointer transition-colors group">
                  <svg className="w-5 h-5 text-neutral-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>
                  <div>
                    <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">Drop a file here or click to upload</span>
                    <span className="block text-[10px] text-neutral-600 mt-1">PDF, DOC, DOCX, PNG, JPG — max 10MB</span>
                  </div>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp" />
                </label>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[rgba(249,115,22,0.2)] to-transparent"/>

              {/* Submit */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-neutral-600 text-xs">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                  Encrypted & confidential
                </div>
                <Button href="/contact" variant="primary">
                  <span onClick={(e) => { e.preventDefault(); handleSubmit(e as unknown as React.FormEvent) }}>
                    Submit Brief
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

