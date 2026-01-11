import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { EmailCapture } from '@/components/EmailCapture'
import { WebPageSchema } from '@/components/seo/WebPageSchema'
import { FAQPageSchema } from '@/components/seo/FAQPageSchema'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CEO Services UK | Hire a Temporary Chief Executive',
  description: 'Interim CEO services for UK businesses. Hire a full-time temporary Chief Executive for leadership gaps, turnarounds, founder exits, and business transformation. Day rates from £2,000. Start within 1-2 weeks.',
  keywords: 'interim ceo services, interim ceo, hire interim ceo, temporary ceo, interim chief executive, interim ceo uk, interim ceo day rate, ceo turnaround specialist',
  alternates: {
    canonical: 'https://interim.quest/interim-ceo-services',
  },
  openGraph: {
    title: 'Interim CEO Services UK | Hire a Temporary Chief Executive',
    description: 'Hire an Interim CEO for full-time temporary executive leadership. Expert CEOs for turnarounds, founder transitions, and crisis management.',
    images: ['/images/interim-ceo-services.jpg'],
    url: 'https://interim.quest/interim-ceo-services',
  },
}

const CEO_SERVICE_FAQS = [
  {
    question: 'What are interim CEO services?',
    answer: 'Interim CEO services provide full-time temporary Chief Executive leadership for organisations during critical transitions. Unlike permanent recruitment, interim CEO services deploy experienced executives within 1-2 weeks for defined periods (typically 3-12 months) to lead through turnarounds, founder exits, crisis situations, or succession gaps.',
  },
  {
    question: 'How much do interim CEO services cost?',
    answer: 'Interim CEO day rates in the UK range from £2,000-£3,500 depending on company size and complexity. For a 6-month engagement (120 days), expect £240,000-£420,000. This is premium pricing but includes immediate availability, crisis expertise, and no long-term salary or severance obligations.',
  },
  {
    question: 'When should a board use interim CEO services?',
    answer: 'Boards typically use interim CEO services for: sudden CEO departure requiring immediate leadership, turnaround situations requiring specialist expertise, founder stepping back needing professional management transition, M&A requiring dedicated integration leadership, or pre-exit preparation needing operational professionalisation.',
  },
  {
    question: 'How quickly can interim CEO services deploy?',
    answer: 'Interim CEO services can typically deploy an experienced executive within 5-10 business days. Unlike permanent CEO recruitment (which takes 3-6 months), interim CEOs are immediately available because they work on temporary assignments by design. Board approval and due diligence can be completed in parallel.',
  },
  {
    question: 'What is the difference between interim CEO services and executive search?',
    answer: 'Executive search finds permanent CEOs for long-term employment. Interim CEO services provide temporary leadership for defined situations with predetermined end dates. Interim CEOs bring crisis and transformation expertise, start immediately, and exit cleanly. They complement executive search when you need leadership NOW while searching for permanent.',
  },
  {
    question: 'Do interim CEOs take equity or bonuses?',
    answer: 'Most interim CEO engagements are day-rate only, without equity or bonus. This maintains objectivity and clean exit. However, turnaround or pre-exit situations sometimes include success fees (5-15% of engagement value) tied to measurable outcomes like sale completion or financial targets.',
  },
]

const SERVICES = [
  { title: 'Turnaround Leadership', description: 'Stabilise distressed businesses, implement recovery plans, restore stakeholder confidence', icon: '🔄' },
  { title: 'Founder Transition', description: 'Professional management transition when founders step back or exit', icon: '👔' },
  { title: 'Crisis Management', description: 'Navigate urgent situations: regulatory, reputational, financial, or operational crises', icon: '🚨' },
  { title: 'Succession Bridge', description: 'Maintain momentum while board conducts permanent CEO search', icon: '🌉' },
  { title: 'Pre-Exit Preparation', description: 'Professionalise operations and maximise valuation before sale or IPO', icon: '📈' },
  { title: 'Board & Governance', description: 'Chair board meetings, manage investors, maintain regulatory compliance', icon: '⚖️' },
]

const ENGAGEMENT_MODELS = [
  { name: 'Crisis Response', days: 'Full-time', duration: '3-4 months', price: '£120k-£170k', description: 'Immediate stabilisation, cash management, stakeholder communication', best: 'Urgent turnarounds, sudden departures' },
  { name: 'Transformation CEO', days: 'Full-time', duration: '6-9 months', price: '£240k-£380k', description: 'Strategic restructuring, operational improvement, culture change', best: 'Business transformation, founder exits' },
  { name: 'Pre-Exit Leadership', days: 'Full-time', duration: '9-12 months', price: '£360k-£500k', description: 'Professionalisation, governance, valuation maximisation', best: 'PE portfolio, sale preparation, IPO readiness' },
]

