import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import { createDbQuery } from '@/lib/db'
import { EmbeddedJobBoard } from '@/components/EmbeddedJobBoard'
import { FAQ, CFO_FAQS } from '@/components/FAQ'
import { VideoHeroBackground } from '@/components/VideoHeroBackground'
import { RoleCalculator } from '@/components/RoleCalculator'
import { JobsGraph3D } from '@/components/JobsGraph3D'
import { DesktopOnly } from '@/components/DesktopOnly'
import { IR35Calculator } from '@/components/IR35Calculator'
import { RoleNews } from '@/components/RoleNews'

export const revalidate = 3600

const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y"

export const metadata: Metadata = {
  title: 'Interim CFO Jobs UK | Interim Quest',
  description: 'Interim CFO jobs UK - Full-time temporary Chief Financial Officer assignments (3-12 months) paying £1,200-£2,000/day. Leadership gaps, turnarounds, transformations. Remote & hybrid available.',
  keywords: 'interim cfo jobs, interim cfo jobs uk, interim cfo opportunities, interim cfo uk, interim chief financial officer, cfo interim roles, temporary cfo jobs',
  alternates: {
    canonical: 'https://interim.quest/interim-cfo-jobs-uk',
  },
  openGraph: {
    title: 'Interim CFO Jobs UK | Interim Quest',
    description: 'Interim CFO jobs UK - Full-time temporary CFO assignments (3-12 months) paying £1,200-£2,000/day.',
    images: ['/images/interim-cfo-jobs-uk.jpg'],
    url: 'https://interim.quest/interim-cfo-jobs-uk',
  },
}

async function getFinanceStats() {
  try {
    const sql = createDbQuery()
    const [totalResult, remoteResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Finance'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND role_category = 'Finance' AND (is_remote = true OR workplace_type = 'Remote')`
    ])
    return {
      total: parseInt((totalResult[0] as any)?.count || '0'),
      remoteCount: parseInt((remoteResult[0] as any)?.count || '0')
    }
  } catch {
    return { total: 45, remoteCount: 18 }
  }
}

async function getFeaturedCompanies() {
  try {
    const sql = createDbQuery()
    const companies = await sql`
      SELECT DISTINCT company_name
      FROM jobs
      WHERE is_active = true AND role_category = 'Finance' AND company_name IS NOT NULL
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 8
    `
    return companies.map((c: any) => c.company_name)
  } catch {
    return []
  }
}

