
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Package,
  PackageCheck,
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

import { getProductReviews } from "@/features/products/services/products.service";

import type { ProductTabsProps } from "@/features/products/types/product-tabs.types";
import type { ProductReview } from "@/features/products/types/product-reviews.types";

function RatingStars({
  rating,
  size = "size-4",
}: {
  rating: number;
  size?: string;
}) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`${size} ${
            index < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {eyebrow}
        </p>
      )}
      <h3 className="text-xl font-semibold tracking-tight text-gray-900">
        {title}
      </h3>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}

function ReviewCard({ review }: { review: ProductReview }) {
  const initials = review.user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="rounded-xl border border-gray-100 bg-white p-5 transition-colors hover:border-gray-200 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-green-50 text-sm font-semibold text-green-700">
            {initials}
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-sm font-semibold text-gray-900">
              {review.user.name}
            </h4>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-400">
              <CalendarDays className="size-3.5" />
              <time dateTime={review.createdAt}>
                {new Date(review.createdAt).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>

        <RatingStars rating={review.rating} />
      </div>

      <p className="mt-5 text-sm leading-7 text-gray-600">
        {review.review}
      </p>
    </article>
  );
}

function ReviewsSection({
  product,
  initialResponse,
}: {
  product: ProductTabsProps["product"];
  initialResponse: ProductTabsProps["reviewsResponse"];
}) {
  const [reviews, setReviews] = useState(initialResponse.data);
  const [currentPage, setCurrentPage] = useState(
    initialResponse.metadata.currentPage
  );
  const [hasMore, setHasMore] = useState(
    initialResponse.metadata.currentPage <
      initialResponse.metadata.numberOfPages
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);
  const pageRef = useRef(initialResponse.metadata.currentPage);

  const loadNextPage = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setIsLoading(true);
    setHasError(false);

    try {
      const nextPage = pageRef.current + 1;
      const response = await getProductReviews(product._id, nextPage);

      setReviews((previous) => {
        const existingIds = new Set(previous.map((review) => review._id));
        const newReviews = response.data.filter(
          (review) => !existingIds.has(review._id)
        );

        return [...previous, ...newReviews];
      });

      pageRef.current = response.metadata.currentPage;
      setCurrentPage(response.metadata.currentPage);

      setHasMore(
        response.metadata.currentPage < response.metadata.numberOfPages
      );
    } catch {
      setHasError(true);
    } finally {
      loadingRef.current = false;
      setIsLoading(false);
    }
  }, [hasMore, product._id]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || !hasMore || hasError) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadNextPage();
        }
      },
      {
        rootMargin: "250px",
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [hasMore, hasError, loadNextPage]);

  return (
    <div className="space-y-8">
      {/* Rating overview */}
      <div className="grid grid-cols-1 gap-6 rounded-2xl bg-gray-50 p-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center sm:p-8">
        <div className="sm:border-r sm:border-gray-200 sm:pr-8">
          <p className="text-sm font-medium text-gray-500">
            Overall rating
          </p>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-5xl font-semibold tracking-tight text-gray-900">
              {product.ratingsAverage.toFixed(1)}
            </span>
            <span className="text-sm text-gray-400">/ 5</span>
          </div>

          <div className="mt-3">
            <RatingStars rating={product.ratingsAverage} size="size-5" />
          </div>

          <p className="mt-3 text-xs text-gray-500">
            {initialResponse.results.toLocaleString()} customer reviews
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <BadgeCheck className="size-5 text-primary" />
            <p className="text-sm font-semibold text-gray-900">
              Customer feedback
            </p>
          </div>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Read what customers are saying about this product. Reviews are
            displayed with the newest feedback first.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="rounded-full bg-white px-3 py-1.5">
              {reviews.length} of {initialResponse.results} loaded
            </span>
            {hasMore && (
              <span className="flex items-center gap-1.5">
                <Clock3 className="size-3.5" />
                More reviews load as you scroll
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Review list */}
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Customer reviews
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Latest experiences from customers
            </p>
          </div>
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 px-6 py-14 text-center">
            <Star className="mx-auto size-8 text-gray-300" />
            <h4 className="mt-3 font-semibold text-gray-900">
              No reviews yet
            </h4>
            <p className="mt-1 text-sm text-gray-500">
              Be the first to share your experience with this product.
            </p>
          </div>
        )}
      </div>

      {/* Automatic pagination sentinel */}
      <div
        ref={sentinelRef}
        className="flex min-h-12 items-center justify-center"
        aria-live="polite"
      >
        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="size-4 animate-spin rounded-full border-2 border-gray-200 border-t-primary" />
            Loading more reviews...
          </div>
        )}

        {hasError && (
          <button
            type="button"
            onClick={() => void loadNextPage()}
            className="text-sm font-medium text-primary hover:underline"
          >
            Couldn't load more reviews. Try again
          </button>
        )}

        {!hasMore && reviews.length > 0 && (
          <p className="text-xs text-gray-400">
            You've reached the end of the reviews.
          </p>
        )}
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
      <Tabs defaultValue="details" className="w-full">
        <TabsList
          variant="line"
          className="h-auto w-full justify-start gap-6 overflow-x-auto rounded-none border-b border-gray-200 p-0 sm:gap-10"
        >
          <TabsTrigger
            value="details"
            className="h-auto flex-none gap-2 rounded-none px-3 py-4 text-sm font-medium text-gray-500 after:bg-primary after:bottom-[-1px] data-active:text-primary"
          >
            <Package className="size-4" />
            Product Details
          </TabsTrigger>

          <TabsTrigger
            value="reviews"
            className="h-auto flex-none gap-2 rounded-none px-3 py-4 text-sm font-medium text-gray-500 after:bg-primary after:bottom-[-1px] data-active:text-primary"
          >
            <Star className="size-4" />
            Reviews
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
              {reviewsResponse.results}
            </span>
          </TabsTrigger>

          <TabsTrigger
            value="shipping"
            className="h-auto flex-none gap-2 rounded-none px-3 py-4 text-sm font-medium text-gray-500 after:bg-primary after:bottom-[-1px] data-active:text-primary"
          >
            <Truck className="size-4" />
            Shipping & Returns
          </TabsTrigger>
        </TabsList>

        {/* Details */}
        <TabsContent value="details" className="mt-8 space-y-8">
          <div className="max-w-4xl">
            <SectionHeading
              eyebrow="Product overview"
              title="About this product"
            />

            <p className="text-sm leading-8 text-gray-600">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {/* Product information */}
            <div className="rounded-xl bg-gray-50 p-5 sm:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-white text-primary">
                  <Package className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Product Information
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Product specifications
                  </p>
                </div>
              </div>

              <dl className="space-y-4">
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
                    className="flex items-start justify-between gap-4 border-b border-gray-200/80 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-gray-500">{label}</dt>
                    <dd className="text-right text-sm font-medium text-gray-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Key features */}
            <div className="rounded-xl bg-gray-50 p-5 sm:p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-white text-primary">
                  <ShieldCheck className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Key Features
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Shop with confidence
                  </p>
                </div>
              </div>

              <ul className="space-y-5">
                {[
                  "Premium Quality Product",
                  "100% Authentic Guarantee",
                  "Fast & Secure Packaging",
                  "Quality Tested",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Reviews */}
        <TabsContent value="reviews" className="mt-8">
          <ReviewsSection
            product={product}
            initialResponse={reviewsResponse}
          />
        </TabsContent>

        {/* Shipping */}
        <TabsContent value="shipping" className="mt-8 space-y-8">
          <div>
            <SectionHeading
              eyebrow="Shopping with confidence"
              title="Shipping & Returns"
              description="Helpful information about receiving your order and getting assistance when you need it."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-100 bg-white p-6">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-green-50 text-primary">
                  <Truck className="size-5" />
                </div>

                <h3 className="font-semibold text-gray-900">
                  Delivery Information
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Available delivery methods, costs, and estimated arrival
                  information are presented during checkout.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-600">
                  <Clock3 className="size-4 text-primary" />
                  Check estimated delivery at checkout
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-6">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-green-50 text-primary">
                  <RotateCcw className="size-5" />
                </div>

                <h3 className="font-semibold text-gray-900">
                  Returns & Exchanges
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Return and exchange conditions depend on the applicable
                  store policy and product eligibility.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-600">
                  <ShieldCheck className="size-4 text-primary" />
                  Review the applicable return policy
                </div>
              </div>

              <div className="rounded-xl border border-gray-100 bg-white p-6 md:col-span-2 lg:col-span-1">
                <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-green-50 text-primary">
                  <PackageCheck className="size-5" />
                </div>

                <h3 className="font-semibold text-gray-900">
                  Order Assistance
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Need help with an order? Contact customer support for
                  assistance with delivery or order-related questions.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-gray-600">
                  <BadgeCheck className="size-4 text-primary" />
                  Customer support
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
