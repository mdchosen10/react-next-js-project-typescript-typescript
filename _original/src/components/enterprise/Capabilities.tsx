'use client';

import { Database, Code, TrendingDown, Check } from 'lucide-react';

export default function Capabilities() {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Enterprise-Grade Modernization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for legacy system modernization, built for Fortune 500 scale and complexity.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid gap-8 md:gap-12 lg:gap-16">
          {/* Legacy Migration */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg">
                  <Database className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
                  Legacy Migration
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Deep refactoring across any tech stack
              </p>
              <div className="space-y-3">
                {[
                  'COBOL, C#, Java, Python modernization',
                  'Complex interdependency handling',
                  'Reduced migration risk assessment',
                  'Phased approach with parallel systems'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-navy-50 to-teal-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-lg font-semibold text-navy-900 mb-2">Migration Focus</h4>
                <p className="text-gray-600 text-sm">
                  Transform decades-old systems into modern architectures while preserving critical business logic and ensuring zero downtime.
                </p>
              </div>
            </div>
          </div>

          {/* Extend Existing Apps */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gold-100 rounded-lg">
                  <Code className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
                  Extend Existing Apps
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Modernize UI layers and add new features
              </p>
              <div className="space-y-3">
                {[
                  'Add modern frontends to legacy backends',
                  'Incremental modernization strategy',
                  'No full rewrites required',
                  'API layer abstraction and integration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:order-1">
              <div className="bg-gradient-to-br from-gold-50 to-navy-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-lg font-semibold text-navy-900 mb-2">Extension Strategy</h4>
                <p className="text-gray-600 text-sm">
                  Add modern capabilities to existing systems without disrupting operations or requiring complete rewrites.
                </p>
              </div>
            </div>
          </div>

          {/* Reduce Technical Debt */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
                  Reduce Technical Debt
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Systematic debt identification and reduction
              </p>
              <div className="space-y-3">
                {[
                  'AI-powered debt quantification',
                  'Prioritization framework development',
                  'Measurable reduction metrics',
                  'Continuous improvement tracking'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-navy-50 to-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-lg font-semibold text-navy-900 mb-2">Debt Reduction</h4>
                <p className="text-gray-600 text-sm">
                  Systematically identify, prioritize, and eliminate technical debt with measurable progress tracking and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}