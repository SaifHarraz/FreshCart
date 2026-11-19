
import CategoryListingCard from "./CategoryListingCard";
import type { Category } from "../types/category.types";

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">
      {categories.map((category) => (
        <CategoryListingCard
          key={category._id}
          category={category}
        />
      ))}
    </div>
  );
}
