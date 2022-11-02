type AppProps = {
  label: string;
  value?: string;
  type: string;
  required: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormInput({ label, ...otherProps }: AppProps) {
  return (
    <div className="relative my-[45px] mx-0">
      <input
        className={`bg-none bg-white text-sub-color text-[18px] py-[10px] pr-[10px] pl-[5px] block w-full rounded-none border-b border-solid border-sub-color my-[25px] mx-0 focus:outline-0 peer ${
          otherProps.type === 'password' ? 'tracking-[.3em]' : ''
        }`}
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps?.value?.length
              ? 'top-[-14px] text-[12px] text-main-color'
              : ''
          } text-sub-color text-[16px] absolute pointer-events-none left-[5px] top-[10px] font-normal duration-300 transition-all peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-main-color`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
