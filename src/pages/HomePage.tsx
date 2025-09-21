import { useOutletContext } from "react-router-dom";
import { Introduction } from "@/components/Introduction";
import { HardShadowButton } from "@/components/ui/HardShadowButton";
import { HardShadowRect } from "@/components/ui/HardShadowRect";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Code, Download } from "lucide-react";

type ContextType = {
  isExiting: boolean;
  handleNavigation: (path: string) => void;
};

const HomePage: React.FC = () => {
  const { isExiting, handleNavigation } = useOutletContext<ContextType>();

  const buttons = {
    dotfiles: {
      title: "Dotfiles",
      summary:
        "The heart of my work: The configuration files for my linux machine",
      route: "/dotfiles",
      color: "bg-blue-50",
    },
    coolProjects: {
      title: "Projects",
      summary:
        "These are projects I've worked on as a hobbyist. They are all open source so you can get an idea of the quality of the code I write by visiting each repo",
      route: "/projects",
      color: "bg-blue-50",
    },
    myWork: {
      title: "Work",
      summary:
        "Here you'll find all the jobs I've worked on. Some of the things I've developed are private, but I'll include all the details I can",
      route: "/work",
      color: "bg-blue-50",
    },
  };

  const renderButtons = () => (
    <>
      <div className="sm:translate-x-0 w-full translate-x-4">
        <HardShadowButton
          className="bg-blue-50 w-full"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/documents/Isaac Arcia resume.pdf";
            link.download = "Isaac Arcia resume.pdf";
            link.click();
          }}
          aria-label="Download resume as PDF"
          popUpContent={
            <HardShadowRect className="text-left w-full bg-white pt-14 p-2 ">
              Click to download as PDF
            </HardShadowRect>
          }
        >
          <div className="font-extrabold p-4 flex flex-row gap-3 items-center w-full justify-center">
            <Download strokeWidth={3}/>
            Resume
          </div>
        </HardShadowButton>
      </div>
      <div className="sm:translate-x-0 w-full -translate-x-4">
        <HardShadowButton
          className="bg-blue-50 w-full"
          onClick={() => handleNavigation("/contact")}
          popUpContent={
            <HardShadowRect className="text-left w-full bg-white pt-14 p-2 ">
              All the ways you can contact me for hiring
            </HardShadowRect>
          }
        >
          <div className="font-extrabold p-4 flex flex-row gap-3 items-center w-full justify-center">
            Contact
          </div>
        </HardShadowButton>
      </div>
      {Object.entries(buttons).map(([key, button], index) => (
        <div
          key={key}
          className={`w-full sm:translate-x-0 ${
            index % 2 === 0 ? "translate-x-4" : "-translate-x-4"
          }`}
        >
          <HardShadowButton
            className={`${button.color} w-full`}
            onClick={() => handleNavigation(button.route)}
            aria-label={`Go to ${button.title} page`}
            popUpContent={
              <HardShadowRect className="bg-white pt-14 p-2 text-left">
                {button.summary}
              </HardShadowRect>
            }
          >
            <div className="font-extrabold p-4">{button.title}</div>
          </HardShadowButton>
        </div>
      ))}
    </>
  );

  return (
    <div className="mx-auto max-w-4xl sm:grid md:grid-cols-5 sm:grid-cols-4 flex flex-col gap-4">
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="flex flex-col-reverse items-end justify-end gap-4 sm:w-full w-3/4 mx-auto sm:pt-0"
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -200,
            }}
            transition={{ duration: 0.2 }}
          >
            {renderButtons()}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="sm:block hidden md:col-span-4 col-span-3"
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 200,
            }}
            transition={{ duration: 0.2 }}
          >
            <Introduction />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isExiting && (
          <motion.div 
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 50,
            }}
            transition={{ duration: 0.2 }}
            className="z-20 sm:hidden flex items-center justify-center fixed bottom-0 left-0 w-dvw h-18 pl-2 pr-4">
            <div className="translate-y-2">
              <HardShadowRect className="pt-2 px-3 rounded-t-xl h-18 bg-amber-50">
                <div className="grid grid-cols-2 max-w-64 gap-3 h-8 text-sm">
                  <a
                    target="_blank"
                    href="mailto:i.arcia135@gmail.com"
                    className="h-10 border-black flex hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 "
                  >
                    <Mail className="text-red-600" />
                    Email me
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/ikz87/new-portfolio"
                    rel="noopener noreferrer"
                    className="h-10 text-nowrap flex border-black hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 "
                  >
                    <Code className="text-green-600" />
                    View source
                  </a>
                </div>
              </HardShadowRect>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
