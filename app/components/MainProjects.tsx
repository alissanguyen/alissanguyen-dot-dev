import * as React from "react";
import Typewriter from "../assets/projects/main/type.png";
import Crowdfund from "../assets/projects/main/fund.png";
import Memory from "../assets/projects/main/memory.png";
import Shop from "../assets/projects/main/shop.png";
import Spotter from "../assets/projects/main/spotter.png";
import Clipboard from "../assets/projects/main/clipboard.png";

import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";

import { ExternalLinkIcon } from "@heroicons/react/outline";
interface Props {}

const MainProjects: React.FC<Props> = ({}) => {
  const projects = [
    {
      name: "useTypewriter Hook",
      description:
        "A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.",
      technologies: "React.js, Next.js, TypeScript, CSS",
      gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
      website: "https://usetypewriter.com/",
      npm: "https://www.npmjs.com/package/use-typewriter-hook",
      icon: Typewriter,
    },
    {
      name: "Memory Game",
      description: "A memory game website.",
      technologies: "JavaScript, TypeScript, HTML & CSS",
      gitRepo: "https://github.com/alissanguyen/memory-game",
      website: "https://memory.alissanguyen.dev/",
      icon: Memory,
    },
    {
      name: "Dont Buy From Me",
      description:
        "A demo shopping website with add to cart features and purchases enabled",
      technologies: "Remix, Javascript, Stripe, TailwindCSS, Prisma",
      gitRepo: "https://github.com/alissanguyen/dont-buy-from-me",
      website: "http://www.dontbuyfrom.me/",
      icon: Shop,
    },
    {
      name: "Clipboard Demo Page",
      description:
        "A responsive landing page for a tool called Clipboard with animations.",
      technologies: "React,js, Javascript, HTML & SCSS",
      gitRepo: "https://github.com/alissanguyen/clipboard-page",
      website: "https://clipboard.alissanguyen.dev",
      icon: Clipboard,
    },
    {
      name: "Github Spotter 2.0",
      description:
        "A website designed to search GitHub users by usernames with Github API",
      technologies: "React.js, Javascript, HTML, SCSS & CSS",
      gitRepo: "https://github.com/alissanguyen/github-spotter-2",
      website: "https://githubspotter2.alissanguyen.dev",
      icon: Spotter,
    },
    {
      name: "Crowdfund",
      description: "A responsive demo landing page for crowdfunding projects.",
      technologies: "React.js, Javascript, HTML & CSS",
      gitRepo: "https://github.com/alissanguyen/demo-crowdfunding-page",
      website: "https://crowdfund.alissanguyen.dev",
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
        <div className="main-project-container flex flex-col rounded-3xl p-5 hover:translate-y-[-.5rem] hover:ease-in hover:duration-100 hover:">
          <div className="main-project-header flex flex-row items-center justify-between">
            <img src={project.icon} className="w-7" alt="" />
            <div className="inline-flex items-center">
              {project.npm ? (
                <ImNpm className="w-6 mr-2 hover:text-red-600" />
              ) : null}
              <FaGithub className="w-6 mr-2 hover:text-sky-600" />
              <ExternalLinkIcon className="w-7 hover:text-teal-500" />
            </div>
          </div>
          <div className="main-project-info flex flex-col justify-between mt-5">
            <p className="text-xl font-semibold mb-5">{project.name}</p>
            <p className="text-base mb-5">{project.description}</p>
            <p className="text-sm italic text-sky-800">{project.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainProjects;
