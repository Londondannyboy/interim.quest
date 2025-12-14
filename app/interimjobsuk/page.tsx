import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const metadata: Metadata = {
  title: 'Interim Jobs UK 2025 | Full-Time Temporary Executive Positions',
  description: 'Find interim jobs in the UK. Full-time temporary executive positions (3-12 months) for CFO, CTO, CMO, COO roles. £800-£2,000/day. Updated daily.',
  keywords: 'interim jobs uk, interim executive jobs, temporary executive jobs, interim cfo uk, interim cto uk, interim cmo uk, interim management uk',
  alternates: {
    canonical: 'https://interim.quest/interimjobsuk',
  },
  openGraph: {
    title: 'Interim Jobs UK 2025 | Full-Time Temporary Executive Positions',
    description: 'Find interim jobs in the UK. Full-time temporary executive positions for transformation and crisis management.',
    type: 'website',
    url: 'https://interim.quest/interimjobsuk',
  },
}

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export default function InterimJobsUKPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <VideoHeroBackground
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          fallbackGradient={true}
        />

        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
                <span className="mr-2">←</span> Back to Home
              </Link>

              <span className="inline-block bg-white/10 backdrop-blur text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                Updated Daily
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                Interim Jobs UK
                <span className="block text-amber-400 mt-2">Full-Time Temporary Executives</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">
                Browse interim management positions across the UK. Full-time temporary executive roles (3-12 months) for transformation, crisis management, and growth initiatives. £800-£2,000/day.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/interim-jobs"
                  className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors text-center"
                >
                  Browse All Jobs
                </Link>
                <Link
                  href="#what-are-interim-jobs"
                  className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What are Interim Jobs UK */}
      <section id="what-are-interim-jobs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Understanding Interim Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Are Interim Jobs UK?
            </h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              <strong>Interim jobs in the UK</strong> are full-time temporary executive positions, typically lasting 3-12 months. Unlike part-time fractional roles or permanent positions, interim executives work full-time on specific projects: transformation initiatives, crisis management, leadership transitions, or rapid growth phases.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 not-prose">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Key Characteristics of Interim Jobs UK</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span><strong>Full-time commitment:</strong> 5 days per week, fully dedicated to one client</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span><strong>Fixed duration:</strong> Typically 3-12 months with clear deliverables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span><strong>Senior level:</strong> Director to C-suite positions (CFO, CTO, CMO, COO, CEO)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span><strong>Project-focused:</strong> Hired to achieve specific outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2 mt-1">•</span>
                  <span><strong>Day rate basis:</strong> £800-£2,000/day depending on seniority</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Interim vs Permanent vs Part-Time</h3>

            <div className="overflow-x-auto my-8 not-prose">
              <table className="w-full border-collapse bg-white shadow-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 text-left font-bold">Aspect</th>
                    <th className="px-6 py-4 text-left font-bold">Interim Jobs UK</th>
                    <th className="px-6 py-4 text-left font-bold">Permanent</th>
                    <th className="px-6 py-4 text-left font-bold">Part-Time/Fractional</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Duration</td>
                    <td className="px-6 py-4 text-gray-700">3-12 months</td>
                    <td className="px-6 py-4 text-gray-700">Indefinite</td>
                    <td className="px-6 py-4 text-gray-700">Ongoing</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Time</td>
                    <td className="px-6 py-4 text-gray-700">Full-time (5 days)</td>
                    <td className="px-6 py-4 text-gray-700">Full-time (5 days)</td>
                    <td className="px-6 py-4 text-gray-700">Part-time (1-3 days)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Purpose</td>
                    <td className="px-6 py-4 text-gray-700">Project/Crisis/Gap</td>
                    <td className="px-6 py-4 text-gray-700">Ongoing operations</td>
                    <td className="px-6 py-4 text-gray-700">Advisory/Support</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Pay</td>
                    <td className="px-6 py-4 text-gray-700">£800-£2,000/day</td>
                    <td className="px-6 py-4 text-gray-700">Salary + benefits</td>
                    <td className="px-6 py-4 text-gray-700">£600-£1,500/day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Exclusivity</td>
                    <td className="px-6 py-4 text-gray-700">One client</td>
                    <td className="px-6 py-4 text-gray-700">One employer</td>
                    <td className="px-6 py-4 text-gray-700">Multiple clients</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Interim Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Common Scenarios</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              When Companies Hire for Interim Jobs UK
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Interim executives are typically hired in five key situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔥',
                title: 'Crisis Management',
                description: 'Financial distress, operational failures, or sudden leadership departures requiring immediate senior expertise.',
                examples: 'Turnaround CFO, interim CEO for restructuring'
              },
              {
                icon: '🚀',
                title: 'Transformation Projects',
                description: 'Digital transformation, restructuring, or major change programs requiring dedicated full-time leadership.',
                examples: 'Interim CTO for platform rebuild, interim COO for operational transformation'
              },
              {
                icon: '⚡',
                title: 'Rapid Growth',
                description: 'Scaling operations, entering new markets, or managing explosive growth before permanent infrastructure is built.',
                examples: 'Interim CMO for scale-up, interim CFO for fundraising'
              },
              {
                icon: '🎯',
                title: 'Capability Gaps',
                description: 'Temporary need for specialized expertise not available internally.',
                examples: 'Interim CFO for IPO preparation, interim CHRO for M&A integration'
              },
              {
                icon: '👤',
                title: 'Leadership Transition',
                description: 'Covering maternity leave, sabbaticals, or bridging the gap while recruiting a permanent executive.',
                examples: 'Interim Finance Director, interim CTO during permanent search'
              },
              {
                icon: '🔬',
                title: 'Testing Before Hiring',
                description: 'Trial run with an executive before making a permanent hire, reducing risk of a bad long-term hire.',
                examples: 'Interim-to-permanent placements, proof of concept leadership'
              }
            ].map((scenario, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:border-amber-400 transition-colors">
                <div className="text-4xl mb-4">{scenario.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-600 mb-4">{scenario.description}</p>
                <p className="text-sm text-gray-500 italic">{scenario.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Interim Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Role Types</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Most Common Interim Jobs UK
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These executive roles are most frequently filled on an interim basis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Interim CFO Jobs UK',
                dayRate: '£1,200-£1,800/day',
                description: 'Financial restructuring, fundraising, IPO preparation, cash management, or building finance function from scratch.',
                link: '/interim-cfo-jobs-uk'
              },
              {
                title: 'Interim CEO Jobs UK',
                dayRate: '£1,500-£2,500/day',
                description: 'Turnarounds, transitions, crisis management, or leading the business through specific transformation phases.',
                link: '/interim-jobs'
              },
              {
                title: 'Interim CTO Jobs UK',
                dayRate: '£1,200-£1,800/day',
                description: 'Technology transformation, platform rebuilds, digital transformation, or establishing engineering practices.',
                link: '/interim-cto-jobs-uk'
              },
              {
                title: 'Interim CMO Jobs UK',
                dayRate: '£1,000-£1,600/day',
                description: 'Brand repositioning, go-to-market strategy, demand generation transformation, or marketing team buildout.',
                link: '/interim-cmo-jobs-uk'
              },
              {
                title: 'Interim COO Jobs UK',
                dayRate: '£1,200-£1,800/day',
                description: 'Operational transformation, scaling operations, process improvement, or supply chain restructuring.',
                link: '/interim-coo-jobs-uk'
              },
              {
                title: 'Interim CHRO / HR Director',
                dayRate: '£1,000-£1,500/day',
                description: 'Culture change, restructuring, M&A integration, or building HR infrastructure for growth.',
                link: '/interim-jobs'
              }
            ].map((role, index) => (
              <Link key={index} href={role.link} className="group">
                <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 hover:border-amber-500 transition-all hover:shadow-lg h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {role.title}
                    </h3>
                    <span className="text-sm font-bold text-amber-600 whitespace-nowrap ml-4">
                      {role.dayRate}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {role.description}
                  </p>
                  <div className="mt-6 text-amber-600 font-semibold group-hover:underline">
                    View {role.title.split(' ')[0]} {role.title.split(' ')[1]} opportunities →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Find Interim Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">For Executives</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              How to Find Interim Jobs UK
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Specialist Interim Recruitment Agencies</h3>
              <p className="text-gray-700 mb-4">
                The most common route. Agencies maintain networks of companies seeking interim executives and match them with qualified candidates. They handle contracts, billing, and provide replacement guarantees.
              </p>
              <Link href="/top-interim-recruitment-agencies-best-interim-recruitment-agency-interim-recruiter" className="text-amber-600 font-semibold hover:underline">
                Browse interim recruitment agencies →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Direct Networks and LinkedIn</h3>
              <p className="text-gray-700 mb-4">
                Many interim roles are filled through personal networks, referrals from investors, board members, or other executives. LinkedIn is increasingly used for direct approaches.
              </p>
              <p className="text-sm text-gray-600">
                Build your profile with "Open to interim work" and showcase previous transformation projects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Job Boards and Platforms</h3>
              <p className="text-gray-700 mb-4">
                Online platforms list interim opportunities, though senior roles are often filled before reaching public boards.
              </p>
              <Link href="/interim-jobs" className="text-blue-600 font-semibold hover:underline">
                Browse live interim jobs →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">4. PE/VC Networks</h3>
              <p className="text-gray-700">
                Private equity and venture capital firms frequently need interim executives for their portfolio companies. Building relationships with investment firms can lead to consistent work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Information */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Compensation</span>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Interim Jobs UK Salary Guide
            </h2>
            <p className="text-xl text-gray-600">
              Day rates for interim management positions in the UK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Director Level</div>
              <div className="text-4xl font-black text-gray-900 mb-2">£800-£1,200</div>
              <div className="text-sm text-gray-600 mb-6">per day</div>
              <ul className="text-left space-y-2 text-sm text-gray-700">
                <li>Finance Director</li>
                <li>Operations Director</li>
                <li>HR Director</li>
                <li>Commercial Director</li>
              </ul>
            </div>

            <div className="bg-black p-8 rounded-xl text-center transform scale-105 shadow-xl">
              <div className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">C-Suite</div>
              <div className="text-4xl font-black text-white mb-2">£1,200-£1,800</div>
              <div className="text-sm text-gray-400 mb-6">per day</div>
              <ul className="text-left space-y-2 text-sm text-gray-300">
                <li>CFO</li>
                <li>CTO</li>
                <li>CMO</li>
                <li>COO</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Specialist/CEO</div>
              <div className="text-4xl font-black text-gray-900 mb-2">£1,500-£2,500</div>
              <div className="text-sm text-gray-600 mb-6">per day</div>
              <ul className="text-left space-y-2 text-sm text-gray-700">
                <li>Turnaround CEO</li>
                <li>Restructuring CFO</li>
                <li>Regulatory specialists</li>
                <li>M&A experts</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/interim-executive-salary-uk" className="text-amber-600 font-semibold hover:underline text-lg">
              View detailed salary guide →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Find Interim Jobs UK?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Browse live interim executive positions or learn more about interim management careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs"
              className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
            >
              Browse Jobs
            </Link>
            <Link
              href="/guide"
              className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Read Full Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Explore More</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/interim-cfo-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CFO Jobs</Link>
              <Link href="/interim-cto-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CTO Jobs</Link>
              <Link href="/interim-cmo-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CMO Jobs</Link>
              <Link href="/interim-executive-salary-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Salary Guide</Link>
              <Link href="/interim-jobs-articles" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Career Guides</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
