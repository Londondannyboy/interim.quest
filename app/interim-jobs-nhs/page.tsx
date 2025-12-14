import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim NHS Jobs UK | Healthcare Management Roles | Interim Quest',
  description: 'Find interim NHS jobs and healthcare management roles. NHS Trust leadership, turnaround directors, digital health transformation. £600-£1,200 daily rates. Framework-compliant contracts.',
  keywords: ['interim nhs jobs', 'nhs interim jobs', 'nhs interim management jobs', 'interim nhs manager', 'healthcare interim jobs'],
  openGraph: {
    title: 'Interim NHS Jobs UK | Healthcare Management Roles',
    description: 'Full-time temporary NHS leadership roles. CQC improvement, digital transformation, Trust turnarounds.',
    type: 'website',
  },
}

const nhsRoles = [
  { name: 'Interim Chief Executive (NHS Trust)', description: 'Trust-wide leadership & turnaround', rateRange: '£1,200-£1,800/day', demand: 'High' },
  { name: 'Interim Director of Operations', description: 'Patient flow & operational efficiency', rateRange: '£900-£1,300/day', demand: 'Very High' },
  { name: 'Interim Director of Finance (NHS)', description: 'Financial recovery & planning', rateRange: '£850-£1,200/day', demand: 'High' },
  { name: 'Interim Turnaround Director', description: 'Trust improvement programmes', rateRange: '£1,000-£1,500/day', demand: 'High' },
  { name: 'Interim Director of Nursing', description: 'Quality & patient safety', rateRange: '£700-£1,000/day', demand: 'Medium' },
  { name: 'Interim Programme Director', description: 'Major change programmes', rateRange: '£800-£1,100/day', demand: 'Growing' },
  { name: 'Interim Director of HR (NHS)', description: 'Workforce transformation', rateRange: '£750-£1,050/day', demand: 'Medium' },
  { name: 'Interim Chief Digital Officer', description: 'EPR & digital transformation', rateRange: '£900-£1,300/day', demand: 'Growing' },
]

const trustTypes = [
  { name: 'Acute Trusts', icon: '🏥', growth: 'High demand', description: 'Hospital transformation' },
  { name: 'Mental Health Trusts', icon: '🧠', growth: 'Growing', description: 'Service improvement' },
  { name: 'Community Trusts', icon: '👥', growth: 'Medium', description: 'Integration projects' },
  { name: 'Ambulance Trusts', icon: '🚑', growth: 'High demand', description: 'Operational efficiency' },
  { name: 'ICBs', icon: '🏛️', growth: 'New sector', description: 'System leadership' },
  { name: 'Specialist Trusts', icon: '⚕️', growth: 'Medium', description: 'Clinical excellence' },
]

const nhsSkills = [
  'CQC Compliance & Quality Improvement', 'NHS Finance & SBS Systems', 'Healthcare Digital Transformation',
  'Workforce Transformation', 'Patient Flow & Operational Management', 'EPR Implementation',
  'Clinical Governance', 'Trust Turnarounds', 'Merger Integration'
]

const relatedSearches = [
  'Interim NHS Jobs', 'NHS Interim Management', 'Interim Director NHS',
  'NHS Turnaround Director', 'Interim COO NHS', 'NHS Interim CEO Jobs',
  'Healthcare Interim Jobs', 'NHS Framework Rates', 'NHS Interim IR35'
]

