import Image from 'next/image';

export default function CartIcon() {
  return (
    <div className="w-[45px] h-[45px] relative flex justify-center cursor-pointer items-center">
      <Image src="/shopping-bag.svg" alt="logo" height={24} width={24} />
      <span className="absolute text-[10px] font-bold bottom-[12px]">0</span>
    </div>
  );
}
