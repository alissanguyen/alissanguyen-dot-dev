import * as React from "react";
import Crowdfund from "../assets/frontend/crowdfund.png";
import Clipboard from "../assets/frontend/clipboard.png";
import League from "../assets/frontend/league.png";
import Memory from "../assets/frontend/memory.png";
import Planets from "../assets/frontend/planet.png";

const FrontendProjects: React.FC = ({}) => {
  const frontend = [
    {
      name: "Crowdfunding Page",
      description:
        "A responsive website with animations built with HTML, React, and CSS",
      gitRepo: "https://github.com/alissanguyen/demo-crowdfunding-page",
      website: "https://crowdfund.alissanguyen.dev",
      background: "https://i.imgur.com/0l4fjhw.png",
      icon: Crowdfund,
    },
    {
      name: "Memory Game",
      description: "A memory game website built with JS, TS, HTML, and CSS.",
      gitRepo: "https://github.com/alissanguyen/memory-game",
      website: "https://memory.alissanguyen.dev",
      background: "https://i.imgur.com/W68TPCp.png",
      icon: Memory,
    },
    {
      name: "Clipboard Landing Page",
      description:
        "A landing page for gamers to track your gaming progress with glass-like and neumorphism design.",
      gitRepo: "https://github.com/alissanguyen/clipboard-page",
      website: "https://clipboard.alissanguyen.dev",
      background: "https://i.imgur.com/IYmYs8D.jpg",
      icon: Clipboard,
    },
    {
      name: "League of Legends demo landing page",
      description: "A demo landing page for League of Legends with animations.",
      gitRepo: "https://github.com/alissanguyen/league-demo",
      website: "https://league.alissanguyen.dev",
      background: "https://i.imgur.com/Zfc53OT.png",
      icon: League,
    },
    {
      name: "Planets",
      description: "A responsive website built with HTML and CSS",
      gitRepo: "https://github.com/alissanguyen/planets",
      website: "https://planets.alissanguyen.dev",
      background: "https://i.imgur.com/1vapt4c.png",
      icon: Planets,
    },
  ];

  React.useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    function removeActiveClasses() {
      panels.forEach((panel) => panel.classList.remove("active"));
    }
    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });
  });

  return (
    <div className="front-end-wrapper">
      <script
        src="https://kit.fontawesome.com/aa319776fa.js"
        crossOrigin="anonymous"
      ></script>
      <div className="panels-container flex flex-row items-stretch justify-center">
        {frontend.map((project) => (
          <div
            className="panel text-white bg-center overflow-hidden relative m-2.5 active:m-2 "
            style={{ backgroundImage: `url(${project.background})` }}
          >
            <div className="label right-0 flex absolute right-0">
              <div className="shadow absolute"></div>
              <div className="icon flex bg-black flex-row justify-center items-center">
                <img src={project.icon} className="w-6 " alt="" />
              </div>
              <div className="info flex flex-col justify-center items-baseline text-white whitespace-pre ml-2.5">
                <div className="panel-name relative opacity-0 font-bold text-lg">
                  {project.name}
                </div>
                <div className="panel-description relative opacity-0 text-base">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendProjects;
