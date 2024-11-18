import { create } from 'zustand';

interface HomeStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const homeStore = create<HomeStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),
}));
