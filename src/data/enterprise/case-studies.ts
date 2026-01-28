export interface EnterpriseCaseStudy {
  slug: string;
  title: string;
  description: string;
  client: {
    name: string;
    industry: string;
    size: string;
    challenge: string;
  };
  challenge: {
    overview: string;
    details: string[];
    metrics: {
      label: string;
      value: string;
    }[];
  };
  solution: {
    overview: string;
    approach: string[];
    timeline: string;
    technologies: string[];
  };
  results: {
    overview: string;
    metrics: {
      label: string;
      before: string;
      after: string;
      improvement: string;
    }[];
    outcomes: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  publishedDate: string;
  tags: string[];
}

export const enterpriseCaseStudies: EnterpriseCaseStudy[] = [
  {
    slug: 'fortune-500-banking-cobol-modernization',
    title: 'Fortune 500 Bank: Legacy COBOL System Modernization',
    description: 'GoBananas modernized core COBOL banking systems with zero downtime and full regulatory compliance, achieving 40% cost reduction and $2.3M annual savings.',
    client: {
      name: 'Fortune 500 Bank',
      industry: 'Financial Services',
      size: '50,000+ employees',
      challenge: 'Legacy COBOL system modernization'
    },
    challenge: {
      overview: 'A Fortune 500 bank needed to modernize their core COBOL banking system that had been running for 30+ years. The system handled critical customer transactions and regulatory reporting, requiring zero downtime during modernization.',
      details: [
        'Legacy COBOL mainframe system with decades of undocumented business logic',
        'Critical customer transaction processing requiring 100% uptime',
        'Complex regulatory compliance requirements (SOX, Basel III)',
        'Risk of service disruption affecting millions of customers',
        'High maintenance costs and difficulty finding COBOL developers'
      ],
      metrics: [
        { label: 'System Age', value: '30+ years' },
        { label: 'Daily Transactions', value: '10M+' },
        { label: 'Annual Maintenance', value: '$5M' },
        { label: 'Downtime Risk', value: '$50M+' }
      ]
    },
    solution: {
      overview: 'GoBananas implemented a phased refactoring approach with parallel systems, ensuring compliance-aware modernization with zero downtime during the 6-month transition.',
      approach: [
        'AI-powered COBOL codebase analysis and business logic mapping',
        'Phased refactoring with parallel systems running simultaneously',
        'Automated testing suite generation covering critical transaction paths',
        'Gradual migration with real-time validation and rollback capabilities',
        'Comprehensive compliance monitoring throughout the process'
      ],
      timeline: '6 months',
      technologies: [
        'GoBananas AI Platform',
        'Modern Java/Spring architecture',
        'Docker containerization',
        'Apache Kafka for real-time processing',
        'PostgreSQL with replication',
        'Automated compliance frameworks'
      ]
    },
    results: {
      overview: 'Successfully modernized all critical banking systems on schedule with zero customer-facing downtime, exceeding all regulatory requirements and delivering significant cost savings.',
      metrics: [
        {
          label: 'System Downtime',
          before: 'High risk scenario',
          after: '0 minutes',
          improvement: '40% Cost Reduction'
        },
        {
          label: 'Annual Savings',
          before: '$5M maintenance',
          after: '$2.7M savings',
          improvement: '$2.3M Annual Savings'
        },
        {
          label: 'Development Speed',
          before: '6+ months per feature',
          after: '2 months per feature',
          improvement: '6 months Timeline'
        },
        {
          label: 'Developer Productivity',
          before: 'Limited COBOL talent',
          after: 'Modern tech stack',
          improvement: '3x improvement'
        }
      ],
      outcomes: [
        'Zero-downtime migration of critical banking systems',
        'Full SOX and regulatory compliance maintained throughout',
        'Reduced system maintenance costs by 40%',
        'Improved developer productivity by 3x',
        'Foundation for future digital transformation initiatives',
        'Enhanced system reliability and performance'
      ]
    },
    testimonial: {
      quote: 'GoBananas helped us modernize our core banking system with zero downtime and full regulatory compliance. The systematic approach gave us confidence throughout the entire process.',
      author: 'Chief Technology Officer',
      role: 'Fortune 500 Bank'
    },
    featured: true,
    publishedDate: '2024-09-15',
    tags: ['Financial Services', 'COBOL Modernization', 'Zero Downtime', 'Regulatory Compliance']
  },
  {
    slug: 'global-logistics-multistack-extension',
    title: 'Global Logistics: Multi-Stack Codebase Extension',
    description: 'Extended legacy C# systems with modern capabilities for a 25K+ employee logistics company, delivering 60% faster feature development without operational disruption.',
    client: {
      name: 'Global Logistics Leader',
      industry: 'Transportation & Logistics',
      size: '25,000+ employees',
      challenge: 'Multi-stack codebase extension'
    },
    challenge: {
      overview: 'A global logistics leader needed to add modern real-time tracking capabilities to their legacy C# backend systems without disrupting 24/7 operations or requiring a complete system rewrite.',
      details: [
        'Legacy C# monolithic architecture serving critical logistics operations',
        '24/7 operational requirements with zero tolerance for downtime',
        'Need for real-time tracking and modern API capabilities',
        'Complex integration with existing warehouse management systems',
        'Tight timeline to compete with modern logistics platforms'
      ],
      metrics: [
        { label: 'System Complexity', value: 'Monolithic C#' },
        { label: 'Operational Hours', value: '24/7' },
        { label: 'Integration Points', value: '50+' },
        { label: 'Development Backlog', value: '12+ months' }
      ]
    },
    solution: {
      overview: 'GoBananas implemented incremental modernization with API layer abstraction, allowing legacy systems to coexist with modern features through a 4-month phased approach.',
      approach: [
        'API layer abstraction to expose legacy functionality',
        'Microservices architecture for new feature development',
        'Real-time event streaming integration with existing systems',
        'Incremental feature rollout with A/B testing capabilities',
        'Zero-disruption deployment strategy with automated rollbacks'
      ],
      timeline: '4 months',
      technologies: [
        'GoBananas Extension Platform',
        '.NET Core microservices',
        'Azure Service Bus',
        'Redis for caching',
        'React.js frontend',
        'SignalR for real-time updates'
      ]
    },
    results: {
      overview: 'Successfully added modern capabilities to legacy systems without disrupting operations, achieving significant improvements in feature delivery speed and customer satisfaction.',
      metrics: [
        {
          label: 'Feature Delivery Speed',
          before: '12+ months backlog',
          after: '4.8 months average',
          improvement: '60% Delivery Speed'
        },
        {
          label: 'New Features Delivered',
          before: '2-3 per year',
          after: '8+ per year',
          improvement: '8 New Features'
        },
        {
          label: 'System Downtime',
          before: '4+ hours monthly',
          after: '0 hours',
          improvement: '4 months Timeline'
        },
        {
          label: 'Customer Satisfaction',
          before: '72% satisfaction',
          after: '89% satisfaction',
          improvement: '17-point increase'
        }
      ],
      outcomes: [
        'Added real-time tracking to legacy systems without downtime',
        'Integrated modern APIs without disrupting existing workflows',
        'Reduced feature delivery time by 60%',
        'Maintained full operational continuity throughout transition',
        'Enhanced customer experience with real-time visibility',
        'Established foundation for future modernization phases'
      ]
    },
    testimonial: {
      quote: 'We were able to add modern capabilities to our legacy C# backend without disrupting operations. The phased approach was perfect for our 24/7 operations.',
      author: 'VP of Engineering',
      role: 'Global Logistics Leader'
    },
    featured: true,
    publishedDate: '2024-06-20',
    tags: ['Transportation', 'Legacy Extension', 'Real-time Systems', 'API Integration']
  },
  {
    slug: 'federal-agency-technical-debt-reduction',
    title: 'Federal Agency: Technical Debt Reduction at Scale',
    description: 'Systematically reduced technical debt by 35% for a 15K+ employee federal agency, improving system uptime to 99.9% and accelerating citizen service delivery.',
    client: {
      name: 'Federal Agency',
      industry: 'Public Sector',
      size: '15,000+ employees',
      challenge: 'Technical debt reduction at scale'
    },
    challenge: {
      overview: 'A federal agency needed to systematically address decades of accumulated technical debt across multiple legacy systems while maintaining critical citizen services and strict security requirements.',
      details: [
        'Multiple legacy systems with accumulated technical debt over 20+ years',
        'Critical citizen-facing services requiring high availability',
        'Strict security and compliance requirements (FedRAMP, FISMA)',
        'Limited maintenance windows for system improvements',
        'Need for measurable improvements in system reliability'
      ],
      metrics: [
        { label: 'Legacy Systems', value: '25+' },
        { label: 'Technical Debt Score', value: 'High Risk' },
        { label: 'System Uptime', value: '94.2%' },
        { label: 'Security Compliance', value: 'Partial' }
      ]
    },
    solution: {
      overview: 'GoBananas implemented systematic debt prioritization with automated refactoring and governance frameworks, ensuring security and compliance throughout the modernization process.',
      approach: [
        'AI-powered technical debt assessment and prioritization framework',
        'Automated refactoring with security-first governance controls',
        'Phased improvement cycles with measurable progress tracking',
        'Integration with existing CI/CD pipelines and security scanning',
        'Comprehensive monitoring and alerting for system health'
      ],
      timeline: '12 months',
      technologies: [
        'GoBananas Debt Analysis Platform',
        'Automated security scanning',
        'Infrastructure as Code (Terraform)',
        'Kubernetes orchestration',
        'Prometheus monitoring',
        'GitOps deployment workflows'
      ]
    },
    results: {
      overview: 'Achieved systematic technical debt reduction with measurable improvements in system reliability, security posture, and citizen service delivery capabilities.',
      metrics: [
        {
          label: 'Technical Debt Score',
          before: 'High Risk (85/100)',
          after: 'Medium Risk (55/100)',
          improvement: '35% Debt Reduction'
        },
        {
          label: 'System Uptime',
          before: '94.2% average',
          after: '99.9% average',
          improvement: '99.9% System Uptime'
        },
        {
          label: 'Security Compliance',
          before: '73% compliant',
          after: '98% compliant',
          improvement: '85% Reliability Improvement'
        },
        {
          label: 'Feature Deployment',
          before: '3+ months average',
          after: '1.5 months average',
          improvement: '50% faster deployment'
        }
      ],
      outcomes: [
        'Reduced technical debt by 35% systematically across all systems',
        'Improved system uptime to 99.9% SLA compliance',
        'Enhanced security posture across all federal systems',
        'Accelerated new feature deployment by 2x',
        'Established continuous improvement processes',
        'Better citizen service delivery and user experience'
      ]
    },
    testimonial: {
      quote: 'The systematic approach to technical debt gave us measurable improvements in system reliability. We can now deliver citizen services more effectively.',
      author: 'Chief Information Officer',
      role: 'Federal Agency'
    },
    featured: false,
    publishedDate: '2024-03-10',
    tags: ['Public Sector', 'Technical Debt', 'System Reliability', 'Federal Compliance']
  }
];