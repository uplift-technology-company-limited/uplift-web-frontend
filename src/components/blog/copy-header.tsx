'use client'

import { Link2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CopyHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: number
  children?: React.ReactNode
}

function generateSlug(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
}

export function CopyHeader({ level, children, className, ...props }: CopyHeaderProps) {
  const text = typeof children === 'string' ? children : children?.toString() || ''
  const id = generateSlug(text)

  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  const copyToClipboard = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`

    // Update URL without page reload
    window.history.pushState({}, '', `#${id}`)

    // Scroll to element with offset
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }

    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(url)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const showCopyFunctionality = level === 1 || level === 2

  if (showCopyFunctionality) {
    return (
      <HeadingTag
        id={id}
        className={cn(
          'group relative scroll-mt-20 cursor-pointer hover:text-muted-foreground transition-colors duration-200 flex items-center gap-2',
          className
        )}
        onClick={copyToClipboard}
        title="Click to copy link to this section"
        {...props}
      >
        {children}
        <Link2 className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 text-primary" />
      </HeadingTag>
    )
  }

  return (
    <HeadingTag id={id} className={cn('scroll-mt-20', className)} {...props}>
      {children}
    </HeadingTag>
  )
}
