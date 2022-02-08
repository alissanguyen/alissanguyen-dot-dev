import * as React from "react";
import { mainProjects } from "~/constants";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";

const FeaturedProjects: React.FC = ({}) => {
  return (
    <div className="main-projects-wrapper grid grid-cols-1 gap-14">
      {mainProjects.map((project) => (
        <div
          className="main-project-card grid grid-cols-2 bg-cover gap-10 p-10"
          style={{ backgroundImage: `${project.background}` }}
          key={project.name}
        >
          <img src={project.img} className="main-project-img" alt="" />
          <div className="main-project-content flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="main-project-title font-semibold text-3xl pb-5">
                {project.name}
              </p>
              <p className="main-project-description text-base pb-3">
                {project.description}
              </p>
              <p className="main-project-time text-sm text-gray-700 pb-5">
                2020 — Design & web development{" "}
              </p>
            </div>
            <div className="main-project-frameworks flex flex-col">
              {project.frameworks.map((framework) => (
                <div className="inline-flex items-center" key={framework}>
                  <ArrowSmRightIcon className="text-gray-400 w-5 mr-3" />
                  <p className="text-[15px] text-gray-800 leading-7">
                    {framework}
                  </p>
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
              {project.npm ? (
                <div className="inline-flex">
                  <div className="mr-4"></div>
                  <ExternalLinkButton
                    to={project.npm}
                    linkProps={{
                      target: "_blank"
                    }}
                  >
                    View on NPM
                  </ExternalLinkButton>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
