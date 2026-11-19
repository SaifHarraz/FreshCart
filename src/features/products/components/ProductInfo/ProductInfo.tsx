
"use client";

import { useState } from "react";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Zap,
} from "lucide-react";
import { FaStar } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import type { ProductInfoProps } from "../../types/product-page.types";

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
    <section className="h-fit rounded-xl bg-white p-6 shadow-sm">
      {/* Category and Brand */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-[#ECFDF5] px-3 py-1.5 text-sm font-medium text-[#16A34A]">
          {product.category.name}
        </span>

        <span className="rounded-md bg-[#F3F4F6] px-3 py-1.5 text-sm font-medium text-[#364153]">
          {product.brand.name}
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-6 text-2xl leading-9 font-bold text-[#1E2939]">
        {product.title}
      </h1>

      {/* Rating */}
      <div className="mt-3 flex items-center gap-3">
        {hasRatings ? (
          <>
            <div className="flex items-center gap-1">
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

            <span className="text-sm text-[#6A7282]">
              {rating.toFixed(1)} ({product.ratingsQuantity} reviews)
            </span>
          </>
        ) : (
          <span className="text-sm text-[#98A2B3]">
            No reviews yet
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-3xl leading-10 font-bold text-[#16A34A]">
          {unitPrice} EGP
        </span>

        {hasDiscount && (
          <span className="text-lg text-[#98A2B3] line-through">
            {product.price} EGP
          </span>
        )}
      </div>

      {/* Stock Status */}
      <div className="mt-6 flex items-center gap-2">
        <span
          className={`size-2 rounded-full ${
            isInStock ? "bg-[#16A34A]" : "bg-[#EF4444]"
          }`}
        />

        <span
          className={`text-sm font-medium ${
            isInStock ? "text-[#16A34A]" : "text-[#EF4444]"
          }`}
        >
          {isInStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Quantity */}
      <div className="mt-8 border-t border-[#E5E7EB] pt-6">
        <label className="text-sm font-semibold text-[#364153]">
          Quantity
        </label>

        <div className="mt-3 flex flex-wrap items-center gap-4">
          <div className="flex h-[52px] items-center rounded-lg border border-[#E5E7EB]">
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              aria-label="Decrease quantity"
              disabled={!isInStock || quantity <= 1}
              onClick={() => updateQuantity(quantity - 1)}
              className="h-12 w-[52px] rounded-none"
            >
              <Minus className="size-5" />
            </Button>

            <span className="min-w-16 text-center font-medium text-[#1E2939]">
              {quantity}
            </span>

            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              aria-label="Increase quantity"
              disabled={!isInStock || quantity >= product.quantity}
              onClick={() => updateQuantity(quantity + 1)}
              className="h-12 w-[52px] rounded-none"
            >
              <Plus className="size-5" />
            </Button>
          </div>

          <span className="text-sm text-[#6A7282]">
            {product.quantity} available
          </span>
        </div>
      </div>

      {/* Total Price */}
      <div className="mt-6 flex items-center justify-between rounded-lg bg-[#F9FAFB] p-4">
        <span className="text-sm font-medium text-[#6A7282]">
          Total Price:
        </span>

        <span className="text-2xl font-bold text-[#1E2939]">
          {totalPrice.toFixed(2)} EGP
        </span>
      </div>

      {/* Purchase Actions */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Button
          type="button"
          disabled={!isInStock}
          className="h-[52px] bg-[#16A34A] text-base font-semibold text-white hover:bg-[#15803D]"
        >
          <ShoppingCart className="size-5" />
          Add to Cart
        </Button>

        <Button
          type="button"
          variant="outline"
          disabled={!isInStock}
          className="h-[52px] border-[#16A34A] text-base font-semibold text-[#16A34A] hover:bg-[#ECFDF5]"
        >
          <Zap className="size-5" />
          Buy Now
        </Button>
      </div>

      {/* Wishlist */}
      <Button
        type="button"
        variant="outline"
        className="mt-4 h-[52px] w-full border-[#E5E7EB] text-[#364153]"
      >
        <Heart className="size-5" />
        Add to Wishlist
      </Button>
    </section>
  );
}
