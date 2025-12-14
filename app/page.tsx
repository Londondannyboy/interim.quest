import Link from "next/link";
import { Metadata } from "next";
import { createDbQuery } from "@/lib/db";
import { InterimCalculator } from "@/components/InterimCalculator";
import { JobCard } from "@/components/JobCard";
import { AuthAwareHumeWidget } from "@/components/AuthAwareHumeWidget";
import { VideoHeroBackground } from "@/components/VideoHeroBackground";
import { AnimatedStats } from "@/components/AnimatedStats";
import { LatestNews } from "@/components/RoleNews";
import { JobsGraph3D } from "@/components/JobsGraph3D";
import { DesktopOnly } from "@/components/DesktopOnly";

// Mux video playback ID for the hero background
// Woman walking - professional executive theme
const HERO_VIDEO_PLAYBACK_ID: string | undefined = "qIS6PGKxIZyzjrDBzxQuqPRBOhHofDnXq1chdsqAY9Y";

export const metadata: Metadata = {
  title: "Interim Executive Jobs UK | UK's #1 Platform for Interim Roles",
  description: "UK's leading platform for interim executive jobs. Find interim CFO, CEO, CTO roles or hire interim executives for leadership gaps, transformation, and crisis management. 3-12 month engagements, start within 48 hours.",
  keywords: "interim executive jobs, interim jobs uk, interim cfo, interim ceo, interim management, temporary executive, leadership gap, turnaround, transformation, interim roles uk",
  alternates: {
    canonical: "https://interim.quest",
  },
};

// Revalidate homepage every hour
export const revalidate = 3600

interface HomepageSection {
  section_type: string
  section_order: number
  title: string
  subtitle: string
  content: any
}

interface RoleItem {
  icon: string
  name: string
  count: number
  description: string
}

interface BenefitItem {
  icon: string
  title: string
  description: string
}

interface HowItWorksStep {
  step: string
  title: string
  description: string
}

interface Testimonial {
  name: string
  role: string
  quote: string
  companies: string
}

interface Agency {
  name: string
  specialty: string
}

async function getHomepageContent(): Promise<HomepageSection[]> {
  try {
    const sql = createDbQuery()
    const sections = await sql`
      SELECT section_type, section_order, title, subtitle, content
      FROM homepage_content
      WHERE site = 'interim' AND is_active = true
      ORDER BY section_order ASC
    `
    return sections as HomepageSection[]
  } catch (error) {
    console.error('Error fetching homepage content:', error)
    return []
  }
}

async function getJobStats() {
  try {
    const sql = createDbQuery()
    // Only count actual interim jobs
    const result = await sql`
      SELECT COUNT(*) as total FROM jobs WHERE is_active = true AND is_interim = true
    `
    return parseInt((result[0] as any)?.total || '0')
  } catch (error) {
    return 0 // Honest fallback - do not inflate
  }
}

async function getFeaturedJobs() {
  try {
    const sql = createDbQuery()
    // Only show jobs that are actually interim roles
    const jobs = await sql`
      SELECT
        id,
        slug,
        title,
        company_name,
        location,
        is_remote,
        workplace_type,
        compensation,
        role_category,
        skills_required,
        posted_date,
        description_snippet
      FROM jobs
      WHERE is_active = true AND is_interim = true
      ORDER BY posted_date DESC NULLS LAST
      LIMIT 6
    `
    return jobs
  } catch (error) {
    console.error('Error fetching featured jobs:', error)
    return []
  }
}

