import { FormEvent, useState } from "react";
import { useTaskState } from "../../state/task";
import { Input } from "../input";
import { Button } from "../button";

const CreateTask = () => {
  const { addTask } = useTaskState();
  const [title, setTitle] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = title.trim();
    if (!input.length) return;

    addTask(input);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex gap-2">
        <Input
          name="task title"
          type="text"
          value={title}
          setValue={setTitle}
          placeholder="Add a task"
          className="w-full"
        />
        <Button text="Add" type="submit" />
      </form>
    </div>
  );
};

export { CreateTask };
