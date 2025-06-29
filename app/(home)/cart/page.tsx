import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CartProducts from "./components/CartProducts";

export default function page() {
  return (
    <>
      <div className="px-3">
        <div className="content_wrapper flex items-center gap-1 text-sm">
          <Link href={"/"}>Home</Link>{" "}
          <IoIosArrowForward className="text-gray-500" />
          <Link href={""} className="text-gray-500">
            My Cart
          </Link>
        </div>
      </div>
      <div className="px-3">
        <div className="content_wrapper flex flex-col lg:flex-row items-start justify-between gap-8">
          <CartProducts />
          <div className="w-full lg:w-[418px] lg:min-w-[418px]">
            <div className="bg-white p-5 rounded-sm">
              <p className="text-2xl mb-3">Order Summery</p>
              <div className="flex items-center justify-between text-gray-600">
                <p>Price (3 items)</p>
                <p>৳00</p>
              </div>
              <div className="flex items-center justify-between text-gray-600 mt-3">
                <p>Shipping fee</p>
                <p>to be added</p>
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
                <p>৳00</p>
              </div>
              <button className="w-full max-w-md mt-6 bg-primary text-white px-6 py-2 font-medium rounded-sm hover:bg-primary transition-all">
                Proceed to Checkout
              </button>
            </div>
            <div className="flex items-start gap-1.5 mt-2">
              <span className="pt-0.5">
                <input
                  type="checkbox"
                  name="select-all"
                  id="select-all"
                  className="size-4 min-w-4"
                />
              </span>
              <p className="text-sm text-gray-700">
                I have read and agree to the Terms and Conditions, Privacy
                Policy and Refund and Return Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
