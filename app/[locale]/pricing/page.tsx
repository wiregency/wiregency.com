'use client';

import { Check, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from 'next-intl';

interface Plan {
  name: string;
  price: string;
  description: string;
  features?: { name: string; included: boolean; }[];
  customLayout?: boolean;
}

export default function PricingPage() {
  const t = useTranslations();
  const [isCommercial, setIsCommercial] = useState(false);

  const plans: Plan[] = [
    {
      name: t('Pricing.plans.theme.name'),
      price: isCommercial ? "300" : "200",
      description: t('Pricing.plans.theme.description'),
      features: [
        { name: t('Pricing.plans.theme.features.responsive'), included: true },
        { name: t('Pricing.plans.theme.features.plugins'), included: true },
        { name: t('Pricing.plans.theme.features.updates'), included: true },
        { name: t('Pricing.plans.theme.features.support'), included: true },
        { name: t('Pricing.plans.theme.features.installation'), included: true },
      ],
    },
    {
      name: t('Pricing.plans.custom.name'),
      price: "Custom",
      description: t('Pricing.plans.custom.description'),
      customLayout: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 pt-40 pb-16 md:pt-48 md:pb-24">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            {t('Pricing.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            {t('Pricing.subtitle')}
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 h-fit"
            >
              {!plan.customLayout ? (
                <>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    {!plan.customLayout && <span className="text-zinc-400 text-sm mr-1">{t('Pricing.startingAt')}</span>}
                    <span className="text-3xl font-bold">€{plan.price}</span>
                    <span className="text-zinc-400">{t('Pricing.currency')}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>
                  
                  {index === 0 && (
                    <div className="flex items-center gap-3 mb-6 p-3 bg-zinc-800/50 rounded-lg">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={isCommercial}
                          onChange={(e) => setIsCommercial(e.target.checked)}
                        />
                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                      <span className="text-sm text-zinc-400">{t('Pricing.customDesign')}</span>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    {plan.features?.map((feature) => (
                      <div key={feature.name} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-zinc-200" : "text-zinc-500"}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href="https://discord.wiregency.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="mt-8 block w-full py-3 px-4 bg-gradient-to-r from-white to-zinc-100 text-black hover:shadow-lg hover:shadow-white/10 transition-all rounded-lg text-center font-medium group"
                  >
                    <motion.span 
                      className="flex items-center justify-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {t('Pricing.getStarted')}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </motion.a>
                </>
              ) : (
                // Custom Solution layout
                <>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm mb-8">{plan.description}</p>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white">{t('Pricing.plans.custom.included.title')}</h4>
                      <p className="text-zinc-400">{t('Pricing.plans.custom.included.subtitle')}</p>
                      <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-2">
                        {t.raw('Pricing.plans.custom.included.items').map((item: string, index: number) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white">{t('Pricing.plans.custom.process.title')}</h4>
                      <ol className="space-y-4">
                        {t.raw('Pricing.plans.custom.process.steps').map((step: string, index: number) => (
                          <li key={index} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-sm">{index + 1}</span>
                            <p className="text-zinc-300">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <motion.a
                    href="https://discord.wiregency.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="mt-8 block w-full py-3 px-4 bg-gradient-to-r from-white to-zinc-100 text-black hover:shadow-lg hover:shadow-white/10 transition-all rounded-lg text-center font-medium group"
                  >
                    <motion.span 
                      className="flex items-center justify-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {t('Pricing.startDiscussion')}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </motion.a>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}