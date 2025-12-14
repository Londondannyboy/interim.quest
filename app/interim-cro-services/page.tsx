import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const CRO_SERVICE_FAQS = [
  {
    question: 'What is an Interim CRO?',
    answer: 'An Interim CRO (Chief Revenue Officer) is a senior revenue executive who joins your company full-time for 3-12 months to fill a leadership gap, drive transformation, or navigate crisis. Unlike fractional or part-time leaders, interim CROs are on-site daily, providing hands-on leadership across sales, marketing, and revenue operations.',
  },
  {
    question: 'When should my company hire an Interim CRO?',
    answer: 'Hire an interim CRO when you have a CRO vacancy and need immediate leadership; your sales organization is underperforming and needs a turnaround; you\'re executing a go-to-market transformation; restructuring sales channels; overhauling revenue operations; or integrating revenue teams post-acquisition.',
  },
  {
    question: 'How much does an Interim CRO cost?',
    answer: 'Interim CROs in the UK typically charge £1,200-£2,000 per day. For a 6-month engagement (approximately 120 working days), total investment ranges from £144,000-£240,000. This includes immediate availability, proven expertise, and no long-term employment commitment.',
  },
  {
    question: 'What does an Interim CRO do?',
    answer: 'An Interim CRO provides full-time leadership across the revenue organization. They stabilize underperforming sales teams, implement new go-to-market strategies, restructure revenue operations, build pipeline discipline, align sales and marketing, develop revenue playbooks, and prepare the organization for permanent leadership.',
  },
  {
    question: 'How long does an Interim CRO engagement last?',
    answer: 'Most interim CRO engagements run 3-12 months. Short engagements (3-6 months) focus on crisis stabilization or filling gaps. Longer engagements (6-12 months) tackle transformation programmes or build new revenue capabilities while searching for permanent leadership.',
  },
  {
    question: 'Can an Interim CRO help with M&A revenue integration?',
    answer: 'Yes—interim CROs are particularly valuable during M&A. They integrate sales teams, unify revenue processes, rationalize go-to-market approaches, merge customer success functions, and establish combined revenue operations while permanent leadership is determined.',
  },
]

export const metadata: Metadata = {
  title: 'Interim CRO Services UK | Hire a Temporary CRO',
  description: 'Hire an Interim CRO for full-time temporary revenue leadership. 3-12 month engagements for CRO vacancies, sales turnarounds, and go-to-market transformation. £1,200-£2,000/day.',
  keywords: 'interim cro, interim cro services, hire interim cro, temporary cro, interim chief revenue officer, interim cro uk, interim revenue director, cro for hire',
  alternates: {
    canonical: 'https://interim.quest/interim-cro-services',
  },
  openGraph: {
    title: 'Interim CRO Services UK | Hire a Temporary CRO',
    description: 'Full-time temporary CRO leadership for 3-12 months. Fill leadership gaps, drive sales turnarounds, execute go-to-market transformation.',
    images: ['/images/interim-cro-services.jpg'],
    url: 'https://interim.quest/interim-cro-services',
  },
}

