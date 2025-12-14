import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Operations Consultants UK | Full-Time Operations Leadership',
  description: 'Hire interim operations consultants for full-time temporary assignments. Executive-level operations professionals for scaling, transformation, and excellence. 3-12 month engagements.',
  keywords: 'interim operations consultant, interim operations director, temporary COO, interim operations leader, operations interim manager',
  alternates: { canonical: 'https://interim.quest/operations-consultants' },
}

export default function OperationsConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-orange-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Popular Roles</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim Operations<br /><span className="text-orange-400">Consultants</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Executive-level operations professionals for full-time interim assignments. Deploy experienced operations leaders for 3-12 month engagements to drive scaling, build operational excellence, and lead transformation programmes.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Find a Consultant</Link>
                <Link href="/interim-coo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim COO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What Interim Operations Consultants Do</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim operations consultants are executive-level operations professionals who join your organisation full-time for temporary assignments. They lead operational scaling, drive efficiency programmes, and build sustainable operations capabilities during rapid growth, transformation, or leadership transitions.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Operations Leadership', description: 'Lead operations teams, set strategy, and drive execution during growth or transition.' },
              { title: 'Scaling Operations', description: 'Build scalable processes, systems, and teams to support rapid growth.' },
              { title: 'Operational Excellence', description: 'Drive efficiency, quality, and performance improvement programmes.' },
              { title: 'Transformation Delivery', description: 'Lead operational transformation, systems implementation, and change management.' },
              { title: 'M&A & Integration', description: 'Lead operational due diligence and integration of acquired businesses.' },
              { title: 'Organisational Design', description: 'Design structure, governance, and operating models for performance and scale.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim Operations Consultant</h2>
          <div className="space-y-4">
            {[
              'Scaling operations during rapid growth or market expansion',
              'Covering operations leadership vacancy while recruiting permanent COO',
              'Driving operational transformation or systems implementation programmes',
              'Managing operations through M&A, integration, or organisational restructure',
              'Building operational capability from scratch or restructuring existing operations',
              'Leading efficiency, cost reduction, or operational excellence initiatives',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find an Interim Operations Consultant</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your operations leadership needs and we'll match you with executive-level operations professionals for full-time interim assignments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-orange-500 text-black font-bold uppercase tracking-wider hover:bg-orange-400 transition-colors">Get Started</Link>
            <Link href="/interim-operations" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Operations Leadership</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
