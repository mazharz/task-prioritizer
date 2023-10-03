import { ReactNode } from "react";
import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useMappingState } from "../state/mapping";

type Props = {
  children: ReactNode;
};

const DndProvider = ({ children }: Props) => {
  const { mapTask } = useMappingState();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over) {
      mapTask(String(event.active.id), String(event.over.id));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      {children}
    </DndContext>
  );
};

export { DndProvider };