// Same video as homepage
const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const NHS_FAQS = [
  {
    question: 'How do I find interim jobs in the NHS?',
    answer: 'NHS interim jobs are typically sourced through specialist NHS recruitment agencies, the NHS Jobs portal, interim management frameworks (like NHS Professionals), and executive search firms specializing in healthcare. Many interim roles are filled via direct networking with NHS Trust executives and Integrated Care Boards. CQC improvement programmes and Trust turnarounds create the highest demand for interim leadership.',
  },
  {
    question: 'What are typical NHS interim day rates?',
    answer: 'NHS interim day rates vary by role and seniority: Interim Chief Executives earn £1,200-£1,800/day, Directors of Operations £900-£1,300/day, Finance Directors £850-£1,200/day, Directors of Nursing £700-£1,000/day, and Programme Directors £800-£1,100/day. Rates are typically set according to NHS framework rate cards and are subject to off-payroll working rules and agency caps in some circumstances.',
  },
  {
    question: 'Do NHS interim roles fall under IR35?',
    answer: 'Most NHS interim roles fall inside IR35 due to the public sector off-payroll working rules. NHS Trusts and ICBs are required to determine IR35 status, and the majority of senior interim management roles are deemed inside IR35 (meaning PAYE tax treatment). However, some highly specialized short-term consultancy engagements may fall outside IR35. Always clarify the IR35 status determination before accepting an NHS interim role.',
  },
  {
    question: 'What qualifications do you need for NHS interim management?',
    answer: 'NHS interim management roles typically require extensive NHS or healthcare sector experience (10-20+ years), proven leadership in similar NHS settings, and specific expertise depending on the role. Clinical roles (Director of Nursing, Medical Director) require professional registration. Non-clinical roles require demonstrable experience in NHS turnarounds, CQC improvement, financial recovery, or digital transformation. An MBA or healthcare management qualification is advantageous but not always essential.',
  },
  {
    question: 'How long do NHS interim assignments last?',
    answer: 'NHS interim assignments typically last 6-12 months, with some extending to 18-24 months for major transformation programmes. CQC improvement programmes usually require 9-12 months, Trust turnarounds 12-18 months, and leadership vacancy cover 3-6 months until a permanent appointment is made. Contracts are usually reviewed every 3-6 months with the possibility of extension based on progress and ongoing need.',
  },
]

async function getNHSStats() {
  try {
    const sql = createDbQuery()
    const [total, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%healthcare%' OR role_category ILIKE '%NHS%' OR title ILIKE '%NHS%' OR title ILIKE '%healthcare%')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND (role_category ILIKE '%healthcare%' OR role_category ILIKE '%NHS%') AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      total: parseInt((total[0] as any)?.count || '0'),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '950'))
    }
  } catch (error) {
    return { total: 40, avgDayRate: 950 }
  }
}

