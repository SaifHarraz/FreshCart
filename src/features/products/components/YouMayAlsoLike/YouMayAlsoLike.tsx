
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";

import ProductCard from "@/features/products/components/ProductCard/ProductCard";
import type { YouMayAlsoLikeProps } from "@/features/products/types/you-may-also-like.types";

export default function YouMayAlsoLike({
  products,
}: YouMayAlsoLikeProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  if (products.length === 0) return null;
  return (
    <section className="mt-12 w-full">
      {/* Section Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
         <span className="h-6 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]"></span>

          <h2 className="text-lg leading-7 font-bold text-[#101828]">
            You May Also{" "}
            <span className="text-[#16A34A]">Like</span>
          </h2>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous products"
           
            onClick={() => swiper?.slidePrev()}
            className="flex cursor-pointer size-10 items-center justify-center rounded-full bg-[#F3F4F6] text-[#4A5565] transition-colors hover:bg-[#DCFCE7] hover:text-[#16A34A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Next products"
           
            onClick={() => swiper?.slideNext()}
            className="flex cursor-pointer size-10 items-center justify-center rounded-full bg-[#F3F4F6] text-[#4A5565] transition-colors hover:bg-[#DCFCE7] hover:text-[#16A34A] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      {/* Products Slider */}
      <Swiper
        loop
        onSwiper={(instance) => {
          setSwiper(instance);
        }}
        slidesPerView={1}
        spaceBetween={16}
        watchOverflow
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="h-auto">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
