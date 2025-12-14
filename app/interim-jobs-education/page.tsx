import { Metadata } from 'next'
import Link from 'next/link'
import { createDbQuery } from '@/lib/db'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { IR35Calculator } from '@/components/IR35Calculator'
import { FAQ } from '@/components/FAQ'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Interim Headteacher Jobs UK | Education Leadership Roles | Interim Quest',
  description: 'Find interim headteacher jobs and education leadership roles in the UK. Head of School, Executive Principal, and MAT leadership positions. £500-£900 daily rates.',
  keywords: ['interim headteacher jobs', 'interim head of school', 'interim education jobs', 'MAT interim leadership'],
  openGraph: {
    title: 'Interim Headteacher Jobs UK | Education Leadership Roles | Interim Quest',
    description: 'Find interim headteacher jobs and education leadership roles in the UK.',
    type: 'website',
  },
}

const educationRoles = [
  { name: 'Interim Headteacher', description: 'School leadership & improvement', rateRange: '£500-£750/day', demand: 'High' },
  { name: 'Interim Executive Principal', description: 'Multi-school leadership', rateRange: '£600-£900/day', demand: 'Growing' },
  { name: 'Interim Head of School', description: 'School operations & delivery', rateRange: '£450-£650/day', demand: 'High' },
  { name: 'Interim Director of Education (MAT)', description: 'MAT-wide strategy', rateRange: '£700-£1,000/day', demand: 'Growing' },
  { name: 'Interim School Business Manager', description: 'Finance & operations', rateRange: '£350-£500/day', demand: 'Medium' },
  { name: 'Interim SENCO', description: 'Special educational needs', rateRange: '£300-£450/day', demand: 'Medium' },
]

const educationScenarios = [
  { name: 'Leadership Gap', icon: '👤', description: 'Headteacher departure or long-term absence' },
  { name: 'Ofsted Improvement', icon: '📊', description: 'Requires Improvement/Inadequate' },
  { name: 'MAT Expansion', icon: '🏫', description: 'School turnaround or growth' },
  { name: 'Merger/Federation', icon: '🤝', description: 'Merger of schools or federations' },
  { name: 'New School', icon: '✨', description: 'New school opening leadership' },
  { name: 'Safeguarding Crisis', icon: '🛡️', description: 'Safeguarding crisis management' },
]

const educationOrganizations = [
  'Multi-Academy Trusts (MATs)', 'Local Authority Schools', 'Independent Schools',
  'Free Schools', 'Special Schools', 'Alternative Provision'
]

const educationSkills = [
  'Ofsted Inspection Readiness', 'School Improvement Planning', 'Safeguarding Leadership',
  'Budget & Financial Management', 'Staff Development & Performance', 'Curriculum Development',
  'Governance & Compliance'
]

const relatedSearches = [
  'Interim Headteacher Jobs', 'Interim Head of School', 'MAT Interim Leadership',
  'Interim Executive Principal', 'Interim Education Jobs', 'School Turnaround Leadership',
  'Interim Headteacher Day Rate', 'Interim SENCO Jobs', 'Interim School Business Manager'
]

// Same video as homepage
const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

const EDUCATION_FAQS = [
  {
    question: 'What qualifications do interim headteachers need?',
    answer: 'Interim headteachers need NPQH (National Professional Qualification for Headship) or equivalent senior leadership qualification, plus extensive experience as a serving or recent headteacher. Essential requirements include proven school improvement track record, Ofsted inspection experience (leading schools through Good or Outstanding), safeguarding expertise, and experience managing challenging situations like Requires Improvement grades, leadership transitions, or staff instability.',
  },
  {
    question: 'How much do interim headteachers earn?',
    answer: 'Interim headteachers in the UK typically earn £500-£750 per day, with executive principals earning £600-£900/day and MAT Directors of Education earning £700-£1,000/day. These are full-time roles (5 days/week), translating to monthly earnings of £10,000-£20,000. Engagements typically last 1-3 terms (6-18 months), with total engagement values ranging from £60,000-£270,000 depending on complexity and duration.',
  },
  {
    question: 'How long do interim headteacher assignments last?',
    answer: 'Interim headteacher assignments typically last 1-3 terms (approximately 6-18 months). Short-term coverage during permanent recruitment: 1-2 terms (6-12 months). School improvement or Ofsted preparation: 2-3 terms (12-18 months). MAT turnaround or new school opening: 3-4 terms (18-24 months). Assignments can extend if additional improvement work is needed or permanent recruitment is delayed.',
  },
  {
    question: 'When do schools hire interim headteachers?',
    answer: 'Schools hire interim headteachers during urgent leadership situations: sudden headteacher departure (resignation, dismissal, illness), Ofsted Requires Improvement or Inadequate grades requiring immediate intervention, safeguarding crises requiring experienced leadership, MAT expansion with new school takeovers needing turnaround expertise, school mergers or federations, or new school openings. Interim headteachers provide immediate, experienced leadership when schools cannot wait for lengthy permanent recruitment.',
  },
]

