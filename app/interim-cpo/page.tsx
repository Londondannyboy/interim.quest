import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CPO UK | £1,500-£2,200/day | Full-Time Product Leadership',
  description: 'Hire an Interim CPO for 3-12 month full-time assignments. Expert product leadership for transformations, launches, and leadership gaps. Day rates £1,500-£2,200.',
  keywords: 'interim cpo, interim chief product officer, temporary cpo, interim cpo day rate, hire interim cpo uk, cpo transformation',
  alternates: { canonical: 'https://interim.quest/interim-cpo' },
}

export default function InterimCPOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-purple-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CPO<br /><span className="text-purple-400">£1,500-£2,200/day</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time, on-site product leadership for 3-12 month assignments. Cover leadership gaps, drive transformations, launch new products. Not part-time consulting.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">Hire an Interim CPO</Link>
                <Link href="/fractional-cpo" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Need Part-Time? See Fractional</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CPO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CPO</strong> is a full-time Chief Product Officer hired for a fixed period—typically 3-12 months. They work exclusively for your organisation during critical product periods: leadership gaps, major launches, transformations, or turnarounds.</p>
          <p className="text-gray-600 mb-4">This is NOT part-time consulting or fractional work. Interim CPOs are in your office 5 days a week, leading your product team, making decisions, and driving execution just like a permanent hire—but for a defined period.</p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Typical Day Rates</h3>
            <ul className="text-gray-600 space-y-1">
              <li><strong>£1,500-£1,800/day:</strong> Scale-ups, Series A-B companies, UK market focus</li>
              <li><strong>£1,800-£2,200/day:</strong> Enterprise, global products, complex B2B platforms</li>
              <li><strong>£2,200+/day:</strong> FTSE 100, major transformations, high-stakes launches</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Based on 5-day weeks. Rates typically decrease for longer assignments (6+ months).</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CPO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'CPO Departure', description: 'Your CPO has left and you need immediate product leadership while recruiting.' },
              { scenario: 'Major Product Launch', description: 'Flagship product launch requiring dedicated full-time executive focus.' },
              { scenario: 'Strategic Pivot', description: 'Significant business model or product strategy pivot needing intensive leadership.' },
              { scenario: 'Product Turnaround', description: 'Product underperforming and needs full-time attention to diagnose and fix.' },
              { scenario: 'M&A Integration', description: 'Integrating product portfolios and teams post-acquisition.' },
              { scenario: 'Product Org Build', description: 'Building product function from scratch with intensive hiring and process setup.' },
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
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CPO Assignments</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Leadership Gap Coverage (40% of assignments)</h3>
              <p className="text-gray-600">Your CPO departed. You need immediate product leadership while recruiting. Interim keeps product moving, maintains team morale, does not disrupt roadmap. Typical duration: 3-6 months.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Product Transformation (30%)</h3>
              <p className="text-gray-600">Overhauling product strategy, rebuilding product org, implementing new methodologies (Continuous Discovery, Dual-Track Agile). Requires full-time leadership to drive change. 6-12 months.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Major Launch/Pivot (20%)</h3>
              <p className="text-gray-600">Launching flagship product, entering new market, or pivoting business model. Needs dedicated executive focus. Cannot be done part-time. 4-9 months.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Product Turnaround (10%)</h3>
              <p className="text-gray-600">Product underperforming, team dysfunctional, roadmap unclear. Intensive diagnosis and rebuilding required. 6-12 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills Required for Interim CPO Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Core Product Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Product strategy and vision-setting</li>
                <li>• Roadmap prioritization (RICE, value vs. effort)</li>
                <li>• User research and discovery methods</li>
                <li>• Data-driven decision making (analytics, A/B testing)</li>
                <li>• Go-to-market execution</li>
                <li>• Product-market fit validation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim-Specific Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rapid organizational assessment</li>
                <li>• Quick team rapport building</li>
                <li>• Stakeholder management under scrutiny</li>
                <li>• Driving change without political capital</li>
                <li>• Knowledge transfer and succession planning</li>
                <li>• Working with executive search firms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Team & Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Product team hiring and development</li>
                <li>• Cross-functional leadership (Eng, Design, Marketing)</li>
                <li>• Agile/Scrum/Continuous Discovery</li>
                <li>• OKR/KPI frameworks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Business Acumen</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• P&L understanding and unit economics</li>
                <li>• Board-level communication</li>
                <li>• Pricing and monetization strategy</li>
                <li>• Competitive positioning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Becoming an Interim CPO</h2>
          <div className="space-y-6">
            <p className="text-gray-600">Most Interim CPOs have 15-25 years of product experience. You do not start your career as an interim—you transition into it after building deep expertise.</p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Typical Path:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-purple-500 min-w-[120px]">Years 0-5:</div>
                  <div className="text-gray-600">Product Manager → Senior PM at scale-ups or tech companies. Build core product skills.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-purple-500 min-w-[120px]">Years 5-10:</div>
                  <div className="text-gray-600">Head of Product or VP Product. Lead teams, own strategy, manage roadmaps. Multiple product areas.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-purple-500 min-w-[120px]">Years 10-15:</div>
                  <div className="text-gray-600">CPO or VP Product at significant company. Full product org leadership. Board exposure. Ideally 2-3 companies.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-purple-500 min-w-[120px]">Years 15+:</div>
                  <div className="text-gray-600">Transition to interim work. Pattern recognition across companies. Comfortable with ambiguity and short timeframes.</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">What Makes Someone "Interim-Ready"?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Led product at 3+ companies (seen different contexts)</li>
                <li>• Comfortable with intense scrutiny and pressure</li>
                <li>• Can assess situations rapidly (weeks, not months)</li>
                <li>• Do not need consensus to make decisions</li>
                <li>• Happy to leave when the job is done (no empire-building)</li>
                <li>• Financial runway to handle gaps between assignments</li>
              </ul>
            </div>

            <p className="text-gray-600 italic">Most interims maintain a portfolio career: 2-3 interim assignments per year (6-9 months total), plus advisory work, board roles, or personal projects in between.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CPO" accentColor="purple" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need a Full-Time Interim CPO?</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your situation. We'll help you determine if you need a full-time interim or part-time fractional CPO—and connect you with the right person.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">Find an Interim CPO</Link>
            <Link href="/fractional-cpo" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CPO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
