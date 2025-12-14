import { redirect } from 'next/navigation'

// Redirect /cto to the SEO-optimized /interim-cto-jobs-uk
export default function CtoRedirect() {
  redirect('/interim-cto-jobs-uk')
}
