import React from 'react';

export const BottomNavBar = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-lg px-6 pb-8 pt-4 flex justify-between items-center border-t border-surface-container shadow-2xl">
      <div className="flex flex-col items-center justify-center text-on-surface-variant gap-1 cursor-pointer hover:text-primary transition-colors">
        <span className="material-symbols-outlined">explore</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Discover</span>
      </div>
      <div className="flex flex-col items-center justify-center text-primary bg-primary-fixed/50 px-5 py-2 rounded-2xl gap-1">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Learning</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant gap-1 cursor-pointer hover:text-primary transition-colors">
        <span className="material-symbols-outlined">query_stats</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Progress</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant gap-1 cursor-pointer hover:text-primary transition-colors">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">Profile</span>
      </div>
    </nav>
  );
};
