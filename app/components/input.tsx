import { Dispatch, HTMLInputTypeAttribute, SetStateAction } from "react";

type Props = {
  name: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
};

const Input = ({ setValue, className = "", ...props }: Props) => {
  return (
    <input
      {...props}
      onChange={(e) => setValue(e.target.value)}
      className={`${className} py-2 px-3 border border-gray-300 rounded-lg outline-none`}
    />
  );
};

export { Input };
