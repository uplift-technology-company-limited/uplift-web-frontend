'use client'

import { useEffect, useState } from 'react'
import { List } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from rendered DOM instead of markdown
    // This ensures IDs match what rehypeSlug generates
    const extractHeadingsFromDOM = () => {
      const articleElement = document.querySelector('.prose')
      if (!articleElement) return []

      const headingElements = articleElement.querySelectorAll('h2, h3')
      const extractedHeadings: Heading[] = []

      headingElements.forEach((element) => {
        const id = element.id
        const text = element.textContent || ''
        const tagName = element.tagName.toLowerCase()
        const level = tagName === 'h2' ? 2 : 3

        if (id && text) {
          extractedHeadings.push({ id, text, level })
        }
      })

      return extractedHeadings
    }

    // Wait for MDX to render
    const timer = setTimeout(() => {
      const extractedHeadings = extractHeadingsFromDOM()
      setHeadings(extractedHeadings)
    }, 100)

    return () => clearTimeout(timer)
  }, [content])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="p-6 rounded-xl border border-border bg-card space-y-4">
      <div className="flex items-center gap-2">
        <List className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Table of Contents</h3>
      </div>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{
              paddingLeft: `${(heading.level - 2) * 1}rem`,
            }}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left w-full py-1 hover:text-primary transition-colors ${
                activeId === heading.id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
