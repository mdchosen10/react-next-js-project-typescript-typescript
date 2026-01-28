import { Metadata } from 'next';
import UseCasesClient from '@/components/use-cases/UseCasesClient';

export const metadata: Metadata = {
  title: 'Enterprise Legacy Modernization Use Cases | GoBananas',
  description:
    'Explore detailed case studies of enterprise legacy system modernization across Financial Services, Healthcare, Manufacturing, Transportation, Government, and Energy industries. Zero-downtime migrations with measurable ROI.',
  keywords: 'legacy modernization, COBOL migration, ERP migration, technical debt reduction, enterprise transformation, zero downtime migration, FedRAMP compliance, HIPAA compliance',
};

export default function UseCasesPage() {
  return <UseCasesClient />;
}
