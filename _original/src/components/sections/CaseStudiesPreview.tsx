'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Heart, Factory, Truck } from 'lucide-react';
import { useCases } from '@/data/use-cases';

// Get featured use cases for preview
const featuredUseCases = useCases.filter(useCase => useCase.featured).slice(0, 4);

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full text-yellow-700 text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4" />
            <span>Use Cases: Modernization in Action</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See How We Help Enterprise Leaders Transform Legacy Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real examples of how GoBananas accelerates legacy modernization across industries with guaranteed outcomes and risk-free execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredUseCases.map((useCase, index) => {
            const getIndustryIcon = (industry: string) => {
              switch (industry) {
                case 'Financial Services':
                  return <Building2 className="w-6 h-6" />;
                case 'Healthcare':
                  return <Heart className="w-6 h-6" />;
                case 'Manufacturing':
                  return <Factory className="w-6 h-6" />;
                case 'Transportation':
                  return <Truck className="w-6 h-6" />;
                default:
                  return <Building2 className="w-6 h-6" />;
              }
            };

            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/use-cases/${useCase.slug}`}>
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:border-yellow-300 transition-all duration-300 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600">
                          {getIndustryIcon(useCase.industry)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-yellow-600">{useCase.industry}</div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                            {useCase.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                      {useCase.results.metrics.slice(0, 3).map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-bold text-gray-900 mb-1">
                            {metric.improvement}
                          </div>
                          <div className="text-xs text-gray-500 leading-tight">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Migration Path */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="text-xs text-gray-500 mb-2">Migration</div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs">
                          {useCase.migration.from[0]}
                        </span>
                        <ArrowRight className="w-3 h-3 text-gray-400" />
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                          {useCase.migration.to[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-8 py-3 rounded-lg font-semibold text-lg">
            <Link href="/use-cases" className="inline-flex items-center gap-2">
              View All Use Cases
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <p className="text-gray-500 mt-4">
            See detailed case studies across all industries and technical stacks
          </p>
        </motion.div>
      </div>
    </section>
  );
}