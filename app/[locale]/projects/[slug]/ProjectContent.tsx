'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/config/projects";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface ProjectContentProps {
  project: Project;
  contentHtml: string;
}

export default function ProjectContent({ project, contentHtml }: ProjectContentProps) {
  const { locale } = useParams();
  const t = useTranslations();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`inline-block bg-${project.tag.color}-500/20 text-${project.tag.color}-300 px-2 py-0.5 rounded-full text-sm mb-4`}
            >
              {project.tag.text[locale as keyof typeof project.tag.text]}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              {project.title[locale as keyof typeof project.title]}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-zinc-400"
            >
              {project.description[locale as keyof typeof project.description]}
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="aspect-video mb-12 overflow-hidden rounded-xl relative group"
          >
            <img
              src={project.image}
              alt={project.title[locale as keyof typeof project.title]}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out backdrop-blur-[6px]"
              >
                <div className="px-6 py-3 rounded-full border border-white/20 flex items-center gap-2 text-white bg-black/20 hover:bg-black/40 transition-all duration-300 hover:-translate-y-0.5">
                  {t('Projects.viewProject')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            )}
          </motion.div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="prose prose-invert prose-headings:text-white prose-a:text-blue-400 max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}