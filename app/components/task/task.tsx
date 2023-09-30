import { Task as TTask } from "@/app/type/task";

type Props = {
  task: TTask;
  clickHandler?: () => void;
};

const Task = ({ task, clickHandler }: Props) => {
  return (
    <li
      className="my-1 py-1 px-4 rounded-md bg-gray-700 hover:bg-gray-600 select-none w-fit list-none cursor-pointer transition-colors"
      onClick={clickHandler}
    >
      {task.title}
    </li>
  );
};

export { Task };
