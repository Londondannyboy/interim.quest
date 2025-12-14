import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const CIO_SERVICE_FAQS = [
  {
    question: 'What is an Interim CIO?',
    answer: 'An Interim CIO is a seasoned IT executive who steps into your organisation full-time on a temporary basis—typically 3-12 months. They provide immediate senior IT leadership to fill a vacancy, lead a critical transformation, or stabilise IT operations during crisis or change.',
  },
  {
    question: 'How is a CIO different from a CTO?',
    answer: 'A CTO focuses on product technology—the technology in your product that customers use. A CIO focuses on enterprise technology—the internal systems, infrastructure, and IT operations that run your business. Some companies need both; others need one or the other depending on their model.',
  },
  {
    question: 'When should we hire an Interim CIO?',
    answer: 'Hire an interim CIO when you need immediate senior IT leadership: CIO vacancy or departure, major system migration or transformation, IT crisis or cyber incident, M&A IT integration, cloud transformation, or regulatory compliance programme. They provide experienced leadership when you can\'t wait months to recruit.',
  },
  {
    question: 'How much does an Interim CIO cost?',
    answer: 'Interim CIOs typically charge £1,200-£2,000 per day in the UK. For a 3-month engagement (65 days), expect £78,000-£130,000. For a 6-month engagement (130 days), expect £156,000-£260,000. No benefits, pension, or notice period costs.',
  },
  {
    question: 'What does an Interim CIO do?',
    answer: 'An interim CIO provides full-time IT leadership: develops IT strategy, leads digital transformation, manages enterprise systems and infrastructure, oversees IT teams, controls budgets, manages vendors, ensures security and compliance, and delivers critical projects. They hit the ground running and deliver results within their tenure.',
  },
  {
    question: 'How long does an interim CIO engagement last?',
    answer: 'Typical engagements run 3-12 months depending on the challenge. Leadership gap fills may be 3-6 months while you recruit. Transformations typically need 6-12 months to plan, execute, and stabilise. Crisis stabilisation can be as short as 3 months. Engagements are flexible and can be extended if needed.',
  },
]

export const metadata: Metadata = {
  title: 'Interim CIO Services UK | Hire a Temporary CIO',
  description: 'Hire an interim CIO for full-time temporary IT leadership. Expert CIOs for leadership gaps, IT transformation, system migrations, and crisis response. £1,200-£2,000/day. Start within days.',
  keywords: 'interim cio, interim cio services, hire interim cio, temporary cio, interim chief information officer, interim cio uk, interim it director',
  alternates: {
    canonical: 'https://interim.quest/interim-cio-services',
  },
  openGraph: {
    title: 'Interim CIO Services UK | Hire a Temporary CIO',
    description: 'Hire an interim CIO for full-time temporary IT leadership. Expert CIOs for transformations, leadership gaps, and crisis response.',
    images: ['/images/interim-cio-services.jpg'],
    url: 'https://interim.quest/interim-cio-services',
  },
}

