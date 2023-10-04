import { useMappingState } from "@/app/state/mapping";
import { useTaskState } from "../../state/task";
import { DraggableTask } from "./draggable-task";

const TaskList = () => {
  const { tasks } = useTaskState();
  const { mappings } = useMappingState();

  const rankedTasks = [...tasks].sort((a, b) => {
    const aRank = mappings.filter((m) => m.task === a.id).length;
    const bRank = mappings.filter((m) => m.task === b.id).length;
    return bRank - aRank;
  });

  return (
    <div>
      <ul className="mt-2">
        {rankedTasks.map((task) => (
          <DraggableTask key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export { TaskList };
