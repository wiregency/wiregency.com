'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/config/faq';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {faqItems.map((faq, index) => (
        <div
          key={index}
          className="bg-zinc-900/50 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-4 sm:p-6 flex items-center justify-between text-left"
          >
            <h3 className="text-base sm:text-lg font-semibold pr-4">
              {t(faq.questionKey)}
            </h3>
            <ChevronDown
              className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-200 ${
              openIndex === index
                ? 'max-h-[500px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-zinc-400">
              {t(faq.answerKey)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}