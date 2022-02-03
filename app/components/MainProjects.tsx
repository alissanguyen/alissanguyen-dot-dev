import * as React from "react";
import Typewriter from "../assets/main/type.png";
import Crowdfund from "../assets/main/fund.png";
import Memory from "../assets/main/memory.png";
import Shop from "../assets/main/shop.png";
import Spotter from "../assets/main/spotter.png";
import Clipboard from "../assets/main/clipboard.png";
import { LogoNodejs } from "react-ionicons";

import { ExternalLinkIcon } from "@heroicons/react/outline";
interface Props {}

const MainProjects: React.FC<Props> = ({}) => {
  const projects = [
    {
      name: "useTypewriter Hook",
      description:
        "A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.",
      technologies: "React.js, Next.js, Javascript",
      gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
      website: "https://react-use-typewriter.vercel.app/",
      npm: "https://www.npmjs.com/package/use-typewriter-hook",
      icon: Typewriter,
    },
    {
      name: "Memory Game",
      description:
        "My own personal blog built with Remix, Prisma, and TailwindCSS",
      technologies:
        "Remix, Javascript, TailwindCSS, Javascript, Prisma, SQLite",
      gitRepo: "https://github.com/alissanguyen/portfolio-website",
      website: "https://alissanguyen.dev/",
      icon: Memory,
    },
    {
      name: "Dont Buy From Me",
      description:
        "A demo shopping website with add to cart features and purchases enabled",
      technologies: "React.js, Remix, Javascript, Stripe, TailwindCSS",
      gitRepo: "https://github.com/alissanguyen/dont-buy-from-me",
      website: "http://www.dontbuyfrom.me/",
      icon: Shop,
    },
    {
      name: "Clipboard Demo Page",
      description: "A package for hamburger menu. Easy to use and implement.",
      technologies: "Remix, React, Javascript",
      gitRepo: "",
      website: "",
      icon: Clipboard,
    },
    {
      name: "Github Spotter 2.0",
      description: "A clone website of Amazon",
      technologies: "Remix, React, Javascript",
      gitRepo: "",
      website: "",
      icon: Spotter,
    },
    {
      name: "Crowdfund",
      description: "A clone version of Netflix.",
      technologies: "Remix, React, Javascript",
      gitRepo: "",
      website: "",
      icon: Crowdfund,
    },
  ];

  return (
    <div className="main-projects-wrapper grid grid-cols-3 gap-5">
      <script
        src="https://kit.fontawesome.com/aa319776fa.js"
        crossOrigin="anonymous"
      ></script>
      {projects.map((project) => (
        <div className="main-project-container flex flex-col bg-white rounded-md p-10">
          <div className="main-project-header flex flex-row items-center justify-between">
            <img src={project.icon} className="w-7" alt="" />
            <div className="inline-flex items-center">
              <LogoNodejs
                color={"#00000"}
                rotate
                height="250px"
                width="250px"
                onClick={() => alert("Hi!")}
              />
              <ExternalLinkIcon />
            </div>
          </div>
          <div className="main-project-info flex flex-col justify-between">
            <p className="text-xl">{project.name}</p>
            <p className="text-base">{project.description}</p>
            <p className="text-sm">{project.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainProjects;
