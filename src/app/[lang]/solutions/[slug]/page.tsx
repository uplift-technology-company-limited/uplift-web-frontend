import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import Nav from '@/components/basic/nav/resnav'
import Footer from '@/components/layout/footer/footer'
import { getAllBlogSlugs, getBlogPost, getRelatedBlogPosts, formatDateThai } from '@/lib/blog'
import { TableOfContents } from '@/components/blog/table-of-contents'
import { CopyHeader } from '@/components/blog/copy-header'
import { AuthorCard } from '@/components/blog/author-card'
import { ReadMoreSection } from '@/components/blog/read-more-section'

interface BlogPostPageProps {
  params: Promise<{ lang: string; slug: string }>
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()

  // Generate for both languages
  return slugs.flatMap((slug) => [
    { lang: 'th', slug },
    { lang: 'en', slug },
  ])
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${post.title} | UPLIFTTECH`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.thumbnail
        ? [
            {
              url: post.thumbnail,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    alternates: {
      canonical: `/${lang}/solutions/${slug}`,
      languages: {
        en: `/en/solutions/${slug}`,
        th: `/th/solutions/${slug}`,
      },
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Get related posts
  const relatedPosts = getRelatedBlogPosts(slug, 3).map((p) => ({
    ...p,
    date: lang === 'th' ? formatDateThai(p.date) : p.date,
  }))

  const formattedDate = lang === 'th' ? formatDateThai(post.date) : post.date

  // MDX components with CopyHeader
  const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <CopyHeader level={1} {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <CopyHeader level={2} {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <CopyHeader level={3} {...props} />
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <CopyHeader level={4} {...props} />
    ),
    h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <CopyHeader level={5} {...props} />
    ),
    h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <CopyHeader level={6} {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a className="text-primary hover:underline" {...props} />
    ),
  }

  return (
    <>
      <Nav />
      <article className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border relative">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
            {/* Back Button */}
            <Link
              href={`/${lang}/solutions`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === 'th' ? 'กลับไปยังบทความทั้งหมด' : 'Back to all articles'}
            </Link>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${lang}/solutions?tag=${encodeURIComponent(tag)}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
              {post.title}
            </h1>

            {/* Description */}
            {post.description && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                {post.description}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              {post.author && (
                <AuthorCard
                  author={{
                    name: post.author,
                    avatar: post.authorImage || '/images/default-avatar.png',
                    position: 'Uplift Team',
                  }}
                />
              )}
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors ml-auto">
                <Share2 className="w-4 h-4" />
                {lang === 'th' ? 'แชร์' : 'Share'}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex gap-12">
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Thumbnail */}
              {post.thumbnail && (
                <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden mb-12 shadow-2xl">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:leading-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-snug prose-h2:border-b prose-h2:border-border prose-h2:pb-3
                prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:leading-snug
                prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-3 prose-h4:leading-snug
                prose-p:text-base prose-p:leading-relaxed prose-p:mb-5 prose-p:text-foreground/90
                prose-li:text-base prose-li:leading-relaxed prose-li:mb-2
                prose-ul:my-6 prose-ol:my-6 prose-ul:space-y-2 prose-ol:space-y-2
                prose-blockquote:text-lg prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:my-6
                prose-a:text-primary prose-a:font-medium prose-a:no-underline
                prose-strong:font-bold prose-strong:text-foreground
                prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
                prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6 prose-pre:overflow-x-auto
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-table:my-6 prose-table:border-collapse
                prose-th:border prose-th:border-border prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-border prose-td:p-3
                [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                <MDXRemote
                  source={post.content}
                  components={components}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeSlug,
                        [
                          rehypeAutolinkHeadings,
                          {
                            behavior: 'wrap',
                            properties: {
                              className: ['anchor'],
                            },
                          },
                        ],
                        [
                          rehypePrettyCode,
                          {
                            theme: 'github-dark',
                            keepBackground: false,
                          },
                        ],
                      ],
                    },
                  }}
                />
              </div>
            </main>

            {/* Sidebar - Desktop Only */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <TableOfContents content={post.content} />

                {/* Share Card */}
                <div className="p-6 rounded-xl border border-border bg-card space-y-4">
                  <h3 className="font-semibold">
                    {lang === 'th' ? 'แชร์บทความนี้' : 'Share this article'}
                  </h3>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm">
                      Twitter
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm">
                      Facebook
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm">
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && <ReadMoreSection posts={relatedPosts} lang={lang} />}
      </article>
      <Footer />
    </>
  )
}
