import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { RateDistribution } from '@/components/RateDistribution'

export const metadata: Metadata = {
  title: 'Interim CFO Day Rates UK 2025 - Pay Guide & Monthly Earnings',
  description: 'Interim CFO day rates in the UK for 2025. Typical rates £1,200-£2,500/day. Monthly earnings potential £25k-£50k. Full-time daily rates by location, industry and experience level.',
  keywords: 'interim cfo day rate, interim cfo rates uk, interim cfo pay, interim cfo daily rate, interim cfo earnings',
  openGraph: {
    title: 'Interim CFO Day Rates UK 2025 - Complete Pay Guide',
    description: 'Interim CFO day rates. UK rates £1,200-£2,500/day. Monthly earnings £25k-£50k.',
  },
}

const salaryData = {
  dayRates: [
    { level: 'Mid-level Interim CFO', range: '£1,200-£1,600/day', monthly: '£25k-£33k', experience: '15-20 years' },
    { level: 'Senior Interim CFO', range: '£1,600-£2,000/day', monthly: '£33k-£42k', experience: '20-25 years' },
    { level: 'Executive Interim CFO', range: '£2,000-£2,500/day', monthly: '£42k-£52k', experience: '25+ years' },
  ],
  byLocation: [
    { location: 'London (City/Canary Wharf)', range: '£1,800-£2,500/day', premium: '+30%' },
    { location: 'London (Tech/Scale-ups)', range: '£1,600-£2,200/day', premium: '+20%' },
    { location: 'Manchester', range: '£1,300-£1,800/day', premium: 'Base' },
    { location: 'Birmingham', range: '£1,200-£1,700/day', premium: '-5%' },
    { location: 'Edinburgh', range: '£1,300-£1,800/day', premium: 'Base' },
    { location: 'Bristol', range: '£1,300-£1,800/day', premium: 'Base' },
    { location: 'Remote UK', range: '£1,200-£1,600/day', premium: '-10%' },
  ],
  byIndustry: [
    { industry: 'Private Equity / VC Portfolio', range: '£2,000-£2,500/day', demand: 'Very High' },
    { industry: 'FinTech', range: '£1,800-£2,300/day', demand: 'Very High' },
    { industry: 'SaaS / Tech', range: '£1,600-£2,100/day', demand: 'High' },
    { industry: 'Healthcare / Pharma', range: '£1,500-£2,000/day', demand: 'High' },
    { industry: 'E-commerce / Retail', range: '£1,400-£1,900/day', demand: 'High' },
    { industry: 'Manufacturing', range: '£1,300-£1,700/day', demand: 'Medium' },
    { industry: 'Professional Services', range: '£1,300-£1,800/day', demand: 'Medium' },
  ],
}

export default function InterimCfoSalaryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-800 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-emerald-200 hover:text-white mb-6 inline-block">← Back to Home</Link>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Interim CFO Day Rates UK 2025</h1>
          <p className="text-xl text-emerald-100 mb-8">
            Complete guide to interim CFO day rates and monthly earnings in the UK market.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-emerald-700">£1,700</div>
              <div className="text-gray-600">Average Day Rate</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-700">£35k</div>
              <div className="text-gray-600">Monthly Earnings</div>
            </div>
            <div>
              <div className="text-4xl font-black text-emerald-700">5</div>
              <div className="text-gray-600">Days Per Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Rate Distribution from Jobs */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2 block">Live Market Data</span>
            <h2 className="text-2xl md:text-3xl font-black text-white">CFO Day Rate Distribution</h2>
            <p className="text-gray-400 mt-2 text-sm">From current job listings</p>
          </div>
          <Suspense fallback={
            <div className="flex items-center justify-center h-64 bg-gray-900 rounded-xl">
              <div className="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
            </div>
          }>
            <RateDistribution height="400px" roleFilter="CFO" />
          </Suspense>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-emerald mb-12">
            <h2>Interim CFO Day Rates Overview</h2>
            <p>
              <strong>Interim CFO day rates</strong> in the UK vary significantly based on experience, location, industry specialisation, and scope of work. Unlike fractional CFOs who work part-time, interim CFOs work full-time on daily rates—typically ranging from £1,200 to £2,500 per day in 2025.
            </p>
            <p>
              The <strong>interim CFO pay</strong> model is designed for full-time temporary engagements. An interim CFO working 5 days per week at £1,700/day earns approximately £35,000 per month (£420,000 annually if working year-round). These are professional daily rates for experienced executives handling critical business transformations, fundraising, or interim leadership roles.
            </p>
          </div>

          {/* Day Rates by Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interim CFO Day Rates by Experience</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-50">
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
                      <td className="p-4 text-emerald-700 font-semibold">{row.range}</td>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interim CFO Salary by Location</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Location</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate Range</th>
                    <th className="text-left p-4 font-semibold text-gray-900">vs Average</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.byLocation.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.location}</td>
                      <td className="p-4 text-emerald-700 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* By Industry */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interim CFO Rates by Industry</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-emerald-50">
                    <th className="text-left p-4 font-semibold text-gray-900">Industry</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Day Rate Range</th>
                    <th className="text-left p-4 font-semibold text-gray-900">Demand</th>
                  </tr>
                </thead>
                <tbody>
                  {salaryData.byIndustry.map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium text-gray-900">{row.industry}</td>
                      <td className="p-4 text-emerald-700 font-semibold">{row.range}</td>
                      <td className="p-4 text-gray-600">{row.demand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="prose prose-lg prose-emerald">
            <h2>Factors Affecting Interim CFO Day Rates</h2>
            <p>Several factors influence <strong>interim CFO day rates</strong>:</p>
            <ul>
              <li><strong>Qualifications</strong> - ACA/ACCA/CIMA qualified CFOs command 10-15% higher rates</li>
              <li><strong>Fundraising experience</strong> - Series A-C experience adds £200-400/day premium</li>
              <li><strong>Industry specialisation</strong> - Deep sector expertise (FinTech, PE) commands premium rates</li>
              <li><strong>Scope of work</strong> - Turnaround, M&A, or IPO expertise commands top rates (£2,000-£2,500/day)</li>
              <li><strong>Engagement duration</strong> - Longer engagements (6+ months) may negotiate slightly lower rates</li>
            </ul>

            <h2>Permanent CFO vs Interim CFO Rates</h2>
            <p>
              A permanent CFO at a Series B startup typically earns £150,000-£200,000 plus equity. An <strong>interim CFO</strong> at £1,700/day working 5 days/week earns £35,000/month (£420,000 annually if sustained year-round). The premium reflects the temporary nature, specialized expertise, immediate availability, and lack of long-term commitment or equity.
            </p>
            <p>
              Interim CFOs are not fractional executives—they work full-time during the engagement period but on defined-term contracts rather than permanent employment. This makes them ideal for bridging periods, transformations, or when companies need immediate senior finance leadership without permanent hiring costs.
            </p>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Interim CFO Roles?</h2>
          <p className="text-emerald-100 mb-8">Browse live interim CFO positions with competitive day rates.</p>
          <div className="flex justify-center gap-4">
            <Link href="/interim-jobs?role=CFO" className="px-8 py-4 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-emerald-50">
              Browse CFO Jobs
            </Link>
            <Link href="/part-time-cfo" className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white/10">
              Part-Time CFO Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Salary Guides</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/interim-cmo-salary" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">Interim CMO Salary →</Link>
            <Link href="/interim-jobs-london" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">London CFO Jobs →</Link>
            <Link href="/part-time-cfo" className="px-4 py-2 bg-white rounded-lg border hover:border-purple-300">Part-Time CFO Guide →</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
