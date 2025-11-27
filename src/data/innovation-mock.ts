import { InnovationPageData } from '@/types/innovation'

/**
 * Innovation Mock Data
 *
 * NOTE: ความแตกต่างระหว่าง routes:
 * - /innovation = หน้ารวม Products ทั้งหมด (ดึงจากไฟล์นี้)
 * - /innovation/[slug] = หน้ารายละเอียด Product
 * - Solution section (Home) = Products ที่มี highlight: true เท่านั้น
 * - /solutions = Blog/News (คนละอย่าง ไม่เกี่ยวกับไฟล์นี้!)
 */
export const innovationMockData: Record<string, InnovationPageData> = {
  // ============================================
  // HIGHLIGHT PRODUCTS (แสดงใน Home Solution section)
  // ============================================
  'laundry-management': {
    slug: 'laundry-management',
    highlight: true,
    icon: 'FaShippingFast',
    bgColor: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
    gridSpan: '2x1', // กว้าง 2 columns
    variants: {
      features: 'default',
      howItWorks: 'default',
      problem: 'default',
      pricing: 'default',
    },
    hero: {
      badge: '🧺 Business Solution',
      title: 'ระบบบริหารการซักรีด',
      subtitle: 'Laundry Management System',
      description: 'ระบบบริหารจัดการการซักรีดแบบครบวงจร พร้อมด้วยระบบติดตามสถานะการดำเนินงานแบบเรียลไทม์ รองรับการขยายธุรกิจระดับเครือข่ายทั่วประเทศ',
      cta: {
        primary: { text: 'ขอใบเสนอราคา', href: '#contact' },
        secondary: { text: 'ดูรายละเอียด', href: '#features' },
      },
      image: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/admin/1755080060582-s7qvzu2t2rh-view-laundromat-room-with-washing-machines.jpg',
    },
    features: [
      { id: 1, title: 'ระบบติดตามสถานะแบบ Real-time', description: 'ติดตามสถานะการซักรีดได้ตลอดเวลา ตั้งแต่รับเข้าจนถึงส่งมอบ', icon: 'MapPin' },
      { id: 2, title: 'การจัดการลูกค้าและคำสั่งซื้อ', description: 'ระบบจัดการข้อมูลลูกค้าและคำสั่งซื้อแบบครบวงจร', icon: 'Users' },
      { id: 3, title: 'ระบบบัญชีและรายงาน', description: 'รายงานการเงินและการดำเนินงานที่ครบถ้วน', icon: 'BarChart3' },
      { id: 4, title: 'รองรับหลายสาขา', description: 'บริหารจัดการหลายสาขาได้จากที่เดียว', icon: 'Building2' },
    ],
    pricing: [
      { name: 'Starter', price: '4,900', currency: '฿', period: 'month', description: 'สำหรับร้านเดี่ยว', features: ['1 สาขา', 'รายงานพื้นฐาน', 'Email support'], cta: { text: 'เริ่มต้น', href: '#contact' } },
      { name: 'Business', price: '9,900', currency: '฿', period: 'month', description: 'สำหรับเครือข่าย', features: ['5 สาขา', 'รายงานขั้นสูง', 'Priority support', 'API access'], highlighted: true, cta: { text: 'ติดต่อเรา', href: '#contact' } },
    ],
    metadata: {
      title: 'ระบบบริหารการซักรีด - Laundry Management System',
      description: 'ระบบติดตามการซักรีดครบวงจร รองรับเครือข่ายระดับประเทศ',
      keywords: ['Laundry Management', 'ระบบซักรีด', 'POS ซักรีด'],
    },
  },
  'fitness-management': {
    slug: 'fitness-management',
    highlight: true,
    icon: 'FaDumbbell',
    bgColor: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20',
    gridSpan: '1x1', // ปกติ 1 column
    variants: {
      features: 'default',
      howItWorks: 'default',
      problem: 'default',
      pricing: 'default',
    },
    hero: {
      badge: '💪 Fitness Solution',
      title: 'ระบบจัดการฟิตเนส',
      subtitle: 'Fitness Center Management',
      description: 'ระบบบริหารจัดการศูนย์ออกกำลังกายแบบสมาร์ท ครอบคลุมการจัดการสมาชิก อุปกรณ์ และคลาสเรียนต่างๆ',
      cta: {
        primary: { text: 'ทดลองใช้ฟรี', href: '#contact' },
        secondary: { text: 'ดูฟีเจอร์', href: '#features' },
      },
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop&auto=format',
    },
    features: [
      { id: 1, title: 'จัดการสมาชิกและแพ็กเกจ', description: 'ระบบสมาชิกครบครัน รองรับหลายแพ็กเกจ', icon: 'Users' },
      { id: 2, title: 'จองคลาสออนไลน์', description: 'สมาชิกจองคลาสได้เองผ่านแอป', icon: 'Calendar' },
      { id: 3, title: 'ระบบเข้า-ออก IoT', description: 'เชื่อมต่อประตูและอุปกรณ์ IoT', icon: 'Wifi' },
      { id: 4, title: 'รายงานการใช้งาน', description: 'วิเคราะห์พฤติกรรมและแนวโน้มสมาชิก', icon: 'LineChart' },
    ],
    pricing: [
      { name: 'Basic', price: '3,900', currency: '฿', period: 'month', description: 'ฟิตเนสขนาดเล็ก', features: ['100 สมาชิก', 'จองคลาสพื้นฐาน', 'รายงานมาตรฐาน'], cta: { text: 'เริ่มต้น', href: '#contact' } },
      { name: 'Pro', price: '7,900', currency: '฿', period: 'month', description: 'ฟิตเนสขนาดกลาง', features: ['500 สมาชิก', 'IoT Integration', 'รายงานขั้นสูง', 'Mobile App'], highlighted: true, cta: { text: 'ติดต่อเรา', href: '#contact' } },
    ],
    metadata: {
      title: 'ระบบจัดการฟิตเนส - Fitness Center Management',
      description: 'ระบบบริหารฟิตเนส สมาชิก อุปกรณ์ คลาส แบบครบวงจร',
      keywords: ['Fitness Management', 'Gym Software', 'ระบบฟิตเนส'],
    },
  },
  'warehouse-management': {
    slug: 'warehouse-management',
    highlight: true,
    icon: 'FaWarehouse',
    bgColor: 'bg-gradient-to-br from-orange-500/20 to-amber-500/20',
    gridSpan: '1x1', // ปกติ 1 column
    variants: {
      features: 'bento',
      howItWorks: 'default',
      problem: 'default',
      pricing: 'default',
    },
    hero: {
      badge: '📦 Warehouse Solution',
      title: 'ระบบคลังสินค้า',
      subtitle: 'Smart Warehouse Management',
      description: 'ระบบบริหารคลังสินค้าอัตโนมัติที่เชื่อมต่อกับระบบ Automation เพื่อลดต้นทุนแรงงานและเพิ่มประสิทธิภาพ',
      cta: {
        primary: { text: 'ขอ Demo', href: '#contact' },
        secondary: { text: 'ดูรายละเอียด', href: '#features' },
      },
      image: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/admin/1755081511881-7r0uq54z3v5-interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market.jpg',
    },
    features: [
      { id: 1, title: 'จัดการสินค้าคงคลังอัตโนมัติ', description: 'ติดตามสต็อกแบบเรียลไทม์ ลดความผิดพลาด', icon: 'Package', image: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/admin/1755081511881-7r0uq54z3v5-interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market.jpg' },
      { id: 2, title: 'เชื่อมต่อ Barcode/RFID', description: 'รองรับการสแกนบาร์โค้ดและ RFID', icon: 'Scan' },
      { id: 3, title: 'ปรับปรุง Pick & Pack', description: 'เพิ่มประสิทธิภาพการหยิบและแพ็คสินค้า', icon: 'Truck' },
      { id: 4, title: 'Dashboard แบบเรียลไทม์', description: 'ดูภาพรวมคลังสินค้าได้ทันที', icon: 'BarChart3' },
    ],
    pricing: [
      { name: 'Standard', price: '9,900', currency: '฿', period: 'month', description: 'คลังขนาดเล็ก', features: ['1 คลัง', '1,000 SKU', 'Barcode'], cta: { text: 'เริ่มต้น', href: '#contact' } },
      { name: 'Enterprise', price: '29,900', currency: '฿', period: 'month', description: 'คลังขนาดใหญ่', features: ['หลายคลัง', 'ไม่จำกัด SKU', 'RFID + Automation', 'API Integration'], highlighted: true, cta: { text: 'ติดต่อเรา', href: '#contact' } },
    ],
    metadata: {
      title: 'ระบบคลังสินค้า - Warehouse Management System',
      description: 'ระบบคลังสินค้าอัตโนมัติ เชื่อมต่อ Automation ลดต้นทุนแรงงาน',
      keywords: ['WMS', 'Warehouse Management', 'ระบบคลังสินค้า'],
    },
  },
  'retail-pos': {
    slug: 'retail-pos',
    highlight: true,
    icon: 'FaCashRegister',
    bgColor: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    gridSpan: '2x1', // กว้าง 2 columns
    variants: {
      features: 'default',
      howItWorks: 'default',
      problem: 'default',
      pricing: 'default',
    },
    hero: {
      badge: '💳 Retail Solution',
      title: 'ระบบ POS ค้าปลีก',
      subtitle: 'Omnichannel Point of Sale',
      description: 'ระบบจุดขายครบครันสำหรับขายหน้าร้านและออนไลน์ รองรับการจัดการหลายสาขาพร้อมระบบชำระเงินครบรูปแบบ',
      cta: {
        primary: { text: 'ทดลองใช้ฟรี', href: '#contact' },
        secondary: { text: 'ดูราคา', href: '#pricing' },
      },
      image: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/admin/1755081810814-csakbmjowd6-possystemcashier.jpg',
    },
    features: [
      { id: 1, title: 'ขายหลายช่องทาง', description: 'รวมการขายหน้าร้าน, ออนไลน์, Marketplace', icon: 'ShoppingCart', image: 'https://uplift-uploads.s3.ap-southeast-1.amazonaws.com/admin/1755081810814-csakbmjowd6-possystemcashier.jpg' },
      { id: 2, title: 'ซิงค์สินค้าคงคลัง', description: 'สต็อกอัพเดทอัตโนมัติทุกช่องทาง', icon: 'RefreshCw' },
      { id: 3, title: 'Payment Gateway', description: 'รับชำระเงินครบทุกรูปแบบ', icon: 'CreditCard' },
      { id: 4, title: 'จัดการหลายสาขา', description: 'บริหารทุกสาขาจากระบบเดียว', icon: 'Building2' },
    ],
    pricing: [
      { name: 'Basic', price: '2,900', currency: '฿', period: 'month', description: 'ร้านเดี่ยว', features: ['1 เครื่อง', '1 สาขา', 'รายงานพื้นฐาน'], cta: { text: 'เริ่มต้น', href: '#contact' } },
      { name: 'Business', price: '7,900', currency: '฿', period: 'month', description: 'หลายสาขา', features: ['5 เครื่อง', '3 สาขา', 'Omnichannel', 'Analytics'], highlighted: true, cta: { text: 'ติดต่อเรา', href: '#contact' } },
    ],
    metadata: {
      title: 'ระบบ POS ค้าปลีก - Retail Point of Sale',
      description: 'ขายหน้าร้าน+ออนไลน์ จัดการหลายสาขา ชำระเงินครบรูปแบบ',
      keywords: ['POS', 'Point of Sale', 'ระบบขาย', 'Retail'],
    },
  },

  // ============================================
  // OTHER PRODUCTS (แสดงเฉพาะในหน้า /innovation)
  // ============================================
  'smart-erp-system': {
    slug: 'smart-erp-system',
    highlight: false,
    variants: {
      features: 'default',
      howItWorks: 'default',
      problem: 'default',
      pricing: 'default',
    },
    hero: {
      badge: '🚀 Innovation Showcase',
      title: 'Smart ERP System',
      subtitle: 'Enterprise Resource Planning for Modern Business',
      description:
        'Transform your business operations with our intelligent ERP system. Streamline processes, boost productivity, and gain real-time insights across your entire organization.',
      cta: {
        primary: {
          text: 'Start Free Trial',
          href: '#contact',
        },
        secondary: {
          text: 'Watch Demo',
          href: '#video',
        },
      },
      video: {
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop',
        alt: 'Smart ERP System Demo',
      },
    },
    problems: [
      {
        title: 'Data Silos',
        description:
          'Disconnected systems lead to fragmented data, making it difficult to get a complete view of your business operations.',
        icon: 'AlertCircle',
      },
      {
        title: 'Manual Processes',
        description:
          'Time-consuming manual tasks reduce efficiency and increase the risk of human errors in critical business processes.',
        icon: 'Clock',
      },
      {
        title: 'Poor Visibility',
        description:
          'Lack of real-time insights prevents quick decision-making and proactive problem-solving.',
        icon: 'TrendingDown',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Unified Dashboard',
        description:
          'Get a complete overview of your business metrics in one place. Monitor KPIs, track performance, and identify trends with our intuitive dashboard.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        icon: 'BarChart3',
      },
      {
        id: 2,
        title: 'Automated Workflows',
        description:
          'Eliminate manual tasks with intelligent automation. Define workflows once and let the system handle repetitive processes automatically.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
        icon: 'Zap',
      },
      {
        id: 3,
        title: 'Real-time Analytics',
        description:
          'Make data-driven decisions with powerful analytics tools. Visualize trends, forecast outcomes, and optimize operations in real-time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        icon: 'LineChart',
      },
      {
        id: 4,
        title: 'Role-based Access',
        description:
          'Ensure security and compliance with granular permission controls. Define roles and access levels for different team members.',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
        icon: 'Shield',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Connect Your Data',
        description:
          'Integrate all your existing systems and data sources. Our smart connectors work with popular platforms and databases.',
        icon: 'Play',
      },
      {
        step: 2,
        title: 'Configure Workflows',
        description:
          'Set up automated workflows tailored to your business processes. Use our drag-and-drop builder for easy customization.',
        icon: 'Settings',
      },
      {
        step: 3,
        title: 'Monitor & Optimize',
        description:
          'Track performance metrics and continuously improve. Our AI-powered insights help you identify optimization opportunities.',
        icon: 'CheckCircle2',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '9,900',
        currency: '฿',
        period: 'month',
        description: 'Perfect for small businesses',
        features: [
          'Up to 10 users',
          'Basic reporting',
          '10GB storage',
          'Email support',
          'Mobile app access',
        ],
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
      },
      {
        name: 'Professional',
        price: '29,900',
        currency: '฿',
        period: 'month',
        description: 'For growing companies',
        features: [
          'Up to 50 users',
          'Advanced analytics',
          '100GB storage',
          'Priority support',
          'Custom integrations',
          'API access',
        ],
        highlighted: true,
        cta: {
          text: 'Start Free Trial',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations',
        features: [
          'Unlimited users',
          'Custom features',
          'Unlimited storage',
          'Dedicated support',
          'On-premise deployment',
          'SLA guarantee',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'How long does implementation take?',
        answer:
          'Implementation typically takes 2-4 weeks depending on your business complexity. We provide dedicated support throughout the process to ensure a smooth transition.',
      },
      {
        question: 'Can I migrate data from my current system?',
        answer:
          'Yes! We provide comprehensive data migration services. Our team will help you transfer all your existing data securely with minimal downtime.',
      },
      {
        question: 'What kind of support do you offer?',
        answer:
          'We offer 24/7 email support for all plans, with priority phone and chat support for Professional and Enterprise customers. We also provide extensive documentation and video tutorials.',
      },
      {
        question: 'Is my data secure?',
        answer:
          'Absolutely. We use industry-standard encryption, regular security audits, and comply with international data protection regulations including GDPR.',
      },
    ],
    cta: {
      title: 'Ready to Transform Your Business?',
      description:
        'Join hundreds of companies already using our Smart ERP System. Start your free 30-day trial today.',
      primaryButton: {
        text: 'Start Free Trial',
        href: '#contact',
      },
      secondaryButton: {
        text: 'Schedule Demo',
        href: '#demo',
      },
    },
    metadata: {
      title: 'Smart ERP System - Transform Your Business Operations',
      description:
        'Complete ERP solution for modern businesses. Streamline processes, automate workflows, and gain real-time insights.',
      keywords: ['ERP', 'Enterprise Resource Planning', 'Business Management', 'Automation'],
    },
  },
  'modern-pos-solution': {
    slug: 'modern-pos-solution',
    highlight: false,
    variants: {
      features: 'bento',
      howItWorks: 'timeline',
      problem: 'minimal',
      pricing: 'default',
    },
    hero: {
      badge: '💳 Point of Sale',
      title: 'Modern POS Solution',
      subtitle: 'Next-Generation Point of Sale for Retail Excellence',
      description:
        'Revolutionize your retail operations with our cloud-based POS system. Fast, reliable, and feature-rich for businesses of all sizes.',
      cta: {
        primary: {
          text: 'Try Free for 14 Days',
          href: '#contact',
        },
        secondary: {
          text: 'See Pricing',
          href: '#pricing',
        },
      },
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
    },
    problems: [
      {
        title: 'Slow Checkouts',
        description:
          'Traditional POS systems cause long queues, leading to customer frustration and lost sales during peak hours.',
        icon: 'Clock',
      },
      {
        title: 'Limited Payment Options',
        description:
          'Customers expect multiple payment methods. Old systems can\'t keep up with digital wallets and contactless payments.',
        icon: 'Ban',
      },
      {
        title: 'No Real-time Inventory',
        description:
          'Without live inventory tracking, stockouts and overstocking become common, affecting profitability.',
        icon: 'AlertCircle',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Lightning-Fast Checkout',
        description:
          'Process transactions in seconds with our optimized interface. Support barcode scanning, quick search, and one-tap payments.',
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop',
        icon: 'Zap',
      },
      {
        id: 2,
        title: 'Multi-Payment Support',
        description:
          'Accept cash, cards, QR codes, and digital wallets. Integrated with major payment gateways for seamless transactions.',
        icon: 'Smartphone',
      },
      {
        id: 3,
        title: 'Inventory Management',
        description:
          'Track stock levels in real-time across multiple locations. Automated alerts for low stock and expiring products.',
        icon: 'BarChart3',
      },
      {
        id: 4,
        title: 'Customer Loyalty',
        description:
          'Build customer relationships with integrated loyalty programs. Track purchases, offer rewards, and drive repeat business.',
        icon: 'Users',
      },
    ],
    pricing: [
      {
        name: 'Basic',
        price: '4,900',
        currency: '฿',
        period: 'month',
        description: 'For single store',
        features: [
          '1 POS terminal',
          'Basic inventory',
          'Sales reports',
          'Email support',
        ],
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
      },
      {
        name: 'Business',
        price: '12,900',
        currency: '฿',
        period: 'month',
        description: 'For multiple locations',
        features: [
          'Up to 5 terminals',
          'Advanced inventory',
          'Customer loyalty',
          'Multi-store management',
          'Priority support',
        ],
        highlighted: true,
        cta: {
          text: 'Start Trial',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large retail chains',
        features: [
          'Unlimited terminals',
          'Custom integrations',
          'Dedicated account manager',
          '24/7 phone support',
          'On-site training',
        ],
        cta: {
          text: 'Contact Us',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'Works offline?',
        answer:
          'Yes! Our POS system works seamlessly offline. All transactions are synced automatically when internet connection is restored.',
      },
      {
        question: 'What hardware do I need?',
        answer:
          'Our system works on tablets, computers, and mobile devices. We also offer compatible hardware packages including receipt printers and barcode scanners.',
      },
      {
        question: 'Can I integrate with my accounting software?',
        answer:
          'Yes, we integrate with popular accounting software like QuickBooks, Xero, and local Thai accounting systems.',
      },
    ],
    cta: {
      title: 'Transform Your Retail Experience',
      description:
        'Start accepting payments faster and manage your inventory smarter. Try risk-free for 14 days.',
      primaryButton: {
        text: 'Start Free Trial',
        href: '#contact',
      },
    },
  },
  'web-app-platform': {
    slug: 'web-app-platform',
    highlight: false,
    variants: {
      features: 'cards',
      howItWorks: 'cards',
      problem: 'default',
      pricing: 'comparison',
    },
    hero: {
      badge: '🌐 Web Development',
      title: 'Web Application Platform',
      subtitle: 'Custom Web Solutions That Scale',
      description:
        'Build powerful, scalable web applications tailored to your unique business needs. From concept to deployment, we\'ve got you covered.',
      cta: {
        primary: {
          text: 'Start Your Project',
          href: '#contact',
        },
        secondary: {
          text: 'View Portfolio',
          href: '/portfolio',
        },
      },
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop',
    },
    problems: [
      {
        title: 'Generic Solutions',
        description:
          'Off-the-shelf software rarely fits your unique business processes, forcing you to adapt your workflow.',
        icon: 'Ban',
      },
      {
        title: 'Poor User Experience',
        description:
          'Complex interfaces frustrate users and reduce productivity. Good UX is crucial for adoption.',
        icon: 'AlertCircle',
      },
      {
        title: 'Scalability Issues',
        description:
          'As your business grows, your systems should too. Many solutions fail under increased load.',
        icon: 'TrendingDown',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Custom Development',
        description:
          'We build exactly what you need. Every feature is designed around your specific requirements and workflows.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
        icon: 'Code',
      },
      {
        id: 2,
        title: 'Responsive Design',
        description:
          'Works beautifully on all devices. Mobile-first approach ensures great experience on phones, tablets, and desktops.',
        icon: 'Smartphone',
      },
      {
        id: 3,
        title: 'API Integration',
        description:
          'Connect with any third-party service. We integrate payment gateways, CRMs, ERPs, and custom APIs seamlessly.',
        icon: 'Globe',
      },
      {
        id: 4,
        title: 'Cloud-Native',
        description:
          'Built for the cloud from day one. Automatic scaling, high availability, and global distribution included.',
        icon: 'Shield',
      },
    ],
    pricing: [
      {
        name: 'Starter Project',
        price: '299,000',
        currency: '฿',
        description: 'Simple web application',
        features: [
          'Up to 5 pages',
          'Basic features',
          'Responsive design',
          '3 months support',
          'Basic SEO',
        ],
        cta: {
          text: 'Get Quote',
          href: '#contact',
        },
      },
      {
        name: 'Professional',
        price: '799,000',
        currency: '฿',
        description: 'Full-featured platform',
        features: [
          'Custom design',
          'Advanced features',
          'User authentication',
          'Payment integration',
          '12 months support',
          'Advanced SEO',
        ],
        highlighted: true,
        cta: {
          text: 'Schedule Call',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Complex applications',
        features: [
          'Unlimited features',
          'Microservices architecture',
          'High availability',
          'Dedicated team',
          'Lifetime support',
          'SLA guarantee',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'How long does development take?',
        answer:
          'Timeline depends on project complexity. Simple projects take 2-3 months, while complex platforms may require 6-12 months. We provide detailed timeline during project planning.',
      },
      {
        question: 'Do you provide hosting?',
        answer:
          'Yes, we offer managed hosting on AWS or Azure. Alternatively, we can deploy to your preferred hosting provider.',
      },
      {
        question: 'Can you maintain my existing application?',
        answer:
          'Absolutely! We provide maintenance and enhancement services for applications built by other teams.',
      },
    ],
    cta: {
      title: 'Let\'s Build Something Amazing',
      description:
        'Turn your vision into reality. Schedule a free consultation to discuss your project.',
      primaryButton: {
        text: 'Schedule Consultation',
        href: '#contact',
      },
      secondaryButton: {
        text: 'View Case Studies',
        href: '/case-studies',
      },
    },
  },
  'uplift-mobile-app': {
    slug: 'uplift-mobile-app',
    highlight: false,
    variants: {
      features: 'default',
      howItWorks: 'timeline',
      problem: 'minimal',
      pricing: 'default',
    },
    hero: {
      variant: 'mobile',
      badge: '📱 Mobile App',
      title: 'Uplift Mobile App',
      subtitle: 'Your Business in Your Pocket',
      description:
        'Manage your business on the go with our powerful mobile app. Access real-time data, collaborate with your team, and make decisions anywhere, anytime.',
      deviceMockups: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop',
      ],
      downloadBadges: {
        appStore: 'https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png',
        playStore: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
      },
    },
    problems: [
      {
        title: 'Limited Mobility',
        description:
          'Traditional desktop-only systems restrict your ability to work remotely or respond to urgent matters on the go.',
        icon: 'Lock',
      },
      {
        title: 'Delayed Decisions',
        description:
          'Waiting to get back to the office to make critical decisions can result in missed opportunities and slower response times.',
        icon: 'Clock',
      },
      {
        title: 'Poor Team Coordination',
        description:
          'Without mobile access, team collaboration suffers when members are working from different locations.',
        icon: 'Users',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Real-Time Notifications',
        description:
          'Stay informed with instant push notifications for critical events, messages, and updates from your team.',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
        icon: 'Bell',
      },
      {
        id: 2,
        title: 'Offline Mode',
        description:
          'Continue working even without internet connection. All changes sync automatically when you\'re back online.',
        icon: 'Wifi',
      },
      {
        id: 3,
        title: 'Biometric Security',
        description:
          'Secure access with Face ID and Touch ID. Your business data stays protected with enterprise-grade encryption.',
        icon: 'Shield',
      },
      {
        id: 4,
        title: 'Cross-Platform',
        description:
          'Available on iOS and Android. Same great experience across all your devices with cloud sync.',
        icon: 'Smartphone',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Download & Install',
        description:
          'Get the app from App Store or Google Play. Sign in with your existing account or create a new one.',
        icon: 'Download',
      },
      {
        step: 2,
        title: 'Set Up Your Workspace',
        description:
          'Customize your dashboard, enable notifications, and configure offline mode for your needs.',
        icon: 'Settings',
      },
      {
        step: 3,
        title: 'Work Anywhere',
        description:
          'Access all your business tools on the go. Collaborate with your team and manage operations from anywhere.',
        icon: 'CheckCircle2',
      },
    ],
    pricing: [
      {
        name: 'Free',
        price: '0',
        currency: '฿',
        period: 'forever',
        description: 'For individual users',
        features: [
          'Basic features',
          'Up to 3 devices',
          'Community support',
          '5GB storage',
        ],
        cta: {
          text: 'Download Free',
          href: '#contact',
        },
      },
      {
        name: 'Pro',
        price: '499',
        currency: '฿',
        period: 'month',
        description: 'For professionals',
        features: [
          'All free features',
          'Unlimited devices',
          'Priority support',
          '100GB storage',
          'Advanced analytics',
          'Custom branding',
        ],
        highlighted: true,
        cta: {
          text: 'Start Free Trial',
          href: '#contact',
        },
      },
      {
        name: 'Team',
        price: '1,999',
        currency: '฿',
        period: 'month',
        description: 'For teams',
        features: [
          'All Pro features',
          'Team collaboration',
          'Admin controls',
          '1TB shared storage',
          'API access',
          'Dedicated support',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'Is the app free to download?',
        answer:
          'Yes! The app is free to download and use with basic features. Premium features are available with our paid plans.',
      },
      {
        question: 'Does it work offline?',
        answer:
          'Absolutely! The app has a robust offline mode. You can continue working without internet, and all changes will sync when you\'re back online.',
      },
      {
        question: 'What devices are supported?',
        answer:
          'The app supports iOS 14+ and Android 8+. It works great on phones and tablets with optimized interfaces for different screen sizes.',
      },
      {
        question: 'How secure is my data?',
        answer:
          'Your data is encrypted both in transit and at rest. We use bank-level security with biometric authentication and comply with international security standards.',
      },
    ],
    cta: {
      title: 'Ready to Go Mobile?',
      description:
        'Download now and experience the freedom of managing your business from anywhere.',
      primaryButton: {
        text: 'Download Now',
        href: '#contact',
      },
      secondaryButton: {
        text: 'Watch Demo',
        href: '#demo',
      },
    },
    metadata: {
      title: 'Uplift Mobile App - Your Business in Your Pocket',
      description:
        'Powerful mobile app for business management. Real-time data, offline mode, and secure access on iOS and Android.',
      keywords: ['Mobile App', 'Business Management', 'iOS', 'Android', 'Cloud Sync'],
    },
  },
  'ai-analytics-platform': {
    slug: 'ai-analytics-platform',
    highlight: false,
    variants: {
      features: 'bento',
      howItWorks: 'cards',
      problem: 'default',
      pricing: 'comparison',
    },
    hero: {
      badge: '🤖 AI Powered',
      title: 'AI Analytics Platform',
      subtitle: 'Smart Business Intelligence',
      description:
        'Harness the power of artificial intelligence to transform your data into actionable insights. Our AI-driven platform predicts trends, identifies opportunities, and automates decision-making.',
      cta: {
        primary: {
          text: 'Request Demo',
          href: '#contact',
        },
        secondary: {
          text: 'See AI in Action',
          href: '#video',
        },
      },
      video: {
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
        alt: 'AI Analytics Demo',
      },
    },
    problems: [
      {
        title: 'Data Overload',
        description:
          'Too much data with no way to extract meaningful insights leads to missed opportunities and poor decision-making.',
        icon: 'Database',
      },
      {
        title: 'Slow Analysis',
        description:
          'Traditional analytics take days or weeks. By the time insights are available, the opportunity may have passed.',
        icon: 'Clock',
      },
      {
        title: 'Human Bias',
        description:
          'Manual analysis is prone to cognitive biases that can skew results and lead to suboptimal decisions.',
        icon: 'AlertTriangle',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Predictive Analytics',
        description:
          'Use machine learning models to forecast trends, customer behavior, and market changes before they happen.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        icon: 'TrendingUp',
      },
      {
        id: 2,
        title: 'Natural Language Queries',
        description:
          'Ask questions in plain English and get instant answers. No SQL knowledge required to explore your data.',
        icon: 'MessageSquare',
      },
      {
        id: 3,
        title: 'Automated Reports',
        description:
          'AI generates comprehensive reports automatically, highlighting key findings and recommendations.',
        icon: 'FileText',
      },
      {
        id: 4,
        title: 'Anomaly Detection',
        description:
          'Instantly detect unusual patterns and potential issues before they become costly problems.',
        icon: 'AlertCircle',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Connect Data Sources',
        description:
          'Integrate all your data sources including databases, APIs, and cloud services with our secure connectors.',
        icon: 'Link',
      },
      {
        step: 2,
        title: 'AI Processing',
        description:
          'Our AI engine analyzes your data, identifies patterns, and builds predictive models automatically.',
        icon: 'Cpu',
      },
      {
        step: 3,
        title: 'Get Insights',
        description:
          'Receive actionable insights, predictions, and recommendations delivered to your dashboard or inbox.',
        icon: 'Lightbulb',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '9,999',
        currency: '฿',
        period: 'month',
        description: 'For growing businesses',
        features: [
          'Up to 1M data points',
          '5 AI models',
          'Basic predictions',
          'Email support',
        ],
        cta: {
          text: 'Start Trial',
          href: '#contact',
        },
      },
      {
        name: 'Business',
        price: '29,999',
        currency: '฿',
        period: 'month',
        description: 'For scaling companies',
        features: [
          'Up to 10M data points',
          'Unlimited AI models',
          'Advanced predictions',
          'Custom dashboards',
          'API access',
          'Priority support',
        ],
        highlighted: true,
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        currency: '',
        period: '',
        description: 'For large organizations',
        features: [
          'Unlimited data points',
          'Custom AI models',
          'Dedicated infrastructure',
          'SLA guarantee',
          'On-premise option',
          '24/7 support',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'What types of data can be analyzed?',
        answer:
          'Our platform supports structured data (databases, spreadsheets), semi-structured data (JSON, XML), and unstructured data (text, documents). We can connect to virtually any data source.',
      },
      {
        question: 'How accurate are the AI predictions?',
        answer:
          'Accuracy depends on data quality and volume, but our models typically achieve 85-95% accuracy. The system continuously learns and improves over time.',
      },
      {
        question: 'Is my data secure?',
        answer:
          'Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and your data never leaves your control. On-premise deployment is available for maximum security.',
      },
    ],
    cta: {
      title: 'Ready to Unlock AI-Powered Insights?',
      description:
        'Join leading companies using AI to make smarter, faster decisions.',
      primaryButton: {
        text: 'Start Free Trial',
        href: '#contact',
      },
      secondaryButton: {
        text: 'Schedule Demo',
        href: '#demo',
      },
    },
    metadata: {
      title: 'AI Analytics Platform - Smart Business Intelligence',
      description:
        'Transform data into insights with AI-powered analytics. Predictive modeling, natural language queries, and automated reports.',
      keywords: ['AI Analytics', 'Business Intelligence', 'Machine Learning', 'Predictive Analytics'],
    },
  },
  'inventory-management': {
    slug: 'inventory-management',
    highlight: false,
    variants: {
      features: 'cards',
      howItWorks: 'default',
      problem: 'minimal',
      pricing: 'default',
    },
    hero: {
      badge: '📦 Stock Control',
      title: 'Inventory Management',
      subtitle: 'Smart Stock Control System',
      description:
        'Optimize your inventory with real-time tracking, automated reordering, and intelligent forecasting. Never run out of stock or overstock again.',
      cta: {
        primary: {
          text: 'Start Free Trial',
          href: '#contact',
        },
        secondary: {
          text: 'See Features',
          href: '#features',
        },
      },
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=600&fit=crop',
    },
    problems: [
      {
        title: 'Stockouts',
        description:
          'Running out of popular items costs sales and damages customer relationships.',
        icon: 'PackageX',
      },
      {
        title: 'Overstock',
        description:
          'Excess inventory ties up capital and increases storage costs, eating into profits.',
        icon: 'Package',
      },
      {
        title: 'Manual Counting',
        description:
          'Time-consuming physical counts are error-prone and take staff away from valuable work.',
        icon: 'Calculator',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Real-time Tracking',
        description:
          'Know exactly what you have, where it is, and how fast it is moving at any moment.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
        icon: 'MapPin',
      },
      {
        id: 2,
        title: 'Auto Reordering',
        description:
          'Set reorder points and let the system automatically generate purchase orders when stock runs low.',
        icon: 'RefreshCw',
      },
      {
        id: 3,
        title: 'Demand Forecasting',
        description:
          'AI predicts future demand based on historical data, seasonality, and market trends.',
        icon: 'TrendingUp',
      },
      {
        id: 4,
        title: 'Multi-location',
        description:
          'Manage inventory across multiple warehouses, stores, and channels from one dashboard.',
        icon: 'Building2',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Import Products',
        description:
          'Upload your product catalog and current stock levels. Integrate with your existing systems.',
        icon: 'Upload',
      },
      {
        step: 2,
        title: 'Set Rules',
        description:
          'Configure reorder points, safety stock levels, and supplier preferences for each product.',
        icon: 'Settings',
      },
      {
        step: 3,
        title: 'Automate',
        description:
          'Let the system handle day-to-day inventory management while you focus on growth.',
        icon: 'Zap',
      },
    ],
    pricing: [
      {
        name: 'Basic',
        price: '1,499',
        currency: '฿',
        period: 'month',
        description: 'For small businesses',
        features: [
          'Up to 1,000 SKUs',
          '1 location',
          'Basic reporting',
          'Email support',
        ],
        cta: {
          text: 'Start Trial',
          href: '#contact',
        },
      },
      {
        name: 'Professional',
        price: '4,999',
        currency: '฿',
        period: 'month',
        description: 'For growing businesses',
        features: [
          'Up to 10,000 SKUs',
          '5 locations',
          'Advanced analytics',
          'Auto reordering',
          'API access',
          'Priority support',
        ],
        highlighted: true,
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        price: '14,999',
        currency: '฿',
        period: 'month',
        description: 'For large operations',
        features: [
          'Unlimited SKUs',
          'Unlimited locations',
          'Custom integrations',
          'Dedicated manager',
          'SLA guarantee',
          '24/7 support',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'Can I import my existing inventory data?',
        answer:
          'Yes! We support CSV imports and have direct integrations with popular e-commerce platforms, accounting software, and ERP systems.',
      },
      {
        question: 'Does it work with barcode scanners?',
        answer:
          'Absolutely. We support all standard barcode formats and can work with your existing scanners or our mobile app.',
      },
      {
        question: 'How does demand forecasting work?',
        answer:
          'Our AI analyzes your historical sales data, seasonality patterns, and external factors to predict future demand with high accuracy.',
      },
    ],
    cta: {
      title: 'Take Control of Your Inventory',
      description:
        'Stop guessing and start knowing. Optimize stock levels and reduce costs.',
      primaryButton: {
        text: 'Start Free Trial',
        href: '#contact',
      },
      secondaryButton: {
        text: 'Book Demo',
        href: '#demo',
      },
    },
    metadata: {
      title: 'Inventory Management System - Smart Stock Control',
      description:
        'Real-time inventory tracking, automated reordering, and AI-powered demand forecasting for modern businesses.',
      keywords: ['Inventory Management', 'Stock Control', 'Warehouse Management', 'Supply Chain'],
    },
  },
  'crm-system': {
    slug: 'crm-system',
    highlight: false,
    variants: {
      features: 'default',
      howItWorks: 'timeline',
      problem: 'default',
      pricing: 'comparison',
    },
    hero: {
      badge: '💼 Customer Success',
      title: 'CRM System',
      subtitle: 'Customer Relationship Management',
      description:
        'Build stronger customer relationships with our intelligent CRM. Track interactions, automate follow-ups, and close more deals with AI-powered insights.',
      cta: {
        primary: {
          text: 'Try Free',
          href: '#contact',
        },
        secondary: {
          text: 'Watch Demo',
          href: '#video',
        },
      },
      video: {
        src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        thumbnail: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&h=600&fit=crop',
        alt: 'CRM System Demo',
      },
    },
    problems: [
      {
        title: 'Lost Leads',
        description:
          'Without proper tracking, valuable leads slip through the cracks and opportunities are missed.',
        icon: 'UserX',
      },
      {
        title: 'Poor Follow-up',
        description:
          'Inconsistent follow-up processes lead to lost sales and damaged customer relationships.',
        icon: 'Clock',
      },
      {
        title: 'Data Scattered',
        description:
          'Customer information spread across emails, spreadsheets, and notes makes it hard to get a complete picture.',
        icon: 'Layers',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Contact Management',
        description:
          'Store all customer information in one place. Track every interaction, note, and document for a complete customer view.',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop',
        icon: 'Users',
      },
      {
        id: 2,
        title: 'Sales Pipeline',
        description:
          'Visualize your sales process with customizable pipelines. Track deals from lead to close with ease.',
        icon: 'GitBranch',
      },
      {
        id: 3,
        title: 'Email Integration',
        description:
          'Sync emails automatically and send personalized campaigns. Track opens, clicks, and responses.',
        icon: 'Mail',
      },
      {
        id: 4,
        title: 'AI Scoring',
        description:
          'Let AI score leads and predict which deals are most likely to close, so you focus on what matters.',
        icon: 'Brain',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Import Contacts',
        description:
          'Bring in your existing contacts from spreadsheets, email, or other CRM systems effortlessly.',
        icon: 'Upload',
      },
      {
        step: 2,
        title: 'Set Up Pipelines',
        description:
          'Create sales stages that match your process. Customize fields and automation rules.',
        icon: 'Layout',
      },
      {
        step: 3,
        title: 'Start Selling',
        description:
          'Track deals, automate follow-ups, and use AI insights to close more business.',
        icon: 'Rocket',
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '799',
        currency: '฿',
        period: 'user/month',
        description: 'For small teams',
        features: [
          'Up to 1,000 contacts',
          'Basic pipeline',
          'Email integration',
          'Mobile app',
        ],
        cta: {
          text: 'Start Free',
          href: '#contact',
        },
      },
      {
        name: 'Growth',
        price: '1,999',
        currency: '฿',
        period: 'user/month',
        description: 'For scaling teams',
        features: [
          'Unlimited contacts',
          'Multiple pipelines',
          'AI lead scoring',
          'Custom reports',
          'Automation',
          'API access',
        ],
        highlighted: true,
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        currency: '',
        period: '',
        description: 'For large organizations',
        features: [
          'Everything in Growth',
          'Advanced AI features',
          'Custom integrations',
          'Dedicated support',
          'SLA guarantee',
          'Training included',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'Can I migrate from another CRM?',
        answer:
          'Yes! We have migration tools for Salesforce, HubSpot, Pipedrive, and most other CRMs. Our team can help with complex migrations.',
      },
      {
        question: 'Is there a mobile app?',
        answer:
          'Yes, we have native iOS and Android apps with full functionality including offline access to your data.',
      },
      {
        question: 'How does the AI lead scoring work?',
        answer:
          'Our AI analyzes historical data to identify patterns in successful deals, then scores new leads based on similarity to past winners.',
      },
    ],
    cta: {
      title: 'Close More Deals, Build Better Relationships',
      description:
        'Join thousands of sales teams using our CRM to grow revenue.',
      primaryButton: {
        text: 'Start Free Trial',
        href: '#contact',
      },
      secondaryButton: {
        text: 'See Pricing',
        href: '#pricing',
      },
    },
    metadata: {
      title: 'CRM System - Customer Relationship Management',
      description:
        'Intelligent CRM with AI-powered lead scoring, sales automation, and customer insights. Build stronger relationships and close more deals.',
      keywords: ['CRM', 'Customer Relationship Management', 'Sales', 'Lead Management'],
    },
  },
  'e-commerce-solution': {
    slug: 'e-commerce-solution',
    highlight: false,
    variants: {
      features: 'bento',
      howItWorks: 'cards',
      problem: 'minimal',
      pricing: 'default',
    },
    hero: {
      variant: 'mobile',
      badge: '🛒 Online Store',
      title: 'E-Commerce Solution',
      subtitle: 'Complete Online Selling Platform',
      description:
        'Launch your online store in minutes with our all-in-one e-commerce platform. Beautiful themes, secure payments, and powerful tools to grow your business.',
      deviceMockups: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=800&fit=crop',
      ],
      downloadBadges: {
        appStore: 'https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png',
        playStore: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
      },
    },
    problems: [
      {
        title: 'Technical Complexity',
        description:
          'Building an online store traditionally requires coding skills and expensive developers.',
        icon: 'Code',
      },
      {
        title: 'Payment Hassles',
        description:
          'Setting up secure payment processing is complicated and risky without expertise.',
        icon: 'CreditCard',
      },
      {
        title: 'Marketing Challenges',
        description:
          'Getting customers to your store and converting them requires multiple tools and skills.',
        icon: 'Target',
      },
    ],
    features: [
      {
        id: 1,
        title: 'Drag & Drop Builder',
        description:
          'Create stunning stores without any coding. Choose from 100+ themes and customize everything visually.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        icon: 'Palette',
      },
      {
        id: 2,
        title: 'Secure Payments',
        description:
          'Accept credit cards, bank transfers, and mobile payments. PCI compliant and fraud protected.',
        icon: 'Shield',
      },
      {
        id: 3,
        title: 'Built-in Marketing',
        description:
          'SEO tools, email marketing, social selling, and ads management all in one place.',
        icon: 'Megaphone',
      },
      {
        id: 4,
        title: 'Mobile Commerce',
        description:
          'Your store looks perfect on any device. Plus, manage everything from our mobile app.',
        icon: 'Smartphone',
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: 'Choose Template',
        description:
          'Pick from our library of professionally designed themes optimized for conversions.',
        icon: 'Layout',
      },
      {
        step: 2,
        title: 'Add Products',
        description:
          'Upload your products, set prices, and configure shipping and tax options.',
        icon: 'Package',
      },
      {
        step: 3,
        title: 'Start Selling',
        description:
          'Launch your store and start accepting orders. We handle hosting, security, and updates.',
        icon: 'Rocket',
      },
    ],
    pricing: [
      {
        name: 'Basic',
        price: '999',
        currency: '฿',
        period: 'month',
        description: 'For new sellers',
        features: [
          'Up to 100 products',
          'Basic themes',
          '2% transaction fee',
          'Email support',
        ],
        cta: {
          text: 'Start Free',
          href: '#contact',
        },
      },
      {
        name: 'Business',
        price: '2,999',
        currency: '฿',
        period: 'month',
        description: 'For growing stores',
        features: [
          'Unlimited products',
          'Premium themes',
          '1% transaction fee',
          'Abandoned cart recovery',
          'Gift cards',
          'Priority support',
        ],
        highlighted: true,
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
      },
      {
        name: 'Enterprise',
        price: '9,999',
        currency: '฿',
        period: 'month',
        description: 'For high-volume sellers',
        features: [
          'Everything in Business',
          '0% transaction fee',
          'Custom checkout',
          'B2B features',
          'Dedicated manager',
          'API access',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
      },
    ],
    faqs: [
      {
        question: 'Do I need technical skills?',
        answer:
          'Not at all! Our drag-and-drop builder is designed for anyone. If you can use a smartphone, you can build a store.',
      },
      {
        question: 'What payment methods are supported?',
        answer:
          'We support all major credit cards, bank transfers, PromptPay, TrueMoney, and more. Integration with popular Thai payment gateways is built-in.',
      },
      {
        question: 'Can I sell internationally?',
        answer:
          'Yes! Multi-currency, multi-language, and international shipping options are all available. Expand globally with ease.',
      },
    ],
    cta: {
      title: 'Start Selling Online Today',
      description:
        'Join thousands of successful merchants. No technical skills required.',
      primaryButton: {
        text: 'Start Free Trial',
        href: '#contact',
      },
      secondaryButton: {
        text: 'View Demo Store',
        href: '#demo',
      },
    },
    metadata: {
      title: 'E-Commerce Solution - Complete Online Selling Platform',
      description:
        'All-in-one e-commerce platform to build, manage, and grow your online store. Beautiful themes, secure payments, and powerful marketing tools.',
      keywords: ['E-Commerce', 'Online Store', 'Shopping Cart', 'Sell Online'],
    },
  },
}
