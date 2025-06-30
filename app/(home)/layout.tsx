import React, { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getCategories } from "@/lib/actions/getCategories";
import { Toaster } from "sonner";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header categories={categories} />
      <Toaster />
      {children}
      <Footer />
    </div>
  );
}
