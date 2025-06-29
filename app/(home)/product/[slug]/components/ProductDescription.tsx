"use client";

import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import clsx from "clsx";

export default function ProductDescription() {
  const [showFull, setShowFull] = useState(false);

  const toggleDescription = () => setShowFull((prev) => !prev);

  const fullText = `Just as a book is judged by its cover, the first thing you notice when
    you pick up a modern smartphone is the display. Nothing surprising,
    because advanced technologies allow you to practically level the
    display frames and cutouts for the front camera and speaker, leaving
    no room for bold design solutions. And how good that in such realities
    Apple everything is fine with displays. Advanced technologies allow
    you to practically level the display frames and cutouts for the front
    camera and speaker, leaving no room for bold design solutions. And how
    good that in such realities Apple everything It is a long established
    fact that a reader will be distracted by the readable content of a
    page when looking at its layout. The point of using Lorem Ipsum is
    that it has a more-or-less normal distribution of letters, as opposed
    to using 'Content here, content here', making it look like readable
    English. Many desktop publishing packages and web page editors now use
    Lorem Ipsum as their default model text, and a search for 'lorem
    ipsum' will uncover many web sites still in their infancy. Various
    versions have evolved over the years, sometimes by accident, sometimes
    on purpose (injected humour and the like).`;

  return (
    <div className="content_wrapper">
      <div className="bg-white max-w-3xl p-5 rounded-sm relative overflow-hidden">
        <p className="text-lg font-medium mb-2">Description</p>
        <div
          className={clsx(
            "text-gray-700 leading-relaxed transition-all duration-300 ease-in-out text-sm",
            !showFull && "line-clamp-none max-h-[100px] overflow-hidden"
          )}
        >
          {fullText}
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
