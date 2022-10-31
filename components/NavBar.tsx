import Link from 'next/link';
import { Fragment } from 'react';

export default function NavBar() {
  return (
    <Fragment>
      <div className="h-[70px] w-full flex justify-between mb-[25px]">
        <Link href="/" className="h-full w-[70px] p-[25px]">
          Logo
        </Link>
        <div className="w-1/2 h-full flex items-center justify-end">
          <Link
            className="px-[10px] py-[15px] cursor-pointer uppercase"
            href="/shop"
          >
            Shop
          </Link>
          <Link
            className="px-[10px] py-[15px] cursor-pointer uppercase"
            href="/sign-in"
          >
            Sign In
          </Link>
        </div>
      </div>
    </Fragment>
  );
}