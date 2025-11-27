import type { Metadata } from 'next'
import Nav from '@/components/basic/nav/resnav'
import Footer from '@/components/layout/footer/footer'
import { getAllBlogPosts, getFeaturedBlogPosts, getAllTags, formatDateThai } from '@/lib/blog'
import { BlogGrid } from '@/components/page/solution/blog-grid'
import { BlogHero } from '@/components/page/solution/blog-hero'
import { Newsletter } from '@/components/page/solution/newsletter'
import { Particles } from '@/components/page/home/hero/particles'

interface SolutionsPageProps {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ tag?: string; search?: string }>
}

export async function generateMetadata({
  params,
}: SolutionsPageProps): Promise<Metadata> {
  const { lang } = await params

  return {
    title: lang === 'th' ? 'บทความและโซลูชัน | UPLIFTTECH' : 'Articles & Solutions | UPLIFTTECH',
    description:
      lang === 'th'
        ? 'บทความ กรณีศึกษา และโซลูชันเกี่ยวกับเทคโนโลยี ระบบอัตโนมัติ และการพัฒนาซอฟต์แวร์'
        : 'Articles, case studies, and solutions about technology, automation, and software development',
    openGraph: {
      title: lang === 'th' ? 'บทความและโซลูชัน' : 'Articles & Solutions',
      description:
        lang === 'th'
          ? 'บทความและกรณีศึกษาจากทีม Uplift'
          : 'Articles and case studies from Uplift team',
      url: `https://uplifttech.store/${lang}/solutions`,
      type: 'website',
      images: [
        {
          url: '/og/solutions.jpg',
          width: 1200,
          height: 630,
          alt: 'Uplift Solutions',
        },
      ],
    },
    alternates: {
      canonical: `/${lang}/solutions`,
      languages: {
        en: '/en/solutions',
        th: '/th/solutions',
      },
    },
  }
}

export default async function SolutionsPage({
  params,
  searchParams,
}: SolutionsPageProps) {
  const { lang } = await params
  const { tag, search } = await searchParams

  // Get all blog posts
  const allPosts = getAllBlogPosts()
  const featuredPosts = getFeaturedBlogPosts()
  const allTags = ['All', ...getAllTags()]

  // Format dates
  const posts = allPosts.map((post) => ({
    ...post,
    date: lang === 'th' ? formatDateThai(post.date) : post.date,
  }))

  const featured = featuredPosts.map((post) => ({
    ...post,
    date: lang === 'th' ? formatDateThai(post.date) : post.date,
  }))

  return (
    <>
      <Nav />
      <main className="w-full relative">
        {/* Background Particles */}
        <div
          className="absolute z-0 h-[100vh] w-full"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        >
          <Particles />
        </div>

        {/* Hero Section */}
        <BlogHero lang={lang} />

        {/* Blog Grid with Filter */}
        <BlogGrid
          posts={posts}
          featuredPosts={featured}
          tags={allTags}
          initialTag={tag}
          initialSearch={search}
          lang={lang}
        />

        {/* Newsletter */}
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
