"use client";

import { CreateTask } from "./components/create-task";
import { TaskList } from "./components/task-list";
import { TaskProvider } from "./state/task";

export default function Home() {
  return (
    <TaskProvider>
      <main>
        <CreateTask />
        <TaskList />
      </main>
    </TaskProvider>
  );
}
