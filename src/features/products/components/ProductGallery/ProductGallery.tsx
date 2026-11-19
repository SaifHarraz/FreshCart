"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { ProductGalleryProps } from "../../types/product-page.types";

export default function ProductGallery({ product }: ProductGalleryProps) {
  const images = Array.from(
    new Set([product.imageCover, ...product.images].filter(Boolean))
  );

  const [selectedImage, setSelectedImage] = useState(product.imageCover);

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

      {/* Thumbnails */}
      <div className="mt-3 flex gap-0.5 overflow-x-auto">
        {images.map((image, index) => {
          const isSelected = selectedImage === image;

          return (
            <Button
              key={image}
              type="button"
              variant="ghost"
              size="sm"
              aria-label={`View product image ${index + 1}`}
              aria-pressed={isSelected}
              onClick={() => setSelectedImage(image)}
              className={`relative h-auto w-[81px] shrink-0 rounded-none border-4 p-0 md:w-[100px] ${
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
          );
        })}
      </div>
    </section>
  );
}
