import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  featured?: boolean
  readTime: string
  author: string
  authorImage?: string
  thumbnail?: string
  content: string
}

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  tags?: string[]
  featured?: boolean
  author?: string
  authorImage?: string
  thumbnail?: string
}

const BLOG_PATH = path.join(process.cwd(), 'src/content/blog')

/**
 * Get all blog post slugs
 */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_PATH)) {
    return []
  }

  const files = fs.readdirSync(BLOG_PATH)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

/**
 * Get a single blog post by slug
 */
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_PATH, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const frontmatter = data as BlogFrontmatter

    // Calculate reading time
    const stats = readingTime(content)

    return {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      tags: frontmatter.tags || [],
      featured: frontmatter.featured || false,
      readTime: stats.text,
      author: frontmatter.author || 'Uplift Team',
      authorImage: frontmatter.authorImage,
      thumbnail: frontmatter.thumbnail,
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs()
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return dateB - dateA
    })

  return posts
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.featured)
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.tags.includes(tag))
}

/**
 * Get all unique tags from blog posts
 */
export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tags = new Set<string>()

  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
}

/**
 * Get related blog posts based on tags (exclude current post)
 */
export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const currentPost = getBlogPost(slug)
  if (!currentPost) return []

  const allPosts = getAllBlogPosts()

  // Calculate relevance score based on shared tags
  const postsWithScore = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag))
      return {
        post,
        score: sharedTags.length,
      }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return postsWithScore.slice(0, limit).map((item) => item.post)
}

/**
 * Format date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format date string in Thai
 */
export function formatDateThai(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
