
"use client";

import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Zap,
  Share2,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { FaStar } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import type { ProductInfoProps } from "../../types/product-page.types";

const benefits = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Orders over $550",
  },
  {
    icon: RotateCcw,
    title: "30 Days Return",
    description: "Money back",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% Protected",
  },
];

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const isInStock = product.quantity > 0;

  const hasDiscount =
    product.priceAfterDiscount != null &&
    product.priceAfterDiscount > 0 &&
    product.priceAfterDiscount < product.price;

  const unitPrice = hasDiscount
    ? product.priceAfterDiscount!
    : product.price;

  const totalPrice = unitPrice * quantity;

  const hasRatings =
    product.ratingsQuantity > 0 &&
    Number.isFinite(product.ratingsAverage);

  const rating = hasRatings
    ? Math.min(5, Math.max(0, product.ratingsAverage))
    : 0;

  const updateQuantity = (value: number) => {
    setQuantity(Math.min(product.quantity, Math.max(1, value)));
  };

  return (
    <section className="flex h-fit flex-col rounded-xl bg-white p-6 shadow-sm md:min-h-[776px]">
      {/* Category and Brand */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#F0FDF4] px-3 py-1.5 text-xs font-medium text-[#15803D]">
          {product.category.name}
        </span>

        <span className="rounded-full bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium text-[#364153]">
          {product.brand.name}
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-4 text-2xl leading-9 font-bold text-[#101828] md:text-[30px]">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-3">
        {hasRatings ? (
          <>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={`size-4 ${
                    index < Math.round(rating)
                      ? "text-[#FACC15]"
                      : "text-[#E5E7EB]"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm text-[#4A5565]">
              {rating.toFixed(1)} ({product.ratingsQuantity} reviews)
            </span>
          </>
        ) : (
          <span className="text-sm text-[#98A2B3]">No reviews yet</span>
        )}
      </div>

      {/* Price */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="text-[30px] leading-9 font-bold text-[#101828]">
          {unitPrice} EGP
        </span>

        {hasDiscount && (
          <span className="text-lg text-[#98A2B3] line-through">
            {product.price} EGP
          </span>
        )}
      </div>

      {/* Stock Status */}
      <div className="mt-6">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium ${
            isInStock
              ? "bg-[#F0FDF4] text-[#008236]"
              : "bg-red-50 text-red-600"
          }`}
        >
          <span
            className={`size-2 rounded-full ${
              isInStock ? "bg-[#00C950]" : "bg-red-500"
            }`}
          />
          {isInStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Description and Quantity */}
      <div className="mt-6 border-t border-[#F3F4F6] pt-5">
        <p className="text-base leading-[26px] text-[#4A5565]">
          {product.description}
        </p>

        <div className="mt-6">
          <label className="text-sm font-medium text-[#364153]">
            Quantity
          </label>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <div className="flex h-12 items-center overflow-hidden rounded-lg border-2 border-[#E5E7EB]">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Decrease quantity"
                disabled={!isInStock || quantity <= 1}
                onClick={() => updateQuantity(quantity - 1)}
                className="h-full w-11 rounded-none"
              >
                <Minus className="size-4" />
              </Button>

              <span className="min-w-16 text-center text-lg font-medium text-[#364153]">
                {quantity}
              </span>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Increase quantity"
                disabled={!isInStock || quantity >= product.quantity}
                onClick={() => updateQuantity(quantity + 1)}
                className="h-full w-11 rounded-none"
              >
                <Plus className="size-4" />
              </Button>
            </div>

            <span className="text-sm text-[#6A7282]">
              {product.quantity} available
            </span>
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-5 flex items-center justify-between rounded-lg bg-[#F9FAFB] p-3">
        <span className="text-sm font-medium text-[#6A7282]">
          Total Price:
        </span>

        <span className="text-xl font-bold text-[#16A34A]">
          {totalPrice.toFixed(2)} EGP
        </span>
      </div>

      {/* Purchase Actions */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          type="button"
          disabled={!isInStock}
          className="h-12 bg-[#16A34A] text-sm font-semibold text-white hover:bg-[#15803D]"
        >
          <ShoppingCart className="size-4" />
          Add to Cart
        </Button>

        <Button
          type="button"
          disabled={!isInStock}
          className="h-12 bg-[#101828] text-sm font-semibold text-white hover:bg-[#1E2939]"
        >
          <Zap className="size-4" />
          Buy Now
        </Button>
      </div>

      {/* Wishlist and Share */}
      <div className="mt-4 flex gap-3">
        <Button
          type="button"
          variant="outline"
          className="h-12 flex-1 border-[#E5E7EB] text-[#364153]"
        >
          <Heart className="size-4" />
          Add to Wishlist
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Share product"
          className="size-12 shrink-0 border-[#E5E7EB] text-[#364153]"
        >
          <Share2 className="size-4" />
        </Button>
      </div>

      {/* Benefits */}
      <div className="mt-auto grid grid-cols-1 gap-4 border-t border-[#F3F4F6] pt-5 sm:grid-cols-3">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
              <Icon className="size-5" />
            </span>

            <div className="min-w-0">
              <p className="text-xs font-medium text-[#364153]">
                {title}
              </p>
              <p className="text-[10px] text-[#6A7282]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
