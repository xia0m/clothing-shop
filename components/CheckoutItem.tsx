import Image from 'next/image';
import { ICartItem, useCartStore } from '../store/cartStore';

export default function CheckoutItem({ cartItem }: { cartItem: ICartItem }) {
  const { name, imageUrl, price, quantity, id } = cartItem;
  const removeCartItem = useCartStore((store) => store.removeCartItem);
  const clearCartItem = useCartStore((store) => store.clearCartItem);
  const addItemToCart = useCartStore((store) => store.addItemToCart);
  return (
    <div className="w-full flex min-h-[100px] border-b border-b-[darkgrey] border-solid py-[15px] px-0 text-[20px] items-center">
      <div className="w-[23%] pr-[15px]">
        <img src={imageUrl} alt="Product Image" className="w-full h-full" />
      </div>
      <span className="w-[23%]"> {name} </span>
      <span className="w-[23%] flex">
        <div
          className="cursor-pointer"
          onClick={() => removeCartItem(cartItem)}
        >
          &#10094;
        </div>
        <span className="my-0 mx-[10px]">{quantity}</span>
        <div className="cursor-pointer" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="w-[23%]"> {price}</span>
      <div
        className="pl-[12px] cursor-pointer"
        onClick={() => clearCartItem(id)}
      >
        &#10005;
      </div>
    </div>
  );
}
