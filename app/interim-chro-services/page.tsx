import { Metadata } from 'next'
import Link from 'next/link'
import { FAQ } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { RoleCalculator } from '@/components/RoleCalculator'
import { HireProcessStepper } from '@/components/HireProcessStepper'
import { ServiceComparisonTable } from '@/components/ServiceComparisonTable'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const CHRO_SERVICE_FAQS = [
  {
    question: 'What is an Interim CHRO?',
    answer: 'An Interim CHRO is a full-time, temporary HR executive who steps into your organisation for 3-12 months to provide leadership during critical periods—covering a vacancy, leading a restructure, managing culture transformation, or navigating complex people issues like M&A integration or employment tribunals.',
  },
  {
    question: 'When should I hire an Interim CHRO?',
    answer: 'Hire an interim CHRO when you have a leadership gap (CHRO resignation or leave), organisational change (restructuring, redundancy programmes), culture transformation, M&A people integration, employment tribunal preparation, or rapid scaling that requires immediate senior HR leadership.',
  },
  {
    question: 'How much does an Interim CHRO cost?',
    answer: 'Interim CHROs charge £1,000-£1,800 per day in the UK, typically on full-time contracts of 3-12 months. This translates to £60,000-£108,000 for a 3-month engagement or £220,000-£396,000 annually—comparable to permanent CHRO salaries but with no long-term commitment.',
  },
  {
    question: 'What\'s the difference between an Interim CHRO and a Fractional CHRO?',
    answer: 'An Interim CHRO works full-time for 3-12 months to address specific challenges or cover leadership gaps. A Fractional CHRO works part-time (1-3 days per week) on an ongoing basis. Interims are for temporary, urgent needs; fractionals are for permanent part-time leadership.',
  },
  {
    question: 'How long does an interim CHRO engagement last?',
    answer: 'Typical engagements last 3-12 months. Crisis situations or CHRO coverage might be 3-6 months, while transformation projects (restructuring, M&A integration, culture change) often run 6-12 months. The duration depends on the specific challenge.',
  },
  {
    question: 'Can an Interim CHRO lead redundancy programmes?',
    answer: 'Yes—redundancy and restructuring are core interim CHRO situations. They bring expertise in employment law, consultation processes, employee relations, and managing organisational change while protecting your culture and employer brand.',
  },
]

export const metadata: Metadata = {
  title: 'Interim CHRO Services UK | Hire a Temporary CHRO',
  description: 'Hire an Interim CHRO for full-time temporary HR leadership. Expert CHROs for restructuring, culture transformation, M&A integration, and leadership gaps. 3-12 month engagements. £1,000-£1,800/day.',
  keywords: 'interim chro, temporary chro, interim hr director, hire interim chro, interim chief hr officer, interim chro uk, interim people director, temporary hr director',
  alternates: {
    canonical: 'https://interim.quest/interim-chro-services',
  },
  openGraph: {
    title: 'Interim CHRO Services UK | Hire a Temporary CHRO',
    description: 'Full-time temporary HR leadership for restructuring, transformation, and leadership gaps. £1,000-£1,800/day.',
    images: ['/images/interim-chro-services.jpg'],
    url: 'https://interim.quest/interim-chro-services',
  },
}

