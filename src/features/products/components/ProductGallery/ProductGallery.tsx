
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import type { ProductGalleryProps } from "../../types/product-page.types";

export default function ProductGallery({ product }: ProductGalleryProps) {
  const images = Array.from(
    new Set([product.imageCover, ...product.images].filter(Boolean))
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Sync selected thumbnail when the carousel is swiped
  useEffect(() => {
    if (!carouselApi) return;

    const handleSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
    };

    handleSelect();
    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  const handleThumbnailClick = (index: number) => {
    carouselApi?.scrollTo(index);
    setSelectedIndex(index);
  };

  const selectedImage = images[selectedIndex] ?? product.imageCover;

  return (
    <section className="h-fit rounded-xl bg-white p-4 shadow-sm">
      {/* Main Image */}
      <div className="relative aspect-[344/469] w-full overflow-hidden rounded-lg bg-white">
        <Image
          src={selectedImage}
          alt={product.title}
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 100vw, 376px"
          className="object-contain"
        />
      </div>

      {/* Thumbnail Carousel */}
      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: "start",
          loop: false,
        }}
        className="mt-3 w-full"
      >
        <CarouselContent className="h-[143px] -ml-0 gap-0.5">
          {images.map((image, index) => {
            const isSelected = selectedIndex === index;

            return (
              <CarouselItem
                key={image}
                className="h-[133px] basis-[81px] pl-0 md:basis-[100px]"
              >
                <Button
                  type="button"
                  variant="ghost"
                  aria-label={`View product image ${index + 1}`}
                  aria-pressed={isSelected}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative h-full w-full rounded-none border-4 p-0 hover:bg-transparent ${
                    isSelected
                      ? "border-[#6A7282]"
                      : "border-transparent"
                  }`}
                >
                  <span className="relative block aspect-[92/125] w-full">
                    <Image
                      src={image}
                      alt={`${product.title} - image ${index + 1}`}
                      fill
                      unoptimized
                      sizes="100px"
                      className="object-cover"
                    />
                  </span>
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
