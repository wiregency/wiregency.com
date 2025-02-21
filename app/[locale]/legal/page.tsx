import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { notFound } from 'next/navigation';
import LegalContent from './LegalContent';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;

  try {
    const markdownContent = fs.readFileSync(
      path.join(process.cwd(), `content/legal/${locale}/legal.md`),
      'utf-8'
    );

    const result = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkHtml)
      .process(markdownContent);

    const contentHtml = result.toString();

    return <LegalContent contentHtml={contentHtml} />;
  } catch (error) {
    console.error(`Error loading legal content: ${error}`);
    notFound();
  }
}