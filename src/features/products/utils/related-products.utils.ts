
import type { Product } from "../types/product.types";

function shuffleProducts(products: Product[]) {
  const shuffled = [...products];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function selectRelatedProducts(
  currentProduct: Product,
  categoryProducts: Product[]
): Product[] {
  const currentSubcategoryIds = new Set(
    currentProduct.subcategory.map((item) => item._id)
  );

  const uniqueProducts = Array.from(
    new Map(
      categoryProducts
        .filter(
          (item) =>
            item._id !== currentProduct._id &&
            item.category._id === currentProduct.category._id
        )
        .map((item) => [item._id, item])
    ).values()
  );

  const sameSubcategory = uniqueProducts.filter((item) =>
    item.subcategory.some((subcategory) =>
      currentSubcategoryIds.has(subcategory._id)
    )
  );

  // Keep every same-subcategory product, even if there are more than 8.
  if (sameSubcategory.length >= 8) {
    return sameSubcategory;
  }

  // Only products from other subcategories in the same category.
  const otherSubcategories = uniqueProducts.filter(
    (item) =>
      item.subcategory.length > 0 &&
      !item.subcategory.some((subcategory) =>
        currentSubcategoryIds.has(subcategory._id)
      )
  );

  const shuffledFallback = shuffleProducts(otherSubcategories);

  const remainingSlots = 8 - sameSubcategory.length;

  return [
    ...sameSubcategory,
    ...shuffledFallback.slice(0, remainingSlots),
  ];
}
