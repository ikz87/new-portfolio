import { useOutletContext } from "react-router-dom";
import { Introduction } from "@/components/Introduction";
import { HardShadowButton } from "@/components/ui/HardShadowButton";
import { HardShadowRect } from "@/components/ui/HardShadowRect";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";

type ContextType = {
  isExiting: boolean;
  handleNavigation: (path: string) => void;
};

const HomePage: React.FC = () => {
  const { isExiting, handleNavigation } = useOutletContext<ContextType>();

  const buttons = {
    dotfiles: {
      title: "Dotfiles",
      summary: "The heart of my work: The configuration files for my linux machine",
      route: "/dotfiles",
      color: "bg-blue-50",
    },
    coolProjects: {
      title: "Projects",
      summary: "These are projects I've worked on as a hobbyist. They are all open source so you can get an idea of the quality of the code I write by visiting each repo",
      route: "/projects",
      color: "bg-blue-50",
    },
    myWork: {
      title: "Work",
      summary: "Here you'll find all the jobs I've worked on. Some of the things I've developed are private, but I'll include all the details I can",
      route: "/work",
      color: "bg-blue-50",
    },
  };

  return (
    <div className="mx-auto max-w-4xl sm:grid sm:grid-cols-3 flex flex-col gap-4">
      <AnimatePresence>
        {!isExiting && (
          <motion.div 
            className="sm:flex hidden flex-col-reverse items-end justify-end gap-4"
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
            <HardShadowButton 
              className={`bg-blue-50 w-full`}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/documents/Isaac Arcia resume.pdf';
                link.download = 'Isaac Arcia resume.pdf';
                link.click();
              }}
              popUpContent={
                <HardShadowRect className="text-justify w-full bg-white pt-14 p-2 ">
                  Click to download as PDF
                </HardShadowRect>
              }
            >
              <div className="font-extrabold p-4 flex flex-row gap-3 items-center w-full justify-center">
                <Download/>
                Resume
              </div>
            </HardShadowButton>
            <HardShadowButton 
              className={`bg-blue-50 w-full`}
              onClick={() => handleNavigation("/contact")}
              popUpContent={
                <HardShadowRect className="text-justify w-full bg-white pt-14 p-2 ">
                  All the ways you can contact me for hiring
                </HardShadowRect>
              }
            >
              <div className="font-extrabold p-4 flex flex-row gap-3 items-center w-full justify-center">
                Contact
              </div>
            </HardShadowButton>
            {Object.entries(buttons).map(([key, button]) => (
              <HardShadowButton 
                key={key}
                className={`${button.color} w-full`}
                onClick={() => handleNavigation(button.route)}
                popUpContent={
                  <HardShadowRect className="bg-white pt-14 p-2 text-justify">
                    {button.summary}
                  </HardShadowRect>
                }
              >
                <div className="font-extrabold p-4">
                  {button.title}
                </div>
              </HardShadowButton>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!isExiting && (
          <motion.div 
            className="col-span-2"
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
            <Introduction/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
