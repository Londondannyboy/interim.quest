'use client'

import { useState } from 'react'

export function InterimCalculator() {
  const [dayRate, setDayRate] = useState(1500)
  const [contractLength, setContractLength] = useState(6) // months

  const daysPerWeek = 5 // Full-time
  const weeksPerMonth = 4.33
  const monthlyEarnings = dayRate * daysPerWeek * weeksPerMonth
  const totalEarnings = monthlyEarnings * contractLength

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Interim Earnings Calculator
        </h3>
        <p className="text-gray-600">
          See how much you could earn as an interim executive on a full-time temporary assignment
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Day Rate Slider */}
        <div>
          <label htmlFor="day-rate" className="block text-sm font-medium text-gray-700 mb-2">
            Day Rate
          </label>
          <div className="text-3xl font-bold text-gray-900 mb-2" aria-live="polite">
            {formatCurrency(dayRate)}
          </div>
          <input
            id="day-rate"
            type="range"
            min="1200"
            max="2500"
            step="50"
            value={dayRate}
            onChange={(e) => setDayRate(Number(e.target.value))}
            aria-label={`Day rate: ${formatCurrency(dayRate)}`}
            aria-valuemin={1200}
            aria-valuemax={2500}
            aria-valuenow={dayRate}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>£1,200</span>
            <span>£2,500</span>
          </div>
        </div>

        {/* Contract Length */}
        <div>
          <label htmlFor="contract-length" className="block text-sm font-medium text-gray-700 mb-2">
            Contract Length (Full-Time)
          </label>
          <div className="text-3xl font-bold text-gray-900 mb-2" aria-live="polite">
            {contractLength} months
          </div>
          <input
            id="contract-length"
            type="range"
            min="3"
            max="12"
            step="1"
            value={contractLength}
            onChange={(e) => setContractLength(Number(e.target.value))}
            aria-label={`Contract length: ${contractLength} months`}
            aria-valuemin={3}
            aria-valuemax={12}
            aria-valuenow={contractLength}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>3 months</span>
            <span>12 months</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl">
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">Monthly Earnings</div>
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(monthlyEarnings)}
          </div>
          <div className="text-xs text-gray-500 mt-1">5 days/week full-time</div>
        </div>
        <div className="text-center border-l border-gray-300">
          <div className="text-sm text-gray-600 mb-1">Total Contract Value</div>
          <div className="text-3xl font-bold text-gray-900">
            {formatCurrency(totalEarnings)}
          </div>
          <div className="text-xs text-gray-500 mt-1">{contractLength} month contract</div>
        </div>
      </div>

      <p className="text-xs text-gray-600 text-center mt-4">
        Based on full-time interim assignment ({daysPerWeek} days/week). Typical interim contracts run 3-12 months.
      </p>
    </div>
  )
}
