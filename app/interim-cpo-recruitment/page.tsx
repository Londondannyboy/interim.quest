import { Metadata } from 'next'
import Link from 'next/link'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { EmailCapture } from '@/components/EmailCapture'
import { RoleCalculator } from '@/components/RoleCalculator'
import { WebPageSchema } from '@/components/seo/WebPageSchema'
import { FAQPageSchema } from '@/components/seo/FAQPageSchema'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CPO Recruitment UK | Hire Interim Chief Product Officers',
  description: 'Specialist interim CPO recruitment services in the UK. Find and hire interim Chief Product Officers for leadership gaps, product transformation, digital pivot, and crisis situations. Interim CPO recruitment within 48 hours.',
  keywords: 'interim cpo recruitment, interim cpo, hire interim cpo, interim chief product officer recruitment, interim product director recruitment, interim cpo uk, cpo recruitment agency, interim product leadership',
  alternates: {
    canonical: 'https://interim.quest/interim-cpo-recruitment',
  },
  openGraph: {
    title: 'Interim CPO Recruitment UK | Hire Interim Chief Product Officers',
    description: 'Specialist interim CPO recruitment services. Find interim CPOs for leadership gaps and product transformation.',
    images: ['/images/interim-cpo-recruitment.jpg'],
    url: 'https://interim.quest/interim-cpo-recruitment',
  },
}

const CPO_RECRUITMENT_FAQS = [
  {
    question: 'What is interim CPO recruitment?',
    answer: 'Interim CPO recruitment is the specialist process of sourcing and placing temporary Chief Product Officers into organisations. Unlike permanent executive search, interim CPO recruitment focuses on finding experienced product leaders who are immediately available for 3-12 month assignments to lead product transformation, fill leadership gaps, or drive digital pivots.',
  },
  {
    question: 'How quickly can you recruit an interim CPO?',
    answer: 'Our interim CPO recruitment process typically delivers shortlisted candidates within 48-72 hours. This is significantly faster than permanent CPO recruitment which can take 3-6 months. Interim CPOs are available immediately because they work on temporary assignments by design.',
  },
  {
    question: 'What does interim CPO recruitment cost?',
    answer: 'Interim CPO recruitment fees vary by model. Day rates for interim CPOs range from £1,200-£2,000 per day. For a 6-month engagement, total costs including recruitment fees typically range from £150,000-£280,000. This compares favourably to a failed permanent hire.',
  },
  {
    question: 'When should I use interim CPO recruitment services?',
    answer: 'Use interim CPO recruitment when you need: immediate product leadership after a CPO departure, transformation expertise for digital pivot, product organisation restructuring, M&A product integration, or a bridge while recruiting a permanent CPO.',
  },
  {
    question: 'What experience do interim CPOs typically have?',
    answer: 'Interim CPOs recruited through specialist agencies typically have 15-25 years of product leadership experience, including multiple CPO or VP Product roles. They specialise in high-stakes situations: product transformations, digital pivots, team restructuring, and crisis management.',
  },
]

