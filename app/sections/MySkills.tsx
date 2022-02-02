import * as React from "react";
import JavascriptIcon from "../assets/tech/javascript.png";
import CSSIcon from "../assets/tech/css.png";
import FirebaseIcon from "../assets/tech/firebase.png";
import TypescriptIcon from "../assets/tech/typescript.png";
import FramerIcon from "../assets/tech/framer.png";
import HTMLIcon from "../assets/tech/html.png";
import MongoIcon from "../assets/tech/mongo.png";
import AirtableIcon from "../assets/tech/airtable.png";
import NetlifyIcon from "../assets/tech/netlify.png";
import NextIcon from "../assets/tech/next.png";
import NodeIcon from "../assets/tech/node.png";
import NPMIcon from "../assets/tech/npm.png";
import PrismaIcon from "../assets/tech/prisma.png";
import ReactIcon from "../assets/tech/react.png";
import RemixIcon from "../assets/tech/remix.png";
import SendGridIcon from "../assets/tech/sendgrid.png";
import SQLiteIcon from "../assets/tech/sqlite.png";
import StripeIcon from "../assets/tech/stripe.png";
import SupabaseIcon from "../assets/tech/supabase.png";
import TailwindIcon from "../assets/tech/tailwind.png";
import VercelIcon from "../assets/tech/vercel.png";
import ContentfulIcon from "../assets/tech/contentful.png";

import { CodeIcon } from "@heroicons/react/outline";

const MySkills: React.FC = ({}) => {
  const skills = [
    {
      id: "a",
      name: "Javascript",
      icon: JavascriptIcon,
    },
    {
      id: "b",
      name: "Typescript",
      icon: TypescriptIcon,
    },
    {
      id: "c",
      name: "React.js",
      icon: ReactIcon,
    },
    {
      id: "d",
      name: "HTML",
      icon: HTMLIcon,
    },
    {
      id: "e",
      name: "CSS",
      icon: CSSIcon,
    },
    {
      id: "f",
      name: "Firebase",
      icon: FirebaseIcon,
    },
    {
      id: "g",
      name: "Netlify",
      icon: NetlifyIcon,
    },
    {
      id: "h",
      name: "Supabase",
      icon: SupabaseIcon,
    },
    {
      id: "i",
      name: "MongoDB",
      icon: MongoIcon,
    },
    {
      id: "j",
      name: "Stripe",
      icon: StripeIcon,
    },
    {
      id: "k",
      name: "Next.js",
      icon: NextIcon,
    },
    {
      id: "l",
      name: "Tailwind",
      icon: TailwindIcon,
    },
    {
      id: "m",
      name: "Framer",
      icon: FramerIcon,
    },
    {
      id: "n",
      name: "Airtable",
      icon: AirtableIcon,
    },
    {
      id: "o",
      name: "NPM",
      icon: NPMIcon,
    },
    {
      id: "p",
      name: "Sendgrid",
      icon: SendGridIcon,
    },
    {
      id: "q",
      name: "Prisma",
      icon: PrismaIcon,
    },
    {
      id: "r",
      name: "Vercel",
      icon: VercelIcon,
    },
    {
      id: "s",
      name: "Remix",
      icon: RemixIcon,
    },
    {
      id: "t",
      name: "SQLite",
      icon: SQLiteIcon,
    },
    {
      id: "u",
      name: "Node",
      icon: NodeIcon,
    },
    {
      id: "v",
      name: "Contentful",
      icon: ContentfulIcon,
    },
  ];
  const abilities = [
    "Create responsive and efficient web pages with React or Remix, with functional components and SSR for better user experience.",
    "Integration with third-parties like Vercel, Netlify, and NextJS to deploy websites and deliver best web performance to users.",
    "Data management with Firestore, Prisma, and Supabase. Implementation of web security/authorization with Firestore & Socket.io and email communication with Sendgrid.",
    "Aplication of modern libraries and frameworks like TailwindCSS, Headless UI, Framer Motion,... to create beautiful and reusable web layout designs.",
  ];

  return (
    <div className="skills-container">
      <div className="skills-section-and-chart-wrapper grid grid-cols-6 gap-10">
        <div className="flex flex-col col-span-4">
          <h1 className="text-5xl font-bold mb-10">
            Technologies I have been working with
          </h1>

          <div
            className={`skills-wrapper grid  grid-cols-5 gap-10 max-w-6xl m-auto`}
          >
            {skills.map((skill) => (
              <div
                className="skill-card relative left-0 top-0 w-full p-4 h-full w-full items-center text-center"
                key={skill.id}
              >
                <div className="blurred absolute left-0 top-0 w-full h-full"></div>
                <div className=" flex flex-col justify-between">
                  <img src={skill.icon} alt="" className="w-[3.5rem]" />
                  <p className="text-sm">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="abilities-wrapper col-span-2">
          <p className="text-2xl">Why Me ?</p>
          {abilities.map((ability) => (
            <li
              key={abilities.findIndex((ability) => ability === ability)}
              className="ability-card flex justify-center items-center text-center my-5"
            >
              <p className="text-base">{ability}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
