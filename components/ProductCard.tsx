// components/ProductCard.tsx
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  regular_price: string;
  discount_price: string;
  available_stock: number;
  badges?: { name: string }[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      key={product.id}
      href={`/product/${product.slug}`}
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative w-full h-60">
        <Image
          src={product.thumbnail}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badges?.length && (
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
  );
}
