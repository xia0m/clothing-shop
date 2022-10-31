type AppProps = {
  label: string;
  value?: string;
  type: string;
  required: boolean;
  name: string;
};

export default function FormInput({ label, ...otherProps }: AppProps) {
  return (
    <div className="relative mx-[45px] my-0">
      <input
        className="bg-none bg-white text-sub-color text-[18px] py-[10px] pr-[10px] pl-[5px] block w-full rounded-none border-b border-solid border-sub-color my-[25px] mx-0 focus:outline-0 peer"
        {...otherProps}
      />
      {label && (
        <label
          className={`${
            otherProps?.value?.length
              ? 'peer-focus:top-[-14px] peer-focus:text-[12px] peer-focus:text-main-color'
              : ''
          } text-sub-color text-[16px] absolute pointer-events-none left-[5px] top-[10px] font-normal duration  -300 transition-all `}
        >
          {label}
        </label>
      )}
    </div>
  );
}
