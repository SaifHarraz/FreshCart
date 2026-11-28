import BrandCard from "../BrandCard/BrandCard";
import type { BrandGridProps } from "../../types/brand.types";

export default function BrandGrid({ brands }: BrandGridProps) {
  if (!brands.length) {
    return (
      <p className="py-12 text-center text-sm text-gray-500">
        No brands found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-5">
      {brands.map((brand) => (
        <BrandCard
         id={brand._id}
          key={brand._id}
          name={brand.name}
          logo={brand.image}
        />
      ))}
    </div>
  );
}