import * as React from "react";
import FeaturedProjects from "./FeaturedProjects";
import RecentProjects from "./RecentProjects";
import OtherProjects from "./OtherProjects";
import styles from "./Projects.css";
import { LinksFunction } from "remix";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const Projects: React.FC = ({}) => {
  return (
    <div className="projects-wrapper">
      <svg
        viewBox="0 0 1280 400"
        className="my-projects-title text-[16rem] lg:text-[15rem]"
      >
        <text textAnchor="middle" x="50%" y="70%">
          Featured
        </text>
      </svg>
      <FeaturedProjects />
      <div className="mt-24"></div>
      <RecentProjects />
      <div className="mt-24"></div>
      <OtherProjects />
    </div>
  );
};

export default Projects;
