import { useCategoryState } from "@/app/state/category";
import { Category } from "@/app/type/category";
import { Droppable } from "./droppable";
import { useMappingState } from "@/app/state/mapping";
import { useTaskState } from "@/app/state/task";
import { Task } from "../task/task";
import { Task as TTask } from "@/app/type/task";
import { Close } from "@/app/assets/close";

type Props = {
  category: Category;
};

const PriorityCategory = ({ category }: Props) => {
  const { removeCategory } = useCategoryState();
  const { mappings, unmapTask } = useMappingState();
  const { tasks } = useTaskState();

  const assignedTaskIds = mappings
    .filter((m) => m.category === category.id)
    .map((m) => m.task);
  const assignedTasks = tasks.filter((t) => assignedTaskIds.includes(t.id));

  const removeTaskFromCategory = (task: TTask) => {
    unmapTask(task.id, category.id);
  };

  return (
    <div
      className="relative rounded-md flex overflow-hidden"
      style={{
        border: `2px solid ${category.color}`,
      }}
    >
      <Droppable id={category.id}>
        <div className="mt-10 mx-4">
          <div
            className="absolute top-0 left-0 text-gray-800 pl-2 pr-3 rounded-br-md flex items-center gap-2"
            style={{ backgroundColor: category.color }}
          >
            <span
              className="block cursor-pointer select-none w-4 h-4 text-gray-800 hover:text-red-600"
              onClick={() => removeCategory(category.id)}
            >
              <Close color="currentColor" />
            </span>
            <div>{category.title}</div>
          </div>
          <div>
            {assignedTasks.map((t) => (
              <Task
                task={t}
                key={t.id}
                clickHandler={() => removeTaskFromCategory(t)}
              />
            ))}
          </div>
        </div>
      </Droppable>
    </div>
  );
};

export { PriorityCategory };
