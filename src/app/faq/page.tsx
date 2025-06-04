'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // ⬅️ import this
import NavBar from '../components/navbar';

export default function FaqPage() {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/TomPatterson9/gildedrp/refs/heads/master/public/faq.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error('Error loading FAQ markdown:', err));
  }, []);

  return (
    <>
      <NavBar />

      <div className="text-center my-12 px-6 md:px-32">
        <h1 className="text-4xl font-bold text-yellow-400">Frequently Asked Questions</h1>
        <hr className="h-px my-8 bg-yellow-500 border-0" />
        <h2 className="mt-2 text-sm text-amber-200">Everything you need to know about Gilded RP</h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 prose prose-invert text-amber-100 prose-a:text-yellow-400 hover:prose-a:text-yellow-300">
  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
    {markdown}
  </ReactMarkdown>
</div>
    </>
  );
}
