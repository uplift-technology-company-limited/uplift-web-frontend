# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ CRITICAL: Pre-Push Checklist

**BEFORE EVERY COMMIT AND PUSH, YOU MUST RUN THESE CHECKS IN ORDER:**

1. **ESLint Check**
   ```bash
   npm run lint
   ```
   - ✅ Must pass with ZERO errors
   - ⚠️ Address warnings when reasonable
   - ❌ DO NOT proceed if errors exist

2. **TypeScript Type Check**
   ```bash
   npx tsc --noEmit
   ```
   - ✅ Must pass with ZERO type errors
   - ❌ Fix all type safety issues before proceeding

3. **Production Build Test**
   ```bash
   npm run build
   ```
   - ✅ Must build successfully with ZERO errors
   - ✅ All static pages must generate correctly
   - ❌ DO NOT push if build fails

**⛔ NEVER commit or push code that fails any of these checks!**

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds on port 4040)
- **Production build**: `npm run build`
- **Post-build**: `npm run postbuild` (generates sitemap using next-sitemap)
- **Start production server**: `npm start` (standalone mode) or `npm run start:next` (Next.js mode)
- **Linting**: `npm run lint`
- **Type checking**: `npx tsc --noEmit` or `npm run typecheck`
- **Pre-push check**: `npm run pre-push` (runs all checks in order)
- **Testing**: Uses Vitest with jsdom environment
  - Test configuration in `vitest.config.ts`
  - Run tests: `npm test` (if configured) or `npx vitest`

## Architecture Overview

This is a Next.js 15 application for Uplift consulting services with sophisticated content management, user authentication, and file handling capabilities.

### Core Technologies
- **Framework**: Next.js 15.5.6 with App Router and Turbopack
- **Frontend**: React 19 with TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui and Magic UI components
- **Typography**: @tailwindcss/typography plugin (required for blog posts)
- **State Management**: Zustand 5 stores with persistence for client-side state
- **3D Graphics**: Three.js with React Three Fiber (@react-three/fiber, @react-three/drei)
- **Drag & Drop**: @dnd-kit for sortable interfaces
- **Animations**: Motion (formerly Framer Motion), Lottie animations
- **Icons**: Heroicons, Tabler Icons, React Icons, Lucide React
- **Content**: MDX for blog posts with rehype plugins (syntax highlighting, auto-linking)
- **Authentication**: Custom JWT-based system with httpOnly cookies and social OAuth (Google, Facebook)
- **External Integrations**: Google Analytics, LINE LIFF

### Authentication System
Custom JWT-based authentication system:
- **JWT Tokens**: Access tokens stored in httpOnly cookies (name: `accessToken`)
- **Social OAuth**: Google and Facebook integration via backend API endpoints
- **Role-based Access**: Roles checked via `role.name === 'Admin'` or `role.pathRoles === 'admin'`
- **State Management**: Zustand auth store with localStorage persistence
- **API Client**: Axios client with `withCredentials: true` for cookie handling
- **Route Protection**: Middleware decodes JWT payload to check user roles for `/admin` routes
- **Auth Flow**: `useAuthInit` hook handles token refresh and session initialization

### Directory Structure & Routing
Next.js 15 App Router with route groups:
- `src/app/[lang]/`: Dynamic route for language-specific pages (en/th) - uses static JSON data, not next-intl
  - `src/app/[lang]/solutions/`: Blog system with listing and individual post pages
  - `src/app/[lang]/solutions/[slug]/`: Dynamic blog post pages with MDX rendering
- `src/app/admin/`: Role-protected admin dashboard with full CRUD management
- `src/app/auth/`: Authentication pages (signin, signup)
- `src/app/api/`: API endpoints (currently pointing to external NestJS backend)
- `src/content/blog/`: MDX blog post files with frontmatter

### State Management Architecture
Zustand stores for different domains:
- `auth.ts`: Authentication state and user management
- `product-store.ts`: Product catalog management
- `website-store.ts`: Website content state
- `landing-store.ts`: Landing page configuration
- `footer-store.ts`: Footer content management

### Language Support (No i18n Library)
- **Languages**: English and Thai support via `[lang]` dynamic route
- **URL Structure**:
  - Thai: `/th/`
  - English: `/en/`
- **Implementation**:
  - Dynamic route parameter `[lang]` in `src/app/[lang]/`
  - Static JSON data files in `src/data/homepage/en.json` and `src/data/homepage/th.json`
  - No i18n library (next-intl removed) - uses simple dynamic imports based on lang param
  - `generateStaticParams()` exports static paths for both languages

### Component Organization
Clean component structure in `/components/`:
- `/hero/`: Hero-specific components (animations, stats cards, globe)
  - `hero-animated.tsx`: Animated text components
  - `stats-cards.tsx`: Statistics cards with responsive layouts
  - `globe-animated.tsx`: Interactive globe with hover effects
