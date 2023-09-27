import { ReactNode, createContext, useContext, useState } from "react";
import { Task } from "../type/task";

type TaskContext = {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
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

  const addTask = (task: Task) => {
    setTasks((state) => [...state, task]);
  };
  const removeTask = (task: Task) => {
    const filtered = tasks.filter(
      (t) => t.title.toLowerCase() !== task.title.toLowerCase()
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
