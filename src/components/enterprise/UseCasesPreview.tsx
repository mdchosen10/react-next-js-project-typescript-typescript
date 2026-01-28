'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

// Use case data with Unsplash images
const useCases = [
  {
    id: 'financial-services',
    title: 'Financial Services: Legacy COBOL Modernization',
    description: 'Fortune 500 Bank (50K+ employees) - Modernizing core banking systems with zero downtime and full regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTEyMDN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYW5raW5nJTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnMlMjB0ZWNobm9sb2d5fGVufDB8MHx8fDE3Njk0NjU4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    industry: 'Financial Services',
    size: '50K+ employees',
    challenge: 'Legacy COBOL system modernization',
    metrics: [
      { label: '40%', description: 'Cost Reduction' },
      { label: '$2.3M', description: 'Annual Savings' },
      { label: '6 months', description: 'Timeline' }
    ],
    solution: 'Phased refactoring with parallel systems, compliance-aware approach ensuring zero downtime during transition',
    results: [
      'Zero-downtime migration of critical banking systems',
      'Full SOX and regulatory compliance maintained',
      'Reduced system maintenance costs by 40%',
      'Improved developer productivity by 3x'
    ],
    quote: 'GoBananas helped us modernize our core banking system with zero downtime and full regulatory compliance. The systematic approach gave us confidence throughout the entire process.',
    tags: ['Banking', 'COBOL', 'Zero Downtime']
  },
  {
    id: 'transportation-logistics',
    title: 'Transportation & Logistics: Multi-Stack Extension',
    description: 'Global Logistics Leader (25K+ employees) - Adding modern capabilities to legacy C# systems without operational disruption.',
    image: 'https://images.unsplash.com/photo-1761195696518-6384573549ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTEyMDN8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjB0ZWNobm9sb2d5JTIwbW9kZXJuJTIwc3lzdGVtc3xlbnwwfDB8fHwxNzY5NDY1ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    industry: 'Transportation & Logistics',
    size: '25K+ employees',
    challenge: 'Multi-stack codebase extension',
    metrics: [
      { label: '60%', description: 'Delivery Speed' },
      { label: '8', description: 'New Features' },
      { label: '4 months', description: 'Timeline' }
    ],
    solution: 'Incremental modernization with API layer abstraction, allowing legacy systems to coexist with modern features',
    results: [
      'Added real-time tracking to legacy systems',
      'Integrated modern APIs without downtime',
      'Reduced feature delivery time by 60%',
      'Maintained full operational continuity'
    ],
    quote: 'We were able to add modern capabilities to our legacy C# backend without disrupting operations. The phased approach was perfect for our 24/7 operations.',
    tags: ['Logistics', 'API Integration', 'Real-time']
  }
];

export default function UseCasesPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Proven Enterprise Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformation stories from Fortune 500 companies across critical industries.
          </p>
        </div>

        {/* Use cases */}
        <div className="grid gap-8 lg:gap-12 mb-12">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {useCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    {useCase.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-navy-600" />
                    <div>
                      <div className="font-semibold text-navy-900">
                        {useCase.industry}
                      </div>
                      <div className="text-sm text-gray-600">
                        {useCase.size}
                      </div>
                    </div>
                  </div>

                  {/* Key metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-teal-600 mb-1">
                          {metric.label}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.description}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-900 mb-3">Solution:</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {useCase.solution}
                    </p>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700 mb-6">
                    "{useCase.quote}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third use case - Merger & Acquisition */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {/* Image */}
            <div className="relative h-64 lg:h-auto lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4MTEyMDN8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZXJnZXIlMjBhY3F1aXNpdGlvbiUyMG9mZmljZSUyMGJ1c2luZXNzJTIwc3lzdGVtc3xlbnwwfDB8fHwxNzY5NDY1ODUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corporate Merger System Integration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 lg:order-1">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                  M&A Integration
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                  System Consolidation
                </span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                  Data Migration
                </span>
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-4 leading-tight">
                M&A Integration: Multi-Company System Consolidation
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Fortune 500 Acquiring Company - Integrating 3 acquired companies' legacy systems into unified platform during $2.1B acquisition.
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <Users className="w-6 h-6 text-navy-600" />
                <div>
                  <div className="font-semibold text-navy-900">
                    Manufacturing & Healthcare
                  </div>
                  <div className="text-sm text-gray-600">
                    80K+ combined employees
                  </div>
                </div>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">90 days</div>
                  <div className="text-sm text-gray-600">Integration Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">$15M</div>
                  <div className="text-sm text-gray-600">Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Companies Integrated</div>
                </div>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="font-semibold text-navy-900 mb-3">Solution:</h4>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Parallel system mapping with phased data migration and unified API layer, maintaining operations across all entities during integration
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700 mb-6">
                "GoBananas enabled us to complete a complex 3-company system integration in just 90 days without disrupting operations. The ROI was immediate and substantial."
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-navy-900 to-teal-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Your Success Story?
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Get detailed case studies and see how we can transform your legacy systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Download Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}