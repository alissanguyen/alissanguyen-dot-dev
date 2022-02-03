import * as React from "react";
import League from "../assets/projects/frontend/league.png";
import Planets from "../assets/projects/frontend/planet.png";
import Lunar from "../assets/projects/frontend/lunar.png";
import Launch from "../assets/projects/frontend/countdown.png";
import Atom from "../assets/projects/frontend/atom.png";

const FrontendProjects: React.FC = ({}) => {
  const frontend = [
    {
      name: "Lunar",
      description: "A responsive landing page with parallax scrolling effects.",
      gitRepo: "https://github.com/alissanguyen/lunar",
      website: "https://lunar.alissanguyen.dev",
      background: "https://i.imgur.com/HZ8CIlR.png",
      icon: Lunar,
    },
    {
      name: "League of Legends Demo Landing Page",
      description: "A demo landing page for League of Legends with animations.",
      gitRepo: "https://github.com/alissanguyen/league-demo",
      website: "https://league.alissanguyen.dev",
      background: "https://i.imgur.com/Y7vnWZF.png",
      icon: League,
    },
    {
      name: "Launch Countdown",
      description: "A demo launch countdown page with animations.",
      gitRepo: "https://github.com/alissanguyen/launch-countdown",
      website: "https://launch.alissanguyen.dev",
      background: "https://i.imgur.com/OCiDNM0.jpg",
      icon: Launch,
    },
    {
      name: "Atom",
      description:
        "A responsive website with animations and futuristic design.",
      gitRepo: "https://github.com/alissanguyen/atom",
      website: "https://atom.alissanguyen.dev",
      background: "https://i.imgur.com/ZNulq75.png",
      icon: Atom,
    },
    {
      name: "Planets",
      description:
        "A responsive responsive landing page to learn about planets in the universe.",
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
      <div className="panels-container flex flex-row items-stretch justify-center">
        {frontend.map((project) => (
          <div
            className="panel text-white bg-center overflow-hidden relative m-2.5"
            style={{ backgroundImage: `url(${project.background})` }}
          >
            <div className="label right-0 flex absolute right-0">
              <div className="shadow absolute"></div>
              <div className="icon flex bg-white flex-row justify-center items-center">
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
