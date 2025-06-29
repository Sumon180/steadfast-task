"use client";

import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function CartProducts() {
  const [quantity, setQuantity] = useState(1);

  const formatQuantity = (qty: number) => {
    return qty.toString().padStart(2, "0");
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(0);
    }
  };

  return (
    <div className="w-full bg-white rounded-sm">
      <div className="flex items-center justify-between p-5">
        <p className="text-3xl font-medium">My Cart (3)</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="select-all"
              id="select-all"
              className="size-4"
            />
            <label htmlFor="select-all">Select All</label>
          </div>
          <button>Clear All</button>
        </div>
      </div>
      <Separator />
      <div className="p-5">
        <div className="flex items-center gap-3 bg-gray-100 p-2">
          <input
            type="checkbox"
            name="select-all"
            id="select-all"
            className="size-4"
          />
          <p>BD FASHION HOUSE</p>
        </div>
        <div className="p-2">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="select-all"
              id="select-all"
              className="size-4 min-w-4"
            />
            <div className="w-full flex flex-col lg:flex-row items-start gap-2">
              <div className="w-full lg:w-24 lg:min-w-24 lg:h-24 rounded-md overflow-hidden">
                <Image
                  src={"/images/image-543.png"}
                  alt={"image"}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <p className="font-medium">
                    Bestway Brand Air Inflatable 5 In 1 semi Double Sofa{" "}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">৳1139</span>
                    <span className="text-gray-500 line-through">৳1139</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm my-2">
                  Color: red; Size: M
                </p>
                <div className="flex items-center max-lg:justify-between gap-3">
                  <div className="max-w-40 flex items-center border p-1 rounded-full">
                    <button
                      className="w-7 min-w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center"
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={formatQuantity(quantity)}
                      onChange={handleInputChange}
                      className="w-full text-center outline-none bg-transparent"
                    />
                    <button
                      className="w-7 min-w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center"
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                  <button className="text-gray-600 p-2 hover:bg-red-500 hover:text-white rounded-full">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