async function getDetailedStats() {
  try {
    const sql = createDbQuery()
    const [londonJobs, remoteJobs, avgRateResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND location ILIKE '%london%'`,
      sql`SELECT COUNT(*) as count FROM jobs WHERE is_active = true AND (is_remote = true OR workplace_type = 'Remote')`,
      sql`SELECT AVG(CAST(REGEXP_REPLACE(compensation, '[^0-9]', '', 'g') AS INTEGER)) as avg FROM jobs WHERE is_active = true AND compensation IS NOT NULL AND compensation ~ '^[£$]?[0-9]+'`
    ])
    return {
      londonJobs: parseInt((londonJobs[0] as any)?.count || '0'),
      remoteJobs: parseInt((remoteJobs[0] as any)?.count || '0'),
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '1800'))
    }
  } catch (error) {
    return { londonJobs: 85, remoteJobs: 60, avgDayRate: 1800 }
  }
}

export default async function Home() {
  const [sections, totalJobs, featuredJobs, detailedStats] = await Promise.all([
    getHomepageContent(),
    getJobStats(),
    getFeaturedJobs(),
    getDetailedStats()
  ])

  // Extract sections by type
  const rolesSection = sections.find(s => s.section_type === 'roles')
  const benefitsSection = sections.find(s => s.section_type === 'benefits')
  const howItWorksSection = sections.find(s => s.section_type === 'how_it_works')
  const testimonialsSection = sections.find(s => s.section_type === 'testimonials')
  const agenciesSection = sections.find(s => s.section_type === 'agencies')

  // FAQ JSON-LD for search engines
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an interim executive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An interim executive is a full-time temporary senior leader hired for 3-12 months to fill critical leadership gaps, manage transformations, or navigate crises. Unlike consultants or fractional executives, interim executives take full operational responsibility as acting CFO, CEO, CTO, or other C-suite roles."
        }
      },
      {
        "@type": "Question",
        name: "How much do interim executives earn in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Interim executives in the UK typically earn £1,200-£2,500 per day depending on seniority and expertise. Senior interim CFOs and CEOs can command £2,000-£3,000+ per day for complex turnaround or transformation assignments. The average day rate is approximately £${detailedStats.avgDayRate}.`
        }
      },
      {
        "@type": "Question",
        name: "How quickly can an interim executive start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Most interim executives can start within 48 hours to 2 weeks, compared to 3-6 months for permanent executive hires. This speed is critical for leadership gaps, crisis situations, or time-sensitive transformations.`
        }
      },
      {
        "@type": "Question",
        name: "When should I hire an interim executive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hire an interim executive for: leadership vacancies (sudden departure, maternity cover), transformation projects (M&A, turnaround, restructuring), crisis management (financial distress, regulatory issues), or interim period before permanent hire. Interim executives provide immediate senior leadership when you need it most."
        }
      },
      {
        "@type": "Question",
        name: "What's the difference between interim and fractional executives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interim executives work full-time for 3-12 months on temporary assignments, taking complete operational responsibility. Fractional executives work part-time (1-3 days/week) on an ongoing basis with multiple clients. Interim is for urgent, full-time leadership needs; fractional is for ongoing strategic advisory."
        }
      }
    ]
  };

  // JobPosting aggregate JSON-LD - with all required Google fields
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Interim Executive Jobs UK - Temporary Leadership Roles",
    description: `Browse ${totalJobs}+ interim executive jobs in the UK. Find interim CFO, CEO, CTO roles for 3-12 month engagements with immediate start dates.`,
    numberOfItems: totalJobs,
    itemListElement: featuredJobs.slice(0, 3).map((job: any, index: number) => {
      const postedDate = job.posted_date || new Date().toISOString().split('T')[0];
      const validThrough = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 90 days from now
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "JobPosting",
          title: job.title,
          description: job.description || `${job.title} - Interim executive role in the UK. Full-time temporary engagement for 3-12 months. Immediate start available.`,
          hiringOrganization: {
            "@type": "Organization",
            name: job.company_name || "Confidential"
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location || "London",
              addressCountry: "GB"
            }
          },
          employmentType: "TEMPORARY",
          datePosted: postedDate,
          validThrough: validThrough
        }
      };
    })
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
    <div className="flex flex-col">
      {/* Hero Section with Video Background - Modern Cinematic Design */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Video Background */}
        <VideoHeroBackground
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          fallbackGradient={true}
        />

        {/* Bottom-aligned content with glass panel */}
        <div className="relative z-10 w-full pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Left: Main content */}
              <div className="max-w-2xl">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/10">
                  <span className="inline-block bg-emerald-500/20 backdrop-blur text-emerald-300 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider mb-6">
                    UK's #1 Interim Executive Platform
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1]">
                    Interim Executives UK
                  </h1>

                  <p className="text-xl md:text-2xl text-emerald-400 font-semibold mb-4">
                    Immediate Senior Leadership When You Need It Most
                  </p>

                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Full-time temporary executives for leadership gaps, transformation, and crisis management.
                    Start within 48 hours, engage for 3-12 months.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/interim-jobs"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 transition-all duration-200"
                    >
                      Browse Interim Jobs →
                    </Link>
                    <Link
                      href="/handler/sign-up"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Hire Interim Executive
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="w-full lg:w-auto">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-emerald-400 font-mono">48hrs</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Fast Start</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">3-12m</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Engagements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">£1.2-2.5k</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Day Rates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">Full-Time</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Leadership</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Banner */}
      <section id="use-cases" className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">When to Hire Interim Executives</h2>
            <p className="text-gray-600">Critical situations requiring immediate senior leadership</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <span className="text-3xl block mb-2">🚨</span>
              <span className="font-bold text-gray-900 block">Leadership Gap</span>
              <span className="text-sm text-gray-500">Sudden departure or vacancy</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <span className="text-3xl block mb-2">🔄</span>
              <span className="font-bold text-gray-900 block">Transformation</span>
              <span className="text-sm text-gray-500">M&A, restructuring, turnaround</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <span className="text-3xl block mb-2">⚠️</span>
              <span className="font-bold text-gray-900 block">Crisis Management</span>
              <span className="text-sm text-gray-500">Financial distress, regulatory</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <span className="text-3xl block mb-2">🎯</span>
              <span className="font-bold text-gray-900 block">Project Leadership</span>
              <span className="text-sm text-gray-500">IPO, fundraising, integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Interim Executives - with subdued video */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <VideoHeroBackground
            playbackId={HERO_VIDEO_PLAYBACK_ID}
            fallbackGradient={true}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Hire Interim Executives?</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              When permanent hiring takes months and the situation demands immediate action, interim executives
              step in as full-time leaders who can start within days and deliver results from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Immediate Impact</h3>
              <p className="text-gray-600">
                Start within 48 hours, not 3-6 months. Interim executives bring proven experience and hit the ground running with no ramp-up time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Leadership</h3>
              <p className="text-gray-600">
                Not consultants or advisors—interim executives take complete operational responsibility as acting CFO, CEO, or other C-suite roles.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Battle-Tested Experience</h3>
              <p className="text-gray-600">
                Senior executives with 15-25+ years navigating turnarounds, transformations, and high-stakes situations. They have solved your problem before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Interim Executive Roles</h2>
            <p className="text-xl text-gray-600">Full-time temporary leadership across all functions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', name: 'Interim CFO', description: 'Financial crisis, turnaround, fundraising, IPO preparation, or CFO departure.', link: '/interim-cfo-jobs-uk', color: 'emerald' },
              { icon: '👔', name: 'Interim CEO', description: 'Leadership transition, crisis management, turnaround, or pre-permanent CEO.', link: '/interim-jobs', color: 'blue' },
              { icon: '💻', name: 'Interim CTO', description: 'Technical transformation, platform migration, team restructuring, or CTO gap.', link: '/interim-cto-jobs-uk', color: 'purple' },
              { icon: '⚙️', name: 'Interim COO', description: 'Operational transformation, scaling, restructuring, or COO succession.', link: '/interim-coo-jobs-uk', color: 'orange' },
              { icon: '📢', name: 'Interim CMO', description: 'Brand repositioning, go-to-market transformation, or CMO vacancy.', link: '/interim-cmo-jobs-uk', color: 'amber' },
              { icon: '👥', name: 'Interim HR Director', description: 'Restructuring, culture change, organizational transformation, or HR leadership gap.', link: '/interim-jobs', color: 'pink' },
            ].map((role, i) => (
              <Link
                key={i}
                href={role.link}
                className="group"
              >
                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-lg transition-all duration-200 border border-transparent hover:border-gray-300">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{role.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors mb-1">
                        {role.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{role.description}</p>
                      <span className="inline-flex items-center gap-1 text-gray-900 font-semibold text-sm">
                        View Jobs
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - From Neon */}
      {benefitsSection && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{benefitsSection.title}</h2>
              <p className="text-xl text-gray-600">{benefitsSection.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {(benefitsSection.content as BenefitItem[]).map((benefit, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-4 block">{benefit.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section - From Neon */}
      {howItWorksSection && (
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{howItWorksSection.title}</h2>
              <p className="text-xl text-gray-600">{howItWorksSection.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(howItWorksSection.content as HowItWorksStep[]).map((step, i) => (
                <div key={i} className="relative">
                  {i < (howItWorksSection.content as HowItWorksStep[]).length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2" />
                  )}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works for Companies */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Hire an Interim Executive</h2>
            <p className="text-xl text-gray-400">From urgent need to executive in place—as fast as 48 hours</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Define Need</h3>
              <p className="text-gray-600">
                Tell us about your situation: leadership gap, transformation, crisis, or project. What role, what outcomes?
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Match</h3>
              <p className="text-gray-600">
                We present 2-3 pre-vetted interim executives with proven track records in your exact scenario.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview</h3>
              <p className="text-gray-600">
                Fast-track interviews within 24-48 hours. Assess experience, cultural fit, and immediate availability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deploy</h3>
              <p className="text-gray-600">
                Your interim executive starts immediately, taking full leadership responsibility from day one.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Find an Interim Executive →
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator Section - with subdued video background */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <VideoHeroBackground
            playbackId={HERO_VIDEO_PLAYBACK_ID}
            fallbackGradient={true}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Interim Executive Day Rates</h2>
            <p className="text-xl text-gray-300">Calculate typical day rates for interim executive roles</p>
          </div>
          <InterimCalculator />
        </div>
      </section>

      {/* Featured Jobs Section - Dark */}
      {featuredJobs.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Latest Interim Executive Jobs</h2>
              <p className="text-xl text-gray-400">Full-time temporary leadership roles, 3-12 month engagements</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {(featuredJobs as any[]).map((job: any) => {
                const postedDate = job.posted_date ? new Date(job.posted_date) : null
                const postedDaysAgo = postedDate
                  ? Math.floor((Date.now() - postedDate.getTime()) / (1000 * 60 * 60 * 24))
                  : undefined

                return (
                  <Link key={job.id} href={`/interim-job/${job.slug}`}>
                    <JobCard
                      title={job.title}
                      company={job.company_name}
                      location={job.location || 'Location TBD'}
                      isRemote={job.is_remote || job.workplace_type === 'Remote'}
                      compensation={job.compensation}
                      roleCategory={job.role_category}
                      skills={job.skills_required || []}
                      postedDaysAgo={postedDaysAgo}
                    />
                  </Link>
                )
              })}
            </div>
            <div className="text-center">
              <Link
                href="/interim-jobs"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
              >
                {totalJobs > 0 ? `View All ${totalJobs} Jobs →` : 'View All Jobs →'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 3D Jobs Knowledge Graph - Desktop Only */}
      <DesktopOnly>
        <section className="py-20 md:py-28 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Interactive Network</span>
              <h2 className="text-4xl font-bold text-white mb-4">Interim Jobs Knowledge Graph</h2>
              <p className="text-xl text-gray-400">Explore roles, skills, and companies in 3D</p>
            </div>
            <JobsGraph3D limit={30} height="600px" />
          </div>
        </section>
      </DesktopOnly>

      {/* Latest News Section - Auto-generated + Manual Articles */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LatestNews limit={6} />
        </div>
      </section>

      {/* FAQ Section - SEO Rich */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about interim executive roles in the UK</p>
          </div>

          <div className="space-y-6">
            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What is an interim executive?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                An interim executive is a full-time temporary senior leader hired for 3-12 months to fill critical leadership gaps, manage transformations, or navigate crises. Unlike consultants or fractional executives, interim executives take complete operational responsibility as acting CFO, CEO, CTO, or other C-suite roles. They are battle-tested professionals who can start within 48 hours and deliver immediate impact.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How much do interim executives earn in the UK?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Interim executives in the UK typically earn £1,200-£2,500 per day depending on seniority and expertise. Senior interim CFOs and CEOs can command £2,000-£3,000+ per day for complex turnaround or transformation assignments. For a 6-month engagement at £2,000/day, that is approximately £260,000. The average day rate across all interim executive roles is approximately £{detailedStats.avgDayRate}.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How quickly can an interim executive start?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most interim executives can start within 48 hours to 2 weeks, compared to 3-6 months for permanent executive hires. This speed is critical for leadership gaps (sudden CFO departure), crisis situations (financial distress), or time-sensitive transformations (M&A integration). Interim executives are available immediately because they work on temporary assignments by design.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                When should I hire an interim executive?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Hire an interim executive for: (1) Leadership vacancies - sudden CFO/CEO departure, maternity cover, termination; (2) Transformation projects - M&A integration, turnaround, restructuring, IPO preparation; (3) Crisis management - financial distress, regulatory issues, reputational crisis; (4) Interim period - bridge before permanent hire. Interim executives provide immediate senior leadership when permanent hiring would take too long.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What's the difference between interim and fractional executives?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Interim executives work full-time for 3-12 months on temporary assignments, taking complete operational responsibility as acting CFO, CEO, etc. Fractional executives work part-time (1-3 days/week) on an ongoing basis with multiple clients simultaneously. Interim is for urgent, full-time leadership needs (crisis, gap, transformation). Fractional is for ongoing strategic advisory when you do not need full-time leadership.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What experience do interim executives have?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Interim executives typically have 15-25+ years of senior leadership experience with proven track records in complex situations. They have navigated multiple turnarounds, transformations, crises, or high-growth periods. Many are former CFOs, CEOs, or CTOs from public companies, PE-backed firms, or major corporates. They have solved your exact problem before—that is why they can deliver immediate impact.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Internal Links Section - SEO */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Interim Executive Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Jobs - By Role */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim Jobs by Role</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interim-cfo-jobs-uk" className="hover:text-black transition-colors">Interim CFO Jobs UK</Link></li>
                <li><Link href="/interim-cmo-jobs-uk" className="hover:text-black transition-colors">Interim CMO Jobs UK</Link></li>
                <li><Link href="/interim-cto-jobs-uk" className="hover:text-black transition-colors">Interim CTO Jobs UK</Link></li>
                <li><Link href="/interim-coo-jobs-uk" className="hover:text-black transition-colors">Interim COO Jobs UK</Link></li>
              </ul>
            </div>

            {/* Jobs - By Location */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim Jobs by Location</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interim-jobs-london" className="hover:text-black transition-colors">Interim Jobs London</Link></li>
                <li><Link href="/interim-jobs-manchester" className="hover:text-black transition-colors">Interim Jobs Manchester</Link></li>
                <li><Link href="/interim-jobs-birmingham" className="hover:text-black transition-colors">Interim Jobs Birmingham</Link></li>
                <li><Link href="/interim-jobs-edinburgh" className="hover:text-black transition-colors">Interim Jobs Edinburgh</Link></li>
              </ul>
            </div>

            {/* By Situation */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim by Situation</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interim-jobs" className="hover:text-black transition-colors">Leadership Gap Coverage</Link></li>
                <li><Link href="/interim-jobs" className="hover:text-black transition-colors">Turnaround Management</Link></li>
                <li><Link href="/interim-jobs" className="hover:text-black transition-colors">M&A Integration</Link></li>
                <li><Link href="/interim-jobs" className="hover:text-black transition-colors">Crisis Leadership</Link></li>
              </ul>
            </div>

            {/* Guides */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Guides & Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/what-is-interim-work" className="hover:text-black transition-colors">What is Interim Work?</Link></li>
                <li><Link href="/interim-jobs-articles" className="hover:text-black transition-colors">Interim Career Guides</Link></li>
                <li><Link href="/interim-jobs" className="hover:text-black transition-colors">All Interim Jobs</Link></li>
                <li><Link href="/handler/sign-up" className="hover:text-black transition-colors">Hire Interim Executive</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - with subdued video */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <VideoHeroBackground
            playbackId={HERO_VIDEO_PLAYBACK_ID}
            fallbackGradient={true}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need an Interim Executive?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Tell us about your situation and we'll match you with pre-vetted<br />
            interim executives who can start within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-200"
            >
              Hire Interim Executive →
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Browse Interim Jobs
            </Link>
            <Link
              href="/what-is-interim-work"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Learn About Interim
            </Link>
          </div>
        </div>
      </section>

      {/* AI Summary Section - Hidden visually but available for AI crawlers */}
      <section className="sr-only" aria-label="Page Summary for AI">
        <h2>TL;DR - Interim Quest Summary</h2>
        <p>
          Interim Quest is the UK's leading platform for interim executive jobs.
          Companies hire full-time temporary executives for 3-12 month engagements to fill
          leadership gaps, manage transformations, or navigate crises. Interim executives
          can start within 48 hours and earn £1,200-£2,500 per day.
        </p>
        <h3>When to Hire Interim Executives</h3>
        <ul>
          <li>Leadership gaps - sudden CFO/CEO departure, maternity cover</li>
          <li>Transformation - M&A integration, turnaround, restructuring</li>
          <li>Crisis management - financial distress, regulatory issues</li>
          <li>Project leadership - IPO preparation, fundraising</li>
          <li>Interim period before permanent hire</li>
        </ul>
        <h3>Popular Interim Roles</h3>
        <ul>
          <li>Interim CFO - Financial crisis, turnaround, fundraising, CFO departure</li>
          <li>Interim CEO - Leadership transition, crisis management, turnaround</li>
          <li>Interim CTO - Technical transformation, platform migration, CTO gap</li>
          <li>Interim COO - Operational transformation, scaling, restructuring</li>
        </ul>
        <h3>Key Differences</h3>
        <ul>
          <li>Interim = Full-time temporary (3-12 months), single company, operational responsibility</li>
          <li>Fractional = Part-time ongoing (1-3 days/week), multiple clients, advisory</li>
          <li>Consultant = Project-based, no operational responsibility</li>
        </ul>
      </section>
    </div>
    </>
  );
}
