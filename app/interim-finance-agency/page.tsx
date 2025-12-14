import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Finance Agency UK | Temporary Finance Leadership',
  description: 'Interim finance agencies place full-time temporary CFOs, finance directors, and financial controllers for 3-12 months. Find experienced finance executives for transformation, maternity cover, and crisis situations.',
  keywords: 'interim finance agency, interim CFO, temporary finance director, finance interim management, financial controller interim uk',
  alternates: { canonical: 'https://interim.quest/interim-finance-agency' },
}

export default function InterimFinanceAgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Finance Specialists</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-emerald-400">Finance Agency</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Find full-time temporary finance executives through specialist interim agencies. CFOs, finance directors, and financial controllers for 3-12 month assignments.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">Get Started</Link>
                <Link href="/interim-cfo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CFO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim Finance Agency?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim finance agencies specialize in placing experienced finance executives—CFOs, finance directors, and financial controllers—for temporary full-time assignments lasting 3-12 months. These are operational finance leaders, not consultants or part-time advisors.</p>
          <p className="text-gray-600 mb-6">Unlike accounting firms that provide services or consulting firms that give advice, interim finance agencies provide people—senior finance executives who join your team full-time to run finance operations, manage teams, and drive financial performance during critical periods.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Use Interim Finance Executives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Financial Transformation', description: 'Finance function overhaul, system implementations, or process transformation requiring experienced change leadership.' },
              { title: 'Crisis & Turnaround', description: 'Financial distress, cash crisis, or urgent restructuring requiring immediate senior finance expertise and credibility.' },
              { title: 'Maternity & Absence Cover', description: 'Full coverage for CFO or finance director on maternity leave, sick leave, or sabbatical with complete operational continuity.' },
              { title: 'Fundraising & M&A', description: 'Major funding rounds or M&A transactions requiring dedicated senior finance leadership for 6-12 months.' },
              { title: 'Pre-Permanent Hire', description: 'Bridge leadership while recruiting permanent CFO, or testing candidate/approach before permanent commitment.' },
              { title: 'Scale-Up Growth', description: 'Rapid growth phase requiring senior finance leadership but before ready to commit to permanent CFO hire.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-emerald-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim CFO vs Permanent CFO</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold">Aspect</th>
                  <th className="p-4 text-left font-bold text-emerald-700">Interim CFO</th>
                  <th className="p-4 text-left font-bold">Permanent CFO</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-medium">Duration</td><td className="p-4">3-12 months</td><td className="p-4">Multi-year commitment</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Time to Start</td><td className="p-4">1-2 weeks</td><td className="p-4">2-6 months recruitment</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">6-Month Cost</td><td className="p-4">£80k-£120k all-in</td><td className="p-4">£60k-£100k + benefits, equity, NI</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Experience</td><td className="p-4">Multi-company, crisis-tested</td><td className="p-4">Varied, long-term focus</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Exit Cost</td><td className="p-4">None, contract ends</td><td className="p-4">Notice period, redundancy</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Best For</td><td className="p-4">Transformation, crisis, cover</td><td className="p-4">Long-term stability</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Interim Finance Executives</h2>
          <p className="text-xl text-gray-400 mb-10">We connect you with experienced interim finance leaders for full-time temporary assignments. CFOs, finance directors, and financial controllers.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">Get Started</Link>
            <Link href="/interim-cfo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CFO Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
