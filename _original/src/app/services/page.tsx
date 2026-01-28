'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  {
    number: '01',
    title: 'Strategy & Operations Excellence',
    description: 'Transform your strategic vision into executable roadmaps with clear ownership, governance, and accountability structures.',
    capabilities: [
      'Strategic planning & roadmap design',
      'Organizational restructuring',
      'Operating model redesign',
      'Governance framework implementation',
    ],
    icon: '🎯',
  },
  {
    number: '02',
    title: 'Digital Transformation & AI Implementation',
    description: 'Embed AI and digital capabilities into your existing tech stack and business processes for competitive advantage.',
    capabilities: [
      'Enterprise AI strategy development',
      'Gen AI use case identification',
      'Platform selection & integration',
      'Change management & adoption',
    ],
    icon: '⚡',
  },
  {
    number: '03',
    title: 'Performance Intelligence & Analytics',
    description: 'Build real-time performance tracking and decision intelligence systems that enable rapid course correction.',
    capabilities: [
      'Analytics infrastructure design',
      'KPI framework development',
      'Real-time dashboarding',
      'Predictive analytics implementation',
    ],
    icon: '📊',
  },
  {
    number: '04',
    title: 'Process Optimization & Cultural Change',
    description: 'Redesign critical business processes and build organizational capability to sustain transformation benefits.',
    capabilities: [
      'Process redesign & automation',
      'Capability building programs',
      'Change management execution',
      'Performance measurement systems',
    ],
    icon: '🔄',
  },
  {
    number: '05',
    title: 'Enterprise Data Integration',
    description: 'Unify fragmented data ecosystems to create a single source of truth for enterprise-wide decision-making.',
    capabilities: [
      'Data architecture assessment',
      'Integration platform selection',
      'Data governance frameworks',
      'Master data management setup',
    ],
    icon: '🔗',
  },
];

const engagementApproach = [
  {
    phase: 'Discovery & Assessment',
    description: 'Deep dive into your transformation challenge, execution readiness, and organizational capability gaps.',
    duration: 'Weeks 1-2',
  },
  {
    phase: 'Strategy & Design',
    description: 'Co-create detailed execution roadmap, governance structures, and organizational models.',
    duration: 'Weeks 3-4',
  },
  {
    phase: 'Implementation & Execution',
    description: 'Build infrastructure, implement changes, and drive organizational adoption at scale.',
    duration: 'Weeks 5+ (Rapid)',
  },
  {
    phase: 'Value Realization & Sustainability',
    description: 'Embed tracking systems, sustain benefits, and transition to your team for ongoing operations.',
    duration: 'Ongoing',
  },
];

export default function ServicesPage() {
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
      {/* Hero Section */}
      <section className="relative section-padding-lg bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1758691736084-4ef3e6f6a2cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTEyMDN8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMHByb2Zlc3Npb25hbHxlbnwwfDB8fHwxNzY4OTU0MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-navy-900/70 z-5" />

        <div className="container-max relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-500/40 rounded-full text-teal-200 text-sm font-medium">
                Our Services
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-h1 text-white mb-6">
              Specialized Services for Enterprise Transformation
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-200 leading-relaxed">
              From strategy to execution, we provide end-to-end services that close the gap between identified value and
              realized results. Our expertise spans strategy, technology, operations, and organizational change.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="mb-16"
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">Transformation Expertise Areas</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all hover:border-teal-300"
                >
                  <div className="flex items-start gap-6">
                    <div>
                      <div className="text-4xl font-bold text-teal-500 mb-2">{service.number}</div>
                      <h3 className="text-2xl font-semibold text-navy-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                      <div className="space-y-3">
                        {service.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Approach */}
      <section className="section-padding-lg bg-gray-50">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">Our Engagement Approach</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {engagementApproach.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-8 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-navy-900">{phase.phase}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-teal-600 font-semibold">Duration: {phase.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200"
            >
              <h3 className="text-xl font-semibold text-navy-900 mb-2">End-to-End Partnership</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We partner with you from initial assessment through sustainable value realization. Our multi-disciplinary teams
                embed directly with your organization to drive execution, build capability, and ensure lasting impact.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">Weeks to Months</div>
                  <p className="text-sm text-gray-600">Rapid Value Delivery Timeline</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">60%+</div>
                  <p className="text-sm text-gray-600">Average Value Realization Rate</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">3x</div>
                  <p className="text-sm text-gray-600">ROI vs Strategy Alone</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Sinan AI */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <h2 className="text-h2 text-navy-900 text-center mb-12">Why Choose Sinan AI</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Execution-First Mindset',
                  description: 'We focus exclusively on closing execution gaps. No consultants, no tools, just deep expertise in value realization.',
                },
                {
                  title: 'Fortune 500 Heritage',
                  description: 'Proven track record building transformation infrastructure for the world&apos;s largest, most complex organizations.',
                },
                {
                  title: 'Multi-Disciplinary Expertise',
                  description: 'Strategy, operations, technology, and organizational change—all integrated into one transformation engine.',
                },
                {
                  title: 'Embedded Partnership',
                  description: 'We work alongside your teams, not separate from them. Your success is our success.',
                },
                {
                  title: 'Measurable Results',
                  description: 'Real-time tracking of value realization with transparent metrics and course correction mechanisms.',
                },
                {
                  title: 'Capability Building',
                  description: 'We build your internal capabilities so transformations sustain long after our engagement ends.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:border-teal-300 transition-all"
                >
                  <Award className="w-8 h-8 text-teal-500 mb-4" />
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 mb-6">Ready to Close Your Execution Gap?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s talk about your transformation challenge and how we can help you realize more value, faster.
            </p>
            <Button asChild size="lg" variant="primary">
              <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer" className="gap-2">
                Schedule Discovery <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
