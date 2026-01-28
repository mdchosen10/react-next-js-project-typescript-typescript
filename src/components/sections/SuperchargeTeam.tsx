'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Clock, Target } from 'lucide-react';

export default function SuperchargeTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Supercharge Your Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't replace developers—multiply their impact. GoBananas gives your senior engineers
            AI orchestration tools to handle enterprise migrations that normally require large teams and months of work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Manual Migration Reality</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">File-by-File Grinding</h4>
                  <p className="text-gray-600">Even with Cursor, developers spend weeks on repetitive migration tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Knowledge Gaps</h4>
                  <p className="text-gray-600">No single developer knows every legacy system pattern and modern best practice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Inconsistent Results</h4>
                  <p className="text-gray-600">Ad-hoc approaches lead to technical debt and integration issues</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Augmented Excellence</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <Clock className="w-3 h-3 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">10x Speed Multiplier</h4>
                  <p className="text-gray-600">What takes weeks manually happens in hours with orchestrated agents</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <Target className="w-3 h-3 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Institutional Knowledge</h4>
                  <p className="text-gray-600">AI agents provide deep expertise across all legacy systems and modern patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                  <Users className="w-3 h-3 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Human-Led Quality</h4>
                  <p className="text-gray-600">Your developers maintain oversight while AI handles systematic execution</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900">Ready to 10x Your Migration Velocity?</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Give your engineering team the AI orchestration platform that transforms months-long migrations into week-long sprints.
            </p>
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-200">
              Request Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}