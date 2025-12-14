import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const CDO_SERVICE_FAQS = [
  {
    question: 'What is an Interim CDO?',
    answer: 'An Interim CDO (Chief Data Officer) is a senior data executive who joins your organisation full-time for 3-12 months to provide temporary leadership during critical periods. They fill CDO vacancies, lead data transformations, implement data strategies, or remediate GDPR compliance issues—delivering immediate impact without long-term commitment.',
  },
  {
    question: 'When should I hire an Interim CDO?',
    answer: 'Hire an Interim CDO when you have a leadership gap (CDO departure or maternity leave), need to lead a data transformation or platform build, require GDPR/compliance remediation, are implementing AI/ML strategy, or need to establish data governance frameworks. They excel at time-bound, high-impact initiatives.',
  },
  {
    question: 'How much does an Interim CDO cost?',
    answer: 'Interim CDOs typically charge £1,200-£2,000 per day in the UK, working full-time (5 days per week). For a 6-month engagement, expect £144,000-£240,000 total. While more expensive than part-time, you get full executive attention during critical transformation periods with no long-term commitment.',
  },
  {
    question: 'What\'s the typical engagement length for an Interim CDO?',
    answer: 'Most Interim CDO engagements run 3-12 months. Short engagements (3-6 months) suit crisis management or specific deliverables like GDPR remediation. Longer engagements (6-12 months) accommodate data transformations, platform builds, or strategy implementation that requires sustained leadership.',
  },
  {
    question: 'How is an Interim CDO different from a fractional CDO?',
    answer: 'An Interim CDO works full-time for 3-12 months during transformations, crises, or leadership gaps—they\'re your temporary CDO. A fractional CDO works part-time (1-3 days/week) ongoing for cost-effective long-term leadership. Interim is for urgent, time-bound situations; fractional is for sustained strategic guidance.',
  },
  {
    question: 'Can an Interim CDO help with GDPR compliance?',
    answer: 'Yes—GDPR remediation is a common Interim CDO use case. They can audit current compliance, implement data governance frameworks, establish privacy controls, create data retention policies, and prepare for regulatory audits. Their temporary engagement provides focused expertise without permanent overhead.',
  },
]

export const metadata: Metadata = {
  title: 'Interim CDO Services UK | Hire a Temporary CDO',
  description: 'Hire an Interim CDO for 3-12 months. Full-time temporary data leadership for transformations, GDPR compliance, platform builds, and leadership gaps. £1,200-£2,000/day. Start within days.',
  keywords: 'interim cdo, interim cdo services, hire interim cdo, temporary cdo, interim chief data officer, interim cdo uk, interim data director, cdo maternity cover',
  alternates: {
    canonical: 'https://interim.quest/interim-cdo-services',
  },
  openGraph: {
    title: 'Interim CDO Services UK | Hire a Temporary CDO',
    description: 'Full-time Interim CDO for 3-12 months. Data transformations, GDPR compliance, and leadership gaps.',
    images: ['/images/interim-cdo-services.jpg'],
    url: 'https://interim.quest/interim-cdo-services',
  },
}

