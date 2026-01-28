'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Brain, Cpu, BarChart3, Lock, CheckCircle, Cloud, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const capabilities = [
  {
    icon: Brain,
    title: '80+ AI Services',
    description: 'Pre-built AI modules for common enterprise use cases including document processing, data extraction, predictive analytics, and intelligent automation.',
  },
  {
    icon: Cpu,
    title: 'Multi-Agent Orchestration',
    description: 'Coordinate multiple specialized AI agents to solve complex problems that require reasoning, tool use, and collaborative decision-making.',
  },
  {
    icon: BarChart3,
    title: 'RAG Architecture',
    description: 'Retrieval-Augmented Generation for enterprise data. Combine proprietary knowledge bases with foundation models for accurate, contextual insights.',
  },
];

const useCases = [
  {
    category: 'Modernizing Your Tech Stack',
    description: 'Replace legacy systems with AI-native architecture',
    items: [
      'Migrate monolithic apps to microservices with AI orchestration',
      'Deploy intelligent middleware for real-time data processing',
      'Build context-aware APIs with RAG-powered endpoints',
      'Automate data transformation and quality assurance',
    ],
  },
  {
    category: 'Building Applications Across Systems',
    description: 'Connect disparate systems through intelligent interfaces',
    items: [
      'Create unified data layers across fragmented systems',
      'Build chatbots and virtual assistants with enterprise knowledge',
      'Deploy intelligent process automation workflows',
      'Enable system-to-system communication through AI agents',
    ],
  },
  {
    category: 'Automating Processes at Scale',
    description: 'Deploy intelligent automation that learns and improves',
    items: [
      'Automate document review and contract analysis',
      'Intelligent invoice processing and reconciliation',
      'Customer service automation with human handoff',
      'Predictive maintenance and anomaly detection',
    ],
  },
];

const features = [
  {
    title: 'Enterprise Security & Compliance',
    description: 'SOC 2 Type II certified with role-based access control, audit logging, and compliance monitoring.',
    icon: Lock,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Built on cloud-native architecture that handles thousands of concurrent operations without degradation.',
    icon: Cloud,
  },
  {
    title: 'Plug-and-Play Integration',
    description: 'Pre-built connectors for SAP, Oracle, Salesforce, ServiceNow, and 50+ enterprise systems.',
    icon: Zap,
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Built-in observability, performance metrics, and automated alerting for mission-critical workflows.',
    icon: TrendingUp,
  },
];

