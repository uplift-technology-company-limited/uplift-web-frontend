'use client'

import { cn } from '@/lib/utils'

export interface Author {
  name: string
  avatar: string
  position: string
  bio?: string
}

interface AuthorCardProps {
  author: Author
  className?: string
}

export function AuthorCard({ author, className }: AuthorCardProps) {
  return (
    <div className={cn('flex items-start gap-3', className)}>
      <img
        src={author.avatar}
        alt={author.name}
        className="rounded-full w-10 h-10 border-2 border-border object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground">{author.name}</h4>
        <p className="text-xs text-muted-foreground">{author.position}</p>
        {author.bio && <p className="text-xs text-muted-foreground mt-1">{author.bio}</p>}
      </div>
    </div>
  )
}
