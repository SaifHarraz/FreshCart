
"use client";

import {
  BadgeCheck,
  CheckCircle2,
  Package,
  RotateCcw,
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
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`size-4 ${
            index < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
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
    <article className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-semibold text-green-700">
            {initials}
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-sm font-semibold text-gray-900">
              {review.user.name}
            </h4>
            <p className="mt-1 text-xs text-gray-400">
              {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <RatingStars rating={review.rating} />
      </div>

      <p className="mt-4 line-clamp-4 break-words text-sm leading-6 text-gray-600">
        {review.review}
      </p>
    </article>
  );
}

function ProductDetails({
  product,
}: Pick<ProductTabsProps, "product">) {
  const information = [
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
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-lg font-semibold text-gray-900">
          About this Product
        </h3>
        <p className="max-w-4xl text-sm leading-7 text-gray-600">
          {product.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-5">
          <div className="mb-5 flex items-center gap-3">
            <Package className="size-5 text-primary" />
            <h3 className="font-semibold text-gray-900">
              Product Information
            </h3>
          </div>

          <dl className="space-y-4">
            {information.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 text-sm"
              >
                <dt className="text-gray-500">{label}</dt>
                <dd className="text-right font-medium text-gray-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-xl bg-gray-50 p-5">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="size-5 text-primary" />
            <h3 className="font-semibold text-gray-900">Key Features</h3>
          </div>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ReviewsContent({
  product,
  reviewsResponse,
}: ProductTabsProps) {
  return (
    <div className="space-y-6">
      {/* Rating summary */}
      <div className="flex flex-wrap items-center gap-6 rounded-xl bg-gray-50 p-5">
        <div>
          <p className="text-sm text-gray-500">Overall Rating</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-4xl font-semibold text-gray-900">
              {product.ratingsAverage.toFixed(1)}
            </span>
            <span className="text-sm text-gray-400">/ 5</span>
          </div>
          <RatingStars rating={product.ratingsAverage} />
        </div>

        <div className="h-14 w-px bg-gray-200" />

        <div>
          <p className="text-2xl font-semibold text-gray-900">
            {reviewsResponse.results.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">Customer Reviews</p>
        </div>
      </div>

      {/* Scrollable reviews area */}
      <div className="max-h-[600px] overflow-y-auto overscroll-contain pr-2">
        {reviewsResponse.data.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {reviewsResponse.data.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-200 py-12 text-center">
            <Star className="mx-auto size-8 text-gray-300" />
            <h3 className="mt-3 font-semibold text-gray-900">
              No reviews yet
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Be the first to review this product.
            </p>
          </div>
        )}
      </div>
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
    <div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        Shipping & Returns
      </h3>
      <p className="mb-6 text-sm text-gray-500">
        Everything you need to know about your order.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-green-50 text-primary">
              <Icon className="size-5" />
            </div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              {description}
            </p>
          </div>
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
    <section className="mt-16 w-full">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <Tabs defaultValue="details" className="w-full gap-0">
          <TabsList
            variant="line"
            className="flex h-[58px] w-full justify-start gap-0 overflow-x-auto rounded-none border-b border-gray-200 bg-white p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <TabsTrigger
              value="details"
              className="h-full flex-none gap-2 rounded-none border-0 px-4 py-4 text-sm font-medium text-gray-500 shadow-none after:bottom-[-1px] after:bg-primary after:opacity-0 data-active:text-primary data-active:after:opacity-100 sm:px-6"
            >
              <Package className="size-4 shrink-0" />
              <span>Product Details</span>
            </TabsTrigger>

            <TabsTrigger
              value="reviews"
              className="h-full flex-none gap-2 rounded-none border-0 px-4 py-4 text-sm font-medium text-gray-500 shadow-none after:bottom-[-1px] after:bg-primary after:opacity-0 data-active:text-primary data-active:after:opacity-100 sm:px-6"
            >
              <Star className="size-4 shrink-0" />
              <span>Reviews ({reviewsResponse.results})</span>
            </TabsTrigger>

            <TabsTrigger
              value="shipping"
              className="h-full flex-none gap-2 rounded-none border-0 px-4 py-4 text-sm font-medium text-gray-500 shadow-none after:bottom-[-1px] after:bg-primary after:opacity-0 data-active:text-primary data-active:after:opacity-100 sm:px-6"
            >
              <Truck className="size-4 shrink-0" />
              <span>Shipping & Returns</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="m-0 p-4 sm:p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold leading-7 text-gray-900">
                  About this Product
                </h3>
                <p className="mt-3 max-w-none text-sm leading-6 text-gray-600">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-4 text-sm font-semibold leading-5 text-gray-900">
                    Product Information
                  </h4>

                  <dl className="space-y-2">
                    {[
                      ["Category", product.category.name],
                      [
                        "Subcategory",
                        product.subcategory.map((item) => item.name).join(", ") || "—",
                      ],
                      ["Brand", product.brand.name],
                      ["Items Sold", product.sold.toLocaleString()],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-start justify-between gap-4 text-sm leading-5"
                      >
                        <dt className="text-gray-600">{label}</dt>
                        <dd className="text-right font-medium text-gray-900">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-4 text-sm font-semibold leading-5 text-gray-900">
                    Key Features
                  </h4>

                  <ul className="space-y-2">
                    {[
                      "Premium Quality Product",
                      "100% Authentic Guarantee",
                      "Fast & Secure Packaging",
                      "Quality Tested",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm leading-5 text-gray-700"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Reviews intentionally left unchanged */}
          <TabsContent value="reviews" className="m-0 p-4 sm:p-6">
            <ReviewsSection
              product={product}
              initialResponse={reviewsResponse}
            />
          </TabsContent>

          <TabsContent value="shipping" className="m-0 p-4 sm:p-6">
            <div className="space-y-6">
              <SectionHeading
                title="Shipping & Returns"
                description="Helpful information about receiving your order and getting assistance when you need it."
              />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-green-50 text-primary">
                    <Truck className="size-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Delivery Information
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Available delivery methods, costs, and estimated arrival
                    information are presented during checkout.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-600">
                    <Clock3 className="size-4 text-primary" />
                    Check estimated delivery at checkout
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-5">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-green-50 text-primary">
                    <RotateCcw className="size-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Returns & Exchanges
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Return and exchange conditions depend on the applicable
                    store policy and product eligibility.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-600">
                    <ShieldCheck className="size-4 text-primary" />
                    Review the applicable return policy
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-5 md:col-span-2 lg:col-span-1">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-green-50 text-primary">
                    <PackageCheck className="size-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Order Assistance
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Need help with an order? Contact customer support for
                    assistance with delivery or order-related questions.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-600">
                    <BadgeCheck className="size-4 text-primary" />
                    Customer support
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

