import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/components/enterprise/CaseStudyDetail';
import { enterpriseCaseStudies } from '@/data/enterprise/case-studies';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return enterpriseCaseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const caseStudy = enterpriseCaseStudies.find(cs => cs.slug === params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | Sinan AI',
    };
  }

  return {
    title: `${caseStudy.title} | Enterprise Case Study | Sinan AI`,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = enterpriseCaseStudies.find(cs => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}