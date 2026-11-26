
import type { Subcategory } from "../../types/subcategory.types";

interface SubcategoryCardProps {
  subcategory: Subcategory;
}

export default function SubcategoryCard({
  subcategory,
}: SubcategoryCardProps) {
  return (
    <div className="group flex min-h-[120px] cursor-pointer items-center justify-center rounded-2xl border border-[#F3F4F6] bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#16A34A] hover:shadow-md">
      <h3 className="text-lg font-semibold text-[#1F2937] transition-colors duration-300 group-hover:text-[#16A34A]">
        {subcategory.name}
      </h3>
    </div>
  );
}
