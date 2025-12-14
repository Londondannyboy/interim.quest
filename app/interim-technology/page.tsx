import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Technology Leadership UK | Full-Time Temporary CTOs & VPs of Engineering',
  description: 'Hire full-time interim technology leaders (3-12 months). Experienced CTOs and VPs of Engineering to cover departures, lead migrations, or scale engineering teams.',
  keywords: 'interim technology, interim cto, interim cio, temporary technology executive, interim vp engineering, hire tech leader',
  alternates: { canonical: 'https://interim.quest/interim-technology' },
}

export default function InterimTechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-blue-400">Technology</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary technology leadership for 3-12 months. Experienced CTOs and VPs of Engineering to cover departures, lead migrations, scale engineering teams, or manage technical debt.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Find Tech Leadership</Link>
                <Link href="/interim-cto-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CTO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim Technology Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim technology leaders provide full-time, experienced technical leadership during critical periods. When your CTO departs, you are migrating platforms, scaling engineering teams, or facing technical crisis—interim leaders step in immediately to provide stability and direction.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional Technology Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim technology leaders work full-time for a defined period (typically 3-12 months) to cover departures, lead migrations, or manage crisis situations.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time technology support (1-3 days per week), explore <Link href="https://fractional.quest/fractional-technology" className="text-blue-600 hover:text-blue-700 underline">fractional technology leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim CTO', description: 'Full-time C-level technical leadership for major architecture and strategy decisions.', link: '/interim-cto-services' },
              { title: 'Interim CIO', description: 'Full-time IT leadership for enterprise systems and digital transformation.', link: '/interim-cio-services' },
              { title: 'Interim VP Engineering', description: 'Full-time engineering leadership for team scaling and delivery excellence.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-blue-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim Technology Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'CTO or VP Engineering has left—you need immediate senior coverage while recruiting.' },
              { title: 'Platform Migration', description: 'Migrating to new platform or cloud infrastructure requiring dedicated technical leadership.' },
              { title: 'Engineering Scaling', description: 'Rapidly growing engineering team and need leadership to build structure and processes.' },
              { title: 'Technical Debt', description: 'Accumulated technical debt requiring experienced leadership to assess and remediate.' },
              { title: 'Architecture Redesign', description: 'Re-platforming or re-architecting systems requiring senior technical oversight.' },
              { title: 'Technical Due Diligence', description: 'M&A transaction requiring technical assessment and integration leadership.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="blue" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Technology Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your technology challenges and we'll match you with the right interim tech executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Get Started</Link>
            <Link href="/interim-cto-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim CTOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
