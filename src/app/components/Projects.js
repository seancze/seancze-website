import Image from "next/image";
import { useState } from "react";
import {
  FaGithub,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { PROJECTS, TECH_STACK_IMAGES } from "@/app/constants";

export default function Projects() {
  return (
    <div id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl flex flex-col h-full">
      <div className="relative h-48">
        <Image
          src={project.images[currentImageIndex].image}
          alt={project.images[currentImageIndex].alt}
          layout="fill"
          objectFit="cover"
        />
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-gray-100"
            >
              <FaChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-gray-100"
            >
              <FaChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-4 mb-3">
          {project.techStack.map((tech, index) => {
            return TECH_STACK_IMAGES[tech] ? (
              <div key={index} className="relative group">
                <div className="w-12 h-12 relative">
                  <Image
                    src={`/${TECH_STACK_IMAGES[tech]}`}
                    alt={tech}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap mb-2">
                  {tech}
                </span>
              </div>
            ) : (
              <div key={index} className="h-12 flex items-center">
                {/* Wrapper div to ensure that span is vertically centered*/}
                <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium flex items-center justify-center h-8">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>
        <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-4">
            {project.githubUrl && (
              <div className="relative group">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-300 group-hover:bg-[#333]"
                >
                  <FaGithub className="w-6 h-6 text-[#333] group-hover:text-white transition-colors duration-300" />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  View on GitHub
                </span>
              </div>
            )}
            {project.videoUrl && (
              <div className="relative group">
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-300 group-hover:bg-[#FF0000]"
                >
                  <FaYoutube className="w-6 h-6 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
                </a>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Watch on YouTube
                </span>
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
