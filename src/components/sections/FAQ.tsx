'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, GitBranch, Zap, Users } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "How do you ensure our code stays secure?",
    answer: "We only work on copies of your codebase, leaving your original code completely intact. Your source remains in your repositories while we create detailed documentation throughout the migration process. You maintain full control and ownership.",
    icon: <Shield className="w-5 h-5 text-yellow-600" />
  },
  {
    question: "What legacy languages and frameworks do you support?",
    answer: "Built on Claude's foundation, we support virtually any programming language and framework - from COBOL and Fortran to modern stacks like React and Java. If it's code, we can analyze and migrate it.",
    icon: <Zap className="w-5 h-5 text-yellow-600" />
  },
  {
    question: "Can you integrate with our existing development workflow?",
    answer: "Absolutely. We can build custom integrations with your CI/CD pipelines, SSO systems, and development platforms. Each enterprise implementation is tailored to your specific infrastructure and security requirements.",
    icon: <GitBranch className="w-5 h-5 text-yellow-600" />
  },
  {
    question: "Where is our data stored during migration?",
    answer: "Standard deployments use secure Railway hosting with SOC2 Type II certification. For enterprises with special requirements, we can accommodate custom hosting arrangements including on-premises or private cloud deployments.",
    icon: <Shield className="w-5 h-5 text-yellow-600" />
  },
  {
    question: "What's your track record with large codebases?",
    answer: "We've successfully migrated over 100,000 lines of code from React/Redux/Webpack to Next.js 15 with TypeScript in hours, saving months of development time. Our multi-agent approach scales to handle enterprise-level complexity.",
    icon: <Users className="w-5 h-5 text-yellow-600" />
  },
  {
    question: "How do we know the migration will work correctly?",
    answer: "Every migration includes comprehensive testing, feature-for-feature compatibility validation, and human oversight at critical checkpoints. We provide detailed documentation and rollback capabilities throughout the process.",
    icon: <GitBranch className="w-5 h-5 text-yellow-600" />
  },
  {
    question: "Do we need to go through a lengthy procurement process?",
    answer: "No. GoBananas operates as a service model, not traditional enterprise software. We streamline onboarding with simple service agreements - start your pilot within days, not months of procurement cycles.",
    icon: <Zap className="w-5 h-5 text-yellow-600" />
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise Questions, Answered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions from CTOs and engineering leaders about enterprise legacy modernization.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {faq.icon}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-gray-50 rounded-b-lg -mt-2">
                    <p className="text-gray-600 leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to see GoBananas in action with your actual codebase?
          </p>
          <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-700 hover:to-yellow-800 transition-all duration-200">
            Schedule Your Risk-Free Pilot
          </button>
        </motion.div>
      </div>
    </section>
  );
}