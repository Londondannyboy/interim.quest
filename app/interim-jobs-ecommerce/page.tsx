import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ, ECOMMERCE_FAQS } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Jobs in E-commerce | Interim Quest',
  description: 'Full-time temporary executive roles in e-commerce and DTC brands. £600-£1,100 daily rates. Scale operations, fix unit economics, and prepare for acquisition.',
  openGraph: {
    title: 'Interim Jobs in E-commerce | Interim Quest',
    description: 'Full-time temporary e-commerce leadership for growth and turnarounds.',
    type: 'website',
  },
}

const ecommerceSubsectors = [
  { name: 'DTC Brands', description: 'Direct-to-consumer retail', rateRange: '£650-£1,100/day', icon: '🛍️' },
  { name: 'Marketplaces', description: 'Multi-seller platforms', rateRange: '£700-£1,150/day', icon: '🏪' },
  { name: 'Subscription', description: 'Recurring revenue models', rateRange: '£650-£1,100/day', icon: '📦' },
  { name: 'B2B E-commerce', description: 'Wholesale & trade', rateRange: '£600-£1,050/day', icon: '🏭' },
  { name: 'Social Commerce', description: 'Social media selling', rateRange: '£600-£1,000/day', icon: '📱' },
  { name: 'E-commerce Tech', description: 'Platforms & infrastructure', rateRange: '£700-£1,200/day', icon: '💻' },
]

const ecommerceRoles = [
  { icon: '📢', title: 'Interim CMO', rate: '£700-£1,100/day', desc: 'Performance marketing, customer acquisition' },
  { icon: '💰', title: 'Interim CFO', rate: '£750-£1,150/day', desc: 'Unit economics, cash flow, fundraising' },
  { icon: '💻', title: 'Interim CTO', rate: '£800-£1,200/day', desc: 'Platform scaling, technology strategy' },
  { icon: '⚙️', title: 'Interim COO', rate: '£700-£1,100/day', desc: 'Operations, fulfilment, supply chain' },
  { icon: '📈', title: 'Interim VP Growth', rate: '£650-£1,000/day', desc: 'Conversion, retention, monetization' },
  { icon: '🎯', title: 'Interim VP Product', rate: '£700-£1,100/day', desc: 'Roadmap, UX, marketplace strategy' },
]

const relatedSearches = [
  'Interim CMO E-commerce', 'DTC Brand CFO', 'E-commerce CTO Jobs',
  'Interim Growth Marketing', 'Shopify Interim CTO', 'Amazon Marketplace Executive',
  'DTC Interim Executive', 'E-commerce Operations Director', 'Retail Interim CFO'
]

// Same video as homepage
const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

async function getEcommerceStats() {
  try {
    const sql = createDbQuery()
    const [totalEcommerce] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (
        title ILIKE '%ecommerce%' OR title ILIKE '%e-commerce%' OR title ILIKE '%retail%' OR
        description ILIKE '%ecommerce%' OR description ILIKE '%e-commerce%' OR description ILIKE '%dtc%'
      )`
    ])

    return {
      totalEcommerce: Math.max(parseInt((totalEcommerce[0] as any)?.count || '0'), 35),
      avgDayRate: 850
    }
  } catch (error) {
    return { totalEcommerce: 35, avgDayRate: 850 }
  }
}

export default async function EcommercePage() {
  const stats = await getEcommerceStats()

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

                  <span className="inline-block bg-pink-500/20 backdrop-blur text-pink-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.totalEcommerce}+ E-commerce Opportunities
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Interim Jobs<br />
                    <span className="text-pink-300">E-commerce</span>
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    Full-time temporary executive roles for e-commerce companies in transition. Fix unit economics, scale operations, and prepare for acquisition. £600-£1,100 daily rates.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/interim-jobs?industry=E-commerce"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse E-commerce Jobs →
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
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£150bn</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">UK E-commerce</div>
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
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">30%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">UK Retail</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Interim Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.totalEcommerce}+ opportunities in online retail</p>
          </div>
          <EmbeddedJobBoard />
        </div>
      </section>

      {/* E-commerce Subsectors */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Sector</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Subsectors</h2>
            <p className="text-xl text-gray-500">High-growth areas hiring interim executives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceSubsectors.map((sector) => (
              <div key={sector.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{sector.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{sector.description}</p>
                <p className="text-pink-700 font-semibold">{sector.rateRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Roles */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top E-commerce Roles</h2>
            <p className="text-xl text-gray-500">Most in-demand interim positions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecommerceRoles.map((role) => (
              <div key={role.title} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all">
                <span className="text-4xl mb-4 block">{role.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{role.desc}</p>
                <p className="text-pink-700 font-semibold">{role.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why E-commerce */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why E-commerce?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Unit Economics Rescue</h3>
              <p className="text-gray-600">
                DTC brands hire interim CFOs when CAC exceeds LTV or cash runway is critical. Full-time, 4-8 month engagements to restructure finances and restore profitability.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operations Scale-Up</h3>
              <p className="text-gray-600">
                E-commerce companies need interim COOs during rapid growth phases or fulfillment crises. Temporary, full-time leadership to establish scalable operations infrastructure.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acquisition Readiness</h3>
              <p className="text-gray-600">
                Brands hire interim executives for 6-12 months pre-acquisition to professionalize operations, clean up financials, and maximize exit value for strategic buyers or PE.
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
            <p className="text-xl text-gray-500">Understand your take-home as an e-commerce interim executive</p>
          </div>
          <IR35Calculator defaultDayRate={850} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">E-commerce Interim FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about interim work in e-commerce</p>
          </div>
          <FAQ items={ECOMMERCE_FAQS} title="" />
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
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-700 transition-colors text-sm border border-gray-200"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for E-commerce Leadership?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            {stats.totalEcommerce}+ interim opportunities in online retail and DTC brands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs?industry=E-commerce"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse E-commerce Jobs
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
