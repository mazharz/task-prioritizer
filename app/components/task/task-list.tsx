import { useTaskState } from "../../state/task";
import { Draggable } from "./draggable";
import { Task } from "./task";

const TaskList = () => {
  const { tasks } = useTaskState();

  return (
    <div>
      <ul className="mt-2">
        {tasks.map((t) => (
          <Draggable key={t.id} id={"t:" + t.id}>
            <Task task={t} />
          </Draggable>
        ))}
      </ul>
    </div>
  );
};

export { TaskList };
