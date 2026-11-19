
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
      className="group flex min-h-[235px] flex-col rounded-2xl border border-[#F3F4F6] bg-white p-[17px] transition-all duration-300 hover:border-[#BBF7D0] hover:shadow-md md:min-h-[267px] md:p-6 lg:min-h-[260px] lg:p-4"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 767px) 137px, (max-width: 1279px) 130px, 174px"
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex flex-1 flex-col items-center text-center">
        <h3 className="text-sm leading-5 font-semibold text-[#1F2937] transition-colors duration-300 group-hover:text-[#16A34A] md:text-base">
          {category.name}
        </h3>

        <span className="mt-1 flex items-center gap-1 text-xs leading-4 font-medium text-[#16A34A] opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-sm">
          View Subcategories
          <ArrowRight className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
