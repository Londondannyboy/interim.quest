import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'

export const revalidate = 3600
const HERO_VIDEO_PLAYBACK_ID = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim HR Jobs UK | HR Manager & Director Roles | Interim Quest',
  description: 'Find interim HR jobs, HR manager roles and HR director positions in the UK. Full-time temporary HR leadership for 3-12 months. £500-£1,200 daily rates.',
  keywords: ['interim hr jobs', 'interim hr manager jobs', 'interim human resources jobs', 'interim hr director jobs', 'hr interim jobs'],
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
              <p className="text-2xl text-white/90 font-semibold mb-4">Interim HR Jobs & HR Manager Roles</p>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8">Full-time temporary HR leadership for 3-12 months. Experienced CHROs, HR directors, and HR managers to cover departures, manage restructuring, lead culture transformations, or navigate complex employee relations.</p>
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
          <p className="text-xl text-gray-600 leading-relaxed mb-6">Interim human resources leaders provide full-time, experienced people leadership during critical periods. When your CHRO departs, you are managing restructuring, facing complex employee relations issues, or transforming culture—interim leaders step in immediately to provide stability and expertise.</p>
          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-2">Interim vs Fractional HR Leadership</h3>
            <p className="text-gray-700 text-sm mb-2">Interim HR leaders work full-time for a defined period (typically 3-12 months) to cover departures, manage restructuring, or handle crisis situations.</p>
            <p className="text-gray-700 text-sm">For ongoing part-time HR support (1-3 days per week), explore <Link href="https://fractional.quest/fractional-hr" className="text-pink-600 hover:text-pink-700 underline">fractional HR leadership</Link>.</p>
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
          <h2 className="text-3xl font-black text-gray-900 mb-6">Interim HR Manager Jobs: Roles & Day Rates</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">Interim HR manager jobs and interim HR director roles serve different purposes within organisations. Understanding the distinction helps companies find the right level of HR interim jobs for their needs.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 border-l-4 border-pink-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interim HR Manager</h3>
              <p className="text-gray-600 mb-4">Interim HR managers focus on operational HR management, handling day-to-day people operations and tactical implementation.</p>
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Employee relations and case management</li>
                  <li>Recruitment and onboarding processes</li>
                  <li>Performance management implementation</li>
                  <li>HR policy execution and compliance</li>
                  <li>Team leadership and HR operations</li>
                  <li>HRIS management and reporting</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-4 rounded">
                <p className="font-bold text-gray-900 mb-1">Typical Day Rate:</p>
                <p className="text-2xl font-black text-pink-600">£500-£800/day</p>
              </div>
            </div>

            <div className="bg-white p-8 border-l-4 border-gray-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interim HR Director</h3>
              <p className="text-gray-600 mb-4">Interim HR directors provide strategic HR leadership, focusing on organisational transformation and executive-level people strategy.</p>
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>HR strategy development and execution</li>
                  <li>Organisational design and restructuring</li>
                  <li>Culture transformation programmes</li>
                  <li>Board-level HR advisory</li>
                  <li>M&A integration and due diligence</li>
                  <li>Executive talent management</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-bold text-gray-900 mb-1">Typical Day Rate:</p>
                <p className="text-2xl font-black text-gray-600">£800-£1,200/day</p>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Interim HR Management Jobs: Manager vs Director</h3>
            <p className="text-gray-700 text-sm mb-3">The key difference: <strong>Interim HR managers are operational</strong>, ensuring HR processes run smoothly day-to-day. <strong>Interim HR directors are strategic</strong>, shaping people strategy and driving organisational change from the executive level.</p>
            <p className="text-gray-700 text-sm">Most interim human resources jobs require 3-12 months commitment, with some extending longer for complex transformations. Browse available <Link href="/interim-jobs" className="text-pink-600 hover:text-pink-700 underline font-semibold">interim jobs</Link> or speak to our team about your specific HR interim needs.</p>
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions: Interim HR Jobs</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What does an interim HR manager do?</h3>
              <p className="text-gray-600 mb-2">An interim HR manager provides full-time operational HR leadership for a defined period (typically 3-12 months). They handle day-to-day people management including employee relations, recruitment, performance management, HR compliance, and policy implementation.</p>
              <p className="text-gray-600">Unlike permanent HR managers, interim HR managers bring immediate expertise to cover departures, manage specific projects like restructuring, or provide temporary leadership during periods of change or growth.</p>
            </div>

            <div className="bg-white p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How much do interim HR managers earn UK?</h3>
              <p className="text-gray-600 mb-2">Interim HR managers in the UK typically earn between £500-£800 per day, depending on experience, sector expertise, and assignment complexity. This translates to approximately £10,000-£16,000 per month for full-time interim work.</p>
              <p className="text-gray-600">Senior interim HR directors command higher rates of £800-£1,200 per day due to their strategic responsibilities and executive-level experience. Rates may be higher in London or for specialised sectors like financial services or pharmaceuticals.</p>
            </div>

            <div className="bg-white p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What's the difference between interim HR manager and HR director?</h3>
              <p className="text-gray-600 mb-2"><strong>Interim HR managers</strong> focus on operational execution—they manage day-to-day HR activities, implement policies, handle employee relations cases, oversee recruitment, and ensure HR compliance. They typically report to an HR director or business leader.</p>
              <p className="text-gray-600"><strong>Interim HR directors</strong> provide strategic leadership—they develop people strategy, lead organisational transformations, advise the board on people matters, design organisational structures, and set the HR agenda. They operate at executive level and shape long-term people direction rather than managing operational tasks.</p>
            </div>

            <div className="bg-white p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">When should a company hire an interim HR manager?</h3>
              <p className="text-gray-600 mb-2">Companies hire interim HR managers when they need immediate, experienced HR leadership for a specific period or project:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-2">
                <li><strong>Covering departures:</strong> Your HR manager has left and you need immediate coverage while recruiting</li>
                <li><strong>Managing restructuring:</strong> You're going through redundancies or reorganisation requiring expert HR guidance</li>
                <li><strong>Handling crises:</strong> Complex employee relations cases, tribunal claims, or grievances need specialist management</li>
                <li><strong>Rapid growth:</strong> You're scaling quickly and need to build HR infrastructure and processes fast</li>
                <li><strong>Project-based work:</strong> Specific initiatives like HRIS implementation, policy overhaul, or culture programmes</li>
                <li><strong>Maternity cover:</strong> Temporary full-time coverage for your permanent HR manager</li>
              </ul>
              <p className="text-gray-600">Interim HR managers bring immediate impact without long-term commitment, making them ideal for defined-period needs or when you need senior expertise before making a permanent hire.</p>
            </div>
          </div>
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
