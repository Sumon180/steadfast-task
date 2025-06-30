"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import useCartStore from "@/hooks/useCartStore";

export default function CartProducts() {
  const {
    cart: { items },
    updateItem,
    removeItem,
    clearCart,
  } = useCartStore();

  // Track selected item IDs
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    // Remove selected items that are no longer in cart
    setSelectedItems((prev) =>
      prev.filter((id) => items.some((i) => i.clientId === id))
    );
  }, [items]);

  const isAllSelected =
    selectedItems.length === items.length && items.length > 0;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.clientId));
    }
  };

  const toggleSelectItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleQuantityChange = (id: string, newQty: number, stock: number) => {
    if (newQty < 1 || newQty > stock) return;
    updateItem(id, newQty);
  };

  if (items.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">Your cart is empty.</p>
    );
  }

  return (
    <div className="w-full bg-white rounded-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-5">
        <p className="text-3xl font-medium">My Cart ({items.length})</p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAll}
              className="size-4 accent-primary"
            />
            <label>Select All</label>
          </div>
          <button onClick={() => clearCart()}>Clear All</button>
        </div>
      </div>
      <Separator />
      <div className="p-5">
        {items.map((item) => (
          <div key={item.clientId}>
            <div className="flex items-center gap-3 bg-gray-100 p-2">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.clientId)}
                onChange={() => toggleSelectItem(item.clientId)}
                className="size-4 accent-primary"
              />
              <p className="leading-3">BD FASHION HOUSE</p>
            </div>
            <div className="p-2">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.clientId)}
                  onChange={() => toggleSelectItem(item.clientId)}
                  className="size-4 min-w-4 accent-primary"
                />
                <div className="w-full flex flex-col lg:flex-row items-start gap-2">
                  <div className="w-full lg:w-24 lg:min-w-24 lg:h-24 rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                      <p className="font-medium">{item.name}</p>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold">
                          ৳{" "}
                          {(
                            parseFloat(item.discount_price) * item.quantity
                          ).toFixed(2)}
                        </span>
                        <span className="text-gray-500 line-through">
                          ৳{" "}
                          {(
                            parseFloat(item.regular_price) * item.quantity
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm my-2">
                      Color: red; Size: M
                    </p>
                    <div className="flex items-center max-lg:justify-between gap-3">
                      <div className="max-w-40 flex items-center gap-3 border p-1 rounded-full">
                        <button
                          className="w-7 min-w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center"
                          onClick={() =>
                            handleQuantityChange(
                              item.clientId,
                              item.quantity - 1,
                              item.stock
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              item.clientId,
                              parseInt(e.target.value) || 1,
                              item.stock
                            )
                          }
                          min={1}
                          max={item.stock}
                          className="w-full text-center outline-none bg-transparent"
                        />
                        <button
                          className="w-7 min-w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center"
                          onClick={() =>
                            handleQuantityChange(
                              item.clientId,
                              item.quantity + 1,
                              item.stock
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.clientId)}
                        className="text-gray-600 p-2 hover:bg-red-500 hover:text-white rounded-full"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
