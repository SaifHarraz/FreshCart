import { notFound } from "next/navigation";
import { getProductById } from "@/features/products/services/products.service";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-[1536px] px-4 py-8">
      <h1 className="text-2xl font-bold">{product.title}</h1>

      <p className="mt-2 text-lg font-semibold">
        {product.price} EGP
      </p>

      <p className="mt-4 text-muted-foreground">
        {product.description}
      </p>
    </main>
  );
}
