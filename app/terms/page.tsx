import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — FastLaunch',
  description: 'Terms and conditions for using FastLaunch services.',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10 max-w-3xl">
        <div className="mb-10">
          <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm transition-colors">← Back to Home</Link>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Terms &amp; Conditions</h1>
        <p className="text-neutral-500 text-sm mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-neutral-400 leading-relaxed">

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using the FastLaunch website and services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">2. Services</h2>
            <p>FastLaunch provides software development services including MVP development, UI/UX design, full-stack development, and post-launch support. The specific scope, deliverables, timeline and cost of each project are agreed in a separate written contract or statement of work before work begins.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">3. Project Engagements</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>All project work requires a signed agreement and deposit before commencement</li>
              <li>Timelines are estimates and may vary based on scope changes or client feedback delays</li>
              <li>Additional work outside the agreed scope will be quoted separately</li>
              <li>We reserve the right to decline any project at our discretion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">4. Payment</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payment terms are outlined in the individual project agreement</li>
              <li>Late payments may result in work being paused until payment is received</li>
              <li>All prices are in GBP unless otherwise stated</li>
              <li>Deposits are non-refundable once work has commenced</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">5. Intellectual Property</h2>
            <p>Upon receipt of full payment, the client receives full ownership of all custom code, designs and assets created by FastLaunch for their project. FastLaunch retains the right to showcase the work in our portfolio unless otherwise agreed in writing.</p>
            <p className="mt-3">Third-party libraries, frameworks or assets used in projects remain subject to their own licences.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">6. Confidentiality</h2>
            <p>We treat all client information as confidential. We will not share your project details, business information or data with third parties except as required to deliver the services (e.g. hosting providers) or as required by law.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p>FastLaunch&apos;s total liability to you in connection with any project shall not exceed the total fees paid by you for that project. We are not liable for any indirect, consequential, or incidental losses including loss of revenue, data, or business opportunity.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">8. Website Use</h2>
            <p>You may use our website for lawful purposes only. You must not use our website in any way that causes damage, disruption or impairs availability, or attempt to gain unauthorised access to any systems.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">9. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">10. Changes to These Terms</h2>
            <p>We may update these terms from time to time. Continued use of our services after changes constitutes your acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-white text-xl font-semibold mb-3">11. Contact</h2>
            <p>Questions about these terms? Email us at <a href="mailto:support@fastlaunchmvp.com" className="text-orange-400 hover:text-orange-300">support@fastlaunchmvp.com</a>.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
