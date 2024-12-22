import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Skills } from "@/app/components/Skills";
import { Mischiefs } from "@/app/components/Mischiefs";

export const About = ({ isMagicMode }) => {
  const typewriterStrings = isMagicMode
    ? [
        "It does not do to dwell on dreams and forget to live.",
        "We must all face the choice between what is right, and what is easy.",
        "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
      ]
    : [
        "Hi, I am...",
        "Define...",
        "What is a...",
        "Nice to meet you! My name is...",
      ];

  return (
    // scroll-mt-16 is used to ensure that the navbar does not cover the top of the About section
    <div id="about" className="min-h-screen flex flex-col py-8 scroll-mt-16">
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-8 ${
            isMagicMode && "text-dark-pastel-purple"
          }`}
        >
          About
        </h2>
        <div className="flex flex-col md:flex-row items-center h-full">
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
            {isMagicMode ? (
              <Image
                src={"/images/profile-picture/informal.jpeg"}
                alt="Sean Chen informal"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
            ) : (
              <Image
                src={"/images/profile-picture/formal.jpg"}
                alt="Sean Chen formal"
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
            )}

            <div className="flex space-x-12">
              <a
                href="https://github.com/seancze"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className={`w-10 h-10 ${
                    isMagicMode ? "text-white" : "text-github-grey"
                  }`}
                />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-10 h-10 text-linkedin-blue" />
              </a>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8 font-sans">
            <div className="flex flex-col">
              <div className={`${isMagicMode ? "text-base" : "text-2xl"} mb-2`}>
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
              {isMagicMode ? (
                <p className="font-semibold italic">- Albus Dumbledore</p>
              ) : (
                <h3 className="text-2xl font-semibold mb-4">Sean Chen</h3>
              )}
            </div>
            {isMagicMode ? (
              <p>
                Sean realised that the world was looking abit too dull. He thus
                felt obligated to give it a tinge of magic.
                <br />
                <br />
                When Sean is not busy trying to change the world, you can find
                him at highly-rated food establishments 😋, running or playing
                various racquet games with friends 🤗, earnestly (but often
                awkwardly) asking others about their own plans in life as he
                figures out his own 🤔, chilling with a good book or movie 🤓,
                or of course, hanging out with loved ones 🥰.
                <br />
                <br />
                Some of his mischiefs have been documented below.
              </p>
            ) : (
              <>
                <p>
                  I&apos;m a software engineer and entrepreneur interested in
                  Mobile / Web development, Data Science, Machine Learning, and
                  Artificial Intelligence (AI)!
                  <br />
                  <br />I am particularly interested in leveraging technology as
                  a force multiplier for social good - Community building,
                  Reducing food wastage, Reducing senior isolation and more!
                  Most recently, I had the opportunity to work in{" "}
                  <a
                    href="https://www.tech.gov.sg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GovTech
                  </a>{" "}
                  to help fight scams.
                  <br />
                  <br />
                  Always happy to connect with like-minded individuals!
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="py-8">{isMagicMode ? <Mischiefs /> : <Skills />}</div>
    </div>
  );
};
