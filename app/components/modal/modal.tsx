import { Close } from "@/app/assets/close";
import { roboto } from "@/app/helper/font";
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title: string;
};

const Modal = ({ isOpen, setIsOpen, children, title }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <dialog
      ref={ref}
      className={`${roboto.className} block p-8 rounded-md w-[32rem] text-gray-300 bg-gray-800 backdrop:bg-gray-950 backdrop:bg-opacity-80 open:opacity-100 opacity-0 transition-opacity duration-300`}
      onClick={closeHandler}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <header className="flex justify-between items-center pb-2 mb-4 border-b border-gray-700">
          <div className="text-xl font-medium">{title}</div>
          <button
            onClick={closeHandler}
            className="font-semibold outline-none hover:text-red-500 transition-colors w-4 h-4"
          >
            <Close color="currentColor" />
          </button>
        </header>
        {children}
      </div>
    </dialog>
  );
};

export { Modal };
