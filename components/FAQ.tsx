'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/config/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((faq, index) => (
        <div
          key={index}
          className="bg-zinc-900/50 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-6 flex items-center justify-between text-left"
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <ChevronDown
              className={`w-5 h-5 transform transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-200 ${
              openIndex === index
                ? 'max-h-48 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <p className="px-6 pb-6 text-zinc-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}