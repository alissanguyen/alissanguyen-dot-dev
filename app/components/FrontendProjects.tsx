import * as React from "react";
import { frontendProjects } from "~/constants";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const FrontendProjects: React.FC = ({}) => {
  return (
    <div className="front-end-wrapper">
      <div className="recent-title">Recent Works</div>
      <div className="recent-projects-wrapper grid grid-cols-2 gap-10">
        {frontendProjects.map((project) => (
          <div className="recent-project-card flex flex-col justify-between rounded-b-lg h-full shadow-lg hover:scale-105 duration-200">
            <img
              className="object-cover max-h-80 rounded-t-xl"
              src={project.background}
              alt=""
            />
            <div className="recent-project-card-content h-full justify-between rounded-b-xl grid grid-cols-6 p-8">
              <div className="content-body flex flex-col items-baseline col-span-5">
                <p className="text-lg font-semibold mb-2">{project.name}</p>
                <p className="text-base">{project.description}</p>
              </div>
              <div className="content-links flex flex-row justify-self-end">
                <a href={project.gitRepo} target="_blank">
                  <FaGithub className="recent-project-icon text-gray-900 hover:text-sky-500 mr-2" />
                </a>
                <a href={project.website} target="_blank">
                  <FiExternalLink className="recent-project-icon text-gray-900 hover:text-teal-500" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendProjects;
