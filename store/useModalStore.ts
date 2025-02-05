import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  imageSrc: string | null;
  openModal: (image: string) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  imageSrc: null,
  openModal: (image) => set({ isOpen: true, imageSrc: image }),
  closeModal: () => set({ isOpen: false, imageSrc: null }),
}));

export default useModalStore;
