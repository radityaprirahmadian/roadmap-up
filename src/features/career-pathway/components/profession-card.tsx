import React from 'react';
import { CareerName } from '../types/career';

interface ProfessionCardProps {
  name: CareerName;
  borderRadius: string;
  onClick: (name: CareerName) => void;
}

export const ProfessionCard: React.FC<ProfessionCardProps> = ({ name, borderRadius, onClick }) => {
  return (
    <button
      className="profession-card group flex items-center justify-center text-center p-xl bg-surface-container-low border border-primary/10 cursor-pointer hover:border-primary/40 transition-all-custom active:scale-95 gap-sm"
      style={{ borderRadius }}
      onClick={() => onClick(name)}
    >

      <span className="text-headline-md text-on-surface">{name === 'Pengusaha/CEO' ? 'Pengusaha' : name}</span>
    </button>
  );
};
