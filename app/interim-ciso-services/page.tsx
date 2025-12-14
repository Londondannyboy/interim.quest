import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const CISO_SERVICE_FAQS = [
  {
    question: 'What is an Interim CISO?',
    answer: 'An Interim CISO is a full-time temporary Chief Information Security Officer who steps into a leadership role for 3-12 months. They provide immediate security leadership during CISO vacancies, post-breach recovery, regulatory remediation, or major security transformations. Unlike fractional or part-time security advisors, an interim CISO is a fully embedded executive who takes complete ownership of your security function.',
  },
  {
    question: 'When should we hire an Interim CISO?',
    answer: 'Hire an interim CISO when: your CISO has left and you need immediate leadership coverage; you\'ve experienced a security breach and need expert crisis response; you\'re facing regulatory enforcement and need urgent compliance remediation; you\'re undergoing a major security transformation; or you need to rapidly build a security programme while searching for a permanent CISO.',
  },
  {
    question: 'How much does an Interim CISO cost?',
    answer: 'Interim CISOs typically charge £1,500-£2,500 per day in the UK—a premium rate reflecting the seniority, urgency, and full-time commitment required. For a 6-month engagement, expect £225,000-£375,000. While higher than permanent salaries, interim CISOs deliver immediate impact without recruitment delays, onboarding time, or long-term commitments.',
  },
  {
    question: 'What\'s the difference between interim and fractional CISOs?',
    answer: 'An interim CISO works full-time (5 days/week) for a fixed period (3-12 months) to fill a leadership gap or manage a crisis. A fractional CISO works part-time (1-3 days/week) on an ongoing basis for companies that don\'t need full-time security leadership. Interim is for temporary full-time leadership; fractional is for permanent part-time support.',
  },
  {
    question: 'How quickly can an Interim CISO start?',
    answer: 'Most interim CISOs can start within 1-2 weeks. They\'re specifically available for immediate deployment, unlike permanent hires which can take 3-6 months to recruit. In crisis situations (post-breach, regulatory enforcement), some interims can mobilise within days.',
  },
  {
    question: 'What happens after the interim engagement ends?',
    answer: 'The interim CISO typically transitions their work to your permanent CISO hire. They document processes, brief the new leader, and ensure smooth handover. Many organisations use interim CISOs as a bridge while recruiting permanent leadership—you get immediate security coverage while taking time to find the right long-term hire.',
  },
]

export const metadata: Metadata = {
  title: 'Interim CISO Services UK | Hire a Temporary CISO',
  description: 'Hire an Interim CISO for full-time temporary security leadership. Expert crisis response, CISO vacancy coverage, breach remediation, and compliance programmes. £1,500-£2,500/day. Start within days.',
  keywords: 'interim ciso, interim ciso services, hire interim ciso, temporary ciso, interim chief security officer, interim ciso uk, interim security director, breach response, compliance remediation',
  alternates: {
    canonical: 'https://interim.quest/interim-ciso-services',
  },
  openGraph: {
    title: 'Interim CISO Services UK | Hire a Temporary CISO',
    description: 'Full-time temporary security leadership for CISO vacancies, post-breach response, and security transformation. Start within days.',
    images: ['/images/interim-ciso-services.jpg'],
    url: 'https://interim.quest/interim-ciso-services',
  },
}

