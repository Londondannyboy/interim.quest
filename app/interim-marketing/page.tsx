import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Marketing Leadership UK | Full-Time Temporary CMOs & Marketing Directors',
  description: 'Hire full-time interim marketing leaders (3-12 months). Experienced CMOs, VPs of Marketing, and marketing directors to cover departures, transformations, and critical growth periods.',
  keywords: 'interim marketing, interim marketing director, interim cmo, temporary marketing executive, interim vp marketing, hire marketing leader',
  alternates: { canonical: 'https://interim.quest/interim-marketing' },
}

export default function InterimMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-amber-400">Marketing</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary marketing leadership for 3-12 months. Experienced CMOs and marketing directors to cover departures, lead transformations, or drive critical growth initiatives.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Find Marketing Leadership</Link>
                <Link href="/interim-cmo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CMO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim Marketing Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim marketing leaders provide full-time, experienced leadership during critical periods. When your CMO departs, you're scaling rapidly, launching new products, or undergoing transformation—interim leaders step in immediately to maintain momentum and deliver results.</p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional Marketing Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim marketing leaders work full-time for a defined period (typically 3-12 months) to cover departures, lead transformations, or manage crisis situations.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time marketing support (1-3 days per week), explore <Link href="/fractional-marketing" className="text-amber-600 hover:text-amber-700 underline">fractional marketing leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim CMO', description: 'Full-time C-level marketing leadership for major transitions and transformations.', link: '/interim-cmo-services' },
              { title: 'Interim VP Marketing', description: 'Full-time senior marketing leadership to execute strategy and build teams.', link: '#contact' },
              { title: 'Interim Marketing Director', description: 'Full-time hands-on marketing leadership to drive campaigns and manage teams.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-amber-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim Marketing Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'CMO or marketing leader has left—you need immediate senior coverage while recruiting.' },
              { title: 'Transformation Projects', description: 'Rebranding, repositioning, or major marketing transformation requiring dedicated leadership.' },
              { title: 'Product Launches', description: 'New product or market launch needs focused, experienced marketing leadership.' },
              { title: 'Rapid Growth', description: 'Scaling quickly and need marketing leadership before committing to a permanent hire.' },
              { title: 'Performance Turnaround', description: 'Marketing underperforming and needs experienced leadership to diagnose and fix issues.' },
              { title: 'Team Building', description: 'Building or rebuilding marketing function and need leadership to establish foundations.' },
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="amber" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Marketing Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your marketing challenges and we'll match you with the right interim marketing executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Get Started</Link>
            <Link href="/interim-cmo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim CMOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