export default function InterimCEOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <WebPageSchema
        title="Interim CEO Services UK | Hire a Temporary Chief Executive"
        description="Interim CEO services for UK businesses. Hire a full-time temporary CEO for leadership gaps, turnarounds, founder exits, and business transformation."
        url="https://interim.quest/interim-ceo-services"
        dateModified={new Date('2025-01-11')}
      />
      <FAQPageSchema faqs={CEO_SERVICE_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-gray-800 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Executive Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CEO<br />
                <span className="text-gray-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CEO</strong> for full-time temporary executive leadership.
                Expert CEOs for turnarounds, founder transitions, crisis management, and pre-exit preparation.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£2,000-£3,500</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">3-12m</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Engagements</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">1-2 Weeks</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Start</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                  Find an Interim CEO
                </Link>
                <Link href="/interim-ceo" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  What is an Interim CEO?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-white">£2,000-£3,500</div>
              <div className="text-gray-400 text-sm">Day Rate Range</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">Full-Time</div>
              <div className="text-gray-400 text-sm">5 Days/Week</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">20+ Yrs</div>
              <div className="text-gray-400 text-sm">Avg Experience</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">5-10 Days</div>
              <div className="text-gray-400 text-sm">Time to Deploy</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Interim CEO Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Are Interim CEO Services?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Interim CEO services</strong> provide boards with immediate access to experienced Chief Executives for full-time temporary leadership. These are not consultants or advisors—they are operational executives who take complete accountability for leading your organisation during critical periods.
            </p>
            <p>
              Interim CEO services are typically used when boards need leadership faster than permanent recruitment allows, when the situation requires specific transformation or turnaround expertise, or when the organisation needs objective leadership without long-term commitment during a transition period.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-gray-800">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CEO services deliver board-ready executive leadership within days. When your CEO has departed, your turnaround is urgent, or your founder is stepping back—interim services provide the leadership you need without the 3-6 month wait for permanent recruitment."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Use Interim CEO Services?</h3>
            <p>
              Permanent CEO recruitment takes 3-6 months and carries significant risk of mis-hire. Interim CEO services provide experienced leadership immediately while giving boards time to make the right permanent decision. The interim CEO stabilises the organisation, maintains investor confidence, and often helps define the permanent CEO specification based on operational reality.
            </p>
            <p>
              For turnaround and transformation situations, interim CEO services provide specialists who have successfully navigated similar challenges multiple times. Their track record, objectivity, and predetermined exit make them ideal for high-stakes situations where permanent executives may lack experience or be too invested in the status quo.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">What We Deliver</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CEO Service Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Engagement Models</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Flexible options to match your situation and timeline</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model) => (
              <div key={model.name} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                <div className="text-3xl font-black text-gray-900 mb-1">{model.duration}</div>
                <div className="text-gray-700 font-semibold mb-4">{model.price}</div>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="pt-4 border-t border-gray-300">
                  <span className="text-xs font-bold uppercase text-gray-500">Best for:</span>
                  <p className="text-gray-700 font-medium">{model.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Rates Detail */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Investment</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CEO Day Rates</h2>
            <p className="text-gray-600 mt-4">Transparent pricing for full-time temporary CEO leadership</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 rounded-xl mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical Day Rates by Company Size</h3>
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
                  <p className="text-sm text-gray-600">Corporate turnarounds, PE portfolio companies</p>
                </div>
                <p className="text-xl font-bold text-gray-900">£3,000-£3,500+/day</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <h3 className="font-bold text-gray-900 mb-2">Why Premium Rates?</h3>
            <p className="text-gray-700">
              Interim CEOs command premium day rates because of the total accountability they assume, the 24/7 availability expected, the board-level experience required, and the immediate impact demanded. A poor CEO hire—even temporary—can destroy significant shareholder value. Premium rates reflect the expertise, risk, and rapid deployment capability.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Permanent CEO</h2>
          </div>
          <ServiceComparisonTable role="CEO" accentColor="gray" />
        </div>
      </section>

      {/* How to Engage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Engage Interim CEO Services</h2>
            <p className="text-gray-600 mt-4">From brief to CEO on-site in 5-10 business days</p>
          </div>
          <HireProcessStepper accentColor="gray" />
        </div>
      </section>

      {/* Current Interim CEO Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Available Roles</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Current Interim CEO Opportunities</h2>
            <p className="text-xl text-gray-600 mt-4">Browse interim executive leadership roles we're currently recruiting for</p>
          </div>
          <EmbeddedJobBoard
            defaultDepartment="Executive"
            title=""
            jobsPerPage={6}
            showAllJobsLink={true}
            allJobsLinkText="View All Executive Jobs"
          />
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Get Interim CEO Job Alerts</h3>
              <p className="text-gray-600">Be the first to know about new interim CEO opportunities. We'll send you relevant executive leadership roles as they become available.</p>
            </div>
            <EmailCapture
              variant="inline"
              title="Subscribe to CEO Alerts"
              description="New interim CEO roles delivered to your inbox."
              buttonText="Get Alerts"
              accentColor="gray"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CEO Services FAQs</h2>
          </div>
          <div className="space-y-6">
            {CEO_SERVICE_FAQS.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl p-6 cursor-pointer border border-gray-200">
                <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                  {faq.question}
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need Interim CEO<br /><span className="text-gray-400">Services?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your situation—turnaround, founder transition, or succession gap—and we'll match you with experienced interim CEOs who have led through similar challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
              Find an Interim CEO
            </Link>
            <Link href="/interim-ceo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CEO Seeking Interim Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Pages</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/interim-ceo" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">What is an Interim CEO?</Link>
              <Link href="/interim-cfo-services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Interim CFO Services</Link>
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Interim COO Services</Link>
              <Link href="/interim-cmo-services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Interim CMO Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
