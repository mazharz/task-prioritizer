import { ReactNode } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useMappingState } from "../state/mapping";

type Props = {
  children: ReactNode;
};

const DndProvider = ({ children }: Props) => {
  const { mapTask } = useMappingState();

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over) {
      mapTask(String(event.active.id), String(event.over.id));
    }
  };

  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};

export { DndProvider };
