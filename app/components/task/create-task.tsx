import { FormEvent, useState } from "react";
import { useTaskState } from "../../state/task";
import { Input } from "../input";

const CreateTask = () => {
  const { addTask } = useTaskState();
  const [title, setTitle] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle id creation
    addTask(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          name="task title"
          type="text"
          value={title}
          setValue={setTitle}
          placeholder="Add a task"
          className="w-full"
        />
      </form>
    </div>
  );
};

export { CreateTask };
