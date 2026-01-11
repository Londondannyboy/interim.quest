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
  title: 'Interim CMO Recruitment UK | Hire Interim Chief Marketing Officers',
  description: 'Specialist interim CMO recruitment services in the UK. Find and hire interim Chief Marketing Officers for leadership gaps, transformation, rebrand, and crisis situations. Interim CMO recruitment within 48 hours.',
  keywords: 'interim cmo recruitment, interim cmo, hire interim cmo, interim chief marketing officer recruitment, interim marketing director recruitment, interim cmo uk, cmo recruitment agency, interim marketing leadership',
  alternates: {
    canonical: 'https://interim.quest/interim-cmo-recruitment',
  },
  openGraph: {
    title: 'Interim CMO Recruitment UK | Hire Interim Chief Marketing Officers',
    description: 'Specialist interim CMO recruitment services. Find interim CMOs for leadership gaps and transformation projects.',
    images: ['/images/interim-cmo-recruitment.jpg'],
    url: 'https://interim.quest/interim-cmo-recruitment',
  },
}

const CMO_RECRUITMENT_FAQS = [
  {
    question: 'What is interim CMO recruitment?',
    answer: 'Interim CMO recruitment is the specialist process of sourcing and placing temporary Chief Marketing Officers into organisations. Unlike permanent executive search, interim CMO recruitment focuses on finding experienced marketing leaders who are immediately available for 3-12 month assignments. These executives are pre-vetted and can start within days.',
  },
  {
    question: 'How quickly can you recruit an interim CMO?',
    answer: 'Our interim CMO recruitment process typically delivers shortlisted candidates within 48-72 hours. This is significantly faster than permanent CMO recruitment which can take 3-6 months. Interim CMOs are available immediately because they work on temporary assignments by design.',
  },
  {
    question: 'What does interim CMO recruitment cost?',
    answer: 'Interim CMO recruitment fees vary by model. Some agencies charge 15-25% of the total contract value, while others charge fixed fees or success fees. Day rates for interim CMOs range from £1,200-£2,000 per day. For a 6-month engagement, total costs including recruitment fees and day rates typically range from £150,000-£280,000.',
  },
  {
    question: 'When should I use interim CMO recruitment services?',
    answer: 'Use interim CMO recruitment when you need: immediate marketing leadership after a CMO departure, transformation expertise for rebrand or repositioning, crisis management skills, M&A marketing integration, or a bridge while recruiting a permanent CMO. Interim CMO recruitment is faster and more flexible than permanent hiring.',
  },
  {
    question: 'What experience do interim CMOs typically have?',
    answer: 'Interim CMOs recruited through specialist agencies typically have 15-25 years of marketing leadership experience, including multiple CMO or Marketing Director roles. They specialise in high-stakes situations: turnarounds, transformations, rebrands, and crisis management. Many have worked across multiple industries.',
  },
  {
    question: 'How is interim CMO recruitment different from permanent CMO search?',
    answer: 'Interim CMO recruitment focuses on immediately available executives for temporary assignments, with faster timelines (days vs months) and different candidate pools. Permanent CMO search seeks executives for long-term roles who may need to serve notice periods. Interim recruitment also requires different assessment criteria—focusing on rapid impact and transformation experience.',
  },
]

