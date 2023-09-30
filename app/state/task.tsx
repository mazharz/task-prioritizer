import { ReactNode, createContext, useContext, useState } from "react";
import { Task } from "../type/task";
import { StringHelper } from "../helper/string";

type TaskContext = {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (title: string) => void;
};

const TaskContext = createContext<TaskContext>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

type Props = {
  children: ReactNode;
};

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const alreadyExists = tasks.find(
      (t) => t.title.toLowerCase() === title.toLowerCase()
    );
    if (alreadyExists) return;

    const ids = tasks.map((t) => t.id);
    const id = StringHelper.getUniqueId(ids, title);

    setTasks((state) => [...state, { id, title }]);
  };

  const removeTask = (title: string) => {
    const filtered = tasks.filter(
      (t) => t.title.toLowerCase() !== title.toLowerCase()
    );
    setTasks(filtered);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskState = () => {
  return useContext(TaskContext);
};
