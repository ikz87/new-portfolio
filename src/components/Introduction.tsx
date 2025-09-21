import { HardShadowRect } from "./ui/HardShadowRect";

export function Introduction() {
  return (
    <HardShadowRect className="text-justify bg-white p-4 rounded-xl w-full flex flex-col gap-2">
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
  );
}
