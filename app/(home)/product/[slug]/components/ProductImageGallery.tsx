"use client";

import Image from "next/image";
import React from "react";

interface ProductImageGalleryProps {
  thumbnail: string;
  images?: {
    [key: string]: {
      url: string;
    };
  };
}

export default function ProductImageGallery({
  thumbnail,
  images,
}: ProductImageGalleryProps) {
  if (!images || Object.keys(images).length === 0) return null;

  return (
    <div className="w-full lg:w-[380px] lg:min-w-[380px]">
      {/* Main Thumbnail */}
      <div className="relative h-[380px] w-full border rounded-md bg-gray-100">
        <Image
          src={thumbnail}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Thumbnail List */}
      <div className="flex items-center gap-3 mt-5">
        {Object.values(images).map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={`Product image ${index + 1}`}
            className="w-14 h-14 object-cover rounded border"
          />
        ))}
      </div>
    </div>
  );
}
