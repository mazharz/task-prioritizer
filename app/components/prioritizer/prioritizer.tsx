import { useCategoryState } from "@/app/state/category";
import { PriorityCategory } from "./priority-category";

const Prioritizer = () => {
  const { categories } = useCategoryState();

  return (
    <div className="grid grid-cols-2 gap-2">
      {categories.map((category, index) => (
        <PriorityCategory key={category.title + index} category={category} />
      ))}
    </div>
  );
};

export { Prioritizer };
