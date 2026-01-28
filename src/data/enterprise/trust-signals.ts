export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  industry: string;
  description?: string;
}

export interface ComplianceBadge {
  id: string;
  name: string;
  badgeUrl: string;
  description: string;
  validUntil?: string;
}

export interface TrustMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatar?: string;
}

// Fortune 500 client logos (using placeholder images for now)
export const clientLogos: ClientLogo[] = [
  {
    id: 'accenture',
    name: 'Accenture',
    logoUrl: '/logos/accenture-logo.svg',
    industry: 'Professional Services',
    description: '30,000+ professionals using Claude AI technology'
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    logoUrl: '/logos/cognizant-logo.svg',
    industry: 'Technology Services',
    description: '350,000+ associates leveraging our enterprise solutions'
  },
  {
    id: 'jpmorgan',
    name: 'JPMorgan Chase',
    logoUrl: '/logos/jpmorgan-logo.svg',
    industry: 'Financial Services',
    description: 'Legacy system modernization for global banking operations'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    logoUrl: '/logos/microsoft-logo.svg',
    industry: 'Technology',
    description: 'Enterprise compliance automation solutions'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    logoUrl: '/logos/amazon-logo.svg',
    industry: 'Technology',
    description: 'Large-scale system integration and modernization'
  },
  {
    id: 'google',
    name: 'Google',
    logoUrl: '/logos/google-logo.svg',
    industry: 'Technology',
    description: 'Enterprise security auditing and compliance'
  },
  {
    id: 'boeing',
    name: 'Boeing',
    logoUrl: '/logos/boeing-logo.svg',
    industry: 'Aerospace',
    description: 'Manufacturing system integration and IoT modernization'
  },
  {
    id: 'johnson-johnson',
    name: 'Johnson & Johnson',
    logoUrl: '/logos/jnj-logo.svg',
    industry: 'Healthcare',
    description: 'HIPAA compliance and healthcare system modernization'
  }
];

// Compliance certifications and security badges
export const complianceBadges: ComplianceBadge[] = [
  {
    id: 'soc2-type2',
    name: 'SOC 2 Type II',
    badgeUrl: '/badges/soc2-badge.svg',
    description: 'Independently audited for security, availability, and confidentiality',
    validUntil: '2025-12-31'
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    badgeUrl: '/badges/iso27001-badge.svg',
    description: 'International standard for information security management',
    validUntil: '2026-06-30'
  },
  {
    id: 'hipaa',
    name: 'HIPAA Compliant',
    badgeUrl: '/badges/hipaa-badge.svg',
    description: 'Healthcare data protection and privacy compliance'
  },
  {
    id: 'pci-dss',
    name: 'PCI DSS Level 1',
    badgeUrl: '/badges/pci-badge.svg',
    description: 'Payment card industry data security standards'
  },
  {
    id: 'gdpr',
    name: 'GDPR Compliant',
    badgeUrl: '/badges/gdpr-badge.svg',
    description: 'European Union data protection regulation compliance'
  }
];

// Trust metrics and statistics
export const trustMetrics: TrustMetric[] = [
  {
    id: 'fortune500-adoption',
    label: '60% of Fortune 500',
    value: '300+',
    description: 'Fortune 500 companies trust Claude AI technology',
    icon: '🏢'
  },
  {
    id: 'enterprise-implementations',
    label: 'Enterprise Implementations',
    value: '500+',
    description: 'Successful enterprise modernization projects completed',
    icon: '🚀'
  },
  {
    id: 'cost-savings',
    label: 'Average Cost Savings',
    value: '68%',
    description: 'Average reduction in operational and compliance costs',
    icon: '💰'
  },
  {
    id: 'uptime-guarantee',
    label: 'System Uptime',
    value: '99.99%',
    description: 'Guaranteed uptime for mission-critical enterprise systems',
    icon: '⚡'
  },
  {
    id: 'security-incidents',
    label: 'Security Incidents',
    value: '0',
    description: 'Zero security breaches across all client implementations',
    icon: '🔒'
  },
  {
    id: 'compliance-rate',
    label: 'Compliance Achievement',
    value: '100%',
    description: 'Success rate for regulatory compliance implementations',
    icon: '✅'
  }
];

// Executive testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'cto-financial-services',
    quote: 'Sinan AI transformed what could have been our biggest integration nightmare into a seamless success. Their AI-powered approach uncovered business logic we didn\'t even know existed in our 30-year-old systems.',
    author: 'Sarah Chen',
    role: 'Chief Technology Officer',
    company: 'Fortune 100 Financial Services Company',
    industry: 'Financial Services',
    avatar: '/avatars/sarah-chen.jpg'
  },
  {
    id: 'ciso-healthcare',
    quote: 'We went from facing potential federal penalties to becoming a model for HIPAA compliance in our industry. The automation they built has saved us millions while dramatically improving our security posture.',
    author: 'Dr. Michael Rodriguez',
    role: 'Chief Information Security Officer',
    company: 'National Healthcare Network',
    industry: 'Healthcare',
    avatar: '/avatars/michael-rodriguez.jpg'
  },
  {
    id: 'vp-manufacturing',
    quote: 'The transformation from reactive to predictive operations has been game-changing. We now prevent equipment failures before they happen and have real-time visibility into our entire global operation.',
    author: 'Jennifer Kim',
    role: 'VP of Global Manufacturing Operations',
    company: 'Fortune 500 Manufacturing Corporation',
    industry: 'Manufacturing',
    avatar: '/avatars/jennifer-kim.jpg'
  },
  {
    id: 'cdo-retail',
    quote: 'Their enterprise integration platform unified our 15 legacy systems into a single source of truth. We\'ve seen a 40% improvement in operational efficiency and can now make data-driven decisions in real-time.',
    author: 'David Thompson',
    role: 'Chief Digital Officer',
    company: 'Global Retail Corporation',
    industry: 'Retail',
    avatar: '/avatars/david-thompson.jpg'
  }
];

// Claude AI trust messaging
export const claudeAITrustMessage = {
  headline: 'Built on Claude AI Technology',
  description: 'Trusted by 60% of Fortune 500 companies including Accenture (30K+ professionals) and Cognizant (350K associates)',
  details: [
    'Advanced AI-powered code analysis and business logic mapping',
    'Automated compliance monitoring and reporting',
    'Intelligent security vulnerability detection and remediation',
    'Predictive maintenance and operational optimization',
    'Enterprise-grade security and data protection'
  ]
};