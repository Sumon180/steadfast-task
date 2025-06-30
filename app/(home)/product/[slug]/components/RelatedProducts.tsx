"use client";

import ProductCard from "@/components/ProductCard";
import { fetchRelatedProducts } from "@/lib/actions/getRelatedProducts";
import { Product } from "@/types";
import { useEffect, useState } from "react";

interface Props {
  categoryId: number;
  currentSlug: string;
}

export default function RelatedProducts({ categoryId, currentSlug }: Props) {
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchRelatedProducts(categoryId, currentSlug);
      setRelated(data);
    };
    getProducts();
  }, [categoryId, currentSlug]);

  return (
    <div className="md:px-4 px-3 py-3">
      <div className="content_wrapper">
        <p className="text-2xl font-semibold mb-2">Related Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {related.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No related products found.
            </p>
          ) : (
            related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
