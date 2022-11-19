import Link from 'next/link';
import { Fragment } from 'react';
import NavBar from './NavBar';
import { ReactNode } from 'react';

type AppProps = {
  children?: ReactNode;
};

export default function Layout({ children }: AppProps) {
  return (
    <div className="px-[40px] py-[20px] m-0">
      <NavBar />
      <div className="Content">{children}</div>
    </div>
  );
}
