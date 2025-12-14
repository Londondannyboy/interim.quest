import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Security Leadership UK | Full-Time Temporary CISOs & Security Directors',
  description: 'Hire full-time interim security leaders (3-12 months). Experienced CISOs and security directors to cover departures, achieve compliance, or respond to security incidents.',
  keywords: 'interim security, interim security director, interim ciso, temporary security executive, hire security leader',
  alternates: { canonical: 'https://interim.quest/interim-security' },
}

export default function InterimSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-red-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">Functional Leadership</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-red-400">Security</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary security leadership for 3-12 months. Experienced CISOs and security directors to cover departures, achieve compliance certifications, respond to incidents, or build security programmes.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Find Security Leadership</Link>
                <Link href="/interim-ciso-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Interim CISO Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">When You Need Interim Security Leadership</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim security leaders provide full-time, experienced security leadership during critical periods. When your CISO departs, you are pursuing compliance certification, responding to incidents, or building security from scratch—interim leaders step in immediately to protect the business.</p>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional Security Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim security leaders work full-time for a defined period (typically 3-12 months) to cover departures, achieve compliance, or respond to incidents.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time security support (1-3 days per week), explore <Link href="https://fractional.quest/fractional-security" className="text-red-600 hover:text-red-700 underline">fractional security leadership</Link>.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: 'Interim CISO', description: 'Full-time C-level security leadership for compliance, governance, and incidents.', link: '/interim-ciso-services' },
              { title: 'Interim Security Director', description: 'Full-time senior security leadership for operations, compliance, and risk.', link: '#contact' },
              { title: 'Interim InfoSec Manager', description: 'Full-time hands-on security operations and technical security management.', link: '#contact' },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="block p-6 bg-gray-50 border border-gray-200 hover:border-red-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Common Interim Security Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Leadership Departure', description: 'CISO or security leader has left—you need immediate senior coverage while recruiting.' },
              { title: 'Compliance Certification', description: 'Pursuing SOC 2, ISO 27001, or other certification requiring dedicated security leadership.' },
              { title: 'Security Incident', description: 'Breach or major incident requiring experienced security leadership to respond and recover.' },
              { title: 'Security Programme Build', description: 'Building security function from scratch and need leadership to establish foundations.' },
              { title: 'Customer Requirements', description: 'Enterprise customers requiring security leadership and compliance for deals to close.' },
              { title: 'Regulatory Audit', description: 'Facing regulatory audit or investigation requiring security leadership to manage response.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <HireProcessStepper accentColor="red" />
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Security Leadership</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your security challenges and we'll match you with the right interim security executive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-red-500 text-white font-bold uppercase tracking-wider hover:bg-red-400 transition-colors">Get Started</Link>
            <Link href="/interim-ciso-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Learn About Interim CISOs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
