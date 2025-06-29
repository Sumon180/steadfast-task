"use client";

import React, { useState } from "react";

export default function AddToCart() {
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
    <div className="mt-5">
      <p className="text-sm mb-1">Quantity</p>
      <div className="max-w-56 flex items-center border p-1 rounded-full">
        <button
          className="w-8 min-w-8 h-8 bg-gray-100 rounded-full"
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
          className="w-8 min-w-8 h-8 bg-gray-100 rounded-full"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <button
        className="w-full max-w-md mt-6 bg-primary text-white px-6 py-2 font-medium rounded-sm hover:bg-primary transition-all"
        onClick={() => alert(`Added ${quantity} item(s) to cart.`)}
      >
        Add to Cart
      </button>
    </div>
  );
}
