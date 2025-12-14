import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Data Leadership UK | Full-Time Temporary CDOs & Data Directors',
  description: 'Hire full-time interim data leaders (3-12 months). Experienced CDOs and data directors to cover departures, build data platforms, or implement AI/ML strategies.',
  keywords: 'interim data, interim data director, interim cdo, temporary data executive, interim vp analytics, hire data leader',
  alternates: { canonical: 'https://interim.quest/interim-data' },
}

export default function InterimDataPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-cyan-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-cyan-400">Data</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary data leadership for 3-12 months. Experienced CDOs and data directors to cover departures, build data platforms, implement AI/ML strategies, or establish data governance.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-cyan-500 text-white font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors">Find Data Leadership</Link>
                <Link href="/interim-cdo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CDO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim Data Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim data leaders provide full-time, experienced data leadership during critical periods. When your CDO departs, you are building data infrastructure, implementing AI/ML, or establishing data governance—interim leaders step in immediately to drive data initiatives.</p>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional Data Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim data leaders work full-time for a defined period (typically 3-12 months) to cover departures, build platforms, or lead major initiatives.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time data support (1-3 days per week), explore <Link href="https://fractional.quest/fractional-data" className="text-cyan-600 hover:text-cyan-700 underline">fractional data leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim CDO', description: 'Full-time C-level data leadership for strategy, governance, and AI/ML initiatives.', link: '/interim-cdo-services' },
              { title: 'Interim VP Data', description: 'Full-time senior data leadership for infrastructure, platforms, and analytics.', link: '#contact' },
              { title: 'Interim Analytics Director', description: 'Full-time hands-on analytics leadership to build reporting and insights capabilities.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-cyan-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim Data Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'CDO or data leader has left—you need immediate senior coverage while recruiting.' },
              { title: 'Data Platform Build', description: 'Building data warehouse, lake, or platform requiring dedicated data leadership.' },
              { title: 'AI/ML Implementation', description: 'Implementing AI/ML capabilities and need experienced leadership to drive strategy.' },
              { title: 'Data Governance', description: 'Establishing data governance, quality, and compliance frameworks from scratch.' },
              { title: 'Analytics Transformation', description: 'Moving to self-service analytics or modern BI requiring leadership through transition.' },
              { title: 'Data Team Building', description: 'Building data function from scratch and need leadership to hire and structure team.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-cyan-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="cyan" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Data Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your data challenges and we'll match you with the right interim data executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-cyan-500 text-white font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors">Get Started</Link>
            <Link href="/interim-cdo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim CDOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
