import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CHRO UK | £1,200-£2,000/day | Full-Time HR Leadership',
  description: 'Hire an Interim CHRO for 3-12 month full-time assignments. Expert HR leadership for transformations, restructuring, and leadership gaps. Day rates £1,200-£2,000.',
  keywords: 'interim chro, interim hr director, temporary chro, interim chro day rate, hire interim chro uk, hr transformation',
  alternates: { canonical: 'https://interim.quest/interim-chro' },
}

export default function InterimCHROPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CHRO<br /><span className="text-pink-400">£1,200-£2,000/day</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time, on-site HR leadership for 3-12 month assignments. Cover leadership gaps, drive transformations, manage restructuring. Not part-time consulting.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Hire an Interim CHRO</Link>
                <Link href="/fractional-chro" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Need Part-Time? See Fractional</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CHRO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CHRO</strong> (or Interim HR Director) is a full-time Chief Human Resources Officer hired for a fixed period—typically 3-12 months. They work exclusively for your organisation during critical people periods: leadership gaps, major transformations, restructuring, or culture crises.</p>
          <p className="text-gray-600 mb-4">This is NOT part-time consulting or fractional work. Interim CHROs are in your office 5 days a week, leading your HR team, handling sensitive employee situations, and driving organizational change—just like a permanent hire, but for a defined period.</p>
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mt-6">
            <h3 className="font-bold text-gray-900 mb-2">Typical Day Rates</h3>
            <ul className="text-gray-600 space-y-1">
              <li><strong>£1,200-£1,500/day:</strong> SMEs, 100-500 employees, UK focus</li>
              <li><strong>£1,500-£1,800/day:</strong> Scale-ups, complex transformations, 500-2000 employees</li>
              <li><strong>£1,800-£2,000/day:</strong> Enterprise, FTSE 250, major restructuring, 2000+ employees</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">Based on 5-day weeks. Rates typically decrease for longer assignments (6+ months).</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim CHRO</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'HR Leader Departure', description: 'Your CHRO/HRD has left and you need immediate leadership while recruiting.' },
              { scenario: 'Restructuring/Redundancies', description: 'Major restructuring with significant people implications requiring expert handling.' },
              { scenario: 'Culture Crisis', description: 'Serious culture or engagement issues requiring intensive, dedicated focus.' },
              { scenario: 'M&A Integration', description: 'Merging workforces and cultures post-acquisition.' },
              { scenario: 'HR Transformation', description: 'Complete overhaul of HR function, systems, or operating model.' },
              { scenario: 'Rapid Hiring', description: 'Scaling from 50 to 500+ employees and need full-time HR leadership.' },
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
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CHRO Assignments</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Leadership Gap Coverage (35% of assignments)</h3>
              <p className="text-gray-600">Your CHRO/HRD departed. You need immediate people leadership while recruiting. Interim maintains employee relations, keeps HR operations running, provides stability during transition. Typical duration: 3-6 months.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Restructuring & Redundancies (25%)</h3>
              <p className="text-gray-600">Major organizational restructuring with significant people implications. Requires expert handling of consultations, negotiations, employee communications. High-stakes work. 4-9 months.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">HR Transformation (20%)</h3>
              <p className="text-gray-600">Complete overhaul of HR function: new HRIS, performance systems, talent frameworks, operating model. Requires dedicated leadership to drive change. 6-12 months.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">Culture Crisis/ER Issues (15%)</h3>
              <p className="text-gray-600">Serious culture problems, high attrition, employee relations issues, discrimination claims. Needs intensive, sensitive handling. 6-12 months.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="font-bold text-gray-900 mb-2">M&A Integration (5%)</h3>
              <p className="text-gray-600">Post-acquisition people integration: harmonizing policies, merging teams, cultural alignment, redundancy programmes. 6-9 months.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills Required for Interim CHRO Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Core HR Leadership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Strategic HR planning and execution</li>
                <li>• Employee relations and ER case management</li>
                <li>• Organizational design and restructuring</li>
                <li>• Talent acquisition and retention strategies</li>
                <li>• Performance management systems</li>
                <li>• Compensation and benefits design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim-Specific Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Rapid culture assessment</li>
                <li>• Building trust quickly in sensitive situations</li>
                <li>• Handling inherited ER issues/tribunals</li>
                <li>• Managing without established relationships</li>
                <li>• Delivering difficult messages objectively</li>
                <li>• Working with HR recruitment firms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Legal & Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• UK employment law (TUPE, redundancy, discrimination)</li>
                <li>• GDPR and HR data management</li>
                <li>• Trade union consultation and negotiation</li>
                <li>• Tribunal representation and settlement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Change & Transformation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Change management methodologies</li>
                <li>• HRIS implementation (Workday, SuccessFactors)</li>
                <li>• Culture transformation programmes</li>
                <li>• Board-level stakeholder management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Becoming an Interim CHRO</h2>
          <div className="space-y-6">
            <p className="text-gray-600">Most Interim CHROs have 15-25 years of HR experience. You don't start your career as an interim—you transition into it after building deep expertise across multiple organizations.</p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Typical Path:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="font-bold text-pink-500 min-w-[120px]">Years 0-5:</div>
                  <div className="text-gray-600">HR Advisor → HR Business Partner. Build core HR skills (recruitment, ER, L&D). Get CIPD qualified.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-pink-500 min-w-[120px]">Years 5-10:</div>
                  <div className="text-gray-600">Senior HRBP or Head of HR. Lead teams, handle complex ER, drive change projects. Experience restructuring.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-pink-500 min-w-[120px]">Years 10-15:</div>
                  <div className="text-gray-600">HR Director or CHRO at mid-size company. Full HR function leadership. Board exposure. Handle at least one major transformation or restructure.</div>
                </div>
                <div className="flex gap-4">
                  <div className="font-bold text-pink-500 min-w-[120px]">Years 15+:</div>
                  <div className="text-gray-600">Transition to interim work. Pattern recognition across companies. Comfortable walking into difficult situations. Track record at 3+ companies.</div>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">What Makes Someone "Interim-Ready"?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Led HR at 3+ companies (different industries/contexts)</li>
                <li>• Handled redundancies, tribunals, difficult ER cases</li>
                <li>• Comfortable with political pressure and scrutiny</li>
                <li>• Can assess culture and issues rapidly</li>
                <li>• Don't need to be liked to be effective</li>
                <li>• Happy to leave once stability is restored</li>
                <li>• Financial runway for gaps between assignments</li>
              </ul>
            </div>

            <p className="text-gray-600 italic">Most interim CHROs work 8-10 months per year across 2-3 assignments. Between assignments they do advisory work, CIPD examining, or non-exec roles.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CHRO" accentColor="pink" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need a Full-Time Interim CHRO?</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your situation. We'll help you determine if you need a full-time interim or part-time fractional CHRO—and connect you with the right person.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Find an Interim CHRO</Link>
            <Link href="/fractional-chro" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Fractional CHRO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
