import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, COO_SERVICE_FAQS } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim COO Services UK | Hire a Temporary COO',
  description: 'Hire an Interim COO for full-time temporary operations leadership. Expert COOs for leadership gaps, operational turnarounds, restructuring, and transformation projects. 3-12 month engagements.',
  keywords: 'interim coo, interim coo services, hire interim coo, temporary coo, interim chief operating officer, interim coo uk, interim operations director',
  alternates: {
    canonical: 'https://interim.quest/interim-coo-services',
  },
  openGraph: {
    title: 'Interim COO Services UK | Hire a Temporary COO',
    description: 'Hire an Interim COO for full-time temporary operations leadership. Expert COOs for leadership gaps and operational transformation.',
    images: ['/images/interim-coo-services.jpg'],
    url: 'https://interim.quest/interim-coo-services',
  },
}

export default function InterimCOOServicesPage() {
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
              <span className="inline-block bg-orange-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Operations Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim COO<br />
                <span className="text-orange-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim COO</strong> for full-time temporary operations leadership.
                Expert COOs for leadership gaps, operational turnarounds, restructuring, and transformation projects.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-orange-400">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Commitment</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1.2-2K</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">
                  Hire a Interim COO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Interim COO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is a Interim COO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim COO</strong> is an experienced Chief Operating Officer who joins your company on a full-time, temporary basis—typically for 3-12 months. They provide immediate operational leadership during critical periods: COO vacancies, operational turnarounds, rapid scale-up, restructuring, or crisis management.
            </p>
            <p>
              Unlike consultants who advise from the sidelines, an interim COO becomes your operational leader. They join the executive team, take full ownership of operations, drive transformation programmes, and deliver measurable results—all within a defined timeframe.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-orange-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "An interim COO delivers the operational leadership and transformation your business needs—without the 12-month recruitment cycle."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Full-Time Leadership When You Need It Most</h3>
            <p>
              Interim COOs are deployed during periods of change, crisis, or opportunity. Whether you are covering a sudden departure, executing a turnaround, integrating an acquisition, or preparing for rapid growth, an interim COO brings the experience to lead through complexity.
            </p>
            <p>
              They've done it before—multiple times. They diagnose problems quickly, build high-performing teams, implement robust processes, and deliver the operational transformation your business requires. When the engagement ends, you have a stronger, more scalable operation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does a Interim COO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Core responsibilities your interim COO will own</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Operational Turnaround',
                description: 'Diagnose operational failures, implement corrective actions, and stabilise underperforming operations. Drive immediate improvements in productivity, quality, and efficiency.',
                icon: '🎯',
              },
              {
                title: 'Transformation Leadership',
                description: 'Lead large-scale operational transformation programmes. Restructure operations, implement new systems, and drive organisational change.',
                icon: '⚙️',
              },
              {
                title: 'Crisis Management',
                description: 'Take control during operational crises—supply chain failures, quality issues, customer service breakdowns. Stabilise operations and prevent recurrence.',
                icon: '👥',
              },
              {
                title: 'M&A Integration',
                description: 'Lead post-merger operational integration. Harmonise processes, consolidate systems, realise synergies, and integrate teams across merged entities.',
                icon: '📋',
              },
              {
                title: 'Scale-Up Execution',
                description: 'Build the operational infrastructure for rapid growth. Implement scalable processes, systems, and structures that support 2-5x revenue expansion.',
                icon: '🛠️',
              },
              {
                title: 'Cost Reduction Programmes',
                description: 'Identify and eliminate operational inefficiencies. Renegotiate supplier contracts, optimise processes, and deliver measurable cost savings.',
                icon: '📊',
              },
              {
                title: 'Interim Leadership',
                description: 'Fill COO vacancies while you recruit permanently. Maintain operational continuity, drive key initiatives, and keep the business moving forward.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-orange-300 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire a Interim COO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Immediate Operational Leadership',
                description: 'Fill critical COO vacancies within 2-3 weeks instead of 6-12 months. Maintain operational continuity and momentum while you search for a permanent hire or during periods of transformation.',
                stat: '2-3',
                statLabel: 'Weeks to Start',
              },
              {
                title: 'Crisis-Ready Expertise',
                description: 'Interim COOs have led through operational crises, turnarounds, and transformations multiple times. They diagnose problems quickly and implement proven solutions under pressure.',
                stat: '10+',
                statLabel: 'Turnarounds Led',
              },
              {
                title: 'Transformation Delivery',
                description: 'Drive major operational change programmes—restructuring, M&A integration, system implementations, efficiency drives. Interim COOs deliver measurable results within defined timeframes.',
                stat: '3-12',
                statLabel: 'Month Engagements',
              },
              {
                title: 'No Long-Term Commitment',
                description: 'Engage for exactly as long as you need. Whether it\'s a 3-month turnaround or 12-month transformation, you get senior leadership without permanent employment obligations.',
                stat: 'Zero',
                statLabel: 'Long-Term Commitment',
              },
              {
                title: 'Cross-Industry Experience',
                description: 'Interim COOs have worked across multiple sectors and business models. They bring best practices, benchmarking data, and proven methodologies from diverse operational challenges.',
                stat: '5+',
                statLabel: 'Industries Covered',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-orange-500">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-orange-600">{benefit.stat}</div>
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
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire a Interim COO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none mb-8">
            <p>
              Interim COOs are deployed during critical operational moments. Here are the most common scenarios requiring full-time temporary operational leadership:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'COO Vacancy or Departure',
                description: 'Your COO has left suddenly or during a planned transition. You need immediate operational leadership while recruiting a permanent replacement to maintain continuity.',
                timing: 'Immediate deployment',
              },
              {
                scenario: 'Operational Turnaround',
                description: 'Operations are failing—missed deadlines, quality issues, cost overruns, customer complaints. You need an experienced leader to diagnose problems and implement fixes fast.',
                timing: 'Within 2 weeks',
              },
              {
                scenario: 'Rapid Scale-Up',
                description: 'You\'re scaling 2-5x and need to build operational infrastructure quickly. An interim COO implements processes, systems, and structures that support aggressive growth.',
                timing: 'Pre-growth phase',
              },
              {
                scenario: 'M&A Integration',
                description: 'You\'ve acquired a business and need to integrate operations. An interim COO leads the integration, harmonises processes, and realises synergies within 6-12 months.',
                timing: 'At deal close',
              },
              {
                scenario: 'Restructuring Programme',
                description: 'You\'re restructuring operations—closing sites, consolidating functions, implementing redundancies. An interim COO provides objective leadership through difficult change.',
                timing: 'Before announcement',
              },
              {
                scenario: 'Supply Chain Crisis',
                description: 'Major supply chain disruption, quality failures, or logistics breakdowns. An interim COO takes control, stabilises operations, and prevents recurrence.',
                timing: 'Immediate',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-orange-600 uppercase tracking-wider">{item.timing}</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does an Interim COO Cost?</h2>
            <p className="text-gray-600 mt-4">Full-time temporary COO leadership pricing</p>
          </div>
          <div className="prose prose-gray max-w-none">
            <div className="bg-gray-50 p-8 border-l-4 border-orange-500 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-4">Typical Interim COO Day Rates</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-black text-orange-600">£1,200-£1,500</div>
                  <div className="text-sm text-gray-600 mt-1">Mid-sized companies</div>
                  <div className="text-xs text-gray-500 mt-2">£10M-£50M revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange-600">£1,500-£1,800</div>
                  <div className="text-sm text-gray-600 mt-1">Large companies</div>
                  <div className="text-xs text-gray-500 mt-2">£50M-£200M revenue</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange-600">£1,800-£2,000</div>
                  <div className="text-sm text-gray-600 mt-1">Complex turnarounds</div>
                  <div className="text-xs text-gray-500 mt-2">Crisis or transformation</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900">Engagement Costs</h3>
            <ul className="text-gray-600">
              <li><strong>3-month engagement:</strong> £72,000-£120,000 (60 working days)</li>
              <li><strong>6-month engagement:</strong> £144,000-£240,000 (120 working days)</li>
              <li><strong>12-month engagement:</strong> £288,000-£480,000 (240 working days)</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8">What's Included</h3>
            <ul className="text-gray-600">
              <li>Full-time operational leadership (5 days/week)</li>
              <li>Executive team membership</li>
              <li>No employer NI, pension, or benefits costs</li>
              <li>No notice period or redundancy liability</li>
              <li>Flexible engagement duration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Full-Time COO</h2>
            <p className="text-gray-600 mt-4">Choose the right operational leadership model</p>
          </div>
          <ServiceComparisonTable role="COO" accentColor="orange" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim COO</h2>
            <p className="text-gray-600 mt-4">From first conversation to start date in 2-3 weeks</p>
          </div>
          <HireProcessStepper accentColor="orange" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={COO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire an<br /><span className="text-orange-400">Interim COO?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your operational challenge and we'll match you with experienced interim COOs who have led similar transformations, turnarounds, or transitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">
              Find an Interim COO
            </Link>
            <Link href="/interim-coo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a COO Looking for Interim Roles
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
              <Link href="/interim-cfo-services" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Interim CFO</Link>
              <Link href="/interim-cmo-services" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Interim CMO</Link>
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/interim-coo-jobs-uk" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">COO Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
