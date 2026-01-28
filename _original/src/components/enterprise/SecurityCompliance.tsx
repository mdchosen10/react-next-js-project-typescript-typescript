'use client';

import { Button } from '@/components/ui/button';
import { Shield, Lock, Globe, Key, Eye, FileText, ArrowRight } from 'lucide-react';

export default function SecurityCompliance() {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'SOC2 Type II',
      description: 'Comprehensive security controls and annual audits'
    },
    {
      icon: Lock,
      title: 'HIPAA Compliant',
      description: 'Healthcare data protection and privacy standards'
    },
    {
      icon: Globe,
      title: 'Enterprise Data Residency',
      description: 'Your data stays in your preferred geographic region'
    },
    {
      icon: Key,
      title: 'End-to-End Encryption',
      description: 'AES-256 encryption in transit and at rest'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Role-based permissions and multi-factor authentication'
    },
    {
      icon: FileText,
      title: 'Audit Logging',
      description: 'Complete activity tracking and compliance reporting'
    }
  ];

  return (
    <section className="py-24 bg-navy-950">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security infrastructure trusted by Fortune 500 companies.
          </p>
        </div>

        {/* Security features grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-teal-500/20 rounded-lg">
                    <IconComponent className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold"
          >
            View Security Documentation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}