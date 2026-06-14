import React from 'react';
import { CurriculumPhase } from '../constants/curriculum-data';

interface TimelinePhaseProps {
  phase: CurriculumPhase;
  index: number;
  addToRefs: (el: HTMLElement | null) => void;
}

export const TimelinePhase: React.FC<TimelinePhaseProps> = ({ phase, index, addToRefs }) => {
  const isReverse = index % 2 !== 0;

  return (
    <div className={`relative mb-24 flex flex-col md:flex-row ${isReverse ? 'md:flex-row-reverse' : ''} items-start md:items-center`}>
      <div 
        ref={addToRefs}
        className={`absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-2xl bg-${phase.theme} text-on-${phase.theme} z-10 border-4 border-surface stepping-stone opacity-0 translate-y-12 transition-all duration-1000 ease-out`}
      >
        <span className="material-symbols-outlined text-3xl">{phase.icon}</span>
      </div>
      
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isReverse ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
        <h3 className={`serif-header text-2xl font-bold text-${phase.theme === 'secondary' ? 'secondary' : phase.theme === 'secondary-container' ? 'on-secondary-container' : phase.theme} mb-2`}>
          {phase.title}
        </h3>
        <p className="text-on-surface-variant text-sm font-medium mb-4">{phase.description}</p>
      </div>

      <div className={`ml-16 ${isReverse ? 'md:ml-0 md:pr-16' : 'md:ml-16 md:w-1/2'}`}>
        <div 
          ref={addToRefs}
          className={`glass-card p-8 rounded-2xl space-y-4 opacity-0 translate-y-12 transition-all duration-1000 ease-out ${index > 0 ? `border-dashed border-2 border-${phase.theme}/20` : ''}`}
        >
          {phase.items.map((item, i) => (
            <div key={i} className={`flex items-center gap-4 ${item.active === false ? 'opacity-70' : ''}`}>
              {item.icon ? (
                <span className={`material-symbols-outlined text-${phase.theme} text-xl`}>{item.icon}</span>
              ) : (
                <span className={`w-2.5 h-2.5 rounded-full ${item.active === false ? 'bg-outline-variant' : `bg-primary ring-4 ring-primary-fixed`}`}></span>
              )}
              <span className={`text-body-md ${item.active === false ? 'text-on-surface-variant' : 'font-semibold text-on-surface'}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
