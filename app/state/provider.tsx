import { ReactNode } from "react";
import { TaskProvider } from "./task";
import { CategoryProvider } from "./category";
import { MappingProvider } from "./mapping";

type Props = {
  children: ReactNode;
};

const StateProvider = ({ children }: Props) => {
  return (
    <TaskProvider>
      <CategoryProvider>
        <MappingProvider>{children}</MappingProvider>
      </CategoryProvider>
    </TaskProvider>
  );
};

export { StateProvider };
