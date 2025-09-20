import { SectionLayout } from "@/components/ui/SectionLayout";

const projectsData = {
  "kzooting": {
    title: "The kzooting project",
    period: "",
    link: "https://github.com/ikz87/rpp-osu-keypad",
    additionalLinks: [
      "https://github.com/ikz87/kzooting-GUI"
    ],
    content: [
      "The kzooting is a completely DIY analog keypad inspired by wooting keyboards, and thus, posseses rapid trigger technology. The project started by modifying MX Reds keyboard switches by attaching a small neodimium magnet below the switch stem and glueing a linear hall effect sensor below the switch casing.",
      "After some microcontroller programming on a Raspberry Pi Pico, the first kzooting prototype was alive and working!",
      "I proceeded to modify the seven remaining switches and building a whole casing out of materials I had laying around.",
      "With the kzooting complete, I developed (with the help of a cousin (ty calito <3)) a GUI desktop client written in Python using PyQt5 that allowed me to easily visualize the state of each key and configure all parameters related to key activation.",
      "The last thing I worked on for this project was a nice looking key visualizer for when I play osu! with the device. You can also check a full video with a prototype of this visualizer here.",
      "I presented this as a final project for my 'machines and computers' course. If you know spanish, you can check this document explaining every detail about the project."
    ],
    images: [
      {
        url: "/images/kzooting-switch.webp",
        alt: "Pictures of a modified MX red switch"
      },
      {
        url: "/images/kzooting-prototype.gif",
        alt: "A GIF of the first kzooting prototype"
      },
      {
        url: "/images/kzooting-casing.webp",
        alt: "A Picture of the complete kzooting casing"
      },
      {
        url: "/images/kzooting-client.webp",
        alt: "Screenshot of my desktop with the kzooting GUI client open"
      },
      {
        url: "/images/kzooting-visualizer.gif",
        alt: "A GIF showcasing the kzooting key visualizer"
      }
    ]
  },
  "facial-tracking": {
    title: "Phone facial tracking",
    period: "",
    link: "https://github.com/ikz87/phone-facial-tracking",
    content: [
      "This project consisted on a device that could move my phone using two servomotors and processing real time video from the phone's camera so that it could track faces.",
      "I started by assembling a base with the servomotors that could securely hold my phone in place. With that done, I wrote some code to interface with the microcontroller (a Raspberry Pi Pico) to manually move the servos so I could test the device. Then came some coding with OpenCV (in Python) and a *lot* of math to calculate the angle needed to move each servomotor so that the tracking would be as precise as possible.",
      "With the project being done, I also built a desktop app with PyQT5 to show general real time information and a 3D simulation of the tracking taking place.",
      "I presented this as a final project for my 'Control Systems' course. If you know spanish, you can check this document, where you'll find more information about the project, especially all the math behind it."
    ],
    images: [
      {
        url: "/images/pft-demo.gif",
        alt: "A GIF showcasing real time facial tracking"
      },
      {
        url: "/images/pft-base.webp",
        alt: "Picture of the facial tracking device's base"
      },
      {
        url: "/images/pft-app.webp",
        alt: "Picture of the facial tracking desktop app"
      },
      {
        url: "/images/pft-math.webp",
        alt: "Picture of the 3D simulation for the facial tracking app"
      }
    ]
  },
  "yawns": {
    title: "Yawns",
    period: "",
    link: "https://github.com/ikz87/yawns",
    content: [
      "Yawns is a notification manager (or daemon) built with PyQt out of the necessity for highly customizable, adaptable notifications. Why would your notification for a brightness change look the same as your Spotify song change notification? Or even an email one? Yawns offers multiple ways to show desktop notifications depending on the notification title, summary, app name or 'yawn type'.",
      "Although it's a somewhat unfinished project, It's still fully functional and I use it to this day on my linux installation."
    ],
    images: [
      {
        url: "/images/yawns-demo.gif",
        alt: "A GIF demonstrating different types of yawns"
      }
    ]
  },
  "vector-swizzling": {
    title: "Python vector swizzling",
    period: "",
    link: "https://github.com/ikz87/python-vector-swizzling",
    additionalLinks: [
      "https://pypi.org/project/vector-swizzling/"
    ],
    content: [
      "This Python library provides flexible and intuitive vector manipulation with swizzling capabilities, designed to resemble GLSL vector handling for 2D, 3D, and 4D vectors. Originally built for my facial tracking project, I decided to publish this as my first Python package in PyPi."
    ]
  },
  "tty-cube": {
    title: "TTY cube",
    period: "",
    link: "https://github.com/ikz87/tty-cube",
    content: [
      "This C program renders a rotating cube on your TTY via frame buffer. The program provides tons of configuration options to customize the appearance and behavior of the cube. Even implementing image rendering and (sort of) fragment shaders.",
      "The cube is rendered using basic linear algebra and analytic geometry with a solution I came with while knowing nothing about actual rasterization."
    ],
    images: [
      {
        url: "/images/tty-cube-demo.gif",
        alt: "A GIF demonstrating TTY cube running"
      }
    ]
  }
};

export default function Projects() {
  return (
    <SectionLayout 
      items={projectsData} 
      defaultSelected="kzooting" 
    />
  );
}

