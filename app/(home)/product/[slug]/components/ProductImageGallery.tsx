"use client";

import Image from "next/image";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Return early after the hook is called
  if (!images || Object.keys(images).length === 0) return null;

  const imageList = Object.values(images);
  const displayImage =
    hoveredIndex !== null ? imageList[hoveredIndex].url : thumbnail;

  return (
    <div className="w-full lg:w-[380px] lg:min-w-[380px]">
      {/* Main Image Display */}
      <Zoom>
        <div className="relative h-[380px] w-full border rounded-md bg-gray-100">
          <Image
            src={displayImage}
            alt="product image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
          />
        </div>
      </Zoom>

      {/* Thumbnails */}
      <div className="flex items-center gap-3 mt-5">
        {imageList.map((img, index) => {
          const isActive = index === hoveredIndex;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              className={`cursor-pointer w-14 h-14 rounded border overflow-hidden transition 
                ${
                  isActive
                    ? "border-primary ring-2 ring-primary"
                    : "border-gray-300"
                }
              `}
              aria-current={isActive ? "true" : undefined}
              role="button"
            >
              <Image
                src={img.url}
                alt={`Product image ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
