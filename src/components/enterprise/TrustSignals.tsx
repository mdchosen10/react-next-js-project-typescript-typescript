'use client';

import { trustMetrics, claudeAITrustMessage, complianceBadges } from '@/data/enterprise/trust-signals';
import { Check, Star, Award, Users } from 'lucide-react';

export default function TrustSignals() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Trusted by Fortune 500 Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the world's largest enterprises who rely on our proven enterprise modernization solutions
          </p>
        </div>

        {/* Claude AI Trust Message */}
        <div className="bg-gradient-to-r from-navy-900 to-teal-900 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-teal-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Powered by Claude AI Technology
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {claudeAITrustMessage.headline}
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              {claudeAITrustMessage.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {claudeAITrustMessage.details.map((detail, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-200">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{metric.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-navy-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-navy-700 mb-2">
                    {metric.label}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Enterprise Security & Compliance Certifications
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Independently audited and certified to meet the highest standards for enterprise security,
              compliance, and data protection across multiple jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {complianceBadges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center text-center group cursor-pointer"
                title={badge.description}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
                  <Award className="w-8 h-8 text-navy-600" />
                </div>
                <div className="font-semibold text-navy-900 text-sm mb-1">
                  {badge.name}
                </div>
                {badge.validUntil && (
                  <div className="text-xs text-gray-500">
                    Valid until {new Date(badge.validUntil).getFullYear()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Client testimonial highlight */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-navy-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl font-medium text-navy-900 mb-6">
              "Sinan AI transformed what could have been our biggest integration nightmare into a seamless success.
              Their AI-powered approach uncovered business logic we didn't even know existed in our 30-year-old systems."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-navy-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-navy-900">Chief Technology Officer</div>
                <div className="text-gray-600">Fortune 100 Financial Services Company</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}