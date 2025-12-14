import { redirect } from 'next/navigation'

// Redirect /london to the canonical /interim-jobs-london URL
export default function LondonRedirect() {
  redirect('/interim-jobs-london')
}
