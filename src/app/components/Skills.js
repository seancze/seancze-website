"use client";
import { useState } from "react";
import NextImage from "next/image";
import { TECH_STACK_IMAGES } from "@/app/constants";

// Categorized skills
const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "Javascript", "Java", "Scala", "Swift"],
  },
  {
    name: "Frameworks",
    skills: ["ReactJS", "AngularJS", "NodeJS", "TailwindCSS"],
  },
  {
    name: "Data & AI",
    skills: ["OpenAI", "MongoDB", "TensorFlow"],
  },
  {
    name: "Cloud",
    skills: ["AWS", "Firebase"],
  },
];

const SkillChip = ({ skill, isMagicMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasImage = TECH_STACK_IMAGES[skill];

  return (
    <div
      className={`
        relative flex items-center gap-2 px-4 py-2.5
        rounded-full cursor-default
        transition-all duration-300 ease-out
        ${
          isMagicMode
            ? "bg-magic-bg-secondary/50 text-parchment border border-magic-gold/20 hover:border-magic-gold/50 hover:bg-magic-bg-secondary"
            : "bg-secondary text-text-primary border border-border-light hover:border-accent/30 hover:shadow-card-sm"
        }
        ${isHovered ? "scale-105" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasImage && (
        <div className="relative w-5 h-5 flex-shrink-0">
          <NextImage
            src={`/${TECH_STACK_IMAGES[skill]}`}
            alt={skill}
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className="text-sm font-medium whitespace-nowrap">{skill}</span>
    </div>
  );
};

const SkillCategory = ({ category, isMagicMode }) => (
  <div className="mb-8">
    <h3
      className={`text-lg font-semibold mb-4 ${
        isMagicMode ? "text-magic-gold" : "text-text-primary"
      }`}
    >
      {category.name}
    </h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <SkillChip key={skill} skill={skill} isMagicMode={isMagicMode} />
      ))}
    </div>
  </div>
);

export const Skills = ({ isMagicMode = false }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2
          className={`text-4xl font-bold ${
            isMagicMode ? "text-magic-gold font-halloween" : "text-text-primary"
          }`}
        >
          Skills
        </h2>
        <div
          className={`mt-2 w-16 h-1 rounded ${
            isMagicMode ? "bg-magic-gold" : "bg-accent"
          }`}
        />
      </div>

      {/* Skills grid by category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.name}
            category={category}
            isMagicMode={isMagicMode}
          />
        ))}
      </div>
    </div>
  );
};
