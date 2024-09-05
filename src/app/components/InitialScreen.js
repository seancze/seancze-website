"use client";

import { useState, useEffect } from "react";

export default function InitialScreen({ onArrowClick }) {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">Sean Chen</h1>
      <h2 className="text-xl md:text-3xl mb-8">
        Software Engineer | Entrepreneur
      </h2>
      {showArrow && (
        <button
          onClick={onArrowClick}
          className="animate-bounce"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-10 h-10 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      )}
    </div>
  );
}
