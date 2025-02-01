import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function Legal() {
  const markdownContent = fs.readFileSync(
    path.join(process.cwd(), 'content/legal.md'),
    'utf-8'
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert prose-headings:text-white prose-a:text-blue-400 max-w-none">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}