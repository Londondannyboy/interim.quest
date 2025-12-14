import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Technology Consultants UK | Full-Time Tech Leadership',
  description: 'Hire interim technology consultants for full-time temporary assignments. Executive-level tech professionals for architecture, engineering, and transformation. 3-12 month engagements.',
  keywords: 'interim technology consultant, interim tech director, temporary CTO, interim engineering leader, technology interim manager',
  alternates: { canonical: 'https://interim.quest/technology-consultants' },
}

export default function TechnologyConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-blue-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Popular Roles</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim Technology<br /><span className="text-blue-400">Consultants</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Executive-level technology professionals for full-time interim assignments. Deploy experienced tech leaders for 3-12 month engagements to drive product delivery, build engineering teams, and lead technical transformation.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Find a Consultant</Link>
                <Link href="/interim-cto-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CTO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What Interim Technology Consultants Do</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim technology consultants are executive-level tech professionals who join your organisation full-time for temporary assignments. They lead product development, scale engineering teams, and drive technical transformation during critical launches, growth phases, or leadership transitions.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Technology Leadership', description: 'Lead engineering teams, set technical strategy, and drive execution during growth or transition.' },
              { title: 'Product Development', description: 'Lead product launches, platform builds, and critical technical initiatives to completion.' },
              { title: 'Engineering Scale-up', description: 'Build, structure, and scale engineering teams for rapid growth or new capabilities.' },
              { title: 'Technical Transformation', description: 'Drive cloud migrations, architecture modernisation, and technical debt reduction.' },
              { title: 'M&A & Integration', description: 'Lead technical due diligence and integration of acquired technology and teams.' },
              { title: 'Platform & Architecture', description: 'Design scalable architecture, establish technical standards, and build platform capabilities.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim Technology Consultant</h2>
          <div className="space-y-4">
            {[
              'Leading critical product launches or platform builds requiring focused leadership',
              'Covering technology leadership vacancy while recruiting permanent CTO',
              'Scaling engineering teams during rapid growth or market expansion',
              'Driving cloud migration, modernisation, or technical transformation programmes',
              'Managing technology through M&A, integration, or organisational change',
              'Building engineering capability from scratch or restructuring existing teams',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find an Interim Technology Consultant</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your technology leadership needs and we'll match you with executive-level technology professionals for full-time interim assignments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-blue-500 text-white font-bold uppercase tracking-wider hover:bg-blue-400 transition-colors">Get Started</Link>
            <Link href="/interim-technology" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Tech Leadership</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
