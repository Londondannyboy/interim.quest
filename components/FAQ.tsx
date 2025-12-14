'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  className?: string
}

export function FAQ({ items, title = 'Frequently Asked Questions', className = '' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className={`${className}`}>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              <span className="flex-shrink-0 ml-4">
                <svg
                  className={`w-5 h-5 text-purple-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// Pre-defined FAQ sets for common pages
export const CMO_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim CMO?',
    answer: 'An Interim CMO (Chief Marketing Officer) is a senior marketing executive who works full-time with a company on a temporary basis, typically for 3-12 months. Unlike fractional CMOs who work part-time across multiple clients, interim CMOs are embedded full-time to lead during critical periods such as leadership transitions, turnarounds, market expansions, or post-acquisition integrations.',
  },
  {
    question: 'How much do Interim CMO jobs pay in the UK?',
    answer: 'Interim CMO day rates in the UK typically range from £1,200 to £2,500 per day, depending on experience, industry complexity, and the urgency of the engagement. These are full-time roles (5 days/week), so monthly earnings range from £24,000-£50,000. Engagements typically last 3-12 months, with total engagement values of £75,000-£600,000.',
  },
  {
    question: 'What qualifications do I need for Interim CMO jobs?',
    answer: 'Interim CMO roles require 15-20+ years of marketing experience with extensive senior leadership experience. Key requirements include a proven track record of leading through change, crisis management or turnaround experience, expertise in specific marketing transformations (digital transformation, rebrand, market entry), strong team leadership during transitions, and the ability to deliver results quickly in challenging environments.',
  },
  {
    question: 'How long do Interim CMO engagements last?',
    answer: 'Most Interim CMO engagements last 3-12 months, with 6 months being typical. The duration depends on the specific mandate - leadership gap coverage might be 3-6 months, turnarounds 6-9 months, and transformations or M&A integrations 9-12 months. Engagements can be extended if additional work is identified.',
  },
  {
    question: 'What industries hire Interim CMOs in the UK?',
    answer: 'Industries with high interim CMO demand include Private Equity-backed companies (for portfolio company turnarounds), B2B SaaS (for growth pivots), Retail and E-commerce (for digital transformations), Financial Services (for regulatory-driven changes), and companies undergoing M&A. Any sector experiencing significant change, crisis, or transition hires interim CMOs.',
  },
  {
    question: 'What is the difference between an Interim CMO and a Fractional CMO?',
    answer: 'An Interim CMO works full-time (5 days/week) for a single client on a temporary basis (3-12 months), typically earning £1,200-£2,500/day. They address urgent needs like leadership gaps or turnarounds. A Fractional CMO works part-time (1-3 days/week) across multiple clients on an ongoing basis, earning £700-£1,400/day. Interim is full-time temporary; fractional is part-time ongoing.',
  },
]

export const CFO_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim CFO?',
    answer: 'An Interim CFO (Chief Financial Officer) is a senior finance executive who works full-time with a company on a temporary basis, typically for 3-12 months. They are brought in to manage critical financial situations such as restructuring, insolvency risk, pre-IPO preparation, post-acquisition integration, or to cover sudden CFO departures while a permanent replacement is found.',
  },
  {
    question: 'How much do Interim CFO jobs pay in the UK?',
    answer: 'Interim CFO day rates in the UK typically range from £1,200 to £2,500 per day, with complex restructuring or PE-backed turnarounds at the higher end. These are full-time engagements (5 days/week), translating to monthly earnings of £24,000-£50,000. Total engagement values typically range from £75,000-£600,000 depending on duration and complexity.',
  },
  {
    question: 'What qualifications do I need for Interim CFO jobs?',
    answer: 'Interim CFOs typically need ACA, ACCA, or CIMA qualifications plus 15-20+ years of senior finance experience. Critical requirements include turnaround or restructuring experience, crisis management skills, M&A integration expertise, experience navigating insolvency or distressed situations, and the ability to quickly assess financial situations and implement remedial action. PE or Big 4 backgrounds are common.',
  },
  {
    question: 'What do Interim CFOs do?',
    answer: 'Interim CFOs handle critical financial situations: managing cash crises and liquidity, leading restructuring or turnarounds, preparing companies for sale or IPO, integrating acquisitions, implementing financial controls during crises, managing lender or investor relationships during difficulties, building or rebuilding finance teams, and providing stability during leadership transitions. They are problem-solvers in high-pressure situations.',
  },
]

export const CTO_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim CTO?',
    answer: 'An Interim CTO (Chief Technology Officer) is a senior technology executive who works full-time with a company on a temporary basis, typically for 3-12 months. They are brought in to handle critical technical situations such as major technology transformations, post-acquisition technology integration, cyber security incidents, platform migrations, or to stabilize engineering teams during leadership transitions.',
  },
  {
    question: 'How much do Interim CTO jobs pay in the UK?',
    answer: 'Interim CTO day rates in the UK typically range from £1,200 to £2,500 per day, with complex transformations, security incidents, or specialized domains (AI, fintech) at the higher end. These are full-time roles (5 days/week), so monthly earnings range from £24,000-£50,000. Engagements typically last 3-12 months depending on the technical mandate.',
  },
  {
    question: 'When should a company hire an Interim CTO?',
    answer: 'Companies hire Interim CTOs for urgent technical situations: sudden CTO departure requiring immediate coverage, major platform migration or technology transformation, post-acquisition technology integration, cyber security incidents or major technical failures, scaling engineering teams rapidly during growth, preparing technology for due diligence (sale/IPO), or stabilizing troubled engineering organizations. Interim CTOs address crisis and change.',
  },
]

export const COO_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim COO?',
    answer: 'An Interim COO (Chief Operating Officer) is a senior operations executive who works full-time with a company on a temporary basis, typically for 3-12 months. They are brought in to manage operational crises, lead major operational transformations, integrate acquisitions, restructure operations during turnarounds, or stabilize operations during leadership transitions.',
  },
  {
    question: 'How much do Interim COO jobs pay in the UK?',
    answer: 'Interim COO day rates in the UK typically range from £1,200 to £2,500 per day, depending on the complexity of the operational challenge. These are full-time engagements (5 days/week), translating to monthly earnings of £24,000-£50,000. Complex turnarounds, PE-backed transformations, or large-scale integrations command premium rates.',
  },
  {
    question: 'What does an Interim COO do?',
    answer: 'Interim COOs handle critical operational situations: leading operational turnarounds and restructuring, integrating operations post-acquisition, implementing major operational transformations, managing operational crises (supply chain failures, quality issues), rapidly scaling operations during growth phases, building or rebuilding operational teams and systems, and providing operational stability during C-suite transitions. They are change agents in high-pressure environments.',
  },
]

// Location-based FAQs
export const LONDON_FAQS: FAQItem[] = [
  {
    question: 'How much do interim executives earn in London?',
    answer: 'London interim executives typically earn £1,200-£2,500 per day for full-time engagements. These are temporary roles lasting 3-12 months at a single client. Complex turnarounds, PE-backed mandates, or specialized crises (cyber security, insolvency) command the highest rates. Total engagement values typically range from £75,000-£600,000.',
  },
  {
    question: 'Which London areas have the most interim jobs?',
    answer: 'The City of London and Canary Wharf have the highest concentration of interim roles, particularly in financial services, PE-backed companies, and corporate turnarounds. Shoreditch/Tech City has interim opportunities in tech transformations and distressed startups. Westminster attracts government and regulatory-focused interim work.',
  },
  {
    question: 'Do I need to be based in London for interim roles?',
    answer: 'While London-based interim roles require full-time presence (5 days/week on-site is common), many interim executives live outside London and secure short-term accommodation during engagements. The intensity and temporary nature (3-12 months) make this approach viable. Remote work is rare for interim roles due to their crisis/change nature.',
  },
  {
    question: 'What industries hire interim executives in London?',
    answer: 'Private Equity-backed portfolio companies lead interim hiring (for turnarounds and value creation), followed by Financial Services (restructuring, regulatory change), Professional Services (transformation), Retail (distressed situations), and Technology (post-acquisition integration, turnarounds). London\'s mature market means more crisis and change mandates.',
  },
  {
    question: 'How competitive is the London interim market?',
    answer: 'London has the highest concentration of interim opportunities in the UK but also the most experienced candidates. Success requires a strong track record in turnarounds, transformations, or crisis management, plus networks with PE firms, turnaround boutiques, and executive search firms. Specialized expertise (restructuring, M&A, specific industries) is essential.',
  },
]

export const MANCHESTER_FAQS: FAQItem[] = [
  {
    question: 'How much do interim executives earn in Manchester?',
    answer: 'Manchester interim executives typically earn £1,000-£2,000 per day for full-time temporary engagements. While slightly lower than London rates, they remain substantial for crisis and transformation work. The lower cost of living means strong purchasing power, though many executives secure accommodation near clients during 3-12 month engagements.',
  },
  {
    question: 'What industries hire interim executives in Manchester?',
    answer: 'Manchester has strong interim demand in Retail (restructuring and transformation), Digital/E-commerce (turnarounds), Manufacturing (operational transformation), Media (cost reduction), and PE-backed portfolio companies across the North West. The region\'s concentration of mid-market companies creates steady interim demand.',
  },
  {
    question: 'Is Manchester a good base for interim work?',
    answer: 'Yes. Manchester offers excellent transport links for interim work across the North and Midlands, plus proximity to many PE firms and corporate headquarters. The city\'s mature business ecosystem generates interim opportunities in turnarounds, transformations, and leadership gaps. Many executives balance Manchester and London interim mandates.',
  },
]

export const BIRMINGHAM_FAQS: FAQItem[] = [
  {
    question: 'How much do interim executives earn in Birmingham?',
    answer: 'Birmingham interim executives typically earn £1,000-£2,000 per day for full-time temporary engagements. The Midlands market has substantial opportunities in manufacturing turnarounds, automotive transformations, and logistics restructuring - sectors that require interim crisis management and operational transformation expertise.',
  },
  {
    question: 'What sectors hire interim executives in Birmingham?',
    answer: 'Birmingham has strong interim demand in Manufacturing (restructuring, cost reduction), Automotive (transformation, supply chain), Logistics and Distribution (operational turnarounds), Professional Services (change management), and PE-backed industrial companies. The region\'s industrial base creates steady demand for operational interim executives during times of change.',
  },
]

// Industry-based FAQs
export const TECH_FAQS: FAQItem[] = [
  {
    question: 'How much do Interim CTOs earn in the UK?',
    answer: 'Interim CTOs in the UK typically earn £1,200-£2,500 per day for full-time temporary engagements. Those handling cyber security incidents, major cloud migrations, or post-acquisition technology integration command the highest rates. Engagements typically last 3-12 months, with total values of £75,000-£600,000 depending on complexity.',
  },
  {
    question: 'What experience do I need for interim tech roles?',
    answer: 'Interim tech leadership roles require 15-20+ years of experience with extensive crisis management or transformation delivery. Essential experience includes technology turnarounds, post-acquisition integration, platform migrations under pressure, cyber security incident response, or rescuing failed technology projects. Proven ability to stabilize troubled engineering organizations and deliver under pressure is critical.',
  },
  {
    question: 'Are interim tech roles mostly remote?',
    answer: 'No - interim tech roles typically require full-time on-site presence (5 days/week) due to their crisis or transformation nature. Major incidents, team stabilization, and rapid change require physical presence. Unlike fractional work, interim mandates are too urgent and complex for remote delivery. Some travel between sites may be required for multi-location companies.',
  },
  {
    question: 'What tech skills are most in demand for interim roles?',
    answer: 'Crisis and transformation skills are most valued: cyber security incident response, legacy platform migration, post-acquisition technology integration, cloud transformation under pressure, technical due diligence (buy-side and sell-side), rescuing failed projects, and rebuilding troubled engineering teams. Technical depth matters less than ability to diagnose problems quickly and drive change.',
  },
]

export const SAAS_FAQS: FAQItem[] = [
  {
    question: 'Why do SaaS companies hire interim executives?',
    answer: 'SaaS companies hire interim executives during critical transitions and crises: sudden executive departures, failed growth strategies requiring pivots, preparing for sale or acquisition, post-acquisition integration, major platform migrations, or turnarounds when burn rate exceeds growth. Interim executives provide full-time crisis leadership for 3-12 months during periods of urgent change.',
  },
  {
    question: 'What interim roles are most common in SaaS?',
    answer: 'Interim CFOs are most common (for preparing companies for sale, managing cash crises, or restructuring), followed by CTOs (for platform migrations, post-acquisition integration, or technical turnarounds) and CMOs (for growth pivots or preparing for exit). These are full-time roles during critical 3-12 month periods, not ongoing fractional arrangements.',
  },
  {
    question: 'What SaaS experience do interim roles require?',
    answer: 'SaaS interim roles require deep experience with SaaS turnarounds, sale preparation, post-acquisition integration, or major transformations. Essential skills include managing SaaS companies through crises (cash, churn, failed products), preparing companies for M&A, integrating acquisitions, or leading major pivots. Experience with distressed or PE-backed SaaS companies is highly valued.',
  },
]

export const FINANCE_FAQS: FAQItem[] = [
  {
    question: 'What interim roles are available in financial services?',
    answer: 'Financial services interim roles focus on regulatory change, crisis response, and transformation: Interim CFOs for restructuring or regulatory remediation, CTOs for cyber security incidents or technology transformation, Chief Risk Officers for regulatory breaches, and Compliance heads for FCA investigations. These are urgent, full-time mandates addressing crises or mandatory change programs.',
  },
  {
    question: 'Do I need financial services experience for these roles?',
    answer: 'Yes - financial services interim roles require deep sector experience, particularly in regulated environments. Essential requirements include FCA regulatory experience, managing regulatory investigations or enforcement actions, implementing remediation programs, crisis management in regulated contexts, or leading major compliance transformations. Big 4 or regulatory backgrounds are common.',
  },
]

export const HEALTHCARE_FAQS: FAQItem[] = [
  {
    question: 'What interim opportunities exist in healthcare?',
    answer: 'Healthcare interim roles address crisis and regulatory situations: Interim Chief Medical Officers for CQC failures or clinical governance issues, CEOs for failing NHS trusts or care providers, Finance Directors for financial recovery, and Operations Directors for service transformation or merger integration. These are full-time crisis and turnaround mandates in highly regulated environments.',
  },
  {
    question: 'What qualifications are needed for healthcare interim roles?',
    answer: 'Healthcare interim roles require extensive NHS or regulated healthcare experience, particularly in turnarounds, CQC/regulatory remediation, financial recovery, or service transformation. Clinical qualifications (for CMO/Medical Director roles) plus management experience are essential. Track record managing through CQC inspections, special measures, or financial crisis is highly valued.',
  },
]

export const ECOMMERCE_FAQS: FAQItem[] = [
  {
    question: 'What interim roles do ecommerce companies hire?',
    answer: 'Ecommerce and DTC brands hire interim executives during crises and transitions: Interim COOs for fulfilment failures or supply chain crises, CFOs for cash management or preparing for sale, CMOs for failing customer acquisition strategies, and CTOs for platform failures or migrations. These are full-time crisis mandates, not part-time growth support.',
  },
  {
    question: 'What skills are valued in ecommerce interim roles?',
    answer: 'Crisis and turnaround skills specific to ecommerce: managing cash flow crises with inventory, rescuing failed fulfilment operations, restructuring unprofitable DTC brands, preparing ecommerce businesses for sale, post-acquisition integration, platform migration under pressure, or pivoting failed growth strategies. Experience with distressed retail or PE-backed brands is highly valued.',
  },
]

export const STARTUPS_FAQS: FAQItem[] = [
  {
    question: 'When should a startup hire an interim executive?',
    answer: 'Startups hire interim executives during crises and critical transitions: sudden co-founder or executive departure, pivoting from a failing strategy, preparing for emergency fundraising, managing near-insolvency situations, preparing for acquisition, integrating an acquisition, or stabilizing operations after rapid scaling. These are full-time crisis roles (5 days/week), not part-time fractional support.',
  },
  {
    question: 'What do interim executives cost for startups?',
    answer: 'Interim executives cost £1,200-£2,500/day for full-time work (5 days/week). While expensive at £24,000-£50,000/month, this is for 3-12 month crisis periods where the alternative is company failure. Startups use interim executives for survival situations, not cost savings. Total engagement costs of £75,000-£600,000 are typical.',
  },
  {
    question: 'How do startups structure interim engagements?',
    answer: 'Startup interim engagements are full-time (5 days/week) for 3-12 months to address specific crises or transitions. Common structures: 3-6 months for leadership gap coverage, 6-9 months for turnarounds or pivots, 9-12 months for sale preparation or post-acquisition integration. Extensions occur if additional crisis work emerges, but interim is always temporary and full-time.',
  },
]

// Service-focused FAQs (for company/employer audience)
export const CFO_SERVICE_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim CFO?',
    answer: 'An Interim CFO is an experienced Chief Financial Officer who works with your company full-time on a temporary basis, typically for 3-12 months. They are brought in to manage financial crises, lead restructuring, prepare for sale/IPO, integrate acquisitions, or provide immediate CFO coverage after a sudden departure. This is full-time crisis leadership, not part-time ongoing support.',
  },
  {
    question: 'When should my company hire an Interim CFO?',
    answer: 'Hire an interim CFO for urgent financial situations: your CFO has suddenly left and you need immediate coverage; you\'re facing a cash crisis or insolvency risk; you\'re preparing for sale or IPO; you\'re restructuring or turning around; you\'re integrating an acquisition; you\'re navigating a major regulatory issue; or your lenders/PE owners demand immediate financial expertise.',
  },
  {
    question: 'How much does an Interim CFO cost?',
    answer: 'Interim CFOs charge £1,200-£2,500 per day in the UK for full-time work (5 days/week). Monthly costs are £24,000-£50,000. While expensive, this is for critical 3-12 month periods addressing crises or mandatory transitions. Total engagement costs typically range from £75,000-£600,000. The alternative to hiring an interim CFO is often company failure or missed opportunities.',
  },
  {
    question: 'What does an Interim CFO do?',
    answer: 'An Interim CFO handles critical financial situations: managing cash crises and covenant breaches, leading financial restructuring or turnarounds, preparing financial due diligence for sale/IPO, integrating acquisition finance functions, implementing emergency financial controls, managing difficult lender/investor relationships, rebuilding failed finance teams, and providing stability during financial transitions. They solve urgent financial problems.',
  },
  {
    question: 'How is an Interim CFO different from a Finance Director or Financial Controller?',
    answer: 'An Interim CFO is a crisis and transformation specialist who operates at board level on urgent situations like restructuring, sale preparation, or major transitions. They are temporary (3-12 months) and work full-time. Finance Directors and Financial Controllers are permanent operational roles. You hire an interim CFO when you need urgent C-level intervention, not ongoing operational finance.',
  },
  {
    question: 'How long do Interim CFO engagements typically last?',
    answer: 'Interim CFO engagements typically last 3-12 months depending on the mandate. Leadership gap coverage: 3-6 months. Restructuring or turnaround: 6-9 months. Sale/IPO preparation or M&A integration: 9-12 months. Engagements can extend if additional crisis work emerges, but interim roles are always temporary with defined end dates.',
  },
  {
    question: 'What should I look for when hiring an Interim CFO?',
    answer: 'Look for: proven turnaround or crisis management experience; relevant industry experience (your sector); specific expertise in your situation (restructuring, insolvency, M&A, IPO); professional qualifications (ACA, ACCA, CIMA); ability to work under pressure and deliver quickly; strong track record with PE firms, banks, or Big 4; and cultural resilience for difficult situations.',
  },
  {
    question: 'Can an Interim CFO help with preparing for sale?',
    answer: 'Yes—sale preparation is a common interim CFO mandate. They prepare financial due diligence, clean up historical issues, implement vendor due diligence processes, manage buyer DD inquiries, optimize working capital, address financial weaknesses that could derail sale, and ensure financial readiness. Many interim CFOs have prepared dozens of companies for successful exits.',
  },
]

export const CMO_SERVICE_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim CMO?',
    answer: 'An Interim CMO is an experienced Chief Marketing Officer who works with your company full-time on a temporary basis, typically for 3-12 months. They are brought in to handle marketing crises, lead major rebrand or repositioning, prepare for acquisition, pivot failing marketing strategies, or provide immediate CMO coverage after a sudden departure. This is full-time crisis and transformation leadership.',
  },
  {
    question: 'When should my company hire an Interim CMO?',
    answer: 'Hire an interim CMO for urgent marketing situations: your CMO has suddenly left; your marketing strategy has failed and you need a rapid pivot; you\'re preparing for sale and need to fix positioning/brand; you\'re post-acquisition and need marketing integration; you\'re rebranding or repositioning under pressure; or you need to rescue a major marketing transformation or product launch.',
  },
  {
    question: 'How much does an Interim CMO cost?',
    answer: 'Interim CMOs charge £1,200-£2,500 per day in the UK for full-time work (5 days/week). Monthly costs are £24,000-£50,000. While expensive, this is for critical 3-12 month periods addressing crises or major transformations. Total engagement costs typically range from £75,000-£600,000. The cost is justified when marketing failure threatens the business.',
  },
  {
    question: 'What does an Interim CMO do?',
    answer: 'An Interim CMO handles critical marketing situations: pivoting failed marketing strategies, leading major rebrand or repositioning, preparing marketing for due diligence (sale/IPO), integrating marketing post-acquisition, rescuing failed product launches or campaigns, rebuilding failed marketing teams, implementing marketing transformation, and providing stability during marketing leadership transitions. They solve urgent marketing problems.',
  },
  {
    question: 'How is an Interim CMO different from a marketing agency?',
    answer: 'An Interim CMO is a temporary full-time executive who takes complete ownership of marketing during crises or transitions. They make strategic decisions, manage teams, report to the board, and are accountable for results during critical periods. Agencies provide execution support. An interim CMO is crisis leadership; agencies are service providers.',
  },
  {
    question: 'What experience should an Interim CMO have?',
    answer: 'Look for: 15-20+ years of marketing experience with extensive crisis or transformation delivery; proven track record in turnarounds, major pivots, or rebrand; experience preparing companies for sale or integrating acquisitions; ability to diagnose failing marketing quickly and implement remedial action; team stabilization experience; and proven ability to deliver under pressure in difficult situations.',
  },
  {
    question: 'Can an Interim CMO work with my existing marketing team?',
    answer: 'Yes—interim CMOs often inherit troubled or demoralized marketing teams and must quickly stabilize them. They assess team capability, address performance issues, implement new structures, make difficult personnel decisions if needed, and provide direction during chaos. They excel at team stabilization and rapid improvement in crisis environments.',
  },
  {
    question: 'How quickly can an Interim CMO make an impact?',
    answer: 'Interim CMOs must deliver quickly due to the crisis nature of engagements. Expect rapid assessment (1-2 weeks), immediate stabilization actions (weeks 2-4), and strategic pivot or transformation initiation (weeks 4-8). Unlike fractional CMOs who build gradually, interim CMOs are hired because speed is critical. Results must be visible within 30-60 days.',
  },
]

export const CTO_SERVICE_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim CTO?',
    answer: 'An Interim CTO is an experienced Chief Technology Officer who works with your company full-time on a temporary basis, typically for 3-12 months. They are brought in to handle technology crises, lead major platform migrations, integrate technology post-acquisition, respond to cyber security incidents, or provide immediate CTO coverage after a sudden departure. This is full-time crisis and transformation leadership.',
  },
  {
    question: 'When should my company hire an Interim CTO?',
    answer: 'Hire an interim CTO for urgent technology situations: your CTO has suddenly left; you\'ve suffered a major cyber security incident or breach; you\'re undertaking a critical platform migration; you\'re integrating technology post-acquisition; your technology function is failing and needs rapid turnaround; you\'re preparing technology for sale/IPO; or you\'ve had a major technical failure requiring immediate expert intervention.',
  },
  {
    question: 'How much does an Interim CTO cost?',
    answer: 'Interim CTOs charge £1,200-£2,500 per day in the UK for full-time work (5 days/week), with cyber security or complex transformations at the higher end. Monthly costs are £24,000-£50,000. Total engagement costs typically range from £75,000-£600,000 for 3-12 month mandates. The cost is justified when technology failure threatens the business.',
  },
  {
    question: 'What does an Interim CTO do?',
    answer: 'An Interim CTO handles critical technology situations: responding to and recovering from cyber security incidents, leading major platform migrations or technology transformations, integrating technology post-acquisition, rescuing failed technology projects, rebuilding failed engineering teams, preparing technology for due diligence (sale/IPO), implementing emergency security measures, and providing stability during technology leadership transitions. They solve urgent technology problems.',
  },
  {
    question: 'Can an Interim CTO help after a cyber security incident?',
    answer: 'Yes—cyber security incident response is a critical interim CTO mandate. They lead incident response, coordinate with security firms and forensics, implement remediation, manage regulatory reporting (ICO, etc.), rebuild security controls, stabilize affected systems, communicate with board/customers, and prevent recurrence. Many interim CTOs specialize in security crisis management.',
  },
  {
    question: 'What\'s the difference between an Interim CTO and a technical consultant?',
    answer: 'An Interim CTO is a temporary full-time executive who takes complete ownership of technology during crises or major transitions. They make all technology decisions, manage teams, report to the board, and are fully accountable. Technical consultants advise on specific problems. An interim CTO provides crisis leadership; consultants provide advice.',
  },
  {
    question: 'What experience should an Interim CTO have?',
    answer: 'Look for: 15-20+ years of engineering leadership with extensive crisis or transformation delivery; proven track record in technology turnarounds, major migrations, or incident response; experience with post-acquisition integration; ability to rapidly assess technology problems and implement fixes; security incident experience; team stabilization skills; and proven ability to deliver under extreme pressure.',
  },
  {
    question: 'How does an Interim CTO work with existing developers?',
    answer: 'Interim CTOs often inherit troubled or demoralized engineering teams. They quickly assess team capability, address performance issues, make difficult technical or personnel decisions, implement rapid changes to working practices, stabilize delivery, and provide direction during chaos. Unlike fractional CTOs who coach gradually, interim CTOs must stabilize and transform teams quickly.',
  },
]

export const CEO_FAQS: FAQItem[] = [
  {
    question: 'What does an interim CEO do?',
    answer: 'An interim CEO provides full-time executive leadership during critical transitions, crises, or transformations. They manage board and investor relations, lead turnarounds, oversee pre-acquisition or post-merger integration, handle crisis management situations, and provide bridge leadership between permanent CEOs. Interim CEOs take complete P&L accountability and strategic decision-making authority during 6-12 month mandates.',
  },
  {
    question: 'How much do interim CEOs earn in the UK?',
    answer: 'Interim CEOs in the UK typically earn £2,000-£3,500 per day for full-time work (5 days/week). This translates to £40,000-£70,000 monthly or £480,000-£840,000 annually. Rates vary based on company size, complexity, sector, and crisis severity. PE-backed turnarounds and public company mandates command premium rates. The average engagement lasts 6-12 months with total costs of £240,000-£840,000.',
  },
  {
    question: 'When should a company hire an interim CEO?',
    answer: 'Companies hire interim CEOs during leadership crises or critical transitions: sudden founder/CEO departure, PE/VC portfolio company turnarounds, pre-acquisition or post-merger leadership needs, financial or reputational crises, board-mandated leadership changes, or as a bridge to permanent CEO hire. Interim CEOs are brought in when immediate, experienced leadership is required and the company cannot afford a lengthy permanent recruitment process.',
  },
  {
    question: 'How long do interim CEO assignments last?',
    answer: 'Interim CEO assignments typically last 6-12 months. Leadership gap coverage or bridge roles: 3-6 months. Turnarounds and transformations: 6-9 months. Pre-acquisition preparation or post-merger integration: 9-12 months. Assignments can extend if additional crisis work emerges or permanent recruitment takes longer than expected, but interim CEO roles are always temporary with defined objectives and end dates.',
  },
]

export const COO_SERVICE_FAQS: FAQItem[] = [
  {
    question: 'What is an Interim COO?',
    answer: 'An Interim COO is an experienced Chief Operating Officer who works with your company full-time on a temporary basis, typically for 3-12 months. They are brought in to handle operational crises, lead major operational transformations, integrate operations post-acquisition, manage restructuring, or provide immediate COO coverage after a sudden departure. This is full-time crisis and transformation leadership.',
  },
  {
    question: 'When should my company hire an Interim COO?',
    answer: 'Hire an interim COO for urgent operational situations: your COO has suddenly left; you\'re facing operational crisis (supply chain failure, quality issues, delivery collapse); you\'re restructuring or turning around operations; you\'re integrating operations post-acquisition; you\'re undertaking major operational transformation; or your operations are failing and threatening the business.',
  },
  {
    question: 'How much does an Interim COO cost?',
    answer: 'Interim COOs charge £1,200-£2,500 per day in the UK for full-time work (5 days/week), with complex turnarounds or transformations at the higher end. Monthly costs are £24,000-£50,000. Total engagement costs typically range from £75,000-£600,000 for 3-12 month mandates. The cost is justified when operational failure threatens the business.',
  },
  {
    question: 'What does an Interim COO do?',
    answer: 'An Interim COO handles critical operational situations: managing operational crises (supply chain, quality, delivery failures), leading operational restructuring or turnarounds, integrating operations post-acquisition, implementing major operational transformations, rescuing failed operational projects, rebuilding failed operational teams, preparing operations for sale/IPO, and providing stability during operational leadership transitions. They solve urgent operational problems.',
  },
  {
    question: 'How is an Interim COO different from an Operations Manager?',
    answer: 'An Interim COO is a temporary full-time executive who takes complete ownership of operations during crises or major transitions. They operate at board level, make strategic decisions, manage across all functions, and are fully accountable. Operations Managers handle day-to-day execution. An interim COO provides crisis leadership; operations managers provide operational delivery.',
  },
  {
    question: 'What experience should an Interim COO have?',
    answer: 'Look for: 15-20+ years of operations leadership with extensive crisis or transformation delivery; proven track record in operational turnarounds, restructuring, or post-acquisition integration; experience managing supply chain, quality, or delivery crises; ability to rapidly diagnose operational problems and implement fixes; team stabilization skills; and proven ability to deliver under extreme pressure in difficult environments.',
  },
]
