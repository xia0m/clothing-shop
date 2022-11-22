import create from 'zustand';

export interface CartItem {
  id: number;
  quantity: number;
  name: string;
  price: string;
  imageUrl: string;
}

export const useCartStore = create<{
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  cartItems: CartItem[];
  addItemToCart: (product: CartItem) => void;
}>((set) => ({
  isCartOpen: false,
  setIsCartOpen: (value) => set({ isCartOpen: value }),
  cartItems: [],
  addItemToCart: (product) =>
    set((state) => {
      const newCartItems = state.cartItems.find(
        (item) => item.id === product.id
      )
        ? state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cartItems, product];
      return { ...state, cartItems: newCartItems };
    }),
}));
