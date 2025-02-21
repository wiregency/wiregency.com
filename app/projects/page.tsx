'use client';

import { projects } from "@/config/projects";
import CreationCard from "@/components/CreationCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 pt-40 pb-16 md:pt-48 md:pb-24">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter"
          >
            Projects
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-zinc-400 text-lg md:text-xl">
              Each initiative we create is a reflection of our commitment to excellence, designed to inspire and promote success.
            </p>
          </motion.div>
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <CreationCard 
                creation={project} 
                isProject={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}