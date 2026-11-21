
import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { getCategories } from "@/features/categories/services/categories.service";
import HomeSectionHeader from "../HomeSectionHeader/HomeSectionHeader";

export default async function HomeCategories() {
  const categories = await getCategories();

  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-[1536px]">
       {/* Section Header */}
<div className="py-8">
  <HomeSectionHeader
    title={
      <>
        Shop By <span className="text-[#009966]">Category</span>
      </>
    }
    action={{ label: "View All Categories", href: "/categories" }}
  />
</div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/categories/${category._id}`}
              className="flex flex-col items-center gap-3 rounded-lg bg-white p-4 category-card-shadow"
            >
              <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#DCFCE7]">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  unoptimized
                  sizes="80px"
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-center text-base font-medium text-[#364153]">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
