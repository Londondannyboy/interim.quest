import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ, CEO_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim CEO Jobs UK | Chief Executive Roles | Interim Quest',
  description: 'Find interim CEO jobs in the UK. Chief Executive, Managing Director, and General Manager roles. £2,000-£3,500 daily rates. Full-time temporary leadership for turnarounds, transitions, and transformations.',
  keywords: ['interim ceo jobs', 'interim chief executive jobs', 'interim ceo uk', 'interim managing director jobs'],
  openGraph: {
    title: 'Interim CEO Jobs UK | Chief Executive Roles | Interim Quest',
    description: 'Full-time temporary CEO leadership for critical transitions and turnarounds.',
    type: 'website',
  },
}

const ceoRoles = [
  { name: 'Interim CEO', description: 'Full executive leadership', rateRange: '£2,000-£3,500/day', demand: 'High' },
  { name: 'Interim Managing Director', description: 'Operational & strategic leadership', rateRange: '£1,500-£2,500/day', demand: 'High' },
  { name: 'Interim General Manager', description: 'Business unit leadership', rateRange: '£1,200-£2,000/day', demand: 'Medium' },
  { name: 'Interim Chief Executive (NHS/Public)', description: 'Public sector leadership', rateRange: '£1,200-£1,800/day', demand: 'Growing' },
  { name: 'Interim Country Manager', description: 'Geographic leadership', rateRange: '£1,500-£2,200/day', demand: 'Medium' },
  { name: 'Interim Divisional CEO', description: 'Division/subsidiary leadership', rateRange: '£1,800-£2,800/day', demand: 'High' },
]

const ceoScenarios = [
  { name: 'Founder/CEO Departure', icon: '🔄', description: 'Immediate coverage after sudden exit' },
  { name: 'PE/VC Turnaround', icon: '📈', description: 'Portfolio company rescue' },
  { name: 'Pre/Post M&A', icon: '🤝', description: 'Acquisition leadership' },
  { name: 'Crisis Management', icon: '🚨', description: 'Financial/reputational crisis' },
  { name: 'Bridge to Permanent', icon: '🌉', description: 'Temporary leadership coverage' },
  { name: 'Board-Mandated Change', icon: '⚖️', description: 'Leadership restructuring' },
]

const ceoSkills = [
  'Turnaround & Transformation Leadership', 'Board & Investor Relations', 'P&L Accountability',
  'Strategic Planning & Execution', 'Stakeholder Management', 'Crisis Communications',
  'PE/VC Reporting', 'M&A Integration', 'Change Management'
]

const relatedSearches = [
  'Interim CEO Jobs UK', 'Interim Chief Executive', 'Interim Managing Director',
  'Interim CEO London', 'PE-Backed Interim CEO', 'Turnaround CEO Jobs',
  'Interim CEO Day Rate', 'Interim General Manager', 'Interim Country Manager'
]

// Same video as homepage
const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

async function getCEOStats() {
  try {
    const sql = createDbQuery()
    const [total, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%CEO%' OR title ILIKE '%CEO%' OR title ILIKE '%Chief Executive%' OR title ILIKE '%Managing Director%')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND (role_category ILIKE '%CEO%' OR title ILIKE '%CEO%') AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      total: parseInt((total[0] as any)?.count || '0'),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '2500'))
    }
  } catch (error) {
    return { total: 15, avgDayRate: 2500 }
  }
}

export default async function CEOJobsPage() {
  const stats = await getCEOStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <VideoHeroBackground
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          fallbackGradient={true}
        />

        {/* Bottom-aligned content with glass panel */}
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Left: Main content */}
              <div className="max-w-2xl">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
                  <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors text-sm tracking-wide">
                    <span className="mr-2">←</span> Back to Home
                  </Link>

                  <span className="inline-block bg-blue-500/20 backdrop-blur text-blue-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.total}+ CEO Leadership Roles
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Interim<br />
                    <span className="text-blue-300">CEO</span> Jobs UK
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    Full-time temporary executive leadership for companies in transition. Lead turnarounds, manage crises, and drive transformations. £2,000-£3,500 daily rates.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/interim-jobs?role=CEO"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse CEO Jobs →
                    </Link>
                    <Link
                      href="/handler/sign-up"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Get Notified
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="w-full lg:w-auto">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">{stats.total}+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Active Roles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">6-12m</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">85%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">PE/VC Backed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Board - Moved up after hero */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Opportunities</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim CEO Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.total}+ CEO and executive leadership opportunities</p>
          </div>
          <EmbeddedJobBoard defaultDepartment="Executive" />
        </div>
      </section>

      {/* CEO Roles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim CEO Roles</h2>
            <p className="text-xl text-gray-500">Executive leadership positions available</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ceoRoles.map((role) => (
              <div key={role.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{role.description}</p>
                <p className="text-blue-700 font-semibold mb-1">{role.rateRange}</p>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Demand: {role.demand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Scenarios */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Common Scenarios</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">When Companies Hire Interim CEOs</h2>
            <p className="text-xl text-gray-500">Situations requiring executive leadership</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {ceoScenarios.map((scenario) => (
              <div key={scenario.name} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all">
                <span className="text-4xl mb-3 block">{scenario.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{scenario.name}</h3>
                <p className="text-gray-600 text-xs">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Skills</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In-Demand CEO Skills</h2>
            <p className="text-xl text-gray-500">Skills that command premium rates</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {ceoSkills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why CEO */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Interim CEO?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">PE/VC Turnarounds</h3>
              <p className="text-gray-600">
                Private equity and venture capital firms hire interim CEOs to rescue underperforming portfolio companies. Full-time engagement for 6-12 months to stabilize operations, restructure teams, and prepare for exit or additional funding rounds.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Transitions</h3>
              <p className="text-gray-600">
                Interim CEOs provide immediate coverage after sudden founder or CEO departures. These are temporary, full-time assignments requiring urgent action to maintain business continuity while permanent recruitment proceeds.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">M&A Integration</h3>
              <p className="text-gray-600">
                Companies hire interim CEOs for 6-12 months pre-acquisition to prepare for sale or post-merger to integrate operations, align cultures, and deliver synergies while maintaining business performance during transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Tax Planning</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IR35 Calculator</h2>
            <p className="text-xl text-gray-500">Understand your take-home as an interim CEO</p>
          </div>
          <IR35Calculator defaultDayRate={2500} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">CEO Interim FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about interim CEO roles</p>
          </div>
          <FAQ items={CEO_FAQS} title="" />
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map((search) => (
              <Link
                key={search}
                href={`/interim-jobs?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm border border-gray-200"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/interim-ceo"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Interim CEO Services</h3>
              <p className="text-sm text-gray-600">Learn about interim CEO roles</p>
            </Link>
            <Link
              href="/interim-jobs"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">All Interim Jobs</h3>
              <p className="text-sm text-gray-600">Browse all opportunities</p>
            </Link>
            <Link
              href="/interim-cfo-jobs-uk"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Interim CFO Jobs</h3>
              <p className="text-sm text-gray-600">Finance leadership roles</p>
            </Link>
            <Link
              href="/interim-coo-jobs-uk"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Interim COO Jobs</h3>
              <p className="text-sm text-gray-600">Operations leadership roles</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Interim CEO Leadership?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            {stats.total}+ CEO, Managing Director, and Chief Executive opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs?role=CEO"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse CEO Jobs
            </Link>
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Join the Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
