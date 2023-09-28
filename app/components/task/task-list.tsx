import { useTaskState } from "../../state/task";

const TaskList = () => {
  const { tasks } = useTaskState();

  return (
    <div>
      <ul className="list-disc ml-5 mt-2">
        {tasks.map((t) => (
          <li key={t.id} className="my-1">
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TaskList };
