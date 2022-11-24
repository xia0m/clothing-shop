import Image from 'next/image';
import { ICartItem } from '../store/cartStore';

export default function CartItem({ cartItem }: { cartItem: ICartItem }) {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="w-full flex h-[80px] mb-[15px]">
      <Image
        src={imageUrl}
        alt="logo"
        height={24}
        width={24}
        className={'w-[30%]'}
      />
      <div className="w-[70%] flex flex-col items-start justify-center py-[10px] px-[20px]">
        <span className="text-[16px]">{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