export default function InterimCIOServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-indigo-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                IT Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CIO<br />
                <span className="text-indigo-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CIO</strong> for full-time temporary IT leadership.
                Expert CIOs for leadership gaps, IT transformation, system migrations, and crisis response.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-indigo-400">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1.2-2k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">15+ Yrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Experience</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">
                  Hire an Interim CIO
                </Link>
                <Link href="#when-to-hire" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Interim CIO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CIO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CIO</strong> (Chief Information Officer) is a seasoned IT executive who steps into your organisation full-time on a temporary basis—typically 3-12 months. They provide immediate senior IT leadership to fill a vacancy, lead a critical transformation, or stabilise IT operations during crisis or change.
            </p>
            <p>
              Unlike consultants who advise from the sidelines, an interim CIO takes full executive accountability. They lead your IT team, manage budgets, make critical decisions, and deliver results. Unlike permanent hires that take months to recruit, an interim CIO can start within days.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-indigo-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "An interim CIO provides executive-level IT leadership exactly when you need it—without the 6-month recruitment cycle."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Interim vs Fractional vs Permanent</h3>
            <p>
              An <strong>interim CIO</strong> works full-time for 3-12 months during a specific challenge or transition. A <strong>fractional CIO</strong> works part-time (1-3 days/week) on an ongoing basis. A <strong>permanent CIO</strong> is a full-time employee with no defined end date.
            </p>
            <p>
              Choose interim for leadership gaps, transformations, or crises. Choose fractional for ongoing strategic guidance. Choose permanent when you need full-time leadership indefinitely.
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">CIO vs CTO: Understanding the Difference</h3>
            <p>
              A <strong>CTO</strong> focuses on product technology—the technology that your customers interact with. A <strong>CIO</strong> focuses on enterprise technology—the internal systems, infrastructure, and IT operations that run your business. SaaS companies typically need a CTO for their product and may also need a CIO as they scale. Traditional businesses often need a CIO but not a CTO.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section id="responsibilities" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CIO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Full executive accountability across all IT functions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'IT Leadership',
                description: 'Lead IT teams and set direction. Make critical decisions, manage performance, and drive a culture of delivery and excellence.',
                icon: '🎯',
              },
              {
                title: 'Transformation Delivery',
                description: 'Lead major IT transformations from planning through execution. Deliver cloud migrations, system implementations, and digital initiatives on time and budget.',
                icon: '🔄',
              },
              {
                title: 'Enterprise Systems',
                description: 'Oversee ERP, CRM, HRIS, and business applications. Select systems, manage implementations, and ensure they deliver business value.',
                icon: '🏢',
              },
              {
                title: 'IT Infrastructure',
                description: 'Manage IT infrastructure—cloud, networks, data centres, and end-user computing. Ensure reliability, performance, and scalability.',
                icon: '☁️',
              },
              {
                title: 'Security & Compliance',
                description: 'Ensure IT security and regulatory compliance. Manage cyber risk, implement controls, and respond to security incidents.',
                icon: '🔒',
              },
              {
                title: 'Vendor Management',
                description: 'Manage technology vendors and contracts. Negotiate deals, oversee SLAs, and ensure vendor accountability and value.',
                icon: '🤝',
              },
              {
                title: 'Budget Control',
                description: 'Own the IT budget. Control spending, demonstrate ROI, and ensure technology investments align with business priorities.',
                icon: '💰',
              },
              {
                title: 'Stakeholder Management',
                description: 'Report to the board and CEO. Communicate IT performance, manage expectations, and align IT with business strategy.',
                icon: '📊',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-indigo-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section id="when-to-hire" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Hire an Interim CIO</h2>
            <p className="text-xl text-gray-600 mt-4">Common scenarios where interim CIO leadership delivers immediate value</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CIO Vacancy or Departure',
                description: 'Your CIO has left or is leaving. You need immediate IT leadership while you search for a permanent replacement. An interim CIO fills the gap and keeps IT running.',
                timing: '3-6 months typically',
              },
              {
                scenario: 'Major System Migration',
                description: 'Migrating to a new ERP, moving to cloud, or replacing core systems. Need an experienced CIO to plan, execute, and deliver the programme successfully.',
                timing: '6-12 months typically',
              },
              {
                scenario: 'IT Transformation',
                description: 'Modernising legacy IT, restructuring IT operations, or implementing new IT operating models. Requires senior leadership to drive change and deliver results.',
                timing: '6-12 months typically',
              },
              {
                scenario: 'IT Crisis or Turnaround',
                description: 'IT performance is poor, costs are spiralling, or systems are failing. Need immediate senior leadership to stabilise operations and restore performance.',
                timing: '3-6 months typically',
              },
              {
                scenario: 'Cyber Incident Response',
                description: 'Major security breach or cyber incident. Need a crisis leader to manage response, remediation, and recovery while strengthening security posture.',
                timing: '3-6 months typically',
              },
              {
                scenario: 'M&A IT Integration',
                description: 'Acquiring or merging with another company. Need IT leadership to assess systems, plan integration, and execute the technology merger successfully.',
                timing: '6-12 months typically',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-wider">{item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CIO Day Rates & Costs</h2>
            <p className="text-xl text-gray-600 mt-4">Transparent pricing for interim CIO services</p>
          </div>
          <div className="bg-white p-8 border border-gray-200 mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Day Rate</div>
                <div className="text-3xl font-black text-gray-900">£1,200-£2,000</div>
                <div className="text-sm text-gray-600 mt-1">per day</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Typical Duration</div>
                <div className="text-3xl font-black text-gray-900">3-12</div>
                <div className="text-sm text-gray-600 mt-1">months</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Start Time</div>
                <div className="text-3xl font-black text-gray-900">1-2</div>
                <div className="text-sm text-gray-600 mt-1">weeks</div>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-bold text-gray-900 mb-4">Example Engagement Costs</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">3-month leadership gap (65 days)</span>
                  <span className="font-bold text-gray-900">£78,000 - £130,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">6-month transformation (130 days)</span>
                  <span className="font-bold text-gray-900">£156,000 - £260,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">12-month major programme (260 days)</span>
                  <span className="font-bold text-gray-900">£312,000 - £520,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-indigo-50 p-6 border border-indigo-200">
            <h4 className="font-bold text-gray-900 mb-2">What&apos;s Included</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Full-time executive leadership (5 days/week)</li>
              <li>• Immediate start (typically 1-2 weeks)</li>
              <li>• No recruitment fees or lengthy hiring process</li>
              <li>• No benefits, pension, or equity costs</li>
              <li>• No notice period or redundancy costs</li>
              <li>• Flexible engagement length</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Permanent CIO</h2>
          </div>
          <ServiceComparisonTable role="CIO" accentColor="purple" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CIO</h2>
          </div>
          <HireProcessStepper accentColor="purple" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CIO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire an<br /><span className="text-indigo-400">Interim CIO?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your IT leadership needs and we&apos;ll match you with experienced interim CIOs who can start within days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-indigo-500 text-white font-bold uppercase tracking-wider hover:bg-indigo-400 transition-colors">
              Find an Interim CIO
            </Link>
            <Link href="/interim-cio-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I&apos;m a CIO Looking for Roles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Services</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/interim-ciso-services" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim CISO</Link>
              <Link href="/interim-cdo-services" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Interim CDO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
