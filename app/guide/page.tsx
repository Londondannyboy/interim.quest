import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const metadata: Metadata = {
  title: 'Guide to Interim Management | Full-Time Temporary Executives',
  description: 'Complete guide to interim management. Learn how full-time temporary executives deliver transformation in 3-12 month engagements. For businesses and executives.',
  keywords: 'interim management, interim executive, interim manager guide, temporary executive, interim management guide',
  alternates: {
    canonical: 'https://interim.quest/guide',
  },
  openGraph: {
    title: 'Guide to Interim Management | Full-Time Temporary Executives',
    description: 'Complete guide to interim management and full-time temporary executive placements.',
    type: 'article',
    url: 'https://interim.quest/guide',
  },
}

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export default function InterimManagementGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <VideoHeroBackground
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          fallbackGradient={true}
        />

        <div className="relative z-10 w-full py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>

            <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
              Essential Reading
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
              The Complete Guide to
              <span className="block text-amber-400">Interim Management</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Everything you need to know about full-time temporary executive placements, from 3-12 month transformation projects to crisis management.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <article className="prose prose-lg prose-gray max-w-none">

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">What is Interim Management?</h3>
              <p className="mb-0 text-gray-700">
                <strong>Interim management</strong> is the deployment of experienced executives on a <strong>full-time, temporary basis</strong> (typically 3-12 months) to lead specific business challenges, transformations, or fill critical gaps. Unlike consultants who advise, interim managers execute. Unlike part-time fractional executives, interim managers work full-time for a defined period.
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-12 mb-6">When Businesses Use Interim Executives</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Companies typically engage interim managers in five situations:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🔥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Crisis Management</h3>
                <p className="text-gray-600 text-sm">
                  Financial distress, operational failures, or sudden leadership departures requiring immediate senior expertise.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transformation Projects</h3>
                <p className="text-gray-600 text-sm">
                  Digital transformation, restructuring, or major change programs requiring dedicated leadership.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rapid Growth</h3>
                <p className="text-gray-600 text-sm">
                  Scaling operations, entering new markets, or managing explosive growth before permanent infrastructure is built.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Capability Gaps</h3>
                <p className="text-gray-600 text-sm">
                  Temporary need for specialized expertise (e.g., IPO preparation, M&A integration, regulatory compliance).
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">👤</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Transition</h3>
                <p className="text-gray-600 text-sm">
                  Covering maternity leave, sabbaticals, or bridging the gap while recruiting a permanent executive.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Testing Leadership</h3>
                <p className="text-gray-600 text-sm">
                  Trial run with an executive before making a permanent hire, reducing risk of a bad long-term hire.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Interim vs Part-Time: Key Differences</h2>

            <div className="overflow-x-auto my-8 not-prose">
              <table className="w-full border-collapse bg-white shadow-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 text-left font-bold">Aspect</th>
                    <th className="px-6 py-4 text-left font-bold">Interim Management</th>
                    <th className="px-6 py-4 text-left font-bold">Part-Time/Fractional</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Time Commitment</td>
                    <td className="px-6 py-4 text-gray-700">Full-time (5 days/week)</td>
                    <td className="px-6 py-4 text-gray-700">Part-time (1-3 days/week)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Duration</td>
                    <td className="px-6 py-4 text-gray-700">Fixed term (3-12 months)</td>
                    <td className="px-6 py-4 text-gray-700">Ongoing (indefinite)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Purpose</td>
                    <td className="px-6 py-4 text-gray-700">Specific project or crisis</td>
                    <td className="px-6 py-4 text-gray-700">Ongoing strategic guidance</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Day Rate</td>
                    <td className="px-6 py-4 text-gray-700">£800-£2,000/day</td>
                    <td className="px-6 py-4 text-gray-700">£600-£1,500/day</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Exclusivity</td>
                    <td className="px-6 py-4 text-gray-700">Usually exclusive to one client</td>
                    <td className="px-6 py-4 text-gray-700">Works with multiple clients</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Best For</td>
                    <td className="px-6 py-4 text-gray-700">Transformation, crisis, gaps</td>
                    <td className="px-6 py-4 text-gray-700">Ongoing advisory, smaller businesses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">How Interim Management Works</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Engagement Process</h3>
            <ul className="space-y-3">
              <li><strong>Define the Brief:</strong> Company identifies the specific challenge, deliverables, and timeframe</li>
              <li><strong>Source Candidates:</strong> Via interim recruitment agencies, networks, or direct approaches</li>
              <li><strong>Fast Hiring:</strong> Typically 2-4 weeks from brief to start (vs 3-6 months for permanent)</li>
              <li><strong>Onboarding:</strong> Rapid immersion with clear deliverables and success metrics</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. During the Engagement</h3>
            <ul className="space-y-3">
              <li><strong>Full Authority:</strong> Interim executives typically have full decision-making authority in their domain</li>
              <li><strong>Execution Focus:</strong> They don't just advise—they implement and deliver results</li>
              <li><strong>Knowledge Transfer:</strong> Train permanent staff and build sustainable processes</li>
              <li><strong>Regular Reviews:</strong> Monthly or quarterly check-ins against agreed deliverables</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Exit and Handover</h3>
            <ul className="space-y-3">
              <li><strong>Planned Exit:</strong> Clear handover to permanent successor or existing team</li>
              <li><strong>Documentation:</strong> Comprehensive documentation of work, decisions, and recommendations</li>
              <li><strong>Extension Options:</strong> Many engagements extend beyond initial scope if needed</li>
              <li><strong>Conversion to Permanent:</strong> Some interim placements convert to permanent roles</li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Cost Structure</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Interim executives typically charge daily rates based on seniority and specialism:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-10 not-prose">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Director Level</div>
                <div className="text-3xl font-black text-gray-900 mb-3">£800-£1,200</div>
                <div className="text-xs text-gray-600">per day</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Finance Director</li>
                  <li>Operations Director</li>
                  <li>HR Director</li>
                </ul>
              </div>

              <div className="bg-black p-6 rounded-lg border-2 border-amber-500 transform scale-105 shadow-xl">
                <div className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">C-Suite</div>
                <div className="text-3xl font-black text-white mb-3">£1,200-£1,800</div>
                <div className="text-xs text-gray-400">per day</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li>CFO</li>
                  <li>CTO</li>
                  <li>CMO / COO</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Specialist</div>
                <div className="text-3xl font-black text-gray-900 mb-3">£1,500-£2,500</div>
                <div className="text-xs text-gray-600">per day</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Turnaround CEO</li>
                  <li>Restructuring experts</li>
                  <li>Regulatory specialists</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <p className="font-semibold text-blue-900 mb-2">Example Cost Calculation</p>
              <p className="text-blue-800 text-sm mb-0">
                Interim CFO at £1,400/day × 5 days/week × 6 months (26 weeks) = <strong>£182,000</strong>
                <br />
                Plus recruitment fee: 15-20% = <strong>£27,300-£36,400</strong>
                <br />
                <strong>Total: £209,300-£218,400 for 6 months</strong>
              </p>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Benefits for Businesses</h2>

            <ul className="space-y-4">
              <li>
                <strong>Speed to Impact:</strong> Experienced executives hit the ground running with minimal onboarding
              </li>
              <li>
                <strong>No Long-Term Commitment:</strong> Fixed-term engagement without permanent salary, benefits, or equity obligations
              </li>
              <li>
                <strong>Proven Track Record:</strong> Interim executives bring experience from multiple similar situations
              </li>
              <li>
                <strong>Objective Perspective:</strong> External viewpoint without internal politics or career concerns
              </li>
              <li>
                <strong>Flexibility:</strong> Scale up or down based on business needs without redundancy risks
              </li>
              <li>
                <strong>Knowledge Transfer:</strong> Build internal capability while solving immediate challenges
              </li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Benefits for Executives</h2>

            <ul className="space-y-4">
              <li>
                <strong>Portfolio Career:</strong> Work on diverse challenges across industries and company stages
              </li>
              <li>
                <strong>Higher Earnings:</strong> Daily rates often exceed permanent salary equivalents
              </li>
              <li>
                <strong>Work-Life Balance:</strong> Gaps between assignments allow for personal time and development
              </li>
              <li>
                <strong>Skill Development:</strong> Rapid exposure to different business models and challenges
              </li>
              <li>
                <strong>Impact Focus:</strong> Deliver specific outcomes rather than manage ongoing operations
              </li>
              <li>
                <strong>Autonomy:</strong> Senior-level work without the long-term corporate politics
              </li>
            </ul>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Common Interim Roles</h2>

            <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Most Common</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim CFO</strong> - Financial restructuring, fundraising, IPO preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim CEO</strong> - Turnarounds, transitions, crisis management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim COO</strong> - Operational transformation, scaling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim CTO</strong> - Technology transformation, platform rebuilds</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specialist Roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim CMO</strong> - Brand repositioning, go-to-market strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim CHRO</strong> - Culture change, restructuring, M&A integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim Programme Director</strong> - Major transformation initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span><strong>Interim Commercial Director</strong> - Sales turnarounds, new markets</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">How to Find Interim Executives</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              There are three main routes to finding interim managers:
            </p>

            <div className="space-y-6 my-8">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Specialist Interim Recruitment Agencies</h3>
                <p className="text-gray-700">
                  Agencies maintain networks of vetted interim executives. They charge 15-20% of total contract value but provide speed, quality assurance, and replacement guarantees.
                </p>
                <Link href="/top-interim-recruitment-agencies-best-interim-recruitment-agency-interim-recruiter" className="text-amber-600 font-medium hover:underline text-sm">
                  Browse interim recruitment agencies →
                </Link>
              </div>

              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Direct Networks and Referrals</h3>
                <p className="text-gray-700">
                  Many interim placements happen through personal networks, LinkedIn, or referrals from investors, board members, and other executives.
                </p>
              </div>

              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Job Boards and Platforms</h3>
                <p className="text-gray-700">
                  Online platforms list interim opportunities, though senior roles are often filled before reaching public job boards.
                </p>
                <Link href="/interim-jobs" className="text-amber-600 font-medium hover:underline text-sm">
                  Browse interim jobs →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mt-16 mb-6">Success Factors</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Successful interim engagements share these characteristics:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">✓</span> Clear Scope
                </h4>
                <p className="text-green-800 text-sm">
                  Well-defined deliverables, success metrics, and timeframes agreed upfront
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">✓</span> Executive Authority
                </h4>
                <p className="text-green-800 text-sm">
                  Interim manager has real decision-making power, not just advisory role
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">✓</span> Stakeholder Alignment
                </h4>
                <p className="text-green-800 text-sm">
                  Board, investors, and leadership team aligned on the interim's mandate
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center">
                  <span className="text-2xl mr-2">✓</span> Cultural Fit
                </h4>
                <p className="text-green-800 text-sm">
                  Match between interim's style and company culture, despite temporary nature
                </p>
              </div>
            </div>

          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Explore Interim Management?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you're hiring interim executives or considering an interim career, we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs"
              className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
            >
              Browse Interim Jobs
            </Link>
            <Link
              href="/top-interim-recruitment-agencies-best-interim-recruitment-agency-interim-recruiter"
              className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Find Recruitment Agencies
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Guides</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/how-to-become-a-interim-executive" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">How to Become an Interim Executive</Link>
              <Link href="/interim-executive-salary-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim Salary Guide</Link>
              <Link href="/interim-jobs-articles" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">All Articles</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
