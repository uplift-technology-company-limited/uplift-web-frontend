export interface InnovationHero {
  badge?: string
  title: string
  subtitle: string
  description: string
  variant?: 'default' | 'mobile' | 'saas' | 'minimal' // Different hero styles
  cta?: {
    primary?: {
      text: string
      href: string
    }
    secondary?: {
      text: string
      href: string
    }
  }
  video?: {
    src: string
    thumbnail: string
    alt: string
  }
  image?: string
  deviceMockups?: string[] // For mobile variant - array of device screenshots
  downloadBadges?: {
    appStore?: string
    playStore?: string
  }
}

export interface InnovationProblem {
  title: string
  description: string
  icon: string // Icon name as string for API
}

export interface InnovationSolution {
  title: string
  description: string
  icon: string
}

export interface InnovationFeature {
  id: string | number
  title: string
  description: string
  image?: string
  icon: string
  variant?: 'default' | 'bento' | 'cards' | 'horizontal' // Different feature layouts
}

export interface InnovationHowItWorksStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface InnovationPricingPlan {
  name: string
  price: number | string
  currency?: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: {
    text: string
    href: string
  }
}

export interface InnovationFAQ {
  question: string
  answer: string
}

export interface InnovationTestimonial {
  name: string
  role: string
  company?: string
  avatar?: string
  content: string
  rating?: number
}

export interface InnovationCTA {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
}

// Section variant configurations
export interface SectionVariants {
  features?: 'default' | 'bento' | 'cards'
  howItWorks?: 'default' | 'timeline' | 'cards'
  problem?: 'default' | 'minimal'
  pricing?: 'default' | 'comparison'
}

export interface InnovationPageData {
  slug: string
  hero: InnovationHero
  problems?: InnovationProblem[]
  solutions?: InnovationSolution[]
  features?: InnovationFeature[]
  howItWorks?: InnovationHowItWorksStep[]
  pricing?: InnovationPricingPlan[]
  faqs?: InnovationFAQ[]
  testimonials?: InnovationTestimonial[]
  cta?: InnovationCTA
  variants?: SectionVariants  // Section variant configurations
  metadata?: {
    title: string
    description: string
    keywords?: string[]
    ogImage?: string
  }
}
