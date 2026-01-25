"use client";

import { useEffect, useState } from "react";

const FloatingDot = ({ delay, size, x, y }) => (
  <div
    className="absolute rounded-full bg-white/20 animate-float"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      animationDelay: `${delay}s`,
    }}
  />
);

const MagicSparkle = ({ delay, x, y }) => (
  <div
    className="absolute w-1 h-1 rounded-full bg-magic-gold animate-twinkle"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animationDelay: `${delay}s`,
    }}
  />
);

export const Hero = ({ onArrowClick, isMagicMode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const floatingDots = [
    { delay: 0, size: 8, x: 10, y: 20 },
    { delay: 0.5, size: 12, x: 85, y: 15 },
    { delay: 1, size: 6, x: 70, y: 60 },
    { delay: 1.5, size: 10, x: 15, y: 70 },
    { delay: 2, size: 8, x: 90, y: 80 },
    { delay: 0.3, size: 14, x: 30, y: 40 },
    { delay: 0.8, size: 6, x: 60, y: 25 },
    { delay: 1.2, size: 10, x: 45, y: 75 },
  ];

  const magicSparkles = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div
      id="home"
      className={`h-screen flex flex-col justify-center items-center relative overflow-hidden
        ${isMagicMode ? "bg-magic-bg-primary" : ""}
      `}
      // credits: https://codepen.io/P1N2O/pen/pyBNzX
      style={
        !isMagicMode
          ? {
              backgroundImage: `linear-gradient(-45deg,
          var(--orange-yellow-crayola),
          var(--paradise-pink),
          var(--vivid-sky-blue),
          var(--caribbean-green))`,
              backgroundSize: "400% 400%",
              animation: "gradient-shift 15s ease infinite",
            }
          : undefined
      }
    >
      {/* Background elements */}
      {isMagicMode ? (
        <div className="absolute inset-0 magic-starfield">
          {magicSparkles.map((sparkle, i) => (
            <MagicSparkle key={i} {...sparkle} />
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none">
          {floatingDots.map((dot, i) => (
            <FloatingDot key={i} {...dot} />
          ))}
        </div>
      )}

      <div className="relative z-10 text-center px-4">
        <h1
          className={`text-6xl md:text-8xl font-bold mb-4 opacity-0-initial
            ${isLoaded ? "animate-fade-in-up" : ""}
            ${isMagicMode ? "text-parchment drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] font-halloween" : "text-black"}
          `}
        >
          Sean Chen
        </h1>

        <h2
          className={`text-xl md:text-3xl mb-12 opacity-0-initial
            ${isLoaded ? "animate-fade-in-up-delay-1" : ""}
            ${isMagicMode ? "text-magic-gold font-halloween" : "text-black"}
          `}
        >
          {isMagicMode
            ? "Tech Wizard | Entrepreneur"
            : "Software Engineer | Entrepreneur"}
        </h2>
      </div>

      <button
        onClick={onArrowClick}
        className={`md:absolute md:bottom-8 transition-all duration-300 hover:scale-110 group
          ${isMagicMode ? "text-magic-gold hover:text-magic-amber" : "text-white hover:text-white"}
        `}
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className={`text-sm font-medium opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity
              ${isMagicMode ? "text-magic-gold-muted" : "text-white"}
            `}
          >
            Scroll down
          </span>
          <div className="relative">
            {/* Mouse shape */}
            <div
              className={`w-6 h-10 rounded-full border-2 flex justify-center
                ${isMagicMode ? "border-magic-gold" : "border-white"}
              `}
            >
              {/* Scroll dot */}
              <div
                className={`w-1.5 h-3 rounded-full mt-2 animate-scroll-indicator
                  ${isMagicMode ? "bg-magic-gold" : "bg-white"}
                `}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Magic mode decorative frame at all four corners */}
      {isMagicMode && (
        <>
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-magic-gold opacity-50" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-magic-gold opacity-50" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-magic-gold opacity-50" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-magic-gold opacity-50" />
        </>
      )}
    </div>
  );
};
