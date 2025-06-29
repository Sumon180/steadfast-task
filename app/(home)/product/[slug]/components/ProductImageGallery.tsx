"use client";

import Image from "next/image";
import React from "react";

export default function ProductImageGallery({
  thumbnail,
}: {
  thumbnail: string;
}) {
  return (
    <div className="w-full lg:w-[380px] lg:min-w-[380px]">
      <div className="relative h-[380px] w-full border rounded-md bg-gray-100">
        <Image
          src={thumbnail}
          alt={"product image"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-lg"
        />
      </div>
      {/* {images && (
        <div className=" flex flex-wrap items-center gap-3 mt-5">
          {images?.map((image, i) => (
            <div key={i}>
              <Image
                src={image.url}
                alt="image"
                width={100}
                height={100}
                className="w-10 h-10"
              />
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
