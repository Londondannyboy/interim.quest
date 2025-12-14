import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim HR Leadership UK | Full-Time Temporary CHROs & HR Directors',
  description: 'Hire full-time interim HR leaders (3-12 months). Experienced CHROs and HR directors to cover departures, manage restructuring, or lead culture transformations.',
  keywords: 'interim hr, interim hr director, interim chro, temporary hr executive, interim people leader, hire hr leader',
  alternates: { canonical: 'https://interim.quest/interim-hr' },
}

export default function InterimHRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-pink-400">HR</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary HR leadership for 3-12 months. Experienced CHROs and HR directors to cover departures, manage restructuring, lead culture transformations, or navigate complex employee relations.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Find HR Leadership</Link>
                <Link href="/interim-chro-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CHRO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim HR Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim HR leaders provide full-time, experienced people leadership during critical periods. When your CHRO departs, you are managing restructuring, facing complex employee relations issues, or transforming culture—interim leaders step in immediately to provide stability and expertise.</p>
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional HR Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim HR leaders work full-time for a defined period (typically 3-12 months) to cover departures, manage restructuring, or handle crisis situations.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time HR support (1-3 days per week), explore <Link href="/fractional-hr" className="text-pink-600 hover:text-pink-700 underline">fractional HR leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim CHRO', description: 'Full-time C-level HR leadership for major culture transformations and restructuring.', link: '/interim-chro-services' },
              { title: 'Interim HR Director', description: 'Full-time senior HR leadership for policy, compliance, and team building.', link: '#contact' },
              { title: 'Interim People Leader', description: 'Full-time hands-on HR leadership to manage employee relations and development.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-pink-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim HR Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'CHRO or HR director has left—you need immediate senior coverage while recruiting.' },
              { title: 'Restructuring', description: 'Redundancies or reorganisation requiring experienced HR leadership to manage process.' },
              { title: 'Employee Relations Crisis', description: 'Complex disciplinaries, grievances, or tribunal cases needing expert HR management.' },
              { title: 'Culture Transformation', description: 'Culture change programme requiring dedicated HR leadership to drive transformation.' },
              { title: 'Rapid Growth', description: 'Scaling quickly and need HR leadership to build people infrastructure and processes.' },
              { title: 'M&A Integration', description: 'Post-merger integration requiring HR leadership to harmonise people policies and culture.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-pink-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="pink" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find HR Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your people challenges and we'll match you with the right interim HR executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">Get Started</Link>
            <Link href="/interim-chro-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim CHROs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
