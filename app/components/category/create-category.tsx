import { FormEvent, useState, useEffect, useRef } from "react";
import { Input } from "../input";
import { useCategoryState } from "@/app/state/category";

const CreateCategory = () => {
  const { addCategory, initialize, categories } = useCategoryState();
  const [title, setTitle] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle id creation
    addCategory(title);
    setTitle("");
  };

  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (!categories.length && !hasInitializedRef.current) {
      initialize();
      hasInitializedRef.current = true;
    }
  }, []);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          name="category title"
          type="text"
          value={title}
          setValue={setTitle}
          placeholder="Add a category"
          className="w-full"
        />
      </form>
    </div>
  );
};

export { CreateCategory };
