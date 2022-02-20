import * as React from "react";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";
import { recentProjects } from "~/constants";

const RecentProjects: React.FC = ({}) => {
  return (
    <div className="front-end-wrapper flex flex-col text-textSmColor w-full">
      <div className="gradient-title text-center lg:text-[9rem] md:text-[7rem] sm:text-[4rem] xs:text-[3rem] text-[2.5rem] overflow-visible text-transparent">
        Recent projects
      </div>
      <div className="h-12"></div>

      <div className="recent-projects-wrapper grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-10 md:gap-10 md:px-5">
        {recentProjects.map((project) => (
          <div
            className="recent-project-card bg-projects-recentBg text-center flex flex-col rounded-lg duration-300 hover:bg-projects-recentHover focus:bg-projects-recentHover shadow-lg shadow-projects-recentShadow items-center justify-between"
            key={project.name}
          >
            <img
              src={project.img}
              alt="barbarian"
              className="lg:h-56 md:h-40 w-full rounded-t-lg"
            />
            <div className="recent-project-content px-5 pt-3 lg:pt-5 lg:px-10">
              <div className="recent-project-card-title font-medium text-2xl pb-3 sm:pb-5">
                {project.name}
              </div>
              <div className="recent-project-card-description text-base text-subText pb-5">
                {project.description}
              </div>
            </div>
            <div className="recent-project-buttons flex flex-row items-center justify-center text-sm pb-5">
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
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
