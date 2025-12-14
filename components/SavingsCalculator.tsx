'use client'

import { useState } from 'react'

const ROLE_DEFAULTS: Record<string, { salary: number; label: string; dayRate: number }> = {
  cto: { salary: 150000, label: 'CTO', dayRate: 1700 },
  cfo: { salary: 140000, label: 'CFO', dayRate: 1600 },
  cmo: { salary: 130000, label: 'CMO', dayRate: 1500 },
  coo: { salary: 135000, label: 'COO', dayRate: 1500 },
  ciso: { salary: 145000, label: 'CISO', dayRate: 1650 },
  chro: { salary: 125000, label: 'CHRO', dayRate: 1400 },
  cpo: { salary: 140000, label: 'CPO', dayRate: 1550 },
}

export function SavingsCalculator() {
  const [role, setRole] = useState('cto')
  const [fullTimeSalary, setFullTimeSalary] = useState(150000)
  const [contractMonths, setContractMonths] = useState(6)

  // Calculate costs - Full-time interim vs permanent
  const roleData = ROLE_DEFAULTS[role]
  const fullTimeTotalCost = fullTimeSalary * 1.35 // Include NI, benefits, overhead
  const daysPerWeek = 5 // Full-time interim
  const weeksPerMonth = 4.33
  const interimTotalCost = roleData.dayRate * daysPerWeek * weeksPerMonth * contractMonths
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

  const handleRoleChange = (newRole: string) => {
    setRole(newRole)
    setFullTimeSalary(ROLE_DEFAULTS[newRole].salary)
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-3xl shadow-2xl p-8 md:p-10 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Interim Executive Investment Calculator
        </h2>
        <p className="text-purple-200 text-lg">
          Compare full-time interim costs vs permanent hire for your specific timeframe
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-3">
              Select Executive Role
            </label>
            <div className="grid grid-cols-4 gap-2">
              {Object.entries(ROLE_DEFAULTS).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => handleRoleChange(key)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    role === key
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'bg-purple-700/50 text-purple-200 hover:bg-purple-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Full-Time Salary */}
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Permanent {ROLE_DEFAULTS[role].label} Salary (Base)
            </label>
            <div className="text-3xl font-bold mb-3">
              {formatCurrency(fullTimeSalary)}
            </div>
            <input
              type="range"
              min="80000"
              max="250000"
              step="5000"
              value={fullTimeSalary}
              onChange={(e) => setFullTimeSalary(Number(e.target.value))}
              className="w-full h-3 bg-purple-700 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-xs text-purple-300 mt-1">
              <span>£80k</span>
              <span>£250k</span>
            </div>
          </div>

          {/* Contract Length */}
          <div>
            <label className="block text-sm font-medium text-purple-200 mb-2">
              Interim Contract Length (Full-Time)
            </label>
            <div className="text-3xl font-bold mb-3">
              {contractMonths} months
            </div>
            <input
              type="range"
              min="3"
              max="12"
              step="1"
              value={contractMonths}
              onChange={(e) => setContractMonths(Number(e.target.value))}
              className="w-full h-3 bg-purple-700 rounded-lg appearance-none cursor-pointer accent-white"
            />
            <div className="flex justify-between text-xs text-purple-300 mt-1">
              <span>3 months</span>
              <span>12 months</span>
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-center mb-6">{contractMonths}-Month Cost Comparison</h3>

          {/* Permanent Cost */}
          <div className="bg-blue-500/20 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-purple-200">Permanent {ROLE_DEFAULTS[role].label}</div>
                <div className="text-xs text-purple-300">({contractMonths} months salary + benefits)</div>
              </div>
              <div className="text-2xl font-bold text-blue-300">
                {formatCurrency(permanentCostForPeriod)}
              </div>
            </div>
          </div>

          {/* Interim Cost */}
          <div className="bg-amber-500/20 rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-purple-200">Interim {ROLE_DEFAULTS[role].label}</div>
                <div className="text-xs text-purple-300">(£{roleData.dayRate}/day × 5 days × {contractMonths} months)</div>
              </div>
              <div className="text-2xl font-bold text-amber-300">
                {formatCurrency(interimTotalCost)}
              </div>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className={`${costDifference > 0 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-green-500 to-emerald-500'} rounded-xl p-5 text-center mt-6`}>
            <div className="text-sm font-medium text-white/90 mb-1">Investment Comparison</div>
            <div className="text-4xl font-bold text-white mb-1">
              {costDifference > 0 ? '+' : ''}{formatCurrency(Math.abs(costDifference))}
            </div>
            <div className="text-lg font-semibold text-white/90">
              {costDifference > 0
                ? `${costComparisonPercent}% premium for immediate expertise`
                : `${Math.abs(costComparisonPercent)}% less than permanent`}
            </div>
          </div>

          <p className="text-xs text-purple-300 text-center mt-4">
            Based on £{roleData.dayRate}/day {ROLE_DEFAULTS[role].label} rate (full-time, 5 days/week). Permanent includes 35% for NI, pension, benefits and overhead.
          </p>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mt-6 p-4 bg-purple-950/50 rounded-xl border border-purple-700/50">
        <p className="text-sm text-purple-200 text-center">
          <strong className="text-white">Why Interim?</strong> Get immediate access to senior expertise without long-term commitment.
          Perfect for transformation projects, crisis management, or bridging leadership gaps while you find the perfect permanent hire.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-6">
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-purple-100 transition-all shadow-lg hover:shadow-xl"
        >
          Find Your Interim Executive
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Beta Disclaimer */}
      <div className="mt-6 p-4 bg-purple-950/50 rounded-xl border border-purple-700/50">
        <p className="text-xs text-purple-300 text-center">
          <span className="inline-block bg-purple-700 text-purple-200 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mr-2">Beta</span>
          This calculator provides rough estimates for illustration only. Actual costs vary based on location, experience, benefits, and market conditions.
          Consult with a qualified accountant for accurate financial planning.
        </p>
      </div>
    </div>
  )
}
