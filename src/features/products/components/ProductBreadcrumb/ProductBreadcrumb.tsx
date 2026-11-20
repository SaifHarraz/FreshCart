
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { ProductBreadcrumbProps } from "../../types/product-page.types";

export default function ProductBreadcrumb({
  product,
}: ProductBreadcrumbProps) {
  const subcategory = product.subcategory?.[0]?.name;

  const items = [
    "Home",
    product.category.name,
    subcategory,
    product.title,
  ].filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-2 text-xs text-[#6A7282]"
    >
      <Link href="/" className="transition-colors hover:text-[#16A34A]">
        Home
      </Link>

      {items.slice(1).map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center gap-2">
          <ChevronRight className="size-3.5 text-[#9CA3AF]" />

          <span
            className={
              index === items.length - 2
                ? "font-medium text-[#364153]"
                : ""
            }
          >
            {item}
          </span>
        </div>
      ))}
    </nav>
  );
}
