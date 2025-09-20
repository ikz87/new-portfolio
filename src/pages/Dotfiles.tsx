import { SectionLayout } from "@/components/ui/SectionLayout";

const dotfilesData = {
  dotfiles: {
    title: "Dotfiles",
    period: "",
    link: "https://github.com/ikz87/dots-2.0",
    content: [
      "This had to be in its own section, because that's just how much I love this very niche part of coding as a hobby.",
      "For the uninitiated, the term 'dotfiles' usually refers to everything inside the ~/.config/ folder in linux, meaning, every file that *configures* your apps/programs. For a programer and linux power user like me, configuring these files (usually called ricing) is nothing short of an art form.",
      "I've spent countless hours making what I consider to be my end game rice, which I've been using for about 3 years at this point.",
      "My rice consists of a BSPWM and EWW setup that automatically generates a colorscheme for every important program I use based on my current wallpaper. My rice is like a home, it's where I work from and it's honestly one of the things that motivates me every time I sit down to code.",
    ],
    images: [
      {
        url: "/images/rice-ryo.gif",
        alt: "A GIF showcasing my rice in real time",
      },
      {
        url: "/images/rice-ultrakill.webp",
        alt: "Screenshot showcasing my rice",
      },
      {
        url: "/images/rice-planets.webp",
        alt: "Screenshot showcasing my rice",
      },
    ],
  },
};

export default function Dotfiles() {
  return <SectionLayout items={dotfilesData} defaultSelected="dotfiles" />;
}
