import * as React from "react";
import FeaturedProjects from "./FeaturedProjects";
import RecentProjects from "./RecentProjects";
import OtherProjects from "./OtherProjects";
import styles from "./Projects.css";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const Projects: React.FC = ({}) => {
  return (
    <div className="projects-wrapper">
      <FeaturedProjects />
      <div className="mt-24"></div>
      <RecentProjects />
      <div className="mt-24"></div>
      <OtherProjects />
    </div>
  );
};

export default Projects;
