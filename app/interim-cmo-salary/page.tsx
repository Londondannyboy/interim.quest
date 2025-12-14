import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { RateDistribution } from '@/components/RateDistribution'

export const metadata: Metadata = {
  title: 'Interim CMO Day Rates UK 2025 - Pay Guide & Monthly Earnings',
  description: 'Interim CMO day rates in the UK for 2025. Typical rates £1,000-£2,000/day. Monthly earnings potential £20k-£42k. Full-time daily rates by location, industry and experience level.',
  keywords: 'interim cmo day rate, interim cmo rates uk, interim cmo pay, interim cmo daily rate, interim cmo earnings',
  openGraph: {
    title: 'Interim CMO Day Rates UK 2025 - Complete Pay Guide',
    description: 'Interim CMO day rates. UK rates £1,000-£2,000/day. Monthly earnings £20k-£42k.',
  },
}

const salaryData = {
  dayRates: [
    { level: 'Mid-level Interim CMO', range: '£1,000-£1,400/day', monthly: '£21k-£29k', experience: '12-18 years' },
    { level: 'Senior Interim CMO', range: '£1,400-£1,800/day', monthly: '£29k-£38k', experience: '18-25 years' },
    { level: 'Executive Interim CMO', range: '£1,800-£2,200/day', monthly: '£38k-£46k', experience: '25+ years' },
  ],
  byLocation: [
    { location: 'London (Tech/Scale-ups)', range: '£1,600-£2,200/day', premium: '+25%' },
    { location: 'London (City/Corporate)', range: '£1,400-£2,000/day', premium: '+15%' },
    { location: 'Manchester', range: '£1,100-£1,600/day', premium: 'Base' },
    { location: 'Birmingham', range: '£1,000-£1,500/day', premium: '-5%' },
    { location: 'Edinburgh', range: '£1,100-£1,600/day', premium: 'Base' },
    { location: 'Bristol', range: '£1,100-£1,600/day', premium: 'Base' },
    { location: 'Remote UK', range: '£1,000-£1,400/day', premium: '-10%' },
  ],
  byIndustry: [
    { industry: 'B2B SaaS', range: '£1,600-£2,200/day', demand: 'Very High' },
    { industry: 'DTC / E-commerce', range: '£1,400-£2,000/day', demand: 'Very High' },
    { industry: 'FinTech', range: '£1,400-£1,900/day', demand: 'High' },
    { industry: 'HealthTech / MedTech', range: '£1,300-£1,800/day', demand: 'High' },
    { industry: 'Marketplaces', range: '£1,300-£1,900/day', demand: 'High' },
    { industry: 'Professional Services', range: '£1,100-£1,500/day', demand: 'Medium' },
    { industry: 'Non-profit / Social Enterprise', range: '£900-£1,300/day', demand: 'Low' },
  ],
}

export default function InterimCmoSalaryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-800 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-purple-200 hover:text-white mb-6 inline-block">← Back to Home</Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Interim CMO Day Rates UK 2025</h1>
          <p className="text-xl text-purple-100 mb-8">
            Complete guide to interim CMO day rates and monthly earnings in the UK market.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-purple-700">£1,500</div>
              <div className="text-gray-600">Average Day Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-700">£31k</div>
              <div className="text-gray-600">Monthly Earnings</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-700">5</div>
              <div className="text-gray-600">Days Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Rate Distribution from Jobs */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-2 block">Live Market Data</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">CMO Day Rate Distribution</h2>
            <p className="text-gray-400 mt-2 text-sm">From current job listings</p>
          </div>
          <Suspense fallback={
            <div className="flex items-center justify-center h-64 bg-gray-900 rounded-xl">
              <div className="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
            </div>
          }>
            <RateDistribution height="400px" roleFilter="CMO" />
          </Suspense>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-purple mb-12">
            <h2>Interim CMO Day Rates Overview</h2>
            <p>
              <strong>Interim CMO day rates</strong> in the UK vary based on experience, specialisation, location, and scope of work. Unlike fractional CMOs who work part-time, interim CMOs work full-time on daily rates—typically ranging from £1,000 to £2,200 per day in 2025.
            </p>
            <p>
              The <strong>interim CMO pay</strong> model is designed for full-time temporary engagements. An interim CMO working 5 days per week at £1,500/day earns approximately £31,000 per month (£372,000 annually if working year-round). These are professional daily rates for experienced marketing executives handling growth transformations, brand repositioning, or interim leadership during transitions.
            </p>
          </div>

          {/* Day Rates by Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interim CMO Day Rates by Experience</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Level</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Monthly Earnings</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.dayRates.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.level}</td>
                      <td className="p-4 text-purple-700 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-700">{row.monthly}</td>
                      <td className="p-4 text-gray-600">{row.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4">*Monthly earnings based on ~21 working days per month (5 days/week)</p>
          </div>

          {/* By Location */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interim CMO Salary by Location</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Location</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate Range</th>
                    <th className="text-left p-4 font-semibold text-gray-900">vs Average</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.byLocation.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.location}</td>
                      <td className="p-4 text-purple-700 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* By Industry */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interim CMO Rates by Industry</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Industry</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate Range</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Demand</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.byIndustry.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.industry}</td>
                      <td className="p-4 text-purple-700 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-600">{row.demand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg prose-purple">
            <h2>What Affects Interim CMO Day Rates?</h2>
            <p>Several factors influence <strong>interim CMO day rates</strong>:</p>
            <ul>
              <li><strong>B2B vs B2C experience</strong> - B2B SaaS expertise commands highest rates due to demand</li>
              <li><strong>Track record</strong> - Proven results (pipeline growth, CAC reduction) add 15-25% premium</li>
              <li><strong>Industry specialisation</strong> - Deep vertical expertise (FinTech, HealthTech) pays more</li>
              <li><strong>Channel expertise</strong> - Performance marketing, PLG, or brand specialists earn premium rates</li>
              <li><strong>Scope of work</strong> - Growth transformations, rebrands, or go-to-market strategy command top rates (£1,800-£2,200/day)</li>
            </ul>

            <h2>Permanent CMO vs Interim CMO Rates</h2>
            <p>
              A permanent CMO at a Series A/B startup typically earns £120,000-£160,000 plus equity. An <strong>interim CMO</strong> at £1,500/day working 5 days/week earns £31,000/month (£372,000 annually if sustained year-round). The premium reflects the temporary nature, specialized expertise, immediate availability, and lack of long-term commitment or equity.
            </p>
            <p>
              Interim CMOs are not fractional executives—they work full-time during the engagement period but on defined-term contracts rather than permanent employment. This makes them ideal for bridging periods between permanent hires, leading specific transformation projects, or when companies need immediate senior marketing leadership without permanent hiring costs.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Interim CMO Roles?</h2>
          <p className="text-purple-100 mb-8">Browse live interim CMO positions with competitive day rates.</p>
          <div className="flex justify-center gap-4">
            <Link href="/interim-jobs?role=CMO" className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-50">
              Browse CMO Jobs
            </Link>
            <Link href="/part-time-cmo" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10">
              Part-Time CMO Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Salary Guides</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/interim-cfo-salary" className="px-4 py-2 bg-white rounded-lg border hover:border-emerald-300">Interim CFO Salary →</Link>
            <Link href="/interim-jobs-london" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">London CMO Jobs →</Link>
            <Link href="/part-time-cmo" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">Part-Time CMO Guide →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
