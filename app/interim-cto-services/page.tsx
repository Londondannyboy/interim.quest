import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, CTO_SERVICE_FAQS } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CTO Services UK | Hire a Temporary CTO',
  description: 'Hire an Interim CTO for full-time temporary technology leadership. 3-12 month engagements for CTO vacancy, digital transformation, tech turnaround, and system migration. Day rates from £1,200-£2,000.',
  keywords: 'interim cto, interim cto services, hire interim cto, temporary cto, interim chief technology officer, interim cto uk, interim tech leadership',
  alternates: {
    canonical: 'https://interim.quest/interim-cto-services',
  },
  openGraph: {
    title: 'Interim CTO Services UK | Hire a Temporary CTO',
    description: 'Full-time temporary CTO for leadership gaps, transformations, and tech turnarounds. 3-12 month engagements.',
    images: ['/images/interim-cto-services.jpg'],
    url: 'https://interim.quest/interim-cto-services',
  },
}

export default function InterimCTOServicesPage() {
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
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Technical Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CTO<br />
                <span className="text-blue-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CTO</strong> for full-time temporary technology leadership.
                Close leadership gaps, drive transformations, and turn around struggling tech teams—fast.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">5 Days/Week</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1.2k-2k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
                  Hire an Interim CTO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Interim CTO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CTO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CTO</strong> is an experienced Chief Technology Officer who joins your company full-time on a temporary basis—typically for 3-12 months. They provide immediate senior technology leadership during critical periods: CTO vacancy, digital transformation, tech crisis, or major system migration.
            </p>
            <p>
              Unlike fractional CTOs who work 1-3 days per week across multiple companies, an interim CTO is dedicated to your business five days a week. They're not advisors—they're your CTO. They make decisions, take accountability, lead your team, and drive results through a defined transformation period.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-blue-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CTOs step into full leadership immediately—closing critical gaps, stabilising teams, and delivering transformations in 3-12 months."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim vs Fractional CTO</h3>
            <p>
              A fractional CTO works part-time (1-3 days per week) across multiple companies. They're ideal for ongoing strategic guidance and architecture oversight when you don't need full-time leadership.
            </p>
            <p>
              An interim CTO is full-time and temporary. They're brought in for urgent situations: sudden CTO departure, failing technology programmes, digital transformations, or when you need to stabilise before hiring permanent leadership. They're hands-on, accountable, and focused on delivering specific outcomes within a defined timeframe.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CTO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Full-time leadership responsibilities during critical periods</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Crisis Stabilisation',
                description: 'Assess situation, stabilise teams, fix critical issues. Take immediate control of failing technology programmes and restore confidence.',
                icon: '🚨',
              },
              {
                title: 'Transformation Leadership',
                description: 'Lead digital transformations, system migrations, and platform rebuilds. Define roadmap, manage delivery, and ensure successful outcomes.',
                icon: '🔄',
              },
              {
                title: 'Team Restructuring',
                description: 'Reorganise underperforming teams, establish processes, improve delivery velocity. Make difficult personnel decisions quickly.',
                icon: '👥',
              },
              {
                title: 'Architecture Recovery',
                description: 'Fix technical debt, redesign failing systems, implement scalable architecture. Address years of accumulated technical problems.',
                icon: '🏗️',
              },
              {
                title: 'Strategic Execution',
                description: 'Define and execute critical technology initiatives. M&A integration, cloud migration, security overhaul, or platform modernisation.',
                icon: '🎯',
              },
              {
                title: 'Permanent CTO Search',
                description: 'Stabilise technology, define CTO requirements, support recruitment. Hand over to permanent leader with systems in good shape.',
                icon: '🔍',
              },
              {
                title: 'Investor Relations',
                description: 'Provide technical credibility during fundraising or acquisition. Address investor concerns and demonstrate technology value.',
                icon: '📋',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire an Interim CTO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Immediate Impact',
                description: 'Start within 1-2 weeks. Interim CTOs hit the ground running—no onboarding needed. They assess, decide, and act immediately on critical issues.',
                stat: '1-2',
                statLabel: 'Weeks to Start',
              },
              {
                title: 'Crisis-Tested Experience',
                description: 'Get leaders who have handled your exact situation before: CTO departures, failing projects, team chaos, tech debt disasters. They know how to stabilise and recover.',
                stat: '20+',
                statLabel: 'Years Experience',
              },
              {
                title: 'Defined Outcomes',
                description: 'Clear scope and timeline. Interim CTOs deliver specific results: complete migration, stabilise team, implement security, prepare for sale. Then hand over cleanly.',
                stat: '3-12',
                statLabel: 'Month Duration',
              },
              {
                title: 'No Permanent Commitment',
                description: 'Full leadership without permanent hire risk. If your permanent CTO leaves or you need to pause after transformation, the engagement ends cleanly.',
                stat: '100%',
                statLabel: 'Flexible Exit',
              },
              {
                title: 'Objective Decisions',
                description: 'No politics, no legacy attachments. Interim CTOs make hard decisions quickly: restructure teams, sunset products, replace vendors. They do what needs doing.',
                stat: '0',
                statLabel: 'Internal Politics',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-blue-500">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-blue-600">{benefit.stat}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{benefit.statLabel}</div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire an Interim CTO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none mb-8">
            <p>
              Interim CTOs are brought in for urgent, high-stakes situations requiring immediate full-time leadership. These are the most common scenarios:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CTO Vacancy',
                description: 'Your CTO has left suddenly or been dismissed. You need immediate senior leadership while you search for a permanent replacement.',
                timing: 'Immediate (1-2 weeks)',
              },
              {
                scenario: 'Digital Transformation',
                description: 'Major technology transformation: cloud migration, platform modernisation, or system consolidation. Needs dedicated full-time leadership.',
                timing: '6-12 month programme',
              },
              {
                scenario: 'Technology Crisis',
                description: 'Systems failing, team in chaos, security breach, or technical debt disaster. Need crisis management and rapid stabilisation.',
                timing: 'Emergency (days)',
              },
              {
                scenario: 'M&A Technology Integration',
                description: 'Post-acquisition technology integration. Consolidate platforms, merge teams, standardise systems. Needs full-time focus.',
                timing: 'Post-deal (3-9 months)',
              },
              {
                scenario: 'Platform Rebuild',
                description: 'Complete platform rebuild or major architecture overhaul. Too critical to manage part-time—needs full-time technical leadership.',
                timing: '6-18 month project',
              },
              {
                scenario: 'Pre-Exit Technology Fix',
                description: 'Preparing for sale or IPO but technology is a liability. Need to rapidly improve systems, team, and processes to pass due diligence.',
                timing: '6-12 months pre-exit',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does an Interim CTO Cost?</h2>
            <p className="text-gray-600 mt-4">Full-time temporary CTO day rates and total engagement costs</p>
          </div>
          <RoleCalculator role="cto" />
          <div className="mt-8 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">Typical Interim CTO Pricing</h3>
            <ul className="text-gray-600">
              <li><strong>Day Rate:</strong> £1,200-£2,000 per day (5 days per week, full-time)</li>
              <li><strong>Monthly Cost:</strong> £24,000-£40,000 (approx. 20 working days per month)</li>
              <li><strong>3-Month Engagement:</strong> £72,000-£120,000</li>
              <li><strong>6-Month Engagement:</strong> £144,000-£240,000</li>
              <li><strong>12-Month Engagement:</strong> £288,000-£480,000</li>
            </ul>
            <p className="text-sm text-gray-500">
              Day rates vary based on urgency, engagement length, complexity, and specialist expertise (security, AI/ML, fintech).
              Crisis situations and emergency placements may command premium rates. Most engagements are 3-6 months.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Interim vs Full-Time CTO</h2>
            <p className="text-gray-600 mt-4">Choose the right model for your needs</p>
          </div>
          <ServiceComparisonTable role="CTO" accentColor="blue" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CTO</h2>
            <p className="text-gray-600 mt-4">From first conversation to start date in 1-2 weeks</p>
          </div>
          <HireProcessStepper accentColor="blue" />
          <div className="mt-12 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">What to Look For</h3>
            <ul className="text-gray-600">
              <li><strong>Crisis Experience:</strong> Have they handled your exact situation? CTO departures, failing projects, transformations?</li>
              <li><strong>Immediate Availability:</strong> Can they start within 1-2 weeks? Full-time commitment for 3-12 months?</li>
              <li><strong>Decisive Leadership:</strong> Do they make hard decisions quickly? Restructure teams, kill projects, replace vendors?</li>
              <li><strong>Turnaround Track Record:</strong> Have they stabilised chaos and delivered defined outcomes before?</li>
              <li><strong>Clean Handover:</strong> Do they plan for knowledge transfer and smooth transition to permanent leadership?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Specialisations</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CTOs by Transformation Type</h2>
            <p className="text-gray-600 mt-4">Crisis-tested leaders with specific transformation expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Digital Transformation', description: 'Legacy modernisation, cloud migration, platform consolidation, API-first architecture', link: '/interim-jobs-tech' },
              { name: 'Security & Compliance', description: 'Post-breach recovery, SOC 2/ISO implementation, security architecture overhaul', link: '/interim-jobs-tech' },
              { name: 'M&A Integration', description: 'Post-acquisition tech integration, platform consolidation, team merger, system rationalisation', link: '/interim-jobs-tech' },
              { name: 'FinTech Turnaround', description: 'Payment platform stability, FCA compliance, fraud prevention, financial system recovery', link: '/interim-jobs-finance' },
              { name: 'SaaS Scale Crisis', description: 'Performance issues, multi-tenancy fixes, infrastructure collapse, scaling emergencies', link: '/interim-jobs-saas' },
              { name: 'HealthTech Compliance', description: 'HIPAA/GDPR remediation, NHS integration, clinical system certification, data governance', link: '/interim-jobs-healthcare' },
            ].map((specialisation, index) => (
              <Link key={index} href={specialisation.link} className="block bg-white p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{specialisation.name}</h3>
                <p className="text-gray-600 text-sm">{specialisation.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CTO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need an Interim CTO<br /><span className="text-blue-400">Immediately?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            We specialise in urgent placements. Crisis management, CTO vacancy, transformation leadership—match with experienced interim CTOs available to start within 1-2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">
              Find an Interim CTO
            </Link>
            <Link href="/interim-cto-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CTO Looking for Interim Roles
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
              <Link href="/interim-cfo-services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Interim CFO</Link>
              <Link href="/interim-cmo-services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Interim CMO</Link>
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Interim COO</Link>
              <Link href="/interim-cto-jobs-uk" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">CTO Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
