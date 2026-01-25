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
    <div
      id="projects"
      className={`scroll-mt-24 pb-16 ${
        isMagicMode ? "bg-magic-bg-primary" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2
            className={`text-4xl font-bold ${
              isMagicMode
                ? "text-magic-gold font-halloween"
                : "text-text-primary"
            }`}
          >
            Projects
          </h2>
          <div
            className={`mt-2 w-20 h-1 rounded ${
              isMagicMode ? "bg-magic-gold" : "bg-accent"
            }`}
          />
        </div>

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

const PaginationDots = ({ total, current, isMagicMode }) => (
  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
    {Array.from({ length: total }, (_, i) => (
      <div
        key={i}
        className={`
          w-2 h-2 rounded-full transition-all duration-300
          ${
            i === current
              ? isMagicMode
                ? "bg-magic-gold w-4"
                : "bg-accent w-4"
              : isMagicMode
                ? "bg-magic-gold/40"
                : "bg-white/60"
          }
        `}
      />
    ))}
  </div>
);

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
      className={`
        flex h-full flex-col overflow-hidden rounded-2xl
        transition-all duration-300 ease-out
        ${
          isMagicMode
            ? `
            bg-parchment border-2 border-magic-gold/30
            shadow-magic-card
            ${isHovered ? "lg:blur-none lg:opacity-100 lg:scale-[1.02]" : "lg:blur-[1px] lg:opacity-70"}
          `
            : `
            bg-secondary border border-border-light
            shadow-card-md hover:shadow-card-lg
            hover:-translate-y-1
          `
        }
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Image Container */}
      <div className={`relative h-52 ${isMagicMode ? "sepia-[0.3]" : ""}`}>
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
          <NextImage
            src={project.images[currentImageIndex].image}
            alt={project.images[currentImageIndex].alt}
            fill
            className="object-cover"
            loading="eager"
            priority
            onLoad={() => {
              // step 4: after current image is updated to next image, stop animation
              // this step causes the next image to be hidden and the current image to be shown
              setIsAnimating(false);
              setSlideDirection("");
              setIsLoading(false);
            }}
          />
        </div>

        {/* Next Image (Sliding In) */}
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
            onLoad={() => {
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

        {project.images.length > 1 && (
          <>
            <button
              onClick={async () => await getNewImage({ isNext: false })}
              disabled={isAnimating || isLoading}
              className={`
                absolute left-3 top-1/2 -translate-y-1/2
                w-8 h-8 rounded-full
                flex items-center justify-center
                transition-all duration-300
                disabled:cursor-not-allowed disabled:opacity-50
                ${
                  isMagicMode
                    ? "bg-magic-bg-secondary/80 text-magic-gold hover:bg-magic-bg-secondary"
                    : "bg-secondary/90 text-text-primary hover:bg-secondary shadow-sm"
                }
              `}
            >
              <FaChevronLeft className="h-3 w-3" />
            </button>
            <button
              onClick={async () => await getNewImage({ isNext: true })}
              disabled={isAnimating || isLoading}
              className={`
                absolute right-3 top-1/2 -translate-y-1/2
                w-8 h-8 rounded-full
                flex items-center justify-center
                transition-all duration-300
                disabled:cursor-not-allowed disabled:opacity-50
                ${
                  isMagicMode
                    ? "bg-magic-bg-secondary/80 text-magic-gold hover:bg-magic-bg-secondary"
                    : "bg-secondary/90 text-text-primary hover:bg-secondary shadow-sm"
                }
              `}
            >
              <FaChevronRight className="h-3 w-3" />
            </button>
            <PaginationDots
              total={project.images.length}
              current={currentImageIndex}
              isMagicMode={isMagicMode}
            />
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
                <span
                  className={`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    px-2 py-1 rounded text-xs font-medium whitespace-nowrap
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    ${
                      isMagicMode
                        ? "bg-magic-bg-secondary text-magic-gold"
                        : "bg-github-grey text-white"
                    }
                  `}
                >
                  {tech}
                </span>
              </div>
            ) : (
              <div key={index} className="h-12 flex items-center">
                <span
                  className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${
                      isMagicMode
                        ? "bg-magic-bg-secondary text-magic-gold"
                        : "bg-blue-100 text-blue-800"
                    }
                  `}
                >
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
        <h3
          className={`text-xl font-bold mb-3 ${
            isMagicMode
              ? "text-magic-bg-primary font-halloween"
              : "text-text-primary"
          }`}
        >
          {project.name}
        </h3>

        <p
          className={`mb-5 flex-grow text-sm leading-relaxed ${
            isMagicMode ? "text-magic-bg-secondary" : "text-text-secondary"
          }`}
        >
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-4 border-t border-border-light/50">
          <div className="flex space-x-4">
            {project.githubUrl && (
              <div className="relative group">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-center w-10 h-10 rounded-full
                    transition-all duration-300 bg-white shadow-md hover:bg-github-grey text-github-grey hover:text-white
                  `}
                  aria-label="View on GitHub"
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
                              rotate-45 w-2 h-2 bg-github-grey"
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
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 bg-white shadow-md hover:bg-youtube-red text-youtube-red hover:text-white"
                  aria-label="Watch video"
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
                              rotate-45 w-2 h-2 bg-youtube-red"
                  />
                </div>
              </div>
            )}
          </div>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                px-4 py-2 rounded-full text-sm font-semibold
                transition-all duration-300
                ${
                  isMagicMode
                    ? "bg-magic-gold text-magic-bg-primary hover:bg-magic-amber"
                    : "bg-accent text-secondary hover:bg-accent-hover"
                }
              `}
            >
              View More →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
