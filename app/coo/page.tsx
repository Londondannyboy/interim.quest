import { redirect } from 'next/navigation'

// Redirect /coo to the SEO-optimized /interim-coo-jobs-uk
export default function CooRedirect() {
  redirect('/interim-coo-jobs-uk')
}
