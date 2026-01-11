import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { EmailCapture } from '@/components/EmailCapture'
import { IR35Calculator } from '@/components/IR35Calculator'
import { WebPageSchema } from '@/components/seo/WebPageSchema'
import { FAQPageSchema } from '@/components/seo/FAQPageSchema'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Hospital CEO Jobs UK | NHS & Healthcare CEO Roles',
  description: 'Find interim hospital CEO jobs across the UK. Interim Chief Executive positions in NHS Trusts, private hospitals, and healthcare organisations. Turnaround leadership, CQC improvement, and operational recovery roles.',
  keywords: 'interim hospital ceo jobs, interim nhs ceo, hospital chief executive interim, interim healthcare ceo, nhs turnaround director, interim trust ceo, healthcare interim executive',
  alternates: {
    canonical: 'https://interim.quest/interim-hospital-ceo-jobs',
  },
  openGraph: {
    title: 'Interim Hospital CEO Jobs UK | NHS & Healthcare CEO Roles',
    description: 'Interim Chief Executive positions in NHS Trusts and healthcare organisations. Turnaround, CQC improvement, and transformation leadership.',
    images: ['/images/interim-hospital-ceo-jobs.jpg'],
    url: 'https://interim.quest/interim-hospital-ceo-jobs',
  },
}

const HOSPITAL_CEO_FAQS = [
  {
    question: 'What is an interim hospital CEO?',
    answer: 'An interim hospital CEO is a temporary Chief Executive who leads an NHS Trust, private hospital, or healthcare organisation for a defined period (typically 6-18 months). They provide full-time executive leadership during CEO vacancies, turnaround situations, CQC improvement programmes, or organisational transformation.',
  },
  {
    question: 'How much do interim hospital CEOs earn?',
    answer: 'Interim hospital CEO day rates typically range from £1,200-£1,800 for smaller organisations to £1,800-£2,500 for large acute Trusts or complex turnarounds. Annual equivalent: £240,000-£500,000. NHS England publishes guidance on interim executive pay, though complex turnarounds often exceed these levels.',
  },
  {
    question: 'What qualifications do interim hospital CEOs need?',
    answer: 'Interim hospital CEOs typically need: previous CEO/Chief Executive experience in healthcare, understanding of NHS governance and regulation, CQC inspection experience, clinical or operational leadership background, and often experience with turnarounds or improvement programmes. Board-level NHS experience is usually essential.',
  },
  {
    question: 'How long do interim hospital CEO appointments last?',
    answer: 'Most interim hospital CEO appointments last 12-18 months, though urgent situations may be 6-9 months. This allows time to stabilise operations, deliver improvement programmes, and conduct proper permanent CEO recruitment. Extensions are common if permanent recruitment takes longer than expected.',
  },
  {
    question: 'Where are interim hospital CEO jobs advertised?',
    answer: 'Interim hospital CEO jobs are typically sourced through: specialist healthcare interim agencies, NHS Jobs (for some roles), executive search firms specialising in healthcare, and networks like the NHS Leadership Academy. Many positions are filled through direct approaches to known interim executives.',
  },
]

const NHS_TRUST_TYPES = [
  { type: 'Acute Trusts', description: 'Large teaching hospitals and district general hospitals', roles: 'CEO, COO, CMO, CNO, CFO', rate: '£1,500-£2,500/day' },
  { type: 'Mental Health Trusts', description: 'Mental health and community services providers', roles: 'CEO, Medical Director, Nursing Director', rate: '£1,200-£1,800/day' },
  { type: 'Community Trusts', description: 'Community health services and district nursing', roles: 'CEO, Director of Operations, Medical Director', rate: '£1,200-£1,600/day' },
  { type: 'Ambulance Trusts', description: 'Emergency and patient transport services', roles: 'CEO, Director of Operations, Medical Director', rate: '£1,200-£1,800/day' },
  { type: 'ICBs & ICS', description: 'Integrated Care Boards and System leadership', roles: 'CEO, CFO, COO, Medical Director', rate: '£1,500-£2,200/day' },
  { type: 'Private Healthcare', description: 'Independent hospitals and healthcare groups', roles: 'CEO, Hospital Director, Medical Director', rate: '£1,500-£2,500/day' },
]

const INTERIM_SCENARIOS = [
  {
    scenario: 'CQC Improvement',
    description: 'Trust rated Requires Improvement or Inadequate. Interim CEO leads rapid improvement programme, culture change, and CQC re-inspection preparation.',
    duration: '12-18 months',
    icon: '📋',
  },
  {
    scenario: 'Financial Turnaround',
    description: 'Trust in deficit requiring operational grip, efficiency programmes, and return to financial balance while maintaining service quality.',
    duration: '12-18 months',
    icon: '💰',
  },
  {
    scenario: 'CEO Vacancy',
    description: 'Sudden or planned CEO departure requiring leadership continuity while permanent recruitment is conducted.',
    duration: '6-12 months',
    icon: '👔',
  },
  {
    scenario: 'Merger/Acquisition',
    description: 'Trust merger, acquisition, or service integration requiring experienced leadership to manage complex organisational change.',
    duration: '12-24 months',
    icon: '🤝',
  },
  {
    scenario: 'System Transformation',
    description: 'ICS development, provider collaboration, or service reconfiguration requiring system-level leadership.',
    duration: '12-18 months',
    icon: '🔄',
  },
  {
    scenario: 'Regulatory Investigation',
    description: 'Managing Trust through CQC enforcement, NHS England oversight, or regulatory intervention.',
    duration: '12-18 months',
    icon: '⚖️',
  },
]

export default function InterimHospitalCEOJobsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <WebPageSchema
        title="Interim Hospital CEO Jobs UK | NHS & Healthcare CEO Roles"
        description="Find interim hospital CEO jobs across the UK. Interim Chief Executive positions in NHS Trusts, private hospitals, and healthcare organisations."
        url="https://interim.quest/interim-hospital-ceo-jobs"
        dateModified={new Date('2025-01-11')}
      />
      <FAQPageSchema faqs={HOSPITAL_CEO_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-teal-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Healthcare Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim Hospital<br />
                <span className="text-teal-400">CEO Jobs UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Find <strong className="text-white">interim hospital CEO jobs</strong> across NHS Trusts and healthcare organisations.
                Turnaround leadership, CQC improvement programmes, and executive transformation roles.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-teal-400">£1,200-£2,500</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">6-18m</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Typical Duration</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">NHS & Private</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Sectors</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/handler/sign-up" className="px-8 py-4 bg-teal-500 text-white font-bold uppercase tracking-wider hover:bg-teal-400 transition-colors">
                  Register for Hospital CEO Roles
                </Link>
                <Link href="/interim-jobs-healthcare" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  All Healthcare Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-teal-900 py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-teal-200">215</div>
              <div className="text-teal-300/70 text-sm">NHS Trusts</div>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-200">42</div>
              <div className="text-teal-300/70 text-sm">ICBs</div>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-200">£1.8k</div>
              <div className="text-teal-300/70 text-sm">Avg Day Rate</div>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-200">12-18m</div>
              <div className="text-teal-300/70 text-sm">Avg Duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Interim Hospital CEO Jobs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Are Interim Hospital CEO Jobs?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Interim hospital CEO jobs</strong> are full-time temporary Chief Executive positions in NHS Trusts, private hospitals, and healthcare organisations. These roles provide leadership during critical periods: CEO vacancies, turnaround situations, CQC improvement programmes, mergers, and system transformation.
            </p>
            <p>
              Unlike permanent NHS CEO appointments (which can take 6-12 months), interim hospital CEO jobs can be filled within 2-4 weeks. This is critical when Trusts face regulatory action, financial crisis, or sudden leadership departures. Interim CEOs bring immediate stability while boards conduct proper permanent recruitment.
            </p>
            <div className="bg-teal-50 p-8 my-10 border-l-4 border-teal-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim hospital CEOs are often the difference between a Trust spiralling into special measures and a successful turnaround. They bring fresh perspective, turnaround expertise, and the authority to make difficult decisions without long-term political considerations."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Interim Hospital CEO Jobs</h3>
            <p>
              Interim hospital CEO jobs span the entire NHS and independent sector. Acute Trusts (large teaching hospitals) offer the most complex and highest-paid roles. Mental Health Trusts and Community Trusts have smaller leadership teams but equally challenging transformation requirements. Integrated Care Boards (ICBs) need system leaders who can work across multiple providers.
            </p>
          </div>
        </div>
      </section>

      {/* NHS Trust Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Organisations</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim Hospital CEO Jobs by Organisation Type</h2>
            <p className="text-xl text-gray-600 mt-4">Where interim CEO opportunities exist in healthcare</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NHS_TRUST_TYPES.map((trust, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 rounded-xl hover:border-teal-300 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trust.type}</h3>
                <p className="text-gray-600 text-sm mb-3">{trust.description}</p>
                <div className="text-sm text-gray-500 mb-2"><strong>Key roles:</strong> {trust.roles}</div>
                <div className="text-teal-700 font-semibold">{trust.rate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interim Scenarios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Situations</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Trusts Hire Interim Hospital CEOs</h2>
            <p className="text-xl text-gray-600 mt-4">Common scenarios that create interim CEO opportunities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERIM_SCENARIOS.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 border border-gray-200 rounded-xl hover:border-teal-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-teal-700 uppercase tracking-wider">Duration: {item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day Rates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Compensation</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim Hospital CEO Day Rates</h2>
            <p className="text-gray-600 mt-4">Typical compensation for interim hospital CEO jobs</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 rounded-xl mb-8">
            <div className="space-y-4">
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-3">
                <div>
                  <p className="font-bold text-gray-900">Community/Mental Health Trusts</p>
                  <p className="text-sm text-gray-600">Smaller organisations, less complex governance</p>
                </div>
                <p className="text-xl font-bold text-teal-700">£1,200-£1,600/day</p>
              </div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-3">
                <div>
                  <p className="font-bold text-gray-900">District General Hospitals</p>
                  <p className="text-sm text-gray-600">Medium acute trusts, standard complexity</p>
                </div>
                <p className="text-xl font-bold text-teal-700">£1,500-£1,800/day</p>
              </div>
              <div className="flex justify-between items-baseline border-b border-gray-200 pb-3">
                <div>
                  <p className="font-bold text-gray-900">Large Acute/Teaching Trusts</p>
                  <p className="text-sm text-gray-600">Major hospitals, research, education</p>
                </div>
                <p className="text-xl font-bold text-teal-700">£1,800-£2,200/day</p>
              </div>
              <div className="flex justify-between items-baseline pb-3">
                <div>
                  <p className="font-bold text-gray-900">Turnaround/Special Measures</p>
                  <p className="text-sm text-gray-600">Complex turnarounds, regulatory intervention</p>
                </div>
                <p className="text-xl font-bold text-teal-700">£2,000-£2,500+/day</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl">
            <h3 className="font-bold text-gray-900 mb-2">Annual Equivalent</h3>
            <p className="text-gray-700">
              At 220 working days per year, interim hospital CEO jobs typically pay <strong>£264,000-£550,000 annually</strong> (gross, before tax and contractor costs). This compares to permanent NHS CEO salaries of £180,000-£280,000 plus pension, reflecting the temporary nature, higher risk, and immediate deployment expectation.
            </p>
          </div>
        </div>
      </section>

      {/* How to Find Jobs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Finding Roles</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Find Interim Hospital CEO Jobs</h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-teal-500 rounded-r-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-black text-xl">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Register with Healthcare Interim Specialists</h3>
                <p className="text-gray-600">Register with agencies that specialise in NHS and healthcare interim placements. These agencies have direct relationships with Trust Chairs and NHS England regional teams.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-teal-500 rounded-r-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-black text-xl">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Build Your Healthcare Track Record</h3>
                <p className="text-gray-600">Ensure your CV demonstrates NHS governance experience, CQC inspection outcomes, turnaround successes, and system leadership. Healthcare boards want proven NHS executives.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-teal-500 rounded-r-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-black text-xl">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Network with NHS Leadership Academy</h3>
                <p className="text-gray-600">The NHS Leadership Academy and regional NHS England teams often know of upcoming interim needs before they are publicly advertised. Build relationships with regional directors.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-gray-50 border-l-4 border-teal-500 rounded-r-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-black text-xl">4</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Monitor CQC Reports and Board Changes</h3>
                <p className="text-gray-600">CQC inspection reports, Trust board announcements, and NHS news often signal upcoming interim needs. Trusts rated Requires Improvement frequently need interim leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Healthcare CEO Jobs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Available Roles</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Current Hospital CEO & Healthcare Executive Jobs</h2>
            <p className="text-xl text-gray-600 mt-4">Browse interim healthcare leadership roles we're currently recruiting for</p>
          </div>
          <EmbeddedJobBoard
            defaultDepartment="Healthcare"
            title=""
            jobsPerPage={6}
            showAllJobsLink={true}
            allJobsLinkText="View All Healthcare Jobs"
          />
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35 & Take-Home Pay Calculator</h2>
            <p className="text-xl text-gray-600 mt-4">Calculate your potential earnings as an interim hospital CEO</p>
          </div>
          <IR35Calculator defaultDayRate={1800} />
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Get Hospital CEO Job Alerts</h3>
              <p className="text-gray-600">Be the first to know about new interim hospital CEO and healthcare executive opportunities. We'll send you relevant NHS and private healthcare leadership roles.</p>
            </div>
            <EmailCapture
              variant="inline"
              title="Subscribe to Healthcare Alerts"
              description="New interim hospital CEO roles delivered to your inbox."
              buttonText="Get Alerts"
              accentColor="teal"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim Hospital CEO Jobs FAQs</h2>
          </div>
          <div className="space-y-6">
            {HOSPITAL_CEO_FAQS.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl p-6 cursor-pointer border border-gray-200">
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
      <section className="py-20 md:py-28 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Looking for Interim<br /><span className="text-teal-300">Hospital CEO Jobs?</span>
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Register to be notified of interim hospital CEO opportunities across NHS Trusts and healthcare organisations. We match experienced healthcare executives with Trusts that need leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-white text-teal-900 font-bold uppercase tracking-wider hover:bg-teal-50 transition-colors">
              Register for Hospital CEO Roles
            </Link>
            <Link href="/interim-jobs-healthcare" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-teal-900 transition-colors">
              View All Healthcare Jobs
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
              <Link href="/interim-jobs-healthcare" className="text-gray-600 hover:text-teal-700 font-medium transition-colors">All Healthcare Jobs</Link>
              <Link href="/interim-ceo-services" className="text-gray-600 hover:text-teal-700 font-medium transition-colors">Interim CEO Services</Link>
              <Link href="/interim-ceo" className="text-gray-600 hover:text-teal-700 font-medium transition-colors">What is an Interim CEO?</Link>
              <Link href="/interim-cfo-jobs-uk" className="text-gray-600 hover:text-teal-700 font-medium transition-colors">Interim CFO Jobs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
