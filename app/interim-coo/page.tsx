import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim COO | What is an Interim COO? | Interim Quest',
  description: 'Everything about Interim COO roles in the UK. Learn about day rates (£1,200-£2,000), career paths, assignment types, and skills needed for operational turnaround, restructuring, and vacancy cover.',
  keywords: 'interim coo, what is an interim coo, interim coo day rate, interim coo salary, interim chief operating officer, operational turnaround, restructuring, vacancy cover',
  alternates: { canonical: 'https://interim.quest/interim-coo' },
}

export default function InterimCOOPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-orange-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Role Guide</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">What is an<br /><span className="text-orange-400">Interim COO?</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time operational leadership for 3-12 months. Leading turnarounds, restructuring, and covering critical leadership gaps when permanent solutions are not viable yet.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#what-is-interim-coo" className="px-8 py-4 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Learn About the Role</Link>
                <Link href="#day-rates" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">View Day Rates</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-is-interim-coo" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim COO?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">An <strong>Interim COO (Chief Operating Officer)</strong> is a senior operations executive hired on a temporary, full-time basis to lead an organisation's operations during periods of transformation, crisis, or leadership transition.</p>

            <p className="text-gray-600 mb-6">Unlike consultants or part-time advisors, Interim COOs are fully embedded members of the executive team, working 4-5 days per week exclusively for one organisation for a defined period—typically 3-12 months.</p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Key Distinction: INTERIM = Full-time</h3>
              <p className="text-gray-700 mb-0">Interim COO roles are full-time, temporary positions. These executives work exclusively for your organisation during critical periods like operational turnarounds, restructuring programs, or while you search for a permanent COO. They are not part-time consultants—they are fully committed operational leaders.</p>
            </div>

            <p className="text-gray-600">Interim COOs typically step in when organisations face operational challenges too complex for consultants, too urgent for part-time support, or too risky to leave vacant while recruiting permanently.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Types of Interim COO Assignments</h2>
          <div className="space-y-6">
            {[
              {
                type: 'Operational Turnaround',
                duration: '6-12 months',
                description: 'Leading comprehensive operational restructuring when business performance has deteriorated. Focus on stabilising operations, cutting costs, improving processes, and restoring operational efficiency.',
                typical: 'Common in distressed businesses, post-acquisition integration, or when operational metrics are failing.'
              },
              {
                type: 'Restructuring & Transformation',
                duration: '6-12 months',
                description: 'Managing major organisational restructuring programs including process redesign, technology implementation, team reorganisation, and operational model changes.',
                typical: 'Often follows strategic pivots, growth phases requiring operational scalability, or when existing operations are no longer fit for purpose.'
              },
              {
                type: 'Vacancy Cover (Leadership Gap)',
                duration: '3-9 months',
                description: 'Filling critical COO vacancy while permanent recruitment is underway. Maintaining operational stability, continuing strategic initiatives, and managing the executive team during the transition.',
                typical: 'When a COO departs unexpectedly, during executive succession planning, or when the permanent search is taking longer than anticipated.'
              },
              {
                type: 'Crisis Management',
                duration: '3-6 months',
                description: 'Providing urgent operational leadership during crises such as major system failures, supply chain collapse, regulatory investigations, or significant operational incidents.',
                typical: 'Emergency situations requiring immediate, experienced operational leadership to stabilise and resolve critical issues.'
              },
              {
                type: 'Rapid Scaling & Growth',
                duration: '6-12 months',
                description: 'Building operational infrastructure to support rapid growth. Establishing processes, systems, and teams needed to scale from startup to scale-up phase.',
                typical: 'Post-funding rounds, market expansion, or when growth has outpaced operational capability.'
              },
              {
                type: 'M&A Integration',
                duration: '6-9 months',
                description: 'Leading operational integration following mergers or acquisitions. Combining operations, harmonising processes, managing redundancies, and delivering synergies.',
                typical: 'Post-deal completion when operational integration expertise is needed temporarily.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{item.type}</h3>
                  <span className="text-sm text-orange-600 font-semibold">{item.duration}</span>
                </div>
                <p className="text-gray-700 mb-3">{item.description}</p>
                <p className="text-sm text-gray-500 italic">{item.typical}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="day-rates" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Interim COO Day Rates</h2>
          <div className="bg-gray-50 border border-gray-200 p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-black text-orange-500 mb-2">£1,200 - £2,000</div>
              <div className="text-gray-600">per day (typical range)</div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">£1,200-£1,400</div>
                <div className="text-sm text-gray-600 mt-1">Early-stage companies<br />Smaller operations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">£1,500-£1,700</div>
                <div className="text-sm text-gray-600 mt-1">Mid-market businesses<br />Standard complexity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">£1,800-£2,000+</div>
                <div className="text-sm text-gray-600 mt-1">Large corporates<br />Complex turnarounds</div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Factors Affecting Day Rates</h3>
            <ul className="space-y-3 text-gray-600">
              <li><strong>Assignment complexity:</strong> Crisis turnarounds and complex restructuring command premium rates</li>
              <li><strong>Company size:</strong> Larger organisations with more complex operations pay higher rates</li>
              <li><strong>Industry expertise:</strong> Specialist sector knowledge (manufacturing, logistics, tech) increases rates</li>
              <li><strong>Duration:</strong> Longer assignments (9-12 months) may negotiate slightly lower daily rates</li>
              <li><strong>Location:</strong> London-based roles typically at the higher end, regional roles lower</li>
              <li><strong>Experience:</strong> Former COOs from FTSE companies or major multinationals command premium rates</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Annual Equivalent</h4>
              <p className="text-gray-700 mb-0">At £1,500/day for 4 days per week over 12 months, an Interim COO costs approximately £288,000—comparable to a permanent COO salary but with significantly more flexibility and immediate expertise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Skills Required for Interim COO Roles</h2>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Core Operational Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'End-to-end operations management across multiple functions',
                'P&L responsibility and financial performance management',
                'Supply chain and logistics optimisation',
                'Process design and operational efficiency improvement',
                'Technology implementation and systems integration',
                'Team restructuring and organisational design',
                'Performance metrics and KPI framework development',
                'Risk management and compliance oversight',
              ].map((skill, i) => (
                <div key={i} className="flex items-start bg-white p-4 border border-gray-200">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Interim-Specific Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Rapid diagnostic assessment of operational issues',
                'Quick stakeholder relationship building',
                'Change management in resistance environments',
                'Executive presence and board-level communication',
                'Ability to make tough decisions without political baggage',
                'Crisis management and firefighting experience',
                'Delivering results within compressed timeframes',
                'Knowledge transfer and capability building for successors',
              ].map((skill, i) => (
                <div key={i} className="flex items-start bg-white p-4 border border-gray-200">
                  <span className="text-orange-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Industry-Specific Experience</h3>
            <p className="text-gray-600 mb-4">While operational excellence is transferable, many interim COO roles require specific sector knowledge:</p>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                'Manufacturing & Supply Chain',
                'Technology & SaaS',
                'Retail & E-commerce',
                'Financial Services',
                'Healthcare & Life Sciences',
                'Professional Services',
                'Logistics & Distribution',
                'Hospitality & Leisure',
                'Energy & Utilities',
              ].map((industry, i) => (
                <div key={i} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 border border-gray-200">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Career Path to Interim COO</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Typical Background</h3>
              <p className="text-gray-600 mb-4">Most Interim COOs have spent 15-25+ years in operational leadership roles, including:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• 5-10+ years as a permanent COO or equivalent C-suite operational role</li>
                <li>• Prior experience as Operations Director, VP Operations, or similar senior positions</li>
                <li>• Track record of managing P&Ls of £20m-£500m+</li>
                <li>• Experience leading teams of 50-1,000+ people</li>
                <li>• Multiple sector experiences or deep specialisation in one industry</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transition to Interim Work</h3>
              <p className="text-gray-600 mb-4">Executives typically move into interim COO work when they:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Have successfully exited a permanent COO role and want flexibility</li>
                <li>• Prefer variety and challenge over long-term permanence</li>
                <li>• Want to leverage expertise across multiple organisations</li>
                <li>• Are between permanent roles and want to stay active</li>
                <li>• Are approaching retirement but not ready to stop entirely</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Building an Interim Portfolio</h3>
              <p className="text-gray-600 mb-4">Successful Interim COOs typically:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete 3-5 assignments over 2-3 years to build credibility</li>
                <li>• Develop expertise in specific assignment types (turnaround, M&A, etc.)</li>
                <li>• Build relationships with interim recruitment firms and PE houses</li>
                <li>• Maintain visible presence through networking and thought leadership</li>
                <li>• Secure 2-3 assignments per year with gaps for business development</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Who Shouldn't Pursue Interim COO Work?</h3>
              <p className="text-gray-700">This path is not suitable if you need employment security, want deep organisational relationships, prefer building long-term strategy over fixing immediate problems, or lack the resilience for constant change and political complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">What to Expect in an Interim COO Assignment</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">First 30 Days: Assess & Stabilise</h3>
              <p className="text-gray-600 mb-3">Rapid operational diagnostic, stakeholder interviews, quick wins to build credibility, stabilising any immediate crises, and developing 90-day action plan.</p>
              <div className="text-sm text-gray-500">Key activities: Operations audit, team assessment, process review, stakeholder mapping</div>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Days 30-90: Plan & Execute</h3>
              <p className="text-gray-600 mb-3">Implementing priority initiatives, restructuring teams if needed, establishing performance metrics, fixing broken processes, and building operational cadence.</p>
              <div className="text-sm text-gray-500">Key activities: Change implementation, team restructuring, process redesign, performance management</div>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Days 90-180: Transform & Deliver</h3>
              <p className="text-gray-600 mb-3">Driving major transformation initiatives, delivering measurable operational improvements, embedding new ways of working, coaching and developing teams.</p>
              <div className="text-sm text-gray-500">Key activities: Major project delivery, culture change, capability building, results demonstration</div>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Final Phase: Transition & Exit</h3>
              <p className="text-gray-600 mb-3">Knowledge transfer to successor or internal team, ensuring sustainability of changes, documenting processes and learnings, structured handover.</p>
              <div className="text-sm text-gray-500">Key activities: Successor onboarding, documentation, knowledge transfer, exit planning</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Interim vs Part-time vs Consulting COO</h2>
          <ServiceComparisonTable role="COO" accentColor="orange" />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Questions About Interim COO Roles</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How long do Interim COO assignments typically last?</h3>
              <p className="text-gray-600">Most assignments run 3-12 months. Vacancy cover tends to be shorter (3-6 months), while turnarounds and transformations typically require 6-12 months. Extensions are common if objectives have not been fully delivered.</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Can an Interim COO become permanent?</h3>
              <p className="text-gray-600">Yes, this happens in 15-20% of cases. Many interim assignments include a "temp-to-perm" clause. However, most Interim COOs prefer to remain interim and wouldn't consider permanent roles.</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What's the notice period for an Interim COO?</h3>
              <p className="text-gray-600">Typically 4 weeks, though this is negotiable. Interim contracts usually allow early termination by either party with notice, providing flexibility for both sides.</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How quickly can an Interim COO start?</h3>
              <p className="text-gray-600">Most Interim COOs can start within 2-4 weeks if available. Those finishing current assignments may need 4-8 weeks. Urgent crisis situations sometimes see starts within 1 week.</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">What size of organisation needs an Interim COO?</h3>
              <p className="text-gray-600">Typically organisations with £10m+ revenue, 50+ employees, or multi-site operations. Smaller organisations might consider part-time fractional COOs instead. PE-backed businesses of any size frequently use Interim COOs.</p>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">How are Interim COOs typically engaged?</h3>
              <p className="text-gray-600">Either directly as contractors (via limited companies) or through interim management firms. Most work through their own limited company on day-rate contracts, invoicing monthly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Hire an Interim COO?</h2>
          <p className="text-xl text-gray-400 mb-10">Whether you need operational turnaround expertise, restructuring leadership, or urgent vacancy cover, we can connect you with experienced Interim COOs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Find an Interim COO</Link>
            <Link href="/roles" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Other Roles</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
