import { useTaskState } from "../state/task";

const TaskList = () => {
  const { tasks } = useTaskState();

  return (
    <div>
      {tasks.map((t) => (
        <div key={t.title}>{t.title}</div>
      ))}
    </div>
  );
};

export { TaskList };
