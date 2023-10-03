import { Task as TTask } from "@/app/type/task";

type Props = {
  task: TTask;
  clickHandler?: () => void;
  isDisabled?: boolean;
};

const Task = ({ task, clickHandler, isDisabled = false }: Props) => {
  return (
    <li
      className={
        "my-1 py-1 px-4 rounded-md select-none w-fit list-none transition-colors border " +
        (isDisabled
          ? " bg-gray-800 border-gray-700 text-gray-400 cursor-not-allowed"
          : " bg-gray-700 border-transparent hover:bg-gray-600 cursor-pointer")
      }
      onClick={clickHandler}
      title={
        isDisabled ? "This task has appeared in all categories." : undefined
      }
    >
      {task.title}
    </li>
  );
};

export { Task };
