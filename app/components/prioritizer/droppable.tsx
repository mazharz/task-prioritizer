import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id: string;
};

const Droppable = ({ children, id }: Props) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={
        "w-full h-full transition-colors" + (isOver ? " bg-gray-600" : "")
      }
    >
      <div>{children}</div>
    </div>
  );
};

export { Droppable };
