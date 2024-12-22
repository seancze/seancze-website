"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Navbar } from "@/app/components/Navbar";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMagicMode, setIsMagicMode] = useState(false);
  const [hasShownTypewriter, setHasShownTypewriter] = useState(false);
  const [isTypewriterDone, setIsTypewriterDone] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const scrollToSection = (section) => {
    setCurrentSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMagicMode = () => {
    if (!isMagicMode && !hasShownTypewriter) {
      setHasShownTypewriter(true);
    }
    setIsMagicMode(!isMagicMode);
  };

  useEffect(() => {
    if (isTypewriterDone) {
      // Wait a brief moment after typing is done before starting fade out
      setTimeout(() => {
        setIsOverlayVisible(false);
      }, 500);
    }
  }, [isTypewriterDone]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Sean Chen - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={
          isMagicMode
            ? "bg-primary-dark text-parchment font-halloween cursor-magic-wand"
            : "bg-primary"
        }
      >
        {hasShownTypewriter && (
          <div
            className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
              !isOverlayVisible
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <div className="text-artyclick-amber sm:text-[1.75rem] lg:text-[3rem] sm:whitespace-nowrap">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I solemnly swear that I am up to no good...")
                    .callFunction(() => {
                      setIsTypewriterDone(true);
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
    </div>
  );
}
