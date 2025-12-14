'use client'

import { useState } from 'react'

// Role-specific defaults based on UK interim market data
const ROLE_DEFAULTS: Record<string, {
  label: string
  avgDayRate: number
  avgSalary: number
  minDayRate: number
  maxDayRate: number
  color: string
  colorDark: string
}> = {
  cmo: {
    label: 'CMO',
    avgDayRate: 1500,
    avgSalary: 130000,
    minDayRate: 1200,
    maxDayRate: 2200,
    color: 'amber',
    colorDark: 'amber-600',
  },
  cfo: {
    label: 'CFO',
    avgDayRate: 1600,
    avgSalary: 145000,
    minDayRate: 1300,
    maxDayRate: 2400,
    color: 'emerald',
    colorDark: 'emerald-600',
  },
  cto: {
    label: 'CTO',
    avgDayRate: 1700,
    avgSalary: 155000,
    minDayRate: 1400,
    maxDayRate: 2500,
    color: 'blue',
    colorDark: 'blue-600',
  },
  coo: {
    label: 'COO',
    avgDayRate: 1500,
    avgSalary: 140000,
    minDayRate: 1200,
    maxDayRate: 2300,
    color: 'orange',
    colorDark: 'orange-600',
  },
  ciso: {
    label: 'CISO',
    avgDayRate: 1650,
    avgSalary: 150000,
    minDayRate: 1300,
    maxDayRate: 2400,
    color: 'red',
    colorDark: 'red-600',
  },
  chro: {
    label: 'CHRO',
    avgDayRate: 1400,
    avgSalary: 125000,
    minDayRate: 1200,
    maxDayRate: 2000,
    color: 'pink',
    colorDark: 'pink-600',
  },
  cpo: {
    label: 'CPO',
    avgDayRate: 1550,
    avgSalary: 145000,
    minDayRate: 1300,
    maxDayRate: 2200,
    color: 'purple',
    colorDark: 'purple-600',
  },
}

interface RoleCalculatorProps {
  role: keyof typeof ROLE_DEFAULTS
  className?: string
}

type ViewMode = 'candidate' | 'employer'

