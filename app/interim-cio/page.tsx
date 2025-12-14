import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CIO UK | £1,400-£2,200/day | Full-Time IT Leadership',
  description: 'Hire an Interim CIO for 3-12 month full-time assignments. Expert IT leadership for digital transformations, ERP implementations, and leadership gaps. Day rates £1,400-£2,200.',
  keywords: 'interim cio, interim chief information officer, temporary cio, interim cio day rate, hire interim cio uk, digital transformation cio',
  alternates: { canonical: 'https://interim.quest/interim-cio' },
}

export default function InterimCIOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-indigo-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CIO<br /><span className="text-indigo-400">£1,400-£2,200/day</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time, on-site IT leadership for 3-12 month assignments. Cover leadership gaps, drive digital transformations, deliver major implementations. Not part-time consulting.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">Hire an Interim CIO</Link>
                <Link href="/fractional-cio" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Need Part-Time? See Fractional</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CIO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CIO</strong> is a full-time Chief Information Officer hired for a fixed period—typically 3-12 months. They work exclusively for your organisation during critical IT periods: leadership gaps, major transformations, ERP implementations, or technology turnarounds.</p>
          <p className="text-gray-600 mb-4">This is NOT part-time consulting or fractional work. Interim CIOs are in your office 5 days a week, leading your IT team, managing vendors, making architecture decisions, and driving execution—just like a permanent hire, but for a defined period.</p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Typical Day Rates</h3>
            <ul className="text-gray-600 space-y-1">
              <li><strong>£1,400-£1,700/day:</strong> SMEs, 200-1000 employees, single-country IT estate</li>
              <li><strong>£1,700-£2,000/day:</strong> Mid-market, complex infrastructure, multi-site operations</li>
              <li><strong>£2,000-£2,200/day:</strong> Enterprise, FTSE 250, global IT, major ERP/digital transformation</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Based on 5-day weeks. Rates typically decrease for longer assignments (6+ months).</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CIO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'CIO Departure', description: 'Your CIO has left and you need immediate IT leadership while recruiting.' },
              { scenario: 'Digital Transformation', description: 'Major digital transformation requiring full-time dedicated leadership.' },
              { scenario: 'ERP Implementation', description: 'Large-scale ERP or system implementation needing intensive oversight.' },
              { scenario: 'IT Turnaround', description: 'IT function underperforming and needs dedicated leadership to fix.' },
              { scenario: 'M&A IT Integration', description: 'Integrating IT systems and teams post-acquisition.' },
              { scenario: 'Cloud Migration', description: 'Major cloud migration requiring full-time executive focus.' },
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
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CIO Assignments</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Leadership Gap Coverage (30% of assignments)</h3>
              <p className="text-gray-600">Your CIO departed. You need immediate IT leadership while recruiting. Interim keeps IT running, maintains vendor relationships, leads the team through transition. Typical duration: 3-6 months.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">ERP/Major System Implementation (25%)</h3>
              <p className="text-gray-600">SAP, Oracle, Microsoft Dynamics, Workday implementation requiring dedicated executive oversight. High-stakes, high-complexity projects. 6-12 months.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Digital Transformation (20%)</h3>
              <p className="text-gray-600">Cloud migration, legacy modernization, digital platform builds. Requires full-time leadership to coordinate across business and technology. 9-12 months.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">IT Turnaround (15%)</h3>
              <p className="text-gray-600">IT function underperforming, systems unreliable, costs out of control. Intensive diagnosis and rebuilding required. 6-12 months.</p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">M&A IT Integration (10%)</h3>
              <p className="text-gray-600">Post-acquisition technology integration: merging infrastructures, harmonizing systems, decommissioning duplicates. 6-9 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills Required for Interim CIO Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Core IT Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IT strategy and architecture planning</li>
                <li>• Infrastructure and operations management</li>
                <li>• Application portfolio management</li>
                <li>• Vendor management and contract negotiation</li>
                <li>• IT budgeting and cost optimization</li>
                <li>• Business-IT alignment and stakeholder management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim-Specific Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rapid IT estate assessment</li>
                <li>• Taking over in-flight projects mid-stream</li>
                <li>• Managing inherited vendor/supplier issues</li>
                <li>• Building credibility quickly with business</li>
                <li>• Making tough calls without legacy baggage</li>
                <li>• Working with IT recruitment firms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Technical Depth</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Cloud platforms (AWS, Azure, GCP)</li>
                <li>• Enterprise architecture frameworks (TOGAF)</li>
                <li>• ERP systems (SAP, Oracle, Dynamics)</li>
                <li>• Cybersecurity and risk management</li>
                <li>• Data center and network infrastructure</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Transformation & Delivery</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Large-scale programme management</li>
                <li>• Digital transformation methodologies</li>
                <li>• Agile/DevOps implementation</li>
                <li>• Change management and adoption</li>
                <li>• Board-level communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Becoming an Interim CIO</h2>
          <div className="space-y-6">
            <p className="text-gray-600">Most Interim CIOs have 20-30 years of IT experience. You do not start your career as an interim—you transition into it after building deep expertise across multiple organizations and technologies.</p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Typical Path:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-indigo-500 min-w-[120px]">Years 0-8:</div>
                  <div className="text-gray-600">Technical roles → Team Lead → IT Manager. Build technical credibility across infrastructure, applications, or development.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-indigo-500 min-w-[120px]">Years 8-15:</div>
                  <div className="text-gray-600">Head of Infrastructure/Applications or IT Director. Lead departments, manage budgets, deliver major projects. Business partnering experience.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-indigo-500 min-w-[120px]">Years 15-20:</div>
                  <div className="text-gray-600">CIO or IT Director at significant company. Full IT function leadership. Board exposure. Lead at least one major transformation or ERP implementation.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-indigo-500 min-w-[120px]">Years 20+:</div>
                  <div className="text-gray-600">Transition to interim work. Pattern recognition across companies and technologies. Comfortable parachuting into complex IT estates.</div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">What Makes Someone "Interim-Ready"?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Led IT at 3+ companies (different sectors/scales)</li>
                <li>• Delivered major transformations or implementations</li>
                <li>• Comfortable with legacy technology and technical debt</li>
                <li>• Can assess IT estates rapidly (infrastructure, apps, team)</li>
                <li>• Do not need long relationship-building to be effective</li>
                <li>• Happy to hand over to permanent successor</li>
                <li>• Financial runway for gaps between assignments</li>
              </ul>
            </div>

            <p className="text-gray-600 italic">Most interim CIOs work 9-11 months per year across 2-3 assignments. Between assignments they do advisory work, vendor selection projects, or non-exec roles.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CIO" accentColor="indigo" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need a Full-Time Interim CIO?</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your situation. We'll help you determine if you need a full-time interim or part-time fractional CIO—and connect you with the right person.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">Find an Interim CIO</Link>
            <Link href="/fractional-cio" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CIO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
