import { redirect } from 'next/navigation'

// Redirect /cmo to the SEO-optimized /interim-cmo-jobs-uk
export default function CmoRedirect() {
  redirect('/interim-cmo-jobs-uk')
}
