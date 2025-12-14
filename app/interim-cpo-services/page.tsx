import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const CPO_SERVICE_FAQS = [
  {
    question: 'What is an Interim CPO?',
    answer: 'An Interim CPO is an experienced Chief Product Officer who joins your company full-time for a fixed period, typically 3-12 months. They provide complete product leadership during critical transitions—CPO vacancy, product transformation, digital pivot, or organisational restructuring.',
  },
  {
    question: 'When should my company hire an Interim CPO?',
    answer: 'Hire an Interim CPO when: your CPO has left and you need immediate leadership; you\'re undergoing a product transformation or digital pivot; you\'re restructuring the product organisation; managing M&A product integration; or leading a crisis recovery. Interim CPOs excel at time-bound, high-stakes situations.',
  },
  {
    question: 'How much does an Interim CPO cost?',
    answer: 'Interim CPOs typically charge £1,200-£2,000 per day in the UK. For a 3-month engagement (60 days), expect £72,000-£120,000. For 6 months (120 days), £144,000-£240,000. This includes full-time commitment without permanent salary, benefits, equity, or notice period obligations.',
  },
  {
    question: 'What does an Interim CPO do?',
    answer: 'An Interim CPO provides complete product leadership: sets vision and strategy, owns the roadmap, leads and restructures teams, manages stakeholders, drives transformation initiatives, stabilises product operations, and builds sustainable processes. They deliver measurable outcomes within a defined timeframe.',
  },
  {
    question: 'How is an Interim CPO different from a fractional CPO?',
    answer: 'Interim CPOs work full-time for 3-12 months on critical transitions—leadership gaps, transformations, crisis. Fractional CPOs work part-time (1-3 days/week) for ongoing strategic support. Interim is for temporary full ownership; fractional is for sustained part-time leadership.',
  },
  {
    question: 'How long does an Interim CPO engagement last?',
    answer: 'Typically 3-12 months. Short engagements (3-4 months) suit leadership gaps or assessment phases. Medium engagements (6 months) enable transformation delivery. Longer engagements (9-12 months) support major pivots or complete organisational rebuilds. Extensions are possible if needed.',
  },
]

export const metadata: Metadata = {
  title: 'Interim CPO Services UK | Hire a Temporary CPO',
  description: 'Hire an Interim CPO for full-time temporary product leadership. Expert CPOs for leadership gaps, product transformation, digital pivot, and organisational restructuring. 3-12 month engagements.',
  keywords: 'interim cpo, interim cpo services, hire interim cpo, temporary cpo, interim chief product officer, interim cpo uk, interim product director',
  alternates: {
    canonical: 'https://interim.quest/interim-cpo-services',
  },
  openGraph: {
    title: 'Interim CPO Services UK | Hire a Temporary CPO',
    description: 'Hire an Interim CPO for full-time temporary product leadership. 3-12 month engagements for transformation and leadership gaps.',
    images: ['/images/interim-cpo-services.jpg'],
    url: 'https://interim.quest/interim-cpo-services',
  },
}

