'use client';

import { enterpriseServices } from '@/data/enterprise/services';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Enterprise Modernization Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for legacy system transformation, compliance automation,
            security hardening, and enterprise integration.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 lg:gap-12">
          {enterpriseServices.map((service, index) => (
            <div
              key={service.id}
              className={`bg-gray-50 rounded-2xl p-8 md:p-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                {/* Service content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-navy-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-navy-900 mb-4">
                      Key Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-navy-900">{service.pricing.model}</span>
                      <ArrowRight className="w-5 h-5 text-teal-500" />
                    </div>
                    <p className="text-gray-600 text-sm">{service.pricing.description}</p>
                  </div>

                  <Button
                    className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Benefits and scenarios */}
                <div className={`mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Benefits */}
                  <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-navy-900 mb-4">
                      Business Benefits:
                    </h4>
                    <div className="space-y-3">
                      {service.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target scenarios */}
                  <div className="bg-navy-900 rounded-xl p-6 text-white">
                    <h4 className="text-lg font-semibold mb-4">
                      Ideal For:
                    </h4>
                    <div className="space-y-2">
                      {service.targetScenarios.slice(0, 3).map((scenario, scenarioIndex) => (
                        <div key={scenarioIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-200 text-sm">{scenario}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-900 to-teal-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Enterprise Solution?
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Our enterprise architects can design a tailored modernization strategy
              specific to your legacy systems, compliance requirements, and business objectives.
            </p>
            <Button
              size="lg"
              className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Schedule Enterprise Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}