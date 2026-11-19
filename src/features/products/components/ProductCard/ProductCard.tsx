import Image from "next/image";
import { Eye, Heart, Scale, ShoppingCart } from "lucide-react";
import { Product } from "../../types/product.types";
import { FaStar } from "react-icons/fa6";

interface ProductCardProps {
  product: Product;
}

export default function ksProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.priceAfterDiscount
    ? Math.round(
        ((product.price - product.priceAfterDiscount) / product.price) * 100,
      )
    : 0;
  return (
    <article className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white">
      {/* Product Image */}
      <div className="relative h-[240px] bg-white">
        <Image
          src={product.imageCover}
          alt={product.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 25vw, 20vw"
          className="object-cover"
        />
        {discountPercentage > 0 && (
          <span className="absolute top-3 left-3 z-10 rounded bg-[#EF4444] px-2 py-1 text-xs font-semibold text-white">
            -{discountPercentage}%
          </span>
        )}

        {/* Product Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {[Heart, Scale, Eye].map((Icon, index) => (
            <div
              key={index}
              className="flex size-8 items-center justify-center rounded-full bg-white shadow-sm"
            >
              <Icon className="size-4 text-[#364153]" />
            </div>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex min-h-[152px] flex-col p-4">
        <span className="text-xs leading-4 font-medium text-[#6A7282]">
          {product.subcategory?.[0]?.name ?? product.category.name}
        </span>

        <h3 className="mt-1 line-clamp-2 text-base leading-6 font-medium text-[#364153]">
          {product.title}
        </h3>

        {/* Rating */}
        <div
          className="mt-1 flex h-6 items-center"
          aria-label={`Rated ${product.ratingsAverage.toFixed(1)} out of 5`}
        >
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => {
              const fillPercentage = Math.min(
                100,
                Math.max(0, (product.ratingsAverage - index) * 100),
              );

              return (
                <FaStar
                  key={index}
                  aria-hidden="true"
                  className="size-3.5"
                  style={{
                    background: `linear-gradient(to right, #FACC15 ${fillPercentage}%, #D1D5DB ${fillPercentage}%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                />
              );
            })}
          </div>

          <span className="ml-2 text-xs font-medium text-[#6A7282]">
            {product.ratingsAverage.toFixed(1)} ({product.ratingsQuantity})
          </span>
        </div>

        {/* Price and Cart */}
        <div className="mt-1 flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            {product.priceAfterDiscount && (
              <span className="text-lg leading-7 font-bold text-[#1E2939]">
                {product.priceAfterDiscount} EGP
              </span>
            )}

            <span
              className={
                product.priceAfterDiscount
                  ? "text-sm text-[#6A7282] line-through"
                  : "text-lg leading-7 font-bold text-[#1E2939]"
              }
            >
              {product.price} EGP
            </span>
          </div>

          <div className="flex size-10 items-center justify-center rounded-full bg-[#16A34A] text-white">
            <ShoppingCart className="size-5" />
          </div>
        </div>
      </div>
    </article>
  );
}