export default function InterimCDOServicesPage() {
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
              <span className="inline-block bg-cyan-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Data Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CDO<br />
                <span className="text-cyan-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CDO</strong> for full-time temporary data leadership.
                Fill leadership gaps, drive transformations, and deliver critical data initiatives in 3-12 months.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-cyan-400">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Commitment</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1.2-2k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Day</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors">
                  Hire an Interim CDO
                </Link>
                <Link href="#responsibilities" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Interim CDO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CDO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CDO</strong> (Chief Data Officer) is a senior data executive who joins your organisation full-time for 3-12 months to provide temporary leadership during critical periods. They fill CDO vacancies, lead data transformations, implement data platforms, or remediate compliance issues—delivering immediate impact without permanent commitment.
            </p>
            <p>
              Unlike fractional CDOs who work part-time, Interim CDOs are fully embedded in your organisation. They run daily operations, lead teams, drive urgent initiatives, and deliver measurable outcomes within defined timeframes. You get complete executive-level data leadership when you need it most.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-cyan-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CDOs excel at the impossible: delivering transformation-level impact in months, not years."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">When You Need Full-Time Leadership, Not Part-Time Advice</h3>
            <p>
              Some situations demand full-time executive attention. Your CDO has left suddenly. You are facing a GDPR audit in 6 months. Your data transformation cannot wait. Your board demands AI strategy now.
            </p>
            <p>
              An Interim CDO provides hands-on leadership during these critical windows. They do not just advise—they execute. They run teams, make decisions, drive delivery, and solve crises. When the engagement ends, your organisation has measurable results and sustainable systems in place.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section id="responsibilities" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CDO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Core deliverables your Interim CDO will execute during their engagement</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Leadership Gap Coverage',
                description: 'Step into vacant CDO role immediately. Run daily operations, lead teams, maintain momentum during transitions, maternity cover, or recruitment delays.',
                icon: '👤',
              },
              {
                title: 'Data Platform Implementation',
                description: 'Build and deploy data platforms—data warehouses, lakes, pipelines, and analytics infrastructure. Deliver production-ready systems in 6-12 months.',
                icon: '🏗️',
              },
              {
                title: 'GDPR & Compliance Remediation',
                description: 'Audit current compliance, implement governance frameworks, establish data privacy controls, and prepare for regulatory audits within tight deadlines.',
                icon: '🔒',
              },
              {
                title: 'Data Transformation',
                description: 'Lead organisation-wide data transformations. Modernise legacy systems, migrate to cloud, consolidate data sources, and establish new operating models.',
                icon: '⚡',
              },
              {
                title: 'AI/ML Strategy & Implementation',
                description: 'Assess AI readiness, build data foundations for ML, implement first AI use cases, and establish MLOps practices. Deliver working AI capability.',
                icon: '🤖',
              },
              {
                title: 'Crisis Management',
                description: 'Resolve data quality crises, fix broken analytics, recover from data breaches, or stabilise failing data initiatives. Deliver urgent remediation.',
                icon: '🚨',
              },
              {
                title: 'Data Governance Implementation',
                description: 'Design and deploy governance frameworks—data quality standards, master data management, metadata catalogues, and data ownership models.',
                icon: '📋',
              },
              {
                title: 'Team Building & Restructure',
                description: 'Restructure data teams, hire critical roles, define new operating models, establish career frameworks, and build sustainable data organisations.',
                icon: '👥',
              },
              {
                title: 'Business Case & Strategy',
                description: 'Develop data monetisation strategies, create business cases for data investment, and design data products that generate revenue.',
                icon: '💼',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire an Interim CDO?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CDO Vacancy or Departure',
                description: "Your CDO has left suddenly, is on extended leave, or you are recruiting for a permanent hire. Need immediate leadership to maintain momentum and prevent data initiatives stalling.",
                timing: '3-12 months',
              },
              {
                scenario: 'Data Transformation Programme',
                description: "Leading a major data transformation—cloud migration, platform modernisation, or operating model change. Need dedicated executive leadership to drive delivery.",
                timing: '6-12 months',
              },
              {
                scenario: 'GDPR & Compliance Remediation',
                description: "Facing regulatory audit, GDPR non-compliance, or industry-specific data requirements. Need urgent expertise to implement governance and pass audits.",
                timing: '3-6 months',
              },
              {
                scenario: 'Data Platform Build',
                description: "Building new data infrastructure—data warehouse, data lake, analytics platform, or ML infrastructure. Need hands-on leadership from design through implementation.",
                timing: '6-12 months',
              },
              {
                scenario: 'AI/ML Strategy Implementation',
                description: "Board demands AI capability but your data foundations are not ready. Need to assess readiness, build infrastructure, and deliver first AI use cases.",
                timing: '6-9 months',
              },
              {
                scenario: 'Data Quality Crisis',
                description: "Critical data quality issues affecting business operations, reporting failures, or loss of trust in data. Need immediate intervention to diagnose and remediate.",
                timing: '3-6 months',
              },
              {
                scenario: 'M&A Data Integration',
                description: "Acquired a company and need to integrate data systems, consolidate analytics, establish unified governance, and migrate to common platforms.",
                timing: '6-12 months',
              },
              {
                scenario: 'Team Restructure & Capability Build',
                description: "Data team is underperforming, lacks structure, or needs new capabilities. Require leadership to restructure, hire key roles, and establish new operating model.",
                timing: '6-9 months',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-cyan-600 uppercase tracking-wider">Typical Duration: {item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Full-Time CDO</h2>
          </div>
          <ServiceComparisonTable role="CDO" accentColor="blue" />
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CDO</h2>
          </div>
          <HireProcessStepper accentColor="blue" />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CDO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Ready to Hire an<br /><span className="text-cyan-400">Interim CDO?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your data transformation, leadership gap, or compliance challenge. We'll match you with pre-vetted Interim CDOs who can start within days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-cyan-500 text-black font-bold uppercase tracking-wider hover:bg-cyan-400 transition-colors">
              Find an Interim CDO
            </Link>
            <Link href="/interim-cdo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CDO Looking for Roles
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
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">Interim CTO</Link>
              <Link href="/interim-cio-services" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">Interim CIO</Link>
              <Link href="/interim-ciso-services" className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">Interim CISO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
