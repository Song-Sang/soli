import { create } from 'zustand';

interface SlideStore {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export const useSlideStore = create<SlideStore>((set) => ({
  currentSlide: 0,
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
}));
