import * as React from "react";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";
import { recentProjects } from "~/constants";

const RecentProjects: React.FC = ({}) => {
  return (
    <div className="front-end-wrapper flex flex-col">
      <h1 className="gradient-title">Recent projects</h1>
      <div className="h-12"></div>

      <div className="recent-projects-wrapper grid grid-cols-2 gap-10">
        {recentProjects.map((project) => (
          <div
            className="recent-project-card flex flex-col justify-baseline items-center bg-cover p-10 hover:scale-105 duration-200 shadow-lg"
            style={{ backgroundImage: `${project.background}` }}
            key={project.name}
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
    </div>
  );
};

export default RecentProjects;
