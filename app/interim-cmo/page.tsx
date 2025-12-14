import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CMO | What is an Interim CMO? | Interim Quest',
  description: 'What is an Interim CMO? Full-time temporary marketing leadership for 3-12 months. Day rates £1,200-£2,000. Career path, assignments, and skills needed to become an interim CMO.',
  keywords: 'interim cmo, what is interim cmo, interim cmo career, interim cmo day rate, interim cmo salary, interim chief marketing officer, interim cmo jobs',
  alternates: { canonical: 'https://interim.quest/interim-cmo' },
  openGraph: {
    title: 'Interim CMO | What is an Interim CMO? | Interim Quest',
    description: 'What is an Interim CMO? Full-time temporary marketing leadership for 3-12 months. Day rates £1,200-£2,000.',
    url: 'https://interim.quest/interim-cmo',
  },
}

export default function InterimCMOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Career Guide</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
                What is an<br /><span className="text-amber-400">Interim CMO?</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Full-time temporary Chief Marketing Officers earning £1,200-£2,000 per day. Leadership roles lasting 3-12 months for rebrands, transformations, and crisis situations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Find Interim CMO Jobs</Link>
                <Link href="#career-path" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Career Path</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">What is an Interim CMO?</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              An <strong>Interim CMO</strong> (Chief Marketing Officer) is a senior marketing executive hired on a full-time, temporary basis to provide marketing leadership during periods of transition, transformation, or crisis. Unlike fractional or part-time CMOs, interim CMOs work exclusively for one organisation, typically for 3-12 months.
            </p>
            <p className="text-gray-700 mb-4">
              Interim CMOs are brought in to handle specific situations: covering a vacancy while recruiting a permanent CMO, leading a major rebrand, driving digital transformation, managing a crisis, or integrating marketing teams post-merger. They hit the ground running with deep expertise and the authority to make decisions and drive change quickly.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>This is not a part-time role.</strong> Interim CMOs work full-time (5 days per week) with complete focus on the organisation's marketing challenges. They are embedded in the business, leading teams, making strategic decisions, and delivering results within a defined timeframe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CMO Assignments</h2>
          <p className="text-gray-600 mb-8">Interim CMOs are hired for specific, high-impact assignments. Here are the most common scenarios:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'Vacancy Cover',
                description: 'Your CMO has departed and you need immediate full-time leadership while recruiting a permanent replacement. The interim maintains momentum and ensures no critical projects stall.',
                duration: '4-8 months'
              },
              {
                scenario: 'Major Rebrand',
                description: 'Complete brand overhaul requiring dedicated full-time leadership. From strategy through to launch, the interim CMO drives the entire transformation.',
                duration: '6-12 months'
              },
              {
                scenario: 'Digital Transformation',
                description: 'Overhauling your marketing tech stack, moving to digital-first, or transforming your go-to-market approach. Requires full-time expertise and change management.',
                duration: '6-12 months'
              },
              {
                scenario: 'Market Launch',
                description: 'Launching into new markets or launching a new product requiring intensive full-time marketing leadership for planning and execution.',
                duration: '4-9 months'
              },
              {
                scenario: 'Merger Integration',
                description: 'Post-merger integration of marketing teams, consolidating brands, and aligning marketing strategies across the combined entity.',
                duration: '6-12 months'
              },
              {
                scenario: 'Crisis Management',
                description: 'Marketing performance crisis, brand reputation issues, or team dysfunction requiring immediate full-time intervention and turnaround leadership.',
                duration: '3-6 months'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{item.scenario}</h3>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded font-medium whitespace-nowrap ml-2">{item.duration}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim CMO Day Rates and Earning Potential</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-600 mb-4">
              Interim CMOs in the UK typically earn between <strong>£1,200-£2,000 per day</strong>, depending on experience, sector expertise, and assignment complexity.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Day Rate Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-900">Entry-level Interim CMO</span>
                  <p className="text-sm text-gray-600">5-10 years marketing leadership experience</p>
                </div>
                <span className="font-bold text-gray-900">£1,200-£1,400/day</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-900">Experienced Interim CMO</span>
                  <p className="text-sm text-gray-600">10-15 years, proven track record</p>
                </div>
                <span className="font-bold text-gray-900">£1,400-£1,700/day</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-900">Senior Interim CMO</span>
                  <p className="text-sm text-gray-600">15+ years, complex transformations</p>
                </div>
                <span className="font-bold text-amber-600">£1,700-£2,000/day</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Annual Earning Potential</h3>
            <p className="text-gray-700 mb-4">Based on working 220 days per year (allowing for time between assignments):</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">£1,200/day × 220 days</span>
                <span className="font-bold text-gray-900">£264,000/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">£1,500/day × 220 days</span>
                <span className="font-bold text-gray-900">£330,000/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">£2,000/day × 220 days</span>
                <span className="font-bold text-amber-600">£440,000/year</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">Note: As a contractor, you'll need to manage your own tax, pension, and insurance.</p>
          </div>
        </div>
      </section>

      <section id="career-path" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Becoming an Interim CMO</h2>
          <p className="text-gray-600 mb-8">Most interim CMOs follow a similar career trajectory before transitioning to interim work:</p>

          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white font-black text-xl flex items-center justify-center rounded">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Build Marketing Leadership Experience (10+ years)</h3>
                  <p className="text-gray-600">Start in marketing roles and progress to Head of Marketing, Marketing Director, or CMO positions in permanent roles. You need proven experience leading teams, owning P&L, and delivering results at a strategic level.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white font-black text-xl flex items-center justify-center rounded">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Develop Specialist Expertise</h3>
                  <p className="text-gray-600">Build deep expertise in specific areas: rebrands, digital transformation, B2B marketing, D2C growth, or specific sectors (tech, finance, retail). This expertise makes you valuable for specific interim assignments.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white font-black text-xl flex items-center justify-center rounded">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Establish Your Track Record</h3>
                  <p className="text-gray-600">Document your achievements: successful rebrands, revenue growth, team transformations, crisis turnarounds. You'll need concrete case studies and references to win interim roles.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white font-black text-xl flex items-center justify-center rounded">4</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Set Up as a Contractor</h3>
                  <p className="text-gray-600">Register as a limited company or umbrella company contractor. Get professional indemnity insurance, set up accounting, and ensure you are IR35-compliant.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white font-black text-xl flex items-center justify-center rounded">5</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Build Your Network</h3>
                  <p className="text-gray-600">Connect with interim agencies, recruiters specialising in interim executives, and build relationships with CEOs and boards. Most interim work comes through referrals and networks.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-l-4 border-amber-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white font-black text-xl flex items-center justify-center rounded">6</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Land Your First Interim Assignment</h3>
                  <p className="text-gray-600">Your first role is the hardest to get. Start with your network, register with specialist interim agencies, and be prepared to move quickly when opportunities arise. Once you have one successful interim assignment, more follow.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 font-medium mb-2">Typical Background:</p>
            <p className="text-amber-700">Most interim CMOs are 40-55 years old with 15-25 years of marketing experience. They've held permanent CMO or Marketing Director roles and are looking for variety, higher earnings, and the challenge of different assignments.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills Required to Succeed as an Interim CMO</h2>
          <p className="text-gray-600 mb-8">Beyond standard marketing expertise, interim CMOs need specific skills to thrive in temporary, high-pressure assignments:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Rapid Assessment
              </h3>
              <p className="text-gray-600 text-sm">Ability to quickly understand the business, market, team dynamics, and marketing challenges within the first 2-4 weeks. No time for lengthy onboarding.</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Change Management
              </h3>
              <p className="text-gray-600 text-sm">Leading teams through transformation, managing resistance, and getting buy-in from stakeholders who may be sceptical of a temporary executive.</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Political Navigation
              </h3>
              <p className="text-gray-600 text-sm">Understanding and navigating complex stakeholder dynamics, board politics, and organisational cultures quickly without an established power base.</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Execution Focus
              </h3>
              <p className="text-gray-600 text-sm">Delivering tangible results within 3-12 months. No time for just strategy—you need to execute and show measurable impact before your assignment ends.</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Team Building
              </h3>
              <p className="text-gray-600 text-sm">Building credibility and trust with teams quickly, motivating them during uncertainty, and developing capabilities that outlast your tenure.</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Resilience
              </h3>
              <p className="text-gray-600 text-sm">Handling the pressure of fixing problems quickly, working in crisis situations, and managing the uncertainty of contract-to-contract work.</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Knowledge Transfer
              </h3>
              <p className="text-gray-600 text-sm">Documenting your work, training teams, and ensuring your initiatives continue after you leave. Planning your exit from day one.</p>
            </div>

            <div className="bg-gray-50 p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-amber-500">✓</span> Self-Management
              </h3>
              <p className="text-gray-600 text-sm">Running your own business, managing finances, marketing yourself, maintaining networks, and handling gaps between assignments without the safety net of employment.</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 font-medium mb-2">Core Marketing Skills Required:</p>
            <p className="text-amber-700 text-sm">Brand strategy, digital marketing, demand generation, marketing operations, team leadership, budget management, stakeholder management, analytics and measurement. You should have led at least one major transformation or rebrand successfully.</p>
          </div>
        </div>
      </section>

      <section id="jobs" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Finding Interim CMO Jobs</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-600">
              Interim CMO roles are typically found through specialist interim agencies, executive recruiters, and professional networks. Unlike permanent roles, interim positions move fast—from initial contact to start date can be as little as 2-3 weeks.
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-8 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">Where to Find Interim CMO Opportunities:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong className="text-gray-900">Specialist Interim Agencies</strong>
                  <p className="text-gray-600 text-sm">Register with agencies specialising in interim executives (The FD Centre, Vercida, Odgers Interim, etc.)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong className="text-gray-900">Executive Recruiters</strong>
                  <p className="text-gray-600 text-sm">Build relationships with headhunters who place interim as well as permanent C-suite roles</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong className="text-gray-900">LinkedIn</strong>
                  <p className="text-gray-600 text-sm">Optimise your profile for interim work, join interim executive groups, and engage with recruiters actively</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong className="text-gray-900">Your Network</strong>
                  <p className="text-gray-600 text-sm">Former colleagues, board connections, and CEOs you've worked with are often the best source of interim work</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-500 font-bold">→</span>
                <div>
                  <strong className="text-gray-900">Interim Marketplaces</strong>
                  <p className="text-gray-600 text-sm">Online platforms connecting interim executives with businesses (Interim Quest, Exec Appointments, etc.)</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-black text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-black mb-4">Looking for Interim CMO Opportunities?</h3>
            <p className="text-gray-300 mb-6">Join Interim Quest to access exclusive interim CMO roles and connect with businesses seeking temporary marketing leadership.</p>
            <Link href="/handler/sign-up" className="inline-block px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Join as an Interim CMO</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CMO" accentColor="amber" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Become an Interim CMO?</h2>
          <p className="text-xl text-gray-400 mb-10">Join Interim Quest to find your next assignment or hire an interim CMO for your business.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Find Interim CMO Jobs</Link>
            <Link href="/interim-cmo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Hire an Interim CMO</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/interim-cmo-services" className="text-gray-600 hover:text-amber-600 font-medium">Fractional CMO Services</Link>
            <Link href="/interim-cfo" className="text-gray-600 hover:text-amber-600 font-medium">Interim CFO</Link>
            <Link href="/interim-cto" className="text-gray-600 hover:text-amber-600 font-medium">Interim CTO</Link>
            <Link href="/interim-coo" className="text-gray-600 hover:text-amber-600 font-medium">Interim COO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
