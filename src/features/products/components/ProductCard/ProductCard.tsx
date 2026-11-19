import Image from "next/image";
import { Eye, Heart, Scale, ShoppingCart, Star } from "lucide-react";
import { Product } from "../../types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ksProductCard({ product }: ProductCardProps) {
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

        {/* Product Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {[Heart, Scale, Eye].map((Icon, index) => (
            <div
              key={index}
              className="flex size-8 items-center justify-center rounded-full bg-white shadow-sm"
            >
              <Icon className="size-5 text-[#364153]" />
            </div>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex min-h-[152px] flex-col p-4">
        <span className="text-xs leading-4 font-medium text-[#6A7282]">
          {product.subcategory?.[0]?.name ?? product.category.name}
        </span>

        <h3 className="mt-1 line-clamp-1 text-base leading-6 font-medium text-[#364153]">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mt-1 flex h-6 items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-4 fill-[#FACC15] text-[#FACC15]"
              />
            ))}
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
