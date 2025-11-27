'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { Tag } from 'lucide-react'

interface TagFilterProps {
  tags: string[]
  selectedTag?: string
  onTagChange?: (tag: string) => void
  className?: string
}

export function TagFilter({ tags, selectedTag = 'All', onTagChange, className }: TagFilterProps) {
  const [activeTag, setActiveTag] = useState(selectedTag)

  const handleTagClick = (tag: string) => {
    setActiveTag(tag)
    onTagChange?.(tag)
  }

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <button
        onClick={() => handleTagClick('All')}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
          activeTag === 'All'
            ? 'bg-primary text-primary-foreground shadow-md'
            : 'bg-card text-card-foreground hover:bg-muted border border-border'
        )}
      >
        <Tag className="w-4 h-4" />
        All
        <span className="ml-1 px-2 py-0.5 rounded-full text-xs bg-background/20">
          {tags.length}
        </span>
      </button>

      {tags
        .filter((tag) => tag !== 'All')
        .map((tag) => (
          <motion.button
            key={tag}
            onClick={() => handleTagClick(tag)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeTag === tag
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-card text-card-foreground hover:bg-muted border border-border'
            )}
          >
            {tag}
          </motion.button>
        ))}
    </div>
  )
}
