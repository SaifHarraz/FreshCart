import BrandCard from "../BrandCard/BrandCard";
import type { Brand } from "../../types/brand.types";

interface BrandGridProps {
  brands: Brand[];
}

export default function BrandGrid({ brands }: BrandGridProps) {
  if (!brands.length) {
    return (
      <p className="py-12 text-center text-gray-500">
        No brands found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-5">
      {brands.map((brand) => (
        <BrandCard
          key={brand._id}
          name={brand.name}
          logo={brand.image}
          slug={brand.slug}
        />
      ))}
    </div>
  );
}
