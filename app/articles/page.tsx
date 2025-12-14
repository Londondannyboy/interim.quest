import { redirect } from 'next/navigation'

// Redirect /articles to the SEO-optimized /interim-jobs-articles
export default function ArticlesRedirect() {
  redirect('/interim-jobs-articles')
}
