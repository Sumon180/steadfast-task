"use client";

import React from "react";
import useCartStore from "@/hooks/useCartStore";

export default function OrderSummery() {
  const {
    cart: { items, itemsPrice, totalPrice },
  } = useCartStore();

  return (
    <div className="w-full lg:w-[418px] lg:min-w-[418px]">
      <div className="bg-white p-5 rounded-sm">
        <p className="text-2xl mb-3">Order Summery</p>
        <div className="flex items-center justify-between text-gray-600">
          <p>Price ({items.length} items)</p>
          <p>৳{itemsPrice.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between text-gray-600 mt-3">
          <p>Shipping fee</p>
          <p className="text-sm text-primary">to be added</p>
        </div>
        <div className="mt-4 flex items-center overflow-hidden rounded border border-gray-300 focus-within:ring-1 focus-within:ring-primary">
          <input
            type="text"
            placeholder="Store / Falcon coupon"
            className="w-full px-3 py-2 bg-background text-foreground outline-none"
          />
          <button className="bg-primary text-white px-4 py-2 hover:bg-primary/90 transition-colors">
            Apply
          </button>
        </div>

        <div className="border-t border-dashed my-3" />
        <div className="flex items-center justify-between text-gray-600 mt-3 font-medium">
          <p>Sub total</p>
          <p>৳ {totalPrice.toFixed(2)}</p>
        </div>
        <button className="w-full max-w-md mt-6 bg-primary text-white px-6 py-2 font-medium rounded-sm hover:bg-primary transition-all">
          Proceed to Checkout
        </button>
      </div>
      <div className="flex items-start gap-1.5 mt-2">
        <span className="pt-0.5">
          <input
            type="checkbox"
            name="condition"
            id="condition"
            className="size-4 min-w-4 accent-primary"
          />
        </span>
        <label htmlFor="condition" className="text-sm text-gray-700">
          I have read and agree to the Terms and Conditions, Privacy Policy and
          Refund and Return Policy
        </label>
      </div>
    </div>
  );
}
