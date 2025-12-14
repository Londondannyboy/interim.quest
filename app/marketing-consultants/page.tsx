import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Marketing Consultants UK | Full-Time Marketing Leadership',
  description: 'Hire interim marketing consultants for full-time temporary assignments. Executive-level marketing professionals for strategy, growth, and transformation. 3-12 month engagements.',
  keywords: 'interim marketing consultant, interim marketing director, temporary marketing expert, interim CMO consultant, marketing interim manager',
  alternates: { canonical: 'https://interim.quest/marketing-consultants' },
}

export default function MarketingConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Popular Roles</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim Marketing<br /><span className="text-amber-400">Consultants</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Executive-level marketing professionals for full-time interim assignments. Deploy experienced marketing leaders for 3-12 month engagements to drive growth, launch products, and transform marketing capabilities.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Find a Consultant</Link>
                <Link href="/interim-cmo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CMO</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What Interim Marketing Consultants Do</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim marketing consultants are executive-level marketing professionals who join your organisation full-time for temporary assignments. They lead marketing strategy, drive revenue growth, and build sustainable marketing capabilities during product launches, market expansion, or leadership transitions.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              { title: 'Marketing Leadership', description: 'Lead marketing teams, set strategy, and drive execution during growth or transition.' },
              { title: 'Go-to-Market Strategy', description: 'Launch products, enter new markets, and build scalable GTM frameworks.' },
              { title: 'Brand & Positioning', description: 'Develop brand strategy, messaging architecture, and market positioning.' },
              { title: 'Growth Marketing', description: 'Build and optimise demand generation, customer acquisition, and revenue programmes.' },
              { title: 'Marketing Transformation', description: 'Modernise marketing operations, implement MarTech, and build data-driven capabilities.' },
              { title: 'Team Building', description: 'Build, restructure, and mentor marketing teams for sustainable performance.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-amber-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Hire an Interim Marketing Consultant</h2>
          <div className="space-y-4">
            {[
              'Launching major products or entering new markets requiring focused leadership',
              'Covering marketing leadership vacancy while recruiting permanent CMO',
              'Driving rebranding, repositioning, or marketing transformation programmes',
              'Scaling marketing during rapid growth or funding rounds',
              'Managing marketing through M&A, integration, or organisational change',
              'Building marketing capability from scratch or restructuring existing teams',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find an Interim Marketing Consultant</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your marketing leadership needs and we'll match you with executive-level marketing professionals for full-time interim assignments.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">Get Started</Link>
            <Link href="/interim-marketing" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Explore Marketing Leadership</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
