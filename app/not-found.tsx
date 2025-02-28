import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

// This ensures the root not-found uses the default locale
// and gets wrapped in the root layout
export default async function RootNotFound() {
  // Get the current path to extract locale
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1];
  
  // If we have a valid locale, use it, otherwise fallback to 'en'
  const targetLocale = ['en', 'fr'].includes(locale) ? locale : 'en';
  
  redirect(`/${targetLocale}/404`);
} 