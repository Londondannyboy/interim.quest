import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim Agency UK | How Interim Management Agencies Work',
  description: 'Understanding interim management agencies. How agencies source, vet, and place full-time temporary executives. Learn about the interim recruitment process, fees, and what to expect.',
  keywords: 'interim agency, interim management agency, interim recruitment, executive search, interim placement uk',
  alternates: { canonical: 'https://interim.quest/interim-agency' },
}

export default function InterimAgencyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm"><span className="mr-2">←</span> Back to Home</Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-violet-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">How It Works</span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">Interim<br /><span className="text-violet-400">Agencies</span></h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">How interim management agencies work. Understanding the process of finding, vetting, and placing full-time temporary executives for 3-12 month assignments.</p>
              <Link href="#how-it-works" className="px-8 py-4 bg-violet-500 text-white font-bold uppercase tracking-wider hover:bg-violet-400 transition-colors inline-block">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-6">What is an Interim Management Agency?</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim management agencies specialize in finding and placing experienced executives for temporary full-time assignments lasting 3-12 months. They maintain networks of seasoned interim managers and match them with organizations facing transitions, crises, transformations, or temporary leadership gaps.</p>
          <p className="text-gray-600 mb-6">Unlike traditional recruitment firms that focus on permanent placements, interim agencies understand the unique dynamics of temporary executive roles. They work quickly—often placing candidates within 2 weeks—and focus on executives who can hit the ground running without lengthy onboarding.</p>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">How Interim Agencies Work</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-violet-500">
              <div className="flex items-start">
                <div className="bg-violet-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Brief & Requirements</h3>
                  <p className="text-gray-600 text-sm">You provide details about your situation, the role requirements, timeline, and ideal candidate profile. The agency assesses whether interim management is the right solution.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border-l-4 border-violet-500">
              <div className="flex items-start">
                <div className="bg-violet-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Candidate Search</h3>
                  <p className="text-gray-600 text-sm">The agency searches their network of interim managers, looking for executives with relevant industry experience, functional expertise, and availability. They typically shortlist 3-5 candidates within 3-5 days.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border-l-4 border-violet-500">
              <div className="flex items-start">
                <div className="bg-violet-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Interviews & Selection</h3>
                  <p className="text-gray-600 text-sm">You interview shortlisted candidates and select your preferred interim. The agency facilitates references, background checks, and contract negotiations.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 border-l-4 border-violet-500">
              <div className="flex items-start">
                <div className="bg-violet-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Onboarding & Start</h3>
                  <p className="text-gray-600 text-sm">The interim executive starts, typically within 2 weeks of initial brief. The agency often provides ongoing support and check-ins during the assignment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Agency Fee Structures</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 border-l-4 border-violet-500">
              <h3 className="font-bold text-gray-900 mb-3">Percentage of Salary</h3>
              <p className="text-gray-600 text-sm mb-3">Most common model: 15-25% of the interim's total contract value as a one-time placement fee. Similar to permanent recruitment but calculated on the assignment duration.</p>
              <p className="text-gray-600 text-sm font-medium">Example: £100k 6-month contract = £15-25k agency fee</p>
            </div>
            <div className="p-6 bg-gray-50 border-l-4 border-violet-500">
              <h3 className="font-bold text-gray-900 mb-3">Day Rate Markup</h3>
              <p className="text-gray-600 text-sm mb-3">Alternative model: The agency adds 10-20% to the interim's day rate. You pay the marked-up rate daily/weekly, and the agency takes their margin.</p>
              <p className="text-gray-600 text-sm font-medium">Example: Interim charges £800/day, you pay £880-960/day</p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-violet-50 border border-violet-200">
            <p className="text-gray-600 text-sm"><strong>Typical Timeline:</strong> From initial brief to interim starting is usually 10-14 days. Urgent placements can happen in 3-5 days if the right candidate is immediately available.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black mb-6">Find Interim Executives</h2>
          <p className="text-xl text-gray-400 mb-10">We connect you with experienced interim executives for full-time temporary assignments. Tell us what you need.</p>
          <Link href="/handler/sign-up" className="px-10 py-5 bg-violet-500 text-white font-bold uppercase tracking-wider hover:bg-violet-400 transition-colors inline-block">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
