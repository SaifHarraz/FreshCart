import Image from "next/image";
import Link from "next/link";

import type { Category } from "../types/category.types";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category._id}`}
      className="group flex flex-col items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F0FDF4]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="80px"
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="text-center text-sm leading-5 font-medium text-[#101828] transition-colors group-hover:text-[#16A34A]">
        {category.name}
      </h3>
    </Link>
  );
}