import Image from 'next/image';
import { CartItem } from '../store/cartStore';

export default function CartItem({ cartItem }: { cartItem: CartItem }) {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div>
      <Image src={imageUrl} alt="logo" height={24} width={24} />
      <div>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
