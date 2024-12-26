"use client";
import NextImage from "next/image";
import { useState } from "react";
import {
  FaGithub,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { PROJECTS, TECH_STACK_IMAGES } from "@/app/constants";

export const Projects = ({ isMagicMode }) => {
  // track cards that have been hovered over
  const [hoveredCards, setHoveredCards] = useState(new Set());

  const handleMouseEnter = (index) => {
    setHoveredCards((prev) => new Set([...prev, index]));
  };

  return (
    // scroll-mt-24 is used to ensure that the navbar does not cover the top of the Projects section
    <div id="projects" className="scroll-mt-24 pb-12">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-12 ${
            isMagicMode && "text-dark-pastel-purple"
          }`}
        >
          Projects
        </h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isMagicMode={isMagicMode}
              isHovered={hoveredCards.has(index)}
              onMouseEnter={() => handleMouseEnter(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isMagicMode, isHovered, onMouseEnter }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(0);

  const getNewImage = async ({ isNext = true }) => {
    try {
      setIsLoading(true);
      if (isAnimating) return;
      let newImageIndex;
      let slideDirection;

      if (isNext) {
        newImageIndex = (currentImageIndex + 1) % project.images.length;
        slideDirection = "slide-left";
      } else {
        newImageIndex =
          (currentImageIndex - 1 + project.images.length) %
          project.images.length;
        slideDirection = "slide-right";
      }
      // step 1: set index of next image
      setNextImageIndex(newImageIndex);
      setSlideDirection(slideDirection);
    } catch (error) {
      console.error(error);
      // only set isLoading to false if there is an error because this is not the end of the image loading process
      // isLoading is properly set to false after step 4 (see comments below)
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 ease-in-out
        ${
          isMagicMode
            ? "shadow-[2px_3px_10px_black,inset_0_0_60px_#8a4d0f] bg-[#fffef0]"
            : "bg-white shadow-lg hover:shadow-2xl"
        }
        ${isMagicMode && isHovered && "lg:blur-none lg:opacity-100"}
        ${isMagicMode && !isHovered && "lg:blur-[2px] lg:opacity-50"} 
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Image Container */}
      <div className="relative h-48">
        {/* Current Image (Sliding Out) */}
        <div
          className={`absolute h-full w-full ${
            isAnimating &&
            (slideDirection === "slide-left"
              ? "animate-slide-out-left"
              : slideDirection === "slide-right"
              ? "animate-slide-out-right"
              : "")
          }`}
        >
          {/* issue: currentImage is prematurely set to nextImage making it seem as if the image is transitioning back to itself */}
          <NextImage
            src={project.images[currentImageIndex].image}
            alt={project.images[currentImageIndex].alt}
            fill
            className="object-cover"
            loading="eager"
            priority
            onLoadingComplete={() => {
              // step 4: after current image is updated to next image, stop animation
              // this step causes the next image to be hidden and the current image to be shown
              setIsAnimating(false);
              setSlideDirection("");
              setIsLoading(false);
            }}
          />
        </div>

        {/* Next Image (Sliding In) */}
        {
          <div
            className={`absolute h-full w-full ${!isAnimating && "hidden"} ${
              slideDirection === "slide-left"
                ? "animate-slide-in-left"
                : "animate-slide-in-right"
            }`}
          >
            <NextImage
              src={project.images[nextImageIndex].image}
              alt={project.images[nextImageIndex].alt}
              fill
              className="object-cover"
              loading="eager"
              priority
              onLoadingComplete={() => {
                // step 2: once next image has loaded, start animation
                if (slideDirection !== "") {
                  setIsAnimating(true);
                  // wait for animation to complete (animation takes exactly 0.5s) before updating current image
                  setTimeout(() => {
                    // step 3: after animation completes, update current image to be next image
                    setCurrentImageIndex(nextImageIndex);
                  }, 500);
                }
              }}
            />
          </div>
        }
        {project.images.length > 1 && (
          <>
            <button
              onClick={async () => await getNewImage({ isNext: false })}
              disabled={isAnimating || isLoading}
              className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-1.5 shadow-md transition-all duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaChevronLeft className="h-4 w-4 text-black" />
            </button>
            <button
              onClick={async () => await getNewImage({ isNext: true })}
              disabled={isAnimating || isLoading}
              className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-1.5 shadow-md transition-all duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FaChevronRight className="h-4 w-4 text-black" />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-4 mb-3">
          {project.techStack.map((tech, index) => {
            return TECH_STACK_IMAGES[tech] ? (
              <div key={index} className="relative group">
                <div className="w-12 h-12 relative">
                  <NextImage
                    src={`/${TECH_STACK_IMAGES[tech]}`}
                    alt={tech}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-github-grey text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mb-2">
                  {tech}
                </span>
              </div>
            ) : (
              <div key={index} className="h-12 flex items-center">
                <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium flex items-center justify-center h-8">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
        <h3
          className={`text-2xl font-semibold mb-3 ${
            isMagicMode && "text-dark-pastel-purple"
          }`}
        >
          {project.name}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow font-sans">
          {project.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-4 font-sans">
            {project.githubUrl && (
              <div className="relative group">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-github-grey text-github-grey hover:text-white"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <div
                  className="absolute w-auto min-w-max left-1/2 -translate-x-1/2 
                            bottom-[calc(100%+5px)] rounded-md py-2 px-3 bg-github-grey
                            text-xs font-bold text-white shadow-lg
                            transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                            invisible opacity-0 group-hover:visible group-hover:opacity-100
                            group-hover:bottom-[calc(100%+12px)]"
                >
                  GitHub
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                              rotate-45 w-2 h-2 bg-github-grey
                              transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                              group-hover:bg-github-grey"
                  />
                </div>
              </div>
            )}
            {project.videoUrl && (
              <div className="relative group">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-300 hover:bg-youtube-red text-youtube-red hover:text-white"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
                <div
                  className="absolute w-auto min-w-max left-1/2 -translate-x-1/2 
                            bottom-[calc(100%+5px)] rounded-md py-2 px-3 bg-youtube-red
                            text-xs font-bold text-white shadow-lg
                            transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                            invisible opacity-0 group-hover:visible group-hover:opacity-100
                            group-hover:bottom-[calc(100%+12px)]"
                >
                  YouTube
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
                              rotate-45 w-2 h-2 bg-youtube-red
                              transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                              group-hover:bg-youtube-red"
                  />
                </div>
              </div>
            )}
          </div>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            View More →
          </a>
        </div>
      </div>
    </div>
  );
};
