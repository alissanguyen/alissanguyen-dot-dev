import * as React from "react";
import FrontendProjects from "~/components/FrontendProjects";
import MainProjects from "~/components/MainProjects";
import OtherProjects from "~/components/OtherProjects";
interface Props {}

const Projects: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>My projects</h1>
      <MainProjects />
      <FrontendProjects />
      <OtherProjects />
    </div>
  );
};

export default Projects;
