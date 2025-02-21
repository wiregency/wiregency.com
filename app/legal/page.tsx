import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import LegalContent from './LegalContent';

export default async function LegalPage() {
  const markdownContent = fs.readFileSync(
    path.join(process.cwd(), 'content/legal.md'),
    'utf-8'
  );

  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdownContent);

  const contentHtml = result.toString();

  return <LegalContent contentHtml={contentHtml} />;
}