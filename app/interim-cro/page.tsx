import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CRO UK | £1,400-£2,200/day | Full-Time Revenue Leadership',
  description: 'Hire an Interim CRO for 3-12 month full-time assignments. Expert revenue leadership for sales transformations, turnarounds, and leadership gaps. Day rates £1,400-£2,200.',
  keywords: 'interim cro, interim chief revenue officer, temporary cro, interim cro day rate, hire interim cro uk, sales transformation',
  alternates: { canonical: 'https://interim.quest/interim-cro' },
}

export default function InterimCROPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-green-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CRO<br /><span className="text-green-400">£1,400-£2,200/day</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time, on-site revenue leadership for 3-12 month assignments. Cover leadership gaps, drive sales transformations, rebuild revenue engines. Not part-time consulting.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-green-500 text-white font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">Hire an Interim CRO</Link>
                <Link href="/fractional-cro" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Need Part-Time? See Fractional</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CRO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CRO</strong> is a full-time Chief Revenue Officer hired for a fixed period—typically 3-12 months. They work exclusively for your organisation during critical revenue periods: leadership gaps, sales transformations, revenue turnarounds, or major go-to-market changes.</p>
          <p className="text-gray-600 mb-4">This is NOT part-time consulting or fractional work. Interim CROs are in your office 5 days a week, leading your sales team, closing deals, restructuring compensation, and driving revenue execution—just like a permanent hire, but for a defined period.</p>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Typical Day Rates</h3>
            <ul className="text-gray-600 space-y-1">
              <li><strong>£1,400-£1,700/day:</strong> SMEs, B2B sales, £5-20M ARR, UK market</li>
              <li><strong>£1,700-£2,000/day:</strong> Scale-ups, enterprise sales, £20-100M ARR, multi-region</li>
              <li><strong>£2,000-£2,200/day:</strong> FTSE 250, complex B2B, £100M+ ARR, global GTM</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Based on 5-day weeks. Some interims negotiate revenue-based bonuses for turnarounds. Rates typically decrease for longer assignments (6+ months).</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CRO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'CRO Departure', description: 'Your CRO or Sales VP has left and you need immediate revenue leadership while recruiting.' },
              { scenario: 'Revenue Crisis', description: 'Sales significantly underperforming and needs intensive turnaround leadership.' },
              { scenario: 'Go-to-Market Pivot', description: 'Major GTM strategy change requiring dedicated full-time focus to execute.' },
              { scenario: 'Sales Team Rebuild', description: 'Restructuring or rebuilding the entire sales organisation.' },
              { scenario: 'Market Expansion', description: 'Entering new markets or geographies with intensive sales buildout.' },
              { scenario: 'Pre-Funding Sprint', description: 'Need to demonstrate revenue growth for upcoming funding round.' },
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
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CRO Assignments</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Revenue Turnaround (30% of assignments)</h3>
              <p className="text-gray-600">Sales significantly underperforming. Need to diagnose issues (team, process, pricing, ICP), make tough decisions, rebuild sales engine. Intensive, high-pressure work. 6-12 months.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Leadership Gap Coverage (25%)</h3>
              <p className="text-gray-600">Your CRO/Sales VP departed. You need immediate revenue leadership while recruiting. Interim keeps pipeline moving, manages team, maintains momentum. 3-6 months.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">GTM Pivot/Market Expansion (20%)</h3>
              <p className="text-gray-600">Major go-to-market change: new ICP, new market, new sales model. Requires dedicated executive focus to rebuild sales motion from scratch. 6-9 months.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Sales Team Rebuild (15%)</h3>
              <p className="text-gray-600">Restructuring entire sales organization: new territories, new comp plans, new processes. Often follows underperformance or acquisition. 6-9 months.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Pre-Funding Revenue Sprint (10%)</h3>
              <p className="text-gray-600">Need to demonstrate revenue growth and predictability for upcoming funding round. Intensive pipeline building and conversion optimization. 4-6 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills Required for Interim CRO Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Core Revenue Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Sales strategy and GTM planning</li>
                <li>• Pipeline management and forecasting</li>
                <li>• Sales team building and coaching</li>
                <li>• Compensation plan design</li>
                <li>• Sales process optimization (MEDDIC, Sandler)</li>
                <li>• Revenue operations and tooling (Salesforce, Gong)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim-Specific Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rapid sales org assessment</li>
                <li>• Making tough team decisions quickly</li>
                <li>• Building trust with skeptical sales teams</li>
                <li>• Taking over active deals mid-cycle</li>
                <li>• Delivering results under board scrutiny</li>
                <li>• Working with sales recruitment firms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Commercial Acumen</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Pricing and packaging strategy</li>
                <li>• ICP definition and market segmentation</li>
                <li>• Customer success and retention</li>
                <li>• Revenue forecasting and modeling</li>
                <li>• Contract negotiation (enterprise deals)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Cross-Functional Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Alignment with Product and Marketing</li>
                <li>• Board-level revenue reporting</li>
                <li>• Channel and partner management</li>
                <li>• Sales enablement and training</li>
                <li>• CRM and sales tech stack optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Becoming an Interim CRO</h2>
          <div className="space-y-6">
            <p className="text-gray-600">Most Interim CROs have 15-25 years of sales and revenue experience. You don't start your career as an interim—you transition into it after building deep expertise, especially in turnarounds and high-growth environments.</p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Typical Path:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-green-500 min-w-[120px]">Years 0-5:</div>
                  <div className="text-gray-600">Account Executive → Senior AE. Build core sales skills: prospecting, discovery, closing. Carry quota, learn B2B sales mechanics.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-green-500 min-w-[120px]">Years 5-10:</div>
                  <div className="text-gray-600">Sales Manager or Head of Sales. Lead teams, own territory revenue, hire and coach reps. Learn what separates good from great sales orgs.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-green-500 min-w-[120px]">Years 10-15:</div>
                  <div className="text-gray-600">VP Sales or CRO at growth-stage company. Full revenue org leadership. Board exposure. Scale revenue from £5M to £50M+. Handle at least one transformation or rebuild.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-green-500 min-w-[120px]">Years 15+:</div>
                  <div className="text-gray-600">Transition to interim work. Pattern recognition across sales orgs. Comfortable parachuting into underperforming teams. Track record at 3+ companies.</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">What Makes Someone "Interim-Ready"?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Led revenue at 3+ companies (different stages/models)</li>
                <li>• Experience with both high-growth and turnaround situations</li>
                <li>• Comfortable making unpopular team decisions</li>
                <li>• Can diagnose sales issues rapidly (pipeline, process, people)</li>
                <li>• Don't need to be friends with the team to be effective</li>
                <li>• Happy to leave when performance is restored</li>
                <li>• Financial runway for gaps between assignments</li>
              </ul>
            </div>

            <p className="text-gray-600 italic">Most interim CROs work 9-11 months per year across 2-3 assignments. Between assignments they do advisory work, board roles, or invest in/advise early-stage companies.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CRO" accentColor="green" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need a Full-Time Interim CRO?</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your situation. We'll help you determine if you need a full-time interim or part-time fractional CRO—and connect you with the right person.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-green-500 text-white font-bold uppercase tracking-wider hover:bg-green-400 transition-colors">Find an Interim CRO</Link>
            <Link href="/fractional-cro" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CRO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
