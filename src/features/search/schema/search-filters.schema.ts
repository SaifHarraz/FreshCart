import { z } from "zod";

export const searchFiltersSchema = z
  .object({
    minPrice: z.string(),
    maxPrice: z.string(),
    category: z.string(),
    brand: z.string(),
  })
  .superRefine((filters, ctx) => {
    const min = filters.minPrice === "" ? null : Number(filters.minPrice);
    const max = filters.maxPrice === "" ? null : Number(filters.maxPrice);

    if (min !== null && (!Number.isFinite(min) || min < 0)) {
      ctx.addIssue({
        code: "custom",
        path: ["minPrice"],
        message: "Enter a valid minimum price.",
      });
    }

    if (max !== null && (!Number.isFinite(max) || max < 0)) {
      ctx.addIssue({
        code: "custom",
        path: ["maxPrice"],
        message: "Enter a valid maximum price.",
      });
    }

    if (
      min !== null &&
      max !== null &&
      Number.isFinite(min) &&
      Number.isFinite(max) &&
      min > max
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["maxPrice"],
        message: "Maximum price must be greater than or equal to minimum price.",
      });
    }
  });