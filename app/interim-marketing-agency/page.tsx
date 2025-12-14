import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Marketing Agency UK | Temporary Marketing Leadership',
  description: 'Interim marketing management agencies place full-time temporary CMOs and marketing directors for 3-12 months. Find experienced marketing executives for transformation, maternity cover, and growth initiatives.',
  keywords: 'interim marketing agency, interim CMO, temporary marketing director, marketing interim management, marketing executive search uk',
  alternates: { canonical: 'https://interim.quest/interim-marketing-agency' },
}

export default function InterimMarketingAgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Marketing Specialists</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-amber-400">Marketing Agency</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Find full-time temporary marketing executives through specialist interim agencies. CMOs, marketing directors, and heads of marketing for 3-12 month assignments.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Get Started</Link>
                <Link href="/interim-cmo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CMO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim Marketing Agency?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim marketing agencies specialize in placing experienced marketing executives—CMOs, marketing directors, and functional heads—for temporary full-time assignments lasting 3-12 months. These are operational marketing leaders, not consultants or part-time advisors.</p>
          <p className="text-gray-600 mb-6">Unlike traditional marketing agencies that provide services or consulting firms that give advice, interim marketing agencies provide people—senior marketing executives who join your team full-time to run marketing operations, lead teams, and drive results during critical periods.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Use Interim Marketing Executives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Marketing Transformation', description: 'Overhauling marketing function, repositioning brand, or entering new markets requiring experienced change leadership.' },
              { title: 'Maternity & Absence Cover', description: 'Full coverage for CMO or marketing director on maternity leave, sick leave, or sabbatical with complete operational continuity.' },
              { title: 'Scale-Up Growth', description: 'High-growth phase requiring senior marketing leadership but before ready to commit to permanent CMO hire.' },
              { title: 'Pre-Permanent Hire', description: 'Bridge leadership while recruiting permanent marketing executive, or testing candidate/strategy before permanent commitment.' },
              { title: 'Product Launch', description: 'Major product or market launch requiring dedicated senior marketing leadership for 6-12 months.' },
              { title: 'Crisis Management', description: 'Marketing crisis, brand issues, or urgent repositioning requiring immediate senior expertise.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-amber-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Interim vs Traditional Marketing Agency</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold">Aspect</th>
                  <th className="p-4 text-left font-bold text-amber-700">Interim Marketing Agency</th>
                  <th className="p-4 text-left font-bold">Traditional Marketing Agency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-medium">What You Get</td><td className="p-4">Full-time marketing executive</td><td className="p-4">Marketing services/campaigns</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Commitment</td><td className="p-4">Full-time (5 days/week)</td><td className="p-4">Varies by retainer</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Duration</td><td className="p-4">3-12 months typically</td><td className="p-4">Ongoing retainer</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Role</td><td className="p-4">Operational leadership</td><td className="p-4">Service delivery</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Typical Cost</td><td className="p-4">£80k-£150k for 6 months</td><td className="p-4">£5k-£30k/month retainer</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Best For</td><td className="p-4">Running marketing function</td><td className="p-4">Execution and campaigns</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Interim Marketing Executives</h2>
          <p className="text-xl text-gray-400 mb-10">We connect you with experienced interim marketing leaders for full-time temporary assignments. CMOs, marketing directors, and specialist heads.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Get Started</Link>
            <Link href="/interim-cmo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CMO Services</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
