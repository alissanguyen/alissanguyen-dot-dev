import * as React from "react";
import { FaGithub } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { mainProjects } from "~/constants";
interface Props {}

const MainProjects: React.FC<Props> = ({}) => {
  return (
    <div className="main-projects-wrapper grid grid-cols-3 gap-5">
      <script
        src="https://kit.fontawesome.com/aa319776fa.js"
        crossOrigin="anonymous"
      ></script>
      {mainProjects.map((project) => (
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
            <p className="text-sm italic text-sky-800">
              {project.technologies}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainProjects;
