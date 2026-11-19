import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Category } from "../types/category.types";

interface CategoryListingCardProps {
  category: Category;
}

export default function CategoryListingCard({
  category,
}: CategoryListingCardProps) {
  return (
    <Link
      href={`/categories/${category._id}`}
      className="group flex flex-col rounded-2xl border border-[#F3F4F6] bg-white p-4 transition-colors duration-300 hover:border-[#16A34A] sm:p-6"
    >
      {/* Category Image */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 137px, (max-width: 1024px) 130px, 232px"
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Category Info */}
      <div className="mt-4 flex flex-col items-center text-center">
        <h3 className="text-2xl leading-7 font-semibold text-[#1F2937] transition-colors duration-300 group-hover:text-[#16A34A]">
          {category.name}
        </h3>

        <span className="mt-2 flex items-center gap-2 text-base leading-6 font-medium text-[#16A34A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Subcategories
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}