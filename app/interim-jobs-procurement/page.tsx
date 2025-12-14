import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Procurement Jobs UK | Supply Chain & Purchasing Roles | Interim Quest',
  description: 'Find interim procurement jobs in the UK. Procurement Director, Supply Chain, and CPO roles. £800-£1,500 daily rates. Full-time temporary procurement leadership for 3-12 months.',
  keywords: ['interim procurement jobs', 'procurement interim jobs', 'interim procurement director', 'interim supply chain jobs', 'interim CPO jobs'],
  openGraph: {
    title: 'Interim Procurement Jobs UK | Supply Chain & Purchasing Roles',
    description: 'Full-time temporary procurement leadership roles. Transform supply chains, reduce costs, implement systems.',
    type: 'website',
  },
}

const procurementRoles = [
  { name: 'Interim CPO / Chief Procurement Officer', description: 'Strategic procurement leadership', rateRange: '£1,000-£1,500/day', demand: 'Very High' },
  { name: 'Interim Procurement Director', description: 'Procurement operations & strategy', rateRange: '£800-£1,200/day', demand: 'High' },
  { name: 'Interim Supply Chain Director', description: 'End-to-end supply chain management', rateRange: '£850-£1,300/day', demand: 'High' },
  { name: 'Interim Head of Procurement', description: 'Category & supplier management', rateRange: '£700-£1,000/day', demand: 'High' },
  { name: 'Interim Category Manager', description: 'Specialist category sourcing', rateRange: '£600-£900/day', demand: 'Medium' },
  { name: 'Interim Sourcing Director', description: 'Strategic sourcing programs', rateRange: '£750-£1,100/day', demand: 'Growing' },
]

const procurementSectors = [
  { name: 'Manufacturing', icon: '🏭', growth: '+22% YoY', description: 'Supply chain transformation' },
  { name: 'Retail', icon: '🛍️', growth: '+18% YoY', description: 'Cost reduction & supplier management' },
  { name: 'Healthcare/NHS', icon: '🏥', growth: '+25% YoY', description: 'Framework procurement' },
  { name: 'Construction', icon: '🏗️', growth: '+20% YoY', description: 'Materials & subcontractors' },
  { name: 'FMCG', icon: '📦', growth: '+16% YoY', description: 'Supplier consolidation' },
  { name: 'Energy', icon: '⚡', growth: '+24% YoY', description: 'Strategic sourcing' },
]

const procurementSkills = [
  'Strategic Sourcing', 'Supplier Negotiation', 'Contract Management',
  'ERP/P2P Systems (SAP Ariba, Coupa, Oracle)', 'Cost Reduction Programs', 'Category Management',
  'Supplier Risk Management', 'ESG/Sustainability Procurement', 'Vendor Due Diligence'
]

const relatedSearches = [
  'Interim Procurement Jobs UK', 'Interim Procurement Director', 'Interim CPO Jobs',
  'Interim Supply Chain Jobs', 'Procurement Interim Jobs London', 'Interim Category Manager',
  'Interim Sourcing Director', 'Interim Procurement Consultant', 'P2P Implementation Jobs'
]

// Same video as homepage
const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const PROCUREMENT_FAQS = [
  {
    question: 'What does an interim procurement director do?',
    answer: 'An Interim Procurement Director works full-time with a company on a temporary basis (3-12 months) to lead critical procurement initiatives. They handle cost reduction programs (typically achieving 20-30% savings), implement P2P systems, manage post-merger supplier consolidation, respond to supply chain crises, and build out procurement functions. Unlike ongoing consultants, interim procurement directors are embedded full-time to deliver urgent transformation and crisis management.',
  },
  {
    question: 'How much do interim procurement managers earn?',
    answer: 'Interim procurement managers and directors in the UK earn £600-£1,200 per day depending on seniority and complexity. Interim CPOs command £1,000-£1,500/day. These are full-time roles (5 days/week), translating to monthly earnings of £12,000-£30,000. Engagements typically last 3-12 months, with total engagement values of £40,000-£350,000. Complex transformation programs and crisis situations command premium rates.',
  },
  {
    question: 'When should you hire an interim CPO?',
    answer: 'Hire an interim CPO for urgent procurement situations: launching major cost reduction programs (20-30% savings targets), implementing P2P systems (SAP Ariba, Coupa), post-merger supplier consolidation, supply chain crisis management, building procurement functions from scratch, preparing for sale (procurement due diligence), or covering sudden CPO departures. Interim CPOs provide full-time leadership during critical 3-12 month transformation periods.',
  },
  {
    question: 'What\'s the difference between interim and permanent procurement roles?',
    answer: 'Interim procurement roles are full-time temporary positions (3-12 months) focused on specific transformations, crises, or transitions - like cost reduction programs, P2P implementations, or post-merger integration. Permanent procurement roles are ongoing positions managing day-to-day procurement operations. Interim roles pay higher daily rates (£600-£1,500/day) but are temporary. Companies hire interim procurement leaders when they need urgent expertise for specific mandates, not ongoing management.',
  },
]

async function getProcurementStats() {
  try {
    const sql = createDbQuery()
    const [total, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%procurement%' OR role_category ILIKE '%supply chain%' OR title ILIKE '%procurement%' OR title ILIKE '%supply chain%' OR title ILIKE '%CPO%' OR title ILIKE '%sourcing%')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND (role_category ILIKE '%procurement%' OR role_category ILIKE '%supply chain%') AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      total: parseInt((total[0] as any)?.count || '0'),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '950'))
    }
  } catch (error) {
    return { total: 25, avgDayRate: 950 }
  }
}

