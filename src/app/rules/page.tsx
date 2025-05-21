'use client'

import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import NavBar from '../components/navbar'

const RulesPage = () => {
  const [markdown, setMarkdown] = useState('')
  const [headings, setHeadings] = useState<string[]>([])

  useEffect(() => {
    const fetchMarkdown = async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/Inepsa/Gilded-RP-Rules/refs/heads/main/Gilded%20RP%20Rules.md'
      )
      const text = await res.text()
      setMarkdown(text)

      // Extract H1 headings
      const tree = unified().use(remarkParse).use(remarkFrontmatter).parse(text)
      const h1s: string[] = []
      for (const node of tree.children) {
        if (node.type === 'heading' && node.depth === 1) {
          const heading = node.children[0]
          if (heading.type === 'text') {
            let headingText = heading.value.substring(0,heading.value.length - 1)
            h1s.push(headingText)
          }
        }
      }
      setHeadings(h1s)
    }

    fetchMarkdown()
  }, [])

  function slugify(text: string) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // remove non-word characters
      .replace(/\s+/g, '-')     // replace spaces with hyphens
  }

  return (
    <>
    <NavBar />
    <div className="flex max-w-7xl mx-auto px-4 py-10 gap-12 scroll-smooth">
      {/* Sidebar */}
      <aside className="w-72 hidden md:block sticky top-24 h-fit">
        <div className="bg-amber-900 p-6 rounded-lg shadow-xl text-amber-100 space-y-4">

          <div className="sticky top-20 h-[80vh] overflow-y-auto pr-4">
  <h2 className="text-lg font-bold mb-3 text-amber-300">Categories</h2>
  {headings.map((heading) => (
    <a
      key={heading}
      href={`#${slugify(heading)}`}
      className="block py-1 px-2 text-amber-200 hover:text-white hover:bg-amber-800 rounded transition"
    >
      {heading}
    </a>
  ))}
</div>
        </div>
      </aside>

      {/* Markdown Content */}
      <main className="prose prose-invert max-w-none text-amber-100 prose-headings:text-amber-50 prose-p:text-amber-100 prose-a:text-amber-300">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSlug]}
          components={{
            h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-6" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold my-5" {...props} />,

            h3: ({ node, ...props }) => <h3 className="text-xl font-semibold my-4" {...props} />,
            h4: ({ node, ...props }) => <h4 className="text-lg font-semibold my-3" {...props} />,
            p: ({ node, ...props }) => <p className="text-base my-4" {...props} />,
            li: ({ node, ...props }) => <li className="ml-5 list-disc" {...props} />,
            a: ({ node, ...props }) => <a className="text-blue-500 underline" {...props} />,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </main>
    </div>
    </>
  )
}

export default RulesPage