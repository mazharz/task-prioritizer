import { useCategoryState } from "@/app/state/category";
import { useEffect, useRef } from "react";

const CategoryList = () => {
  const { categories, initialize } = useCategoryState();
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    if (!categories.length && !hasInitializedRef.current) {
      initialize();
      hasInitializedRef.current = true;
    }
  }, []);

  return (
    <div>
      <ul className="list-disc ml-5 mt-2">
        {categories.map((c) => (
          <li key={c.id} className="my-1" style={{ color: c.color }}>
            {c.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CategoryList };
