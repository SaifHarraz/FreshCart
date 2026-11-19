import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { getCategories } from "@/features/categories/services/categories.service";


export default async function HomeCategories() {
  const categories = await getCategories();

  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-[1536px]">
        {/* Section Header */}
        <div className="mb-8 flex h-[100px] items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <span className="h-8 w-1.5 rounded-full bg-primary" />

            <h2 className="text-2xl font-semibold text-gray-900">
              Shop By Category
            </h2>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View All Categories
            <ChevronRight className="size-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              className="group flex h-[148px] flex-col items-center rounded-lg bg-white py-4 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative size-20 overflow-hidden rounded-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  sizes="80px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-3 text-center text-base font-medium text-gray-900">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}