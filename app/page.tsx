"use client";

import { CreateCategory } from "./components/category/create-category";
import { DndProvider } from "./components/dnd-provider";
import { Prioritizer } from "./components/prioritizer/prioritizer";
import { CreateTask } from "./components/task/create-task";
import { TaskList } from "./components/task/task-list";
import { StateProvider } from "./state/provider";

export default function Home() {
  return (
    <StateProvider>
      <DndProvider>
        <main className="max-w-7xl w-full mx-auto grid grid-cols-[1fr_3fr] py-4 gap-y-6 gap-x-8 flex-grow">
          <div className="flex flex-col">
            <div className="flex-grow">
              <CreateTask />
              <TaskList />
            </div>
            <CreateCategory />
          </div>
          <Prioritizer />
        </main>
      </DndProvider>
    </StateProvider>
  );
}