export default function InterimCISOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-red-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Security Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CISO<br />
                <span className="text-red-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Full-time temporary <strong className="text-white">security leadership</strong> when you need it most.
                Expert interim CISOs for vacancy coverage, post-breach response, and security transformation.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-red-400">1-2 Weeks</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Start</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">5 Days/Week</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">
                  Hire an Interim CISO
                </Link>
                <Link href="#when-to-hire" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  When to Hire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Interim CISO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CISO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CISO</strong> is a full-time temporary security leader who steps into your organisation for 3-12 months to fill a critical leadership gap, manage a security crisis, or drive a major transformation. They work 5 days per week as a fully embedded executive—not a part-time advisor.
            </p>
            <p>
              Interim CISOs are deployed when you need immediate, expert security leadership but cannot wait 3-6 months to recruit a permanent CISO. They take complete ownership of your security function from day one: leading teams, managing crises, driving compliance, and representing security to the board.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-red-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "When your CISO leaves unexpectedly or you are recovering from a breach, you cannot afford a 6-month leadership vacuum. An interim CISO provides expert leadership within days, not months."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Full-Time Leadership, Temporary Tenure</h3>
            <p>
              Unlike fractional or part-time security consultants, an interim CISO is a full-time executive hire for a fixed period. They attend all leadership meetings, manage your security team, own incident response, and drive strategic initiatives—exactly like a permanent CISO, but with a defined end date. This makes them ideal for bridging leadership gaps while you recruit, managing time-bound crises, or leading specific transformation programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CISO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Full-time leadership responsibilities during the interim engagement</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Crisis Leadership',
                description: 'Lead post-breach response and remediation. Coordinate with forensics, legal, regulators, and customers. Rebuild security controls and restore trust.',
                icon: '🚨',
              },
              {
                title: 'Leadership Continuity',
                description: 'Provide immediate CISO coverage when your security leader departs. Maintain team stability, strategic momentum, and stakeholder confidence.',
                icon: '🎯',
              },
              {
                title: 'Compliance Remediation',
                description: 'Respond to regulatory enforcement actions. Lead urgent compliance programmes (SOC 2, ISO 27001, GDPR). Ensure audit readiness.',
                icon: '✅',
              },
              {
                title: 'Team Leadership',
                description: 'Manage and mentor your security team full-time. Provide direction, unblock issues, and ensure operational excellence throughout the engagement.',
                icon: '👥',
              },
              {
                title: 'Security Transformation',
                description: 'Lead major security transformations: cloud migration, zero trust implementation, security operating model redesign, or post-merger integration.',
                icon: '⚡',
              },
              {
                title: 'Board Reporting',
                description: 'Represent security at board and executive meetings. Provide risk reporting, incident updates, and strategic recommendations to senior leadership.',
                icon: '📊',
              },
              {
                title: 'Programme Build',
                description: 'Rapidly build security programmes from scratch. Establish policies, controls, processes, and tooling while recruiting permanent leadership.',
                icon: '🏗️',
              },
              {
                title: 'Stakeholder Management',
                description: 'Manage relationships with regulators, auditors, insurers, and customers during critical periods. Provide expert communication and crisis management.',
                icon: '🤝',
              },
              {
                title: 'Transition Planning',
                description: 'Document processes, brief incoming permanent CISO, and ensure smooth handover. Leave the organisation stronger than you found it.',
                icon: '🔄',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-red-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Compliance Frameworks We Support</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'SOC 2', description: 'Type I & Type II' },
              { name: 'ISO 27001', description: 'Certification' },
              { name: 'GDPR', description: 'Data Protection' },
              { name: 'PCI-DSS', description: 'Payment Security' },
              { name: 'HIPAA', description: 'Healthcare' },
              { name: 'Cyber Essentials', description: 'UK Standard' },
              { name: 'NIST', description: 'Framework' },
              { name: 'FCA', description: 'Financial Services' },
            ].map((cert, index) => (
              <div key={index} className="bg-gray-50 p-4 text-center border border-gray-200">
                <div className="font-black text-gray-900">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section id="when-to-hire" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire an Interim CISO</h2>
            <p className="text-xl text-gray-600 mt-4">Critical situations requiring immediate full-time security leadership</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CISO Vacancy',
                description: 'Your CISO has resigned, retired, or been dismissed. You need immediate leadership coverage while recruiting a permanent replacement. Cannot afford a 3-6 month leadership vacuum.',
                timing: 'Immediate deployment',
                duration: '3-9 months',
              },
              {
                scenario: 'Post-Breach Response',
                description: 'Suffered a security breach or ransomware attack. Need expert crisis leadership to manage response, remediation, regulatory reporting, and stakeholder communication.',
                timing: 'Within days',
                duration: '4-8 months',
              },
              {
                scenario: 'Regulatory Remediation',
                description: 'Received enforcement action from ICO, FCA, or other regulators. Need urgent compliance remediation and expert regulatory liaison to resolve violations.',
                timing: 'Immediate',
                duration: '6-12 months',
              },
              {
                scenario: 'Security Transformation',
                description: 'Major transformation programme: cloud migration, zero trust rollout, post-merger security integration, or security operating model redesign requiring dedicated leadership.',
                timing: 'Project kick-off',
                duration: '6-12 months',
              },
              {
                scenario: 'Rapid Programme Build',
                description: 'Need to build enterprise security programme from scratch under tight timelines. Board mandate to establish security function before funding round or enterprise contracts.',
                timing: '2-4 weeks notice',
                duration: '6-9 months',
              },
              {
                scenario: 'Audit Crisis',
                description: 'Failed SOC 2, ISO 27001, or regulatory audit. Need expert leadership to remediate findings, rebuild controls, and achieve certification before customer deadlines.',
                timing: 'Within 2 weeks',
                duration: '4-8 months',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex gap-4 text-xs">
                  <span className="inline-block font-bold text-red-600 uppercase tracking-wider">Start: {item.timing}</span>
                  <span className="inline-block font-bold text-gray-500 uppercase tracking-wider">Duration: {item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CISO Day Rates</h2>
            <p className="text-xl text-gray-600 mt-4">Premium rates reflecting seniority, urgency, and full-time commitment</p>
          </div>
          <div className="bg-gray-50 p-8 border-l-4 border-red-500">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Day Rate Range</div>
                <div className="text-3xl font-black text-gray-900">£1,500-£2,500</div>
                <div className="text-sm text-gray-600 mt-1">per day (5 days/week)</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Typical Duration</div>
                <div className="text-3xl font-black text-gray-900">3-12</div>
                <div className="text-sm text-gray-600 mt-1">months engagement</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">6-Month Cost</div>
                <div className="text-3xl font-black text-red-600">£225k-£375k</div>
                <div className="text-sm text-gray-600 mt-1">total engagement</div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold text-gray-900 mb-3">What Drives the Premium Rate?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Immediate availability:</strong> Deploy within 1-2 weeks vs 3-6 months to recruit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Crisis expertise:</strong> Proven track record managing breaches, regulatory issues, transformations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>No long-term commitment:</strong> Fixed-term engagement, no redundancy, no ongoing costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span><strong>Instant impact:</strong> Hit the ground running, no onboarding delay or learning curve</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Permanent CISO</h2>
            <p className="text-gray-600 mt-4">Understanding the different security leadership models</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Factor</th>
                  <th className="px-6 py-4 text-left font-bold text-red-600">Interim CISO</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700">Fractional CISO</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-700">Permanent CISO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Time Commitment</td>
                  <td className="px-6 py-4 text-red-600">Full-time (5 days/week)</td>
                  <td className="px-6 py-4">Part-time (1-3 days/week)</td>
                  <td className="px-6 py-4">Full-time (5 days/week)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Duration</td>
                  <td className="px-6 py-4 text-red-600">Fixed-term (3-12 months)</td>
                  <td className="px-6 py-4">Ongoing (12+ months)</td>
                  <td className="px-6 py-4">Permanent hire</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Day Rate</td>
                  <td className="px-6 py-4 text-red-600">£1,500-£2,500/day</td>
                  <td className="px-6 py-4">£900-£1,600/day</td>
                  <td className="px-6 py-4">£180k-£300k salary</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Time to Start</td>
                  <td className="px-6 py-4 text-red-600">1-2 weeks</td>
                  <td className="px-6 py-4">2-4 weeks</td>
                  <td className="px-6 py-4">3-6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Use Case</td>
                  <td className="px-6 py-4 text-red-600">CISO vacancy, crisis, transformation</td>
                  <td className="px-6 py-4">Do not need full-time CISO</td>
                  <td className="px-6 py-4">Long-term leadership need</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Best For</td>
                  <td className="px-6 py-4 text-red-600">Urgent leadership gaps, post-breach</td>
                  <td className="px-6 py-4">Startups, SMEs, ongoing advisory</td>
                  <td className="px-6 py-4">Established security function</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CISO</h2>
            <p className="text-gray-600 mt-4">Rapid deployment process for urgent leadership needs</p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'We discuss your situation: CISO vacancy, post-breach crisis, regulatory remediation, or transformation programme. We understand your immediate needs, team structure, and timeline.',
                timeline: 'Day 1',
              },
              {
                step: '2',
                title: 'Interim Matching',
                description: 'We present 2-3 interim CISOs with relevant crisis experience. Focus on industry expertise, regulatory knowledge, and proven track record in similar situations.',
                timeline: 'Days 2-3',
              },
              {
                step: '3',
                title: 'Interviews & Selection',
                description: 'Rapid interview process with key stakeholders. Assess leadership style, crisis management approach, and cultural fit. Reference checks on previous interim assignments.',
                timeline: 'Days 4-7',
              },
              {
                step: '4',
                title: 'Contract & Mobilisation',
                description: 'Agree day rate, duration, and deliverables. Interim CISO reviews documentation and begins planning before official start date. Fast-track onboarding prepared.',
                timeline: 'Days 8-10',
              },
              {
                step: '5',
                title: 'Day One Start',
                description: 'Interim CISO begins full-time engagement. Immediate assessment of situation, team meetings, stakeholder briefings. No learning curve—they hit the ground running.',
                timeline: 'Days 10-14',
              },
              {
                step: '6',
                title: 'Transition & Handover',
                description: 'At engagement end, interim CISO briefs permanent successor, documents processes, and ensures smooth handover. Exit report to board on programme status.',
                timeline: 'Final 2 weeks',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 border-l-4 border-red-500 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-black text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider ml-4">{item.timeline}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CISO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need an Interim CISO<br /><span className="text-red-400">Immediately?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you are facing a CISO vacancy, post-breach crisis, or urgent transformation, we can deploy expert interim security leadership within 1-2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">
              Find an Interim CISO
            </Link>
            <Link href="/interim-ciso-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CISO Looking for Interim Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Services</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/interim-cio-services" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Interim CIO</Link>
              <Link href="/interim-cdo-services" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Interim CDO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
