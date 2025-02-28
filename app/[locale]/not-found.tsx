'use client';

import NotFoundContent from '@/components/NotFoundContent';
import { useParams } from 'next/navigation';

export default function NotFound() {
  const params = useParams();
  const locale = params.locale as string;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <NotFoundContent locale={locale} />
      </div>
    </div>
  );
} 