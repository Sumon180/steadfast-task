"use client";

import React, { useState } from "react";
import useCartStore from "@/hooks/useCartStore";
import { OrderItem } from "@/types";
import { toast } from "sonner";

interface AddToCartProps {
  item: OrderItem;
}

export default function AddToCart({ item }: AddToCartProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const addItem = useCartStore((state) => state.addItem);

  const formatQuantity = (qty: number) => qty.toString().padStart(2, "0");

  const handleAddToCart = async () => {
    try {
      await addItem(item, quantity);
      toast.success(`Added ${quantity} item(s) to cart.`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast(err.message);
      } else {
        toast.error("Error adding to cart.");
      }
    }
  };

  return (
    <div className="mt-5">
      <p className="text-sm mb-1">Quantity</p>
      <div className="max-w-56 flex items-center gap-3 border p-1 rounded-full">
        <button
          className="w-8 min-w-8 h-8 bg-gray-100 rounded-full"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <input
          type="text"
          value={formatQuantity(quantity)}
          onChange={(e) =>
            setQuantity(Math.max(1, parseInt(e.target.value) || 1))
          }
          className="w-full text-center outline-none bg-transparent"
        />
        <button
          className="w-8 min-w-8 h-8 bg-gray-100 rounded-full"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      <button
        className="w-full mt-6 bg-primary text-white px-6 py-2 font-medium rounded-sm hover:bg-primary transition-all"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
