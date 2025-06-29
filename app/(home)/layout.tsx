import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
