import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CISO UK | £1,500-£2,500/day | Full-Time Security Leadership',
  description: 'Hire an Interim CISO for 3-12 month full-time assignments. Expert security leadership for breaches, compliance, transformations, and leadership gaps. Day rates £1,500-£2,500.',
  keywords: 'interim ciso, interim chief information security officer, temporary ciso, interim ciso day rate, hire interim ciso uk, security transformation',
  alternates: { canonical: 'https://interim.quest/interim-ciso' },
}

export default function InterimCISOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-red-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CISO<br /><span className="text-red-400">£1,500-£2,500/day</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time, on-site security leadership for 3-12 month assignments. Respond to breaches, achieve compliance, drive security programmes. Not part-time consulting.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Hire an Interim CISO</Link>
                <Link href="/fractional-ciso" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Need Part-Time? See Fractional</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CISO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CISO</strong> is a full-time Chief Information Security Officer hired for a fixed period—typically 3-12 months. They work exclusively for your organisation during critical security periods: breaches, compliance deadlines, leadership gaps, or major security programme buildouts.</p>
          <p className="text-gray-600 mb-4">This is NOT part-time consulting or fractional work. Interim CISOs are in your office 5 days a week, leading your security team, responding to incidents, managing audits, and driving security initiatives—just like a permanent hire, but for a defined period.</p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Typical Day Rates</h3>
            <ul className="text-gray-600 space-y-1">
              <li><strong>£1,500-£1,800/day:</strong> SMEs, basic compliance (Cyber Essentials, SOC 2), building first security programme</li>
              <li><strong>£1,800-£2,200/day:</strong> Mid-market, ISO 27001, PCI-DSS, mature security operations</li>
              <li><strong>£2,200-£2,500/day:</strong> Enterprise, FTSE 250, post-breach recovery, complex regulatory (FCA, PRA, GDPR)</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Based on 5-day weeks. Crisis response (active breaches) may command premium rates. Rates typically decrease for longer assignments (6+ months).</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CISO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Security Breach', description: 'Active breach or incident requiring full-time crisis management and remediation.' },
              { scenario: 'CISO Departure', description: 'Your CISO has left and you need immediate security leadership while recruiting.' },
              { scenario: 'Compliance Deadline', description: 'Major compliance requirements (SOC 2, ISO 27001, PCI-DSS) with tight deadlines.' },
              { scenario: 'Security Transformation', description: 'Complete overhaul of security programme requiring dedicated leadership.' },
              { scenario: 'Due Diligence', description: 'Preparing for acquisition or investment with intensive security scrutiny.' },
              { scenario: 'Post-Breach Recovery', description: 'Rebuilding security posture after a significant incident.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CISO Assignments</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Breach Response & Recovery (25% of assignments)</h3>
              <p className="text-gray-600">Active security breach or recent incident. Need immediate crisis leadership: forensics coordination, stakeholder communication, ICO reporting, remediation planning. High pressure. 3-6 months.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Compliance Deadline (25%)</h3>
              <p className="text-gray-600">Achieving SOC 2, ISO 27001, PCI-DSS, or regulatory compliance with tight deadline. Requires dedicated focus to implement controls, manage audits, achieve certification. 4-9 months.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Leadership Gap Coverage (20%)</h3>
              <p className="text-gray-600">Your CISO departed. You need immediate security leadership while recruiting. Interim maintains security posture, leads team, manages vendors and tools. 3-6 months.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Security Programme Build (20%)</h3>
              <p className="text-gray-600">Building security function from scratch or major uplift. Hiring team, selecting tools, implementing processes, establishing governance. 6-12 months.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Due Diligence/Pre-Investment (10%)</h3>
              <p className="text-gray-600">Preparing for acquisition, IPO, or major investment. Security needs to pass due diligence scrutiny. Intensive remediation and documentation. 4-6 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills Required for Interim CISO Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Core Security Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Security strategy and risk management</li>
                <li>• Incident response and crisis management</li>
                <li>• Security architecture and design</li>
                <li>• Vendor and tool evaluation/management</li>
                <li>• Security team building and leadership</li>
                <li>• Threat intelligence and vulnerability management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim-Specific Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rapid security posture assessment</li>
                <li>• Taking over active incidents/investigations</li>
                <li>• Building credibility under scrutiny</li>
                <li>• Managing inherited security debt</li>
                <li>• Delivering bad news to boards/investors</li>
                <li>• Working with security recruitment firms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Compliance & Governance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ISO 27001, SOC 2, PCI-DSS frameworks</li>
                <li>• GDPR and data protection</li>
                <li>• Financial services regulation (FCA, PRA)</li>
                <li>• ICO breach reporting and liaison</li>
                <li>• Security audit management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Technical Depth</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cloud security (AWS, Azure, GCP)</li>
                <li>• Security tools (SIEM, EDR, vulnerability scanning)</li>
                <li>• Network and application security</li>
                <li>• Identity and access management</li>
                <li>• Forensics and investigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Becoming an Interim CISO</h2>
          <div className="space-y-6">
            <p className="text-gray-600">Most Interim CISOs have 15-25 years of security experience. You do not start your career as an interim—you transition into it after building deep expertise, especially in high-pressure situations.</p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Typical Path:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-red-500 min-w-[120px]">Years 0-5:</div>
                  <div className="text-gray-600">Security Analyst → Senior Analyst. Build technical security skills (SOC, penetration testing, security engineering). Get certifications (CISSP, CEH).</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-red-500 min-w-[120px]">Years 5-12:</div>
                  <div className="text-gray-600">Security Manager or Head of Security Operations. Lead teams, handle incidents, implement security programmes. Experience with compliance frameworks.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-red-500 min-w-[120px]">Years 12-18:</div>
                  <div className="text-gray-600">CISO or Director of Security at mid-size company. Full security function leadership. Board exposure. Lead through at least one major incident or compliance initiative.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-red-500 min-w-[120px]">Years 18+:</div>
                  <div className="text-gray-600">Transition to interim work. Track record of crisis management. Comfortable parachuting into difficult security situations. Experience at 3+ companies.</div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">What Makes Someone "Interim-Ready"?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Led security at 3+ companies (different industries/maturity levels)</li>
                <li>• Handled major incidents, breaches, or forensic investigations</li>
                <li>• Achieved certifications (ISO 27001, SOC 2, PCI-DSS)</li>
                <li>• Comfortable with intense pressure and board scrutiny</li>
                <li>• Can assess security posture rapidly (days, not weeks)</li>
                <li>• Do not need organizational buy-in to make hard calls</li>
                <li>• Financial runway for gaps between assignments</li>
              </ul>
            </div>

            <p className="text-gray-600 italic">Most interim CISOs work 8-10 months per year across 2-3 assignments. Between assignments they do security advisory work, penetration testing reviews, or board advisor roles.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CISO" accentColor="red" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need a Full-Time Interim CISO?</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your situation. We'll help you determine if you need a full-time interim or part-time fractional CISO—and connect you with the right person.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Find an Interim CISO</Link>
            <Link href="/fractional-ciso" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CISO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
