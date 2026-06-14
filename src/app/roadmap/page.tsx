import { CareerPathwayPage } from '@/features/career-pathway/components/career-pathway-page';

export default function Home() {
  return (
    <>
      {/* Decorative Background Shapes */}
      <div className="organic-blob bg-primary w-64 h-64 -top-20 -left-20"></div>
      
      <CareerPathwayPage />
    </>
  );
}
