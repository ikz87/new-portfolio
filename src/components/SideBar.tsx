import { motion, AnimatePresence } from "motion/react";
import { HardShadowButton } from "@/components/ui/HardShadowButton";
import { HardShadowRect } from "@/components/ui/HardShadowRect";
import { Download, Mail, Code, X } from "lucide-react";

type SideBarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavigation: (path: string) => void;
};

export function SideBar({
  isSidebarOpen,
  setIsSidebarOpen,
  handleNavigation,
}: SideBarProps) {
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
    home: {
      title: "Home",
      summary: "Go to home page",
      route: "/",
      color: "bg-blue-50",
    },
  };

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="top-0 left-0 z-50 fixed">
            <div className="w-dvw h-screen flex bg-black/50 flex-row-reverse items-end justify-end">
              <div className="h-full max-w-96 origin-right">
                <motion.div 
                  initial={{x: "100%"}}
                  animate={{x: 0}}
                  exit={{x: "100%"}}
                  transition={{ type: "tween", ease: "easeInOut" }}
                  className="relative border-r-black max-w-96 border-r-3 translate-x-2 bg-amber-50 h-full w-max"
                >
                <div 
                    onClick={()=>{setIsSidebarOpen(false)}}
                  className="absolute flex items-center cursor-pointer justify-center bg-white z-20 top-2 right-2 h-10 aspect-square rounded-full border-3">
                  <X strokeWidth={3}/>
                </div>
                <HardShadowRect className="w-full h-full border-y-0 bg-amber-50 flex flex-col-reverse items-center justify-center gap-4 py-4">
                  <div className="w-full flex flex-col justify-center">
                    <div className="px-2 w-full grid grid-cols-2 gap-2 text-sm">
                      <a target="_blank" href="mailto:i.arcia135@gmail.com" className="justify-center flex border-black hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 ">
                        <Mail className="text-red-600"/>
                        Email me
                      </a>
                      <a target="_blank" href="https://github.com/ikz87/new-portfolio" className="justify-center flex border-black hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 ">
                        <Code className="text-green-600"/>
                        Source
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col-reverse w-full gap-4 pr-4 pl-2">
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
                  </div>
                </HardShadowRect>
              </motion.div>
              </div>
              <div onClick={()=>{setIsSidebarOpen(false)}} className=" w-full h-full">
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
