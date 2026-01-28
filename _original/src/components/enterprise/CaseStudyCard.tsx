'use client';

import Link from 'next/link';
import { EnterpriseCaseStudy } from '@/data/enterprise/case-studies';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: EnterpriseCaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {caseStudy.featured && (
              <span className="px-3 py-1 bg-gold-100 text-gold-700 text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>

          {/* Title and description */}
          <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4 leading-tight">
            {caseStudy.title}
          </h3>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            {caseStudy.description}
          </p>

          {/* Client info */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-navy-600" />
              <div>
                <div className="font-semibold text-navy-900">
                  {caseStudy.client.industry} Company
                </div>
                <div className="text-sm text-gray-600">
                  {caseStudy.client.size}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-700 font-medium">
              Challenge: {caseStudy.client.challenge}
            </p>
          </div>

          {/* Key challenge metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {caseStudy.challenge.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-teal-600 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600 leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge overview */}
          <div className="mb-8">
            <h4 className="font-semibold text-navy-900 mb-3">The Challenge:</h4>
            <p className="text-gray-700 leading-relaxed">
              {caseStudy.challenge.overview}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <Button
              asChild
              className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-3"
            >
              <Link href={`/enterprise/case-studies/${caseStudy.slug}`}>
                Read Full Study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {new Date(caseStudy.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
              })}
            </div>
          </div>
        </div>

        {/* Results sidebar */}
        <div className="bg-gradient-to-b from-navy-900 to-teal-900 p-8 text-white">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-teal-400" />
            Results Achieved
          </h4>

          {/* Key results metrics */}
          <div className="space-y-6 mb-8">
            {caseStudy.results.metrics.slice(0, 3).map((metric, index) => (
              <div key={index} className="border-b border-white/20 pb-4 last:border-0">
                <div className="font-semibold text-teal-400 mb-1">
                  {metric.improvement}
                </div>
                <div className="text-sm text-gray-200 mb-2">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-300">
                  {metric.before} → {metric.after}
                </div>
              </div>
            ))}
          </div>

          {/* Solution timeline */}
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm text-gray-200 mb-2">Implementation Timeline</div>
            <div className="text-lg font-bold text-white">
              {caseStudy.solution.timeline}
            </div>
          </div>

          {/* Key outcomes */}
          <div className="mt-6">
            <div className="text-sm text-gray-200 mb-3">Key Outcomes:</div>
            <div className="space-y-2">
              {caseStudy.results.outcomes.slice(0, 2).map((outcome, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-xs text-gray-200 leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}