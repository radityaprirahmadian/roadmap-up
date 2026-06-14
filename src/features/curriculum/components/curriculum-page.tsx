'use client';

import React, { useState, useEffect } from 'react';
import { TimelinePhase } from './timeline-phase';
import { BottomNavBar } from './bottom-nav-bar';
import { CURRICULUM_DATA } from '../constants/curriculum-data';
import { useScrollAnimation } from '../hooks/use-scroll-animation';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { QrCodeModal } from '@/features/career-pathway/components/qrcode-modal';
import { PromoModal } from '@/features/career-pathway/components/promo-modal';

export const CurriculumPage = () => {
  const { addToRefs } = useScrollAnimation();
    const [isQrModalOpen, setIsQrModalOpen] = useState(false);
    const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPromoModalOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-surface text-on-surface antialiased pb-32 min-h-screen">
      {/* TopAppBar */}
      <header className="bg-background flex justify-between items-center px-container-padding py-md w-full sticky top-0 z-40">
        {/* Left Promo Button */}
        <button
          onClick={() => setIsPromoModalOpen(true)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:bg-outline-variant/10 text-primary border border-outline-variant/20 shadow-sm cursor-pointer transition-all active:scale-95"
          title="Daftar Promo Kelas Coding"
        >
          <span className="material-symbols-outlined text-2xl">local_offer</span>
        </button>

        <div className="flex flex-col items-center gap-xs text-center flex-1">
          <span className="text-primary text-label-sm uppercase tracking-[0.2em] opacity-70">
            Future Skills Roadmap
          </span>
          <h1 className="text-display-lg md:text-headline-lg text-primary italic">
            UP Coding by UP SLC
          </h1>
          <div className="w-12 h-[1px] bg-primary/30 mt-1"></div>
        </div>

        {/* Right QR Code Icon */}
        <button
          onClick={() => setIsQrModalOpen(true)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface hover:bg-outline-variant/10 text-primary border border-outline-variant/20 shadow-sm cursor-pointer transition-all active:scale-95"
          title="Show QR Code"
        >
          <span className="material-symbols-outlined text-2xl">qr_code_2</span>
        </button>
      </header>


      <main className="max-w-4xl mx-auto px-container-padding mt-12 relative overflow-hidden">
        {/* Playful Background Elements */}
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/10 organic-blob blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-secondary/10 organic-blob blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary-fixed/30 organic-blob blur-3xl -z-10"></div>

        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-label-md mb-6 shadow-sm">
            <span className="material-symbols-outlined text-sm">auto_stories</span>
            Learning Adventure
          </span>
          <h2 className="serif-header text-4xl md:text-6xl font-bold text-on-surface mb-6 leading-tight">
            Explore Your <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-on-surface-variant text-body-lg  mx-auto leading-relaxed mb-10">
            A handcrafted journey from logical foundations to professional development, designed to nurture your technical wisdom.
          </p>

          {/* Autoplaying Video */}
          <div className="w-5/12 mx-auto rounded-3xl overflow-hidden shadow-xl border border-outline-variant/20 relative aspect-[9/16] bg-surface-variant">
            <video 
              src="/WhatsApp%20Video%202026-06-14%20at%209.42.23%20AM.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-left">
              <p className="text-white font-medium flex items-center gap-2 text-lg">
                <span className="material-symbols-outlined">play_circle</span>
                Last Year Class
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Container */}
        <div className="relative px-2">
          {/* Vertical Trail (Enhanced Timeline) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1.5 trail-path -translate-x-1/2 opacity-30"></div>

          {CURRICULUM_DATA.map((phase, index) => (
            <TimelinePhase 
              key={phase.id} 
              phase={phase} 
              index={index} 
              addToRefs={addToRefs} 
            />
          ))}
        </div>
      </main>


            {/* QR Code Modal */}
            <QrCodeModal
              isOpen={isQrModalOpen}
              onClose={() => setIsQrModalOpen(false)}
            />
      
            {/* Promo Modal */}
            <PromoModal
              isOpen={isPromoModalOpen}
              onClose={() => setIsPromoModalOpen(false)}
            />
    </div>
  );
};
