"use client";

import { useEffect, useState } from "react";

// Konami Code sequence: up up down down left right left right b a
const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export const useEasterEggs = (isMagicMode, onDisableMagicMode) => {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showLumos, setShowLumos] = useState(false);

  // Konami Code detection
  useEffect(() => {
    if (!isMagicMode) {
      setKonamiIndex(0);
      return;
    }

    const handleKeyDown = (e) => {
      if (e.code === KONAMI_CODE[konamiIndex]) {
        const newIndex = konamiIndex + 1;
        setKonamiIndex(newIndex);

        if (newIndex === KONAMI_CODE.length) {
          // Trigger Lumos effect
          setShowLumos(true);
          setTimeout(() => setShowLumos(false), 500);
          setKonamiIndex(0);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMagicMode, konamiIndex]);

  // Console secret phrase: "mischief managed"
  useEffect(() => {
    if (!isMagicMode) return;

    // Create the mischief managed function on window
    window.mischiefManaged = () => {
      console.log(
        "%c✨ Mischief Managed! ✨",
        "color: #D4AF37; font-size: 20px; font-weight: bold;",
      );
      onDisableMagicMode?.();
    };

    // Also listen for the phrase typed in console
    console.log(
      "%c🧙 Magic Mode Active! Type window.mischiefManaged() to close the map...",
      "color: #D4AF37; font-size: 14px;",
    );

    return () => {
      delete window.mischiefManaged;
    };
  }, [isMagicMode, onDisableMagicMode]);

  return {
    showLumos,
  };
};
