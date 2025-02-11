import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  imageSrc: string | null;
  currentIndex: number;
  openModal: (index: number) => void;
  closeModal: () => void;
  nextImage: () => void;
  previousImage: () => void;
  reset: () => void;
}

const useModalStore = create<ModalStore>((set, get) => ({
  isOpen: false,
  imageSrc: null,
  currentIndex: 0,
  openModal: (index) => set({ isOpen: true, currentIndex: index }),
  closeModal: () => set({ isOpen: false, imageSrc: null }),
  nextImage: () => {
    const { currentIndex } = get();
    set({ currentIndex: currentIndex + 1 });
  },
  previousImage: () => {
    const { currentIndex } = get();
    set({ currentIndex: currentIndex - 1 });
  },
  reset: () => set({ isOpen: false, imageSrc: null, currentIndex: 0 }),
}));

export default useModalStore;
