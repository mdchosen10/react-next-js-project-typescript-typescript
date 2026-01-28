import CaseStudyCard from '@/components/enterprise/CaseStudyCard';
import { enterpriseCaseStudies } from '@/data/enterprise/case-studies';

export const metadata = {
  title: 'Enterprise Case Studies | Sinan AI',
  description: 'See how Fortune 500 companies modernized legacy systems post-acquisition. Real outcomes from billion-dollar enterprise transformations.',
};

export default function CaseStudiesPage() {
  return (
    <div className="py-24">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Enterprise Transformation Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real outcomes from Fortune 500 companies that modernized legacy systems post-acquisition.
            See how we helped navigate complex integration challenges and deliver measurable results.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:gap-12">
          {enterpriseCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </div>
  );
}