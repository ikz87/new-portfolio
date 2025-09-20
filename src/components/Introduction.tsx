import { HardShadowRect } from "./ui/HardShadowRect";

export function Introduction(){
  return (
    <HardShadowRect className="text-justify bg-white p-4 rounded-xl w-full flex flex-col gap-2">
      <p className="font-extrabold text-blue-700">
        Introduction
      </p>
      <p>
        Hi, my name is Isaac Arcia and I'm an electronic engineer and self taught developer. During the pandemic in 2020, in my first year of college, I attended the in-person course CS50x.ni. Having completed the course successfully (see my certificate) I ended up developing a passion for anything coding related and thus have gathered tons of experience, but mostly from hobby-ish projects.
      </p>
      <p>
        My actual work experience comes from as little as (almost) two years ago when I worked along a cousin of mine for a local financial institution, developing a new system for managing client loans among other things. Since then, I've been working on and off as a freelancer for other local companies. Now, as I'm about to graduate, I'm looking for a more stable, remote job as a Full-stack developer. If you like what you see here and have an open position at your company, I'd love to hear from you.
      </p>
      <p className="mt-4 font-extrabold text-pink-500">
        Skills
      </p>
      <p>
        I have experience using the following tools:
        <ul className="list-disc list-outside ml-4">
          <li>
            Frontend: Svelte, React, TypeScript, Tailwind
          </li>
          <li>
            Backend: Python (Flask, Strawberry GraphQL, Psycopg, Prisma, FastAPI), PostgreSQL
          </li>
          <li>
            Infra: Supabase, Auth0, Render, AWS, Google Cloud, Bash, SSH, Linux
          </li>
        </ul>
      </p>
      <p className="mt-4 font-extrabold text-green-600">
        Experience
      </p>
      <p>
        <ul className="list-disc list-outside ml-4">
          <li>
            Desarrollo Integral, Full-stack developer (August 2023 - March 2024)
          </li>
          <li>
            Ecuación Futuro, Front-end developer (April 2024 - July 2024)
          </li>
          <li>
            Opti-Grow Consulting Group, Front-end developer (September 2024 - October 2024)
          </li>
          <li>
            SeniorThrive, Full-stack developer (April 2025 - Now)
          </li>
        </ul>
      </p>
      <p className="mt-4">
        Please refer to my <a href="/documents/Isaac Arcia resume.pdf" download className="text-blue-700 underline">resume</a> for a more detailed breakdown of my roles in the mentioned positions.
      </p>
    </HardShadowRect>
  )}
