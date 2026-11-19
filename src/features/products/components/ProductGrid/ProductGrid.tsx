import { ProductGridProps } from "../../types/product.types";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products }: ProductGridProps) {
  return (
<div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6">
          {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}