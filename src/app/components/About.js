"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Skills } from "@/app/components/Skills";
import { Mischiefs } from "@/app/components/Mischiefs";
import { QUOTES } from "@/app/constants";

const SocialLink = ({
  href,
  icon: Icon,
  label,
  isImage,
  imageSrc,
  iconColor,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    {isImage ? (
      <Image src={imageSrc} alt={label} width={40} height={40} />
    ) : (
      <Icon className={`w-10 h-10 ${iconColor}`} />
    )}
  </a>
);

export const About = ({ isMagicMode }) => {
  const typewriterStrings = isMagicMode
    ? QUOTES
    : [
        "Hi, I am...",
        "Define...",
        "What is a...",
        "Nice to meet you! My name is...",
      ];

  return (
    // scroll-mt-16 is used to ensure that the navbar does not cover the top of the About section
    <div
      id="about"
      className={`flex flex-col pt-16 scroll-mt-16 ${
        isMagicMode ? "bg-magic-bg-primary" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className={`text-4xl font-bold ${
              isMagicMode
                ? "text-magic-gold font-halloween"
                : "text-text-primary"
            }`}
          >
            About
          </h2>
          <div
            className={`mt-2 w-20 h-1 rounded ${
              isMagicMode ? "bg-magic-gold" : "bg-accent"
            }`}
          />
        </div>

        {/* Main content card */}
        <div
          className={`
            rounded-2xl p-8 md:p-12
            ${
              isMagicMode
                ? "bg-magic-bg-secondary/50 border border-magic-gold/20 parchment-texture"
                : "bg-secondary shadow-card-lg border border-border-light"
            }
          `}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            <div className="flex flex-col items-center flex-shrink-0">
              {/* Profile image with modern frame */}
              <div className="relative mb-6">
                {/* Decorative ring */}
                <div
                  className={`
                    absolute -inset-2 rounded-full
                    ${
                      isMagicMode
                        ? "bg-gradient-to-br from-magic-gold via-magic-amber to-magic-gold animate-pulse-glow"
                        : "bg-gradient-to-br from-accent/20 via-accent/10 to-accent/20"
                    }
                  `}
                />
                <div className="relative">
                  <Image
                    src={
                      isMagicMode
                        ? "/images/profile-picture/informal.jpeg"
                        : "/images/profile-picture/formal.jpeg"
                    }
                    alt={
                      isMagicMode ? "Sean Chen informal" : "Sean Chen formal"
                    }
                    width={200}
                    height={200}
                    className={`
                      rounded-full object-cover
                      ${isMagicMode ? "border-4 border-magic-gold" : "border-4 border-secondary"}
                    `}
                    priority
                  />
                  {/* Magic mode hover effect */}
                  {isMagicMode && (
                    <div className="absolute inset-0 rounded-full bg-magic-gold/0 group-hover:bg-magic-gold/10 transition-all duration-300" />
                  )}
                </div>
              </div>

              <div className="flex space-x-6">
                <SocialLink
                  href="https://github.com/seancze"
                  icon={FaGithub}
                  label="GitHub"
                  iconColor={isMagicMode ? "text-white" : "text-github-grey"}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/sean-chen-scze"
                  icon={FaLinkedin}
                  label="LinkedIn"
                  iconColor="text-linkedin-blue"
                />
                <SocialLink
                  href="https://medium.com/@seancze"
                  label="Medium"
                  isImage
                  imageSrc={
                    isMagicMode
                      ? "/images/medium/white.svg"
                      : "/images/medium/black.svg"
                  }
                />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div
                className={`mb-4 ${
                  isMagicMode
                    ? "text-sm italic text-magic-gold-muted"
                    : "text-xl text-text-secondary"
                }`}
              >
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: isMagicMode ? 1 : 25,
                    pauseFor: 1500,
                  }}
                />
              </div>
              {!isMagicMode && (
                <h3 className="text-3xl font-bold text-text-primary mb-6">
                  Sean Chen
                </h3>
              )}

              {/* Bio content */}
              <div
                className={`
                  space-y-4 leading-relaxed
                  ${isMagicMode ? "text-parchment" : "text-text-secondary"}
                `}
              >
                {isMagicMode ? (
                  <>
                    <p>
                      Sean realised that the world was looking a bit too dull.
                      He thus felt obligated to give it a tinge of magic.
                    </p>
                    <p>
                      When Sean is not busy trying to change the world, you can
                      find him at highly-rated food establishments 😋, running
                      or playing various racquet games with friends 🤗,
                      earnestly (but often awkwardly) asking others about their
                      own plans in life as he figures out his own 🤔, chilling
                      with a good book or movie 🤓, or of course, hanging out
                      with loved ones 🥰.
                    </p>
                    <p className="text-magic-gold italic">
                      Some of his mischiefs have been documented below.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I&apos;m a software engineer and entrepreneur interested
                      in Mobile / Web development, Data Science, Machine
                      Learning, and Artificial Intelligence (AI)!
                    </p>
                    <p>
                      I am particularly interested in leveraging technology as a
                      force multiplier for social good - Community building,
                      Reducing food wastage, Reducing senior isolation and more!
                      Most recently, I had the opportunity to work in{" "}
                      <a
                        href="https://www.tech.gov.sg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
                      >
                        GovTech
                      </a>{" "}
                      to help fight scams.
                    </p>
                    <p className="text-text-primary font-medium">
                      Always happy to connect with like-minded individuals!
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        {isMagicMode ? <Mischiefs /> : <Skills isMagicMode={isMagicMode} />}
      </div>
    </div>
  );
};
