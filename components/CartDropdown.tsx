import Button from './Button';

export default function CartDropdown() {
  return (
    <div className="w-[45px] h-[45px] relative flex justify-center cursor-pointer items-center">
      <div>Cart Item</div>
      <Button>Go To Checkout</Button>
    </div>
  );
}
