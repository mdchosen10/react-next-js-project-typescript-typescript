'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Search, FileText, Zap } from 'lucide-react';

const testimonials = [
  {
    quote:
      'GoBananas successfully migrated our 100,000+ lines of code from React/Redux/Webpack to Next.js 15 with TypeScript in hours — saving us thousands of dollars and months of work.',
    author: 'Engineering Lead',
    company: 'Financial Technology Company',
  },
];

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="section-padding-lg bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white">
      <div className="container-max">
        {/* How the Platform Works */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-6">
            How the Platform Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            Built on Claude Code infrastructure, we leverage multi-agents to understand your existing codebase, develop incredibly detailed plans to ensure feature-for-feature migration, and leverage multi-agent orchestration to execute, with human-in-the-loop final validation.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="bg-navy-800/50 border border-gold-500/30 rounded-xl p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gold-500/20 rounded-lg mb-6">
                <Search className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Analyze</h3>
              <p className="text-gray-300">Multi-agent analysis of your existing codebase to understand architecture, dependencies, and patterns.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-navy-800/50 border border-gold-500/30 rounded-xl p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gold-500/20 rounded-lg mb-6">
                <FileText className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Plan</h3>
              <p className="text-gray-300">Develop detailed migration plan ensuring feature-for-feature compatibility and zero data loss.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-navy-800/50 border border-gold-500/30 rounded-xl p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gold-500/20 rounded-lg mb-6">
                <Zap className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Execute</h3>
              <p className="text-gray-300">Multi-agent orchestration handles the migration with human-in-the-loop validation for quality assurance.</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="border-t border-navy-700 pt-20">
          {/* Testimonials Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-h2 mb-4">Trusted by Enterprise Leaders</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real outcomes from enterprise clients across energy, government, and operations
              </p>
            </motion.div>

            {/* Rotating Testimonial */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="bg-navy-800/50 border border-teal-500/30 rounded-xl p-8 md:p-12 max-w-3xl mx-auto mb-8"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-2.606 0-7 3.829-7 8v10c0 5.333 3 8 7 8z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-2.606 0-7 3.829-7 8v10c0 5.333 3 8 7 8z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div>
                <p className="font-semibold text-white">{testimonials[currentTestimonial].author}</p>
                <p className="text-teal-400 text-sm">{testimonials[currentTestimonial].company}</p>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-teal-500 w-8' : 'bg-navy-700 w-2'
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Industry Sectors */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mt-20 pt-20 border-t border-navy-700"
        >
          <motion.p variants={itemVariants} className="text-center text-gray-300 mb-8">
            Industries we serve
          </motion.p>
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Financial Services', 'Healthcare', 'Transportation', 'Manufacturing'].map((sector, i) => (
              <div
                key={i}
                className="text-center p-4 bg-navy-800/50 rounded-lg border border-navy-700 hover:border-gold-500/50 transition-all"
              >
                <p className="text-gray-200 font-medium text-sm">{sector}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
