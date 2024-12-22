"use client";

import { useState } from "react";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Navbar } from "@/app/components/Navbar";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMagicMode, setIsMagicMode] = useState(false);
  // since the overlay is visible by default, the showTypewriter state ensures that the overlay is only shown when magic mode button is clicked
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [hasShownTypewriter, setHasShownTypewriter] = useState(false);
  // the overlay state ensures that the overlay persists for a brief moment after the typewriter effect is done
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const scrollToSection = (section) => {
    setCurrentSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMagicMode = () => {
    setIsMagicMode(!isMagicMode);
    // this ensures that the overlay is only shown the first time magic mode is toggled
    if (!isMagicMode && !hasShownTypewriter) {
      setShowTypewriter(true);
    }
  };

  return (
    <main
      className={`
          min-h-screen
          ${
            isMagicMode
              ? "bg-primary-dark text-parchment font-halloween cursor-magic-wand"
              : "bg-primary"
          }
          
          `}
    >
      {/* NOTE: doing '&& isOverlayVisible' will not show the overlay fading out*/}
      {/* this is because the component is removed completely when isOverlayVisible is set to false */}
      {/* in contrast, setting opacity to 0 allows us to see the transition from opacity-100 to opacity-0 */}
      {showTypewriter && (
        <div
          className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            !isOverlayVisible ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="text-artyclick-amber sm:text-[1.75rem] lg:text-[3rem] sm:whitespace-nowrap">
            <Typewriter
              onInit={(typewriter) => {
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
        </div>
      )}

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
