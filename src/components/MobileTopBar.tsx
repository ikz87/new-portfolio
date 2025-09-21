import { HardShadowRect } from "./ui/HardShadowRect.tsx";
import { ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function MobileTopBar() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  
  const toggleAboutMe = () => {
    setIsAboutMeOpen(!isAboutMeOpen);
    console.log("yay");
  };

  if (true) {
    return (
      <div className="relative flex flex-row mx-auto w-full max-w-4xl h-16 rounded-xl">
        <div className="z-50 border-4 border-black flex items-center flex-row rounded-l-xl w-full bg-amber-50 h-full overflow-visible">
          <div className="w-full md:text-lg flex md:gap-3 gap-2 items-center">
            <h1 className="pl-4 font-extrabold">ikz87's portfolio</h1>
          </div>
          <div className="pr-4 flex flex-row items-center gap-3">
            <a
              className="flex md:w-11 w-10 aspect-square justify-center items-center border-3 rounded-full bg-gray-700 text-white border-black"
              target="_blank"
              href="https://github.com/ikz87"
            >
              <Github />
            </a>
            <a
              className="flex md:w-11 w-10 aspect-square justify-center items-center border-3 rounded-full border-black text-white bg-blue-700"
              target="_blank"
              href="https://www.linkedin.com/in/isaac-arcia-9b408932a/"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="z-50 w-fit">
          <motion.button
            onClick={toggleAboutMe}
            aria-label="Open about me section"
            className="border-black border-4 rounded-xl text-nowrap -ml-2 p-3 font-extrabold cursor-pointer sm:hidden bg-blue-50 h-16 flex !rounded-l-none items-center flex-row gap-2"
              initial={{
                y: 0,
                x: 0,
              }}
              whileTap={{
                y: 7,
                x: 7,
              }}
          >
            About me
            <ChevronDown strokeWidth={3} className={`${isAboutMeOpen ? "rotate-180" : ""} transition-all`} />
          </motion.button>
        </div>
        <AnimatePresence>
        { isAboutMeOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleAboutMe}
              className="z-40 fixed top-0 left-0 w-dvw h-screen bg-black/50">
            </motion.div>
            <motion.div
              className="z-40 absolute top-4 left-0 pl-4 pr-4 w-full overflow-y-hidden flex flex-col justify-end"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
            >
              <div className="pb-2">
                  <HardShadowRect className="rounded-b-xl h-[94dvh] pt-14 overflow-y-scroll text-justify p-4 w-full bg-white ">
                    <p className="font-extrabold text-blue-700">Introduction</p>
                    <p>
                      Hi, my name is Isaac Arcia. I'm an electronic engineer and self
                      taught developer.
                      In 2020 I attended and successfully completed the in-person course CS50x.ni (
                      <a
                        href="/documents/CS50x through CS50x.ni.pdf"
                        download
                        className="text-blue-700 underline"
                      >
                        see my certificate
                      </a>
                      ). Ever since then I have gathered tons of experience as a developer, although 
                      mostly from passion driven projects.
                    </p>
                    <p>
                      I'm actively looking for a job. If you like what you see here and got an offer to make, I'd love to hear from you.
                    </p>
                    <p className="mt-4 font-extrabold text-pink-500">Skills/Tools</p>
                    <ul className="list-disc list-outside ml-4 max-w-sm">
                      <li><span className="font-extrabold">Frontend:</span> Svelte, React, TypeScript, Tailwind</li>
                      <li>
                        <span className="font-extrabold">Backend:</span> Python (Flask, Strawberry GraphQL, Psycopg, Prisma,
                        FastAPI), PostgreSQL
                      </li>
                      <li>
                        <span className="font-extrabold">Infra:</span> Supabase, Auth0, Render, AWS, Google Cloud, Bash, SSH, Linux
                      </li>
                    </ul>
                    <p className="mt-4 font-extrabold text-green-600">Experience</p>
                    <ul className="list-disc list-outside ml-4">
                      <li>
                        Desarrollo Integral, Full-stack developer (August 2023 - March 2024)
                      </li>
                      <li>Ecuación Futuro, Front-end developer (April 2024 - July 2024)</li>
                      <li>
                        Opti-Grow Consulting Group, Front-end developer (September 2024 -
                        October 2024)
                      </li>
                      <li>SeniorThrive, Full-stack developer (April 2025 - Now)</li>
                    </ul>
                    <p className="mt-4">
                      Please refer to my{" "}
                      <a
                        href="/documents/Isaac Arcia resume.pdf"
                        download
                        className="text-blue-700 underline"
                      >
                        resume
                      </a>{" "}
                      for a more detailed breakdown of my roles in the mentioned positions.
                    </p>
                  </HardShadowRect>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        <div className="absolute w-full h-16 bg-black rounded-xl translate-x-2 translate-y-2">
        </div>
      </div>
    )
  }
  return (
    <div className="mx-auto w-full max-w-4xl flex flex-row h-16">
      <HardShadowRect className="flex items-center flex-row rounded-xl w-full bg-amber-50 h-full overflow-visible">
        <div className="w-full md:text-lg flex md:gap-3 gap-2 items-center">
          <h1 className="pl-4 text-nowrap font-extrabold">ikz87's portfolio</h1>
          <a
            target="_blank"
            href="mailto:i.arcia135@gmail.com"
            className="md:h-11 h-10 border-black flex hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 "
          >
            <Mail className="text-red-600" />
            i.arcia135@gmail.com
          </a>
          <a
            target="_blank"
            href="https://github.com/ikz87/new-portfolio"
            rel="noopener noreferrer"
            className="md:h-11 h-10 text-nowrap flex border-black hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 "
          >
            <Code className="text-green-600" />
            View source
          </a>
        </div>
        <div className="pr-4 flex flex-row items-center gap-3">
          <a
            className="flex md:w-11 w-10 aspect-square justify-center items-center border-3 rounded-full bg-gray-700 text-white border-black"
            target="_blank"
            href="https://github.com/ikz87"
          >
            <Github />
          </a>
          <a
            className="flex md:w-11 w-10 aspect-square justify-center items-center border-3 rounded-full border-black text-white bg-blue-700"
            target="_blank"
            href="https://www.linkedin.com/in/isaac-arcia-9b408932a/"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <Linkedin />
          </a>
        </div>
      </HardShadowRect>
    </div>
  );
}
