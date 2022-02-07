import * as React from "react";
import { recentProjects, mainProjects, otherProjects } from "~/constants";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";

interface Props {}

const Projects: React.FC<Props> = ({}) => {
  return (
    <div>
      <svg viewBox="0 0 1280 400" className="my-projects-title">
        <text textAnchor="middle" x="50%" y="70%">
          My projects
        </text>
      </svg>
      <MainProjects />
      <div className="mt-24"></div>
      <FrontendProjects />
      <div className="mt-24"></div>
      <OtherProjects />
    </div>
  );
};

export default Projects;

const MainProjects: React.FC<Props> = ({}) => {
  return (
    <div className="main-projects-wrapper grid grid-cols-1 gap-14">
      {mainProjects.map((project) => (
        <div
          className="main-project-card grid grid-cols-2 bg-cover gap-10 p-10"
          style={{ backgroundImage: `${project.background}` }}
        >
          <img src={project.img} className="main-project-img" alt="" />
          <div className="main-project-content">
            <p className="main-project-title font-bold text-3xl pb-5">
              {project.name}
            </p>
            <p className="main-project-description text-lg pb-3">
              {project.description}
            </p>
            <p className="main-project-time text-sm pb-5">
              2020 — Design & web development{" "}
            </p>
            <div className="main-project-frameworks flex flex-col">
              {project.frameworks.map((framework) => (
                <div className="inline-flex items-center" key={framework}>
                  <ArrowSmRightIcon className="text-gray-700 w-6 mr-3" />
                  <p className="text-base">{framework}</p>
                </div>
              ))}
            </div>
            <div className="main-project-buttons flex flex-row items-center justify-start text-base">
              <ExternalLinkButton
                to={project.gitRepo}
                linkProps={{
                  target: "_blank"
                }}
              >
                View source
              </ExternalLinkButton>
              <div className="mr-4"></div>
              <ExternalLinkButton
                to={project.website}
                linkProps={{
                  target: "_blank"
                }}
              >
                Visit Website
              </ExternalLinkButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const FrontendProjects: React.FC = ({}) => {
  return (
    <div className="front-end-wrapper flex flex-col">
      <h1 className="recent-projects-title relative text-9xl text-center">
        Recent Works
      </h1>
      <div className="h-12"></div>

      <div className="recent-projects-wrapper grid grid-cols-2 gap-10">
        {recentProjects.map((project) => (
          <div
            className="recent-project-card flex flex-col justify-baseline items-center bg-cover p-10 hover:scale-105 duration-200 shadow-lg"
            style={{ backgroundImage: `${project.background}` }}
          >
            <img
              src={project.img}
              className="recent-project-img mb-10"
              alt=""
            />
            <div className="recent-project-content">
              <p className="recent-project-title font-bold text-3xl pb-5">
                {project.name}
              </p>
              <p className="recent-project-description text-lg pb-3">
                {project.description}
              </p>
              <div className="recent-project-buttons flex flex-row items-center justify-start text-base">
                <a
                  href={project.gitRepo}
                  target="_blank"
                  className="project-button"
                >
                  <button className="">View source</button>
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  className="project-button"
                >
                  <button className="">Visit website</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OtherProjects: React.FC<Props> = ({}) => {
  return (
    <div className="others-wrapper">
      <ul className="other-projects-wrapper m-0 p-0 text-base flex flex-col justify-baseline">
        {otherProjects.map((project) => (
          <li className="other-project-wrapper flex flex-row items-center justify-between">
            <div className="info inline-flex items-center">
              <img src={project.icon} alt={project.name} />
              <p> {project.name} </p>
            </div>
            <span className=""> {project.description} </span>
            <a className="button" href={project.gitRepo} target="_blank">
              <span>View code</span>

              <svg
                fill="none"
                height="20"
                stroke="currentColor"
                stroke-linecap="square"
                stroke-linejoin="arcs"
                stroke-width="1"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h13M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span>Visit website</span>
          </li>
        ))}

        {/* {otherProjects.map((project) => (
          <div className="other-project-card flex flex-col justify-between rounded-b-lg h-full shadow-lg hover:scale-105 duration-200">
            <div className="other-project-card-content h-full justify-between rounded-b-xl grid grid-cols-6 p-8">
              <div className="content-body flex flex-col items-baseline col-span-5">
                <p className="text-lg font-semibold mb-2">{project.name}</p>
                <p className="text-base">{project.description}</p>
              </div>
              <div className="content-links flex flex-row justify-self-end">
                <a href={project.gitRepo} target="_blank">
                  <FaGithub className="other-project-icon text-gray-900 hover:text-sky-500 mr-2" />
                </a>
                <a href={project.website} target="_blank">
                  <FiExternalLink className="other-project-icon text-gray-900 hover:text-teal-500" />
                </a>
              </div>
            </div>
          </div>
        ))} */}
      </ul>
    </div>
  );
};
