'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Building2,
  Heart,
  Factory,
  Truck,
  Building,
  Zap,
  GitMerge,
  Code,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  Target,
  Shield,
  Workflow,
  BarChart3,
  Database,
  Cloud,
  Lock,
  Zap as Lightning
} from 'lucide-react';
import { useCases, industries, type Industry } from '@/data/use-cases';
import { Button } from '@/components/ui/button';

const industryIcons: Record<string, any> = {
  'Financial Services': Building2,
  'Healthcare': Heart,
  'Manufacturing': Factory,
  'Transportation': Truck,
  'Government': Building,
  'Energy': Zap,
  'Merger & Acquisition': GitMerge,
  'Technical Debt': Code,
};

// Industry-specific compliance and challenge information
const industryDetails = {
  'Financial Services': {
    compliance: ['SOX Compliance', 'Basel III', 'PCI-DSS', 'GLBA', 'Dodd-Frank'],
    challenges: ['COBOL Modernization', 'Zero Downtime', 'Real-time Transactions', 'Fraud Prevention'],
    patterns: ['Strangler Fig Migration', 'Event Sourcing', 'CQRS', 'Microservices'],
    timeline: '6-12 months typical',
    kpis: ['Transaction Latency', 'System Uptime', 'Regulatory Compliance', 'Cost per Transaction']
  },
  'Healthcare': {
    compliance: ['HIPAA', 'HITECH', 'HL7 FHIR', 'FDA 21 CFR Part 11', 'GDPR'],
    challenges: ['Patient Privacy', 'Legacy EHR Systems', 'Interoperability', '24/7 Care Delivery'],
    patterns: ['API-First Architecture', 'FHIR Standards', 'Microservices', 'Event-Driven'],
    timeline: '8-14 months typical',
    kpis: ['Patient Satisfaction', 'System Uptime', 'Data Accuracy', 'Care Coordination Time']
  },
  'Manufacturing': {
    compliance: ['ISO 9001', 'ISO 27001', 'ITAR', 'RoHS', 'REACH'],
    challenges: ['ERP Migration', 'MES Integration', '24/7 Operations', 'Supply Chain Visibility'],
    patterns: ['Brownfield Migration', 'IoT Integration', 'Digital Twin', 'Edge Computing'],
    timeline: '10-18 months typical',
    kpis: ['OEE', 'Lead Time', 'Inventory Turnover', 'Quality Metrics']
  },
  'Transportation': {
    compliance: ['FMCSA', 'ELD Mandate', 'DOT Regulations', 'CARB', 'GDPR'],
    challenges: ['Real-time Tracking', 'Route Optimization', 'Telematics Integration', 'Driver Safety'],
    patterns: ['IoT Platform', 'ML Routing', 'Edge Computing', 'Predictive Maintenance'],
    timeline: '5-10 months typical',
    kpis: ['On-Time Delivery', 'Fuel Efficiency', 'Vehicle Utilization', 'Safety Incidents']
  },
  'Government': {
    compliance: ['FedRAMP', 'FISMA', 'NIST 800-53', 'Zero Trust', 'ATO Requirements'],
    challenges: ['Security Clearance', 'Legacy Systems', 'Procurement', 'Change Management'],
    patterns: ['Zero Trust Architecture', 'Cloud-Native', 'Microsegmentation', 'IaC'],
    timeline: '12-24 months typical',
    kpis: ['Compliance Score', 'Security Posture', 'Citizen Satisfaction', 'Cost Efficiency']
  },
  'Energy': {
    compliance: ['NERC CIP', 'FERC', 'EPA Regulations', 'ISO 50001', 'Safety Standards'],
    challenges: ['SCADA Modernization', 'Real-time Control', 'DER Integration', 'Grid Reliability'],
    patterns: ['IoT + Edge', 'Digital Twin', 'Predictive Maintenance', 'Time-Series Data'],
    timeline: '10-16 months typical',
    kpis: ['System Reliability', 'Outage Duration', 'DER Integration', 'Operating Costs']
  },
  'Merger & Acquisition': {
    compliance: ['SOX', 'GDPR', 'Industry-Specific', 'Data Privacy', 'Financial Reporting'],
    challenges: ['System Consolidation', 'Data Migration', 'Cultural Integration', 'Timeline Pressure'],
    patterns: ['Phased Migration', 'Data Standardization', 'API Integration', 'Parallel Operation'],
    timeline: '6-12 months typical',
    kpis: ['Synergy Realization', 'Operating Cost', 'Customer Retention', 'Employee Satisfaction']
  },
  'Technical Debt': {
    compliance: ['Security Standards', 'Code Quality', 'Testing Coverage', 'Documentation'],
    challenges: ['Legacy Code', 'Low Test Coverage', 'Monolithic Architecture', 'Developer Velocity'],
    patterns: ['Strangler Pattern', 'Test-First Refactoring', 'Microservices', 'CI/CD'],
    timeline: '6-18 months sustained effort',
    kpis: ['Development Velocity', 'Test Coverage', 'Production Incidents', 'Developer Satisfaction']
  }
};

