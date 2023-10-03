import { ReactNode, createContext, useContext, useState } from "react";
import { Task } from "../type/task";
import { StringHelper } from "../helper/string";
import { useMappingState } from "./mapping";

type TaskContext = {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
};

const TaskContext = createContext<TaskContext>({
  tasks: [],
  addTask: () => { },
  removeTask: () => { },
});

type Props = {
  children: ReactNode;
};

export const TaskProvider = ({ children }: Props) => {
  const { removeTaskMapping } = useMappingState();
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

  const removeTask = (id: string) => {
    const filtered = tasks.filter(
      (t) => t.id.toLowerCase() !== id.toLowerCase()
    );
    setTasks(filtered);
    removeTaskMapping(id);
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
