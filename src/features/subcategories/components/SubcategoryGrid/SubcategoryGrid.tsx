
import type { Subcategory } from "../../types/subcategory.types";
import SubcategoryCard from "../SubcategoryCard/SubcategoryCard";

interface SubcategoryGridProps {
  subcategories: Subcategory[];
}

export default function SubcategoryGrid({
  subcategories,
}: SubcategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {subcategories.map((subcategory) => (
        <SubcategoryCard
          key={subcategory._id}
          subcategory={subcategory}
        />
      ))}
    </div>
  );
}
