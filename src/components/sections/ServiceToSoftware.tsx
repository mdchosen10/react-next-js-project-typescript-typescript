'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle, Zap } from 'lucide-react';

export default function ServiceToSoftware() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Service-to-Software Model
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Skip lengthy procurement cycles. Start with a service engagement,
            prove value with your actual codebase, then scale as needed.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Start in Days</h3>
              <p className="text-gray-300 mb-6">
                Simple service agreement. No IT procurement, no software licensing.
                Begin your pilot migration within days, not months.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-yellow-400 font-semibold">Typical Timeline</p>
                <p className="text-white">2-3 days to pilot start</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-yellow-600" />
            </div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Prove Value</h3>
              <p className="text-gray-300 mb-6">
                We migrate a subset of your actual codebase. You see real results,
                measure time savings, validate quality before any major commitment.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-yellow-400 font-semibold">Pilot Scope</p>
                <p className="text-white">10-20% of codebase</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-yellow-600" />
            </div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scale Up</h3>
              <p className="text-gray-300 mb-6">
                Happy with results? We can build custom integrations, provide dedicated
                infrastructure, or transition to ongoing platform access.
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-yellow-400 font-semibold">Options</p>
                <p className="text-white">Service • Platform • Custom</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-800 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-red-400 mb-4">Traditional Enterprise Software</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 6-18 month procurement cycles</li>
                  <li>• Large upfront licensing costs</li>
                  <li>• Complex IT security reviews</li>
                  <li>• Proof-of-concept with dummy data</li>
                  <li>• Committee decision-making</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-yellow-400 mb-4">GoBananas Service Model</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Start pilot in 2-3 days</li>
                  <li>• Pay-as-you-go service fees</li>
                  <li>• Work with actual codebase</li>
                  <li>• Engineering team decisions</li>
                  <li>• Scale based on proven results</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-200">
              Start Your Service Pilot Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}