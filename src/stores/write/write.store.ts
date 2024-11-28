import { create } from 'zustand';

interface WriteStore {
  iconId: number;
  setIconId: (iconId: number) => void;
}

export const writeStore = create<WriteStore>((set) => ({
  iconId: 0,
  setIconId: (iconId) => set({ iconId }),
}));
