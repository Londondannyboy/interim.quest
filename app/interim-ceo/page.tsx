import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CEO | What is an Interim CEO? | Interim Quest',
  description: 'What is an Interim CEO? Full-time temporary Chief Executives for leadership gaps, turnarounds, and crisis situations. When boards appoint interim CEOs, day rates £2,000-£3,500, and governance considerations.',
  keywords: 'interim ceo, what is an interim ceo, interim chief executive officer, ceo turnaround, founder exit, ceo succession, interim ceo day rate, interim ceo uk',
  alternates: { canonical: 'https://interim.quest/interim-ceo' },
}

export default function InterimCEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-gray-800 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Executive Role</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim CEO<br /><span className="text-gray-400">Full-Time Leadership</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary Chief Executives for 3-12 month assignments. Leadership for crisis, turnaround, founder exit, and succession gaps. Not part-time consulting.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">Find an Interim CEO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim CEO?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim CEO</strong> is a full-time temporary Chief Executive Officer appointed for a defined period—typically 3-12 months—to lead an organisation through critical transitions, crises, or transformation periods.</p>
          <p className="text-gray-600 mb-4">Unlike fractional or part-time executives, an Interim CEO is a <strong>full-time operational leader</strong> with complete executive authority. They chair board meetings, lead the executive team, make strategic decisions, and take full accountability for the organisation's performance during their tenure.</p>
          <p className="text-gray-600 mb-4">Interim CEOs are seasoned executives with proven track records in similar situations. They typically have 15-25 years of experience, often with previous CEO or MD experience, and specialise in rapid assessment, stabilisation, and execution under pressure.</p>
          <p className="text-gray-600"><strong>This is not part-time consulting.</strong> An Interim CEO works 5 days per week on-site (or hybrid as appropriate), attending all board meetings, leading all-hands meetings, and functioning exactly as a permanent CEO would—just with a predetermined end date.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When Boards Appoint an Interim CEO</h2>
          <p className="text-gray-600 mb-8">Boards typically appoint an Interim CEO in high-stakes situations where immediate, experienced leadership is essential. These are the most common scenarios:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { scenario: 'Founder Exit', description: 'Founder stepping down or being removed. Interim CEO bridges to professional leadership while board searches for permanent replacement.' },
              { scenario: 'Crisis or Turnaround', description: 'Company in financial distress, regulatory crisis, or operational failure. Interim CEO stabilises and executes recovery plan.' },
              { scenario: 'Sudden CEO Departure', description: 'Unexpected resignation, termination, or death. Interim CEO maintains continuity while board conducts proper CEO search process.' },
              { scenario: 'Succession Gap', description: 'Permanent CEO hired but not available for 3-6 months. Interim CEO maintains momentum and prepares organisation for new leader.' },
              { scenario: 'Pre-Exit Preparation', description: 'Sale or IPO planned within 6-12 months. Interim CEO professionalises operations and maximises valuation.' },
              { scenario: 'Transformation Leadership', description: 'Major strategic pivot, restructuring, or business model change requiring specific transformation expertise not in current team.' },
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
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CEO Assignments</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Crisis Stabilisation (3-6 months)',
                description: 'Company in immediate distress—financial crisis, regulatory breach, major client loss, or team exodus. Interim CEO conducts rapid assessment, stabilises operations, implements emergency measures, and restores stakeholder confidence. Often involves difficult decisions: restructuring, layoffs, asset sales, or bridge financing.'
              },
              {
                title: 'Turnaround Leadership (6-12 months)',
                description: 'Company underperforming but not in immediate crisis. Interim CEO diagnoses root causes, develops turnaround plan, restructures operations, repositions commercially, and returns company to growth trajectory. Requires both strategic and operational expertise.'
              },
              {
                title: 'Founder Transition (6-9 months)',
                description: 'Founder stepping back from day-to-day leadership. Interim CEO professionalises operations, installs scalable processes, develops executive team, and prepares organisation for institutional leadership. Often involves delicate cultural transition from founder-led to professionally-managed.'
              },
              {
                title: 'Succession Bridge (3-6 months)',
                description: 'Previous CEO departed and permanent replacement identified but not yet available. Interim CEO maintains business continuity, completes in-flight initiatives, prepares organisation for new leader, and conducts comprehensive handover. Least disruptive type of interim assignment.'
              },
              {
                title: 'Pre-Exit Value Creation (6-12 months)',
                description: 'Company preparing for sale, PE exit, or IPO. Interim CEO professionalises governance, cleans up financials, strengthens management team, improves operational metrics, and positions company for maximum valuation. Often works closely with investment bankers or corporate finance advisors.'
              },
              {
                title: 'Transformation Execution (9-12 months)',
                description: 'Major strategic change required—business model pivot, digital transformation, geographic expansion, or portfolio restructuring. Interim CEO brings specific transformation expertise, drives execution, embeds new capabilities, and hands over to permanent leadership once transformation is established.'
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-gray-800">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Interim CEO Day Rates and Fees</h2>
          <p className="text-gray-600 mb-8">Interim CEO rates reflect the premium nature of the role and the experience required. These are full-time, high-stakes assignments with significant accountability.</p>

          <div className="bg-white p-8 border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical Day Rates</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-3">
                <div>
                  <p className="font-bold text-gray-900">SME / Early-Stage (£1m-£10m revenue)</p>
                  <p className="text-sm text-gray-600">Smaller companies, often founder-led transitions</p>
                </div>
                <p className="text-xl font-bold text-gray-900">£2,000-£2,500/day</p>
              </div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-3">
                <div>
                  <p className="font-bold text-gray-900">Mid-Market (£10m-£50m revenue)</p>
                  <p className="text-sm text-gray-600">Established businesses, complex stakeholder environments</p>
                </div>
                <p className="text-xl font-bold text-gray-900">£2,500-£3,000/day</p>
              </div>
              <div className="flex justify-between items-baseline pb-3">
                <div>
                  <p className="font-bold text-gray-900">Large / PE-Backed (£50m+ revenue)</p>
                  <p className="text-sm text-gray-600">Corporate turnarounds, PE portfolio companies, high complexity</p>
                </div>
                <p className="text-xl font-bold text-gray-900">£3,000-£3,500+/day</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">What's Included</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Full-time CEO leadership (5 days/week)</li>
                <li>• All board meetings and reporting</li>
                <li>• Executive team leadership</li>
                <li>• Stakeholder management</li>
                <li>• Strategic planning and execution</li>
                <li>• Crisis management and decision-making</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Fee Structure</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Typically invoiced monthly in advance</li>
                <li>• Minimum 3-month commitment</li>
                <li>• Notice period: 1 month (both parties)</li>
                <li>• Extensions negotiated as needed</li>
                <li>• Performance incentives rare but possible</li>
                <li>• Expenses additional (travel, accommodation)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400">
            <p className="text-sm text-gray-700"><strong>Why premium rates?</strong> Interim CEOs command higher day rates than other interim executives because of the total accountability, 24/7 availability, board-level experience required, and immediate impact expected. A poor CEO hire—even temporary—can destroy significant value. Premium rates reflect the risk and expertise.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Governance Considerations</h2>
          <p className="text-gray-600 mb-8">Appointing an Interim CEO raises important governance questions. Boards must consider these carefully:</p>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 border-l-4 border-gray-800">
              <h3 className="font-bold text-gray-900 mb-2">Board Appointment and Authority</h3>
              <p className="text-gray-600 text-sm mb-3">The Interim CEO must be formally appointed by the board with clear delegation of authority. This includes:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Board resolution appointing interim CEO with defined scope</li>
                <li>• Signatory authority limits (banking, contracts, commitments)</li>
                <li>• Reserved matters requiring board approval</li>
                <li>• Reporting lines and board meeting attendance rights</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 border-l-4 border-gray-800">
              <h3 className="font-bold text-gray-900 mb-2">Employment Status and Contracts</h3>
              <p className="text-gray-600 text-sm mb-3">Most Interim CEOs operate through limited companies (outside IR35) rather than as employees. Key contractual points:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Service agreement (not employment contract)</li>
                <li>• Professional indemnity insurance (£2m-£5m typical)</li>
                <li>• D&O insurance coverage confirmation</li>
                <li>• IP assignment and confidentiality provisions</li>
                <li>• Termination rights and notice periods</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 border-l-4 border-gray-800">
              <h3 className="font-bold text-gray-900 mb-2">Stakeholder Communication</h3>
              <p className="text-gray-600 text-sm mb-3">How the board communicates the interim appointment affects credibility and confidence:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Internal announcement: clarity on authority and duration</li>
                <li>• Investor/shareholder notification: reasons and plan</li>
                <li>• Customer/supplier assurance: continuity message</li>
                <li>• Public announcement (if required): positioning and timing</li>
                <li>• Team communication: managing uncertainty and morale</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 border-l-4 border-gray-800">
              <h3 className="font-bold text-gray-900 mb-2">Succession Planning Parallel Path</h3>
              <p className="text-gray-600 text-sm mb-3">Unless the interim CEO is auditioning for the permanent role, the board must run a parallel CEO search:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Engage executive search firm early (do not wait)</li>
                <li>• Define CEO spec with interim's input on organisational needs</li>
                <li>• Maintain interim's credibility during search process</li>
                <li>• Plan handover period (typically 4-6 weeks overlap ideal)</li>
                <li>• Clarify interim's role during transition and post-exit</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 border-l-4 border-gray-800">
              <h3 className="font-bold text-gray-900 mb-2">Conflicts of Interest</h3>
              <p className="text-gray-600 text-sm mb-3">Interim CEOs often have portfolio careers. Boards should address potential conflicts:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Other directorships or advisory roles (competitor check)</li>
                <li>• Commitment to full-time availability (not splitting time)</li>
                <li>• Future commercial relationships post-assignment</li>
                <li>• Recruitment of interim's network into the organisation</li>
                <li>• Disclosure obligations for any conflicts arising</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 border-l-4 border-gray-800">
              <h3 className="font-bold text-gray-900 mb-2">Performance Management</h3>
              <p className="text-gray-600 text-sm mb-3">Even temporary CEOs need clear objectives and accountability:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• 100-day plan or clear initial objectives</li>
                <li>• Monthly board reviews (more frequent than permanent CEO)</li>
                <li>• KPIs aligned to assignment type (stabilisation vs growth)</li>
                <li>• Exit criteria: what defines successful completion?</li>
                <li>• Extension decisions: when and how to evaluate</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-400">
            <p className="text-sm text-gray-700"><strong>Legal advice recommended:</strong> Appointing an Interim CEO involves employment law, corporate governance, and contractual complexity. Boards should seek legal counsel to structure the appointment properly, particularly around authority delegation, IR35 status, and D&O insurance coverage.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Need an Interim CEO?</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your situation and we'll help you find experienced interim CEO candidates.</p>
          <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors inline-block">Find an Interim CEO</Link>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/interim-cfo" className="text-gray-600 hover:text-gray-900 font-medium">Interim CFO</Link>
            <Link href="/interim-coo" className="text-gray-600 hover:text-gray-900 font-medium">Interim COO</Link>
            <Link href="/interim-cmo" className="text-gray-600 hover:text-gray-900 font-medium">Interim CMO</Link>
            <Link href="/interim-cto" className="text-gray-600 hover:text-gray-900 font-medium">Interim CTO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
