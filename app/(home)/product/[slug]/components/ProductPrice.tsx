import React from "react";

export default function ProductPrice({
  price,
  listPrice = "0",
}: {
  price: string;
  listPrice?: string;
}) {
  return (
    <div className="flex items-start gap-3 mt-4">
      <p className="text-primary text-2xl font-bold">৳{listPrice}</p>
      <p className="text-gray-400 line-through text-sm">৳{price}</p>
    </div>
  );
}
