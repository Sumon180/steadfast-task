// app/page.tsx or app/(routes)/page.tsx
import { getProducts } from "@/lib/actions/getProducts";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await getProducts();

  if (!products) return <div>Product not found</div>;

  return (
    <div className="md:px-4 px-3 py-3">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
