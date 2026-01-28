import EnterpriseHero from '@/components/enterprise/EnterpriseHero';
import Capabilities from '@/components/enterprise/Capabilities';
import HowItWorks from '@/components/enterprise/HowItWorks';
import UseCasesPreview from '@/components/enterprise/UseCasesPreview';
import SecurityCompliance from '@/components/enterprise/SecurityCompliance';
import Integrations from '@/components/enterprise/Integrations';
import LeadCaptureForm from '@/components/enterprise/LeadCaptureForm';

export const metadata = {
  title: 'Enterprise Legacy System Modernization | GoBananas Platform',
  description: 'AI-powered development platform delivering systematic legacy modernization, codebase extension, and technical debt reduction. Transform legacy systems into modern powerhouses.',
};

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />
      <Capabilities />
      <HowItWorks />
      <UseCasesPreview />
      <SecurityCompliance />
      <Integrations />
      <LeadCaptureForm />
    </>
  );
}