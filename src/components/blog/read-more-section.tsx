'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { BlogPost } from '@/lib/blog'
import { motion } from 'motion/react'

interface ReadMoreSectionProps {
  posts: BlogPost[]
  lang: string
}

export function ReadMoreSection({ posts, lang }: ReadMoreSectionProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              {lang === 'th' ? 'อ่านต่อ' : 'Read More'}
            </h2>
            <Link
              href={`/${lang}/solutions`}
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300"
            >
              <span>{lang === 'th' ? 'ดูทั้งหมด' : 'View All'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${lang}/solutions/${post.slug}`}
                  className="group block h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  {post.thumbnail && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <time>{post.date}</time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
