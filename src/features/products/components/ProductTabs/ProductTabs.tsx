
"use client";

import {
  PackageCheck,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import type { ProductTabsProps } from "@/features/products/types/product-tabs.types";

function RatingStars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`size-4 ${
            index < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProductTabs({
  product,
  reviews,
  reviewsCount,
}: ProductTabsProps) {
  return (
    <section className="mt-12 w-full">
      <Tabs defaultValue="details" className="w-full">
        <TabsList
          variant="line"
          className="h-auto w-full justify-start gap-8 overflow-x-auto rounded-none border-b border-gray-200 p-0"
        >
          <TabsTrigger
            value="details"
            className="h-auto flex-none rounded-none px-1 py-4 text-sm text-gray-500 after:bg-primary data-active:text-primary"
          >
            Product Details
          </TabsTrigger>

          <TabsTrigger
            value="reviews"
            className="h-auto flex-none rounded-none px-1 py-4 text-sm text-gray-500 after:bg-primary data-active:text-primary"
          >
            Reviews ({reviewsCount})
          </TabsTrigger>

          <TabsTrigger
            value="shipping"
            className="h-auto flex-none rounded-none px-1 py-4 text-sm text-gray-500 after:bg-primary data-active:text-primary"
          >
            Shipping & Returns
          </TabsTrigger>
        </TabsList>

        {/* Product Details */}
        <TabsContent value="details" className="mt-8 space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              About this Product
            </h3>

            <p className="max-w-4xl text-sm leading-7 text-gray-600">
              {product.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Product Information
            </h3>

            <dl className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
              <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                <dt className="text-sm text-gray-500">Category</dt>
                <dd className="text-right text-sm font-medium text-gray-900">
                  {product.category.name}
                </dd>
              </div>

              <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                <dt className="text-sm text-gray-500">Subcategory</dt>
                <dd className="text-right text-sm font-medium text-gray-900">
                  {product.subcategory.map((item) => item.name).join(", ") || "—"}
                </dd>
              </div>

              <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                <dt className="text-sm text-gray-500">Brand</dt>
                <dd className="text-right text-sm font-medium text-gray-900">
                  {product.brand.name}
                </dd>
              </div>

              <div className="flex justify-between gap-4 border-b border-gray-100 pb-3">
                <dt className="text-sm text-gray-500">Items Sold</dt>
                <dd className="text-right text-sm font-medium text-gray-900">
                  {product.sold.toLocaleString()}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Key Features
            </h3>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Premium Quality Product",
                "100% Authentic Guarantee",
                "Fast & Secure Packaging",
                "Quality Tested",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <ShieldCheck className="size-5 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        {/* Reviews */}
        <TabsContent value="reviews" className="mt-8 space-y-6">
          <div className="flex flex-wrap items-center gap-4 rounded-xl bg-gray-50 p-5">
            <div>
              <p className="text-3xl font-semibold text-gray-900">
                {product.ratingsAverage.toFixed(1)}
                <span className="text-base font-normal text-gray-500">
                  {" "}/ 5
                </span>
              </p>

              <RatingStars rating={product.ratingsAverage} />
            </div>

            <p className="text-sm text-gray-500">
              Based on {reviewsCount} customer reviews
            </p>
          </div>

          {reviews.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {reviews.map((review) => (
                <article key={review._id} className="py-5 first:pt-0">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        {review.user.name}
                      </h4>

                      <time
                        dateTime={review.createdAt}
                        className="mt-1 block text-xs text-gray-500"
                      >
                        {new Date(review.createdAt).toLocaleDateString()}
                      </time>
                    </div>

                    <RatingStars rating={review.rating} />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {review.review}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-sm text-gray-500">
              No reviews yet for this product.
            </p>
          )}
        </TabsContent>

        {/* Shipping & Returns */}
        <TabsContent value="shipping" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-5">
              <Truck className="mb-4 size-6 text-primary" />

              <h3 className="font-semibold text-gray-900">
                Delivery Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Available delivery options and estimated arrival details
                are displayed during checkout based on your location.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <PackageCheck className="mb-4 size-6 text-primary" />

              <h3 className="font-semibold text-gray-900">
                Returns & Exchanges
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Return and exchange eligibility may vary by product.
                Please review the applicable policy before placing your order.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <ShieldCheck className="mb-4 size-6 text-primary" />

              <h3 className="font-semibold text-gray-900">
                Order Assistance
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Contact the support team if you need help with delivery,
                returns, or an existing order.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
