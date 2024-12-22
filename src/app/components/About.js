import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function About() {
  const typewriterStrings = [
    "Hi, I am...",
    "Define...",
    "What is a...",
    "Nice to meet you! My name is...",
  ];

  return (
    <div id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">About</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
            <Image
              src="/images/profile-picture/formal.jpg"
              alt="Sean Chen"
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            <div className="flex space-x-12">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-10 h-10 text-github-grey" />
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
          <div className="md:w-2/3 md:pl-8">
            <div className="flex flex-col">
              <div className="text-2xl mb-2">
                <Typewriter
                  options={{
                    strings: typewriterStrings,
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 25,
                    pauseFor: 1500,
                  }}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sean Chen</h3>
            </div>
            <p className="mb-4">
              I&apos;m a software engineer and entrepreneur interested in Mobile
              / Web development, Data Science, Machine Learning, and Artificial
              Intelligence (AI)!
            </p>
            <p className="mb-4">
              I am particularly interested in leveraging technology as a force
              multiplier for social good - Community building, Reducing food
              wastage, Reducing senior isolation and more! In fact, my most
              recent initiative is{" "}
              <a
                href="https://app.sagexperiences.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                SAGE (Sharing And Gaining Experiences)
              </a>
              , an online knowledge-sharing platform focused on empowering
              youths to make a more informed decision by tapping on a highly
              effective support system.
            </p>
            <p>Always happy to connect with like-minded individuals!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
