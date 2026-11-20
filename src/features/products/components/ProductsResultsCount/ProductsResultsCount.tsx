import { ProductsResultsCountProps } from "../../types/product-page.types";

export default function ProductsResultsCount({
  total,
}: ProductsResultsCountProps) {
  return (
    <p className="text-sm leading-5 text-[#6A7282]">
      Showing {total} products
    </p>
  );
}