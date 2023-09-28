import { ReactNode } from "react";
import { TaskProvider } from "./task";
import { CategoryProvider } from "./category";

type Props = {
  children: ReactNode;
};

const StateProvider = ({ children }: Props) => {
  return (
    <TaskProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </TaskProvider>
  );
};

export { StateProvider };
