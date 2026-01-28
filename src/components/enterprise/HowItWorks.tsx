'use client';

import { Search, Map, Cog, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic, risk-aware approach to legacy modernization with full-service execution support.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {/* Step 1: Analyze */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg">
                  <Search className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-teal-600 mb-1">01</div>
                  <h3 className="text-xl font-bold text-navy-900">Analyze</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-powered codebase analysis and dependency mapping
              </p>

              <div className="space-y-3">
                {[
                  'Deep codebase scanning across all technologies',
                  'Technical debt quantification and prioritization',
                  'Risk assessment and impact analysis',
                  'Timeline and effort estimation'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector arrow for desktop */}
            <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-teal-500" />
            </div>
          </div>

          {/* Step 2: Plan */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gold-100 rounded-lg">
                  <Map className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gold-600 mb-1">02</div>
                  <h3 className="text-xl font-bold text-navy-900">Plan</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Risk-aware refactoring roadmap with experienced oversight
              </p>

              <div className="space-y-3">
                {[
                  'Phased approach with minimal business disruption',
                  'Integration with existing workflows and tools',
                  'Dedicated enterprise point of contact assigned',
                  'Custom migration strategy for your architecture'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector arrow for desktop */}
            <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-gold-500" />
            </div>
          </div>

          {/* Step 3: Execute */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg">
                  <Cog className="w-6 h-6 text-navy-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-600 mb-1">03</div>
                  <h3 className="text-xl font-bold text-navy-900">Execute</h3>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Automated refactoring with full engagement management
              </p>

              <div className="space-y-3">
                {[
                  'AI-powered refactoring with human oversight',
                  'Continuous integration and testing',
                  'Real-time progress tracking and reporting',
                  'Complete project management from start to finish'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-navy-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results banner */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-teal-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Average Results</h3>
          <p className="text-lg text-gray-200">
            <span className="text-teal-400 font-semibold">30-50% faster</span> development cycles •
            <span className="text-gold-400 font-semibold"> 40-60% technical debt</span> reduction
          </p>
        </div>
      </div>
    </section>
  );
}