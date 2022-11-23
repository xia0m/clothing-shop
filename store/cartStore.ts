import create from 'zustand';

export interface ICartItem {
  id: number;
  quantity: number;
  name: string;
  price: string;
  imageUrl: string;
}

export const useCartStore = create<{
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
  cartItems: ICartItem[];
  addItemToCart: (product: ICartItem) => void;
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
        : [...state.cartItems, { ...product, quantity: 1 }];
      return { ...state, cartItems: newCartItems };
    }),
}));
