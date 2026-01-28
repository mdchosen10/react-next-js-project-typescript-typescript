'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';
import { UseCase } from '@/data/use-cases';

interface UseCaseDetailProps {
  useCase: UseCase;
}

export default function UseCaseDetail({ useCase }: UseCaseDetailProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Use Cases
            </Link>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-yellow-600 rounded-full text-white text-sm font-semibold">
                {useCase.industry}
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6">{useCase.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl">{useCase.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {useCase.results.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {metric.improvement}
                </div>
                <div className="text-gray-600 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">
                  {metric.before} → {metric.after}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
            <p className="text-lg text-gray-700 mb-8">{useCase.challenge.overview}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
                <ul className="space-y-3">
                  {useCase.challenge.businessImpact.map((impact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Challenges</h3>
                <ul className="space-y-3">
                  {useCase.challenge.technicalChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
            <p className="text-lg text-gray-700 mb-8">{useCase.approach.overview}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Methodology</h3>
                {useCase.approach.methodology.map((method, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{method}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {useCase.approach.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold">{useCase.approach.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="text-sm text-gray-500">Team Size</div>
                      <div className="font-semibold">{useCase.approach.teamSize}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
            <p className="text-lg text-gray-700 mb-8">{useCase.results.overview}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Outcomes</h3>
                <ul className="space-y-3">
                  {useCase.results.businessOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Outcomes</h3>
                <ul className="space-y-3">
                  {useCase.results.technicalOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ROI Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-gray-900">Return on Investment</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-600">Investment</div>
                  <div className="font-semibold text-lg">{useCase.roi.investment}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                  <div className="font-semibold text-lg">{useCase.roi.savings}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Payback Period</div>
                  <div className="font-semibold text-lg">{useCase.roi.paybackPeriod}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Annual Benefit</div>
                  <div className="font-semibold text-lg">{useCase.roi.annualBenefit}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {useCase.testimonial && (
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl italic mb-8">
                "{useCase.testimonial.quote}"
              </blockquote>
              <div className="text-yellow-400 font-semibold">{useCase.testimonial.author}</div>
              <div className="text-gray-300">{useCase.testimonial.role}</div>
              <div className="text-gray-400">{useCase.testimonial.company}</div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              See how GoBananas can help modernize your legacy systems with the same proven approach.
            </p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Your Risk-Free Pilot
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}