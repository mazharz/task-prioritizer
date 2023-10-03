import { ReactNode, createContext, useContext, useState } from "react";
import { Mapping } from "../type/mapping";

type MappingContext = {
  mappings: Mapping[];
  mapTask: (task: string, category: string) => void;
  unmapTask: (task: string, category: string) => void;
  removeTaskMapping: (task: string) => void;
  removeCategoryMapping: (task: string) => void;
};

const MappingContext = createContext<MappingContext>({
  mappings: [],
  mapTask: () => { },
  unmapTask: () => { },
  removeTaskMapping: () => { },
  removeCategoryMapping: () => { },
});

type Props = {
  children: ReactNode;
};

export const MappingProvider = ({ children }: Props) => {
  const [mappings, setMappings] = useState<Mapping[]>([]);

  const mapTask = (task: string, category: string) => {
    const alreadyExists = mappings.find(
      (m) => m.task === task && m.category === category
    );
    if (alreadyExists) return;

    setMappings((state) => [...state, { task, category }]);
  };

  const unmapTask = (task: string, category: string) => {
    const filtered = mappings.filter(
      (m) => m.task !== task || m.category !== category
    );
    setMappings(filtered);
  };

  const removeTaskMapping = (task: string) => {
    const filtered = mappings.filter((m) => m.task !== task);
    setMappings(filtered);
  };

  const removeCategoryMapping = (category: string) => {
    const filtered = mappings.filter((m) => m.category !== category);
    setMappings(filtered);
  };

  return (
    <MappingContext.Provider
      value={{
        mappings,
        mapTask,
        unmapTask,
        removeTaskMapping,
        removeCategoryMapping,
      }}
    >
      {children}
    </MappingContext.Provider>
  );
};

export const useMappingState = () => {
  return useContext(MappingContext);
};
