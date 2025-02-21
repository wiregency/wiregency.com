"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-zinc-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Wiregency. {t('Footer.rights')}
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              href="https://discord.wiregency.com" 
              target="_blank"
              className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              {t('Footer.discord')}
            </Link>
            <Link 
              href={`/${locale}/legal`}
              className="text-zinc-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              {t('Footer.legal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}