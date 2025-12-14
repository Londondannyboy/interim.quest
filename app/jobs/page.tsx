import { redirect } from 'next/navigation'

// Redirect /jobs to the SEO-optimized /interim-jobs
export default function JobsRedirect() {
  redirect('/interim-jobs')
}