export default async function ProcurementJobsPage() {
  const stats = await getProcurementStats()

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

                  <span className="inline-block bg-emerald-500/20 backdrop-blur text-emerald-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.total}+ Procurement Leadership Roles
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Interim<br />
                    <span className="text-emerald-300">Procurement</span> Jobs UK
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    Full-time temporary procurement leadership for supply chain transformation. Lead cost reduction programs, P2P implementations, and supplier consolidation. £800-£1,500 daily rates.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/interim-jobs?industry=Procurement"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse Procurement Jobs →
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
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">{stats.total}+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Active Roles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">+18%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">YoY Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">25%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Cost Savings</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim Procurement Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.total}+ procurement and supply chain leadership opportunities</p>
          </div>
          <EmbeddedJobBoard defaultDepartment="Procurement" />
        </div>
      </section>

      {/* Procurement Roles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim Procurement Roles</h2>
            <p className="text-xl text-gray-500">Procurement and supply chain leadership positions available</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procurementRoles.map((role) => (
              <div key={role.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{role.description}</p>
                <p className="text-emerald-700 font-semibold mb-1">{role.rateRange}</p>
                <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">Demand: {role.demand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Sector</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sectors Hiring Procurement Leaders</h2>
            <p className="text-xl text-gray-500">Industries with highest interim supply chain jobs demand</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {procurementSectors.map((sector) => (
              <div key={sector.name} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all">
                <span className="text-4xl mb-3 block">{sector.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1">{sector.name}</h3>
                <p className="text-emerald-700 text-sm font-semibold mb-1">{sector.growth}</p>
                <p className="text-gray-600 text-xs">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Skills</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In-Demand Procurement Skills</h2>
            <p className="text-xl text-gray-500">Skills that command premium rates in procurement interim jobs</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {procurementSkills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Interim Procurement */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Interim Procurement Director?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction Programs</h3>
              <p className="text-gray-600">
                Companies hire interim procurement directors specifically for 20-30% cost savings initiatives. Full-time engagement for 6-12 months to renegotiate contracts, consolidate suppliers, and implement strategic sourcing programs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">P2P System Implementations</h3>
              <p className="text-gray-600">
                Interim CPOs lead SAP Ariba, Coupa, or Oracle P2P implementations requiring procurement transformation expertise. These are temporary, full-time assignments during 9-12 month system rollouts requiring category setup, supplier onboarding, and change management.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Merger Supplier Consolidation</h3>
              <p className="text-gray-600">
                PE-backed companies hire interim procurement directors for 6-9 months post-acquisition to consolidate supplier bases, harmonize contracts, and realize synergies. Critical for maximizing deal value and preparing for exit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Use Cases</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">When to Hire Interim Procurement</h2>
            <p className="text-xl text-gray-500">Common scenarios for interim supply chain jobs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Cost Reduction Programs</h3>
              <p className="text-gray-600 text-sm">
                Launch aggressive cost savings initiatives targeting 20-30% reductions through strategic sourcing, supplier negotiations, and category optimization.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. P2P System Implementations</h3>
              <p className="text-gray-600 text-sm">
                Lead SAP Ariba, Coupa, or Oracle implementations requiring procurement expertise for category setup, supplier onboarding, and process design.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Post-Merger Supplier Consolidation</h3>
              <p className="text-gray-600 text-sm">
                Consolidate supplier bases, harmonize contracts, and realize procurement synergies following M&A transactions.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. Supply Chain Crisis Management</h3>
              <p className="text-gray-600 text-sm">
                Respond to supplier failures, materials shortages, or supply chain disruptions requiring immediate procurement intervention.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">5. Procurement Function Build-Out</h3>
              <p className="text-gray-600 text-sm">
                Establish procurement functions from scratch, implementing category strategies, supplier frameworks, and governance processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Tax Planning</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IR35 Calculator</h2>
            <p className="text-xl text-gray-500">Understand your take-home as an interim procurement leader</p>
          </div>
          <IR35Calculator defaultDayRate={950} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Procurement Interim FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about interim procurement jobs</p>
          </div>
          <FAQ items={PROCUREMENT_FAQS} title="" />
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map((search) => (
              <Link
                key={search}
                href={`/interim-jobs?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-emerald-100 hover:text-emerald-700 transition-colors text-sm border border-gray-200"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/interim-jobs"
              className="p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">All Interim Jobs</h3>
              <p className="text-sm text-gray-600">Browse all executive roles</p>
            </Link>
            <Link
              href="/interim-coo-services"
              className="p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Interim COO Services</h3>
              <p className="text-sm text-gray-600">Procurement reports to COO</p>
            </Link>
            <Link
              href="/interim-operations"
              className="p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Interim Operations</h3>
              <p className="text-sm text-gray-600">Supply chain & operations</p>
            </Link>
            <Link
              href="/interim-jobs-finance"
              className="p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 border border-gray-200 transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Interim Finance Jobs</h3>
              <p className="text-sm text-gray-600">Related finance function</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Interim Procurement Leadership?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            {stats.total}+ CPO, Procurement Director, and Supply Chain opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs?role=Procurement"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse Procurement Jobs
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