export default function ProductsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div>
      {/* Hero Section with Visual Showcase */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1758626044744-463ce33546a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTEyMDN8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5JTIwcGxhdGZvcm18ZW58MHwwfHx8MTc2ODk1NDA0N3ww&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-navy-900/70 z-5" />

        <div className="relative z-10 section-padding-lg">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants} className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gold-500/20 border border-gold-500/40 rounded-full text-gold-200 text-sm font-medium">
                    Enterprise Platform
                  </span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-h1 text-white mb-6">
                  GoBananas: AI-Native Enterprise Platform
                </motion.h1>

                <motion.div variants={itemVariants} className="mb-6">
                  <p className="text-2xl font-semibold text-teal-400 mb-4">
                    Where Ambitious Ideas Become Real Software
                  </p>
                  <p className="text-lg text-gold-300 font-medium">
                    Build complex, full-featured products—not just demos
                  </p>
                </motion.div>

                <motion.p variants={itemVariants} className="text-xl text-gray-200 leading-relaxed mb-8">
                  The intelligent operating system for enterprise transformation. GoBananas combines 80+ pre-built AI services,
                  multi-agent orchestration, and RAG architecture to modernize your tech stack, connect disparate systems, and
                  automate processes at scale.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" variant="primary">
                    <Link href="/contact" className="gap-2">
                      Get Started <ArrowRight size={20} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    <Link href="/case-studies">View Implementation Stories</Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-teal-500/20 bg-navy-800/50 backdrop-blur">
                  <img
                    src="/gobananas-screenshot.png"
                    alt="GoBananas AI Platform Dashboard - Where Ambitious Ideas Become Real Software"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent rounded-lg" />

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-lg p-4 text-navy-900"
                  >
                    <p className="text-sm font-semibold mb-1">Production-Ready Platform</p>
                    <p className="text-xs text-gray-600">Build enterprise-grade applications with AI at the core</p>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -z-0" />
      </section>

      {/* Platform Positioning Section */}
      <section className="section-padding-md bg-gradient-to-r from-teal-50 via-white to-gold-50">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Production-Ready From Day One</h3>
              <p className="text-gray-600">Deploy complex, full-featured applications without building from scratch. Our platform handles enterprise requirements out of the box.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-gold-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Ambitious Ideas at Scale</h3>
              <p className="text-gray-600">Transform strategic ambitions into real, working software. GoBananas bridges the gap between vision and execution with proven infrastructure.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Not Just Demos—Real Impact</h3>
              <p className="text-gray-600">Move beyond proof-of-concepts. Our platform provides the execution infrastructure needed to deliver lasting transformation and measurable business value.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="mb-16"
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">Core Platform Capabilities</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-teal-300"
                  >
                    <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">{cap.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{cap.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">What You Can Build</h2>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">{useCase.category}</h3>
                  <p className="text-sm text-teal-600 font-medium mb-6">{useCase.description}</p>

                  <div className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">Enterprise-Grade Features</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:border-teal-300 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="text-center"
          >
            <h2 className="text-h2 text-navy-900 mb-12">Plug Into Your Existing Stack</h2>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Upload your existing codebase and GoBananas generates custom integrations, handles migrations, and refactors
                legacy systems using multi-agent architecture. No more expensive system replacements or lengthy consulting
                engagements. Transform your tech stack into an AI-powered ecosystem where legacy becomes modern.
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200">
                <h3 className="font-semibold text-navy-900 mb-3">Upload, Analyze, Transform</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  GoBananas analyzes your existing code, identifies integration points, and generates production-ready
                  connectors between any systems. Multi-agent teams handle complex migrations while you maintain
                  business continuity.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>Legacy modernization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>System migrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    <span>Code refactoring</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'SAP',
                  'Oracle',
                  'Salesforce',
                  'ServiceNow',
                  'Azure',
                  'AWS',
                  'Tableau',
                  'Databricks',
                  'Snowflake',
                  'Kafka',
                  'Slack',
                  '50+ More',
                ].map((system, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-900"
                  >
                    {system}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">Business Impact</h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  metric: '40-60%',
                  label: 'Cost Reduction',
                  description: 'Through automation and efficiency improvements',
                },
                {
                  metric: '4-8 weeks',
                  label: 'Time to Value',
                  description: 'Rapid deployment with measurable returns',
                },
                {
                  metric: '3-5x',
                  label: 'Productivity Gain',
                  description: 'Per employee in automated processes',
                },
                {
                  metric: '99.9%',
                  label: 'Uptime SLA',
                  description: 'Enterprise-grade availability guarantee',
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:border-teal-300 transition-all"
                >
                  <div className="text-4xl font-bold text-teal-600 mb-2">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{benefit.label}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">Fast Time-to-Value</h2>

            <div className="space-y-6">
              {[
                {
                  phase: 'Week 1-2',
                  title: 'Assessment & Planning',
                  items: ['Architecture review', 'Integration mapping', 'Resource planning'],
                },
                {
                  phase: 'Week 3-6',
                  title: 'Development & Integration',
                  items: ['API configuration', 'Connector setup', 'Custom modules development'],
                },
                {
                  phase: 'Week 7-8',
                  title: 'Testing & Deployment',
                  items: ['UAT execution', 'Security hardening', 'Production deployment'],
                },
                {
                  phase: 'Ongoing',
                  title: 'Optimization & Support',
                  items: ['Performance tuning', '24/7 support', 'Continuous improvement'],
                },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-6"
                >
                  <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">{phase.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map((item, j) => (
                        <span key={j} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        </div>

        <div className="container-max text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/40 rounded-full text-teal-200 text-sm font-medium">
                Build Real Software
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-h2 mb-6">
              Where Ambitious Ideas Become Real Software
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-gray-200 mb-3 max-w-2xl mx-auto">
              Stop building demos. Start building products that matter.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading enterprises that have moved beyond proof-of-concepts to deploy complex, full-featured applications with GoBananas' production-ready AI platform.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact" className="gap-2">
                  Start Building <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/case-studies">See What's Possible</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
