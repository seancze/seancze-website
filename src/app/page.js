"use client";

import Head from "next/head";
import { useState } from "react";
import InitialScreen from "@/app/components/InitialScreen";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("initial");

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

      <main>
        <InitialScreen onArrowClick={() => scrollToSection("about")} />
      </main>
    </div>
  );
}
