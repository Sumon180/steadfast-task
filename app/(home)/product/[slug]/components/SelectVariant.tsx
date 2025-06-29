"use client";

import { Variations } from "@/lib/actions/getProductBySlug";
import Image from "next/image";
import React, { useState } from "react";

export default function SelectVariant({
  variations,
}: {
  variations: Variations[];
}) {
  const [selectedVariant, setSelectedVariant] = useState<Variations | null>(
    variations[0]
  );
  const [selectedSize, setSelectedSize] = useState<string | null>("XS");

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <>
      {variations.length > 0 && (
        <>
          <p className="mb-2 font-medium">
            <span className="text-gray-600">Available Color:</span>
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {variations.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedVariant(item)}
                className={`w-14 h-14 rounded-sm border overflow-hidden ${
                  selectedVariant?.id === item.id
                    ? "ring-2 ring-primary"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.image}
                  alt={"variant image"}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </>
      )}

      <div className="space-y-2 mt-5">
        <div>
          <span className="text-gray-600">Select Size:</span>{" "}
          {selectedSize || "Select"}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 border rounded-sm flex items-center justify-center ${
                selectedSize === size
                  ? "ring-2 ring-primary"
                  : "hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
