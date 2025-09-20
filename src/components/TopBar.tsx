import { HardShadowButton } from "./ui/HardShadowButton.tsx";
import { HardShadowRect } from "./ui/HardShadowRect.tsx";
import { Github, Linkedin, Mail, Menu, Code } from "lucide-react";

type TopBarProps = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function TopBar({ setIsSidebarOpen }: TopBarProps) {
  return (
    <div className="mx-auto w-full max-w-4xl flex flex-row h-16">
      <HardShadowRect className="flex items-center flex-row sm:rounded-xl rounded-l-xl w-full bg-amber-50 h-full overflow-visible">
        <div className="w-full md:text-lg flex md:gap-3 gap-2 items-center">
          <h1 className="pl-4 font-extrabold">ikz87's portfolio</h1>
          <a
            target="_blank"
            href="mailto:i.arcia135@gmail.com"
            className="sm:flex hidden border-black hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 "
          >
            <Mail className="text-red-600" />
            i.arcia135@gmail.com
          </a>
          <a
            target="_blank"
            href="https://github.com/ikz87/new-portfolio"
            className="sm:flex hidden border-black hover:text-blue-500 p-1 bg-white rounded-lg items-center px-2 my-1 border-3 gap-2 "
          >
            <Code className="text-green-600" />
            View source
          </a>
        </div>
        <div className="pr-4 flex flex-row gap-3">
          <a
            className="border-3 rounded-full p-2 bg-gray-700 text-white border-black"
            target="_blank"
            href="https://github.com/ikz87"
          >
            <Github />
          </a>
          <a
            className="border-3 rounded-full p-2 border-black text-white bg-blue-700"
            target="_blank"
            href="https://www.linkedin.com/in/isaac-arcia-9b408932a/"
          >
            <Linkedin />
          </a>
        </div>
      </HardShadowRect>
      <div className="w-fit">
        <HardShadowButton
          popUpContent={null}
          onClick={() => {
            setIsSidebarOpen(true);
          }}
          aria-label="Open sidebar menu"
          className="-ml-2 p-4 cursor-pointer sm:hidden bg-blue-50 h-16 flex !rounded-l-none items-center"
        >
          <Menu strokeWidth={3} className="" />
        </HardShadowButton>
      </div>
    </div>
  );
}
