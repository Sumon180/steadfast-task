import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <div className="max-w-[1280px] mx-auto px-3 md:px-4 py-3">{children}</div>
      <Footer />
    </div>
  );
}
