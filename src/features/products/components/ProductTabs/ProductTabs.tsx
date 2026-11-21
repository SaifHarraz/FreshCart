"use client";

import {
  BadgeCheck,
  CheckCircle2,
  Package,
  RotateCcw,
  Star,
  Truck,
} from "lucide-react";
import { FaStar } from "react-icons/fa6";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import type { ProductTabsProps } from "@/features/products/types/product-tabs.types";


function RatingStars({ rating }: { rating: number }) {
  const safeRating = Number.isFinite(rating)
    ? Math.min(5, Math.max(0, rating))
    : 0;

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${safeRating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const fillPercentage = Math.min(
          100,
          Math.max(0, (safeRating - index) * 100)
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
  );
}


function ReviewCard({
  review,
}: {
  review: ProductTabsProps["reviewsResponse"]["data"][number];
}) {
  const initials = review.user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="rounded-lg border border-[#E5E7EB] bg-white p-4 transition-colors hover:border-[#D1D5DB] sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F0FDF4] text-sm font-semibold text-[#15803D]">
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="min-w-0">
              <h4 className="truncate text-sm font-semibold text-[#101828]">
                {review.user.name}
              </h4>

              <p className="mt-1 text-xs text-[#8A929E]">
                {new Date(review.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-md bg-[#FFFBEB] px-2.5 py-1">
              <RatingStars rating={review.rating} />
              <span className="text-xs font-semibold text-[#92400E]">
                {review.rating.toFixed(1)}
              </span>
            </div>
          </div>

          <p className="mt-4 line-clamp-3 whitespace-pre-line break-words text-sm leading-6 text-[#4A5565]">
            {review.review}
          </p>
        </div>
      </div>
    </article>
  );
}


function ProductDetails({ product }: Pick<ProductTabsProps, "product">) {
  const information: [string, string][] = [
    ["Category", product.category.name],
    [
      "Subcategory",
      product.subcategory.map((item) => item.name).join(", ") || "—",
    ],
    ["Brand", product.brand.name],
    ["Items Sold", product.sold.toLocaleString()],
  ];

  const features = [
    "Premium Quality Product",
    "100% Authentic Guarantee",
    "Fast & Secure Packaging",
    "Quality Tested",
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold leading-7 text-[#101828]">
          About this Product
        </h3>
        <p className="text-base font-medium leading-[26px] text-[#4A5565]">
          {product.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <section className="flex flex-col gap-3 rounded-lg bg-[#F9FAFB] p-4">
          <h4 className="text-base font-medium leading-6 text-[#101828]">
            Product Information
          </h4>

          <dl className="space-y-2">
            {information.map(([label, value]) => (
              <div
                key={label}
                className="flex items-start justify-between gap-4 text-sm leading-5"
              >
                <dt className="shrink-0 text-[#6A7282]">{label}</dt>
                <dd className="text-right font-medium text-[#101828]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="flex flex-col gap-3 rounded-lg bg-[#F9FAFB] p-4">
          <h4 className="text-base font-medium leading-6 text-[#101828]">
            Key Features
          </h4>

          <ul className="space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm leading-5 text-[#4A5565]"
              >
                <CheckCircle2 className="size-4 shrink-0 fill-[#16A34A] text-white" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}



function ReviewsContent({
  product,
  reviewsResponse,
}: ProductTabsProps) {
  const hasRatings =
    product.ratingsQuantity > 0 &&
    Number.isFinite(product.ratingsAverage);

  const rating = hasRatings
    ? Math.min(5, Math.max(0, product.ratingsAverage))
    : 0;

  return (
    <div className="space-y-6">
      {/* Full-width Rating Overview */}
      <section className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-5 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-[#4A5565]">
              Overall Customer Rating
            </p>

            {hasRatings ? (
              <>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight text-[#101828]">
                    {rating.toFixed(1)}
                  </span>
                  <span className="mb-1 text-sm text-[#8A929E]">
                    out of 5
                  </span>
                </div>

                <div className="mt-3">
                  <RatingStars rating={rating} />
                </div>
              </>
            ) : (
              <p className="mt-3 text-sm text-[#98A2B3]">
                No ratings yet
              </p>
            )}
          </div>

          <div className="border-t border-[#E5E7EB] pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <p className="text-3xl font-semibold text-[#101828]">
              {product.ratingsQuantity.toLocaleString()}
            </p>

            <p className="mt-1 text-sm text-[#6A7282]">
              {product.ratingsQuantity === 1
                ? "Customer review"
                : "Customer reviews"}
            </p>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[#101828]">
              Customer Reviews
            </h3>

            <p className="mt-1 text-sm text-[#8A929E]">
              What customers are saying about this product
            </p>
          </div>

          <span className="rounded-full bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium text-[#4A5565]">
            {reviewsResponse.results.toLocaleString()}{" "}
            {reviewsResponse.results === 1 ? "review" : "reviews"}
          </span>
        </div>

        {reviewsResponse.data.length > 0 ? (
          <div className="max-h-[440px] space-y-3 overflow-y-auto overscroll-contain pr-2 [scrollbar-color:#D1D5DB_transparent] [scrollbar-width:thin]">
            {reviewsResponse.data.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#D1D5DB] py-14 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-[#F3F4F6] text-[#9CA3AF]">
              <Star className="size-5 fill-current" />
            </div>

            <h4 className="mt-4 font-semibold text-[#101828]">
              No reviews yet
            </h4>

            <p className="mt-1 max-w-xs text-sm leading-6 text-[#6A7282]">
              There are no customer reviews for this product yet.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}



function ShippingContent() {
  const items = [
    {
      icon: Truck,
      title: "Delivery Information",
      description:
        "Available delivery methods, costs, and estimated arrival information are presented during checkout.",
    },
    {
      icon: RotateCcw,
      title: "Returns & Exchanges",
      description:
        "Return and exchange conditions depend on the applicable store policy and product eligibility.",
    },
    {
      icon: BadgeCheck,
      title: "Order Assistance",
      description:
        "Contact customer support for assistance with delivery or order-related questions.",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold leading-7 text-[#101828]">
          Shipping & Returns
        </h3>
        <p className="mt-2 text-sm leading-5 text-[#6A7282]">
          Everything you need to know about your order.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-lg border border-[#E5E7EB] bg-white p-5"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#15803D]">
              <Icon className="size-5 fill-current" strokeWidth={1.8} />
            </div>
            <h4 className="font-semibold text-[#101828]">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-[#4A5565]">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ProductTabs({
  product,
  reviewsResponse,
}: ProductTabsProps) {
  return (
    <section className="mt-14 w-full">
      <div className="overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <Tabs defaultValue="details" className="w-full gap-0">
          <TabsList
            variant="line"
            className="flex h-[73px] w-full justify-start gap-0 overflow-x-auto rounded-none border-b border-[#E5E7EB] bg-white p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:h-[58px]"
          >
            <TabsTrigger
              value="details"
              className="h-full flex-none gap-2 rounded-none border-0 px-6 py-4 text-base font-medium text-[#4A5565] shadow-none after:bottom-[-1px] after:bg-[#16A34A] after:opacity-0 data-active:!bg-[#F0FDF4]/50 data-active:text-[#16A34A] data-active:after:opacity-100"
            >
              <Package className="size-[18px] shrink-0 fill-current" strokeWidth={1.8} />
              <span>Product Details</span>
            </TabsTrigger>

            <TabsTrigger
              value="reviews"
              className="h-full flex-none gap-2 rounded-none border-0 px-6 py-4 text-base font-medium text-[#4A5565] shadow-none after:bottom-[-1px] after:bg-[#16A34A] after:opacity-0 data-active:!bg-[#F0FDF4]/50 data-active:text-[#16A34A] data-active:after:opacity-100"
            >
              <Star className="size-[18px] shrink-0 fill-current" strokeWidth={1.8} />
              <span>Reviews ({reviewsResponse.results})</span>
            </TabsTrigger>

            <TabsTrigger
              value="shipping"
              className="h-full flex-none gap-2 rounded-none border-0 px-6 py-4 text-base font-medium text-[#4A5565] shadow-none after:bottom-[-1px] after:bg-[#16A34A] after:opacity-0 data-active:!bg-[#F0FDF4]/50 data-active:text-[#16A34A] data-active:after:opacity-100"
            >
              <Truck className="size-[18px] shrink-0 fill-current" strokeWidth={1.8} />
              <span>Shipping & Returns</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="m-0 p-6">
            <ProductDetails product={product} />
          </TabsContent>

          <TabsContent value="reviews" className="m-0 p-6">
            <ReviewsContent
              product={product}
              reviewsResponse={reviewsResponse}
            />
          </TabsContent>

          <TabsContent value="shipping" className="m-0 p-6">
            <ShippingContent />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
