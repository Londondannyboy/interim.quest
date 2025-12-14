import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CTO | What is an Interim CTO? | Interim Quest',
  description: 'What is an Interim CTO? Full-time temporary CTOs for 3-12 month assignments. Tech turnarounds, digital transformation, vacancy cover. Day rates £1,200-£2,000. Career path and skills guide.',
  keywords: 'interim cto, what is an interim cto, interim cto day rate, interim cto salary, temporary cto, interim chief technology officer, tech turnaround, digital transformation',
  alternates: { canonical: 'https://interim.quest/interim-cto' },
  openGraph: {
    title: 'Interim CTO | What is an Interim CTO? | Interim Quest',
    description: 'Full-time temporary CTOs for 3-12 month assignments. Tech turnarounds, digital transformation, vacancy cover.',
    url: 'https://interim.quest/interim-cto',
  },
}

export default function InterimCTOPage() {
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
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Full-Time Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
                What is an<br /><span className="text-blue-400">Interim CTO?</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Full-time temporary Chief Technology Officers for 3-12 month assignments. Leadership for tech turnarounds, digital transformations, and CTO vacancy cover. Day rates £1,200-£2,000.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#what-is" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Learn More</Link>
                <Link href="/handler/sign-up" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Find an Interim CTO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-is" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">What is an Interim CTO?</h2>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              An <strong>Interim CTO</strong> is a temporary Chief Technology Officer who works <strong>full-time</strong> for a fixed period, typically 3-12 months. This is a leadership role focused exclusively on one organisation during a critical period of change, crisis, or transition.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Unlike fractional or part-time CTOs, Interim CTOs are present 5 days per week, embedded within the organisation just like a permanent CTO. The key difference is the time-bound nature of the engagement and the specific mission focus.
            </p>
            <p className="text-lg text-gray-700">
              Interim CTOs are brought in to navigate specific challenges: tech turnarounds, digital transformations, platform migrations, crisis management, or to cover a permanent CTO vacancy while recruitment is underway.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim CTO Assignments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Tech Turnaround',
                description: 'Legacy systems failing, mounting technical debt, quality crisis. The Interim CTO diagnoses issues, stabilises operations, and rebuilds engineering standards.',
                duration: '6-12 months'
              },
              {
                title: 'Digital Transformation',
                description: 'Leading cloud migration, platform modernisation, or complete technology stack overhaul. Full-time leadership to drive change.',
                duration: '6-12 months'
              },
              {
                title: 'Vacancy Cover',
                description: 'Permanent CTO departed or on extended leave. Interim CTO maintains momentum and provides stability during recruitment.',
                duration: '3-6 months'
              },
              {
                title: 'Crisis Management',
                description: 'Security breach, major outage, regulatory compliance failure. Immediate full-time leadership to resolve and prevent recurrence.',
                duration: '3-6 months'
              },
              {
                title: 'M&A Integration',
                description: 'Post-acquisition tech integration, system consolidation, team merger. Focused leadership for critical transition period.',
                duration: '6-9 months'
              },
              {
                title: 'Scale-Up Growth',
                description: 'Rapid expansion requiring technology scaling, team growth, and infrastructure buildout before permanent CTO hire.',
                duration: '4-8 months'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{item.duration}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim CTO Day Rates & Compensation</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Interim CTO day rates in the UK typically range from <strong>£1,200 to £2,000 per day</strong>, depending on experience, assignment complexity, and industry sector.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 border border-gray-200">
              <div className="text-sm font-bold text-gray-500 mb-2">STANDARD</div>
              <div className="text-3xl font-black text-gray-900 mb-2">£1,200-£1,400</div>
              <div className="text-sm text-gray-600">per day</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• 5-10 years CTO experience</li>
                <li>• Scale-up background</li>
                <li>• Standard assignments</li>
                <li>• UK markets</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 border-2 border-blue-500">
              <div className="text-sm font-bold text-blue-700 mb-2">EXPERIENCED</div>
              <div className="text-3xl font-black text-gray-900 mb-2">£1,500-£1,800</div>
              <div className="text-sm text-gray-600">per day</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• 10-15 years CTO experience</li>
                <li>• Multiple interim assignments</li>
                <li>• Complex transformations</li>
                <li>• Regulated industries</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200">
              <div className="text-sm font-bold text-gray-500 mb-2">SPECIALIST</div>
              <div className="text-3xl font-black text-gray-900 mb-2">£1,800-£2,000+</div>
              <div className="text-sm text-gray-600">per day</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li>• 15+ years CTO experience</li>
                <li>• Crisis/turnaround specialist</li>
                <li>• Enterprise/FTSE background</li>
                <li>• Niche technical domains</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 font-medium mb-2">Total Assignment Cost</p>
            <p className="text-blue-700 text-sm">For a 6-month assignment at £1,500/day (5 days/week): approximately £180,000-£195,000. This is comparable to a permanent CTO's annual salary plus benefits, but delivered in a focused, time-limited engagement with no long-term commitment.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills & Experience Needed</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700">
              Interim CTOs require a broader skill set than permanent CTOs. Beyond technical leadership, they must rapidly assess situations, implement change under pressure, and navigate organisational politics without established relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                Technical Leadership
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 10+ years in senior technical roles</li>
                <li>• Previous CTO or VP Engineering experience</li>
                <li>• Architecture and system design expertise</li>
                <li>• Multiple technology stacks and platforms</li>
                <li>• Cloud infrastructure and DevOps</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                Change Management
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Leading organisational transformation</li>
                <li>• Managing resistance and conflict</li>
                <li>• Building consensus across stakeholders</li>
                <li>• Implementing new processes and culture</li>
                <li>• Communication to board and investors</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                Crisis & Turnaround
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Rapid diagnosis of technical problems</li>
                <li>• Stabilising failing systems and teams</li>
                <li>• Working under pressure and scrutiny</li>
                <li>• Making difficult decisions quickly</li>
                <li>• Managing technical debt and legacy code</li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
                Business Acumen
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Understanding commercial drivers</li>
                <li>• Budget management and cost control</li>
                <li>• Vendor negotiation and procurement</li>
                <li>• Business case development</li>
                <li>• Risk assessment and mitigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim CTO Career Path</h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Most Interim CTOs transition from permanent CTO roles after 15-20 years in technology leadership. The career path typically follows this progression:
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">1</div>
                <div className="flex-1 bg-gray-50 p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Permanent CTO (10-15 years)</h3>
                  <p className="text-sm text-gray-700">Build experience as CTO or VP Engineering across multiple companies. Develop expertise in scaling teams, leading transformations, and navigating crises. Typically 2-3 permanent roles.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">2</div>
                <div className="flex-1 bg-gray-50 p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">First Interim Assignment (3-6 months)</h3>
                  <p className="text-sm text-gray-700">Take first interim role, often through network or recommendation. Prove ability to deliver results in short timeframe. Build confidence in interim operating model.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">3</div>
                <div className="flex-1 bg-gray-50 p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Portfolio Building (2-3 years)</h3>
                  <p className="text-sm text-gray-700">Complete 3-5 interim assignments across different situations. Develop reputation and case studies. Build network with interim agencies and direct clients. Refine day rate and positioning.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div className="flex-1 bg-blue-50 p-6 border-2 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">Established Interim CTO (Ongoing)</h3>
                  <p className="text-sm text-gray-700">Regular pipeline of assignments through reputation and network. Premium day rates (£1,800-£2,000+). Selective about assignments. May specialise in specific types of work (turnaround, transformation, etc).</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-gray-700 text-sm mb-4">
              <strong>Alternative Entry Point:</strong> Some Interim CTOs come from consulting backgrounds (McKinsey, BCG, Big 4) where they've led technology transformations. This path emphasises change management and stakeholder engagement over hands-on technical experience.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Key Success Factor:</strong> Building a strong network is critical. Most interim assignments come through referrals, not job boards. Active engagement in CTO communities, conference speaking, and maintaining relationships with former colleagues and clients drives deal flow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServiceComparisonTable role="CTO" accentColor="blue" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find an Interim CTO</h2>
          <p className="text-xl text-gray-400 mb-10">Whether you need a tech turnaround specialist, transformation leader, or vacancy cover, we connect you with experienced Interim CTOs ready to start immediately.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Get Started</Link>
            <Link href="/interim-cto-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Or Consider Fractional CTO</Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/interim-cto-services" className="text-gray-600 hover:text-blue-600 font-medium">Fractional CTO</Link>
            <Link href="/interim-cfo" className="text-gray-600 hover:text-blue-600 font-medium">Interim CFO</Link>
            <Link href="/interim-cmo" className="text-gray-600 hover:text-blue-600 font-medium">Interim CMO</Link>
            <Link href="/interim-coo" className="text-gray-600 hover:text-blue-600 font-medium">Interim COO</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
