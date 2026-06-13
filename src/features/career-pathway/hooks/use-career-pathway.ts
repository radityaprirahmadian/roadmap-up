import { useCareerStore } from '../stores/career-store';
import { CareerName } from '../types/career';
import { CAREER_DATA } from '@/constants/career-data';

export const useCareerPathway = () => {
  const store = useCareerStore();

  const handleSelectCareer = (career: CareerName) => {
    store.setIsLoading(true);
    // Simulate loading/analysis delay
    setTimeout(() => {
      store.setSelectedCareer(career);
      store.setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleReset = () => {
    store.reset();
    window.scrollTo(0, 0);
  };

  const handleOpenModal = (codingSkill: { skill: string; desc: string }) => {
    store.setSelectedCodingSkill(codingSkill);
    store.setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    store.setIsModalOpen(false);
    setTimeout(() => store.setSelectedCodingSkill(null), 300);
  };

  const getFilteredCareers = () => {
    const careers = Object.keys(CAREER_DATA) as CareerName[];
    if (!store.searchQuery) return careers;
    return careers.filter(c => c.toLowerCase().includes(store.searchQuery.toLowerCase()));
  };

  const getCurrentCareerData = () => {
    if (!store.selectedCareer) return null;
    return CAREER_DATA[store.selectedCareer];
  };

  return {
    ...store,
    filteredCareers: getFilteredCareers(),
    currentCareerData: getCurrentCareerData(),
    handleSelectCareer,
    handleReset,
    handleOpenModal,
    handleCloseModal,
  };
};
