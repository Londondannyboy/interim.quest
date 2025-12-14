import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Product Leadership UK | Full-Time Temporary CPOs & Product Directors',
  description: 'Hire full-time interim product leaders (3-12 months). Experienced CPOs and product directors to cover departures, launch products, or transform product organisations.',
  keywords: 'interim product, interim product director, interim cpo, temporary product executive, interim vp product, hire product leader',
  alternates: { canonical: 'https://interim.quest/interim-product' },
}

export default function InterimProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-purple-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-purple-400">Product</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary product leadership for 3-12 months. Experienced CPOs and product directors to cover departures, launch major products, or transform product organisations.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">Find Product Leadership</Link>
                <Link href="/interim-cpo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CPO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim Product Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim product leaders provide full-time, experienced product leadership during critical periods. When your CPO departs, you are launching major products, entering new markets, or transforming product strategy—interim leaders step in immediately to maintain momentum.</p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional Product Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim product leaders work full-time for a defined period (typically 3-12 months) to cover departures, lead major launches, or drive transformation.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time product support (1-3 days per week), explore <Link href="https://fractional.quest/fractional-product" className="text-purple-600 hover:text-purple-700 underline">fractional product leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim CPO', description: 'Full-time C-level product leadership for major strategy pivots and transformation.', link: '/interim-cpo-services' },
              { title: 'Interim VP Product', description: 'Full-time senior product leadership for roadmap execution and team scaling.', link: '#contact' },
              { title: 'Interim Product Director', description: 'Full-time hands-on product leadership to drive delivery and build capabilities.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-purple-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim Product Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'CPO or product leader has left—you need immediate senior coverage while recruiting.' },
              { title: 'Major Product Launch', description: 'Launching significant new product or platform requiring dedicated product leadership.' },
              { title: 'Product-Market Fit', description: 'Searching for product-market fit and need experienced leadership to drive discovery.' },
              { title: 'Product Transformation', description: 'Pivoting product strategy or transforming product organisation and processes.' },
              { title: 'Market Expansion', description: 'Entering new markets or verticals requiring product leadership to adapt offering.' },
              { title: 'Team Building', description: 'Building product function from scratch and need leadership to establish foundations.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="purple" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Product Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your product challenges and we'll match you with the right interim product executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">Get Started</Link>
            <Link href="/interim-cpo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim CPOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
