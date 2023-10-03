import { Task as TTask } from "@/app/type/task";
import { Draggable } from "./draggable";
import { Task } from "./task";
import { useMappingState } from "@/app/state/mapping";
import { useCategoryState } from "@/app/state/category";
import { Close } from "@/app/assets/close";
import { useTaskState } from "@/app/state/task";

type Props = {
  task: TTask;
};

const DraggableTask = ({ task }: Props) => {
  const { removeTask } = useTaskState();
  const { mappings } = useMappingState();
  const { categories } = useCategoryState();

  const categoryIds = categories.map((c) => c.id);
  const mappedCategories = mappings
    .filter((m) => m.task === task.id)
    .map((m) => m.category);
  const categoryHasOccured = categoryIds.map((c) =>
    mappedCategories.includes(c)
  );
  const isDisabled = categoryHasOccured.every((c) => !!c);

  const removeHandler = () => {
    removeTask(task.id);
  };

  return (
    <Draggable id={task.id} isDisabled={isDisabled}>
      <div className="flex items-center group">
        <Task task={task} isDisabled={isDisabled} />
        <div
          className="text-gray-300 h-3 w-3 ml-2 hidden group-hover:block group-active:opacity-0 hover:text-red-500"
          onClick={removeHandler}
        >
          <Close color="currentColor" />
        </div>
      </div>
    </Draggable>
  );
};

export { DraggableTask };
