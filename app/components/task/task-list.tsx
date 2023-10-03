import { useTaskState } from "../../state/task";
import { DraggableTask } from "./draggable-task";

const TaskList = () => {
  const { tasks } = useTaskState();

  return (
    <div>
      <ul className="mt-2">
        {tasks.map((task) => (
          <DraggableTask key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export { TaskList };
