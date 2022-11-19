import Image from 'next/image';
import { useCartStore } from '../store/cartStore';

export default function CartIcon() {
  const isCartOpen = useCartStore((store) => store.isCartOpen);
  const setIsCartOpen = useCartStore((store) => store.setIsCartOpen);

  console.log('is cart open is', isCartOpen);

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div
      className="w-[45px] h-[45px] relative flex justify-center cursor-pointer items-center"
      onClick={toggleCartDropdown}
    >
      <Image src="/shopping-bag.svg" alt="logo" height={24} width={24} />
      <span className="absolute text-[10px] font-bold bottom-[12px]">0</span>
    </div>
  );
}
