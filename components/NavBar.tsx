import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <Fragment>
      <div className="h-[70px] w-full flex justify-between mb-[25px]">
        <Link href="/" className="h-full w-[70px] p-[25px]">
          <Image src="/crown.svg" alt="logo" height={50} width={50} />
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
            href="/auth"
          >
            Sign In
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
