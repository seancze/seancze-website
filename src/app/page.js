"use client";

import Head from "next/head";
import { useState } from "react";
import InitialScreen from "@/app/components/InitialScreen";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (section) => {
    setCurrentSection(section);
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Sean Chen - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary">
        <InitialScreen onArrowClick={() => scrollToSection("about")} />
        <About />
        <Skills />
      </main>
    </div>
  );
}
