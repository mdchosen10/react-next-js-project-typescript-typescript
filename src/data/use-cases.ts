export interface UseCase {
  id: string;
  title: string;
  industry: 'Financial Services' | 'Healthcare' | 'Manufacturing' | 'Transportation' | 'Government' | 'Energy' | 'Merger & Acquisition' | 'Technical Debt';
  slug: string;
  description: string;
  featured: boolean;

  challenge: {
    overview: string;
    businessImpact: string[];
    technicalChallenges: string[];
    constraints: string[];
  };

  approach: {
    overview: string;
    methodology: string[];
    technologies: string[];
    timeline: string;
    teamSize: string;
  };

  results: {
    overview: string;
    metrics: {
      label: string;
      before: string;
      after: string;
      improvement: string;
    }[];
    businessOutcomes: string[];
    technicalOutcomes: string[];
  };

  migration: {
    from: string[];
    to: string[];
    strategy: string;
  };

  roi: {
    investment: string;
    savings: string;
    paybackPeriod: string;
    annualBenefit: string;
  };

  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const useCases: UseCase[] = [
  {
    id: 'financial-cobol-modernization',
    title: 'Fortune 500 Bank: COBOL Mainframe to Cloud-Native',
    industry: 'Financial Services',
    slug: 'fortune-500-bank-cobol-modernization',
    description: 'Migrate mission-critical COBOL banking systems to modern cloud-native architecture with zero downtime, achieving 40% cost reduction and maintaining full regulatory compliance.',
    featured: true,

    challenge: {
      overview: 'A Fortune 500 bank operated core banking systems on 30+ year old COBOL mainframes. The system processed 10M+ daily transactions serving millions of customers, requiring 100% uptime and strict regulatory compliance.',
      businessImpact: [
        '$5M+ annual maintenance costs with limited COBOL developer availability',
        'Unable to launch new digital banking features competitive with fintech',
        'Risk of catastrophic failure with aging hardware and undocumented logic',
        'Regulatory pressure to modernize and improve security posture'
      ],
      technicalChallenges: [
        '2.5M+ lines of undocumented COBOL code with 30 years of business logic',
        'Tight coupling between mainframe layers and legacy databases',
        'Complex transaction processing requiring ACID guarantees',
        'Integration with 50+ downstream systems and reporting tools'
      ],
      constraints: [
        'Zero tolerance for downtime - 24/7/365 operation required',
        'SOX, Basel III, and banking regulatory compliance mandatory',
        'Cannot disrupt customer transactions or account access',
        'Limited testing windows and rollback capabilities needed'
      ]
    },

    approach: {
      overview: 'Implemented phased strangler pattern migration with parallel system operation, automated testing, and gradual traffic cutover over 6 months.',
      methodology: [
        'AI-powered COBOL analysis to extract and document business rules',
        'Built cloud-native microservices architecture with identical functionality',
        'Parallel system operation with transaction-level validation',
        'Automated regression testing covering 10,000+ transaction scenarios',
        'Gradual traffic migration starting with read-only queries, then writes',
        'Real-time monitoring with automated rollback triggers'
      ],
      technologies: [
        'Java 17 + Spring Boot microservices',
        'PostgreSQL with multi-region replication',
        'Apache Kafka for event streaming',
        'Kubernetes on AWS EKS',
        'Terraform for infrastructure as code',
        'DataDog for observability'
      ],
      timeline: '6 months from kickoff to full production cutover',
      teamSize: '12 engineers (4 COBOL specialists, 8 modern stack developers)'
    },

    results: {
      overview: 'Completed migration with zero customer-impacting incidents, exceeded all regulatory requirements, and delivered substantial cost savings while modernizing technology foundation.',
      metrics: [
        {
          label: 'System Downtime',
          before: 'High risk scenario',
          after: '0 minutes',
          improvement: '100% uptime maintained'
        },
        {
          label: 'Annual Operating Costs',
          before: '$5M maintenance',
          after: '$3M operating',
          improvement: '40% cost reduction'
        },
        {
          label: 'Feature Delivery Time',
          before: '6-9 months per feature',
          after: '2-3 weeks per feature',
          improvement: '12x faster delivery'
        },
        {
          label: 'Transaction Performance',
          before: '200ms average latency',
          after: '45ms average latency',
          improvement: '77% faster'
        }
      ],
      businessOutcomes: [
        'Saved $2.3M annually in reduced maintenance and infrastructure costs',
        'Enabled rapid digital banking feature launches competitive with fintech',
        'Eliminated risk of mainframe failure and vendor lock-in',
        'Attracted modern engineering talent, reducing hiring timeline by 60%',
        'Positioned bank for future AI/ML initiatives on transaction data'
      ],
      technicalOutcomes: [
        'Migrated 2.5M lines of COBOL to modern Java microservices',
        'Zero data loss or corruption across 10M+ daily transactions',
        'Achieved 99.99% uptime SLA from day one of production',
        'Improved transaction processing speed by 77%',
        'Established CI/CD pipeline reducing deployment time from days to hours'
      ]
    },

    migration: {
      from: ['IBM z/OS Mainframe', 'COBOL', 'DB2', 'CICS', 'JCL batch jobs'],
      to: ['AWS Cloud', 'Java/Spring Boot', 'PostgreSQL', 'Kubernetes', 'Apache Kafka'],
      strategy: 'Strangler Fig Pattern with parallel system validation'
    },

    roi: {
      investment: '$4.2M (6-month project)',
      savings: '$2.3M annual recurring',
      paybackPeriod: '18 months',
      annualBenefit: '$2.3M + improved competitive positioning'
    },

    testimonial: {
      quote: 'GoBananas gave us confidence to modernize our core banking systems without putting our customers at risk. Zero downtime was achieved and we\'re now innovating faster than we have in 20 years.',
      author: 'Michael Chen',
      role: 'Chief Technology Officer',
      company: 'Fortune 500 Bank'
    }
  },

  {
    id: 'healthcare-patient-management',
    title: 'Healthcare System: Legacy Patient Management Modernization',
    industry: 'Healthcare',
    slug: 'healthcare-legacy-patient-management',
    description: 'Transform 15-year-old patient management system to modern cloud platform with HIPAA compliance, improving patient care coordination and reducing administrative overhead by 45%.',
    featured: true,

    challenge: {
      overview: 'A regional healthcare network with 12 hospitals relied on a legacy on-premise patient management system built in 2008. The system was unable to support telehealth, real-time care coordination, or modern patient portals.',
      businessImpact: [
        '45% of staff time spent on manual data entry and system workarounds',
        'Unable to offer telehealth services during COVID-19 pandemic',
        'Poor patient experience with 3-5 day delays in record access',
        'Missing revenue from lack of integrated billing and claims processing'
      ],
      technicalChallenges: [
        'Monolithic .NET application with 800K+ lines of tightly coupled code',
        'Legacy SQL Server database with 15 years of patient records (50M+ records)',
        'Integration with 30+ medical devices and lab systems via custom protocols',
        'No API layer - all integrations were database-level or file-based'
      ],
      constraints: [
        'HIPAA compliance mandatory with full audit trail',
        'Cannot disrupt patient care or access to medical records',
        'Must support 24/7 emergency department operations',
        'Limited budget due to healthcare industry margin pressure'
      ]
    },

    approach: {
      overview: 'Built modern cloud platform with API-first architecture, migrated data in phases by hospital, and provided staff training to ensure smooth adoption.',
      methodology: [
        'API layer built around legacy system for immediate telehealth support',
        'Microservices architecture for scheduling, records, billing',
        'Phased hospital-by-hospital migration over 8 months',
        'Real-time data synchronization during transition period',
        'Comprehensive staff training program with super-user model',
        'HIPAA audit logging and encryption at rest and in transit'
      ],
      technologies: [
        'Azure Cloud with HIPAA-compliant configurations',
        'Node.js + React for modern patient and staff portals',
        'PostgreSQL with encryption and audit logging',
        'HL7 FHIR APIs for healthcare interoperability',
        'Azure API Management for security and throttling',
        'Tableau for analytics and reporting'
      ],
      timeline: '8 months including training and phased rollout',
      teamSize: '10 engineers + 2 healthcare IT specialists'
    },

    results: {
      overview: 'Successfully modernized patient management across all 12 hospitals, enabled telehealth services, and dramatically improved operational efficiency and patient satisfaction.',
      metrics: [
        {
          label: 'Administrative Time',
          before: '45% on manual entry',
          after: '15% on system tasks',
          improvement: '67% reduction'
        },
        {
          label: 'Patient Record Access',
          before: '3-5 days average',
          after: 'Real-time access',
          improvement: 'Instant availability'
        },
        {
          label: 'System Maintenance',
          before: '$1.8M annually',
          after: '$0.9M annually',
          improvement: '50% cost reduction'
        },
        {
          label: 'Patient Satisfaction',
          before: '68% satisfaction',
          after: '89% satisfaction',
          improvement: '31% improvement'
        }
      ],
      businessOutcomes: [
        'Enabled telehealth for 100K+ patients during pandemic',
        'Reduced administrative overhead by $900K annually',
        'Improved patient satisfaction scores from 68% to 89%',
        'Accelerated billing cycle from 45 days to 12 days',
        'Attracted top clinical talent with modern technology'
      ],
      technicalOutcomes: [
        'Migrated 50M+ patient records with zero data loss',
        'Integrated with 30+ medical devices via HL7 FHIR standards',
        'Achieved 99.97% system uptime vs 94% with legacy system',
        'Enabled real-time care coordination across 12 hospitals',
        'Built patient portal with 75% adoption rate in first year'
      ]
    },

    migration: {
      from: ['On-premise .NET monolith', 'SQL Server 2008', 'Custom file-based integrations', 'VPN-based remote access'],
      to: ['Azure Cloud', 'Microservices (Node.js/React)', 'PostgreSQL', 'HL7 FHIR APIs', 'Modern authentication'],
      strategy: 'Phased migration by hospital with parallel operation'
    },

    roi: {
      investment: '$2.8M (8-month project)',
      savings: '$900K annual + improved patient outcomes',
      paybackPeriod: '3 years',
      annualBenefit: '$900K + telehealth revenue + patient satisfaction'
    },

    testimonial: {
      quote: 'The modernization enabled us to provide telehealth services when we needed them most. Our staff are happier, our patients are happier, and we\'re saving nearly $1M per year.',
      author: 'Dr. Sarah Martinez',
      role: 'Chief Medical Information Officer',
      company: 'Regional Healthcare Network'
    }
  },

  {
    id: 'manufacturing-erp-migration',
    title: 'Manufacturing: ERP System Migration and Integration',
    industry: 'Manufacturing',
    slug: 'manufacturing-erp-migration',
    description: 'Migrate complex SAP ECC to S/4HANA with custom MES integration for automotive manufacturer, reducing order-to-delivery time by 40% and inventory costs by $12M annually.',
    featured: true,

    challenge: {
      overview: 'Global automotive parts manufacturer with 8 factories running legacy SAP ECC system approaching end of life. Needed to migrate to S/4HANA while integrating with custom manufacturing execution systems (MES).',
      businessImpact: [
        'SAP ECC end of support deadline creating urgency and risk',
        'Manual processes causing 40% longer lead times than competitors',
        'Excess inventory costing $12M annually in working capital',
        'Quality issues from disconnected MES and ERP systems'
      ],
      technicalChallenges: [
        'Complex customizations in SAP ECC requiring re-engineering',
        'Custom MES systems per factory with different protocols',
        'Real-time production data needed for demand planning',
        'Global rollout across 8 factories in 5 countries'
      ],
      constraints: [
        'Cannot halt production - 24/7 manufacturing operations',
        'Must maintain just-in-time delivery to automotive OEMs',
        'Limited ERP expertise on team after consultant turnover',
        '12-month deadline driven by SAP support end date'
      ]
    },

    approach: {
      overview: 'Brownfield S/4HANA migration with Fiori UI, custom integration platform for MES connectivity, and phased factory rollout with production shadowing.',
      methodology: [
        'SAP S/4HANA brownfield migration preserving critical customizations',
        'Built integration platform for MES connectivity using IoT patterns',
        'Implemented SAP Fiori for improved user experience',
        'Factory-by-factory rollout starting with smallest facility',
        'Production shadowing with parallel systems for validation',
        'Comprehensive change management and operator training'
      ],
      technologies: [
        'SAP S/4HANA on Azure',
        'Custom integration layer (Node.js + MQTT)',
        'SAP Fiori for UI modernization',
        'Azure IoT Hub for MES connectivity',
        'Power BI for real-time analytics',
        'SAP BTP for extensions'
      ],
      timeline: '12 months across 8 factories',
      teamSize: '18 specialists (6 SAP, 4 integration, 8 factory liaisons)'
    },

    results: {
      overview: 'Completed migration on schedule across all factories, integrated MES systems, and achieved dramatic improvements in operational efficiency and inventory management.',
      metrics: [
        {
          label: 'Order-to-Delivery Time',
          before: '28 days average',
          after: '17 days average',
          improvement: '40% faster'
        },
        {
          label: 'Inventory Carrying Costs',
          before: '$32M working capital',
          after: '$20M working capital',
          improvement: '$12M reduction'
        },
        {
          label: 'Production Visibility',
          before: 'Daily batch updates',
          after: 'Real-time updates',
          improvement: 'Live visibility'
        },
        {
          label: 'Quality Defects',
          before: '3.2% defect rate',
          after: '1.1% defect rate',
          improvement: '66% reduction'
        }
      ],
      businessOutcomes: [
        'Freed $12M in working capital through inventory optimization',
        'Reduced order-to-delivery time by 40%, improving competitiveness',
        'Decreased quality defects by 66% through real-time visibility',
        'Enabled predictive maintenance reducing downtime by 30%',
        'Positioned company for Industry 4.0 initiatives'
      ],
      technicalOutcomes: [
        'Successfully migrated SAP ECC to S/4HANA across 8 factories',
        'Integrated 8 different MES systems with standardized APIs',
        'Achieved real-time production visibility across global operations',
        'Reduced SAP license costs by 25% with S/4HANA optimization',
        'Improved system performance 5x with in-memory computing'
      ]
    },

    migration: {
      from: ['SAP ECC 6.0', 'Custom ABAP code', 'Disconnected MES systems', 'SAP GUI', 'Batch data transfers'],
      to: ['SAP S/4HANA', 'Re-engineered ABAP', 'Integrated MES', 'SAP Fiori', 'Real-time data'],
      strategy: 'Brownfield migration with phased factory rollout'
    },

    roi: {
      investment: '$8.5M (12-month project)',
      savings: '$12M annual + operational improvements',
      paybackPeriod: '9 months',
      annualBenefit: '$12M inventory + $3M operational efficiency'
    },

    testimonial: {
      quote: 'The integrated MES-ERP system gives us real-time visibility we never had before. We\'ve freed up millions in working capital and are now competing on lead times with the best in our industry.',
      author: 'James Rodriguez',
      role: 'Chief Operations Officer',
      company: 'Global Automotive Parts Manufacturer'
    }
  },

  {
    id: 'transportation-fleet-management',
    title: 'Transportation: Fleet Management System Overhaul',
    industry: 'Transportation',
    slug: 'transportation-fleet-management',
    description: 'Modernize legacy fleet management system for 5,000+ vehicle operation, implementing IoT integration and real-time routing, reducing fuel costs by 22% and maintenance expenses by 35%.',
    featured: false,

    challenge: {
      overview: 'National logistics company with 5,000+ vehicles relied on 12-year-old fleet management system unable to support modern telematics, real-time routing, or predictive maintenance.',
      businessImpact: [
        '$18M annual fuel costs with inefficient routing',
        'Reactive maintenance causing 15% vehicle downtime',
        'Poor customer visibility into delivery status and ETAs',
        'Compliance challenges with ELD mandate and FMCSA regulations'
      ],
      technicalChallenges: [
        'Legacy Windows application with thick client deployment',
        'No real-time vehicle connectivity - batch updates via GPS units',
        'Custom integrations with dispatch and billing systems',
        'Telematics data from 3 different device vendors'
      ],
      constraints: [
        'Cannot disrupt daily dispatch operations',
        'Must maintain ELD compliance throughout transition',
        'Drivers resistant to change after years with current system',
        'Limited IT budget for cloud infrastructure'
      ]
    },

    approach: {
      overview: 'Built cloud-native fleet management platform with IoT integration, migrated vehicles in phases, and trained dispatchers and drivers with hands-on workshops.',
      methodology: [
        'Cloud-native web application replacing Windows thick client',
        'IoT platform integrating telematics from multiple vendors',
        'Machine learning for route optimization and predictive maintenance',
        'Phased vehicle migration by region over 5 months',
        'Driver and dispatcher training with in-cab tablets',
        'Mobile apps for drivers with offline capability'
      ],
      technologies: [
        'AWS Cloud (EC2, RDS, IoT Core)',
        'React web app + React Native mobile',
        'PostgreSQL with TimescaleDB for telemetry',
        'AWS IoT Core for vehicle connectivity',
        'Python machine learning for routing',
        'Mapbox for mapping and navigation'
      ],
      timeline: '5 months from design to full fleet migration',
      teamSize: '8 engineers + 3 logistics domain experts'
    },

    results: {
      overview: 'Successfully modernized fleet operations with real-time visibility, intelligent routing, and predictive maintenance, delivering substantial cost savings and operational improvements.',
      metrics: [
        {
          label: 'Fuel Costs',
          before: '$18M annually',
          after: '$14M annually',
          improvement: '22% reduction'
        },
        {
          label: 'Vehicle Downtime',
          before: '15% of fleet daily',
          after: '6% of fleet daily',
          improvement: '60% improvement'
        },
        {
          label: 'On-Time Delivery',
          before: '82% on-time',
          after: '94% on-time',
          improvement: '15% improvement'
        },
        {
          label: 'Maintenance Costs',
          before: '$8.5M annually',
          after: '$5.5M annually',
          improvement: '35% reduction'
        }
      ],
      businessOutcomes: [
        'Reduced fuel costs by $4M annually through optimized routing',
        'Decreased maintenance expenses by $3M with predictive approaches',
        'Improved on-time delivery from 82% to 94%',
        'Enhanced customer satisfaction with real-time tracking',
        'Achieved 100% ELD compliance ahead of mandate deadline'
      ],
      technicalOutcomes: [
        'Integrated telematics from 3 device vendors into unified platform',
        'Enabled real-time vehicle tracking for all 5,000+ vehicles',
        'Implemented ML routing engine reducing miles driven by 18%',
        'Built predictive maintenance models reducing breakdowns by 60%',
        'Deployed mobile apps with 98% driver adoption'
      ]
    },

    migration: {
      from: ['Windows thick client', 'Batch GPS updates', 'SQL Server on-premise', 'Manual routing', 'Reactive maintenance'],
      to: ['Cloud web application', 'Real-time IoT', 'AWS cloud', 'ML-powered routing', 'Predictive maintenance'],
      strategy: 'Phased regional migration with parallel operation'
    },

    roi: {
      investment: '$3.2M (5-month project)',
      savings: '$7M annual (fuel + maintenance)',
      paybackPeriod: '5.5 months',
      annualBenefit: '$7M + improved service levels'
    },

    testimonial: {
      quote: 'The real-time visibility and predictive maintenance have transformed our operations. We\'re saving millions annually and our customers love the delivery tracking.',
      author: 'Linda Thompson',
      role: 'VP of Operations',
      company: 'National Logistics Company'
    }
  },

  {
    id: 'government-compliance-modernization',
    title: 'Government: Compliance-Driven Modernization',
    industry: 'Government',
    slug: 'government-compliance-modernization',
    description: 'Modernize federal agency systems to meet FedRAMP and Zero Trust requirements, improving security posture to 98% compliance while reducing operating costs by 30%.',
    featured: true,

    challenge: {
      overview: 'Federal agency with 15,000 employees needed to modernize legacy systems to meet new FedRAMP High and Zero Trust Architecture mandates while maintaining mission-critical operations.',
      businessImpact: [
        'Non-compliant systems risking shutdown by federal mandates',
        'Security vulnerabilities with 200+ open critical findings',
        'Manual processes causing 6-month delays in citizen services',
        'High operating costs at $12M annually for aging infrastructure'
      ],
      technicalChallenges: [
        '25+ legacy applications built over 20 years on different stacks',
        'No centralized identity management or single sign-on',
        'Legacy systems unable to implement Zero Trust principles',
        'Minimal automated testing or CI/CD capabilities'
      ],
      constraints: [
        'FedRAMP High and Zero Trust compliance mandatory',
        'Cannot disrupt critical citizen-facing services',
        'Strict budget limitations and procurement processes',
        'Workforce authorization and clearance requirements'
      ]
    },

    approach: {
      overview: 'Systematic modernization prioritizing highest-risk systems first, implementing Zero Trust architecture, and achieving FedRAMP High authorization in phases.',
      methodology: [
        'Risk-based prioritization of 25 legacy applications',
        'Cloud-native re-architecture for highest-priority systems',
        'Zero Trust implementation with microsegmentation',
        'Centralized identity management with MFA and PIV cards',
        'Automated security scanning and compliance monitoring',
        'FedRAMP High documentation and authorization'
      ],
      technologies: [
        'AWS GovCloud with FedRAMP High',
        'Kubernetes with Istio service mesh',
        'HashiCorp Vault for secrets management',
        'Keycloak for identity federation',
        'STIG-hardened container images',
        'CloudFormation for IaC'
      ],
      timeline: '12 months for high-priority systems, ongoing for remainder',
      teamSize: '12 cleared engineers + 2 compliance specialists'
    },

    results: {
      overview: 'Achieved FedRAMP High authorization, implemented Zero Trust architecture, and dramatically improved security posture while reducing costs and improving service delivery.',
      metrics: [
        {
          label: 'Security Compliance',
          before: '73% compliant',
          after: '98% compliant',
          improvement: '34% improvement'
        },
        {
          label: 'Critical Vulnerabilities',
          before: '200+ open findings',
          after: '12 open findings',
          improvement: '94% reduction'
        },
        {
          label: 'Operating Costs',
          before: '$12M annually',
          after: '$8.4M annually',
          improvement: '30% reduction'
        },
        {
          label: 'Service Delivery Time',
          before: '6 months average',
          after: '2 months average',
          improvement: '67% faster'
        }
      ],
      businessOutcomes: [
        'Achieved FedRAMP High authorization for all critical systems',
        'Reduced operating costs by $3.6M annually',
        'Improved citizen service delivery time from 6 months to 2 months',
        'Met Zero Trust Architecture mandate ahead of deadline',
        'Eliminated shutdown risk from non-compliance'
      ],
      technicalOutcomes: [
        'Modernized 12 highest-priority legacy applications',
        'Implemented Zero Trust with microsegmentation and MFA',
        'Reduced critical security vulnerabilities by 94%',
        'Achieved 99.9% system uptime vs 94.2% with legacy',
        'Established CI/CD pipeline reducing deployment time 80%'
      ]
    },

    migration: {
      from: ['On-premise legacy', 'Perimeter security', 'Manual deployments', 'Disparate identity systems', 'Ad-hoc compliance'],
      to: ['AWS GovCloud', 'Zero Trust architecture', 'CI/CD automation', 'Centralized IAM', 'Continuous compliance'],
      strategy: 'Risk-prioritized phased modernization with FedRAMP authorization'
    },

    roi: {
      investment: '$9.5M (12-month initial phase)',
      savings: '$3.6M annual + avoided shutdown costs',
      paybackPeriod: '2.6 years',
      annualBenefit: '$3.6M + compliance + security improvements'
    },

    testimonial: {
      quote: 'We met the FedRAMP High mandate while improving our security posture and saving millions. The systematic approach gave us confidence throughout the modernization.',
      author: 'Robert Davis',
      role: 'Chief Information Officer',
      company: 'Federal Agency'
    }
  },

  {
    id: 'energy-monitoring-upgrade',
    title: 'Energy: Real-Time Monitoring System Upgrade',
    industry: 'Energy',
    slug: 'energy-real-time-monitoring',
    description: 'Upgrade legacy SCADA systems to modern IoT platform for utility serving 2M+ customers, enabling predictive grid maintenance and reducing outage duration by 45%.',
    featured: false,

    challenge: {
      overview: 'Regional electric utility serving 2M+ customers relied on 15-year-old SCADA systems unable to support distributed energy resources (solar/wind) or predictive grid management.',
      businessImpact: [
        'Grid outages averaging 4.2 hours per incident affecting customers',
        'Unable to integrate distributed solar and wind generation',
        'Regulatory pressure to reduce outage duration and frequency',
        'High maintenance costs for aging SCADA infrastructure'
      ],
      technicalChallenges: [
        'Legacy SCADA protocols (DNP3, Modbus) on proprietary hardware',
        'Real-time requirements with sub-second latency for grid control',
        '10,000+ sensors and control devices across service territory',
        'Integration with legacy GIS and customer information systems'
      ],
      constraints: [
        'Cannot interrupt power delivery - 24/7 grid operation',
        'Must maintain NERC CIP compliance throughout transition',
        'Limited upgrade windows during low-demand periods',
        'Safety-critical systems requiring extensive testing'
      ]
    },

    approach: {
      overview: 'Built modern IoT platform running parallel to legacy SCADA, gradually migrating control functions with extensive safety testing and operator training.',
      methodology: [
        'IoT platform with protocol translation for legacy devices',
        'Machine learning for predictive grid maintenance',
        'Digital twin of entire grid for simulation and testing',
        'Parallel operation with legacy SCADA during transition',
        'Substation-by-substation migration over 10 months',
        'Comprehensive operator training with simulation exercises'
      ],
      technologies: [
        'Azure IoT platform with edge computing',
        'Time-series database (InfluxDB)',
        'Python ML models for anomaly detection',
        'Power BI for grid operations dashboards',
        'Azure Digital Twins for simulation',
        'NERC CIP compliant architecture'
      ],
      timeline: '10 months design, pilot, and full deployment',
      teamSize: '14 engineers (6 SCADA specialists, 8 cloud engineers)'
    },

    results: {
      overview: 'Successfully modernized grid monitoring and control, enabled distributed energy integration, and achieved dramatic improvements in reliability and operational efficiency.',
      metrics: [
        {
          label: 'Outage Duration',
          before: '4.2 hours average',
          after: '2.3 hours average',
          improvement: '45% reduction'
        },
        {
          label: 'Predictive Maintenance',
          before: 'Reactive approach',
          after: '72% predicted events',
          improvement: '72% predictive'
        },
        {
          label: 'Distributed Energy',
          before: '0 MW integrated',
          after: '250 MW integrated',
          improvement: '250 MW capacity'
        },
        {
          label: 'Operations Costs',
          before: '$5.8M annually',
          after: '$4.1M annually',
          improvement: '29% reduction'
        }
      ],
      businessOutcomes: [
        'Reduced average outage duration by 45%, improving customer satisfaction',
        'Integrated 250 MW of distributed solar and wind generation',
        'Decreased operations costs by $1.7M annually',
        'Met regulatory reliability improvement requirements',
        'Positioned utility for grid modernization incentives'
      ],
      technicalOutcomes: [
        'Migrated 10,000+ sensors to modern IoT platform',
        'Achieved sub-second latency for critical grid control functions',
        'Implemented predictive maintenance with 72% accuracy',
        'Built digital twin for simulation and operator training',
        'Maintained NERC CIP compliance throughout transition'
      ]
    },

    migration: {
      from: ['Legacy SCADA', 'Proprietary hardware', 'Reactive maintenance', 'Limited renewables', 'Manual analysis'],
      to: ['Modern IoT platform', 'Cloud + edge', 'Predictive maintenance', 'DER integration', 'ML analytics'],
      strategy: 'Parallel operation with gradual substation migration'
    },

    roi: {
      investment: '$6.8M (10-month project)',
      savings: '$1.7M annual + avoided outage costs',
      paybackPeriod: '4 years',
      annualBenefit: '$1.7M + improved reliability + renewable integration'
    },

    testimonial: {
      quote: 'The predictive maintenance capabilities have been game-changing. We\'re catching issues before they become outages and our customers have noticed the improved reliability.',
      author: 'David Park',
      role: 'Chief Operating Officer',
      company: 'Regional Electric Utility'
    }
  },

  {
    id: 'merger-system-consolidation',
    title: 'M&A: Post-Merger System Consolidation',
    industry: 'Merger & Acquisition',
    slug: 'merger-system-consolidation',
    description: 'Consolidate systems from 3 acquired companies into unified platform for private equity-backed logistics firm, enabling $8M in synergies and seamless operations within 9 months.',
    featured: true,

    challenge: {
      overview: 'Private equity-backed logistics company acquired 3 competitors in 18 months, each with different technology stacks, processes, and customer systems requiring rapid integration.',
      businessImpact: [
        'Siloed systems preventing $8M in projected synergies',
        'Duplicate processes causing inefficiency and customer confusion',
        'Unable to cross-sell services across acquired customer bases',
        'High operating costs running 4 separate technology stacks'
      ],
      technicalChallenges: [
        '4 different TMS platforms (SAP, Oracle, custom .NET, legacy AS/400)',
        'Disparate customer portals creating poor user experience',
        'No common data model for customers, orders, or shipments',
        'Integration complexity with 100+ unique vendor connections'
      ],
      constraints: [
        'Cannot disrupt operations during peak shipping season',
        'Must maintain customer service levels during transition',
        'PE pressure to realize synergies within 12-month timeline',
        'Limited budget after acquisition debt'
      ]
    },

    approach: {
      overview: 'Built unified cloud platform as target state, migrated companies sequentially with data migration and customer communication, achieved consolidation in 9 months.',
      methodology: [
        'Selected best-of-breed TMS as foundation (SAP-based)',
        'Built unified customer portal and API layer',
        'Standardized data models across all entities',
        'Company-by-company migration with dedicated cutover weekends',
        'Automated data migration with validation and reconciliation',
        'Customer communication and transition support'
      ],
      technologies: [
        'SAP TM on Azure (selected as target platform)',
        'React customer portal with unified experience',
        'Azure API Management for integrations',
        'Azure Data Factory for ETL',
        'Salesforce for unified CRM',
        'Power BI for cross-company analytics'
      ],
      timeline: '9 months from planning to final cutover',
      teamSize: '16 specialists (4 per company + 4 integration team)'
    },

    results: {
      overview: 'Successfully consolidated 4 technology stacks into unified platform, enabled projected synergies, and improved operational efficiency while maintaining customer satisfaction.',
      metrics: [
        {
          label: 'Technology Stack',
          before: '4 separate platforms',
          after: '1 unified platform',
          improvement: '75% simplification'
        },
        {
          label: 'Operating Costs',
          before: '$14M annually',
          after: '$7.5M annually',
          improvement: '46% reduction'
        },
        {
          label: 'Cross-Sell Revenue',
          before: '$0 cross-sell',
          after: '$12M cross-sell',
          improvement: '$12M new revenue'
        },
        {
          label: 'Customer Satisfaction',
          before: '74% average',
          after: '86% average',
          improvement: '16% improvement'
        }
      ],
      businessOutcomes: [
        'Achieved $8M in projected synergies from consolidated operations',
        'Reduced technology operating costs by $6.5M annually',
        'Generated $12M in cross-sell revenue across customer bases',
        'Improved customer satisfaction despite transition',
        'Positioned company for future acquisitions with playbook'
      ],
      technicalOutcomes: [
        'Consolidated 4 TMS platforms into single SAP TM instance',
        'Migrated 500K+ customer records with 99.8% accuracy',
        'Integrated 100+ vendor connections to unified platform',
        'Built unified customer portal with 89% adoption',
        'Established common data model enabling analytics'
      ]
    },

    migration: {
      from: ['SAP TM', 'Oracle TMS', 'Custom .NET', 'Legacy AS/400', '4 customer portals'],
      to: ['Unified SAP TM', 'Single data model', 'Unified React portal', 'Common API layer', 'Salesforce CRM'],
      strategy: 'Sequential company migration with cutover weekends'
    },

    roi: {
      investment: '$5.5M (9-month project)',
      savings: '$6.5M annual + $12M cross-sell',
      paybackPeriod: '3.5 months',
      annualBenefit: '$18.5M total (opex + revenue synergies)'
    },

    testimonial: {
      quote: 'The system consolidation unlocked the synergies we projected in the acquisition. We\'re now operating as one company with a technology platform that can scale with future growth.',
      author: 'Jennifer Walsh',
      role: 'Chief Executive Officer',
      company: 'PE-Backed Logistics Company'
    }
  },

  {
    id: 'technical-debt-reduction',
    title: 'Technical Debt: Systematic Legacy Code Reduction',
    industry: 'Technical Debt',
    slug: 'systematic-technical-debt-reduction',
    description: 'Systematically reduce technical debt by 42% for SaaS company with 8-year-old codebase, improving development velocity by 3x and reducing production incidents by 65%.',
    featured: false,

    challenge: {
      overview: 'Fast-growing SaaS company with 8-year-old codebase accumulated significant technical debt through rapid feature development, causing declining development velocity and increasing production incidents.',
      businessImpact: [
        'Development velocity decreased 60% over 3 years',
        'Production incidents increasing 20% year-over-year',
        'Top engineering talent leaving due to codebase frustration',
        'Unable to deliver competitive features on time'
      ],
      technicalChallenges: [
        '300K+ lines of Ruby on Rails with minimal test coverage (15%)',
        'Monolithic architecture unable to scale with user growth',
        'Technical debt preventing adoption of modern frameworks',
        'Legacy dependencies with known security vulnerabilities'
      ],
      constraints: [
        'Cannot halt feature development for refactoring',
        'Must maintain SLA commitments to enterprise customers',
        'Limited engineering resources (12-person team)',
        'Pressure to continue rapid growth trajectory'
      ]
    },

    approach: {
      overview: 'Implemented systematic debt reduction program with prioritization framework, allocated 30% engineering capacity, and used strangler pattern to modernize incrementally.',
      methodology: [
        'Automated technical debt assessment and scoring',
        'Prioritization framework based on business impact and risk',
        'Allocated 30% of sprint capacity to debt reduction',
        'Strangler pattern to extract microservices from monolith',
        'Increased test coverage from 15% to 80% over time',
        'Automated security scanning and dependency updates'
      ],
      technologies: [
        'Ruby on Rails (refactored)',
        'Node.js microservices for new features',
        'PostgreSQL with read replicas',
        'Redis for caching',
        'Docker + Kubernetes',
        'GitHub Actions for CI/CD'
      ],
      timeline: '12 months of sustained effort',
      teamSize: '12 engineers with rotating debt reduction assignments'
    },

    results: {
      overview: 'Systematically reduced technical debt while maintaining feature velocity, dramatically improved system reliability, and re-energized engineering team.',
      metrics: [
        {
          label: 'Technical Debt Score',
          before: 'Critical (87/100)',
          after: 'Moderate (50/100)',
          improvement: '42% reduction'
        },
        {
          label: 'Development Velocity',
          before: '40% of peak',
          after: '120% of peak',
          improvement: '3x improvement'
        },
        {
          label: 'Production Incidents',
          before: '24 per month',
          after: '8 per month',
          improvement: '67% reduction'
        },
        {
          label: 'Test Coverage',
          before: '15% coverage',
          after: '82% coverage',
          improvement: '5.5x improvement'
        }
      ],
      businessOutcomes: [
        'Improved development velocity by 3x, accelerating time-to-market',
        'Reduced production incidents by 67%, improving customer satisfaction',
        'Decreased engineering turnover from 35% to 8% annually',
        'Enabled migration to microservices for better scalability',
        'Positioned company for successful Series B fundraising'
      ],
      technicalOutcomes: [
        'Reduced technical debt score by 42% across codebase',
        'Increased test coverage from 15% to 82%',
        'Extracted 6 microservices from monolith using strangler pattern',
        'Eliminated all critical security vulnerabilities',
        'Improved deployment frequency from weekly to daily'
      ]
    },

    migration: {
      from: ['Monolithic Rails app', 'Low test coverage', 'Manual deployments', 'Legacy dependencies', 'Reactive maintenance'],
      to: ['Rails + microservices', 'High test coverage', 'Automated CI/CD', 'Modern dependencies', 'Proactive debt management'],
      strategy: 'Sustained 30% capacity allocation with prioritization framework'
    },

    roi: {
      investment: '$1.8M (engineering time over 12 months)',
      savings: 'Enabled 3x velocity + reduced incidents + retained talent',
      paybackPeriod: '6 months',
      annualBenefit: 'Ongoing velocity + $500K reduced incident costs + retention'
    },

    testimonial: {
      quote: 'The systematic approach to technical debt gave us back our engineering velocity. We\'re now shipping features 3x faster and our team morale has completely transformed.',
      author: 'Alex Chen',
      role: 'VP of Engineering',
      company: 'High-Growth SaaS Company'
    }
  }
];

export const industries = [
  'All Industries',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Transportation',
  'Government',
  'Energy',
  'Merger & Acquisition',
  'Technical Debt'
] as const;

export type Industry = typeof industries[number];
