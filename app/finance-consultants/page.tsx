import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Finance Consultants UK | Full-Time Finance Leadership',
  description: 'Hire interim finance consultants for full-time temporary assignments. Executive-level finance professionals for FP&A, fundraising, and transformation. 3-12 month engagements.',
  keywords: 'interim finance consultant, interim finance director, temporary finance expert, interim CFO consultant, finance interim manager',
  alternates: { canonical: 'https://interim.quest/finance-consultants' },
}

export default function FinanceConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Popular Roles</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim Finance<br /><span className="text-emerald-400">Consultants</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Executive-level finance professionals for full-time interim assignments. Deploy experienced finance leaders for 3-12 month engagements to drive fundraising, build FP&A capability, and transform finance operations.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">Find a Consultant</Link>
                <Link href="/interim-cfo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CFO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What Interim Finance Consultants Do</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim finance consultants are executive-level finance professionals who join your organisation full-time for temporary assignments. They lead fundraising processes, build financial planning capabilities, and transform finance operations during growth, M&A, or leadership transitions.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Finance Leadership', description: 'Lead finance teams, set strategy, and drive execution during growth or transition.' },
              { title: 'Fundraising & Capital', description: 'Lead funding rounds, manage investor relations, and secure growth capital.' },
              { title: 'FP&A Build-out', description: 'Build financial planning, budgeting, forecasting, and scenario modelling capabilities.' },
              { title: 'Financial Transformation', description: 'Modernise finance operations, implement systems, and build scalable processes.' },
              { title: 'M&A & Integration', description: 'Lead financial due diligence, valuation, deal execution, and post-merger integration.' },
              { title: 'Cash & Working Capital', description: 'Optimise cash management, working capital, and financial controls.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-emerald-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim Finance Consultant</h2>
          <div className="space-y-4">
            {[
              'Leading fundraising rounds or preparing for investor due diligence',
              'Covering finance leadership vacancy while recruiting permanent CFO',
              'Building FP&A capability for rapid growth or scaling operations',
              'Driving finance transformation or systems implementation programmes',
              'Managing finance through M&A, integration, or organisational restructure',
              'Improving financial controls, processes, or audit readiness',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find an Interim Finance Consultant</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your finance leadership needs and we'll match you with executive-level finance professionals for full-time interim assignments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">Get Started</Link>
            <Link href="/interim-finance" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Finance Leadership</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
