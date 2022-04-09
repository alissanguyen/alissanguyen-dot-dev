import * as React from "react";
import FeaturedProjects from "./FeaturedProjects";
import RecentProjects from "./RecentProjects";
import OtherProjects from "./OtherProjects";
import styles from "./Projects.css";
import { LinksFunction } from "remix";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const Projects: React.FC = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const featuredClassname = wasInViewAtLeastOnce
    ? "my-projects-title"
    : undefined;

  return (
    <div className="projects-wrapper">
      <svg
        viewBox="0 0 1280 400"
        className={`${featuredClassname} text-[16rem] lg:text-[15rem] font-medium`}
        ref={setRef}
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
