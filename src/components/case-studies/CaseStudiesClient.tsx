'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter } from 'lucide-react';
import { caseStudiesData } from '@/lib/case-studies-data';

// Convert case studies data to array format with IDs
const caseStudiesArray = Object.entries(caseStudiesData).map(([id, data]) => ({
  id,
  ...data,
}));

export default function CaseStudiesClient() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'function' | 'industry' | null>(null);

  // Get unique filter options
  const functionTypes = Array.from(new Set(caseStudiesArray.filter((s) => s.category === 'function').map((s) => s.type)));
  const industryTypes = Array.from(new Set(caseStudiesArray.filter((s) => s.category === 'industry').map((s) => s.type)));

  // Filter case studies based on active filter
  const filteredStudies = activeFilter
    ? caseStudiesArray.filter((study) => study.type === activeFilter)
    : caseStudiesArray;

  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding-lg bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container-max">
          <div className="max-w-4xl">
            <h1 className="text-h1 mb-6">Transformation Outcomes</h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Real-world examples of how we helped enterprise leaders close execution gaps and realize transformation value that others missed. Explore by function or industry.
            </p>
            <p className="text-lg text-teal-200">
              From Federal agencies to Energy companies to Technology firms—our track record proves execution expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding-md bg-gray-50 border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Function Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Filter size={16} />
                By Function
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeFilter === null
                      ? 'bg-navy-900 text-white'
                      : 'bg-white text-navy-900 border border-gray-300 hover:border-navy-900'
                  }`}
                >
                  All Studies
                </button>
                {functionTypes.map((func) => (
                  <button
                    key={func}
                    onClick={() => setActiveFilter(func)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                      activeFilter === func
                        ? 'bg-teal-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-teal-600'
                    }`}
                  >
                    {func}
                  </button>
                ))}
              </div>
            </div>

            {/* Industry Filter */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Filter size={16} />
                By Industry
              </h3>
              <div className="flex flex-wrap gap-2">
                {industryTypes.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                      activeFilter === industry
                        ? 'bg-gold-500 text-navy-950'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-gold-500'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 text-sm text-gray-600">
            {activeFilter ? (
              <p>
                Showing <span className="font-semibold text-navy-900">{filteredStudies.length}</span> case{' '}
                {filteredStudies.length === 1 ? 'study' : 'studies'}
              </p>
            ) : (
              <p>
                View all <span className="font-semibold text-navy-900">{caseStudiesArray.length}</span> case studies
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding-lg bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-1 gap-8">
            {filteredStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <div className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-teal-500 hover:shadow-xl transition-all cursor-pointer">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="md:col-span-1 h-48 md:h-auto overflow-hidden bg-gray-200">
                      <img
                        src={study.coverImage}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="mb-4 flex gap-2 flex-wrap">
                          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold">
                            {study.category === 'function' ? 'FUNCTION' : 'INDUSTRY'}
                          </span>
                          <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-xs font-semibold">
                            {study.type}
                          </span>
                        </div>
                        <h2 className="text-h3 text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                          {study.title}
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">{study.challenge.context || study.challenge}</p>
                      </div>

                      <div className="flex items-end justify-between">
                        <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                          Read Full Case Study <ArrowRight size={20} />
                        </div>

                        {/* Metrics */}
                        <div className="hidden md:grid grid-cols-3 gap-6">
                          {study.results.keyMetrics.slice(0, 3).map((metric: any, idx: number) => (
                            <div key={idx}>
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">{metric.label}</p>
                              <p className="text-2xl font-bold text-gold-600">{metric.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Metrics Display */}
      <section className="section-padding-lg bg-gray-50 md:hidden">
        <div className="container-max">
          <h2 className="text-h3 text-navy-900 mb-8 text-center">Key Metrics Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {filteredStudies.slice(0, 6).map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-xs font-semibold text-gray-600 uppercase mb-2 truncate">{study.title}</p>
                <div className="space-y-2">
                  {study.results.keyMetrics.slice(0, 2).map((metric: any, midx: number) => (
                    <div key={midx}>
                      <p className="text-xs text-gray-500">{metric.label}</p>
                      <p className="text-lg font-bold text-gold-600">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns Section */}
      <section className="section-padding-lg bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-h2 text-navy-900 text-center mb-12">What These Cases Have in Common</h2>

          <div className="space-y-6">
            {[
              {
                title: 'Identified but Not Realized',
                description:
                  'Each client had clear strategy and identified significant value ($80M-$380M), but captured only a fraction due to execution gaps ranging from governance to capability building.',
              },
              {
                title: 'Execution Infrastructure Gap',
                description:
                  "Root cause wasn't strategy—it was lack of execution governance, decision-making frameworks, accountability structures, and capability building across the organization.",
              },
              {
                title: 'Real Impact on Bottom Line',
                description:
                  'Results weren\'t theoretical. Each client realized 62%-72% of identified value, representing millions to hundreds of millions in actual, measurable business impact.',
              },
              {
                title: 'Cross-Sector Expertise',
                description:
                  'Our track record spans Government, Energy & Utilities, and Technology sectors—with deep experience in each industry\'s unique execution challenges and regulatory environment.',
              },
              {
                title: 'Embedded Approach',
                description:
                  "We didn't consult and leave. We embedded with execution teams, removed blockers, built capability, and stayed through value realization and beyond.",
              },
              {
                title: 'Outcomes Over Deliverables',
                description:
                  "We focused on realized value, not deliverables. No decks, no frameworks—just results tied to business impact and bottom-line outcomes.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-lg bg-teal-600">
        <div className="container-max text-center text-white">
          <h2 className="text-h2 mb-6">Your Transformation Could Be Next</h2>
          <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
            Whether you're in Government, Energy, or Technology, if your situation resonates with these examples, let's discuss how we can help close your execution gap.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer" className="gap-2">
              Schedule Discovery Call <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
