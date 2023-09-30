import { useCategoryState } from "@/app/state/category";

const Prioritizer = () => {
  const { categories, removeCategory } = useCategoryState();

  return (
    <div className="grid grid-cols-2">
      {categories.map((category, index) => (
        <div
          key={category.title + index}
          className="relative m-2 p-2 rounded-md"
          style={{
            border: `2px solid ${category.color}`,
          }}
        >
          <div
            className="absolute top-0 left-0 text-gray-800 pl-2 pr-3 rounded-br-md"
            style={{ backgroundColor: category.color }}
          >
            <span
              className="cursor-pointer mr-2 select-none"
              onClick={() => removeCategory(category.id)}
            >
              X
            </span>
            {category.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Prioritizer };