export function RoleCalculator({ role, className = '' }: RoleCalculatorProps) {
  const roleData = ROLE_DEFAULTS[role] || ROLE_DEFAULTS.cmo
  const [mode, setMode] = useState<ViewMode>('candidate')

  // Candidate calculator state
  const [dayRate, setDayRate] = useState(roleData.avgDayRate)
  const [contractLength, setContractLength] = useState(6) // months

  // Employer calculator state
  const [fullTimeSalary, setFullTimeSalary] = useState(roleData.avgSalary)
  const [contractMonths, setContractMonths] = useState(6)

  // Candidate calculations - Full-time interim
  const daysPerWeek = 5
  const weeksPerMonth = 4.33
  const monthlyEarnings = dayRate * daysPerWeek * weeksPerMonth
  const totalContractValue = monthlyEarnings * contractLength

  // Employer calculations - Compare interim to full-time permanent
  const fullTimeTotalCost = fullTimeSalary * 1.35 // Include NI, benefits, overhead
  const interimTotalCost = dayRate * daysPerWeek * weeksPerMonth * contractMonths
  const permanentCostForPeriod = (fullTimeTotalCost / 12) * contractMonths
  const costDifference = interimTotalCost - permanentCostForPeriod
  const costComparisonPercent = Math.round((costDifference / permanentCostForPeriod) * 100)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className={`bg-black text-white overflow-hidden ${className}`}>
      {/* Tabs */}
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setMode('candidate')}
          className={`flex-1 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
            mode === 'candidate'
              ? 'bg-amber-500 text-black'
              : 'bg-gray-900 text-gray-400 hover:text-white'
          }`}
        >
          I'm a {roleData.label} - How Much Can I Earn?
        </button>
        <button
          onClick={() => setMode('employer')}
          className={`flex-1 px-6 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
            mode === 'employer'
              ? 'bg-amber-500 text-black'
              : 'bg-gray-900 text-gray-400 hover:text-white'
          }`}
        >
          I'm Hiring - What's The Cost?
        </button>
      </div>

      <div className="p-8">
        {mode === 'candidate' ? (
          /* Candidate View */
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Interim {roleData.label} Earnings</span>
              <h3 className="text-2xl font-black mt-1">Calculate Your Full-Time Interim Income</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Day Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Day Rate
                </label>
                <div className="text-3xl font-black text-amber-400 mb-3">
                  {formatCurrency(dayRate)}
                </div>
                <input
                  type="range"
                  min={roleData.minDayRate}
                  max={roleData.maxDayRate}
                  step="50"
                  value={dayRate}
                  onChange={(e) => setDayRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>£{roleData.minDayRate}</span>
                  <span className="text-amber-500">Avg: £{roleData.avgDayRate}</span>
                  <span>£{roleData.maxDayRate}</span>
                </div>
              </div>

              {/* Contract Length */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Contract Length (Full-Time)
                </label>
                <div className="text-3xl font-black text-white mb-3">
                  {contractLength} months
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="1"
                  value={contractLength}
                  onChange={(e) => setContractLength(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3 months</span>
                  <span>12 months</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-gray-900 border border-gray-800">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Monthly</div>
                <div className="text-2xl font-bold text-white">
                  {formatCurrency(monthlyEarnings)}
                </div>
                <div className="text-xs text-gray-500 mt-1">5 days/week</div>
              </div>
              <div className="text-center border-l border-gray-800">
                <div className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Total Contract</div>
                <div className="text-3xl font-black text-amber-400">
                  {formatCurrency(totalContractValue)}
                </div>
                <div className="text-xs text-gray-500 mt-1">{contractLength} months</div>
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-4">
              Based on full-time interim assignment (5 days/week). {roleData.label} UK average interim day rate: £{roleData.avgDayRate}.
            </p>
          </div>
        ) : (
          /* Employer View */
          <div>
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Interim {roleData.label} Investment</span>
              <h3 className="text-2xl font-black mt-1">Compare Interim vs Permanent Costs</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                {/* Full-Time Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full-Time Permanent {roleData.label} Salary (Base)
                  </label>
                  <div className="text-3xl font-black text-white mb-3">
                    {formatCurrency(fullTimeSalary)}
                  </div>
                  <input
                    type="range"
                    min="80000"
                    max="250000"
                    step="5000"
                    value={fullTimeSalary}
                    onChange={(e) => setFullTimeSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>£80k</span>
                    <span className="text-amber-500">Avg: £{(roleData.avgSalary / 1000).toFixed(0)}k</span>
                    <span>£250k</span>
                  </div>
                </div>

                {/* Contract Length */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Interim Contract Length (Full-Time)
                  </label>
                  <div className="text-3xl font-black text-white mb-3">
                    {contractMonths} months
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    step="1"
                    value={contractMonths}
                    onChange={(e) => setContractMonths(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3 months</span>
                    <span>12 months</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gray-900 border border-gray-800 p-6 space-y-4">
                <h4 className="text-lg font-bold text-center mb-4 text-gray-400 uppercase tracking-wider">{contractMonths}-Month Cost Comparison</h4>

                {/* Permanent Cost */}
                <div className="bg-blue-900/30 border border-blue-900/50 p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400">Permanent {roleData.label}</div>
                      <div className="text-xs text-gray-500">({contractMonths} months salary + benefits)</div>
                    </div>
                    <div className="text-2xl font-bold text-blue-400">
                      {formatCurrency(permanentCostForPeriod)}
                    </div>
                  </div>
                </div>

                {/* Interim Cost */}
                <div className="bg-amber-900/30 border border-amber-900/50 p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400">Interim {roleData.label}</div>
                      <div className="text-xs text-gray-500">(£{roleData.avgDayRate}/day × 5 days × {contractMonths} months)</div>
                    </div>
                    <div className="text-2xl font-bold text-amber-400">
                      {formatCurrency(interimTotalCost)}
                    </div>
                  </div>
                </div>

                {/* Cost Comparison */}
                <div className={`${costDifference > 0 ? 'bg-amber-500' : 'bg-emerald-500'} text-black p-5 text-center mt-4`}>
                  <div className="text-sm font-bold uppercase tracking-wider mb-1">Investment Comparison</div>
                  <div className="text-4xl font-black mb-1">
                    {costDifference > 0 ? '+' : ''}{formatCurrency(Math.abs(costDifference))}
                  </div>
                  <div className="text-lg font-bold">
                    {costDifference > 0
                      ? `${costComparisonPercent}% premium for immediate expertise`
                      : `${Math.abs(costComparisonPercent)}% less than permanent hire`}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-900 border border-gray-800 rounded">
              <p className="text-xs text-gray-400">
                <strong className="text-white">Value Beyond Cost:</strong> Interim executives provide immediate impact, specialized expertise for specific challenges, and no long-term commitment. Average interim {roleData.label} day rate: £{roleData.avgDayRate} (full-time, 5 days/week).
              </p>
            </div>
          </div>
        )}

        {/* Beta Disclaimer */}
        <div className="mt-6 p-4 bg-gray-900 border border-gray-800 rounded">
          <p className="text-xs text-gray-500 text-center">
            <span className="inline-block bg-amber-500 text-black px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mr-2">Beta</span>
            This calculator provides rough estimates for illustration only. Actual rates and salaries vary based on location, experience, industry, and market conditions.
            Consult with a qualified accountant for accurate financial planning.
          </p>
        </div>
      </div>
    </div>
  )
}

export { ROLE_DEFAULTS }
