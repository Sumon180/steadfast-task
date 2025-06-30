"use client";

import React from "react";
import CartProducts from "./CartProducts";
import OrderSummery from "./OrderSummery";
import useCartStore from "@/hooks/useCartStore";

export default function Cart() {
  const {
    cart: { items },
  } = useCartStore();

  if (items.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">Your cart is empty.</p>
    );
  }

  return (
    <div className="content_wrapper flex flex-col lg:flex-row items-start justify-between gap-8">
      <CartProducts />
      <OrderSummery />
    </div>
  );
}
