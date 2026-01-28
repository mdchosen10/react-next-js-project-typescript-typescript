'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';

export default function ContactCTA() {
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
    <section className="section-padding-lg bg-white">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="bg-gradient-to-br from-teal-600 via-teal-500 to-teal-600 rounded-2xl p-12 md:p-20 text-white"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h2 mb-6">Ready to Close Your Execution Gap?</h2>
            <p className="text-xl text-teal-50">
              Let's discuss how Sinan AI can help you transform identified value into realized results. No consultants,
              no tooling—just execution expertise.
            </p>
          </motion.div>

          {/* Two-column options */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Option 1: Schedule Call */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all"
            >
              <Calendar className="w-8 h-8 text-gold-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Schedule Discovery Call</h3>
              <p className="text-teal-50 mb-6">
                30 minutes with our team to explore your transformation challenge and execution readiness.
              </p>
              <Button asChild className="w-full bg-white text-teal-600 hover:bg-gray-100">
                <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer" className="gap-2">
                  Book Your Call <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>

            {/* Option 2: Send Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all"
            >
              <MessageCircle className="w-8 h-8 text-gold-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tell Us About Your Challenge</h3>
              <p className="text-teal-50 mb-6">
                Share details about your transformation initiative, and we'll respond within 24 hours.
              </p>
              <Button asChild className="w-full bg-white text-teal-600 hover:bg-gray-100">
                <Link href="/contact" className="gap-2">
                  Send Message <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Confidence Statement */}
          <motion.div
            variants={itemVariants}
            className="text-center text-sm text-teal-50 border-t border-white/20 pt-8"
          >
            <p>
              We only work with clients serious about closing execution gaps. If your situation resonates with our
              approach, let's talk.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
