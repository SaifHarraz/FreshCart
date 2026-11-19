import { Category } from "../../types/category.types";
import CategoryListingCard from "../CategoryListingCard/CategoryListingCard";


interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
      {categories.map((category) => (
        <CategoryListingCard
          key={category._id}
          category={category}
        />
      ))}
    </div>
  );
}