export default function InterimCHROServicesPage() {
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
              <span className="inline-block bg-pink-500 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                People Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CHRO<br />
                <span className="text-pink-400">Services UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                Hire an <strong className="text-white">Interim CHRO</strong> for full-time temporary HR leadership.
                Expert HR executives for restructuring, culture transformation, M&A integration, and leadership gaps.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-pink-400">£1k-£1.8k</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Per Day</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">3-12</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Months</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">Full-Time</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Leadership</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="px-8 py-4 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
                  Hire an Interim CHRO
                </Link>
                <Link href="#when-to-hire" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  When to Hire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Interim CHRO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What is an Interim CHRO?</h2>
          </div>
          <div className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              An <strong className="font-semibold text-gray-900">Interim CHRO</strong> (Chief Human Resources Officer) is a full-time, temporary HR executive who steps into your organisation for 3-12 months to provide senior people leadership during critical periods—covering a CHRO vacancy, leading organisational restructuring, managing culture transformation, or navigating complex people challenges.
            </p>
            <p>
              Unlike HR consultants who advise from the sidelines, an interim CHRO takes full operational responsibility. They join your leadership team, own people strategy, manage your HR function, and deliver results—then transition out when the challenge is resolved or a permanent CHRO is hired.
            </p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-pink-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">
                "When you need senior HR leadership immediately—for a restructure, crisis, or leadership gap—an interim CHRO provides proven expertise without a permanent commitment."
              </p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Temporary Leadership, Permanent Impact</h3>
            <p>
              Interim CHROs are battle-tested executives who've led HR functions through transformations, restructures, M&A integrations, and crisis situations across multiple organisations. They bring immediate credibility, proven processes, and the ability to drive change quickly—then hand over to a permanent CHRO or transition the organisation to the next phase.
            </p>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Responsibilities</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What Does an Interim CHRO Do?</h2>
            <p className="text-xl text-gray-600 mt-4">Core responsibilities during a 3-12 month interim engagement</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Leadership Gap Coverage',
                description: 'Step in as acting CHRO during vacancy or leave. Provide continuity of HR leadership, maintain momentum on people initiatives, and ensure business as usual.',
                icon: '🎯',
              },
              {
                title: 'Organisational Restructuring',
                description: 'Lead redundancy programmes, reorganisations, and workforce planning. Navigate employment law, consultation processes, and change management.',
                icon: '🔄',
              },
              {
                title: 'Culture Transformation',
                description: 'Drive culture change initiatives during mergers, post-crisis recovery, or strategic shifts. Rebuild trust, redefine values, and align people with new direction.',
                icon: '💫',
              },
              {
                title: 'M&A People Integration',
                description: 'Integrate HR functions, harmonise cultures, align policies, and manage redundancy/retention during mergers and acquisitions.',
                icon: '🤝',
              },
              {
                title: 'Employment Tribunal Support',
                description: 'Prepare for and manage employment tribunal cases. Review processes, improve documentation, implement corrective actions, and provide expert witness support.',
                icon: '⚖️',
              },
              {
                title: 'Rapid Scaling Support',
                description: 'Build HR infrastructure during hypergrowth. Design hiring processes, develop managers, implement systems, and maintain culture during rapid expansion.',
                icon: '📈',
              },
              {
                title: 'Crisis Management',
                description: 'Manage people crises—whistleblowing, senior departures, cultural breakdowns. Stabilise the situation, rebuild confidence, and implement corrective measures.',
                icon: '🚨',
              },
              {
                title: 'HR Function Build',
                description: 'Build or professionalise the HR function. Implement HRIS, design policies, establish governance, and transition to permanent CHRO.',
                icon: '⚙️',
              },
              {
                title: 'Leadership Team Support',
                description: 'Advise CEO and board on complex people matters. Provide strategic counsel during transformation, change, or crisis situations.',
                icon: '💼',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 hover:border-pink-300 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Hire an Interim CHRO?</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                title: 'Immediate Senior Leadership',
                description: 'Deploy a battle-tested CHRO within days, not months. Skip the 6-12 month permanent hire process and get senior HR leadership when you need it most.',
                stat: '< 2 Weeks',
                statLabel: 'Time to Start',
              },
              {
                title: 'Crisis & Transformation Expertise',
                description: 'Interims specialise in high-stakes situations—restructuring, M&A, tribunals, crisis management. They\'ve solved your problem before, multiple times.',
                stat: '5-10x',
                statLabel: 'Transformations Led',
              },
              {
                title: 'No Long-Term Commitment',
                description: 'Engage for exactly as long as needed—3 months for crisis management, 6-12 months for transformation. No permanent salary, pension, or redundancy liability.',
                stat: '3-12',
                statLabel: 'Month Contracts',
              },
              {
                title: 'Outside Perspective',
                description: 'Interims bring fresh eyes, proven processes from other organisations, and no internal politics. They can make tough decisions without career concerns.',
                stat: '10+',
                statLabel: 'Organisations Seen',
              },
              {
                title: 'Smooth Transition Planning',
                description: 'Interim CHROs are built for handover. They stabilise, transform, document everything, and transition seamlessly to permanent leadership or next phase.',
                stat: '100%',
                statLabel: 'Designed for Exit',
              },
            ].map((benefit, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-pink-500">
                <div className="flex-shrink-0 text-center">
                  <div className="text-3xl font-black text-pink-600">{benefit.stat}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{benefit.statLabel}</div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire */}
      <section id="when-to-hire" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">When Should You Hire an Interim CHRO?</h2>
            <p className="text-xl text-gray-600 mt-4">Common situations requiring full-time temporary HR leadership</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                scenario: 'CHRO Vacancy or Leave',
                description: 'Your CHRO has resigned, is on extended leave, or you\'re searching for a permanent replacement. You need continuity of leadership while recruiting.',
                timing: 'Immediate coverage',
                duration: '3-9 months',
              },
              {
                scenario: 'Organisational Restructuring',
                description: 'Leading a redundancy programme, reorganisation, or major workforce change. Requires deep employment law expertise and change management.',
                timing: 'At project start',
                duration: '4-8 months',
              },
              {
                scenario: 'Culture Transformation',
                description: 'Post-crisis culture rebuild, merger culture integration, or fundamental values shift. Need experienced leadership to drive authentic change.',
                timing: 'Crisis recognition',
                duration: '6-12 months',
              },
              {
                scenario: 'M&A People Integration',
                description: 'Merging two organisations or integrating an acquisition. Harmonising cultures, policies, teams, and managing redundancy or retention.',
                timing: 'At deal announcement',
                duration: '6-12 months',
              },
              {
                scenario: 'Employment Tribunal',
                description: 'Facing employment tribunal, grievance escalation, or complex employee relations matter. Need expert preparation and process review.',
                timing: 'At case emergence',
                duration: '3-6 months',
              },
              {
                scenario: 'Rapid Scaling',
                description: 'Hypergrowth phase requiring immediate HR infrastructure build. Need to hire 50-200+ people while maintaining culture and compliance.',
                timing: 'Pre-growth phase',
                duration: '6-12 months',
              },
              {
                scenario: 'HR Crisis Management',
                description: 'Whistleblowing, senior departures, cultural breakdown, or reputational people issues. Need immediate stabilisation and corrective action.',
                timing: 'Immediately',
                duration: '3-6 months',
              },
              {
                scenario: 'PE/VC Portfolio Support',
                description: 'Private equity or VC-backed companies needing professionalised HR, pre-exit people due diligence, or post-acquisition integration.',
                timing: 'Investment or exit prep',
                duration: '4-9 months',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.scenario}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex gap-3 text-xs">
                  <span className="inline-block font-bold text-pink-600 uppercase tracking-wider">{item.timing}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How Much Does an Interim CHRO Cost?</h2>
            <p className="text-xl text-gray-600 mt-4">Typical day rates and engagement costs</p>
          </div>
          <div className="bg-gray-50 border-2 border-gray-200 p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Day Rate</div>
                <div className="text-3xl font-black text-gray-900">£1,000-£1,800</div>
                <div className="text-sm text-gray-600 mt-1">Per day (full-time)</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Typical Duration</div>
                <div className="text-3xl font-black text-gray-900">3-12 Months</div>
                <div className="text-sm text-gray-600 mt-1">Depends on situation</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Monthly Cost</div>
                <div className="text-3xl font-black text-gray-900">£20k-£36k</div>
                <div className="text-sm text-gray-600 mt-1">Based on 20 days/month</div>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-6">
              <h3 className="font-bold text-gray-900 mb-4">Example Engagement Costs</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">3-month CHRO coverage (vacancy)</span>
                  <span className="font-bold text-gray-900">£60,000-£108,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">6-month restructuring project</span>
                  <span className="font-bold text-gray-900">£120,000-£216,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">12-month M&A integration</span>
                  <span className="font-bold text-gray-900">£240,000-£432,000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What Influences Day Rates?</h3>
            <ul className="text-gray-600 space-y-2">
              <li><strong>Experience level:</strong> 15+ years senior HR leadership vs 20+ years FTSE/PE experience</li>
              <li><strong>Complexity:</strong> Simple CHRO coverage vs complex tribunal/M&A/crisis situations</li>
              <li><strong>Company size:</strong> 100-person company vs 1,000+ multinational organisation</li>
              <li><strong>Location:</strong> Regional UK vs London-based roles</li>
              <li><strong>Notice period:</strong> Standard 1-month notice vs immediate start (premium)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Comparison</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim vs Fractional vs Permanent CHRO</h2>
            <p className="text-xl text-gray-600 mt-4">Understanding the different types of HR leadership</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b border-gray-200">Factor</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-pink-600 border-b border-gray-200">Interim CHRO</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b border-gray-200">Fractional CHRO</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b border-gray-200">Permanent CHRO</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">Time Commitment</td>
                  <td className="px-6 py-4 text-pink-600 border-b border-gray-200">Full-time (5 days/week)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">Part-time (1-3 days/week)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">Full-time (5 days/week)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">Duration</td>
                  <td className="px-6 py-4 text-pink-600 border-b border-gray-200">3-12 months (temporary)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">Ongoing (long-term)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">Permanent</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">Cost</td>
                  <td className="px-6 py-4 text-pink-600 border-b border-gray-200">£1,000-£1,800/day</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">£650-£1,200/day</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">£150k-£250k salary + benefits</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">Best For</td>
                  <td className="px-6 py-4 text-pink-600 border-b border-gray-200">Vacancy, restructuring, crisis, M&A, transformation</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">Ongoing strategic guidance, scale-ups, cost-efficiency</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">Large organisations, complex operations, full ownership</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">Notice Period</td>
                  <td className="px-6 py-4 text-pink-600 border-b border-gray-200">1 month (contractual)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">1 month (contractual)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">3-6 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">Flexibility</td>
                  <td className="px-6 py-4 text-pink-600 border-b border-gray-200">High (defined end date)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">High (scale up/down)</td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200">Low (long-term commitment)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-900">Expertise</td>
                  <td className="px-6 py-4 text-pink-600">Crisis/transformation specialist</td>
                  <td className="px-6 py-4 text-gray-600">Strategic generalist</td>
                  <td className="px-6 py-4 text-gray-600">Company-specific deep expertise</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Hire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How to Hire an Interim CHRO</h2>
            <p className="text-xl text-gray-600 mt-4">From brief to deployment in under 2 weeks</p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Define Your Requirement',
                description: 'Clarify the challenge: CHRO coverage, restructuring, M&A integration, crisis management. Define duration, start date, and key deliverables.',
                timeframe: 'Day 1',
              },
              {
                step: '2',
                title: 'Shortlist Candidates',
                description: 'We match you with 2-4 interim CHROs who have solved your specific challenge before. Review profiles, experience, and day rates.',
                timeframe: 'Days 2-4',
              },
              {
                step: '3',
                title: 'Interview & Select',
                description: 'Interview shortlisted candidates (in-person or video). Assess expertise, culture fit, and approach. Check references from previous interim engagements.',
                timeframe: 'Days 5-7',
              },
              {
                step: '4',
                title: 'Agree Terms',
                description: 'Finalise day rate, contract length, notice period, and deliverables. Typically 3-12 month contracts with 1-month notice periods.',
                timeframe: 'Days 8-10',
              },
              {
                step: '5',
                title: 'Onboard & Deploy',
                description: 'Interim CHRO starts (subject to notice period). Week 1: deep-dive on situation, meet team, review documentation. Quick onboarding, immediate impact.',
                timeframe: 'Days 11-14',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gray-50 border-l-4 border-pink-500">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center font-black text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs text-pink-600 font-bold uppercase tracking-wider">{item.timeframe}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-pink-50 border border-pink-200">
            <h3 className="font-bold text-gray-900 mb-2">Fast-Track for Urgent Situations</h3>
            <p className="text-gray-600 text-sm">
              For crisis situations or immediate CHRO coverage needs, we can compress this to 3-5 days with pre-vetted candidates on standby. Premium rates may apply for immediate starts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
          </div>
          <FAQ items={CHRO_SERVICE_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Need an Interim CHRO?<br /><span className="text-pink-400">Deploy Within Days</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Tell us about your situation—CHRO vacancy, restructuring, M&A, crisis—and we'll match you with battle-tested interim CHROs who specialise in your exact challenge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-pink-500 text-white font-bold uppercase tracking-wider hover:bg-pink-400 transition-colors">
              Find an Interim CHRO
            </Link>
            <Link href="/interim-hr-jobs-uk" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
              I'm an Interim HR Leader
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
              <Link href="/interim-coo-services" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim COO</Link>
              <Link href="/interim-cfo-services" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim CFO</Link>
              <Link href="/interim-cpo-services" className="text-gray-600 hover:text-pink-600 font-medium transition-colors">Interim CPO</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
