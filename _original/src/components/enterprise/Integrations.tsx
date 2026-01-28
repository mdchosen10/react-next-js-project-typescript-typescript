'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  SiGithub,
  SiGitlab,
  SiAzuredevops,
  SiJira,
  SiSap,
  SiOracle,
  SiMicrosoft,
  SiSalesforce,
  SiJenkins,
  SiPagerduty
} from 'react-icons/si';
import { Building } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    { name: 'GitHub Enterprise', icon: SiGithub },
    { name: 'GitLab', icon: SiGitlab },
    { name: 'Azure DevOps', icon: SiAzuredevops },
    { name: 'Jira', icon: SiJira },
    { name: 'ServiceNow', icon: Building },
    { name: 'SAP', icon: SiSap },
    { name: 'Oracle', icon: SiOracle },
    { name: 'Microsoft 365', icon: SiMicrosoft },
    { name: 'Salesforce', icon: SiSalesforce },
    { name: 'Jenkins', icon: SiJenkins },
    { name: 'PagerDuty', icon: SiPagerduty }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Integration Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Works seamlessly with your existing tools. No rip-and-replace required.
          </p>
        </div>

        {/* Integrations grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 mb-16">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all duration-200 bg-gray-50 hover:bg-white group"
              >
                <IconComponent className="w-8 h-8 text-gray-600 group-hover:text-teal-600 transition-colors mb-3" />
                <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                  {integration.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Custom integration CTA */}
        <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-2xl p-8 md:p-12 text-center border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
            Need a Custom Integration?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our enterprise team builds custom integrations for your specific workflow requirements.
          </p>
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold"
          >
            Discuss Custom Integration
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}