- `/button/`: Button component variants
- `/input/`: Form input components
- `/nav/`: Navigation components
- `/admin/`: Admin dashboard components
- `/section/`: Page section components

### External Backend Integration
This frontend connects to a separate NestJS backend:
- **API Base**: Configurable via `NEXT_PUBLIC_API_URL` environment variable (default: `http://localhost:3000`)
- **Client**: Axios-based API client (`/lib/api/client.ts`) with cookie authentication
- **Error Handling**: Centralized error handling with Sonner toast notifications
- **File Uploads**: S3 presigned URL system via backend API
- **API Endpoints**: Backend handles auth, users, roles, products, services, website content, images

### Environment Variables
```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost:3000

# Authentication (Legacy - NextAuth remnants)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret

# Social OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret

# LINE LIFF Integration
NEXT_PUBLIC_LINE_LIFF_ID=your-line-liff-id
NEXT_PUBLIC_LINE_CHANNEL_ID=your-line-channel-id

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id

# AWS S3 (for file uploads)
AWS_S3_BUCKET_NAME=uplift-uploads
AWS_S3_REGION=ap-southeast-1
```

### Development Setup
1. **Install dependencies**: `npm install`
2. **Configure environment**: Set up `.env` file with backend API URL
3. **Start development**: `npm run dev` (runs on port 4040 with Turbopack)
4. **Backend dependency**: Requires separate NestJS backend running on configured API URL

### Key Architecture Patterns
- **Dynamic Routes**: `[lang]` parameter for language routing without i18n library
- **Middleware Protection**: Authentication and role-based access control via middleware
- **API Integration**: Frontend-only with external backend dependency
- **State Management**: Domain-driven Zustand stores for different app areas
- **Error Handling**: Global error boundary and toast notifications via Sonner
- **Image Optimization**: Next.js Image component with remote patterns for external sources

### Production Considerations
- Backend API must be running and accessible
- Environment variables must be configured for all external services
- Social OAuth credentials required for authentication
- Google Analytics tracking configured
- Next.js build optimization with Turbopack for faster development

### Testing Infrastructure
- **Framework**: Vitest with jsdom environment
- **Coverage**: @vitest/coverage-v8 for code coverage reports

### Code Quality & Standards

#### ESLint Configuration
Project uses Next.js style guide with strict rules:
- **React Hooks**: Enforced rules of hooks, exhaustive deps warnings
- **TypeScript**: Warn on unused vars (except `_` prefixed), warn on `any` types
- **Code Quality**: No console (except warn/error), prefer const over let
- **React Best Practices**: Self-closing components, no target blank without rel, escaped entities
- **Next.js Specific**: No img element (use next/image), no HTML links for pages

**When writing code:**
- Always run `npm run lint` before committing
- Fix all errors, address warnings when possible
- Follow ESLint rules strictly - they're configured for optimal Next.js performance

#### SEO Requirements for [lang] Routes
All pages in `src/app/[lang]/` MUST be SEO-friendly:
- **Metadata Export**: Every page must export `generateMetadata()` function
- **Dynamic Metadata**: Use lang parameter to load language-specific titles/descriptions
- **Structured Data**: Include JSON-LD schema where applicable (Organization, WebPage, BreadcrumbList)
- **Open Graph**: Define OG tags for social sharing
- **Canonical URLs**: Set proper canonical with lang prefix
- **Alt Text**: All images must have descriptive alt attributes
- **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
- **Mobile Optimization**: Ensure viewport meta and responsive design

**SEO Checklist for new pages:**
```typescript
// Required: generateMetadata function
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return {
    title: 'Page Title',
    description: 'Page description',
    openGraph: { ... },
    alternates: {
      canonical: `/${lang}/page-path`,
      languages: {
        'en': '/en/page-path',
        'th': '/th/page-path',
      }
    }
  };
}
```

### Data Management & JSON Structure

**Homepage Data Architecture** (Split by Section):
- **Location**: `src/data/homepage/[section]/[lang].json`
- **Pattern**: Each section has separate `en.json` and `th.json` files
- **Sections**:
  - `problems/` - Problem statements and impact metrics
  - `faq/` - Frequently asked questions
  - `techstack/` - Technology stack showcase
  - `portfolio/` - Project showcase (best practices)
  - `stats/` - Statistics cards (to be migrated)
  - `solution/` - Solution architecture (to be migrated)

**Data Loaders** (in `src/app/[lang]/page.tsx`):
```typescript
async function getProblemsData(locale: string): Promise<ProblemData>
async function getFAQData(locale: string): Promise<FAQData>
async function getTechStackData(locale: string): Promise<TechStackData>
async function getPortfolioData(locale: string): Promise<PortfolioData>
```

