import { redirect } from 'next/navigation'

// Redirect /cfo to the SEO-optimized /interim-cfo-jobs-uk
export default function CfoRedirect() {
  redirect('/interim-cfo-jobs-uk')
}