export default function InterimCMORecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <WebPageSchema
        title="Interim CMO Recruitment UK | Hire Interim Chief Marketing Officers"
        description="Specialist interim CMO recruitment services in the UK. Find and hire interim CMOs for leadership gaps, transformation, and crisis situations."
        url="https://interim.quest/interim-cmo-recruitment"
        dateModified={new Date('2025-01-11')}
      />
      <FAQPageSchema faqs={CMO_RECRUITMENT_FAQS} />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-amber-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Marketing Executive Recruitment
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CMO<br />
                <span className="text-amber-400">Recruitment UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Specialist <strong className="text-white">interim CMO recruitment</strong> services.
                Find and hire experienced interim Chief Marketing Officers for leadership gaps, transformation, and crisis situations.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-amber-400">48hrs</div>
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
                <Link href="#contact" className="px-8 py-4 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
                  Start CMO Recruitment
                </Link>
                <Link href="/interim-cmo-services" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Learn About Interim CMOs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Interim CMO Recruitment */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is Interim CMO Recruitment?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Interim CMO recruitment</strong> is the specialist process of identifying, assessing, and placing temporary Chief Marketing Officers into organisations. Unlike permanent executive search, interim CMO recruitment focuses on executives who are immediately available for full-time, temporary assignments lasting 3-12 months.
            </p>
            <p>
              Interim CMO recruitment requires different skills than permanent hiring. Recruiters must maintain networks of pre-vetted marketing executives who are ready to deploy at short notice, understand the specific demands of interim assignments (crisis management, transformation, leadership gaps), and assess candidates for rapid impact rather than long-term cultural fit.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-amber-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "Interim CMO recruitment delivers experienced marketing leadership within days, not months—critical when your business cannot wait for a permanent hire."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Use Specialist Interim CMO Recruitment?</h3>
            <p>
              General recruitment agencies often lack the networks and expertise for interim CMO recruitment. Specialist interim CMO recruiters maintain relationships with senior marketing executives who choose interim careers, understand the specific requirements of temporary leadership roles, and can match candidates to situations—not just job descriptions.
            </p>
            <p>
              The best interim CMO recruitment focuses on track record in similar situations. If you need a CMO for turnaround, you recruit someone who has delivered turnarounds. If you need transformation, you recruit transformation specialists. This situational matching is what differentiates expert interim CMO recruitment.
            </p>
          </div>
        </div>
      </section>

      {/* When to Use Interim CMO Recruitment */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When to Use Interim CMO Recruitment</h2>
            <p className="text-xl text-gray-600 mt-4">Situations where interim CMO recruitment delivers the best outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'CMO Departure',
                description: 'Your CMO has resigned, been terminated, or is on extended leave. Interim CMO recruitment fills the gap immediately while you conduct a proper permanent search.',
                timing: 'Immediate',
                icon: '👔',
              },
              {
                title: 'Rebrand or Repositioning',
                description: 'Major brand transformation requires specialist expertise. Interim CMO recruitment finds executives who have led successful rebrands before.',
                timing: '6-12 months',
                icon: '✨',
              },
              {
                title: 'Go-to-Market Transformation',
                description: 'Pivoting your GTM strategy, entering new markets, or launching new products. Interim CMO recruitment provides experienced launch leadership.',
                timing: '6-9 months',
                icon: '🚀',
              },
              {
                title: 'Marketing Crisis',
                description: 'Reputational crisis, failed campaigns, or competitive threat. Interim CMO recruitment finds crisis management specialists.',
                timing: 'ASAP',
                icon: '🚨',
              },
              {
                title: 'M&A Marketing Integration',
                description: 'Post-merger integration of marketing teams, brands, and strategies. Interim CMO recruitment finds integration specialists.',
                timing: '4-8 months',
                icon: '🤝',
              },
              {
                title: 'Pre-Permanent Hire Bridge',
                description: 'You know you need a permanent CMO but the search will take months. Interim CMO recruitment bridges the gap without compromising on leadership quality.',
                timing: '3-6 months',
                icon: '🌉',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-amber-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="inline-block text-xs font-bold text-amber-600 uppercase tracking-wider">Typical: {item.timing}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Interim CMO Recruitment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Interim CMO Recruitment Process</h2>
            <p className="text-gray-600 mt-4">From brief to shortlist in 48 hours</p>
          </div>
          <HireProcessStepper accentColor="amber" />
          <div className="mt-12 prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900">What We Assess in Interim CMO Recruitment</h3>
            <ul className="text-gray-600">
              <li><strong>Situational Experience:</strong> Has this interim CMO successfully handled your exact situation before (turnaround, rebrand, transformation)?</li>
              <li><strong>Rapid Impact Capability:</strong> Can they step into a leadership vacuum and take control from day one without extensive onboarding?</li>
              <li><strong>Industry Relevance:</strong> Do they understand your market, competitive landscape, and customer dynamics?</li>
              <li><strong>Leadership Style:</strong> Will they command respect quickly and integrate with your executive team?</li>
              <li><strong>Exit Planning:</strong> Have they successfully transitioned out and set up permanent successors for success?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interim CMO Recruitment Costs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Investment</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CMO Recruitment Costs</h2>
            <p className="text-gray-600 mt-4">Transparent pricing for interim CMO recruitment services</p>
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
              <h3 className="font-bold text-lg text-gray-900 mb-4">Interim CMO Day Rates</h3>
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
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Total Investment Example</h3>
            <p className="text-gray-700">
              A typical 6-month interim CMO engagement with recruitment fees: £144,000-£240,000 (day rates) + £20,000-£35,000 (recruitment) = <strong>£164,000-£275,000 total</strong>. This compares favourably to the cost of a bad permanent CMO hire, which can exceed £500,000 when including salary, bonus, benefits, and termination costs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Sectors</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CMO Recruitment by Sector</h2>
            <p className="text-gray-600 mt-4">We recruit interim CMOs across all industries</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'B2B SaaS', description: 'PLG transformation, demand generation rebuild, enterprise GTM', link: '/interim-jobs-saas' },
              { name: 'E-commerce & DTC', description: 'Brand repositioning, marketplace crisis, omnichannel transformation', link: '/interim-jobs-ecommerce' },
              { name: 'FinTech', description: 'Regulatory marketing, market expansion, challenger brand building', link: '/interim-jobs-finance' },
              { name: 'HealthTech', description: 'Clinical marketing, patient acquisition, HCP engagement', link: '/interim-jobs-healthcare' },
              { name: 'Professional Services', description: 'Firm rebrand, partner marketing, thought leadership', link: '/interim-jobs-professional-services' },
              { name: 'PE Portfolio', description: 'Pre-exit brand overhaul, portfolio company turnaround', link: '/interim-jobs-startups' },
            ].map((industry, index) => (
              <Link key={index} href={industry.link} className="block bg-gray-50 p-6 border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Interim CMO Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Available Roles</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Current Interim CMO Opportunities</h2>
            <p className="text-xl text-gray-600 mt-4">Browse interim marketing leadership roles we're currently recruiting for</p>
          </div>
          <EmbeddedJobBoard
            defaultDepartment="Marketing"
            title=""
            jobsPerPage={6}
            showAllJobsLink={true}
            allJobsLinkText="View All Marketing Jobs"
          />
        </div>
      </section>

      {/* CMO Day Rate Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Calculator</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CMO Cost Calculator</h2>
            <p className="text-xl text-gray-600 mt-4">Estimate your interim CMO engagement costs</p>
          </div>
          <RoleCalculator role="cmo" />
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Get Interim CMO Job Alerts</h3>
              <p className="text-gray-600">Be the first to know about new interim CMO opportunities. We'll send you relevant marketing leadership roles as they become available.</p>
            </div>
            <EmailCapture
              variant="inline"
              title="Subscribe to CMO Alerts"
              description="New interim CMO roles delivered to your inbox."
              buttonText="Get Alerts"
              accentColor="amber"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CMO Recruitment FAQs</h2>
          </div>
          <div className="space-y-6">
            {CMO_RECRUITMENT_FAQS.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl p-6 cursor-pointer border border-gray-200">
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
            Start Your Interim CMO<br /><span className="text-amber-400">Recruitment Today</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your situation and we'll provide a shortlist of pre-vetted interim CMOs within 48 hours. Interim CMO recruitment that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors">
              Start CMO Recruitment
            </Link>
            <Link href="/interim-cmo-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm a CMO Seeking Interim Roles
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
              <Link href="/interim-cmo-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CMO Services</Link>
              <Link href="/interim-cmo-jobs-uk" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CMO Jobs UK</Link>
              <Link href="/interim-cmo-salary" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CMO Salary</Link>
              <Link href="/interim-cfo-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CFO Services</Link>
              <Link href="/interim-cto-services" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Interim CTO Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