**Icon Mapping System**:
- **Location**: `src/lib/utils/icon-mapper.tsx`
- **Purpose**: Maps technology names (strings in JSON) to React icon components
- **Usage**: `getTechIcon('React')` returns `<SiReact className="w-8 h-8" />`
- **Important**: Must be a client component (`'use client'` directive)
- **Supported Icons**: React Icons (Si*, Ai*, Fa*), custom fallback for unknown icons

**Best Practices**:
- All data loaders have automatic English fallback with console warnings
- Icons stored as strings in JSON, converted to components via icon mapper
- Components receive data via props (not hardcoded)
- Each section is independently loadable and cacheable

### Blog System Architecture

**Location**: `/[lang]/solutions` - MDX-based blog system with static generation

**Content Files**: `src/content/blog/*.mdx`
- Each MDX file has YAML frontmatter with metadata (title, description, date, tags, author, etc.)
- Markdown content with support for code blocks, tables, images, and custom components

**Blog Library**: `src/lib/blog.ts`
- `getAllBlogSlugs()` - Get all blog post slugs for static generation
- `getBlogPost(slug)` - Get single post with frontmatter and content
- `getAllBlogPosts()` - Get all posts sorted by date (newest first)
- `getFeaturedBlogPosts()` - Get featured posts only
- `getBlogPostsByTag(tag)` - Filter posts by tag
- `getRelatedBlogPosts(slug, limit)` - Get related posts based on shared tags
- `formatDate()` / `formatDateThai()` - Format dates for EN/TH

**MDX Configuration** (in `[slug]/page.tsx`):
```typescript
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// MDX rendering with plugins
<MDXRemote
  source={post.content}
  options={{
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,  // Auto-generate heading IDs
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],  // Make headings linkable
        [rehypePrettyCode, { theme: 'github-dark', keepBackground: false }]  // Syntax highlighting
      ]
    }
  }}
/>
```

**Typography System**:
- **CRITICAL**: Requires `@tailwindcss/typography` plugin installed
- Add to `globals.css`: `@plugin "@tailwindcss/typography";`
- Use `prose` classes with extensive customization for blog content:
  ```tsx
  <div className="prose prose-lg dark:prose-invert max-w-none
    prose-headings:font-bold prose-headings:tracking-tight
    prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
    prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline">
  ```

**Blog Components**: `src/components/blog/`
- `blog-card.tsx` - Post preview card with thumbnail, tags, date, read time
- `blog-hero.tsx` - Hero section for blog listing page
- `blog-grid.tsx` - Responsive grid for blog posts
- `search-bar.tsx` - Search posts by title/description
- `tag-filter.tsx` - Filter posts by tags
- `table-of-contents.tsx` - Auto-generated TOC from H2/H3 headings (reads from DOM, not markdown)

**Critical Implementation Notes**:
- Table of Contents extracts headings from rendered DOM (not markdown) to match `rehypeSlug` generated IDs
- All blog pages use `generateStaticParams()` for both `/en/solutions` and `/th/solutions` routes
- Typography plugin is REQUIRED - without it, all prose classes have no effect
- Custom heading components with `scroll-mt-20` for proper anchor scrolling

**Blog Post Frontmatter Example**:
```yaml
---
title: "Blog Post Title"
description: "Post description for SEO and preview"
date: "2024-06-20"
tags: ["Automation", "Case Study", "Manufacturing"]
featured: true
author: "Uplift Team"
thumbnail: "https://images.unsplash.com/..."
---
```

### Common Pitfalls & Solutions
- **styled-jsx**: NEVER use styled-jsx in Next.js 15 - it breaks SSR. Use external CSS files or Tailwind only
- **Typography Plugin**: Blog posts require `@tailwindcss/typography` plugin. Without it, prose classes have no effect
- **Dynamic Tailwind Classes**: Avoid template literals in className (e.g., `text-${color}-400`). Use complete class names or cn() utility
- **Optional Chaining**: Always use optional chaining for potentially undefined properties (e.g., `item.gradientFrom?.split()`)
- **Type Conflicts**: Watch for duplicate type definitions between local interfaces and external types
- **SSR vs Client Components**: Animated components use "use client" directive, while static components can be server-side
- **Icon Mapper**: Must include `'use client'` directive when importing React Icons (client-side only)
- **Node Modules Permission**: If you encounter EACCES errors with node_modules, delete and reinstall: `rm -rf node_modules package-lock.json && npm install`
- **Image Optimization**: Next.js Image component configured with remote patterns for external sources (S3, Unsplash, etc.)
- **Middleware JWT Decoding**: JWT payload structure has user roles at `payload.user.roles` array
- **TypeScript Path Aliases**: Use `@/*` to import from `src/*` directory
- **Next.js Output**: Configured for standalone deployment mode
- **Sitemap Generation**: Automatic generation via next-sitemap post-build for both /en and /th routes
- **MDX Table of Contents**: Must extract headings from DOM (not markdown) to match rehypeSlug-generated IDs
- **Magic UI Components**: Some components like SmoothCursor need to be client components with proper positioning