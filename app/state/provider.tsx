import { ReactNode } from "react";
import { TaskProvider } from "./task";
import { CategoryProvider } from "./category";
import { MappingProvider } from "./mapping";

type Props = {
  children: ReactNode;
};

const StateProvider = ({ children }: Props) => {
  return (
    <MappingProvider>
      <TaskProvider>
        <CategoryProvider>{children}</CategoryProvider>
      </TaskProvider>
    </MappingProvider>
  );
};

export { StateProvider };
