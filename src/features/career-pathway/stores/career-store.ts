import { create } from 'zustand';
import { CareerName } from '../types/career';

interface CareerState {
  selectedCareer: CareerName | null;
  selectedCodingSkill: { skill: string; desc: string } | null;
  isLoading: boolean;
  isModalOpen: boolean;
  searchQuery: string;
  setSelectedCareer: (career: CareerName | null) => void;
  setSelectedCodingSkill: (skill: { skill: string; desc: string } | null) => void;
  setIsLoading: (loading: boolean) => void;
  setIsModalOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  reset: () => void;
}

export const useCareerStore = create<CareerState>((set) => ({
  selectedCareer: null,
  selectedCodingSkill: null,
  isLoading: false,
  isModalOpen: false,
  searchQuery: '',
  setSelectedCareer: (career) => set({ selectedCareer: career }),
  setSelectedCodingSkill: (skill) => set({ selectedCodingSkill: skill }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setIsModalOpen: (open) => set({ isModalOpen: open }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  reset: () => set({ selectedCareer: null, selectedCodingSkill: null, isLoading: false, isModalOpen: false, searchQuery: '' }),
}));
