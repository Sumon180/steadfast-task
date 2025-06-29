"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import clsx from "clsx";

export default function ProductSpecification() {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => setShowFull((prev) => !prev);

  return (
    <div className="content_wrapper">
      <div className="bg-white max-w-3xl p-5 rounded-sm relative overflow-hidden">
        <p className="text-lg font-medium mb-2">Specification</p>
        <p className="mb-1">Sharp FP-J30E-B Air Purifier</p>
        <div
          className={clsx(
            "text-gray-700 leading-relaxed transition-all duration-300 ease-in-out",
            !showFull && "line-clamp-none max-h-[100px] overflow-hidden"
          )}
        >
          <ul className="text-sm list-disc ml-4">
            <li>GMP Cosmetic Good Manufacturing Practice</li>
            <li>Cruelty Free</li>
            <li>No Animal Testing</li>
            <li>Zenpia Global Standard</li>
            <li>Comply with Global Standard</li>
          </ul>
        </div>

        {/* Fade effect */}
        {!showFull && (
          <div className="absolute bottom-14 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}

        <button
          onClick={toggleDescription}
          className="flex items-center justify-center w-full mt-5 font-medium"
        >
          {showFull ? "See Less" : "See More"}{" "}
          {showFull ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </div>
  );
}
