import ProductCard from "@/features/products/components/ProductCard/ProductCard";
import { getProducts } from "@/features/products/services/products.service";
import HomeSectionHeader from "../HomeSectionHeader/HomeSectionHeader";


export default async function HomeProducts() {
  const { data: products } = await getProducts();

  return (
    <section className="mx-auto w-full max-w-[1536px] px-4 py-8 md:px-8">
      {/* Section Header */}
      <HomeSectionHeader title="Featured Products" />

      {/* Products Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}