import * as React from "react";
import { frontendProjects } from "~/constants";


const FrontendProjects: React.FC = ({}) => {
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
        {frontendProjects.map((project) => (
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
