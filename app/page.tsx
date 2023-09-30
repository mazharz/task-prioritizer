"use client";

import { CategoryList } from "./components/category/category-list";
import { CreateCategory } from "./components/category/create-category";
import { Prioritizer } from "./components/prioritizer/prioritizer";
import { CreateTask } from "./components/task/create-task";
import { TaskList } from "./components/task/task-list";
import { StateProvider } from "./state/provider";

export default function Home() {
  return (
    <StateProvider>
      <main className="max-w-7xl w-full mx-auto grid grid-cols-[1fr_3fr] py-4 gap-y-6 gap-x-8 flex-grow">
        <div>
          <CreateTask />
          <TaskList />
        </div>
        <Prioritizer />
        <div>
          <CreateCategory />
          <CategoryList />
        </div>
      </main>
    </StateProvider>
  );
}