export default function InterimCPORecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <WebPageSchema
        title="Interim CPO Recruitment UK | Hire Interim Chief Product Officers"
        description="Specialist interim CPO recruitment services in the UK. Find and hire interim CPOs for leadership gaps, transformation, and crisis situations."
        url="https://interim.quest/interim-cpo-recruitment"
        dateModified={new Date('2025-01-11')}
      />
      <FAQPageSchema faqs={CPO_RECRUITMENT_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-purple-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Product Executive Recruitment
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CPO<br />
                <span className="text-purple-400">Recruitment UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Specialist <strong className="text-white">interim CPO recruitment</strong> services.
                Find and hire experienced interim Chief Product Officers for leadership gaps, product transformation, and digital pivot.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-purple-400">48hrs</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">To Shortlist</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">3-12m</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Engagements</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Pre-Vetted</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Candidates</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">
                  Start CPO Recruitment
                </Link>
                <Link href="/interim-cpo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Learn About Interim CPOs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Interim CPO Recruitment */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is Interim CPO Recruitment?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Interim CPO recruitment</strong> is the specialist process of identifying, assessing, and placing temporary Chief Product Officers into organisations. Unlike permanent executive search, interim CPO recruitment focuses on executives who are immediately available for full-time, temporary assignments lasting 3-12 months.
            </p>
            <p>
              Interim CPO recruitment is critical for companies undergoing product transformation, digital pivots, or facing sudden CPO departures. These situations require experienced product leadership that cannot wait for a 3-6 month permanent recruitment process.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-purple-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CPO recruitment delivers experienced product leadership within days—essential when your product roadmap, team, or digital transformation cannot wait."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Use Specialist Interim CPO Recruitment?</h3>
            <p>
              General recruitment agencies often lack the networks for interim CPO recruitment. Specialist recruiters maintain relationships with senior product executives who choose interim careers and understand the specific requirements of temporary product leadership roles.
            </p>
            <p>
              The best interim CPO recruitment matches candidates to situations. If you need a CPO for digital transformation, you recruit someone who has led digital transformations. If you need product organisation restructuring, you recruit restructuring specialists.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use Interim CPO Recruitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Use Interim CPO Recruitment</h2>
            <p className="text-xl text-gray-600 mt-4">Situations where interim CPO recruitment delivers the best outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'CPO Departure',
                description: 'Your CPO has resigned or been terminated. Interim CPO recruitment fills the gap immediately while you conduct a proper permanent search.',
                timing: 'Immediate',
                icon: '👔',
              },
              {
                title: 'Product Transformation',
                description: 'Major product strategy shift or platform rebuild requires specialist expertise. Interim CPO recruitment finds executives who have led similar transformations.',
                timing: '6-12 months',
                icon: '🔄',
              },
              {
                title: 'Digital Pivot',
                description: 'Transitioning from traditional to digital products. Interim CPO recruitment provides modern product leadership and methodology expertise.',
                timing: '6-9 months',
                icon: '💻',
              },
              {
                title: 'Team Restructuring',
                description: 'Product organisation needs significant restructuring. Interim CPO recruitment finds executives who can make tough decisions objectively.',
                timing: '3-6 months',
                icon: '👥',
              },
              {
                title: 'M&A Product Integration',
                description: 'Post-merger integration of product teams and roadmaps. Interim CPO recruitment finds integration specialists.',
                timing: '4-8 months',
                icon: '🤝',
              },
              {
                title: 'Crisis Recovery',
                description: 'Product function in crisis—failed launches, team dysfunction. Interim CPO recruitment finds experienced crisis leaders.',
                timing: '3-6 months',
                icon: '🚨',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-purple-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-purple-600 uppercase tracking-wider">Typical: {item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Interim CPO Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Interim CPO Recruitment Process</h2>
            <p className="text-gray-600 mt-4">From brief to shortlist in 48 hours</p>
          </div>
          <HireProcessStepper accentColor="purple" />
          <div className="mt-12 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">What We Assess in Interim CPO Recruitment</h3>
            <ul className="text-gray-600">
              <li><strong>Transformation Experience:</strong> Has this interim CPO successfully handled your exact situation before (digital pivot, restructuring, platform migration)?</li>
              <li><strong>Rapid Impact Capability:</strong> Can they step into a leadership vacuum and take control of product strategy from day one?</li>
              <li><strong>Technical Credibility:</strong> Do they have the technical depth to earn respect from engineering teams?</li>
              <li><strong>Stakeholder Management:</strong> Will they manage board, investors, and cross-functional leaders effectively?</li>
              <li><strong>Methodology Expertise:</strong> Are they skilled in modern product practices (agile, lean, product-led growth)?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interim CPO Recruitment Costs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Investment</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CPO Recruitment Costs</h2>
            <p className="text-gray-600 mt-4">Transparent pricing for interim CPO recruitment services</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Recruitment Fees</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Percentage of contract</span>
                  <span className="font-semibold">15-25%</span>
                </li>
                <li className="flex justify-between">
                  <span>Fixed fee model</span>
                  <span className="font-semibold">£15k-£30k</span>
                </li>
                <li className="flex justify-between">
                  <span>Retained search</span>
                  <span className="font-semibold">£20k-£40k</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Interim CPO Day Rates</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Standard</span>
                  <span className="font-semibold">£1,200-£1,500/day</span>
                </li>
                <li className="flex justify-between">
                  <span>Senior/Specialist</span>
                  <span className="font-semibold">£1,500-£2,000/day</span>
                </li>
                <li className="flex justify-between">
                  <span>6-month total</span>
                  <span className="font-semibold">£144k-£240k</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Total Investment Example</h3>
            <p className="text-gray-700">
              A typical 6-month interim CPO engagement: £144,000-£240,000 (day rates) + £20,000-£35,000 (recruitment) = <strong>£164,000-£275,000 total</strong>. This investment delivers immediate product leadership without the risk of a bad permanent hire.
            </p>
          </div>
        </div>
      </section>

      {/* Current Interim CPO Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Available Roles</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Current Interim CPO Opportunities</h2>
            <p className="text-xl text-gray-600 mt-4">Browse interim product leadership roles we're currently recruiting for</p>
          </div>
          <EmbeddedJobBoard
            defaultDepartment="Product"
            title=""
            jobsPerPage={6}
            showAllJobsLink={true}
            allJobsLinkText="View All Product Jobs"
          />
        </div>
      </section>

      {/* CPO Day Rate Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CPO Cost Calculator</h2>
            <p className="text-xl text-gray-600 mt-4">Estimate your interim CPO engagement costs</p>
          </div>
          <RoleCalculator role="cpo" />
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Get Interim CPO Job Alerts</h3>
              <p className="text-gray-600">Be the first to know about new interim CPO opportunities. We'll send you relevant product leadership roles as they become available.</p>
            </div>
            <EmailCapture
              variant="inline"
              title="Subscribe to CPO Alerts"
              description="New interim CPO roles delivered to your inbox."
              buttonText="Get Alerts"
              accentColor="purple"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CPO Recruitment FAQs</h2>
          </div>
          <div className="space-y-6">
            {CPO_RECRUITMENT_FAQS.map((faq, index) => (
              <details key={index} className="group bg-gray-50 rounded-xl p-6 cursor-pointer border border-gray-200">
                <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                  {faq.question}
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Start Your Interim CPO<br /><span className="text-purple-400">Recruitment Today</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your product leadership needs and we'll provide a shortlist of pre-vetted interim CPOs within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-purple-500 text-white font-bold uppercase tracking-wider hover:bg-purple-400 transition-colors">
              Start CPO Recruitment
            </Link>
            <Link href="/interim-cpo-services" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              Learn About Interim CPO Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related Pages</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/interim-cpo-services" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Interim CPO Services</Link>
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Interim CTO Services</Link>
              <Link href="/interim-cmo-recruitment" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Interim CMO Recruitment</Link>
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Interim COO Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
