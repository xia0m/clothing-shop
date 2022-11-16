import Image from 'next/image';
import Layout from '../components/Layout';
import ShopContent from '../components/ShopContent';

export default function CartIcon() {
  return (
    <div>
      <Image src="/shopping-bag.svg" alt="logo" height={30} width={30} />
      <span>0</span>
    </div>
  );
}
