import { useCartStore } from '../store/cartStore';
import Button from './Button';
import CartItem from './CartItem';

export default function CartDropdown() {
  const cartItems = useCartStore((store) => store.cartItems);
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
      <Button className="mt-auto px-0">Go To Checkout</Button>
    </div>
  );
}
