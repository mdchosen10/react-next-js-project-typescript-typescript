'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import { siMit, siPalantir, siPwc } from 'simple-icons/icons';

const credentials = [
  {
    icon: siMit,
    title: 'MIT Graduate',
    description: 'Deep technical foundation in systems engineering and architecture',
  },
  {
    icon: siPalantir,
    title: 'Palantir Technologies',
    description: 'Enterprise systems integration and data platform development',
  },
  {
    icon: siPwc,
    title: 'Strategy& (PwC)',
    description: 'Management consulting specializing in technology transformation',
  },
];

export default function FounderCredibility() {
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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text */}
          <motion.div variants={itemVariants} className="md:pr-8">
            <div className="inline-block px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full text-yellow-700 text-sm font-medium mb-6">
              Enterprise Experience
            </div>

            <h2 className="text-h2 text-navy-900 mb-6">Built by Enterprise Veterans</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              GoBananas was founded by technologists who've experienced the pain of legacy system migrations firsthand.
              With experience across Palantir, Strategy&, Booz Allen Hamilton, DuPont, and SLB, we understand the complexity
              of enterprise systems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              After 15+ years watching engineering teams struggle with manual migrations, we built the AI orchestration
              platform we wished existed—one that multiplies developer productivity instead of replacing it.
            </p>

            <div className="text-sm text-gray-600 italic border-l-4 border-gold-500 pl-4">
              &quot;Every enterprise migration I've seen could have been 10x faster with proper AI orchestration.&quot;
            </div>
          </motion.div>

          {/* Right Column - Credentials */}
          <motion.div variants={itemVariants} className="grid gap-6">
            {credentials.map((cred, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-yellow-300 transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg mt-1">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill={cred.icon.hex}>
                        <path d={cred.icon.path} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-1">{cred.title}</h3>
                      <p className="text-gray-600 text-sm">{cred.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Social Proof Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-5xl font-bold text-gold-500 mb-2">15+</div>
              <p className="text-gray-600">Years Enterprise Experience</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-5xl font-bold text-gold-500 mb-2">5</div>
              <p className="text-gray-600">Top-Tier Companies</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-5xl font-bold text-gold-500 mb-2">100k+</div>
              <p className="text-gray-600">Lines Migrated Successfully</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
