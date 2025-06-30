import { SearchIcon } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full flex items-center overflow-hidden rounded border border-transparent focus-within:ring-1 focus-within:ring-primary">
      <input
        type="text"
        placeholder="Search for anything..."
        className="w-full px-3 py-2 bg-background text-foreground outline-none"
      />
      <button className="bg-primary text-white px-4 py-2 hover:bg-primary/90 transition-colors">
        <SearchIcon />
      </button>
    </div>
  );
}
