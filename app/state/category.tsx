import { ReactNode, createContext, useContext, useState } from "react";
import { Category } from "../type/category";

type CategoryContext = {
  categories: Category[];
  addCategory: (category: Category) => void;
  removeCategory: (category: Category) => void;
};

const CategoryContext = createContext<CategoryContext>({
  categories: [],
  addCategory: () => {},
  removeCategory: () => {},
});

type Props = {
  children: ReactNode;
};

export const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = (category: Category) => {
    setCategories((state) => [...state, category]);
  };
  const removeCategory = (category: Category) => {
    const filtered = categories.filter(
      (c) => c.title.toLowerCase() !== category.title.toLowerCase()
    );
    setCategories(filtered);
  };

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, removeCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryState = () => {
  return useContext(CategoryContext);
};