export default async function InterimCfoJobsUkPage() {
  const [stats, companies] = await Promise.all([getFinanceStats(), getFeaturedCompanies()])

  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Hero with Video Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <VideoHeroBackground playbackId={HERO_VIDEO_PLAYBACK_ID} fallbackGradient={true} />
        <div className="relative z-10 w-full py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors text-sm tracking-wide">
              <span className="mr-2">←</span> Back to Home
            </Link>
            <div className="max-w-4xl">
              <span className="inline-block bg-emerald-500 text-black px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Finance Leadership
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                Interim CFO<br />
                <span className="text-emerald-400">Jobs UK</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8">
                <strong className="text-white">Interim CFO jobs UK</strong> for experienced finance leaders.
                Full-time temporary assignments (3-12 months) paying £1,200-£2,000/day.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-emerald-400">{stats.total}+</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Live Roles</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">£1,500</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Avg Day Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-white">{stats.remoteCount}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Remote</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="#jobs" className="px-8 py-4 bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">
                  Browse Jobs Now
                </Link>
                <Link href="/interim-cfo-salary" className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                  Salary Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Calculator</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">How Much Can You Earn as a Interim CFO?</h2>
          </div>
          <RoleCalculator role="cfo" />
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Browse</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Finance & CFO Jobs</h2>
            </div>
            <p className="text-gray-500">Pre-filtered to Finance. Change filters to explore.</p>
          </div>
          <Suspense fallback={<div className="bg-white rounded-2xl border border-gray-200 p-8"><div className="animate-pulse space-y-4"><div className="h-10 bg-gray-200 rounded w-1/3"></div><div className="grid grid-cols-2 gap-4"><div className="h-48 bg-gray-200 rounded"></div><div className="h-48 bg-gray-200 rounded"></div></div></div></div>}>
            <EmbeddedJobBoard defaultDepartment="Finance" pageSlug="interim-cfo-jobs-uk" jobsPerPage={10} title="Latest Finance & CFO Jobs" allJobsLinkText="View All Finance Jobs" />
          </Suspense>
        </div>
      </section>

      {/* 3D Skills Graph - Desktop Only */}
      <DesktopOnly>
        <section className="py-16 bg-gray-950">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Interactive Network</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">CFO Jobs Knowledge Graph</h2>
              <p className="text-gray-400 mt-2">Explore CFO roles, skills, and companies in 3D</p>
            </div>
            <JobsGraph3D roleFilter="CFO" limit={25} height="500px" />
          </div>
        </section>
      </DesktopOnly>

      {/* Companies Hiring */}
      {companies.length > 0 && (
        <section className="py-16 bg-black text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block">Who's Hiring</span>
              <h2 className="text-3xl md:text-4xl font-black">Companies Seeking CFOs</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {companies.map((company: string, index: number) => (
                <span key={index} className="text-xl md:text-2xl font-light text-gray-400 hover:text-emerald-400 transition-colors cursor-default">{company}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">The Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Everything You Need to Know About<br /><span className="text-emerald-600">Interim CFO Jobs UK</span>
            </h2>
            <div className="w-24 h-1 bg-emerald-500"></div>
          </div>
          <figure className="mb-16 -mx-6 lg:-mx-16">
            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Interim CFO jobs UK - finance executive reviewing company financial reports" className="w-full h-80 md:h-96 object-cover" />
            <figcaption className="text-sm text-gray-500 mt-3 px-6 lg:px-16">Finance leaders across the UK are embracing interim work</figcaption>
          </figure>
          <article className="prose prose-lg prose-gray max-w-none">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-light">
              <strong className="font-semibold text-gray-900">Interim CFO jobs</strong> are full-time temporary assignments where experienced finance leaders step into critical roles for 3-12 months. These are NOT part-time or fractional positions—interim CFOs work full-time hours (typically 5 days/week) on defined assignments such as leadership gaps, turnarounds, or major transformations.
            </p>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">What Are Interim CFO Jobs?</h3>
            <p>The UK market for <strong>interim CFO jobs UK</strong> has grown substantially as companies need senior finance leadership for temporary, high-impact assignments. Typical interim CFO roles last 3-12 months and pay £1,200-£2,000 per day. These are full-time, temporary positions—not fractional or part-time roles.</p>
            <div className="bg-gray-50 p-8 my-10 border-l-4 border-emerald-500">
              <p className="text-xl font-semibold text-gray-900 mb-0">"Interim CFOs provide full-time leadership during transitions, turnarounds, or transformation projects—not ongoing part-time support."</p>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Why Companies Hire Interim CFOs</h3>
            <ul className="space-y-3">
              <li><strong>Leadership gaps:</strong> Cover CFO departures or extended leave while recruiting permanent replacement</li>
              <li><strong>Turnarounds:</strong> Bring in crisis management expertise to stabilize finances</li>
              <li><strong>Transformations:</strong> Lead major finance change programs (ERP, restructuring, IPO prep)</li>
              <li><strong>Rapid scaling:</strong> Provide experienced leadership during high-growth phases</li>
              <li><strong>Due diligence:</strong> Support M&A transactions and post-acquisition integration</li>
            </ul>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Types of Interim CFO Assignments</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
              {[
                { title: 'Leadership Gap CFO', desc: 'Cover departures during permanent recruitment', rate: '£1,200-£1,800/day' },
                { title: 'Turnaround CFO', desc: 'Stabilize finances and restore investor confidence', rate: '£1,400-£2,000/day' },
                { title: 'Transformation CFO', desc: 'Lead major finance change programs', rate: '£1,300-£1,900/day' },
                { title: 'IPO/Exit CFO', desc: 'Prepare company for public listing or sale', rate: '£1,500-£2,000/day' },
              ].map((type, i) => (
                <div key={i} className="bg-gray-50 p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1">{type.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{type.desc}</p>
                  <span className="text-emerald-600 font-semibold text-sm">{type.rate}</span>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Requirements for Interim CFO Jobs</h3>
            <ul className="space-y-2">
              <li>20+ years finance experience, including 5+ years as CFO or Finance Director</li>
              <li>Professional qualifications (ACA, ACCA, CIMA, CPA)</li>
              <li>Track record delivering results in temporary, high-pressure assignments</li>
              <li>Experience with crisis management, restructuring, or major transformations</li>
              <li>Strong stakeholder management and board-level communication skills</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Interim vs Part-Time CFO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Important Distinction</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Interim CFO vs Part-Time CFO</h2>
            <p className="text-xl text-gray-600 mt-4">These are fundamentally different types of roles</p>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              Many people confuse <strong>interim CFO</strong> with <strong>part-time CFO</strong>, but they are very different. Interim CFOs work full-time on temporary assignments (3-12 months), while part-time/fractional CFOs work ongoing reduced hours (1-3 days/week) across multiple clients.
            </p>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Interim CFO vs Part-Time CFO</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
              <div className="bg-white p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Interim CFO (This Page)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full-time hours (5 days/week)</li>
                  <li>• Temporary assignments (3-12 months)</li>
                  <li>• Single client at a time</li>
                  <li>• £1,200-£2,000/day rate</li>
                  <li>• Crisis, transformation, leadership gap</li>
                </ul>
              </div>
              <div className="bg-white p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Part-Time/Fractional CFO</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Part-time hours (1-3 days/week)</li>
                  <li>• Ongoing relationship (6+ months)</li>
                  <li>• Multiple clients simultaneously</li>
                  <li>• £800-£1,500/day rate</li>
                  <li>• Strategic guidance, board support</li>
                </ul>
              </div>
            </div>

            <p>
              This page focuses on <strong>interim CFO jobs</strong>—full-time temporary assignments. If you are looking for part-time ongoing CFO work across multiple clients, that is fractional/portfolio CFO work.
            </p>

            <div className="bg-emerald-50 p-6 border border-emerald-200 rounded-lg my-8 not-prose">
              <p className="text-emerald-800 font-medium mb-3">Looking for part-time/fractional CFO opportunities instead?</p>
              <Link href="/part-time-cfo" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-900">
                Read our Part-Time CFO Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interim CFO Assignment Structure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Assignment Structure</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Typical Interim CFO Assignment</h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              A typical <strong>interim CFO assignment</strong> is a full-time temporary role lasting 3-12 months. You work exclusively for one client during this period, providing full CFO leadership to address a specific business need such as covering a leadership gap, managing a turnaround, or leading a transformation.
            </p>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Core Responsibilities</h3>
            <ul className="space-y-2">
              <li><strong>Financial Leadership:</strong> Full CFO accountability including strategy, planning, and execution</li>
              <li><strong>Crisis Management:</strong> Stabilize finances during turnarounds or challenging periods</li>
              <li><strong>Change Management:</strong> Lead transformations such as ERP implementations or restructuring</li>
              <li><strong>Team Leadership:</strong> Manage and develop finance team during the assignment</li>
              <li><strong>Stakeholder Management:</strong> Report to board, investors, banks during critical periods</li>
              <li><strong>Exit Planning:</strong> Ensure smooth handover to permanent CFO or successor</li>
            </ul>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Typical Assignment Structure</h3>
            <div className="grid md:grid-cols-3 gap-4 not-prose my-6">
              <div className="bg-gray-50 p-5 text-center">
                <div className="text-2xl font-black text-emerald-600">5 days/week</div>
                <div className="text-sm text-gray-600">Full-time hours</div>
              </div>
              <div className="bg-gray-50 p-5 text-center">
                <div className="text-2xl font-black text-emerald-600">3-12 months</div>
                <div className="text-sm text-gray-600">Assignment duration</div>
              </div>
              <div className="bg-gray-50 p-5 text-center">
                <div className="text-2xl font-black text-emerald-600">£1,200-£2,000</div>
                <div className="text-sm text-gray-600">Day rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote & Hybrid Interim CFO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Work Arrangements</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Remote & Hybrid Interim CFO Assignments</h2>
          </div>

          <div className="prose prose-lg prose-gray max-w-none">
            <p>
              Many <strong>interim CFO assignments</strong> now offer remote or hybrid working arrangements. While some roles require on-site presence (especially during crisis situations or major transformations), many companies are open to experienced interim CFOs working remotely for part of the week.
            </p>

            <h3 className="text-xl font-black text-gray-900 mt-8 mb-4">Remote/Hybrid Considerations for Interim CFOs</h3>
            <ul className="space-y-2">
              <li><strong>Assignment type:</strong> Turnarounds often require more on-site presence than steady-state coverage</li>
              <li><strong>Critical periods:</strong> Month-end, board meetings, and audits may require office attendance</li>
              <li><strong>Team management:</strong> Leading finance teams often works better with regular in-person time</li>
              <li><strong>Geography:</strong> UK-wide opportunities available with 1-2 days/week on-site</li>
            </ul>

            <p>
              Currently, approximately <strong>{stats.remoteCount} of our {stats.total} finance roles</strong> offer remote or hybrid working arrangements. Filter by "Remote" or "Hybrid" in our job board to see available options.
            </p>

            <div className="bg-black text-white p-6 rounded-lg my-8 not-prose">
              <p className="text-gray-300 mb-3">Browse remote CFO assignments:</p>
              <Link href="/remote" className="inline-flex items-center text-emerald-400 font-bold hover:text-emerald-300">
                View Remote Jobs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IR35 Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">UK Tax</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">IR35: Inside vs Outside</h2>
            <p className="text-gray-600 mt-4">As an interim CFO, your IR35 status significantly impacts your take-home pay</p>
          </div>
          <IR35Calculator defaultDayRate={1500} />
        </div>
      </section>

      {/* Finance News */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <RoleNews category="Finance" title="Latest CFO & Finance News" limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Common Questions About Interim CFO Jobs UK</h2>
          </div>
          <FAQ items={CFO_FAQS} title="" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">Ready?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Find Your Next<br /><span className="text-emerald-400">Interim CFO Role</span></h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Create your profile and get matched with companies seeking interim finance leadership.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/handler/sign-up" className="px-10 py-5 bg-emerald-500 text-black font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors">Create Profile</Link>
            <Link href="/interim-cfo-salary" className="px-10 py-5 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">Salary Guide</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Related</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/part-time-cfo" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Part-Time CFO Guide</Link>
              <Link href="/interim-cfo-salary" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">CFO Salary Guide</Link>
              <Link href="/interim-cmo-jobs-uk" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">CMO Jobs UK</Link>
              <Link href="/interim-cto-jobs-uk" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">CTO Jobs UK</Link>
              <Link href="/interim-coo-jobs-uk" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">COO Jobs UK</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
