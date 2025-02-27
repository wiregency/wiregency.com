import NotFoundContent from '@/components/NotFoundContent';

type Props = {
  params: Promise<{ locale: string }>
};

export default async function Custom404({ params }: Props) {
  const { locale } = await params;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <NotFoundContent locale={locale} />
      </div>
    </div>
  );
} 