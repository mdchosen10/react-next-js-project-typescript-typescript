'use client';

import { EnterpriseCaseStudy } from '@/data/enterprise/case-studies';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Users, Clock, TrendingUp, Target, Lightbulb, CheckCircle, Quote } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyDetailProps {
  caseStudy: EnterpriseCaseStudy;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <div className="py-12">
      {/* Back navigation */}
      <div className="container-max mb-8">
        <Button variant="outline" asChild className="mb-4">
          <Link href="/enterprise/case-studies">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </Button>
      </div>

      {/* Hero section */}
      <div className="bg-gradient-to-r from-navy-900 to-teal-900 py-16">
        <div className="container-max">
          <div className="max-w-4xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {caseStudy.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {caseStudy.client.industry}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {caseStudy.solution.timeline}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(caseStudy.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Client overview */}
            <section>
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-teal-600" />
                  Client Overview
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Industry</h3>
                    <p className="text-gray-700">{caseStudy.client.industry}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-2">Company Size</h3>
                    <p className="text-gray-700">{caseStudy.client.size}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-navy-900 mb-2">Primary Challenge</h3>
                    <p className="text-gray-700">{caseStudy.client.challenge}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Challenge section */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-red-600" />
                The Challenge
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {caseStudy.challenge.overview}
                </p>
              </div>

              {/* Challenge metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {caseStudy.challenge.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge details */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Key Challenges:</h3>
                <ul className="space-y-3">
                  {caseStudy.challenge.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Solution section */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Our Solution
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {caseStudy.solution.overview}
                </p>
              </div>

              {/* Solution approach */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-navy-900 mb-4">Implementation Approach:</h3>
                <div className="space-y-4">
                  {caseStudy.solution.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-semibold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies used */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Technologies & Tools:</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.solution.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-navy-100 text-navy-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Results section */}
            <section>
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                Results & Outcomes
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {caseStudy.results.overview}
                </p>
              </div>

              {/* Results metrics */}
              <div className="grid gap-6 mb-8">
                {caseStudy.results.metrics.map((metric, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-navy-900">{metric.label}</h3>
                      <span className="text-2xl font-bold text-green-600">
                        {metric.improvement}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>Before: <strong>{metric.before}</strong></span>
                      <span>→</span>
                      <span>After: <strong>{metric.after}</strong></span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business outcomes */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Business Outcomes:</h3>
                <ul className="space-y-3">
                  {caseStudy.results.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <section>
                <div className="bg-gradient-to-r from-navy-900 to-teal-900 rounded-2xl p-8 text-white">
                  <Quote className="w-12 h-12 text-teal-400 mb-6" />
                  <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{caseStudy.testimonial.author}</div>
                      <div className="text-gray-200">{caseStudy.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick stats */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">Project Summary</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Industry</div>
                    <div className="font-semibold">{caseStudy.client.industry}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Timeline</div>
                    <div className="font-semibold">{caseStudy.solution.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Company Size</div>
                    <div className="font-semibold">{caseStudy.client.size}</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 text-center">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Ready for Your Transformation?
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Get a custom enterprise assessment and modernization roadmap.
                </p>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Get Assessment
                </Button>
              </div>

              {/* Related case studies */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">More Case Studies</h3>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/enterprise/case-studies">
                    View All Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}