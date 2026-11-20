import ProductCard from "@/features/products/components/ProductCard/ProductCard";
import { getProducts } from "@/features/products/services/products.service";


export default async function HomeProducts() {
  const { data: products } = await getProducts();

  return (
    <section className="mx-auto w-full max-w-[1536px] px-4 py-8 md:px-8">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <span className="h-8 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]" />

        <h2 className="text-[30px] leading-9 font-bold text-[#1E2939]">
          Featured Products
        </h2>
      </div>

      {/* Products Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}