import * as React from "react";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";
import { recentProjects } from "~/constants";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";

const RecentProjects: React.FC = ({}) => {
  return (
    <div className="front-end-wrapper flex flex-col text-textSmColor w-full">
      <div className="recent-projects-wrapper grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-10 md:gap-10 md:px-5">
        {recentProjects.map((project) => (
          <div
            className="recent-project-card bg-projects-recentBg bg-opacity-20 text-center flex flex-col rounded-lg duration-300 hover:bg-projects-recentHover focus:bg-projects-recentHover items-center justify-between"
            key={project.name}
          >
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
              
                accessibilityName="View source code"
              >
                View source
              </ExternalLinkButton>
              <div className="mr-4"></div>
              <ExternalLinkButton
                to={project.website}
                accessibilityName="Visit website"
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
