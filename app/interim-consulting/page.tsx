import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim vs Consulting | Interim Management Comparison UK',
  description: 'Understand the difference between interim management and consulting. Interim = full-time temporary executives (3-12 months). Consulting = advisory projects. Compare models, costs, and when to use each.',
  keywords: 'interim vs consulting, interim management vs consulting, interim executives, management consulting, interim comparison',
  alternates: { canonical: 'https://interim.quest/interim-consulting' },
}

export default function InterimConsultingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-indigo-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Comparison Guide</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim vs<br /><span className="text-indigo-400">Consulting</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Understanding the difference between interim management and consulting. One gives you full-time operational leadership, the other gives you strategic advice.</p>
              <Link href="#comparison" className="px-8 py-4 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors inline-block">See Comparison</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">The Fundamental Difference</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim management and consulting are often confused, but they serve fundamentally different purposes. Interim executives are temporary full-time leaders who run operations and are accountable for results. Consultants provide advice and recommendations but do not typically have operational accountability.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="p-6 bg-indigo-50 border-l-4 border-indigo-500">
              <h3 className="font-bold text-gray-900 mb-3">Interim Management</h3>
              <p className="text-gray-600 text-sm mb-3">Full-time temporary executives who join your leadership team for 3-12 months. They have direct reports, P&L accountability, and make operational decisions. They implement strategy and drive change.</p>
              <p className="text-gray-600 text-sm font-medium">Think: Temporary CFO running finance during transformation</p>
            </div>
            <div className="p-6 bg-gray-50 border-l-4 border-gray-400">
              <h3 className="font-bold text-gray-900 mb-3">Management Consulting</h3>
              <p className="text-gray-600 text-sm mb-3">Project-based advisory engagements where consultants analyze problems, develop recommendations, and may support implementation. They advise leadership but do not typically have line authority.</p>
              <p className="text-gray-600 text-sm font-medium">Think: Strategy consultants developing 3-year growth plan</p>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Detailed Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left font-bold">Aspect</th>
                  <th className="p-4 text-left font-bold text-indigo-700">Interim Management</th>
                  <th className="p-4 text-left font-bold">Management Consulting</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-4 font-medium">Time Commitment</td><td className="p-4">Full-time (100%)</td><td className="p-4">Project-based, often part-time</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Duration</td><td className="p-4">3-12 months typically</td><td className="p-4">Weeks to months per project</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Role</td><td className="p-4">Operational leadership</td><td className="p-4">Advisory and analysis</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Accountability</td><td className="p-4">Full P&L and operational accountability</td><td className="p-4">Accountable for recommendations</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Authority</td><td className="p-4">Line management, decision-making</td><td className="p-4">Advisory only, no line authority</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Integration</td><td className="p-4">Part of executive team</td><td className="p-4">External advisor</td></tr>
                <tr className="border-b"><td className="p-4 font-medium">Typical Cost</td><td className="p-4">£800-£1,500/day (full-time)</td><td className="p-4">£1,500-£5,000/day (big firms)</td></tr>
                <tr className="border-b bg-gray-50"><td className="p-4 font-medium">Best For</td><td className="p-4">Running operations, executing change</td><td className="p-4">Strategy, analysis, specialized expertise</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Choose Which</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-indigo-700 mb-4 text-xl">Choose Interim Management When:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You need someone to run a function or department</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You are covering executive absence (maternity, sick leave)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You need operational accountability and decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You are executing transformation or managing a crisis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You need full-time focus and hands-on leadership</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-4 text-xl">Choose Consulting When:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You need strategic advice and recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You want specialized expertise for analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You have capacity to implement internally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You need market research or competitive analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✓</span>
                  <span className="text-gray-600 text-sm">You want external validation of strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Interim Executives</h2>
          <p className="text-xl text-gray-400 mb-10">If you need full-time operational leadership for 3-12 months, we can help you find experienced interim executives.</p>
          <Link href="/handler/sign-up" className="px-10 py-5 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors inline-block">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
