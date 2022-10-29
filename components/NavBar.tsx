import Link from 'next/link';
import { Fragment } from 'react';

export default function NavBar() {
  return (
    <Fragment>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <Link href="/shop">Shop</Link>
        <Link href="/sign-in">SIGN IN</Link>
      </div>
    </Fragment>
  );
}
