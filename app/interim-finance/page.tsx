import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Finance Leadership UK | Full-Time Temporary CFOs & Finance Directors',
  description: 'Hire full-time interim finance leaders (3-12 months). Experienced CFOs and finance directors to cover departures, lead fundraising, manage restructuring, or prepare for exit.',
  keywords: 'interim finance, interim finance director, interim cfo, temporary finance executive, interim controller, hire finance leader',
  alternates: { canonical: 'https://interim.quest/interim-finance' },
}

export default function InterimFinancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-emerald-400">Finance</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary finance leadership for 3-12 months. Experienced CFOs and finance directors to cover departures, lead fundraising, manage restructuring, or prepare for exit.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">Find Finance Leadership</Link>
                <Link href="/interim-cfo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CFO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim Finance Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim finance leaders provide full-time, experienced financial leadership during critical periods. When your CFO departs, you're raising capital, preparing for sale, or managing restructuring—interim leaders step in immediately to maintain financial control and credibility.</p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional Finance Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim finance leaders work full-time for a defined period (typically 3-12 months) to cover departures, lead fundraising, or manage crisis situations.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time finance support (1-3 days per week), explore <Link href="/fractional-finance" className="text-emerald-600 hover:text-emerald-700 underline">fractional finance leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim CFO', description: 'Full-time C-level financial leadership for fundraising, M&A, and major transitions.', link: '/interim-cfo-services' },
              { title: 'Interim Finance Director', description: 'Full-time senior finance leadership for FP&A, reporting, and team building.', link: '#contact' },
              { title: 'Interim Controller', description: 'Full-time hands-on financial operations, accounting, and compliance leadership.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-emerald-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim Finance Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'CFO or finance director has left—you need immediate senior coverage while recruiting.' },
              { title: 'Fundraising', description: 'Raising capital and need experienced CFO to lead investor relations and due diligence.' },
              { title: 'M&A Activity', description: 'Acquiring or being acquired and need finance leadership for transaction execution.' },
              { title: 'Restructuring', description: 'Financial distress or turnaround requiring experienced crisis management leadership.' },
              { title: 'Exit Preparation', description: 'Preparing for sale or IPO and need finance leadership to ready the business.' },
              { title: 'Systems Implementation', description: 'Implementing new ERP or financial systems and need leadership through transition.' },
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="emerald" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Finance Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your financial needs and we'll match you with the right interim finance executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">Get Started</Link>
            <Link href="/interim-cfo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim CFOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
