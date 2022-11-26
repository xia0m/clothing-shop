import Image from 'next/image';
import { ICartItem } from '../store/cartStore';

export default function CheckoutItem({ cartItem }: { cartItem: ICartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div>
      <div>
        <Image src={imageUrl} alt="Product Image" width={32} height={32} />
      </div>
      <span> {name} </span>
      <span>
        <div>&#10094;</div>
      </span>
      <span>{quantity}</span>
      <span>
        <div>&#10095;</div>
      </span>
      <span> {price}</span>
      <span>
        <div>&#10005;</div>
      </span>
    </div>
  );
}
