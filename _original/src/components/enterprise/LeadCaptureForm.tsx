'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, AlertCircle, Loader2, Mail, Building, Phone, Users } from 'lucide-react';

interface FormData {
  companyName: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  industry: string;
  employeeCount: string;
  useCase: string;
  timeline: string;
  budget: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    industry: '',
    employeeCount: '',
    useCase: '',
    timeline: '',
    budget: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
    }

    if (!formData.industry) {
      newErrors.industry = 'Please select your industry';
    }

    if (!formData.employeeCount) {
      newErrors.employeeCount = 'Please select company size';
    }

    if (!formData.useCase.trim()) {
      newErrors.useCase = 'Please describe your use case';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select your timeline';
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/enterprise/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-capture" className="py-24 bg-gradient-to-r from-teal-600 to-navy-700">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl mb-6">
              We've received your enterprise assessment request. Our team will review your requirements
              and contact you within 24 hours to discuss your modernization strategy.
            </p>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">What happens next:</h3>
              <ul className="text-left space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  Our enterprise architects will analyze your requirements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  We'll prepare a custom modernization roadmap
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  Schedule a strategic consultation call within 24 hours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-capture" className="py-24 bg-gradient-to-r from-teal-600 to-navy-700">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Enterprise Assessment
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Schedule a comprehensive assessment of your legacy systems and receive a custom
              modernization roadmap tailored to your enterprise needs.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700">{submitError}</span>
                </div>
              )}

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-navy-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.firstName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-navy-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.lastName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Smith"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                    <Mail className="inline w-4 h-4 mr-1" />
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="john.smith@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2">
                    <Phone className="inline w-4 h-4 mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Company Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-navy-900 mb-2">
                    <Building className="inline w-4 h-4 mr-1" />
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.companyName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Acme Corporation"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-semibold text-navy-900 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.jobTitle ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="CTO, IT Director, etc."
                  />
                  {errors.jobTitle && (
                    <p className="mt-1 text-sm text-red-600">{errors.jobTitle}</p>
                  )}
                </div>
              </div>

              {/* Industry and Company Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-navy-900 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.industry ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Industry</option>
                    <option value="financial-services">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="technology">Technology</option>
                    <option value="government">Government</option>
                    <option value="energy">Energy & Utilities</option>
                    <option value="insurance">Insurance</option>
                    <option value="telecommunications">Telecommunications</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.industry && (
                    <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="employeeCount" className="block text-sm font-semibold text-navy-900 mb-2">
                    <Users className="inline w-4 h-4 mr-1" />
                    Company Size *
                  </label>
                  <select
                    id="employeeCount"
                    value={formData.employeeCount}
                    onChange={(e) => handleInputChange('employeeCount', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.employeeCount ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Company Size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1,000 employees</option>
                    <option value="1001-5000">1,001-5,000 employees</option>
                    <option value="5001-10000">5,001-10,000 employees</option>
                    <option value="10000+">10,000+ employees</option>
                  </select>
                  {errors.employeeCount && (
                    <p className="mt-1 text-sm text-red-600">{errors.employeeCount}</p>
                  )}
                </div>
              </div>

              {/* Use Case */}
              <div>
                <label htmlFor="useCase" className="block text-sm font-semibold text-navy-900 mb-2">
                  Describe Your Challenge *
                </label>
                <textarea
                  id="useCase"
                  value={formData.useCase}
                  onChange={(e) => handleInputChange('useCase', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                    errors.useCase ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Describe your legacy system challenges, compliance requirements, or modernization goals..."
                />
                {errors.useCase && (
                  <p className="mt-1 text-sm text-red-600">{errors.useCase}</p>
                )}
              </div>

              {/* Timeline and Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-navy-900 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.timeline ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12+ months">12+ months</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-navy-900 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m+">$5M+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 text-lg font-semibold"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting Assessment Request...
                    </>
                  ) : (
                    'Get Enterprise Assessment'
                  )}
                </Button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  By submitting this form, you agree to receive communications from Sinan AI.
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}