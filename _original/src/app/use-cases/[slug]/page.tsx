import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import UseCaseDetail from '@/components/use-cases/UseCaseDetail';
import { useCases } from '@/data/use-cases';

interface UseCasePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const useCase = useCases.find((uc) => uc.slug === params.slug);

  if (!useCase) {
    return {
      title: 'Use Case Not Found',
    };
  }

  return {
    title: `${useCase.title} | GoBananas Use Cases`,
    description: useCase.description,
    keywords: `${useCase.industry}, legacy modernization, ${useCase.migration.from.join(', ')}, ${useCase.migration.to.join(', ')}`,
    openGraph: {
      title: useCase.title,
      description: useCase.description,
      type: 'article',
    },
  };
}

export default function UseCasePage({ params }: UseCasePageProps) {
  const useCase = useCases.find((uc) => uc.slug === params.slug);

  if (!useCase) {
    notFound();
  }

  return <UseCaseDetail useCase={useCase} />;
}
