import * as React from "react";
import FrontendProjects from "~/components/FrontendProjects";
import MainProjects from "~/components/MainProjects";
import OtherProjects from "~/components/OtherProjects";

interface Props {}

const Projects: React.FC<Props> = ({}) => {
  return (
    <div>
      <MyProjectsTitle />
      <h1 className="featured-projects">Featured</h1>
      <MainProjects />
      <div>Recent Works</div>
      <FrontendProjects />
      <OtherProjects />
    </div>
  );
};

export default Projects;
const MyProjectsTitle = () => {
  return (
    <svg viewBox="0 0 1280 720" className="my-projects-title w-full h-full">
      <text textAnchor="middle" x="50%" y="50%">
        My projects
      </text>
    </svg>
  );
};

