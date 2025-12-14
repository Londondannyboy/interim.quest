import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ, CFO_SERVICE_FAQS } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CFO Services UK | Hire a Temporary CFO',
  description: 'Hire an Interim CFO for leadership transitions, turnarounds, and transformation. Full-time temporary financial leadership for 3-12 months. Start within days.',
  keywords: 'interim cfo, interim cfo services, hire interim cfo, temporary cfo, interim chief financial officer, interim cfo uk, interim finance director',
  alternates: {
    canonical: 'https://interim.quest/interim-cfo-services',
  },
  openGraph: {
    title: 'Interim CFO Services UK | Hire a Temporary CFO',
    description: 'Hire an Interim CFO for leadership transitions, turnarounds, and transformation. Full-time temporary financial leadership.',
    images: ['/images/interim-cfo-services.jpg'],
    url: 'https://interim.quest/interim-cfo-services',
  },
}

export default function InterimCFOServicesPage() {
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
              <span className="inline-block bg-white text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Financial Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CFO<br />
                <span className="text-gray-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CFO</strong> for leadership transitions, turnarounds, and transformation.
                Full-time temporary financial leadership when you need it most.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Dedicated Focus</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Month Engagements</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">48hrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Start</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
                  Hire an Interim CFO
                </Link>
                <Link href="#when-to-hire" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  When You Need One
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Interim CFO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CFO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CFO</strong> is a senior finance executive who steps into your organisation on a full-time basis for a defined period—typically 3-12 months. They provide immediate, hands-on leadership during critical transitions, turnarounds, or transformation programmes.
            </p>
            <p>
              Unlike fractional CFOs who work part-time across multiple clients, an interim CFO is fully dedicated to your business. They are embedded in your team, attending every meeting, driving day-to-day decisions, and taking complete ownership of your finance function.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-gray-900">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CFOs are deployed when organisations face leadership gaps, major transformations, or crisis situations requiring immediate senior expertise."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim CFO vs Fractional CFO</h3>
            <p>
              A fractional CFO works 1-3 days per week, providing strategic oversight while you handle day-to-day operations. An interim CFO works full-time—they are in the trenches every day, managing your team, handling operational finance, and driving transformation at pace.
            </p>
            <p>
              Choose <strong>interim</strong> when you need someone to fully own the role (vacancy, crisis, transformation). Choose <strong>fractional</strong> when you need strategic guidance but do not have full-time work to justify the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CFO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Full ownership of your finance function during critical periods</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Leadership Gap Coverage',
                description: 'Step in immediately when your CFO resigns, is terminated, or takes extended leave. Maintain continuity while you recruit a permanent replacement.',
                icon: '🎯',
              },
              {
                title: 'Turnaround & Restructuring',
                description: 'Lead financial restructuring, cost reduction programmes, and cash conservation. Navigate distressed situations with creditors and stakeholders.',
                icon: '🔄',
              },
              {
                title: 'M&A Execution',
                description: 'Drive financial due diligence, integration planning, and post-merger integration. Lead carve-outs, disposals, and acquisition programmes.',
                icon: '🤝',
              },
              {
                title: 'IPO & Exit Preparation',
                description: 'Prepare your finance function for IPO-readiness. Implement controls, clean up accounts, and lead the financial workstream of listing preparations.',
                icon: '📈',
              },
              {
                title: 'Systems & Transformation',
                description: 'Lead ERP implementations, finance transformation programmes, and operational improvement initiatives requiring dedicated leadership.',
                icon: '⚙️',
              },
              {
                title: 'Crisis Management',
                description: 'Provide immediate leadership during financial crises, fraud investigations, regulatory issues, or unexpected departures.',
                icon: '🚨',
              },
              {
                title: 'Private Equity Support',
                description: 'Support PE-backed companies through value creation plans, 100-day programmes, and preparing businesses for exit.',
                icon: '💼',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-gray-400 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire an Interim CFO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Immediate Availability',
                description: 'Interim CFOs can start within days, not months. When your CFO resigns or you face a crisis, you cannot wait 3-6 months for a permanent hire.',
                stat: '48h',
                statLabel: 'To Start',
              },
              {
                title: 'Full-Time Dedication',
                description: 'Unlike fractional or consulting arrangements, an interim CFO is 100% focused on your business. They are in the office, managing your team, and driving results every day.',
                stat: '100%',
                statLabel: 'Dedicated',
              },
              {
                title: 'No Long-Term Commitment',
                description: 'Engage for exactly as long as you need—whether that is 3 months to cover a gap or 12 months to lead a transformation. No permanent hire obligations.',
                stat: '3-12',
                statLabel: 'Months Typical',
              },
              {
                title: 'Battle-Tested Experience',
                description: 'Interim CFOs have typically led finance functions at multiple companies. They have seen turnarounds, IPOs, and crises before—and know how to navigate them.',
                stat: '20+',
                statLabel: 'Years Experience',
              },
              {
                title: 'Objective Perspective',
                description: 'As an outsider, an interim CFO can make tough decisions, challenge sacred cows, and implement changes that an internal candidate might avoid.',
                stat: 'Fresh',
                statLabel: 'Eyes',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-gray-900">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-gray-900">{benefit.stat}</div>
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
      <section id="when-to-hire" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Timing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire an Interim CFO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none mb-8">
            <p>
              Interim CFOs are typically engaged in situations requiring immediate, full-time senior leadership. Here are the most common scenarios:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CFO Resignation or Departure',
                description: 'Your CFO has resigned, been terminated, or is taking extended leave. You need immediate cover while recruiting a permanent replacement.',
                timing: 'Immediate',
              },
              {
                scenario: 'Turnaround or Restructuring',
                description: 'Your business is in distress and needs experienced leadership to manage cash, negotiate with creditors, and drive cost reduction.',
                timing: 'Crisis situations',
              },
              {
                scenario: 'M&A Transaction',
                description: 'You are acquiring a business, being acquired, or executing a carve-out. You need dedicated CFO leadership to drive the financial workstream.',
                timing: '3-6 months before close',
              },
              {
                scenario: 'IPO or Major Fundraise',
                description: 'You are preparing for IPO or a significant funding round and need CFO-level leadership to prepare the business for scrutiny.',
                timing: '6-12 months before',
              },
              {
                scenario: 'PE Portfolio Company',
                description: 'Private equity firms often deploy interim CFOs into portfolio companies for value creation, 100-day plans, or exit preparation.',
                timing: 'Post-acquisition',
              },
              {
                scenario: 'Finance Transformation',
                description: 'You are implementing a new ERP, restructuring your finance function, or driving a major change programme requiring dedicated leadership.',
                timing: 'Project duration',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-gray-700 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section id="cost" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Investment</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does an Interim CFO Cost?</h2>
            <p className="text-gray-600 mt-4">Day rates for full-time interim engagement</p>
          </div>
          <div className="bg-gray-50 p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900">£1,200-£1,800</div>
                <div className="text-sm text-gray-600 mt-1">Day Rate (Typical)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900">£2,000-£2,500</div>
                <div className="text-sm text-gray-600 mt-1">Day Rate (Premium/FTSE)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900">£25k-£45k</div>
                <div className="text-sm text-gray-600 mt-1">Monthly Cost</div>
              </div>
            </div>
            <div className="prose prose-gray max-w-none">
              <h3 className="text-xl font-bold text-gray-900">Typical Interim CFO Pricing</h3>
              <ul className="text-gray-600">
                <li><strong>Standard Day Rate:</strong> £1,200-£1,800 per day (SME to mid-market)</li>
                <li><strong>Premium Day Rate:</strong> £2,000-£2,500 per day (large corporates, FTSE, complex situations)</li>
                <li><strong>Monthly Cost:</strong> £25,000-£45,000 for full-time engagement</li>
                <li><strong>Typical Engagement:</strong> 3-12 months with 1-month notice period</li>
              </ul>
              <p className="text-sm text-gray-500">
                Rates vary based on seniority, sector expertise, and complexity of the assignment.
                Crisis situations and turnarounds typically command premium rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Full-Time CFO</h2>
            <p className="text-gray-600 mt-4">Choose the right model for your situation</p>
          </div>
          <ServiceComparisonTable role="CFO" accentColor="gray" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CFO</h2>
            <p className="text-gray-600 mt-4">From first conversation to start date in as little as 48 hours</p>
          </div>
          <HireProcessStepper accentColor="gray" />
          <div className="mt-12 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">What to Look For</h3>
            <ul className="text-gray-600">
              <li><strong>Relevant Situation Experience:</strong> Have they handled similar situations (turnaround, M&A, IPO)?</li>
              <li><strong>Sector Knowledge:</strong> Do they understand your industry's specific financial challenges?</li>
              <li><strong>Immediate Availability:</strong> Can they start when you need them?</li>
              <li><strong>Track Record:</strong> Can they demonstrate successful outcomes from previous interim assignments?</li>
              <li><strong>Cultural Fit:</strong> Will they integrate well with your team during an intense period?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Industries</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CFOs by Sector</h2>
            <p className="text-gray-600 mt-4">Specialists with deep sector experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Technology & SaaS', description: 'Scaling finance functions, fundraising, SaaS metrics and unit economics', link: '/interim-jobs-tech' },
              { name: 'Private Equity Portfolio', description: 'Value creation, 100-day plans, exit preparation, carve-outs', link: '/interim-jobs-finance' },
              { name: 'Healthcare & Life Sciences', description: 'NHS contracting, clinical trials finance, regulatory compliance', link: '/interim-jobs-healthcare' },
              { name: 'Manufacturing & Industrial', description: 'Cost reduction, working capital, operational turnaround', link: '/interim-jobs-ecommerce' },
              { name: 'Professional Services', description: 'Partner economics, utilisation, practice restructuring', link: '/interim-jobs-professional-services' },
              { name: 'Retail & Consumer', description: 'Turnaround, restructuring, cash management, CVA experience', link: '/interim-jobs-startups' },
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="block bg-white p-6 border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all">
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
          <FAQ items={CFO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire an<br /><span className="text-gray-400">Interim CFO?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your situation and we'll match you with experienced interim CFOs who can start immediately. First conversations within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact/companies" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors">
              Find an Interim CFO
            </Link>
            <Link href="/interim-cfo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CFO Looking for Roles
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
              <Link href="/interim-cmo-services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Interim CMO</Link>
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Interim CTO</Link>
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Interim COO</Link>
              <Link href="/interim-cfo-jobs-uk" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">CFO Jobs</Link>
              <Link href="/interim-cfo-salary" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">CFO Day Rates</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
