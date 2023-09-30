import { ReactNode, createContext, useContext, useState } from "react";
import { Category } from "../type/category";
import { ColorHelper } from "../helper/color/color";

type CategoryContext = {
  categories: Category[];
  addCategory: (title: string) => void;
  removeCategory: (category: Category) => void;
  initialize: () => void;
};

const CategoryContext = createContext<CategoryContext>({
  categories: [],
  addCategory: () => {},
  removeCategory: () => {},
  initialize: () => {},
});

type Props = {
  children: ReactNode;
};

export const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const addCategory = (title: string) => {
    const alreadyExists = categories.find(
      (c) => c.title.toLowerCase() === title.toLowerCase()
    );
    if (alreadyExists) return;

    const color = ColorHelper.getRandomHsl();
    setCategories((state) => [...state, { id: "", title, color: color }]);
  };

  const removeCategory = (category: Category) => {
    const filtered = categories.filter(
      (c) => c.title.toLowerCase() !== category.title.toLowerCase()
    );
    setCategories(filtered);
  };

  const initialize = () => {
    addCategory("Makes me money");
    addCategory("It's Fun / Cool");
    addCategory("Helps me grow");
    addCategory("Helps others");
  };

  return (
    <CategoryContext.Provider
      value={{ categories, addCategory, removeCategory, initialize }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryState = () => {
  return useContext(CategoryContext);
};
