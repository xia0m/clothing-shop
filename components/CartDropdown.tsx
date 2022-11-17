import Button from './Button';

export default function CartDropdown() {
  return (
    <div className="absolute w-[240px] h-[340px] flex flex-col p-[20px] border border-[black] border-solid bg-white top-[90px] right-[40px] z-[5]">
      <div className="h-[240px] flex flex-col overflow-scroll" />
      <Button className="mt-auto px-0">Go To Checkout</Button>
    </div>
  );
}
