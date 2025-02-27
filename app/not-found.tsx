import { redirect } from 'next/navigation';

// This ensures the root not-found uses the default locale
// and gets wrapped in the root layout
export default function RootNotFound() {
  redirect('/en/404');
} 