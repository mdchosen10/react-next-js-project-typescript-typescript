'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Search,
  FileSearch,
  GitGraph,
  AlertTriangle,
  Users,
  Calendar,
  Target,
  FileText,
  Shield,
  RefreshCw,
  Layers,
  Cpu,
  Eye,
  CheckCircle2,
  TrendingUp,
  Server,
  Rocket,
  Activity,
  BarChart3,
  Clock,
  ArrowRight,
  Zap,
  Database,
  Code2,
  GitBranch,
  PlayCircle,
  PauseCircle,
  Download,
  Gauge,
  Network,
  Lock,
  Bell,
  LineChart,
  Settings,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CircleDot
} from 'lucide-react';

const HowItWorksSection = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

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

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const phases = [
    {
      number: 1,
      title: 'Discovery & Assessment Phase',
      subtitle: 'Comprehensive Legacy System Analysis',
      description: 'Multi-agent AI teams analyze your existing infrastructure, mapping dependencies, identifying risks, and establishing modernization baselines with enterprise-grade governance.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      icon: Search,
      activities: [
        {
          id: 'codebase-scan',
          icon: FileSearch,
          title: 'Multi-Agent Codebase Scanning',
          description: 'Automated analysis across every module, service, and data layer with AI-powered pattern recognition and architectural discovery',
          metrics: ['100% code coverage', 'Dependency graphs', 'API inventory', 'Security audit'],
          technicalDetails: [
            'AST parsing and semantic analysis',
            'Dead code detection and removal planning',
            'License and compliance scanning',
            'Technical debt quantification'
          ]
        },
        {
          id: 'dependency-map',
          icon: GitGraph,
          title: 'Dependency Mapping & Visualization',
          description: 'Interactive architecture maps showing all system interconnections, data flows, and integration boundaries',
          metrics: ['Service topology', 'Data flow analysis', 'Integration points', 'Call graphs'],
          technicalDetails: [
            'Runtime dependency tracking',
            'Database relationship mapping',
            'External API inventory',
            'Shared library analysis'
          ]
        },
        {
          id: 'risk-assessment',
          icon: AlertTriangle,
          title: 'Risk Assessment & Impact Analysis',
          description: 'Comprehensive risk scoring across security, compliance, performance, and business continuity dimensions',
          metrics: ['Risk scoring matrix', 'Impact analysis', 'Compliance audit', 'Vulnerability scan'],
          technicalDetails: [
            'CVSS vulnerability scoring',
            'Blast radius calculation',
            'Regulatory compliance gaps',
            'Performance bottleneck identification'
          ]
        },
        {
          id: 'resource-estimation',
          icon: Calendar,
          title: 'Timeline & Resource Estimation',
          description: 'Data-driven projections with phased rollout recommendations and capacity planning',
          metrics: ['Timeline forecast', 'Team allocation', 'Budget planning', 'Critical path'],
          technicalDetails: [
            'Velocity-based estimation',
            'Resource leveling optimization',
            'Dependency-aware scheduling',
            'Risk buffer allocation'
          ]
        }
      ],
      deliverables: [
        'Interactive architecture dependency map with 3D visualization',
        'Executive risk assessment report with mitigation strategies',
        'Detailed modernization roadmap with phase gates',
        'Stakeholder presentation deck with TCO analysis'
      ],
      duration: '2-4 hours',
      outcome: 'Complete understanding of legacy system with clear, risk-mitigated modernization pathway and executive buy-in',
      checkpoints: [
        { name: 'Architecture Discovery Complete', icon: Network },
        { name: 'Risk Assessment Validated', icon: Shield },
        { name: 'Executive Approval Obtained', icon: Users }
      ]
    },
    {
      number: 2,
      title: 'Strategic Planning Phase',
      subtitle: 'Architecting Your Modernization Journey',
      description: 'Design comprehensive migration strategy with phased approach, testing frameworks, and rollback contingencies ensuring zero-downtime execution with enterprise governance.',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      icon: Target,
      activities: [
        {
          id: 'architecture-design',
          icon: Layers,
          title: 'Target Architecture Design',
          description: 'Modern cloud-native architecture with microservices, API-first design, and scalability patterns',
          metrics: ['Microservices blueprint', 'API strategy', 'Data architecture', 'Cloud patterns'],
          technicalDetails: [
            'Domain-driven design modeling',
            'Event-driven architecture planning',
            'Service mesh configuration',
            'Observability stack design'
          ]
        },
        {
          id: 'phased-rollout',
          icon: GitBranch,
          title: 'Phased Rollout Planning',
          description: 'Incremental migration strategy minimizing business disruption with canary deployments',
          metrics: ['Phase definitions', 'Success criteria', 'Go/no-go gates', 'Rollout schedule'],
          technicalDetails: [
            'Feature flag strategy',
            'Blue-green deployment planning',
            'Traffic routing rules',
            'Backward compatibility matrix'
          ]
        },
        {
          id: 'testing-frameworks',
          icon: CheckCircle2,
          title: 'Testing & Validation Frameworks',
          description: 'Comprehensive automated testing ensuring feature parity and regression prevention',
          metrics: ['Test automation', 'Performance benchmarks', 'UAT protocols', 'Coverage targets'],
          technicalDetails: [
            'Contract testing setup',
            'Synthetic monitoring',
            'Load testing scenarios',
            'Chaos engineering plan'
          ]
        },
        {
          id: 'contingency-plan',
          icon: RefreshCw,
          title: 'Rollback & Contingency Planning',
          description: 'Disaster recovery procedures and automated rollback mechanisms for zero-risk deployment',
          metrics: ['Rollback triggers', 'Data recovery', 'Communication plan', 'RTO/RPO targets'],
          technicalDetails: [
            'Automated rollback scripts',
            'Data migration reversal',
            'State reconciliation',
            'Incident response playbook'
          ]
        }
      ],
      deliverables: [
        'Target architecture blueprint with ADRs (Architecture Decision Records)',
        'Phased migration schedule with resource allocation',
        'Comprehensive testing & validation plan with automation',
        'Rollback procedures & disaster recovery runbooks'
      ],
      duration: '4-8 hours',
      outcome: 'Battle-tested migration strategy with clear success metrics, safety nets, and stakeholder alignment',
      checkpoints: [
        { name: 'Architecture Review Passed', icon: Layers },
        { name: 'Testing Strategy Approved', icon: CheckCircle2 },
        { name: 'Rollback Plan Validated', icon: RefreshCw }
      ]
    },
    {
      number: 3,
      title: 'Orchestrated Execution Phase',
      subtitle: 'Multi-Agent Implementation Teams',
      description: 'Coordinated AI agent teams execute migration in parallel across frontend, backend, database, and infrastructure layers with real-time monitoring and quality gates.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
      icon: Cpu,
      activities: [
        {
          id: 'multi-agent',
          icon: Network,
          title: 'Multi-Agent Parallel Execution',
          description: 'Specialized AI agents for frontend, backend, database, and DevOps working in coordinated parallel streams',
          metrics: ['Parallel execution', 'Team coordination', 'Code generation', 'Conflict resolution'],
          technicalDetails: [
            'Frontend modernization agents',
            'Backend API migration agents',
            'Database schema evolution agents',
            'Infrastructure-as-code agents'
          ]
        },
        {
          id: 'real-time-monitoring',
          icon: Activity,
          title: 'Real-Time Progress Monitoring',
          description: 'Live dashboards tracking build status, test results, and performance metrics with anomaly detection',
          metrics: ['Build status', 'Test results', 'Performance metrics', 'Error tracking'],
          technicalDetails: [
            'Real-time pipeline visualization',
            'Automated anomaly detection',
            'Predictive failure analysis',
            'Resource utilization tracking'
          ]
        },
        {
          id: 'quality-gates',
          icon: Lock,
          title: 'Automated Quality Gates',
          description: 'Multi-stage quality gates ensuring code quality, security, and performance standards',
          metrics: ['Code review', 'Security scans', 'Performance tests', 'Coverage analysis'],
          technicalDetails: [
            'Static code analysis',
            'SAST/DAST security scanning',
            'Performance regression detection',
            'License compliance checks'
          ]
        },
        {
          id: 'human-oversight',
          icon: Users,
          title: 'Human Expert Oversight',
          description: 'Critical decision points with expert validation, approval workflows, and sign-off gates',
          metrics: ['Approval workflows', 'Expert review', 'Sign-off gates', 'Escalation paths'],
          technicalDetails: [
            'Architecture decision validation',
            'Risk assessment checkpoints',
            'Business logic verification',
            'Compliance sign-offs'
          ]
        }
      ],
      deliverables: [
        'Modernized codebase with full feature parity',
        'Comprehensive automated test suite (unit, integration, e2e)',
        'Production-ready CI/CD pipeline with quality gates',
        'Technical documentation and API specifications'
      ],
      duration: '1-3 days',
      outcome: 'Fully modernized system with validated functionality, automated operations, and production readiness',
      checkpoints: [
        { name: 'Code Migration Complete', icon: Code2 },
        { name: 'All Tests Passing', icon: CheckCircle2 },
        { name: 'Security Audit Cleared', icon: Shield }
      ]
    },
    {
      number: 4,
      title: 'Deployment & Validation Phase',
      subtitle: 'Production Launch with Confidence',
      description: 'Staged deployment with comprehensive testing, performance monitoring, and success metrics validation ensuring flawless production operation and business value realization.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
      icon: Rocket,
      activities: [
        {
          id: 'staging-env',
          icon: Server,
          title: 'Staging Environment Testing',
          description: 'Production-like environment with full feature validation, load testing, and user acceptance',
          metrics: ['Load testing', 'Integration tests', 'User acceptance', 'Performance validation'],
          technicalDetails: [
            'Production data cloning',
            'Synthetic transaction testing',
            'Peak load simulation',
            'Disaster recovery drills'
          ]
        },
        {
          id: 'production-deploy',
          icon: Rocket,
          title: 'Zero-Downtime Production Deployment',
          description: 'Coordinated rollout with blue-green or canary strategies ensuring seamless transition',
          metrics: ['Gradual rollout', 'Traffic migration', 'Zero downtime', 'Health monitoring'],
          technicalDetails: [
            'Blue-green deployment execution',
            'Progressive traffic shifting',
            'Database migration coordination',
            'DNS cutover automation'
          ]
        },
        {
          id: 'performance-monitoring',
          icon: TrendingUp,
          title: 'Performance Monitoring & Optimization',
          description: 'Real-time observability with alerting, diagnostics, and performance tuning',
          metrics: ['Latency tracking', 'Error rates', 'Resource usage', 'User experience'],
          technicalDetails: [
            'APM integration',
            'Distributed tracing',
            'Log aggregation',
            'Custom metrics dashboards'
          ]
        },
        {
          id: 'success-validation',
          icon: BarChart3,
          title: 'Success Metrics Validation',
          description: 'Measure KPIs against baseline and modernization goals with executive reporting',
          metrics: ['SLA compliance', 'Cost savings', 'Performance gains', 'Business impact'],
          technicalDetails: [
            'Business KPI tracking',
            'Cost optimization analysis',
            'Performance benchmarking',
            'ROI calculation'
          ]
        }
      ],
      deliverables: [
        'Production deployment with zero downtime',
        'Real-time monitoring dashboards and alerting',
        'Performance analysis and optimization reports',
        'Executive success metrics validation and ROI documentation'
      ],
      duration: '30-60 minutes',
      outcome: 'Live modern system exceeding performance targets, meeting all SLAs, and delivering measurable business value',
      checkpoints: [
        { name: 'Production Cutover Complete', icon: Rocket },
        { name: 'Performance SLAs Met', icon: Gauge },
        { name: 'Business Metrics Validated', icon: BarChart3 }
      ]
    }
  ];

  const processMetrics = [
    {
      icon: Clock,
      metric: '70%',
      label: 'Faster Time-to-Market',
      description: 'vs. traditional consulting',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Shield,
      metric: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Zero-downtime migrations',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CheckCircle2,
      metric: '100%',
      label: 'Feature Parity',
      description: 'Validated functionality',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      metric: '5x',
      label: 'Development Speed',
      description: 'Multi-agent orchestration',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const technicalFlow = [
    {
      icon: Database,
      title: 'Legacy Analysis',
      description: 'AI agents decompose monolith',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code2,
      title: 'Modern Design',
      description: 'Architecture planning',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GitBranch,
      title: 'Parallel Build',
      description: 'Multi-agent execution',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Production',
      description: 'Staged deployment',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const togglePhase = (phaseNumber: number) => {
    setExpandedPhase(expandedPhase === phaseNumber ? null : phaseNumber);
  };

  return (
    <section id="how-it-works" className="relative section-padding-lg bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, #14b8a6 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-teal-700">Enterprise Modernization Process</span>
          </div>

          <h2 className="text-h2 text-navy-900 mb-6">
            How the Platform Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Systematic, AI-powered transformation delivering legacy modernization with enterprise-grade governance, zero downtime, and measurable outcomes. Our proven 4-phase methodology ensures success at every stage.
          </p>

          {/* Process Metrics Overview */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {processMetrics.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-500/30"
              >
                <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">{item.metric}</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Technical Flow Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            {technicalFlow.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl mb-3 relative`}>
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-navy-900 shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-base font-bold text-navy-900 mb-1">{step.title}</div>
                    <div className="text-xs text-gray-600">{step.description}</div>
                  </div>
                </motion.div>
                {index < technicalFlow.length - 1 && (
                  <ArrowRight className="hidden md:block w-8 h-8 text-gray-300 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Phase Breakdown */}
        <div className="space-y-8">
          {phases.map((phase, phaseIndex) => (
            <motion.div
              key={phaseIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              className="relative"
            >
              <div className={`bg-white rounded-3xl shadow-xl border-2 ${phase.borderColor} overflow-hidden hover:shadow-2xl transition-all duration-300`}>
                {/* Phase Header - Clickable */}
                <div
                  className="cursor-pointer"
                  onClick={() => togglePhase(phase.number)}
                >
                  <div className={`bg-gradient-to-r ${phase.bgColor} p-8 border-b-2 ${phase.borderColor}`}>
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-24 h-24 ${phase.iconBg} rounded-2xl flex items-center justify-center shadow-2xl relative group-hover:scale-105 transition-transform duration-300`}>
                        <phase.icon className="w-12 h-12 text-white" />
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg">
                          {phase.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-h3 text-navy-900 mb-2">{phase.title}</h3>
                            <p className="text-xl font-semibold text-gray-700 mb-3">{phase.subtitle}</p>
                            <p className="text-base text-gray-600 leading-relaxed max-w-3xl">{phase.description}</p>
                          </div>
                          <button
                            className={`flex-shrink-0 ml-4 p-2 rounded-lg ${phase.bgColor} ${phase.textColor} hover:bg-opacity-80 transition-all duration-300`}
                            aria-label={expandedPhase === phase.number ? "Collapse phase" : "Expand phase"}
                          >
                            {expandedPhase === phase.number ? (
                              <ChevronUp className="w-6 h-6" />
                            ) : (
                              <ChevronDown className="w-6 h-6" />
                            )}
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mt-6">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 text-white text-sm font-medium rounded-lg shadow-md">
                            <Clock className="w-4 h-4" />
                            {phase.duration}
                          </span>
                          <span className={`inline-flex items-center gap-2 px-4 py-2 bg-white ${phase.textColor} text-sm font-medium rounded-lg border-2 ${phase.borderColor} shadow-md`}>
                            <CircleDot className="w-4 h-4" />
                            Phase {phase.number} of 4
                          </span>
                          {phase.checkpoints.slice(0, 1).map((checkpoint, idx) => (
                            <span key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 shadow-sm">
                              <checkpoint.icon className="w-4 h-4 text-green-600" />
                              {phase.checkpoints.length} checkpoints
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedPhase === phase.number ? 'auto' : 0,
                    opacity: expandedPhase === phase.number ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-8">
                    {/* Activities Grid */}
                    <motion.div
                      initial="hidden"
                      animate={expandedPhase === phase.number ? "visible" : "hidden"}
                      variants={staggerContainer}
                      className="grid md:grid-cols-2 gap-6 mb-8"
                    >
                      {phase.activities.map((activity, actIndex) => (
                        <motion.div
                          key={actIndex}
                          variants={slideIn}
                          className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md border-2 border-gray-100 hover:border-teal-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer ${selectedActivity === activity.id ? 'ring-2 ring-teal-500 border-teal-500' : ''}`}
                          onClick={() => setSelectedActivity(selectedActivity === activity.id ? null : activity.id)}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${phase.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <activity.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-bold text-navy-900 mb-2">
                                {activity.title}
                              </h4>
                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {activity.description}
                              </p>

                              {/* Metrics */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {activity.metrics.map((metric, metricIndex) => (
                                  <span
                                    key={metricIndex}
                                    className="inline-block px-3 py-1 bg-white text-gray-700 text-xs font-medium rounded-full border border-gray-200 shadow-sm"
                                  >
                                    {metric}
                                  </span>
                                ))}
                              </div>

                              {/* Technical Details (Expandable) */}
                              {selectedActivity === activity.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className={`mt-4 pt-4 border-t-2 ${phase.borderColor}`}
                                >
                                  <div className="flex items-center gap-2 mb-3">
                                    <Settings className={`w-4 h-4 ${phase.textColor}`} />
                                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Technical Details</span>
                                  </div>
                                  <ul className="space-y-2">
                                    {activity.technicalDetails.map((detail, detailIndex) => (
                                      <li key={detailIndex} className="flex items-start gap-2 text-xs text-gray-600">
                                        <CheckCircle2 className={`w-4 h-4 ${phase.textColor} flex-shrink-0 mt-0.5`} />
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Checkpoints Timeline */}
                    <div className="mb-8">
                      <h5 className="text-base font-bold text-navy-900 mb-4 flex items-center gap-2">
                        <Target className={`w-5 h-5 ${phase.textColor}`} />
                        Quality Checkpoints
                      </h5>
                      <div className="flex flex-wrap gap-4">
                        {phase.checkpoints.map((checkpoint, idx) => (
                          <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border-2 border-green-200 shadow-sm">
                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md">
                              <checkpoint.icon className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{checkpoint.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables & Outcome */}
                    <div className={`bg-gradient-to-br ${phase.bgColor} rounded-2xl p-8 border-2 ${phase.borderColor}`}>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                            <FileText className={`w-5 h-5 ${phase.textColor}`} />
                            Key Deliverables
                          </h5>
                          <ul className="space-y-3">
                            {phase.deliverables.map((deliverable, delIndex) => (
                              <li key={delIndex} className="flex items-start gap-3">
                                <CheckCircle2 className={`w-5 h-5 ${phase.textColor} flex-shrink-0 mt-0.5`} />
                                <span className="text-sm text-gray-700 leading-relaxed">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                            <Target className={`w-5 h-5 ${phase.textColor}`} />
                            Phase Outcome
                          </h5>
                          <div className="bg-white/80 rounded-xl p-5 border-2 border-white shadow-inner">
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {phase.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Connector Line (except for last phase) */}
              {phaseIndex < phases.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 via-teal-500 to-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-h3 text-white mb-4">
              See the Platform in Action
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Schedule a personalized demo to see how our enterprise modernization workflow transforms legacy systems with AI-powered orchestration, zero downtime, and measurable ROI.
            </p>
            <a
              href="https://calendly.com/mustafa-sinanai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Request Demo <ArrowRight className="w-5 h-5" />
            </a>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                30-minute session
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Live with our team
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Enterprise-ready
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
