import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Services UK | Temporary Executive Leadership',
  description: 'Access interim executive services for your business. Full-time temporary CFOs, CMOs, CTOs and more for 3-12 months. Senior leadership for transformation, crisis, and transitions.',
  keywords: 'interim services, interim executive services, temporary executive, interim leadership, interim management uk',
  alternates: { canonical: 'https://interim.quest/interim-services' },
}

export default function InterimServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-emerald-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Interim Management</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-emerald-400">Services</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary executives for 3-12 months. Get experienced leadership for transformation, crisis management, maternity cover, and critical transitions.</p>
              <Link href="#services" className="px-8 py-4 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors inline-block">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What Are Interim Services?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim services provide businesses with experienced executives who work full-time on temporary assignments, typically lasting 3-12 months. These are senior leaders who step in during critical periods—transformations, crises, maternity cover, or strategic transitions.</p>
          <p className="text-gray-600 mb-6">Unlike permanent hires or part-time consultants, interim executives are fully embedded in your business with complete operational accountability. They bring deep expertise from multiple companies and can hit the ground running, delivering results from day one. When the assignment ends, they move on—no redundancy, no long-term commitment.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 bg-gray-50 text-center">
              <div className="text-4xl font-black text-emerald-500 mb-2">3-12</div>
              <p className="text-gray-600 text-sm">Months typical assignment</p>
            </div>
            <div className="p-6 bg-gray-50 text-center">
              <div className="text-4xl font-black text-emerald-500 mb-2">100%</div>
              <p className="text-gray-600 text-sm">Full-time commitment</p>
            </div>
            <div className="p-6 bg-gray-50 text-center">
              <div className="text-4xl font-black text-emerald-500 mb-2">2 wks</div>
              <p className="text-gray-600 text-sm">Average time to start</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Available Interim Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Interim CFO', description: 'Financial strategy, fundraising, and FP&A leadership.', link: '/interim-cfo-services', color: 'emerald' },
              { title: 'Interim CMO', description: 'Marketing strategy, brand, and growth leadership.', link: '/interim-cmo-services', color: 'amber' },
              { title: 'Interim CTO', description: 'Technical strategy, architecture, and engineering leadership.', link: '/interim-cto-services', color: 'blue' },
              { title: 'Interim COO', description: 'Operations, scaling, and process leadership.', link: '/interim-coo-services', color: 'orange' },
              { title: 'Interim CPO', description: 'Product strategy, roadmap, and team leadership.', link: '/interim-cpo-services', color: 'purple' },
              { title: 'Interim CHRO', description: 'People strategy, culture, and HR leadership.', link: '/interim-chro-services', color: 'pink' },
              { title: 'Interim CRO', description: 'Revenue strategy, sales, and GTM leadership.', link: '/interim-cro-services', color: 'green' },
              { title: 'Interim CISO', description: 'Security strategy, compliance, and risk leadership.', link: '/interim-ciso-services', color: 'red' },
              { title: 'Interim CDO', description: 'Data strategy, analytics, and AI leadership.', link: '/interim-cdo-services', color: 'cyan' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-white border border-gray-200 hover:border-emerald-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">When to Use Interim Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Transformation & Change', description: 'Major business transformation, restructuring, or turnaround requiring experienced change leadership.' },
              { title: 'Crisis Management', description: 'Urgent situations requiring immediate senior expertise—financial distress, regulatory issues, major incidents.' },
              { title: 'Maternity & Sick Leave', description: 'Covering executive absence with full operational continuity and accountability.' },
              { title: 'Pre-Permanent Hire', description: 'Bridge leadership while recruiting permanent executives, or test-before-you-buy for critical roles.' },
              { title: 'M&A Integration', description: 'Post-acquisition integration requiring hands-on leadership to merge operations and deliver synergies.' },
              { title: 'Project Delivery', description: 'Specific initiatives like system implementations, market entry, or major product launches requiring dedicated leadership.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 border-l-4 border-emerald-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Interim Executives</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your situation and we'll match you with experienced interim executives who can start within 2 weeks.</p>
          <Link href="/handler/sign-up" className="px-10 py-5 bg-emerald-500 text-white font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors inline-block">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
