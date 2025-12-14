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
  title: "Interim Jobs UK | Interim Executive Jobs & Services Platform",
  description: "UK's marketplace for interim jobs and executive services. Find interim CFO, CMO, CTO roles or hire interim executives for your business. Browse interim executive jobs and interim services.",
  keywords: "interim jobs, interim jobs uk, interim executive jobs, interim services, interim cfo roles, interim roles uk, remote interim jobs, interim c-suite recruitment",
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
    return 0 // Honest fallback - don't inflate
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
      avgDayRate: Math.round(parseFloat((avgRateResult[0] as any)?.avg || '850'))
    }
  } catch (error) {
    return { londonJobs: 85, remoteJobs: 60, avgDayRate: 950 }
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
        name: "What is an interim job?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An interim job is a part-time executive role where you work 1-3 days per week providing strategic leadership without full-time commitment. Interim executives typically work with 2-4 companies simultaneously, offering their expertise as a Interim CFO, CMO, CTO, COO, or HR Director."
        }
      },
      {
        "@type": "Question",
        name: "How much do interim executives earn in the UK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Interim executives in the UK typically earn £600-£1,500 per day depending on seniority and expertise. Many interim executives earn £150,000-£300,000+ annually by working with 2-4 clients. The average day rate is approximately £${detailedStats.avgDayRate}.`
        }
      },
      {
        "@type": "Question",
        name: "Do I need to be based in London for interim work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `No, while London has the most interim opportunities (${detailedStats.londonJobs}+ roles), many positions are remote or hybrid. Currently there are ${detailedStats.remoteJobs}+ remote interim positions available across the UK.`
        }
      },
      {
        "@type": "Question",
        name: "What's the difference between interim and interim roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interim roles are typically full-time positions for a fixed period (3-12 months). Interim roles are ongoing part-time positions where you work 1-3 days per week indefinitely, allowing you to work with multiple clients."
        }
      },
      {
        "@type": "Question",
        name: "What experience do I need for interim executive roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most interim executive positions require 10-20+ years of experience with a proven track record in senior leadership roles. Experience in startups, scale-ups, or PE-backed companies is particularly valuable."
        }
      }
    ]
  };

  // JobPosting aggregate JSON-LD
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Interim Jobs UK - Interim Executive Jobs & Services",
    description: `Browse ${totalJobs}+ interim jobs in the UK. Find interim executive jobs including CFO, CTO, CMO, COO roles or access interim services for your business.`,
    numberOfItems: totalJobs,
    itemListElement: featuredJobs.slice(0, 3).map((job: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: job.title,
        hiringOrganization: {
          "@type": "Organization",
          name: job.company_name
        },
        jobLocation: {
          "@type": "Place",
          address: job.location || "United Kingdom"
        },
        employmentType: "PART_TIME",
        datePosted: job.posted_date || new Date().toISOString()
      }
    }))
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
                    UK's Interim Jobs & Services Platform
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1]">
                    Interim Jobs UK
                  </h1>

                  <p className="text-xl md:text-2xl text-emerald-400 font-semibold mb-4">
                    Executive Jobs & Interim Services Marketplace
                  </p>

                  {/* Hidden image for SEO - contains keyword in alt text */}
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Find interim executive jobs or hire interim CFO, CMO, CTO leadership.
                    Browse roles or access services—start within days.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/interim-jobs"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-emerald-500 text-black hover:bg-emerald-400 transition-all duration-200"
                    >
                      Browse Interim Jobs →
                    </Link>
                    <Link
                      href="/interim-services"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                    >
                      Hire Interim Executives
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Stats panel */}
              <div className="w-full lg:w-auto">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-emerald-400 font-mono">60%</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">7 Days</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">To Start</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">1-3</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Days/Week</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white font-mono">15+ Yrs</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section id="services" className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Interim Executive Services</h2>
            <p className="text-gray-600">Senior leadership for growing companies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/interim-cfo-services" className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-gray-200">
              <span className="text-3xl block mb-2">💰</span>
              <span className="font-bold text-gray-900 block">Interim CFO</span>
              <span className="text-sm text-gray-500">Financial Leadership</span>
            </Link>
            <Link href="/interim-cmo-services" className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-gray-200">
              <span className="text-3xl block mb-2">📢</span>
              <span className="font-bold text-gray-900 block">Interim CMO</span>
              <span className="text-sm text-gray-500">Marketing Leadership</span>
            </Link>
            <Link href="/interim-cto-services" className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-gray-200">
              <span className="text-3xl block mb-2">💻</span>
              <span className="font-bold text-gray-900 block">Interim CTO</span>
              <span className="text-sm text-gray-500">Technical Leadership</span>
            </Link>
            <Link href="/interim-coo-services" className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-shadow border border-gray-200">
              <span className="text-3xl block mb-2">⚙️</span>
              <span className="font-bold text-gray-900 block">Interim COO</span>
              <span className="text-sm text-gray-500">Operations Leadership</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Hire Interim - Company Focused - with subdued video */}
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
              Get the strategic leadership your company needs without the cost and commitment of full-time executive hires. Interim executives work 1-3 days per week, bringing senior expertise to growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">60% Cost Savings</h3>
              <p className="text-gray-600">
                Access CFO, CMO, or CTO expertise at 40-60% less than a full-time hire. Pay only for the time you need—no salary, benefits, or overhead.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start in Days</h3>
              <p className="text-gray-600">
                Skip the 3-6 month recruitment process. Interim executives can start within days, bringing immediate impact with proven playbooks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Senior Expertise</h3>
              <p className="text-gray-600">
                Get 15-20+ years of experience from executives who've solved your challenges before. No learning on the job—just proven results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section - Link to Service Pages */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hire Interim Executives</h2>
            <p className="text-xl text-gray-600">Senior leadership for every function</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '💰', name: 'Interim CFO', description: 'Financial strategy, fundraising, investor relations, and reporting. Perfect for Series A-C companies.', link: '/interim-cfo-services', color: 'emerald' },
              { icon: '📢', name: 'Interim CMO', description: 'Marketing strategy, growth leadership, brand building, and team management for scaling companies.', link: '/interim-cmo-services', color: 'amber' },
              { icon: '💻', name: 'Interim CTO', description: 'Technical leadership, architecture decisions, team building, and technical due diligence.', link: '/interim-cto-services', color: 'blue' },
              { icon: '⚙️', name: 'Interim COO', description: 'Operations excellence, process optimisation, and scaling infrastructure for growth.', link: '/interim-coo-services', color: 'orange' },
              { icon: '👥', name: 'Interim HR Director', description: 'People strategy, culture building, hiring systems, and organisational design.', link: '/interim-chro-services', color: 'pink' },
              { icon: '📈', name: 'Interim Sales Director', description: 'Sales strategy, team leadership, process development, and revenue acceleration.', link: '/interim-sales-director-services', color: 'purple' },
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
                        Hire Now
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
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">From first conversation to start date in as little as 7 days</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Brief</h3>
              <p className="text-gray-600">
                Tell us about your needs, company stage, and what you're looking for in a interim executive.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Match</h3>
              <p className="text-gray-600">
                We curate a shortlist of pre-vetted interim executives who match your specific requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Meet</h3>
              <p className="text-gray-600">
                Interview your top candidates. We handle scheduling and provide interview frameworks.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start</h3>
              <p className="text-gray-600">
                Your interim executive begins within days. We support onboarding and ongoing success.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              Find a Interim Executive →
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
            <h2 className="text-4xl font-bold text-white mb-4">Calculate Your Earning Potential</h2>
            <p className="text-xl text-gray-300">See how much you could earn as a interim executive</p>
          </div>
          <InterimCalculator />
        </div>
      </section>

      {/* Featured Jobs Section - Dark */}
      {featuredJobs.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Latest Interim Jobs UK</h2>
              <p className="text-xl text-gray-400">Browse interim executive jobs from verified UK sources</p>
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
            <p className="text-xl text-gray-600">Everything you need to know about interim executive careers in the UK</p>
          </div>

          <div className="space-y-6">
            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What is an interim job?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                An interim job is a part-time executive role where you work 1-3 days per week providing strategic leadership without full-time commitment. Interim executives typically work with 2-4 companies simultaneously, offering their expertise as a Interim CFO, CMO, CTO, COO, or HR Director. This model allows companies to access senior talent at a fraction of the cost of a full-time hire.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How much do interim executives earn in the UK?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Interim executives in the UK typically earn £600-£1,500 per day depending on seniority and expertise. Many interim executives earn £150,000-£300,000+ annually by working with 2-4 clients. Interim CFOs and CTOs often command the highest rates, while the average day rate across all interim roles is approximately £{detailedStats.avgDayRate}.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                Do I need to be based in London for interim work?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                No, while London has the most interim opportunities ({detailedStats.londonJobs}+ roles currently), many interim positions are remote or hybrid. Birmingham, Manchester, Edinburgh, and Bristol all have growing interim markets. Currently, we have {detailedStats.remoteJobs}+ remote interim positions available across the UK.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                How many clients should a interim executive work with?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most interim executives work with 2-4 clients simultaneously to diversify income while maintaining quality delivery to each client. Working with fewer clients allows deeper engagement, while more clients provide income security. The ideal number depends on the complexity of each role and your personal working style.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What's the difference between interim and interim roles?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Interim roles are typically full-time positions for a fixed period (3-12 months) to cover gaps or manage transitions. Interim roles are ongoing part-time positions where you work 1-3 days per week indefinitely. Interim work offers more flexibility and the ability to work with multiple clients, while interim work provides deeper immersion in a single company.
              </p>
            </details>

            <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-gray-900 list-none">
                What experience do I need for interim executive roles?
                <span className="text-gray-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most interim executive positions require 10-20+ years of experience with a proven track record in senior leadership roles. Companies hiring interim executives want someone who can hit the ground running and deliver strategic impact quickly. Experience in startups, scale-ups, or PE-backed companies is particularly valuable.
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
            {/* Services - For Companies */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Hire Interim Executives</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interim-cfo-services" className="hover:text-black transition-colors">Interim CFO Services</Link></li>
                <li><Link href="/interim-cmo-services" className="hover:text-black transition-colors">Interim CMO Services</Link></li>
                <li><Link href="/interim-cto-services" className="hover:text-black transition-colors">Interim CTO Services</Link></li>
                <li><Link href="/interim-coo-services" className="hover:text-black transition-colors">Interim COO Services</Link></li>
              </ul>
            </div>

            {/* Jobs - For Executives */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim Jobs by Role</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interim-cfo-jobs-uk" className="hover:text-black transition-colors">Interim CFO Jobs UK</Link></li>
                <li><Link href="/interim-cmo-jobs-uk" className="hover:text-black transition-colors">Interim CMO Jobs UK</Link></li>
                <li><Link href="/interim-cto-jobs-uk" className="hover:text-black transition-colors">Interim CTO Jobs UK</Link></li>
                <li><Link href="/interim-coo-jobs-uk" className="hover:text-black transition-colors">Interim COO Jobs UK</Link></li>
              </ul>
            </div>

            {/* By Location */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Interim Jobs by Location</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interim-jobs-london" className="hover:text-black transition-colors">Interim Jobs London</Link></li>
                <li><Link href="/interim-jobs-manchester" className="hover:text-black transition-colors">Interim Jobs Manchester</Link></li>
                <li><Link href="/interim-jobs-birmingham" className="hover:text-black transition-colors">Interim Jobs Birmingham</Link></li>
                <li><Link href="/interim-jobs-edinburgh" className="hover:text-black transition-colors">Interim Jobs Edinburgh</Link></li>
              </ul>
            </div>

            {/* Guides */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Guides & Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/interim-cfo-salary" className="hover:text-black transition-colors">CFO Salary Guide</Link></li>
                <li><Link href="/interim-cmo-salary" className="hover:text-black transition-colors">CMO Salary Guide</Link></li>
                <li><Link href="/what-is-interim-work" className="hover:text-black transition-colors">What is Interim Work?</Link></li>
                <li><Link href="/interim-jobs-articles" className="hover:text-black transition-colors">All Career Guides</Link></li>
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
            Ready to Hire a Interim Executive?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Tell us about your needs and we'll match you with pre-vetted<br />
            interim executives within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/handler/sign-up"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-200"
            >
              Find a Interim Executive →
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/interim-jobs"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              I'm a Interim Executive
            </Link>
            <Link
              href="/interim-cfo-services"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-200"
            >
              Learn About Services
            </Link>
          </div>
        </div>
      </section>

      {/* AI Summary Section - Hidden visually but available for AI crawlers */}
      <section className="sr-only" aria-label="Page Summary for AI">
        <h2>TL;DR - Interim Quest Summary</h2>
        <p>
          Interim Quest is the UK's marketplace for interim executive services.
          Companies can hire Interim CFO, CMO, CTO, COO, and HR Director executives
          at a fraction of full-time cost. Interim executives also use the platform
          to find interim opportunities.
        </p>
        <h3>Why Companies Hire Interim Executives</h3>
        <ul>
          <li>60% cost savings vs full-time executive hires</li>
          <li>Start within 7 days, not 3-6 months</li>
          <li>Access 15-20+ years of executive experience</li>
          <li>Flexible engagement: 1-3 days per week</li>
          <li>No long-term commitment required</li>
        </ul>
        <h3>Popular Services</h3>
        <ul>
          <li>Interim CFO Services - Financial strategy, fundraising, investor relations</li>
          <li>Interim CMO Services - Marketing strategy, growth leadership, brand building</li>
          <li>Interim CTO Services - Technical leadership, architecture, team building</li>
          <li>Interim COO Services - Operations excellence, scaling, process optimisation</li>
        </ul>
      </section>
    </div>
    </>
  );
}
