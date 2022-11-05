import { ReactNode } from 'react';

type AppProps = {
  children: ReactNode;
  buttonType?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
};

export default function Button({
  children,
  buttonType,
  className,
  ...otherProps
}: AppProps) {
  const buttonStyle =
    buttonType === 'google'
      ? 'bg-[#4285f4] text-white hover:bg-[#357ae8] hover:border-none'
      : buttonType === 'inverted'
      ? 'bg-white text-black border border-black border-solid hover:bg-black hover:text-white hover:border-none'
      : 'bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black';
  return (
    <button
      className={`${buttonStyle} w-auto min-w-[165px] h-[50px] tracking-[0.5px] leading-[50px] py-0 px-[35px] text-[15px]   uppercase font-medium cursor-pointer flex justify-center ${className} `}
      {...otherProps}
    >
      {children}
    </button>
  );
}
