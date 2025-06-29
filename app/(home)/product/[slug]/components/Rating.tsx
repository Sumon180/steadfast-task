import { Star } from "lucide-react";
import React from "react";

export default function Rating() {
  const fullStars = Math.floor(5);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className={`w-${6} h-${6} fill-[#EAB308] text-[#EAB308]`}
        />
      ))}
    </>
  );
}
