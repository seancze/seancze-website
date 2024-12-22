"use client";

import { useState } from "react";
import Head from "next/head";
import InitialScreen from "@/app/components/InitialScreen";
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
          isMagicMode ? "bg-primary-dark text-parchment" : "bg-primary"
        }
      >
        <InitialScreen onArrowClick={() => scrollToSection("about")} />
        <Navbar
          currentSection={currentSection}
          onNavigate={scrollToSection}
          isMagicMode={isMagicMode}
          onToggleMagicMode={toggleMagicMode}
        />
        <About isMagicMode={isMagicMode} />
        <Projects />
      </main>
    </div>
  );
}
