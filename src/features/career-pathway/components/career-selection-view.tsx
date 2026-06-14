import React from 'react';
import { ProfessionCard } from './profession-card';
import { CareerName } from '../types/career';

interface CareerSelectionViewProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredCareers: CareerName[];
  onSelectCareer: (career: CareerName) => void;
}

import { CAREER_DATA } from '../../../constants/career-data';

const BORDER_RADIUS_VARIANTS = [
  '40% 60% 70% 30%/40% 50% 60% 50%',
  '60% 40% 30% 70%/50% 60% 40% 50%',
  '50% 50% 40% 60%/60% 40% 60% 40%',
  '40% 60% 50% 50%/50% 30% 70% 50%',
  '70% 30% 50% 50%/30% 70% 50% 50%',
  '30% 70% 70% 30%/50% 50% 50% 50%',
  '50% 50% 30% 70%/70% 30% 50% 50%',
  '60% 40% 60% 40%/40% 60% 40% 60%',
  '40% 60% 40% 60%/60% 40% 60% 40%',
  '55% 45% 65% 35%/45% 55% 35% 65%',
];

const CAREER_BORDER_RADIUS = Object.keys(CAREER_DATA).reduce((acc, career, index) => {
  acc[career as CareerName] = BORDER_RADIUS_VARIANTS[index % BORDER_RADIUS_VARIANTS.length];
  return acc;
}, {} as Record<CareerName, string>);

export const CareerSelectionView: React.FC<CareerSelectionViewProps> = ({
  searchQuery,
  onSearchChange,
  filteredCareers,
  onSelectCareer,
}) => {
  return (
    <section className="space-y-xl" id="screen-selection">
      <div className="space-y-sm pt-md mb-xl">
        <h2 className="text-headline-lg-mobile text-on-background leading-tight text-center">
          Pekerjaan Impian Anak-Anak
        </h2>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
          search
        </span>
        <input
          className="w-full pl-12 pr-4 py-md bg-surface-container rounded-xl border-none focus:ring-2 focus:ring-primary transition-all duration-200 text-body-md"
          placeholder="Cari jalur karier..."
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Profession Grid */}
      <div className="grid grid-cols-2 gap-md" id="profession-grid">
        {filteredCareers.map((career) => (
          <ProfessionCard
            key={career}
            name={career}
            borderRadius={CAREER_BORDER_RADIUS[career]}
            onClick={onSelectCareer}
          />
        ))}
        {filteredCareers.length === 0 && (
          <div className="col-span-2 text-center text-on-surface-variant text-body-md py-lg">
            No pathways found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};
