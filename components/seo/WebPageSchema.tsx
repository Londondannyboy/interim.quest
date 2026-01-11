/**
 * WebPageSchema Component
 *
 * Adds JSON-LD WebPage schema with dateModified for SEO freshness signals.
 * Google uses this to determine the date shown in search snippets.
 */

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
  datePublished?: string  // ISO date string, defaults to site launch
  dateModified: Date      // The actual last update date
  itemCount?: number      // For list pages, number of items
}

export function WebPageSchema({
  title,
  description,
  url,
  datePublished = '2024-12-01T00:00:00Z',
  dateModified,
  itemCount,
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': title,
    'description': description,
    'url': url,
    'datePublished': datePublished,
    'dateModified': dateModified.toISOString(),
    'publisher': {
      '@type': 'Organization',
      'name': 'Interim Quest',
      'url': 'https://interim.quest'
    },
    ...(itemCount && {
      'mainEntity': {
        '@type': 'ItemList',
        'numberOfItems': itemCount
      }
    })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Helper to format date for display
 */
export function formatLastUpdated(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

/**
 * LastUpdatedBadge Component
 *
 * Displays a visible "Updated {date}" text for Google to detect.
 */
interface LastUpdatedBadgeProps {
  date: Date
  className?: string
}

export function LastUpdatedBadge({ date, className = '' }: LastUpdatedBadgeProps) {
  return (
    <span className={`text-xs ${className}`}>
      Updated {formatLastUpdated(date)}
    </span>
  )
}
