'use client'

import CreationCard from "@/components/CreationCard";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import FAQ from "@/components/FAQ";
import { motion, useInView } from "framer-motion";
import { projects } from "@/config/projects";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const creationsRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const isCreationsInView = useInView(creationsRef, { once: true, amount: 0.2 });
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  const latestProjects = projects.slice(0, 3);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 min-h-[90vh] md:h-screen flex items-center justify-center py-20 md:py-0 relative">
          <div className="max-w-3xl text-center space-y-6 md:space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
            >
              Your ideas have no limits.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-xl mx-auto px-4 sm:px-0"
            >
              We design solutions tailored to your needs, from web applications to web design, your projects are in good hands.
            </motion.p>

            <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="pt-2 md:pt-4">
              <a
                href="https://discord.wiregency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 transition-all rounded-full py-3 md:py-4 px-6 md:px-8 font-medium text-base md:text-lg"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <a href="#creations" className="text-zinc-400 hover:text-white transition-colors">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </a>
          </motion.div>
        </div>

        {/* Creations Section */}
        <div ref={creationsRef} id="creations" className="scroll-mt-8 container mx-auto px-4 py-16 md:py-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isCreationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          >
            Latest Work
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isCreationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {latestProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isCreationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <CreationCard 
                  creation={project}
                  isProject={true}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCreationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8 md:mt-12"
          >
            <Link 
              href="/projects"
              className="group inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 transition-all rounded-full py-2.5 sm:py-3 px-5 sm:px-6 text-sm sm:text-base font-medium"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto"
              >
                Find answers to the most common questions about our services.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FAQ />
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className="container mx-auto px-4 py-12 md:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto bg-zinc-900/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12"
          >
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4"
              >
                Interested?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-zinc-400 text-sm sm:text-base mb-6 sm:mb-8"
              >
                Contact us now to discuss your project in detail. Our team will help you bring your vision to life and provide you with a free quote tailored to your needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href="https://discord.wiregency.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-blue-400 text-black hover:bg-blue-500 transition-all rounded-full py-2.5 sm:py-3 px-5 sm:px-6 text-sm sm:text-base font-medium"
                >
                  <span>Join Discord</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
