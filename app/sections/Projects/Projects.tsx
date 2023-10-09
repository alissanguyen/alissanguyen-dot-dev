import * as React from "react";
import FeaturedProjects from "./FeaturedProjects";
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
      <div className="mt-14 sm:mt-24"></div>
      <OtherProjects />
    </div>
  );
};

export default Projects;
