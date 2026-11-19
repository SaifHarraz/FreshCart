
import Image from "next/image";
import {
  Eye,
  Heart,
  Scale,
  ShoppingCart,
} from "lucide-react";
import {
  FaStar,
  FaStarHalfStroke,
} from "react-icons/fa6";

import type { Product } from "../../types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasRatings =
    product.ratingsQuantity > 0 &&
    Number.isFinite(product.ratingsAverage);

  
const rating = hasRatings
  ? Math.min(5, Math.max(0, product.ratingsAverage))
  : 0;

const fullStars = Math.floor(rating);
const partialStar = rating - fullStars;


  const hasDiscount =
    product.priceAfterDiscount != null &&
    product.priceAfterDiscount > 0 &&
    product.priceAfterDiscount < product.price;

  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.priceAfterDiscount!) / product.price) * 100
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
          className="object-contain"
        />

        {/* Discount Badge */}
        {hasDiscount && (
          <span className="absolute top-3 left-3 z-10 rounded bg-[#EF4444] px-2 py-1 text-xs font-semibold text-white">
            -{discountPercentage}%
          </span>
        )}

        {/* Product Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {[Heart, Scale, Eye].map((Icon, index) => (
            <button
              key={index}
              type="button"
              aria-label={
                ["Add to wishlist", "Compare product", "Quick view"][index]
              }
              className="flex size-8 items-center justify-center rounded-full bg-white shadow-sm"
            >
              <Icon className="size-4 text-[#364153]" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex min-h-[152px] flex-col p-4">
        {/* Category */}
        {product.subcategory?.[0]?.name && (
          <span className="text-xs leading-4 font-medium text-[#6A7282]">
            {product.subcategory[0].name}
          </span>
        )}

        {/* Title */}
        <h3 className="mt-1 line-clamp-2 text-base leading-6 font-medium text-[#364153]">
          {product.title}
        </h3>

        
{/* Rating */}
<div className="mt-1 flex h-6 items-center">
  {hasRatings ? (
    <>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => {
          const fillPercentage = Math.min(
            100,
            Math.max(0, (rating - index) * 100)
          );

          return (
            <span key={index} className="relative inline-flex">
              <FaStar className="size-4 text-[#E5E7EB]" />

              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${fillPercentage}%` }}
              >
                <FaStar className="size-4 max-w-none text-[#FACC15]" />
              </span>
            </span>
          );
        })}
      </div>

      <span className="ml-2 text-xs font-medium text-[#6A7282]">
        {rating.toFixed(1)} ({product.ratingsQuantity})
      </span>
    </>
  ) : (
    <span className="text-xs font-medium text-[#98A2B3]">
      No ratings yet
    </span>
  )}
</div>


        {/* Price and Cart */}
        <div className="mt-1 flex flex-1 items-center justify-between">
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="text-lg leading-7 font-bold text-[#16A34A]">
                  {product.priceAfterDiscount} EGP
                </span>

                <span className="text-sm text-[#6A7282] line-through">
                  {product.price} EGP
                </span>
              </>
            ) : (
              <span className="text-lg leading-7 font-bold text-[#1E2939]">
                {product.price} EGP
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label="Add to cart"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#16A34A] text-white"
          >
            <ShoppingCart className="size-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
