import { useCategoryState } from "@/app/state/category";

const CategoryList = () => {
  const { categories } = useCategoryState();

  return (
    <div>
      <ul className="list-disc ml-5 mt-2">
        {categories.map((c) => (
          <li key={c.id} className="my-1">
            {c.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CategoryList };
