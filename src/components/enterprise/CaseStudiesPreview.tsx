'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { enterpriseCaseStudies } from '@/data/enterprise/case-studies';
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

export default function CaseStudiesPreview() {
  // Get featured case studies
  const featuredCaseStudies = enterpriseCaseStudies.filter(cs => cs.featured).slice(0, 2);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Proven Enterprise Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Fortune 500 companies overcame their biggest legacy system challenges
            and achieved measurable business outcomes.
          </p>
        </div>

        {/* Featured case studies */}
        <div className="grid gap-8 lg:gap-12 mb-12">
          {featuredCaseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-navy-900 mb-4 leading-tight">
                    {caseStudy.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-navy-600" />
                    <div>
                      <div className="font-semibold text-navy-900">
                        {caseStudy.client.industry}
                      </div>
                      <div className="text-sm text-gray-600">
                        {caseStudy.client.size}
                      </div>
                    </div>
                  </div>

                  {/* Key metrics preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {caseStudy.challenge.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-teal-600 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-3"
                  >
                    <Link href={`/enterprise/case-studies/${caseStudy.slug}`}>
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Results preview */}
                <div className="bg-gradient-to-br from-navy-900 to-teal-900 p-8 lg:p-12 text-white">
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-teal-400" />
                    Key Results Achieved
                  </h4>

                  <div className="space-y-6">
                    {caseStudy.results.metrics.slice(0, 3).map((metric, metricIndex) => (
                      <div key={metricIndex} className="border-b border-white/20 pb-4 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-200">
                            {metric.label}
                          </span>
                          <span className="text-teal-400 font-bold">
                            {metric.improvement}
                          </span>
                        </div>
                        <div className="text-sm text-gray-300">
                          {metric.before} → {metric.after}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Timeline */}
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-2 text-gray-200">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">
                        Completed in {caseStudy.solution.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to view all case studies */}
        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-navy-200 text-navy-900 hover:bg-navy-50 px-8 py-4 text-lg font-semibold"
          >
            <Link href="/enterprise/case-studies">
              View All Enterprise Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          {/* Stats */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              <span className="text-navy-900 font-bold">500+</span> successful implementations •{' '}
              <span className="text-navy-900 font-bold">$2.5B+</span> in client savings •{' '}
              <span className="text-navy-900 font-bold">100%</span> compliance success rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}