async function getEducationStats() {
  try {
    const sql = createDbQuery()
    const [total, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (role_category ILIKE '%education%' OR role_category ILIKE '%headteacher%' OR title ILIKE '%headteacher%' OR title ILIKE '%principal%' OR title ILIKE '%school%')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND (role_category ILIKE '%education%' OR role_category ILIKE '%headteacher%') AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      total: parseInt((total[0] as any)?.count || '0'),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '600'))
    }
  } catch (error) {
    return { total: 20, avgDayRate: 600 }
  }
}

export default async function EducationJobsPage() {
  const stats = await getEducationStats()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <VideoHeroBackground
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          fallbackGradient={true}
        />

        {/* Bottom-aligned content with glass panel */}
        <div className="relative z-10 w-full pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Left: Main content */}
              <div className="max-w-2xl">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
                  <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors text-sm tracking-wide">
                    <span className="mr-2">←</span> Back to Home
                  </Link>

                  <span className="inline-block bg-purple-500/20 backdrop-blur text-purple-200 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest mb-6">
                    {stats.total}+ Education Leadership Roles
                  </span>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95] tracking-tight">
                    Interim<br />
                    <span className="text-purple-300">Education</span> Jobs
                  </h1>

                  <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-lg">
                    Full-time temporary education leadership for schools in transition. Lead school improvement, Ofsted preparation, and MAT turnarounds. £500-£900 daily rates.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/interim-jobs?industry=Education"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      Browse Education Jobs →
                    </Link>
                    <Link
                      href="/handler/sign-up"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Get Notified
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="w-full lg:w-auto">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">{stats.total}+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Active Roles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£{stats.avgDayRate}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Day Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">6-18</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">Months Avg</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">MAT</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider mt-1">High Demand</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Board - Moved up after hero */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Opportunities</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim Education Jobs</h2>
            <p className="text-xl text-gray-500">Browse {stats.total}+ education leadership opportunities</p>
          </div>
          <EmbeddedJobBoard defaultDepartment="Education" />
        </div>
      </section>

      {/* Education Roles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">By Role</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim Education Roles</h2>
            <p className="text-xl text-gray-500">Education leadership positions available</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationRoles.map((role) => (
              <div key={role.name} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{role.description}</p>
                <p className="text-purple-700 font-semibold mb-1">{role.rateRange}</p>
                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Demand: {role.demand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">When Schools Hire</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Interim Scenarios</h2>
            <p className="text-xl text-gray-500">Situations requiring interim education leadership</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {educationScenarios.map((scenario) => (
              <div key={scenario.name} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-all">
                <span className="text-4xl mb-3 block">{scenario.icon}</span>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{scenario.name}</h3>
                <p className="text-gray-600 text-xs">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Organizations</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Hires Interim Education Leaders</h2>
            <p className="text-xl text-gray-500">Types of educational organizations</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {educationOrganizations.map((org) => (
              <span key={org} className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors font-medium">
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Skills */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Skills</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">In-Demand Education Skills</h2>
            <p className="text-xl text-gray-500">Skills that command premium rates</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {educationSkills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white rounded-full text-gray-700 border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Education */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">The Opportunity</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Interim Headteacher?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ofsted Improvement</h3>
              <p className="text-gray-600">
                Schools hire interim headteachers specifically when rated Requires Improvement or Inadequate. Full-time engagement for 1-3 terms to implement rapid improvement plans, address inspection findings, and achieve Good or Outstanding ratings.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">MAT Turnarounds</h3>
              <p className="text-gray-600">
                Multi-Academy Trusts bring in experienced interim leaders for newly acquired schools requiring rapid improvement. These assignments involve stabilizing leadership, improving safeguarding, fixing finances, and raising standards within 12-18 months.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crisis Leadership</h3>
              <p className="text-gray-600">
                Schools facing safeguarding crises, sudden leadership departures, or staff instability need immediate, experienced intervention. Interim headteachers provide stability, rebuild confidence, and implement urgent improvements while permanent solutions are found.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">Tax Planning</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IR35 Calculator</h2>
            <p className="text-xl text-gray-500">Understand your take-home as an interim education leader</p>
          </div>
          <IR35Calculator defaultDayRate={600} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-400 mb-4 block">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education Interim FAQs</h2>
            <p className="text-xl text-gray-500">Common questions about interim education roles</p>
          </div>
          <FAQ items={EDUCATION_FAQS} title="" />
        </div>
      </section>

      {/* Related Searches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Searches</h2>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map((search) => (
              <Link
                key={search}
                href={`/interim-jobs?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors text-sm border border-gray-200"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-6 block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Interim Education Leadership?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            {stats.total}+ headteacher, principal, and education leadership opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs?q=headteacher"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all"
            >
              Browse Education Jobs
            </Link>
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Join the Platform
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
