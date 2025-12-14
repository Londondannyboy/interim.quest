import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CFO | What is an Interim CFO? | Interim Quest',
  description: 'What is an Interim CFO? Learn about the role, career path, day rates (£800-£1,500/day), types of assignments, and how to become an interim Chief Financial Officer.',
  keywords: 'interim cfo, what is an interim cfo, interim cfo role, interim cfo day rate, interim cfo career, become interim cfo, interim cfo jobs',
  alternates: { canonical: 'https://interim.quest/interim-cfo' },
  openGraph: {
    title: 'Interim CFO | What is an Interim CFO? | Interim Quest',
    description: 'What is an Interim CFO? Learn about the role, career path, day rates, and types of assignments.',
    url: 'https://interim.quest/interim-cfo',
  },
}

export default function InterimCFOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-emerald-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Executive Career Path
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
                Interim CFO<br /><span className="text-emerald-400">Role & Career</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Full-time temporary CFO assignments. 3-12 month engagements at £800-£1,500/day. Leadership gaps, transformations, turnarounds, and critical transitions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/jobs" className="px-8 py-4 bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">
                  Browse CFO Jobs
                </Link>
                <Link href="/handler/sign-up" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Register Your Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Interim CFO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">What is an Interim CFO?</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              An <strong>Interim CFO</strong> is a highly experienced Chief Financial Officer who takes on full-time, temporary assignments for 3-12 months. Unlike fractional or part-time CFOs, interim CFOs work exclusively with one company at a time, providing dedicated executive leadership during critical periods.
            </p>
            <p className="text-gray-700 mb-4">
              Interim CFOs are brought in to fill leadership gaps, lead transformations, manage crises, or navigate complex transactions. They combine deep CFO experience with the ability to quickly assess situations, make decisions, and drive results in compressed timeframes.
            </p>
            <p className="text-gray-700">
              This is <strong>not part-time work</strong>. Interim CFOs are full-time, on-site (or hybrid) executives who take on the complete CFO role—leading the finance function, sitting on the executive team, and taking ultimate accountability for financial outcomes during their engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Assignments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CFO Assignments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                type: 'Vacancy Cover',
                description: 'CFO has left or on extended leave. You step in to maintain continuity while a permanent replacement is recruited. Typically 3-6 months.',
                dayRate: '£800-£1,200/day'
              },
              {
                type: 'M&A / Transaction',
                description: 'Lead financial due diligence, deal structuring, integration, or carve-out. Intense, high-stakes work requiring transaction expertise.',
                dayRate: '£1,000-£1,500/day'
              },
              {
                type: 'Turnaround / Restructuring',
                description: 'Company in distress. Cash crisis, creditor negotiations, operational restructuring. Requires crisis management experience and resilience.',
                dayRate: '£1,200-£1,500/day'
              },
              {
                type: 'Transformation / Change',
                description: 'Major ERP implementation, finance function rebuild, process transformation, or preparation for scale/exit. Project-led CFO work.',
                dayRate: '£900-£1,300/day'
              },
              {
                type: 'IPO / Fundraising',
                description: 'Prepare company for public markets or major funding round. Build investor materials, controls, and audit-ready processes.',
                dayRate: '£1,000-£1,500/day'
              },
              {
                type: 'Growth / Scale-Up',
                description: 'Fast-growing company needs interim CFO to build financial infrastructure, hire team, and establish controls before permanent hire.',
                dayRate: '£800-£1,200/day'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{item.type}</h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{item.dayRate}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Rates & Earning Potential */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Day Rates & Earning Potential</h2>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 p-8 rounded-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-emerald-700 font-bold uppercase tracking-wider mb-2">Typical Day Rate</p>
                <p className="text-4xl font-black text-emerald-900">£800-£1,500</p>
                <p className="text-sm text-emerald-600 mt-1">per day</p>
              </div>
              <div>
                <p className="text-sm text-emerald-700 font-bold uppercase tracking-wider mb-2">Annual Equivalent</p>
                <p className="text-4xl font-black text-emerald-900">£200k-£375k</p>
                <p className="text-sm text-emerald-600 mt-1">based on 250 billable days</p>
              </div>
              <div>
                <p className="text-sm text-emerald-700 font-bold uppercase tracking-wider mb-2">Assignment Length</p>
                <p className="text-4xl font-black text-emerald-900">3-12</p>
                <p className="text-sm text-emerald-600 mt-1">months typical</p>
              </div>
            </div>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Determines Your Day Rate?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Higher Rates (£1,200-£1,500/day)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Turnaround / crisis management experience</li>
                  <li>M&A / transaction track record</li>
                  <li>Listed company / IPO experience</li>
                  <li>Sector specialist (e.g., financial services)</li>
                  <li>Short notice / urgent assignments</li>
                  <li>London / high-cost locations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Standard Rates (£800-£1,100/day)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Vacancy cover / BAU focus</li>
                  <li>Scale-up / growth companies</li>
                  <li>Generalist CFO experience</li>
                  <li>Regional locations</li>
                  <li>Longer assignments (9-12 months)</li>
                  <li>Less urgent start dates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Interim CFO</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-black text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Build Permanent CFO Experience (10-15 years)</h3>
                  <p className="text-gray-600 text-sm">
                    You need substantive CFO or Finance Director experience in permanent roles first. Most interim CFOs have 15+ years in finance, with at least 5-7 years at CFO/FD level. You must have led teams, owned P&L accountability, and delivered tangible results.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-black text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Develop Specialisms & Battle Scars</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Interim CFOs are hired for specific situations. The best interims have deep experience in one or more of these:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• M&A (buy-side, sell-side, integration, carve-outs)</li>
                    <li>• Turnaround / restructuring / insolvency</li>
                    <li>• IPO preparation / listed company experience</li>
                    <li>• Private equity backed companies</li>
                    <li>• Major fundraising (Series A-C+)</li>
                    <li>• ERP / transformation projects</li>
                    <li>• Sector expertise (fintech, SaaS, manufacturing, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-black text-lg">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Make the Transition (Set Up as Limited Company)</h3>
                  <p className="text-gray-600 text-sm">
                    Most interim CFOs operate through a personal service company (PSC) or umbrella company. Set up your limited company, get professional indemnity insurance, and understand IR35 rules. Build a financial buffer—you'll have gaps between assignments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-black text-lg">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Build Your Network & Reputation</h3>
                  <p className="text-gray-600 text-sm">
                    Interim work is relationship-driven. Register with specialist interim agencies, maintain relationships with recruiters, stay visible on LinkedIn, and deliver exceptional results on every assignment. Your reputation is everything—most work comes from referrals and repeat clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-emerald-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-700 font-black text-lg">5</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Continuously Develop Your Skills</h3>
                  <p className="text-gray-600 text-sm">
                    The best interim CFOs are learning machines. Stay current with accounting standards, technology, and industry trends. Build skills in change management, stakeholder communication, and rapid diagnosis. You need to add value from day one—every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Needed */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Essential Skills for Interim CFOs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Technical & Financial Expertise</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>IFRS / UK GAAP / US GAAP accounting standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Financial modelling & forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Cash flow management & treasury</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Management reporting & KPIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Budgeting & planning processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Internal controls & risk management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Audit management (external & internal)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Leadership & Soft Skills</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Rapid diagnosis & problem-solving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Change management & transformation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Stakeholder management (board, investors, banks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Team leadership & capability building</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Commercial acumen & business partnering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Executive presence & credibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span>Resilience & adaptability (you'll face ambiguity)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-gray-900 mb-3">The "Hit the Ground Running" Mindset</h4>
            <p className="text-gray-600 text-sm">
              Unlike permanent CFOs who have months to settle in, interim CFOs must add value from day one. You need to quickly assess the situation, build credibility with stakeholders, prioritize ruthlessly, and deliver results in compressed timeframes. This requires confidence, commercial judgement, and the ability to make decisions with incomplete information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready for Your Next Interim CFO Role?</h2>
          <p className="text-xl text-gray-400 mb-10">Browse current interim CFO opportunities or register your profile to be matched with assignments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/jobs" className="px-10 py-5 bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">
              Browse CFO Jobs
            </Link>
            <Link href="/handler/sign-up" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Register Your Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/jobs" className="text-gray-600 hover:text-emerald-600 font-medium">Interim CFO Jobs</Link>
            <Link href="/interim-cmo" className="text-gray-600 hover:text-emerald-600 font-medium">Interim CMO Role</Link>
            <Link href="/interim-cto" className="text-gray-600 hover:text-emerald-600 font-medium">Interim CTO Role</Link>
            <Link href="/interim-coo" className="text-gray-600 hover:text-emerald-600 font-medium">Interim COO Role</Link>
            <Link href="/handler/sign-up" className="text-gray-600 hover:text-emerald-600 font-medium">Register as Interim</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
