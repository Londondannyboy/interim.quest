import { redirect } from 'next/navigation'

// Redirect /hr to the SEO-optimized /interim-hr-jobs-uk
export default function HrRedirect() {
  redirect('/interim-hr-jobs-uk')
}
