import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, CMO_SERVICE_FAQS } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CMO Services UK | Hire a Temporary CMO',
  description: 'Hire an Interim CMO for full-time temporary marketing leadership. Expert CMOs for leadership gaps, transformation, crisis management, and M&A integration. Available 3-12 months.',
  keywords: 'interim cmo, interim cmo services, hire interim cmo, temporary cmo, interim chief marketing officer, interim cmo uk, interim marketing director',
  alternates: {
    canonical: 'https://interim.quest/interim-cmo-services',
  },
  openGraph: {
    title: 'Interim CMO Services UK | Hire a Temporary CMO',
    description: 'Hire an Interim CMO for full-time temporary marketing leadership. Expert CMOs for leadership gaps, transformation, and crisis management.',
    images: ['/images/interim-cmo-services.jpg'],
    url: 'https://interim.quest/interim-cmo-services',
  },
}

export default function InterimCMOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Marketing Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CMO<br />
                <span className="text-amber-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CMO</strong> for full-time temporary marketing leadership.
                Expert CMOs for leadership gaps, transformation projects, crisis management, and business turnarounds.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-amber-400">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Commitment</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1 Week</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Start</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
                  Hire an Interim CMO
                </Link>
                <Link href="#calculator" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  View Day Rates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Interim CMO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CMO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CMO</strong> is an experienced Chief Marketing Officer who works with your company on a full-time, temporary basis—typically for 3-12 months. They provide immediate senior marketing leadership during critical periods: CMO vacancies, business transformation, rebrands, turnarounds, or major market shifts.
            </p>
            <p>
              Unlike fractional CMOs who work part-time across multiple clients, an interim CMO is dedicated full-time to your business. They step in as your acting CMO, leading the marketing function with complete ownership and accountability. Unlike marketing consultants who advise, interim CMOs execute—they make decisions, lead teams, manage budgets, and deliver results.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-amber-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CMOs provide full-time leadership when you need it most: during transitions, transformations, or crises that demand immediate executive attention."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim CMO vs Fractional CMO</h3>
            <p>
              A fractional CMO works part-time (1-3 days per week) across multiple clients. They're ideal for ongoing strategic guidance when you don't need full-time leadership.
            </p>
            <p>
              An interim CMO works full-time (5 days per week) exclusively for your business for a defined period. They're the solution for urgent situations: filling a leadership gap, driving a major transformation, leading a rebrand, or navigating a crisis. When the situation demands a senior marketing executive on-site, in meetings, making decisions daily—you need an interim, not a fractional.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CMO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Full-time executive responsibilities during your engagement</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Leadership Gap Coverage',
                description: 'Step into the CMO role immediately. Lead marketing team, attend board meetings, manage stakeholders, and make strategic decisions from day one.',
                icon: '👔',
              },
              {
                title: 'Transformation Leadership',
                description: 'Drive major change initiatives: digital transformation, marketing restructure, new market entry, or business model shifts.',
                icon: '🔄',
              },
              {
                title: 'Crisis Management',
                description: 'Navigate urgent marketing challenges: reputation crises, failed campaigns, competitive threats, or rapid market changes requiring immediate executive response.',
                icon: '🚨',
              },
              {
                title: 'Rebrand & Repositioning',
                description: 'Lead company-wide rebranding, repositioning, or market expansion projects. Full ownership from strategy through execution.',
                icon: '✨',
              },
              {
                title: 'Team Restructuring',
                description: 'Assess marketing team, restructure for efficiency, hire critical roles, or manage difficult personnel transitions during organizational change.',
                icon: '👥',
              },
              {
                title: 'M&A Marketing Integration',
                description: 'Integrate marketing functions post-merger or acquisition. Unify brands, teams, systems, and strategies across combined entities.',
                icon: '🤝',
              },
              {
                title: 'Permanent CMO Recruitment',
                description: 'Define requirements, lead search process, and hire your permanent CMO. Ensure smooth handover and transition when engagement ends.',
                icon: '🎯',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-amber-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire an Interim CMO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Immediate Leadership',
                description: 'Deploy a senior marketing executive within 1-2 weeks. No 3-6 month recruitment process. They hit the ground running from day one with immediate impact on your business.',
                stat: '1-2',
                statLabel: 'Weeks to Start',
              },
              {
                title: 'Crisis & Transformation Expertise',
                description: 'Get an executive who specializes in high-stakes situations: turnarounds, rebrands, transformations, M&A integration. They have navigated these challenges successfully before.',
                stat: '20+',
                statLabel: 'Years Experience',
              },
              {
                title: 'No Long-Term Commitment',
                description: 'Hire for exactly the time needed—3, 6, or 12 months. Perfect for defined projects or bridging to a permanent hire. Exit cleanly when the mission is complete.',
                stat: '3-12',
                statLabel: 'Month Terms',
              },
              {
                title: 'Full-Time Dedication',
                description: 'Unlike fractional or consultant CMOs, interims work full-time exclusively for you. Complete focus, availability for all meetings, embedded in your culture and team.',
                stat: '5',
                statLabel: 'Days/Week',
              },
              {
                title: 'Objective Perspective',
                description: 'External executives bring fresh eyes without internal politics. They make tough decisions, challenge assumptions, and drive change without baggage.',
                stat: '100%',
                statLabel: 'Objectivity',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-amber-500">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-amber-600">{benefit.stat}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{benefit.statLabel}</div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire an Interim CMO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none mb-8">
            <p>
              Interim CMOs are hired for specific, high-stakes situations that demand full-time executive leadership on a temporary basis:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CMO Vacancy or Departure',
                description: 'Your CMO left suddenly or you need to fill the role while recruiting. An interim CMO provides continuity, leads the team, and prevents marketing momentum loss during the transition.',
                timing: 'Immediate',
              },
              {
                scenario: 'Company Rebrand or Repositioning',
                description: 'Major rebranding, market repositioning, or brand consolidation projects require dedicated executive leadership. Interims specialize in leading these 6-12 month initiatives.',
                timing: 'Project kickoff',
              },
              {
                scenario: 'Digital Transformation',
                description: 'Transforming marketing from traditional to digital, implementing new MarTech stack, or building digital-first capabilities requires full-time change leadership.',
                timing: 'Transformation start',
              },
              {
                scenario: 'Business Turnaround or Crisis',
                description: 'Declining revenue, failed product launch, or reputation crisis requires immediate, full-time crisis management and strategic recovery led by an experienced executive.',
                timing: 'ASAP',
              },
              {
                scenario: 'M&A Marketing Integration',
                description: 'Post-merger or acquisition, marketing functions must be integrated: unify brands, consolidate teams, align messaging. This requires dedicated full-time leadership.',
                timing: 'Post-close',
              },
              {
                scenario: 'Major Market Expansion',
                description: 'Launching in new geography, entering new vertical, or pivoting business model demands full-time marketing leadership to define and execute the new GTM strategy.',
                timing: '2-3 months before',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does an Interim CMO Cost?</h2>
            <p className="text-gray-600 mt-4">Day rates for full-time temporary CMO leadership</p>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">Interim CMO Day Rates</h3>
            <ul className="text-gray-600">
              <li><strong>Standard Rate:</strong> £1,200-£1,500 per day (for experienced CMOs with 15+ years)</li>
              <li><strong>Senior/Specialist Rate:</strong> £1,500-£2,000 per day (crisis management, transformation, complex M&A)</li>
              <li><strong>Monthly Cost:</strong> £24,000-£40,000 for full-time engagement (20-22 working days/month)</li>
              <li><strong>3-Month Engagement:</strong> £72,000-£120,000 total</li>
              <li><strong>6-Month Engagement:</strong> £144,000-£240,000 total</li>
            </ul>
            <div className="bg-gray-50 p-6 border-l-4 border-amber-500 my-6">
              <p className="font-semibold text-gray-900 mb-2">Typical Engagement Structure</p>
              <p className="text-gray-600 mb-0">
                Most interim CMO engagements are 3-6 months full-time. Unlike permanent hires, you pay day rates with no benefits, pension, or long-term commitment.
                Unlike fractional CMOs, you get dedicated full-time focus exclusively on your business.
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Rates vary based on the interim's experience, industry specialization, engagement complexity, and urgency.
              Turnaround specialists and those with crisis management experience typically command premium rates of £1,500-£2,000/day.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Full-Time CMO</h2>
            <p className="text-gray-600 mt-4">Choose the right model for your needs</p>
          </div>
          <ServiceComparisonTable role="CMO" accentColor="amber" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CMO</h2>
            <p className="text-gray-600 mt-4">From urgent need to interim on-site in 1-2 weeks</p>
          </div>
          <HireProcessStepper accentColor="amber" />
          <div className="mt-12 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">What to Look For in an Interim CMO</h3>
            <ul className="text-gray-600">
              <li><strong>Crisis & Transformation Experience:</strong> Have they successfully navigated similar high-stakes situations (turnarounds, rebrands, M&A)?</li>
              <li><strong>Immediate Impact Capability:</strong> Can they step into a leadership vacuum and take control from day one without onboarding?</li>
              <li><strong>Industry Expertise:</strong> Do they understand your market, competitive landscape, and customer dynamics?</li>
              <li><strong>Change Management Skills:</strong> Can they drive organizational change, manage resistance, and deliver difficult transformations?</li>
              <li><strong>Executive Presence:</strong> Will they command respect in board meetings and earn trust from the leadership team quickly?</li>
              <li><strong>Proven Exit Strategy:</strong> Have they successfully transitioned out, hired permanent replacements, or set businesses up for long-term success?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Industries</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CMOs by Industry</h2>
            <p className="text-gray-600 mt-4">Sector specialists for transformation and crisis situations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'B2B SaaS', description: 'GTM transformation, PLG implementation, rebrand, turnaround', link: '/interim-jobs-saas' },
              { name: 'E-commerce & DTC', description: 'Brand repositioning, marketplace crisis, channel transformation', link: '/interim-jobs-ecommerce' },
              { name: 'FinTech', description: 'Regulatory pivot, market expansion, post-merger integration', link: '/interim-jobs-finance' },
              { name: 'HealthTech', description: 'Market entry, compliance transformation, strategic repositioning', link: '/interim-jobs-healthcare' },
              { name: 'Professional Services', description: 'Firm rebrand, practice launch, crisis management', link: '/interim-jobs-professional-services' },
              { name: 'Private Equity Portfolio', description: 'Pre-exit brand overhaul, portfolio company turnaround, integration', link: '/interim-jobs-startups' },
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="block bg-white p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CMO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need an Interim CMO<br /><span className="text-amber-400">Immediately?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your situation—CMO vacancy, transformation, or crisis—and we'll match you with experienced interim CMOs who specialize in your exact challenge. Deploy within 1-2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
              Find an Interim CMO
            </Link>
            <Link href="/interim-cmo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CMO Looking for Interim Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Services</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/interim-cfo-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CFO</Link>
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim COO</Link>
              <Link href="/interim-cmo-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">CMO Jobs</Link>
              <Link href="/interim-cmo-salary" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">CMO Salary Guide</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
