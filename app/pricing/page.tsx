
'use client';

import { Check, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Add interface for plan types
interface Plan {
  name: string;
  price: string;
  description: string;
  features?: { name: string; included: boolean; }[];
  customLayout?: boolean;
}

export default function PricingPage() {
  const [isCommercial, setIsCommercial] = useState(false);

  const plans: Plan[] = [
    {
      name: "Azuriom Theme",
      price: isCommercial ? "300" : "200",
      description: "Premium theme for your Azuriom CMS",
      features: [
        { name: "Responsive Design", included: true },
        { name: "Compatible with Azuriom plugins", included: true },
        { name: "Theme updates with Azuriom versions", included: true },
        { name: "4 Months Support", included: true },
        { name: "Installation Service", included: true },
      ],
    },
    {
      name: "Custom Solution",
      price: "Custom",
      description: "Tailored web development for your business",
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
            Our services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            From ready-to-use themes to custom development
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
                    {!plan.customLayout && <span className="text-zinc-400 text-sm mr-1">Starting at</span>}
                    <span className="text-3xl font-bold">€{plan.price}</span>
                    <span className="text-zinc-400">EUR</span>
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
                      <span className="text-sm text-zinc-400">Custom web design service</span>
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
                      Get Started
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </motion.a>

                </>
              ) : (
                // New layout for Custom Solution
                <>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm mb-8">{plan.description}</p>
                  
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white">What's included:</h4>
                      <p className="text-zinc-400">Every project is unique and includes:</p>
                      <ul className="list-disc list-inside text-zinc-300 space-y-2 ml-2">
                        <li>Personalized consultation</li>
                        <li>Custom design & development</li>
                        <li>Ongoing project updates</li>
                        <li>Technical support</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-medium text-white">How it works:</h4>
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-sm">1</span>
                          <p className="text-zinc-300">Initial consultation to understand your needs</p>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-sm">2</span>
                          <p className="text-zinc-300">Detailed proposal and quote</p>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-sm">3</span>
                          <p className="text-zinc-300">Development and regular updates</p>
                        </li>
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
                      Start Discussion
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