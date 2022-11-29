import Image from 'next/image';
import { ICartItem } from '../store/cartStore';

export default function CheckoutItem({ cartItem }: { cartItem: ICartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="w-full flex min-h-[100px] border-b border-b-[darkgrey] border-solid py-[15px] px-0 text-[20px] items-center">
      <div className="w-[23%] pr-[15px]">
        <Image src={imageUrl} alt="Product Image" width={32} height={32} />
      </div>
      <span className="w-[23%]"> {name} </span>
      <span className="w-[23%] flex">
        <div className="cursor-pointer">&#10094;</div>
        <span className="my-0 mx-[10px]">{quantity}</span>
        <div className="cursor-pointer">&#10095;</div>
      </span>
      <span className="w-[23%]"> {price}</span>
      <span>
        <div>&#10005;</div>
      </span>
    </div>
  );
}
