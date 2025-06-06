import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { projects } from '@/config/projects';
import ProjectContent from './ProjectContent';

interface Props {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug, locale } = await params;
  
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  try {
    const markdownContent = fs.readFileSync(
      path.join(process.cwd(), `content/projects/${locale}/${slug}.md`),
      'utf-8'
    );

    const result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkHtml)
      .process(markdownContent);

    const contentHtml = result.toString();

    return <ProjectContent project={project} contentHtml={contentHtml} />;
  } catch (error) {
    console.error(`Error loading project content: ${error}`);
    notFound();
  }
}