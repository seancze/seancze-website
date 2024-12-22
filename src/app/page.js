"use client";

import { useState } from "react";
import Head from "next/head";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Navbar } from "@/app/components/Navbar";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMagicMode, setIsMagicMode] = useState(false);

  const scrollToSection = (section) => {
    setCurrentSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const toggleMagicMode = () => {
    setIsMagicMode(!isMagicMode);
  };

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
