type Props = {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
};

const Button = ({ text, type, className }: Props) => {
  return (
    <button
      type={type}
      className={`${className} py-2 px-3 bg-gray-700 text-gray-400 hover:opacity-75 active:opacity-50 transition-all rounded-lg outline-none`}
    >
      {text}
    </button>
  );
};

export { Button };