export default function InterimCROServicesPage() {
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
              <span className="inline-block bg-green-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Revenue Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CRO<br />
                <span className="text-green-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CRO</strong> for full-time temporary revenue leadership.
                Fill critical gaps, drive sales turnarounds, and execute go-to-market transformation.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-green-400">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Commitment</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1.2-2k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-green-500 text-black font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">
                  Hire an Interim CRO
                </Link>
                <Link href="#responsibilities" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Interim CRO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CRO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CRO</strong> (Chief Revenue Officer) is a senior revenue executive who joins your company <strong className="font-semibold text-gray-900">full-time for 3-12 months</strong> to provide temporary leadership during critical periods. They step into the role immediately—leading sales teams, driving revenue operations, and executing strategic initiatives while you search for permanent leadership or navigate transformation.
            </p>
            <p>
              This is not part-time consulting or advisory work. Interim CROs are hands-on operational leaders who take full accountability for revenue performance. They're in the office daily, leading team meetings, making tough decisions, and driving results just like a permanent CRO—but with a defined exit timeline.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-green-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "An interim CRO provides the leadership stability you need during transitions, without the 18-month hiring process or long-term employment commitment."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Full-Time Leadership, Fixed Duration</h3>
            <p>
              When your CRO leaves unexpectedly, your sales organization is underperforming, or you're executing a major revenue transformation, you can't afford a leadership vacuum. An interim CRO fills that gap immediately—providing experienced leadership while you navigate change, search for the right permanent hire, or complete your transformation programme.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section id="responsibilities" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CRO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Full-time operational leadership across your revenue organization</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Stabilize Revenue Operations',
                description: 'Take immediate control of underperforming sales teams. Diagnose issues, implement fixes, and restore pipeline health and forecast accuracy.',
                icon: '🎯',
              },
              {
                title: 'Execute Turnarounds',
                description: 'Drive rapid performance improvement in struggling sales organizations. Reset culture, upgrade talent, and rebuild revenue momentum.',
                icon: '🔄',
              },
              {
                title: 'Lead Transformation',
                description: 'Execute major go-to-market transformations. Restructure sales teams, implement new revenue models, or pivot market strategies.',
                icon: '⚙️',
              },
              {
                title: 'Revenue Operations Overhaul',
                description: 'Redesign and implement revenue operations. Rebuild CRM infrastructure, create forecasting discipline, and establish reporting systems.',
                icon: '📊',
              },
              {
                title: 'Channel Restructuring',
                description: 'Rationalize and restructure sales channels. Optimize direct sales, partner programs, and channel mix for maximum revenue efficiency.',
                icon: '🔀',
              },
              {
                title: 'Leadership Gap Coverage',
                description: 'Provide immediate CRO leadership when your permanent CRO leaves. Maintain stability and momentum while conducting executive search.',
                icon: '👥',
              },
              {
                title: 'M&A Revenue Integration',
                description: 'Integrate sales teams and revenue operations post-acquisition. Unify processes, consolidate systems, and realize revenue synergies.',
                icon: '🤝',
              },
              {
                title: 'Build Revenue Capabilities',
                description: 'Establish new revenue capabilities your organization lacks. Build enterprise sales, implement key account management, or create inside sales.',
                icon: '📈',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-green-300 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire an Interim CRO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Immediate Leadership Availability',
                description: 'Interim CROs can start within days, not months. When your CRO leaves or you need urgent revenue leadership, you can\'t wait 4-6 months for a permanent hire. Fill the gap immediately.',
                stat: '48hrs',
                statLabel: 'Time to Start',
              },
              {
                title: 'Proven Crisis & Transformation Experience',
                description: 'Interim CROs specialize in turnarounds and transformations. They\'ve fixed broken sales organizations, integrated acquisitions, and executed major changes—repeatedly. They know how to deliver results under pressure.',
                stat: '5+',
                statLabel: 'Turnarounds Led',
              },
              {
                title: 'No Long-Term Commitment',
                description: 'Get full-time executive leadership without permanent employment risk. 3-12 month engagements provide the leadership you need during critical periods, then a clean exit when transformation is complete.',
                stat: '3-12',
                statLabel: 'Month Terms',
              },
              {
                title: 'Objective External Perspective',
                description: 'Interim CROs bring fresh eyes and no internal politics. They make tough calls on underperforming team members, broken processes, and strategic pivots without internal baggage.',
                stat: '100%',
                statLabel: 'Objectivity',
              },
              {
                title: 'Bridge to Permanent Leadership',
                description: 'Maintain revenue momentum while conducting a thorough search for permanent CRO. Your interim CRO stabilizes operations, defines requirements, and can even help evaluate final candidates.',
                stat: '6-9',
                statLabel: 'Month Searches',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-green-500">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-green-600">{benefit.stat}</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire an Interim CRO?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CRO Vacancy or Unexpected Departure',
                description: 'Your CRO has left and you need immediate leadership. You can\'t afford 6-9 months without revenue leadership while conducting an executive search. Fill the gap now.',
                timing: 'Immediately',
              },
              {
                scenario: 'Sales Organization Turnaround',
                description: 'Your sales team is missing targets, pipeline is weak, and morale is low. You need an experienced leader to diagnose issues and drive rapid performance improvement.',
                timing: 'Before Q ends',
              },
              {
                scenario: 'Go-to-Market Transformation',
                description: 'Executing a major GTM change—new market entry, product pivot, or business model shift. Need full-time leadership to plan and execute transformation over 6-12 months.',
                timing: 'At planning stage',
              },
              {
                scenario: 'Revenue Operations Overhaul',
                description: 'Your revenue systems are broken—poor CRM adoption, no forecasting discipline, misaligned sales and marketing. Need someone to rebuild infrastructure and processes.',
                timing: 'When forecasts slip',
              },
              {
                scenario: 'Sales Channel Restructuring',
                description: 'Rationalizing channel strategy—optimizing direct vs partner, building enterprise from SMB, or creating inside sales. Major structural change requiring dedicated leadership.',
                timing: 'Pre-restructure',
              },
              {
                scenario: 'Post-M&A Revenue Integration',
                description: 'You\'ve acquired a company and need to integrate sales teams, unify revenue operations, and realize synergies. This is a 6-12 month programme requiring focused leadership.',
                timing: 'Week of close',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-green-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Fractional vs Interim vs Full-Time CRO</h2>
          </div>
          <ServiceComparisonTable role="CRO" accentColor="emerald" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CRO</h2>
          </div>
          <HireProcessStepper accentColor="emerald" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CRO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire an<br /><span className="text-green-400">Interim CRO?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your revenue leadership needs and we'll match you with experienced interim CROs available for immediate full-time engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-green-500 text-black font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">
              Find an Interim CRO
            </Link>
            <Link href="/interim-cro-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CRO Looking for Roles
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
              <Link href="/interim-cmo-services" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Interim CMO</Link>
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Interim COO</Link>
              <Link href="/interim-cfo-services" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Interim CFO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