export default function UseCasesClient() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('All Industries');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter use cases
  const filteredUseCases = useMemo(() => {
    let filtered = useCases;

    // Filter by industry
    if (selectedIndustry !== 'All Industries') {
      filtered = filtered.filter(uc => uc.industry === selectedIndustry);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        uc =>
          uc.title.toLowerCase().includes(query) ||
          uc.description.toLowerCase().includes(query) ||
          uc.industry.toLowerCase().includes(query) ||
          uc.migration.from.some(tech => tech.toLowerCase().includes(query)) ||
          uc.migration.to.some(tech => tech.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedIndustry, searchQuery]);

  // Get current industry details
  const currentIndustryDetails = selectedIndustry !== 'All Industries'
    ? industryDetails[selectedIndustry as keyof typeof industryDetails]
    : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-teal-300 text-sm font-semibold">
                Real-World Transformations
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Enterprise Legacy Modernization{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
                Use Cases
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Explore detailed case studies showcasing how enterprise leaders modernize legacy systems,
              reduce technical debt, and achieve measurable business outcomes across industries.
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="text-teal-400" size={20} />
                <span>Zero-Downtime Migrations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="text-teal-400" size={20} />
                <span>Full Compliance Maintained</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <CheckCircle className="text-teal-400" size={20} />
                <span>Measurable ROI</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container-max py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
            {/* Industry Filter */}
            <div className="flex-1 w-full lg:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Filter size={16} className="text-teal-600" />
                Filter by Industry
              </label>
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value as Industry)}
                  className="w-full lg:w-80 px-4 py-3 pr-10 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-900
                           focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all appearance-none cursor-pointer
                           hover:border-teal-400"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 w-full lg:w-auto">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <Search size={16} className="text-teal-600" />
                Search Use Cases
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, industry, or technology..."
                  className="w-full lg:w-96 pl-12 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-900
                           focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all
                           placeholder:text-gray-400 hover:border-teal-400"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600 lg:pt-8">
              <span className="font-semibold text-navy-900">{filteredUseCases.length}</span> use case
              {filteredUseCases.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* Industry Pills (Mobile Friendly) */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="container-max">
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => {
              const Icon = industryIcons[industry] || Target;
              const count = useCases.filter(uc => industry === 'All Industries' || uc.industry === industry).length;
              const isActive = selectedIndustry === industry;

              return (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm
                    ${isActive
                      ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-teal-500 hover:shadow-sm'
                    }`}
                >
                  {industry !== 'All Industries' && <Icon size={16} />}
                  <span>{industry}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20' : 'bg-gray-100'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific Details (when filtered) */}
      <AnimatePresence mode="wait">
        {currentIndustryDetails && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-teal-50 to-blue-50 border-b border-teal-200 overflow-hidden"
          >
            <div className="container-max py-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Compliance */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-teal-700 font-semibold mb-3">
                    <Shield size={18} />
                    <span className="text-sm">Regulatory Compliance</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentIndustryDetails.compliance.map((item) => (
                      <span key={item} className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-md font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-orange-700 font-semibold mb-3">
                    <Target size={18} />
                    <span className="text-sm">Common Challenges</span>
                  </div>
                  <ul className="space-y-1.5">
                    {currentIndustryDetails.challenges.map((item) => (
                      <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <CheckCircle className="text-orange-500 mt-0.5 flex-shrink-0" size={12} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Patterns */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-purple-700 font-semibold mb-3">
                    <Workflow size={18} />
                    <span className="text-sm">Migration Patterns</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentIndustryDetails.patterns.map((item) => (
                      <span key={item} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-md font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* KPIs */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-blue-700 font-semibold mb-3">
                    <BarChart3 size={18} />
                    <span className="text-sm">Key Success Metrics</span>
                  </div>
                  <ul className="space-y-1.5">
                    {currentIndustryDetails.kpis.map((item) => (
                      <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <TrendingUp className="text-blue-500 mt-0.5 flex-shrink-0" size={12} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500">Typical Timeline</div>
                    <div className="text-sm font-semibold text-navy-900 flex items-center gap-1">
                      <Clock size={14} className="text-teal-600" />
                      {currentIndustryDetails.timeline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Use Cases Grid */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <AnimatePresence mode="wait">
            {filteredUseCases.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No use cases found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search query</p>
                <Button
                  onClick={() => {
                    setSelectedIndustry('All Industries');
                    setSearchQuery('');
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid gap-8"
              >
                {filteredUseCases.map((useCase, index) => {
                  const Icon = industryIcons[useCase.industry] || Target;

                  return (
                    <motion.div
                      key={useCase.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/use-cases/${useCase.slug}`}>
                        <div className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-teal-500
                                      hover:shadow-2xl transition-all duration-300 cursor-pointer">
                          <div className="grid lg:grid-cols-3 gap-0">
                            {/* Left: Industry Badge & Key Info */}
                            <div className="lg:col-span-1 bg-gradient-to-br from-navy-900 to-navy-800 p-8 text-white flex flex-col justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-6">
                                  <div className="p-2 bg-teal-500/20 rounded-lg">
                                    <Icon className="text-teal-400" size={24} />
                                  </div>
                                  <span className="text-teal-400 font-semibold text-sm uppercase tracking-wide">
                                    {useCase.industry}
                                  </span>
                                </div>

                                {useCase.featured && (
                                  <div className="inline-block mb-4">
                                    <span className="px-3 py-1 bg-gold-500/20 border border-gold-500/50 rounded-full
                                                   text-gold-300 text-xs font-semibold">
                                      Featured Case Study
                                    </span>
                                  </div>
                                )}

                                <h2 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                                  {useCase.title}
                                </h2>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                  {useCase.description}
                                </p>
                              </div>

                              {/* Quick Stats */}
                              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                <div>
                                  <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
                                    <Clock size={14} />
                                    Timeline
                                  </div>
                                  <div className="text-white font-semibold">{useCase.approach.timeline}</div>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
                                    <Users size={14} />
                                    Team
                                  </div>
                                  <div className="text-white font-semibold">{useCase.approach.teamSize}</div>
                                </div>
                              </div>
                            </div>

                            {/* Right: Results & Metrics */}
                            <div className="lg:col-span-2 p-8 lg:p-12">
                              {/* Key Metrics Grid */}
                              <div className="grid grid-cols-2 gap-6 mb-8">
                                {useCase.results.metrics.slice(0, 4).map((metric, idx) => (
                                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                                      <TrendingUp size={12} className="text-teal-600" />
                                      {metric.label}
                                    </div>
                                    <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-400 mb-1">
                                      {metric.improvement}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      {metric.before} → {metric.after}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* ROI Highlight */}
                              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-200 mb-8">
                                <div className="flex items-center gap-2 text-teal-700 font-semibold mb-3">
                                  <DollarSign size={20} />
                                  <span>Return on Investment</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                  <div>
                                    <div className="text-gray-600 text-xs mb-1">Annual Savings</div>
                                    <div className="font-bold text-navy-900">{useCase.roi.savings}</div>
                                  </div>
                                  <div>
                                    <div className="text-gray-600 text-xs mb-1">Payback Period</div>
                                    <div className="font-bold text-navy-900">{useCase.roi.paybackPeriod}</div>
                                  </div>
                                  <div>
                                    <div className="text-gray-600 text-xs mb-1">Annual Benefit</div>
                                    <div className="font-bold text-navy-900">{useCase.roi.annualBenefit}</div>
                                  </div>
                                </div>
                              </div>

                              {/* Migration Path */}
                              <div className="mb-6">
                                <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                  <Workflow size={16} className="text-teal-600" />
                                  Technology Migration Path
                                </div>
                                <div className="flex items-center gap-4 flex-wrap">
                                  <div className="flex-1 min-w-[150px]">
                                    <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                      <Database size={12} />
                                      From (Legacy)
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {useCase.migration.from.slice(0, 2).map((tech, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs font-medium border border-red-200">
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                  <ArrowRight className="text-gray-400 hidden sm:block" size={20} />
                                  <div className="flex-1 min-w-[150px]">
                                    <div className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                                      <Cloud size={12} />
                                      To (Modern)
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {useCase.migration.to.slice(0, 2).map((tech, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-200">
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                                  <div className="text-xs text-gray-500 mb-1">Migration Strategy</div>
                                  <div className="text-sm font-medium text-navy-900">{useCase.migration.strategy}</div>
                                </div>
                              </div>

                              {/* CTA */}
                              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                                  Read Full Case Study <ArrowRight size={20} />
                                </div>

                                {useCase.testimonial && (
                                  <div className="text-xs text-gray-500 italic hidden lg:block max-w-xs">
                                    "{useCase.testimonial.quote.slice(0, 80)}..."
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Industry-Specific Expertise */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-lg text-gray-600">
              Deep domain knowledge and proven modernization patterns across regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                industry: 'Financial Services',
                icon: Building2,
                challenges: ['SOX Compliance', 'Zero Downtime', 'COBOL Modernization'],
                color: 'teal'
              },
              {
                industry: 'Healthcare',
                icon: Heart,
                challenges: ['HIPAA Compliance', 'HL7 FHIR', 'Patient Privacy'],
                color: 'blue'
              },
              {
                industry: 'Manufacturing',
                icon: Factory,
                challenges: ['ERP Migration', 'MES Integration', '24/7 Operations'],
                color: 'orange'
              },
              {
                industry: 'Government',
                icon: Building,
                challenges: ['FedRAMP', 'Zero Trust', 'Security Clearance'],
                color: 'purple'
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.industry} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500
                                                    hover:shadow-lg transition-all group">
                  <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4
                                  group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-${item.color}-600`} size={24} />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-3">{item.industry}</h3>
                  <ul className="space-y-2">
                    {item.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={14} />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Success Patterns */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
            What These Transformations Have in Common
          </h2>

          <div className="space-y-6">
            {[
              {
                icon: Shield,
                title: 'Zero-Downtime Migrations',
                description: 'Every project maintained 100% operational continuity using parallel systems, gradual cutover, and automated rollback capabilities.'
              },
              {
                icon: Lock,
                title: 'Compliance-First Approach',
                description: 'Regulatory requirements (SOX, HIPAA, FedRAMP, NERC) were maintained or improved throughout modernization, never compromised.'
              },
              {
                icon: DollarSign,
                title: 'Measurable Business Outcomes',
                description: 'All projects delivered quantified ROI, from 40% cost reductions to 3x development velocity improvements, with payback periods under 2 years.'
              },
              {
                icon: Target,
                title: 'Phased Risk Management',
                description: 'Strangler fig patterns, parallel operation, and incremental migration minimized risk while allowing rapid rollback if issues emerged.'
              },
              {
                icon: Lightning,
                title: 'Technology-Agnostic Excellence',
                description: 'Success across COBOL, .NET, SAP, custom systems - our methodology adapts to your technology stack, not the other way around.'
              },
              {
                icon: Users,
                title: 'Change Management Integration',
                description: 'Technical excellence paired with comprehensive training, communication, and organizational change management for lasting adoption.'
              }
            ].map((pattern, idx) => {
              const IconComponent = pattern.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border-l-4 border-teal-500
                           hover:shadow-md transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                      <IconComponent className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {pattern.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{pattern.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-navy-900 via-teal-900 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
        </div>

        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Modernization Journey Starts Here
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're facing COBOL migration, ERP modernization, or technical debt reduction -
              we've solved similar challenges and can help you achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700
                         text-white shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
              >
                <Link href="https://calendly.com/mustafa-sinanai/30min" target="_blank" rel="noopener noreferrer" className="gap-2">
                  Request Demo <ArrowRight size={20} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-teal-400" size={16} />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-teal-400" size={16} />
                <span>Custom assessment included</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </section>
    </div>
  );
}
