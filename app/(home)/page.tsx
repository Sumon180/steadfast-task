import { getProducts } from "@/lib/actions/getProducts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="max-w-[1280px] mx-auto px-3 md:px-4 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          href={`/product/${product.slug}`}
        >
          <div className="relative w-full h-60">
            <Image
              src={product.thumbnail}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {product.badges?.length > 0 && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {product.badges[0].name}
              </span>
            )}
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
              {product.name}
            </h2>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 line-through text-sm">
                ৳{product.regular_price}
              </span>
              <span className="text-lg text-primary font-bold">
                ৳{product.discount_price}
              </span>
            </div>

            <div className="mt-2 text-sm text-gray-500">
              {product.available_stock} in stock
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
