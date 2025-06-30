"use client";

import Image from "next/image";
import React, { useState } from "react";

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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const imageList = Object.values(images);

  const displayImage =
    hoveredIndex !== null ? imageList[hoveredIndex].url : thumbnail;

  return (
    <div className="w-full lg:w-[380px] lg:min-w-[380px]">
      {/* Main Image Display */}
      <div className="relative h-[380px] w-full border rounded-md bg-gray-100">
        <Image
          src={displayImage}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-2 mt-5">
        {imageList.map((img, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            className="w-14 h-14 cursor-pointer p-1 rounded border"
          >
            <Image
              src={img.url}
              alt={`Product image ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
