'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFoundContent({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <div className="max-w-md text-center space-y-6 md:space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
      >
        {t('NotFound.title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl text-zinc-400"
      >
        {t('NotFound.description')}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-2 md:pt-4"
      >
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 transition-all rounded-full py-2.5 sm:py-3 px-5 sm:px-6 text-sm sm:text-base font-medium"
        >
          {t('NotFound.action')}
        </Link>
      </motion.div>
    </div>
  );
} 