export default function InterimCPOServicesPage() {
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
              <span className="inline-block bg-purple-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Product Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CPO<br />
                <span className="text-purple-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CPO</strong> for full-time temporary product leadership.
                Expert leadership for CPO vacancies, product transformation, digital pivot, and organisational restructuring.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-purple-400">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Commitment</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">15+ Yrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Experience</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">
                  Hire an Interim CPO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Interim CPO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CPO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CPO</strong> is an experienced Chief Product Officer who joins your company full-time for a fixed period—typically 3-12 months. They provide complete product leadership during critical transitions: CPO vacancy, product transformation, digital pivot, M&A integration, or crisis recovery.
            </p>
            <p>
              Unlike consultants who advise or fractional executives who work part-time, an Interim CPO is your full-time product leader. They own the vision, lead the team, drive transformation, and deliver measurable outcomes—with complete accountability and a defined exit timeline.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-purple-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "An Interim CPO steps in when you need complete product leadership immediately—no recruitment delay, no permanent commitment, just experienced leadership when it matters most."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">When Full-Time Leadership is Non-Negotiable</h3>
            <p>
              Some situations demand full-time attention: your CPO just left and the team needs direction; you are pivoting the entire product strategy; you are restructuring the product organisation; or you are managing a crisis that requires immediate, sustained leadership.
            </p>
            <p>
              An Interim CPO provides the same leadership intensity as a permanent CPO—but with the flexibility to step in fast, drive transformation, and hand over to permanent leadership when the time is right.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CPO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Full-time leadership across all product functions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Product Vision & Strategy',
                description: 'Define or pivot product vision and strategy. Align product direction with business transformation objectives and market repositioning.',
                icon: '🎯',
              },
              {
                title: 'Leadership Stabilisation',
                description: 'Step into CPO vacancy immediately. Provide stability, direction, and confidence to product teams during leadership transitions.',
                icon: '⚓',
              },
              {
                title: 'Team Restructuring',
                description: 'Assess and restructure product organisation. Make difficult decisions about roles, reporting lines, and team composition.',
                icon: '👥',
              },
              {
                title: 'Transformation Delivery',
                description: 'Drive product transformation initiatives. Deliver measurable change in product processes, strategy, or organisational structure.',
                icon: '🚀',
              },
              {
                title: 'Stakeholder Management',
                description: 'Manage board, investors, CEO, and cross-functional leaders. Provide confident leadership during high-stakes situations.',
                icon: '🤝',
              },
              {
                title: 'Crisis Recovery',
                description: 'Lead product function through crisis. Stabilise operations, restore confidence, and build sustainable path forward.',
                icon: '🛡️',
              },
              {
                title: 'M&A Integration',
                description: 'Integrate product teams and roadmaps post-acquisition. Harmonise processes, tools, and culture across merged organisations.',
                icon: '🔗',
              },
              {
                title: 'Digital Transformation',
                description: 'Lead shift from traditional to digital product delivery. Implement modern product practices, tools, and methodologies.',
                icon: '⚡',
              },
              {
                title: 'Permanent Hire Transition',
                description: 'Conduct search for permanent CPO while maintaining leadership. Ensure smooth handover and knowledge transfer.',
                icon: '🔄',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-purple-300 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire an Interim CPO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Immediate Leadership',
                description: 'Start within days, not months. Interim CPOs are available immediately—no recruitment process, no notice period, no onboarding delay. Get experienced leadership when you need it most.',
                stat: '2-7',
                statLabel: 'Days to Start',
              },
              {
                title: 'No Permanent Commitment',
                description: 'Fixed-term engagement with defined outcomes. No salary, benefits, equity, or notice period obligations. Pay only for the duration you need—typically 3-12 months.',
                stat: '3-12',
                statLabel: 'Month Terms',
              },
              {
                title: 'Transformation Expertise',
                description: 'Interim CPOs specialise in leading change. They have delivered product transformations, organisational restructures, and crisis recoveries multiple times across different companies.',
                stat: '10+',
                statLabel: 'Transformations',
              },
              {
                title: 'Complete Accountability',
                description: 'Full-time ownership of product outcomes. An Interim CPO takes complete responsibility for product strategy, team performance, and delivery—with measurable results tied to their tenure.',
                stat: '100%',
                statLabel: 'Ownership',
              },
              {
                title: 'Experienced Crisis Leadership',
                description: 'Interim CPOs have led through difficult situations before. They bring calm, confident leadership during uncertainty—making tough decisions without emotional attachment.',
                stat: '15+',
                statLabel: 'Years Leading',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-purple-500">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-purple-600">{benefit.stat}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire an Interim CPO?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CPO Vacancy',
                description: 'Your CPO has left unexpectedly. The product team needs immediate leadership while you conduct a proper search for a permanent replacement.',
                timing: 'Immediate',
              },
              {
                scenario: 'Product Transformation',
                description: 'Major shift in product strategy, architecture, or delivery model. Need experienced leadership to drive transformation and embed new practices.',
                timing: '6-12 months',
              },
              {
                scenario: 'Digital Pivot',
                description: 'Transitioning from traditional to digital products. Require expertise in modern product management, agile delivery, and digital customer experience.',
                timing: '6-9 months',
              },
              {
                scenario: 'Team Restructuring',
                description: 'Product organisation needs significant restructuring. Interim CPO assesses current state, makes difficult decisions, and implements new structure.',
                timing: '3-6 months',
              },
              {
                scenario: 'M&A Integration',
                description: 'Post-acquisition product integration. Harmonise teams, roadmaps, processes, and culture across merged product organisations.',
                timing: '4-8 months',
              },
              {
                scenario: 'Crisis Recovery',
                description: 'Product function in crisis—failed launches, team dysfunction, lost confidence. Need experienced leader to stabilise and rebuild.',
                timing: '3-6 months',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-purple-600 uppercase tracking-wider">Typical Duration: {item.timing}</span>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does an Interim CPO Cost?</h2>
            <p className="text-gray-600 mt-4">Transparent day rates for full-time temporary leadership</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Day Rate</div>
              <div className="text-3xl font-black text-gray-900 mb-1">£1,200-£2,000</div>
              <div className="text-sm text-gray-600">Per day, full-time commitment</div>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">3 Months</div>
              <div className="text-3xl font-black text-gray-900 mb-1">£72k-£120k</div>
              <div className="text-sm text-gray-600">~60 days for leadership gap</div>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">6 Months</div>
              <div className="text-3xl font-black text-gray-900 mb-1">£144k-£240k</div>
              <div className="text-sm text-gray-600">~120 days for transformation</div>
            </div>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-gray-900 mb-2">What's Included</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Full-time commitment (5 days/week) for the engagement duration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Complete product leadership—strategy, team, roadmap, stakeholders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>No recruitment fees, salary, benefits, equity, or notice period costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Defined outcomes and exit plan from day one</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Permanent CPO</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left p-4 font-bold text-gray-900">Factor</th>
                  <th className="text-left p-4 font-bold text-purple-600 bg-purple-50">Interim CPO</th>
                  <th className="text-left p-4 font-bold text-gray-900">Fractional CPO</th>
                  <th className="text-left p-4 font-bold text-gray-900">Permanent CPO</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Time Commitment</td>
                  <td className="p-4 bg-purple-50">Full-time (5 days/week)</td>
                  <td className="p-4">Part-time (1-3 days/week)</td>
                  <td className="p-4">Full-time permanent</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Duration</td>
                  <td className="p-4 bg-purple-50">3-12 months fixed-term</td>
                  <td className="p-4">Ongoing monthly rolling</td>
                  <td className="p-4">Permanent with notice period</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Day Rate</td>
                  <td className="p-4 bg-purple-50">£1,200-£2,000/day</td>
                  <td className="p-4">£800-£1,400/day</td>
                  <td className="p-4">N/A (salaried)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">6 Month Cost</td>
                  <td className="p-4 bg-purple-50">£144k-£240k</td>
                  <td className="p-4">£40k-£70k</td>
                  <td className="p-4">£85k-£125k + benefits</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4 bg-purple-50">Leadership gaps, transformation, crisis</td>
                  <td className="p-4">Strategic support, advisory</td>
                  <td className="p-4">Long-term product ownership</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Start Time</td>
                  <td className="p-4 bg-purple-50">2-7 days</td>
                  <td className="p-4">1-2 weeks</td>
                  <td className="p-4">3-6 months (recruitment)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">Exit Terms</td>
                  <td className="p-4 bg-purple-50">Defined end date, extensions possible</td>
                  <td className="p-4">30 days notice either side</td>
                  <td className="p-4">3-6 months notice, severance risk</td>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CPO</h2>
          </div>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-black text-xl">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Define Your Need (Day 1)</h3>
                <p className="text-gray-600">Clarify the situation: CPO vacancy, transformation, crisis? What outcomes do you need in 3-12 months? This shapes the brief and candidate requirements.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-black text-xl">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Match with Interim CPO (Days 1-3)</h3>
                <p className="text-gray-600">We match you with experienced Interim CPOs who have delivered similar transformations. Review profiles, expertise, and previous engagement outcomes.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-black text-xl">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Interview & Assess (Days 3-5)</h3>
                <p className="text-gray-600">Meet candidates, assess fit, discuss approach. Interim CPOs present their assessment and delivery plan for your specific situation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-black text-xl">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Agree Terms (Days 5-7)</h3>
                <p className="text-gray-600">Define scope, duration, day rate, and success criteria. Create clear contract with defined outcomes and exit plan. Typical 3-12 month term.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-black text-xl">5</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Start Immediately (Day 7+)</h3>
                <p className="text-gray-600">Interim CPO starts full-time. First 30 days: assess situation, build stakeholder relationships, define priorities. Then drive delivery against agreed outcomes.</p>
              </div>
            </div>
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
          <FAQ items={CPO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need Full-Time Product Leadership<br /><span className="text-purple-400">Right Now?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your situation—CPO vacancy, transformation, or crisis—and we'll match you with experienced Interim CPOs who can start within days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">
              Find an Interim CPO
            </Link>
            <Link href="/interim-cpo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CPO Looking for Roles
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
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/interim-cmo-services" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Interim CMO</Link>
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Interim COO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
