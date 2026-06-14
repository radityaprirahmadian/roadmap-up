'use client';

import React, { useState } from 'react';
import { useCareerPathway } from '../hooks/use-career-pathway';
import { CareerSelectionView } from './career-selection-view';
import { CareerResultsView } from './career-results-view';
import { CodingModal } from './coding-modal';
import { QrCodeModal } from './qrcode-modal';
import { PromoModal } from './promo-modal';

export const CareerPathwayPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    filteredCareers,
    selectedCareer,
    selectedCodingSkill,
    currentCareerData,
    isLoading,
    isModalOpen,
    handleSelectCareer,
    handleReset,
    handleOpenModal,
    handleCloseModal,
  } = useCareerPathway();

  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  return (
    <>
      {/* Top App Bar */}
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

      <main className="px-container-padding space-y-xl w-full md:max-w-11/12 lg:max-w-[800px] mx-auto">
        {!selectedCareer ? (
          <CareerSelectionView
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            filteredCareers={filteredCareers}
            onSelectCareer={handleSelectCareer}
          />
        ) : currentCareerData ? (
          <CareerResultsView
            careerName={selectedCareer}
            careerData={currentCareerData}
            onBack={handleReset}
            onOpenModal={handleOpenModal}
          />
        ) : null}
      </main>

      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 bg-primary z-[60] flex flex-col items-center justify-center text-background px-container-padding text-center transition-opacity duration-300 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        id="loading-overlay"
      >
        <div className="loading-spinner mb-xl"></div>
        <h2 className="text-headline-md mb-sm">Designing the Future</h2>
        <p className="text-body-md opacity-80">Analyzing career milestones and skill logic...</p>
      </div>

      {/* Coding Modal */}
      <CodingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        codingData={selectedCodingSkill}
      />

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
    </>
  );
};