export default async function NHSJobsPage() {
  const stats = await getNHSStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <VideoHeroBackground
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          fallbackGradient={true}
        />

        {/* Bottom-aligned content with glass panel */}
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Left: Main content */}
              <div className="max-w-2xl">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
                  <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors text-sm tracking-wide">
                    <span className="mr-2">←</span> Back to Home
                  </Link>

                  <span className="inline-block bg-blue-500/20 backdrop-blur text-blue-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.total}+ NHS Leadership Roles
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Interim<br />
                    <span className="text-blue-300">NHS</span> Jobs UK
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    Full-time temporary NHS leadership for Trusts in transition. CQC improvement programmes, financial recovery, and digital transformation. £600-£1,200 daily rates.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/interim-jobs?industry=Healthcare"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse NHS Jobs →
                    </Link>
                    <Link
                      href="/handler/sign-up"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Get Notified
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="w-full lg:w-auto">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">150+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Trusts Hiring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">9mo</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Assignment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">CQC</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Focus Area</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Board - Moved up after hero */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Opportunities</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim NHS Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.total}+ NHS leadership opportunities</p>
          </div>
          <EmbeddedJobBoard defaultDepartment="Healthcare" />
        </div>
      </section>

      {/* NHS Roles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim NHS Leadership Roles</h2>
            <p className="text-xl text-gray-500">Healthcare management positions available</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nhsRoles.map((role) => (
              <div key={role.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{role.description}</p>
                <p className="text-blue-700 font-semibold mb-1">{role.rateRange}</p>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Demand: {role.demand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Types */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Trust Type</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NHS Trusts Hiring Interim Leaders</h2>
            <p className="text-xl text-gray-500">Organization types with highest demand</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustTypes.map((trust) => (
              <div key={trust.name} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all">
                <span className="text-4xl mb-3 block">{trust.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{trust.name}</h3>
                <p className="text-blue-700 text-sm font-semibold mb-1">{trust.growth}</p>
                <p className="text-gray-600 text-xs">{trust.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key NHS Scenarios */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why NHS Interim Leadership?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CQC Improvement Programmes</h3>
              <p className="text-gray-600">
                Trusts rated Inadequate or Requires Improvement hire interim leaders for 9-12 month turnaround programmes. Full-time engagement to address quality failures, implement action plans, and achieve CQC re-rating.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust Financial Recovery</h3>
              <p className="text-gray-600">
                NHS Trusts in deficit or facing financial crisis hire interim Finance Directors and Turnaround Directors for 12-18 months to implement recovery plans, negotiate with commissioners, and achieve financial sustainability.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600">
                Trusts implementing Electronic Patient Records (EPR) systems hire interim Chief Digital Officers and Programme Directors for 12-24 months to lead major technology implementations and digital transformation programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional NHS Scenarios */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">More Scenarios</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other NHS Interim Situations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Merger Integration</h3>
              <p className="text-gray-600">
                Trust mergers require interim executives to integrate operations, harmonize systems, align cultures, and deliver merger benefits over 12-24 month periods.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">👔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership Vacancy Cover</h3>
              <p className="text-gray-600">
                When senior executives leave suddenly, Trusts hire interim leaders for 3-6 months to maintain continuity while conducting permanent recruitment searches.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">❄️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Winter Pressure Capacity</h3>
              <p className="text-gray-600">
                During winter pressures, some Trusts bring in interim operational leaders to manage surge capacity, improve patient flow, and reduce A&E wait times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Skills</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In-Demand NHS Skills</h2>
            <p className="text-xl text-gray-500">Skills that command premium rates</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {nhsSkills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* NHS Framework & IR35 */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Compliance</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NHS Framework Rates & IR35</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">NHS Framework Rates</h3>
              <p className="text-gray-600 mb-4">
                Most NHS interim roles are governed by framework agreements with standardized rate cards. NHS Professionals, Crown Commercial Service, and regional frameworks set maximum day rates by band and role type.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Band 9 executives: £1,200-£1,800/day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Band 8d directors: £900-£1,300/day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Band 8c senior managers: £700-£1,000/day</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Programme directors: £800-£1,100/day</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Off-Payroll Working Rules</h3>
              <p className="text-gray-600 mb-4">
                NHS organizations are subject to public sector IR35 rules. The hiring Trust determines IR35 status using HMRC's CEST tool. Most senior interim roles fall inside IR35.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Inside IR35: PAYE tax treatment applies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Trust makes status determination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Agency processes payroll for inside IR35</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Rate cards often show inside/outside rates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Tax Planning</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IR35 Calculator</h2>
            <p className="text-xl text-gray-500">Understand your take-home as an NHS interim leader</p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NHS Interim FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about NHS interim roles</p>
          </div>
          <FAQ items={NHS_FAQS} title="" />
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map((search) => (
              <Link
                key={search}
                href={`/interim-jobs?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm border border-gray-200"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Related Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore More Interim Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/interim-jobs" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-2xl mb-3">💼</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">All Interim Jobs</h3>
              <p className="text-sm text-gray-600">Browse all sectors and roles</p>
            </Link>
            <Link href="/interim-jobs-healthcare" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-2xl mb-3">⚕️</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Healthcare Interim Jobs</h3>
              <p className="text-sm text-gray-600">Broader healthcare sector roles</p>
            </Link>
            <Link href="/interim-coo-services" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Interim COO Services</h3>
              <p className="text-sm text-gray-600">Operations leadership roles</p>
            </Link>
            <Link href="/interim-hr" className="bg-white rounded-xl p-6 hover:shadow-lg transition-all group">
              <div className="text-2xl mb-3">👥</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Interim HR Directors</h3>
              <p className="text-sm text-gray-600">CHRO and HR leadership</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for NHS Interim Leadership?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            {stats.total}+ NHS Trust and healthcare leadership opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs?industry=Healthcare"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse NHS Jobs
            </Link>
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Join the Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
