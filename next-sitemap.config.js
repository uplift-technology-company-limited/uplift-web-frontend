/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://uplifttech.store',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // Exclude non-public routes
  exclude: [
    '/admin/*',
    '/api/*',
    '/test/*',
    '/test-liff',
    '/private/*',
    '/auth/*',
    '/user/*',
    '/coming-soon',
    '*/sitemap.xml', // Prevent sitemap from being in sitemap
  ],

  // Generate index sitemap
  generateIndexSitemap: true,

  // Custom transformation for better SEO
  transform: async (config, path) => {
    // Skip hidden/test/private routes
    if (
      path.includes('/test') ||
      path.includes('/private') ||
      path.includes('/auth') ||
      path.includes('/user') ||
      path.includes('/admin') ||
      path.includes('sitemap')
    ) {
      return null
    }

    // Set priorities based on page importance
    let priority = 0.7
    let changefreq = 'weekly'

    // Home pages (both /en and /th)
    if (path === '/' || path === '/en' || path === '/th') {
      priority = 1.0
      changefreq = 'daily'
    }
    // Main service pages
    else if (
      path.match(/^\/(en|th)\/(innovation|service|solutions)$/) ||
      path.match(/^\/(innovation|service|solutions)$/)
    ) {
      priority = 0.9
      changefreq = 'daily'
    }
    // Company pages
    else if (
      path.match(/^\/(en|th)\/(story|vision|company|teams|consult)$/) ||
      path.match(/^\/(story|vision|company|teams|consult)$/)
    ) {
      priority = 0.8
      changefreq = 'weekly'
    }
    // Dynamic detail pages (innovation/[slug], service/[slug], etc.)
    else if (
      path.match(/^\/(en|th)\/(innovation|service|solutions|teams)\/[^/]+$/)
    ) {
      priority = 0.7
      changefreq = 'weekly'
    }
    // Legal pages
    else if (path.includes('/legal/')) {
      priority = 0.3
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/test', '/private', '/auth', '/user'],
      },
      // Allow AI crawlers
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
      }
    ],
  }
};