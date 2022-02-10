import * as React from "react";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";
import { recentProjects } from "~/constants";

const RecentProjects: React.FC = ({}) => {
  return (
    <div className="front-end-wrapper flex flex-col">
      <h1 className="gradient-title">Recent projects</h1>
      <div className="h-12"></div>

      <div className="recent-projects-wrapper grid grid-cols-3 gap-10">
        {recentProjects.map((project) => (
          <ProjectCard project={project} />
          // <div
          //   className="recent-project-card flex flex-col justify-baseline  bg-cover p-10 "
          //   style={{ backgroundImage: `${project.background}` }}
          //   key={project.name}
          // >
          //   <div >
          //     <p className="recent-project-title font-medium text-3xl pb-3">
          //       {project.name}
          //     </p>
          //     <p className="recent-project-description text-base pb-5">
          //       {project.description}
          //     </p>

          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

const ProjectCard = (props: any) => {
  const project = props.project;
  return (
    <div className="recent-project-card bg-white text-center flex flex-col rounded-lg hover:scale-105 duration-300 shadow-lg items-center justify-between">
      <img
        src={project.img}
        alt="barbarian"
        className="h-56 w-full rounded-t-lg"
      />
      <div className="recent-project-content pt-5 px-10">
        <div className="recent-project-card-title font-medium text-2xl pb-5">
          {project.name}
        </div>
        <div className="recent-project-card-description text-base pb-5">
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
  );
};
