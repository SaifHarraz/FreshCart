"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import backgroundImage from "@/assets/images/home-slider-1.d79601a8.png";

import { homeSliderSlides } from "./data";

export default function HomeSlider() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section
      aria-label="Featured promotions"
      className="relative h-[400px] w-full overflow-hidden"
    >
      {/* Slides */}
      <Swiper
  modules={[Pagination]}
  onSwiper={setSwiper}
  loop
  pagination={{
    clickable: true,
    bulletClass: "home-slider-bullet",
    bulletActiveClass: "home-slider-bullet-active",
  
  }}
  className="home-slider h-full w-full"
>
        {/* Slides */}
        {homeSliderSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="h-full">
            {({ isActive }) => (
              <div className="relative flex h-[400px] w-full items-center">
                {/* Background image */}
                <Image
                  src={backgroundImage}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                />

                {/* Green overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C950]/90 to-[#05DF72]/50" />

                {/* Slide content */}
                <div
                  aria-hidden={!isActive}
                  className={`relative z-10 mx-auto flex h-full w-full max-w-[1536px] flex-col justify-center gap-4 px-8 transition-all duration-700 md:px-[102px] lg:px-4 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Heading */}
                  <h2 className="max-w-[384px] text-[30px] leading-9 font-bold text-white">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base leading-6 font-medium text-white">
                    {slide.description}
                  </p>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={slide.primaryAction.href}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 bg-white px-[26px] py-[10px] text-base leading-6 font-semibold transition-transform hover:scale-105"
                      style={{ color: slide.primaryAction.textColor }}
                    >
                      {slide.primaryAction.label}
                    </Link>

                    <Link
                      href={slide.secondaryAction.href}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 bg-transparent px-[26px] py-[10px] text-base leading-6 font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      {slide.secondaryAction.label}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous button */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => swiper?.slidePrev()}
        className="absolute cursor-pointer top-1/2 left-4 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#00C950] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white md:flex"
      >
        <ChevronLeft className="size-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => swiper?.slideNext()}
        className="absolute top-1/2 cursor-pointer right-4 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#00C950] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white md:flex"
      >
        <ChevronRight className="size-6" />
      </button>

     
    </section>
  );
}
