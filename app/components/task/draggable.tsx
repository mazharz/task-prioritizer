import { useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

type Props = {
  id: string;
  children: ReactNode;
};

const Draggable = ({ children, id }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="relative z-50 w-fit"
    >
      <div>{children}</div>
    </div>
  );
};

export { Draggable };
