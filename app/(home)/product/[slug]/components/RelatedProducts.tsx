"use client";

import { fetchRelatedProducts } from "@/lib/actions/getRelatedProducts";
import { SingleProduct } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  categoryId: number;
  currentSlug: string;
}

export default function RelatedProducts({ categoryId, currentSlug }: Props) {
  const [related, setRelated] = useState<SingleProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchRelatedProducts(categoryId, currentSlug);
      setRelated(data);
    };
    getProducts();
  }, [categoryId, currentSlug]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {related.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No related products found.
        </p>
      ) : (
        related.map((product) => (
          <div key={product.id} className="border p-3 rounded shadow">
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={200}
              height={200}
              className="h-32 w-full object-cover rounded"
            />
            <h3 className="font-semibold mt-2 text-sm">{product.name}</h3>
            <p className="text-gray-500 text-xs">
              Price:{" "}
              {product.product_detail.discount_price ||
                product.product_detail.regular_price}
            </p>
            <p className="text-yellow-500 text-xs">
              ⭐ {product.rating_avg} ({product.rating_count})
            </p>
          </div>
        ))
      )}
    </div>
  );
}
