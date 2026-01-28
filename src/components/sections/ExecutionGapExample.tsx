'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target } from 'lucide-react';

export default function ExecutionGapExample() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="section-padding-lg bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold-100 border border-gold-200 rounded-full text-gold-700 text-sm font-medium mb-6">
              The Real Problem
            </div>
            <h2 className="text-h2 text-navy-900 mb-4">The Execution Gap Is Where Transformation Fails</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Most organizations identify significant value but capture only a fraction. Here's why, and how we close it.
            </p>
          </motion.div>

          {/* Gap Visualization */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 md:p-16 mb-16"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Stage 1: Identified */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-8 border-2 border-navy-900 shadow-md mb-4">
                  <div className="flex justify-center mb-4">
                    <Target className="w-12 h-12 text-navy-900" />
                  </div>
                  <div className="text-4xl font-bold text-navy-900 mb-2">$15M</div>
                  <p className="text-sm font-semibold text-gray-600">Identified Value</p>
                  <p className="text-xs text-gray-500 mt-2">Strategy & assessment phase</p>
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="hidden md:flex flex-col items-center w-full">
                  <ArrowRight className="w-8 h-8 text-gray-400 mb-4 rotate-0 md:rotate-0" />
                  <div className="w-full border-t-2 border-dashed border-gray-400 flex-1" />
                  <ArrowRight className="w-8 h-8 text-gray-400 mt-4 rotate-0 md:rotate-0" />
                </div>
                <div className="md:hidden text-gray-400">→</div>
              </motion.div>

              {/* Stage 2: Captured */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-xl p-8 border-2 border-teal-500 shadow-md mb-4">
                  <div className="flex justify-center mb-4">
                    <TrendingUp className="w-12 h-12 text-teal-500" />
                  </div>
                  <div className="text-4xl font-bold text-teal-600 mb-2">$4M</div>
                  <p className="text-sm font-semibold text-gray-600">Captured Value</p>
                  <p className="text-xs text-gray-500 mt-2">Initial execution (26% realization)</p>
                </div>
              </motion.div>
            </div>

            {/* Gap Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-lg"
            >
              <p className="text-lg font-semibold text-navy-900 mb-2">The Execution Gap:</p>
              <p className="text-4xl font-bold text-gold-600 mb-3">$11M Lost</p>
              <p className="text-gray-700">
                73% of identified value remains unrealized due to execution infrastructure failures, organizational
                misalignment, and capability gaps.
              </p>
            </motion.div>
          </motion.div>

          {/* How We Close It */}
          <motion.div variants={itemVariants}>
            <h3 className="text-h3 text-navy-900 text-center mb-12">How Sinan AI Closes the Gap</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: '1',
                  title: 'Execution Readiness Assessment',
                  description:
                    'We audit your transformation maturity, governance readiness, and capability gaps with brutally honest diagnostics.',
                },
                {
                  number: '2',
                  title: 'Infrastructure Design & Build',
                  description:
                    'We design and implement the governance, decision-making, and execution frameworks that turn strategy into action.',
                },
                {
                  number: '3',
                  title: 'Value Realization Tracking',
                  description:
                    'We embed real-time value tracking, variance management, and course correction into your transformation DNA.',
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 md:p-12 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200"
          >
            <p className="text-lg text-gray-600 mb-4">The outcome for our Fortune 500 clients:</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">60%+</div>
                <p className="text-sm text-gray-600">Value Realization Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">Weeks Not Months</div>
                <p className="text-sm text-gray-600">Rapid Value Delivery</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">3x</div>
                <p className="text-sm text-gray-600">ROI vs Strategy Alone</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
