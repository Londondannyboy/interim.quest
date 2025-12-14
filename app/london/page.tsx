import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Interim Jobs London - UK Executive Recruitment Hub',
  description: 'London is the UK\'s interim executive capital. 60% of all interim CFO, CMO, CTO roles. £800-£1,500 daily rates across the City, Shoreditch, and Canary Wharf.',
  openGraph: {
    title: 'Interim Jobs London - UK Executive Recruitment Hub',
    description: 'London dominates the UK interim market. Find full-time temporary executive roles in finance, tech, and startups.',
    type: 'website',
  },
}

export default function LondonPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="inline-flex items-center text-purple-200 hover:text-white mb-6 transition-colors">
            ← Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Interim Jobs London
          </h1>

          <p className="max-w-2xl text-xl text-purple-100 mb-10 leading-relaxed">
            London is the UK's interim executive capital, accounting for 60% of all interim management opportunities nationwide. Full-time temporary executive roles with £800-£1,500 daily rates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/interim-jobs-london"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-purple-900 hover:bg-purple-50 transition-all duration-200"
            >
              Explore London Jobs
            </Link>
            <Link
              href="/interim-jobs"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-all duration-200"
            >
              Browse All UK Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The UK's Interim Management Capital
            </h2>
          </div>

          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              London dominates the UK interim executive market, representing 60% of all opportunities nationwide. The city's concentration of startups, scale-ups, and established companies creates unmatched demand for experienced interim CFOs, CTOs, CMOs, and COOs.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Unlike fractional or part-time arrangements, interim roles in London are <strong>full-time temporary executive positions</strong>, typically lasting 3-18 months. You work on-site or hybrid to lead specific initiatives like digital transformations, fundraising, IPO preparations, turnarounds, or international expansions.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed">
              Day rates range from £800-£1,500 depending on role complexity and sector, with annual earnings of £150,000-£300,000+ for full-time interim engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Key Districts */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">London's Business Districts</h2>
            <p className="text-xl text-gray-600">Where interim executives thrive</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">City of London</h3>
              <p className="text-gray-600 mb-4">
                Financial services, fintech, and professional services. The highest concentration of interim CFO roles in the UK.
              </p>
              <p className="text-sm font-medium text-purple-700">£1,000-£1,500/day</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Shoreditch</h3>
              <p className="text-gray-600 mb-4">
                Tech startups and scale-ups. Strong demand for interim CTOs and CMOs leading growth initiatives and digital transformations.
              </p>
              <p className="text-sm font-medium text-purple-700">£900-£1,400/day</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Canary Wharf</h3>
              <p className="text-gray-600 mb-4">
                Corporate and banking headquarters. Interim COOs and CFOs for regulatory compliance and transformation projects.
              </p>
              <p className="text-sm font-medium text-purple-700">£950-£1,300/day</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kings Cross</h3>
              <p className="text-gray-600 mb-4">
                Tech and creative sector hub. Interim leadership for scaling companies and innovation projects.
              </p>
              <p className="text-sm font-medium text-purple-700">£850-£1,200/day</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Westminster</h3>
              <p className="text-gray-600 mb-4">
                Government, policy, and public sector. Interim executives for major transformation and modernization programs.
              </p>
              <p className="text-sm font-medium text-purple-700">£900-£1,350/day</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Camden</h3>
              <p className="text-gray-600 mb-4">
                Creative and media industries. Interim CMOs for audience growth, digital transformation, and brand repositioning.
              </p>
              <p className="text-sm font-medium text-purple-700">£800-£1,150/day</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes London Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes London Different</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Scale</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                London's interim market dwarfs the rest of the UK combined. With thousands of startups, hundreds of scale-ups, and major corporates constantly transforming, the pipeline of interim opportunities is unmatched.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Rates</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                London day rates are 30-50% higher than regional markets, reflecting the complexity of engagements and competitive talent landscape. Senior interim executives regularly earn £200,000-£300,000+ annually.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diverse Opportunities</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                From fintech CFO roles preparing for FCA authorization, to scale-up CTOs leading technical transformations, to corporate COOs managing major restructures - London offers the UK's most diverse range of interim executive opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full-Time Engagements</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                London interim roles are typically full-time, project-based engagements lasting 3-18 months. This is distinct from fractional or part-time executive work - you are leading critical transformation projects, turnarounds, or growth initiatives that demand full executive focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore London Interim Opportunities
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Access the UK's largest market for interim executive roles
          </p>
          <Link
            href="/interim-jobs-london"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-purple-900 hover:bg-purple-50 transition-all duration-200"
          >
            Browse London Jobs →
          </Link>
        </div>
      </section>
    </div>
  )
}
