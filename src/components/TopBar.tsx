import { HardShadowRect } from "./ui/HardShadowRect.tsx";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export function TopBar() {
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
