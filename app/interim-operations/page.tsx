import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Operations Leadership UK | Full-Time Temporary COOs & Operations Directors',
  description: 'Hire full-time interim operations leaders (3-12 months). Experienced COOs and operations directors to cover departures, scale operations, or lead transformation projects.',
  keywords: 'interim operations, interim ops director, interim coo, temporary operations executive, interim vp operations, hire operations leader',
  alternates: { canonical: 'https://interim.quest/interim-operations' },
}

export default function InterimOperationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-orange-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-orange-400">Operations</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary operations leadership for 3-12 months. Experienced COOs and operations directors to cover departures, scale operations, or lead transformation projects.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Find Operations Leadership</Link>
                <Link href="/interim-coo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim COO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim Operations Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim operations leaders provide full-time, experienced leadership during critical periods. When your COO departs, you are scaling rapidly, implementing new systems, or transforming operations—interim leaders step in immediately to maintain operational excellence.</p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional Operations Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim operations leaders work full-time for a defined period (typically 3-12 months) to cover departures, lead scaling efforts, or manage transformation projects.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time operations support (1-3 days per week), explore <Link href="/fractional-operations" className="text-orange-600 hover:text-orange-700 underline">fractional operations leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim COO', description: 'Full-time C-level operations leadership for major scaling and transformation.', link: '/interim-coo-services' },
              { title: 'Interim VP Operations', description: 'Full-time senior operations leadership for process improvement and efficiency.', link: '#contact' },
              { title: 'Interim Operations Director', description: 'Full-time hands-on operations leadership to manage and optimise operations.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-orange-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim Operations Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'COO or operations leader has left—you need immediate senior coverage while recruiting.' },
              { title: 'Rapid Scaling', description: 'Growing fast and need operations leadership to build scalable processes and teams.' },
              { title: 'Operational Transformation', description: 'Transforming operations and need experienced leadership to drive change programme.' },
              { title: 'Systems Implementation', description: 'Implementing new ERP, CRM, or operational systems and need leadership through transition.' },
              { title: 'Performance Turnaround', description: 'Operations underperforming and need experienced leadership to diagnose and fix issues.' },
              { title: 'Integration Projects', description: 'Post-merger integration requiring dedicated operations leadership to combine entities.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="orange" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Operations Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your operational challenges and we'll match you with the right interim operations executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Get Started</Link>
            <Link href="/interim-coo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim COOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
