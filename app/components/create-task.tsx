import { FormEvent, useState } from "react";
import { useTaskState } from "../state/task";

const CreateTask = () => {
  const { addTask } = useTaskState();
  const [title, setTitle] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle id creation
    addTask({ id: "", title });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          name="title"
          type="text"
          className="border"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="border">
          add task
        </button>
      </form>
    </div>
  );
};

export { CreateTask };
