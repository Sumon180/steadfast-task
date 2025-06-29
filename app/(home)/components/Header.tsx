import React from "react";

export default function Header() {
  return (
    <header className="bg-foreground text-background sticky top-0 z-50 shadow-md">
      <div className="max-w-[1280px] mx-auto px-3 md:px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Search bar */}
        <div className="flex-1 mx-6 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-background text-foreground border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Actions */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/80">
            Cart
          </button>
          <button className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white">
            Profile
          </button>
        </div>
      </div>
    </header>
  );
}
