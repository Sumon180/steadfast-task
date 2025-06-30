import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Cart from "./components/Cart";

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
        <Cart />
      </div>
    </>
  );
}
