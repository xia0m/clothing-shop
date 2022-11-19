import create from 'zustand';

export const useCartStore = create<{
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
}>((set) => ({
  isCartOpen: false,
  setIsCartOpen: (value) => set({ isCartOpen: value }),
}));
