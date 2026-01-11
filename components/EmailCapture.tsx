'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  variant?: 'inline' | 'sidebar' | 'banner'
  title?: string
  description?: string
  buttonText?: string
  className?: string
  accentColor?: 'emerald' | 'teal' | 'amber' | 'purple' | 'gray'
}

const colorClasses = {
  emerald: {
    gradient: 'from-emerald-600 to-teal-700',
    bg: 'bg-emerald-600',
    text: 'text-emerald-700',
    light: 'text-emerald-100',
    lighter: 'text-emerald-200',
    border: 'focus:ring-emerald-500',
    button: 'bg-emerald-600 hover:bg-emerald-700',
  },
  teal: {
    gradient: 'from-teal-600 to-cyan-700',
    bg: 'bg-teal-600',
    text: 'text-teal-700',
    light: 'text-teal-100',
    lighter: 'text-teal-200',
    border: 'focus:ring-teal-500',
    button: 'bg-teal-600 hover:bg-teal-700',
  },
  amber: {
    gradient: 'from-amber-600 to-orange-700',
    bg: 'bg-amber-600',
    text: 'text-amber-700',
    light: 'text-amber-100',
    lighter: 'text-amber-200',
    border: 'focus:ring-amber-500',
    button: 'bg-amber-600 hover:bg-amber-700',
  },
  purple: {
    gradient: 'from-purple-600 to-indigo-700',
    bg: 'bg-purple-600',
    text: 'text-purple-700',
    light: 'text-purple-100',
    lighter: 'text-purple-200',
    border: 'focus:ring-purple-500',
    button: 'bg-purple-600 hover:bg-purple-700',
  },
  gray: {
    gradient: 'from-gray-700 to-gray-900',
    bg: 'bg-gray-800',
    text: 'text-gray-700',
    light: 'text-gray-300',
    lighter: 'text-gray-400',
    border: 'focus:ring-gray-500',
    button: 'bg-gray-800 hover:bg-gray-900',
  },
}

export function EmailCapture({
  variant = 'inline',
  title = 'Get Interim Job Alerts',
  description = 'Be the first to know about new interim executive opportunities.',
  buttonText = 'Subscribe',
  className = '',
  accentColor = 'emerald'
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const colors = colorClasses[accentColor]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    // Simulate API call - replace with actual newsletter signup
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thanks! You\'ll receive interim job alerts soon.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-gradient-to-br ${colors.gradient} rounded-xl p-6 text-white ${className}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📬</span>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className={`${colors.light} text-sm mb-4`}>{description}</p>

        {status === 'success' ? (
          <div className="bg-white/20 rounded-lg p-3 text-center">
            <span className="text-green-200">✓</span> {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full bg-white ${colors.text} font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50`}
            >
              {status === 'loading' ? 'Subscribing...' : buttonText}
            </button>
          </form>
        )}

        <p className={`text-xs ${colors.lighter} mt-3`}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className={`${colors.bg} py-4 px-6 ${className}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <span className="font-semibold">{title}</span>
            <span className={`hidden md:inline ${colors.light} ml-2`}>{description}</span>
          </div>

          {status === 'success' ? (
            <span className="text-green-200">✓ {message}</span>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`bg-white ${colors.text} font-semibold px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 whitespace-nowrap`}
              >
                {status === 'loading' ? '...' : buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }

  // Default: inline variant
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-xl p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">📬</span>
        <h3 className="font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-700 text-sm">
          ✓ {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={`flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 ${colors.border} focus:border-transparent`}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`${colors.button} text-white font-semibold px-6 py-2.5 rounded-lg transition-colors disabled:opacity-50`}
          >
            {status === 'loading' ? '...' : buttonText}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2">{message}</p>
      )}
    </div>
  )
}
