'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cpu,
  Shield,
  Zap,
  GitBranch,
  CheckCircle2,
  Users,
  Eye,
  RefreshCw,
  Lock,
  Cloud,
  Code2,
  Layers,
  Network,
  Activity,
  Target,
  Workflow,
  Database,
  FileCode,
  TrendingUp,
  Award,
  Server,
  Settings,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const PlatformSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Core Platform Value Proposition
  const coreValueProps = [
    {
      icon: Brain,
      title: 'AI-Powered Legacy Analysis',
      description: 'Built on Claude Code SDK foundation, our multi-agent system analyzes legacy codebases with unprecedented depth - from COBOL mainframes to modern microservices.',
      features: [
        'Automated dependency mapping across any tech stack',
        'Risk assessment and impact analysis',
        'Technical debt quantification with ROI projections',
        'Zero-knowledge architecture understanding'
      ],
      gradient: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-600'
    },
    {
      icon: Workflow,
      title: 'Multi-Agent Orchestration',
      description: 'Coordinated AI agents handle complex migrations with parallel execution, ensuring consistency across all layers while maintaining business continuity.',
      features: [
        'Parallel frontend, backend, and database migrations',
        'Automated conflict resolution and integration',
        'Real-time progress tracking and monitoring',
        'Cross-layer consistency validation'
      ],
      gradient: 'from-purple-600 to-purple-800',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-600'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Railway SOC2 Type II compliant hosting with military-grade encryption, continuous security scanning, and comprehensive audit trails for compliance.',
      features: [
        'SOC2 Type II certified infrastructure',
        'End-to-end encryption at rest and in transit',
        'Role-based access control (RBAC)',
        'Comprehensive audit logs and compliance reporting'
      ],
      gradient: 'from-green-600 to-green-800',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-600'
    }
  ];

  // Technical Capabilities Grid
  const technicalCapabilities = [
    {
      icon: Code2,
      title: 'Universal Language Support',
      description: 'COBOL, C#, Java, Python, PHP, Ruby, Go - any language, any framework',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: GitBranch,
      title: 'Zero-Downtime Migrations',
      description: 'Phased approach with parallel systems and gradual traffic switching',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: CheckCircle2,
      title: 'Feature-for-Feature Parity',
      description: 'Automated compatibility testing ensures 100% functionality preservation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Users,
      title: 'Human-in-the-Loop Oversight',
      description: 'Expert validation at critical decision points for risk mitigation',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      icon: Database,
      title: 'Data Migration Safety',
      description: 'Zero data loss with checksums, rollback capabilities, and validation',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200'
    },
    {
      icon: FileCode,
      title: 'Code Quality Assurance',
      description: 'Automated code review, testing, and documentation generation',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Modern architecture patterns improve speed by 3-10x on average',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      icon: Settings,
      title: 'Continuous Integration',
      description: 'Seamless integration with existing DevOps and CI/CD pipelines',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200'
    }
  ];

  // Platform Architecture - 4 stages
  const platformArchitecture = [
    {
      icon: Brain,
      title: 'Multi-Agent Analysis',
      description: 'AI agents autonomously decompose your legacy system into a comprehensive architecture map, identifying all dependencies, data flows, business logic patterns, and modernization opportunities. The analysis includes automated risk scoring and migration complexity assessment.',
      capabilities: [
        'Automated codebase scanning',
        'Dependency graph generation',
        'Business logic extraction',
        'Risk and complexity scoring'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      accentColor: 'bg-blue-600'
    },
    {
      icon: Layers,
      title: 'Orchestrated Parallel Execution',
      description: 'Coordinated agent teams execute migrations simultaneously across frontend, backend, database, and infrastructure layers. Each agent specializes in its domain while maintaining cross-layer consistency through continuous synchronization and validation.',
      capabilities: [
        'Parallel layer migrations',
        'Cross-agent coordination',
        'Real-time consistency checks',
        'Automated conflict resolution'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      accentColor: 'bg-purple-600'
    },
    {
      icon: Eye,
      title: 'Quality Assurance Validation',
      description: 'Automated testing agents generate and execute comprehensive test suites covering functional, integration, and performance testing. Every change is validated against original behavior with detailed regression analysis and compatibility reports.',
      capabilities: [
        'Automated test generation',
        'Regression testing suite',
        'Performance benchmarking',
        'Compatibility validation'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      accentColor: 'bg-green-600'
    },
    {
      icon: Activity,
      title: 'Continuous Monitoring & Rollback',
      description: 'Real-time performance tracking, anomaly detection, and automated rollback capabilities ensure smooth operation throughout the modernization lifecycle. Instant rollback to previous stable state if any issues are detected during production deployment.',
      capabilities: [
        'Real-time health monitoring',
        'Anomaly detection & alerts',
        'Instant rollback capability',
        'Performance analytics'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      accentColor: 'bg-orange-600'
    }
  ];

  // Platform vs Consulting Differentiators
  const platformDifferentiators = [
    {
      icon: Cpu,
      label: 'AI-First Platform',
      value: 'Not consulting services',
      description: 'Automated, repeatable, scalable'
    },
    {
      icon: RefreshCw,
      label: 'Systematic Automation',
      value: 'Not manual rewrites',
      description: 'Predictable timelines and costs'
    },
    {
      icon: Network,
      label: 'Multi-Agent Orchestration',
      value: 'Not single-threaded tools',
      description: 'Parallel execution at scale'
    },
    {
      icon: Target,
      label: 'Outcome Guarantees',
      value: 'Not time-and-materials',
      description: 'Fixed-price, performance-based'
    }
  ];

  // Enterprise Trust Factors
  const trustFactors = [
    {
      icon: Lock,
      label: 'Railway SOC2',
      sublabel: 'Type II Certified',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: Brain,
      label: 'Claude Code SDK',
      sublabel: 'AI Foundation',
      description: 'Built on Anthropic\'s enterprise AI platform'
    },
    {
      icon: Award,
      label: 'MIT Founded',
      sublabel: 'Academic Excellence',
      description: 'Research-backed modernization methodology'
    },
    {
      icon: Server,
      label: 'Zero Downtime',
      sublabel: 'Proven Results',
      description: '100% uptime during migrations'
    }
  ];

  return (
    <section id="platform" className="relative section-padding-lg bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gold-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-sm font-semibold text-gold-700 mb-6">
            <Zap className="w-4 h-4" />
            <span>Enterprise Platform</span>
          </div>

          <h2 className="text-h2 text-navy-900 mb-6">
            The GoBananas Platform
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            AI-powered legacy system modernization built on <span className="font-semibold text-navy-900">Claude Code SDK</span>.
            Multi-agent orchestration delivers systematic migrations with enterprise-grade security,
            zero-downtime execution, and guaranteed outcomes.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { value: '100%', label: 'Feature Parity' },
              { value: '0', label: 'Downtime' },
              { value: '3-10x', label: 'Performance Gain' },
              { value: 'SOC2', label: 'Certified' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-gold-600 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Value Propositions - 3 major cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 mb-24"
        >
          {coreValueProps.map((prop, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${prop.borderColor} hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${prop.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <prop.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-h4 text-navy-900 mb-4">
                {prop.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {prop.description}
              </p>

              <ul className="space-y-3">
                {prop.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Capabilities - 8 item grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-h3 text-navy-900 mb-4">
              Technical Capabilities
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive modernization support across every dimension of your technology stack,
              from legacy mainframes to modern cloud-native architectures
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCapabilities.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative ${item.bgColor} rounded-xl p-6 border-2 ${item.borderColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="text-base font-bold text-navy-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Architecture - 4 stages with detailed capabilities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-h3 text-navy-900 mb-4">
              Platform Architecture Overview
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Four-stage AI orchestration process powered by Claude Code SDK delivers end-to-end
              modernization with human oversight at critical decision points
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platformArchitecture.map((stage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative bg-white rounded-2xl p-8 border-2 ${stage.borderColor} shadow-md hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Stage Number Badge */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 ${stage.accentColor} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-xl font-bold text-white">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${stage.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stage.icon className={`w-8 h-8 ${stage.color}`} />
                </div>

                <h4 className="text-xl font-bold text-navy-900 mb-4">
                  {stage.title}
                </h4>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                {/* Capabilities list */}
                <div className="space-y-2">
                  {stage.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <ArrowRight className={`w-4 h-4 ${stage.color} flex-shrink-0`} />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform vs Consulting Differentiators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-12 md:p-16 shadow-2xl mb-24 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-sm font-semibold text-teal-300 mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span>Platform Advantage</span>
              </div>

              <h3 className="text-h3 text-white mb-4">
                Why GoBananas Over Traditional Consulting
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Traditional consulting approaches are unpredictable, expensive, and risky.
                Our AI-powered service delivers systematic automation with guaranteed outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformDifferentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <diff.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-xl font-bold text-white mb-2">
                    {diff.label}
                  </div>
                  <div className="text-base text-gold-400 font-semibold mb-2">
                    {diff.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {diff.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enterprise Trust Factors - Bottom section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-12 border-2 border-gray-200 shadow-lg"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              Built for Enterprise Trust
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Security, reliability, and proven results you can count on
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-500/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <factor.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-base font-bold text-navy-900 mb-1">
                  {factor.label}
                </div>
                <div className="text-sm font-semibold text-gold-600 mb-2">
                  {factor.sublabel}
                </div>
                <div className="text-xs text-gray-600">
                  {factor.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
