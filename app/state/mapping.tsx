import { ReactNode, createContext, useContext, useState } from "react";
import { Mapping } from "../type/mapping";

type MappingContext = {
  mappings: Mapping[];
  mapTask: (task: string, category: string) => void;
  unmapTask: (task: string, category: string) => void;
};

const MappingContext = createContext<MappingContext>({
  mappings: [],
  mapTask: () => {},
  unmapTask: () => {},
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
      (m) => m.task !== `t:${task}` || m.category !== `c:${category}`
    );
    setMappings(filtered);
  };

  return (
    <MappingContext.Provider value={{ mappings, mapTask, unmapTask }}>
      {children}
    </MappingContext.Provider>
  );
};

export const useMappingState = () => {
  return useContext(MappingContext);
};
