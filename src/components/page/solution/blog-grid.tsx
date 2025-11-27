'use client'

import { useState, useMemo } from 'react'
import { motion } from 'motion/react'
import { BlogCard } from '@/components/blog/blog-card'
import { TagFilter } from '@/components/blog/tag-filter'
import { SearchBar } from '@/components/blog/search-bar'
import { BlogPost } from '@/lib/blog'
import { Sparkles } from 'lucide-react'

interface BlogGridProps {
  posts: BlogPost[]
  featuredPosts: BlogPost[]
  tags: string[]
  initialTag?: string
  initialSearch?: string
  lang: string
}

export function BlogGrid({
  posts,
  featuredPosts,
  tags,
  initialTag = 'All',
  initialSearch = '',
  lang,
}: BlogGridProps) {
  const [selectedTag, setSelectedTag] = useState(initialTag)
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Tag filter
      const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag)

      // Search filter
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      return matchesTag && matchesSearch
    })
  }, [posts, selectedTag, searchTerm])

  const content = {
    th: {
      featured: 'บทความแนะนำ',
      allArticles: 'บทความทั้งหมด',
      noResults: 'ไม่พบบทความที่ตรงกับการค้นหา',
      tryDifferent: 'ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น',
    },
    en: {
      featured: 'Featured Articles',
      allArticles: 'All Articles',
      noResults: 'No articles found',
      tryDifferent: 'Try different search terms or select another category',
    },
  }

  const text = content[lang as keyof typeof content] || content.th

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Featured Section */}
        {featuredPosts.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <h2 className="text-3xl font-bold">{text.featured}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  readTime={post.readTime}
                  tags={post.tags}
                  thumbnail={post.thumbnail}
                  featured={post.featured}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Articles Section */}
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">{text.allArticles}</h2>

            {/* Search Bar */}
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder={lang === 'th' ? 'ค้นหาบทความ...' : 'Search articles...'}
            />

            {/* Tag Filter */}
            <TagFilter tags={tags} selectedTag={selectedTag} onTagChange={setSelectedTag} />
          </div>

          {/* Results */}
          {filteredPosts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    readTime={post.readTime}
                    tags={post.tags}
                    thumbnail={post.thumbnail}
                    featured={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-muted-foreground">{text.noResults}</h3>
                <p className="text-sm text-muted-foreground">{text.tryDifferent}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
