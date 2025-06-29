import Image from "next/image";
import React from "react";
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-foreground text-background sticky top-0 z-50 shadow-md px-3">
      <div className="content_wrapper flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image
            src={"/images/logo.png"}
            alt={"logo"}
            width={400}
            height={300}
            className="w-36 h-7"
          />
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-6 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-background text-foreground border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button className="p-2">
            <MdOutlineShoppingCart size={22} />
          </button>
          <button className="p-2">
            <LuUser size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
