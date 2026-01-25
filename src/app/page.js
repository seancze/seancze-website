"use client";

import { useState, useCallback } from "react";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Navbar } from "@/app/components/Navbar";
import Typewriter from "typewriter-effect";
import { useEasterEggs } from "@/app/hooks/useEasterEggs";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMagicMode, setIsMagicMode] = useState(false);
  // since the overlay is visible by default, the showTypewriter state ensures that the overlay is only shown when magic mode button is clicked
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [hasShownTypewriter, setHasShownTypewriter] = useState(false);
  // the overlay state ensures that the overlay persists for a brief moment after the typewriter effect is done
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  // Easter eggs hook
  const { showLumos } = useEasterEggs(isMagicMode, () => setIsMagicMode(false));

  const scrollToSection = (section) => {
    setCurrentSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMagicMode = useCallback(() => {
    setIsMagicMode(!isMagicMode);
    if (!isMagicMode && !hasShownTypewriter) {
      setShowTypewriter(true);
    }
  }, [isMagicMode, hasShownTypewriter]);

  return (
    <main
      className={`
        min-h-screen
        transition-colors duration-500
        ${
          isMagicMode
            ? "bg-magic-bg-primary text-parchment cursor-magic-wand magic-mode"
            : "bg-primary text-text-primary"
        }
      `}
    >
      {/* NOTE: doing '&& isOverlayVisible' will not show the overlay fading out*/}
      {/* this is because the component is removed completely when isOverlayVisible is set to false */}
      {/* in contrast, setting opacity to 0 allows us to see the transition from opacity-100 to opacity-0 */}
      {showTypewriter && (
        <div
          className={`
            fixed inset-0 z-50
            flex flex-col items-center justify-center
            bg-magic-bg-primary
            transition-opacity duration-1000 ease-in-out
            ${!isOverlayVisible ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
        >
          <div className="absolute inset-8 border-2 border-magic-gold/30 rounded-lg pointer-events-none" />
          <div className="absolute inset-12 border border-magic-gold/20 rounded-lg pointer-events-none" />

          <div className="text-magic-gold text-xl sm:text-2xl lg:text-4xl sm:whitespace-nowrap font-halloween">
            <Typewriter
              onInit={async (typewriter) => {
                // wait for the fonts to load before starting the typewriter effect
                await document.fonts.ready;
                typewriter
                  .typeString("I solemnly swear that I am up to no good...")
                  .callFunction(() => {
                    setHasShownTypewriter(true);
                    // Wait a brief moment after typing is done before starting fade out
                    setTimeout(() => {
                      setIsOverlayVisible(false);
                    }, 500);
                  })
                  .start();
              }}
              options={{
                delay: 75,
                cursor: "",
              }}
            />
          </div>

          <div className="absolute bottom-8 flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-magic-gold/50" />
            <span className="text-magic-gold/50 text-sm">✦</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-magic-gold/50" />
          </div>
        </div>
      )}

      {/* Lumos Flash Easter Egg (Konami Code) */}
      {showLumos && <div className="lumos-effect animate-lumos-flash" />}

      <Hero
        onArrowClick={() => scrollToSection("about")}
        isMagicMode={isMagicMode}
      />
      <Navbar
        currentSection={currentSection}
        onNavigate={scrollToSection}
        isMagicMode={isMagicMode}
        onToggleMagicMode={toggleMagicMode}
      />
      <About isMagicMode={isMagicMode} />
      <Projects isMagicMode={isMagicMode} />
    </main>
  );
}
