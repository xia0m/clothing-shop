import Image from 'next/image';
import { ICartItem } from '../store/cartStore';

export default function CartItem({ cartItem }: { cartItem: ICartItem }) {
  const { imageUrl, price, name, quantity } = cartItem;
  console.log(cartItem);
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
