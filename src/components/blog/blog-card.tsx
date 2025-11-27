'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Tag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface BlogCardProps {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  thumbnail?: string
  featured?: boolean
  className?: string
}

export function BlogCard({
  slug,
  title,
  description,
  date,
  readTime,
  tags,
  thumbnail,
  featured = false,
  className,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(className)}
    >
      <Link
        href={`/th/solutions/${slug}`}
        className="group block relative h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Thumbnail */}
        {thumbnail ? (
          <div className="relative w-full h-48 lg:h-56 overflow-hidden bg-muted">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center">
            <svg
              className="w-16 h-16 text-muted-foreground/20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-xl ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300 pointer-events-none" />
      </Link>
    </motion.div>
  )
}
