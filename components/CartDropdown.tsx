import { useRouter } from 'next/router';
import React from 'react';
import { useCartStore } from '../store/cartStore';
import Button from './Button';
import CartItem from './CartItem';

export default function CartDropdown() {
  const router = useRouter();
  const cartItems = useCartStore((store) => store.cartItems);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/checkout');
  };
  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col p-[20px] border border-[black] border-solid bg-white top-[90px] right-[40px] z-[5]">
      <div className="h-[240px] flex flex-col overflow-scroll">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <Button className="mt-auto px-0" onClick={handleClick}>
        Checkout
      </Button>
    </div>
  );
}
