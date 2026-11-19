import CategoryCard from "./CategoryCard";
import type { Category } from "../types/category.types";

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
}