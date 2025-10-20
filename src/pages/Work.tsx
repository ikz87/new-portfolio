import { SectionLayout } from "@/components/SectionLayout";

const workData = {
  "desarrollo-integral": {
    title: "Desarrollo Integral",
    period: "August 2023 - March 2024",
    content: [
      "This financial company had been using a system based on google sheets from the start, but as they grew in size, this proved to be inefficient.",
      "My role involved developing a script that automatically scraped data from Google Sheets and converted it into a PostgreSQL database. I also created an API using Python, psycopg2, and Strawberry GraphQL. Finally, I designed and developed a web app with React, Typescript and Tailwind.",
      "Needless to say, this software is private, but I've attached some screenshots showing two of several pages that interfaced with the backend to register data (new clients and loans in this case) and the login screen for company staff.",
    ],
    images: [
      {
        url: "/images/di-clients.webp",
        alt: "Screenshot of client registration page for desarrollo integral",
      },
      {
        url: "/images/di-loan.webp",
        alt: "Screenshot of loan processing page for desarrollo integral",
      },
      {
        url: "/images/di-login.webp",
        alt: "Screenshot of login page for desarrollo integral",
      },
    ],
  },
  "opti-grow": {
    title: "Opti-Grow",
    period: "September 2024 - October 2024",
    link: "https://www.optigrowinvest.com/#Inicio",
    content: [
      "Opti-Grow is a company that offers agronomic consultations. After working as an 'IT guy' for its founder and director Ricardo Navarro, he offered to hire me as a freelancer to develop a website for his company.",
      "My role in this job was to follow previously established design ideas and adapt them to a responsive and professional looking website built with Svelte and deployed on an AWS S3 bucket with Cloudfront.",
    ],
    images: [
      {
        url: "/images/og-home.webp",
        alt: "Screenshot of Opti-Grow's home page",
      },
      {
        url: "/images/og-about.webp",
        alt: "Screenshot of Opti-Grow's about page",
      },
      {
        url: "/images/og-contact.webp",
        alt: "Screenshot of Opti-Grow's contact info page",
      },
    ],
  },
  "ecuacion-futuro": {
    title: "Ecuación Futuro",
    period: "April 2024 - July 2024",
    link: "https://ecuacionfuturo.org/#Home",
    content: [
      "Founded by Paulina Taboada, this is a non-profit organization that aims at raising the level of mathematical proficiency for children in state of vulnerability as an opportunity for human development. As of 2025, they have helped over 300 children to develop their math skills beyond what most children their age know.",
      "In the past, I had helped Paulina as a programming tutor, so when they needed a website for Ecuación Futuro, her mom was nice enough to give me the opportunity to work for them as a front-end developer.",
      "My role involved designing and developing a Svelte app that could communicate (in both english and spanish) the passion that Paulina and her team have for teaching, and deploying it in an EC2 instance using Nginx for routing. I built the first version of the website in about a month but stayed in contact with Paulina for some time after that to update information as they saw fit.",
    ],
    images: [
      {
        url: "/images/ef-home.webp",
        alt: "Screenshot of Ecuación Futuro's home page",
      },
      {
        url: "/images/ef-projects.webp",
        alt: "Screenshot of Ecuación Futuro's projects page",
      },
      {
        url: "/images/ef-volunteers.webp",
        alt: "Screenshot of Ecuación Futuro's volunteers page",
      },
    ],
  },
  "seniorthrive": {
    title: "SeniorThrive",
    period: "March 2025 - October 2025",
    link: "https://seniorthrive.com/",
    content: [
      "SeniorThrive is a platform that helps older adults live safely and independently at home through AI-driven insights and family collaboration tools.",
      "I developed the Room Scans feature, which analyzes room photos with AI to detect safety risks and provide personalized recommendations along with a safety score.",
      "I also designed and built the ThriveCircle system: a hierarchical structure connecting older adults, family members, and caregivers with specific roles, permissions, and recovery for deleted data.",
      "Additionally, I worked on the Supabase database architecture, authentication, and overall API, as well as features like shared documents, goal tracking, and task management linked to room scan insights.",
    ],
    images: [
      {
        url: "/images/seniorthrive-room-scan.webp",
        alt: "Screenshot of Room Scan page",
      },
      {
        url: "/images/seniorthrive-circle-settings.webp",
        alt: "Screenshot of ThriveCircle settings modal",
      },
      {
        url: "/images/seniorthrive-todos.webp",
        alt: "Screenshot of Home Safety todo's page",
      },
      {
        url: "/images/seniorthrive-scan-history.webp",
        alt: "Screenshot of Room Scan History page",
      },
      {
        url: "/images/seniorthrive-profile-hub.webp",
        alt: "Screenshot of Profile Hub page",
      },
    ],
  },
};

export default function Work() {
  return (
    <SectionLayout items={workData} defaultSelected="desarrollo-integral" />
  );
}
