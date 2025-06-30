"use client";

import useCartStore from "@/hooks/useCartStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { headerMenus } from "@/lib/data";
import Sidebar from "./Sidebar";
import { Category } from "@/types";

export default function Header({
  categories,
}: {
  categories: Category[] | null;
}) {
  const {
    cart: { items },
  } = useCartStore();

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-foreground text-background px-3">
        <div className="content_wrapper flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href={"/"}>
              <Image
                src={"/logos/falcon-logo.svg"}
                alt={"logo"}
                width={400}
                height={300}
                className="w-36 h-7"
              />
            </Link>
          </div>

          {/* Search bar */}
          <div className="w-full max-w-5/12 mt-4 flex items-center overflow-hidden rounded border border-transparent focus-within:ring-1 focus-within:ring-primary">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full px-3 py-2 bg-background text-foreground outline-none"
            />
            <button className="bg-primary text-white px-4 py-2 hover:bg-primary/90 transition-colors">
              <Search />
            </button>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Link href={"/cart"} className="p-2 relative">
              <MdOutlineShoppingCart size={22} />
              {items.length > 0 && (
                <Badge
                  className="absolute top-0 right-0 h-5 min-w-5 rounded-full p-0 font-mono tabular-nums"
                  variant="destructive"
                >
                  {items.length}
                </Badge>
              )}
            </Link>
            <button className="p-2">
              <LuUser size={22} />
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 bg-white shadow">
        <div className="content_wrapper py-2 flex items-center justify-between">
          <div className="flex items-center">
            <Sidebar categories={categories} />
            <div className="lg:flex items-center flex-wrap gap-3 overflow-hidden hidden">
              {headerMenus.map((menu) => (
                <Link
                  href={menu.href}
                  key={menu.href}
                  className="header-button !p-2 leading-3 hover:underline"
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="items-center gap-3 hidden lg:flex">
            <div className="flex items-center gap-1">
              <Image
                src={"/icons/content.svg"}
                alt={"logo"}
                width={400}
                height={300}
                className="w-5 h-5"
              />
              <span>Track Order</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/icons/content-customer.svg"}
                alt={"logo"}
                width={400}
                height={300}
                className="w-5 h-5"
              />
              <span>Help Center</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/icons/Animation-751095353491.svg"}
                alt={"logo"}
                width={400}
                height={300}
                className="w-5 h-5"
              />
              <span>Sell With Us</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
