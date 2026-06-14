import { CurriculumPage } from '@/features/curriculum/components/curriculum-page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curriculum | Coding Class by UP SLC',
};

export default function Page() {
  return <CurriculumPage />;
}
