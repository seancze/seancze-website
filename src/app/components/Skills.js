"use client";
import { useState } from "react";
import { TECH_STACK_IMAGES } from "@/app/constants";

const skills = [
  "AWS",
  "AngularJS",
  "Java",
  "Javascript",
  "MongoDB",
  "NodeJS",
  "OpenAI",
  "Python",
  "ReactJS",
  "Scala",
  "Swift",
  "TailwindCSS",
];

export const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="bg-secondary rounded-lg shadow-md relative overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-white"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <div
              className={`w-full h-16  p-4 flex items-center justify-center
                  ${
                    hoveredIndex === index
                      ? "bg-no-repeat bg-center bg-contain"
                      : ""
                  }`}
              style={{
                backgroundImage:
                  hoveredIndex === index
                    ? `url(${TECH_STACK_IMAGES[skill]})`
                    : "none",
                backgroundSize: "auto 80%",
              }}
            >
              <span
                className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[1000%]`}
              >
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
