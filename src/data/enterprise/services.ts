export interface EnterpriseService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  targetScenarios: string[];
  pricing: {
    model: string;
    description: string;
  };
}

export const enterpriseServices: EnterpriseService[] = [
  {
    id: 'legacy-modernization',
    title: 'Legacy System Modernization',
    description: 'Transform decades-old legacy systems into modern, maintainable architectures without disrupting business operations.',
    icon: '🔄',
    features: [
      'AI-powered code analysis and business logic mapping',
      'Gradual modernization with zero-downtime migration',
      'Automated testing suite generation for legacy systems',
      'Microservices architecture transformation',
      'Database modernization and optimization',
      'API-first integration approach'
    ],
    benefits: [
      'Reduce maintenance costs by 60-80%',
      'Eliminate technical debt and vendor lock-in',
      'Improve system performance by 10x',
      'Enable rapid feature development',
      'Attract and retain top technical talent',
      'Future-proof technology infrastructure'
    ],
    targetScenarios: [
      'Post-acquisition system integration',
      'Mainframe to cloud migration',
      'End-of-life technology replacement',
      'Vendor dependency elimination',
      'Performance and scalability issues',
      'Developer productivity challenges'
    ],
    pricing: {
      model: 'Fixed-scope engagement',
      description: 'Starting at $500K for comprehensive legacy system assessment and modernization roadmap'
    }
  },
  {
    id: 'compliance-automation',
    title: 'Compliance & Security Automation',
    description: 'Achieve and maintain regulatory compliance through automated monitoring, reporting, and remediation systems.',
    icon: '🛡️',
    features: [
      'Automated compliance scanning and monitoring',
      'Real-time audit trail generation',
      'Multi-jurisdiction regulatory support',
      'Continuous security assessment',
      'Automated remediation workflows',
      'Executive compliance dashboards'
    ],
    benefits: [
      'Reduce compliance costs by 70%+',
      'Eliminate manual audit processes',
      'Achieve 99.9% compliance uptime',
      'Proactive risk identification and mitigation',
      'Simplified regulatory reporting',
      'Reduced legal and penalty exposure'
    ],
    targetScenarios: [
      'HIPAA compliance for healthcare systems',
      'SOX compliance for financial reporting',
      'GDPR compliance for customer data',
      'ISO 27001 security certification',
      'PCI-DSS for payment processing',
      'Multi-jurisdiction regulatory requirements'
    ],
    pricing: {
      model: 'Outcome-based pricing',
      description: 'Pricing tied to compliance achievements and cost savings, starting at $250K'
    }
  },
  {
    id: 'security-auditing',
    title: 'Enterprise Security Auditing',
    description: 'Comprehensive security assessment and remediation for enterprise systems, infrastructure, and data.',
    icon: '🔒',
    features: [
      'Automated vulnerability scanning',
      'Penetration testing and threat modeling',
      'Code security analysis',
      'Infrastructure security assessment',
      'Data encryption and access control review',
      'Security incident response planning'
    ],
    benefits: [
      'Identify and fix 95%+ security vulnerabilities',
      'Prevent data breaches and cyber attacks',
      'Achieve enterprise security certifications',
      'Reduce cyber insurance premiums',
      'Build customer and investor trust',
      'Enable secure digital transformation'
    ],
    targetScenarios: [
      'Pre-acquisition security due diligence',
      'Post-breach security remediation',
      'Regulatory security requirements',
      'Cyber insurance compliance',
      'Customer security assessments',
      'Board-level security reporting'
    ],
    pricing: {
      model: 'Comprehensive assessment',
      description: 'Starting at $150K for full enterprise security audit and remediation plan'
    }
  },
  {
    id: 'system-integration',
    title: 'Enterprise System Integration',
    description: 'Seamlessly connect disparate enterprise systems, applications, and data sources into unified platforms.',
    icon: '🔗',
    features: [
      'API-first integration architecture',
      'Real-time data synchronization',
      'Legacy system connectivity',
      'Cloud and on-premise integration',
      'Event-driven architecture',
      'Master data management'
    ],
    benefits: [
      'Eliminate data silos and redundancy',
      'Improve operational efficiency by 40%+',
      'Enable single source of truth',
      'Accelerate business process automation',
      'Support M&A integration requirements',
      'Enable advanced analytics and AI'
    ],
    targetScenarios: [
      'Post-merger system consolidation',
      'ERP system integration',
      'Customer 360-degree view creation',
      'Multi-cloud infrastructure integration',
      'Partner and supplier system connectivity',
      'Digital transformation enablement'
    ],
    pricing: {
      model: 'Phased implementation',
      description: 'Starting at $300K per integration phase, with volume discounts for comprehensive programs'
    }
  }
];