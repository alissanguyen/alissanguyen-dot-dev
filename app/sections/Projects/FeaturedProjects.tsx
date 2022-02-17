import * as React from "react";
import { mainProjects } from "~/constants";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import Blob2 from "../../assets/background/Gradient.svg";
import SmallExternalLinkButton from "~/components/ExternalLinkButton/SmallExternalLinkButton";

const FeaturedProjects: React.FC = ({}) => {
  const { theme } = useTheme();
  console.log("projects" + theme);
  return (
    <div className="main-projects-wrapper text-projects-text grid grid-cols-1 gap-14 z-10">
      <img src={Blob2} alt="" className="gradient-blob absolute" />
      {mainProjects.map((project) => (
        // TODO: width exceeds maw-w-full (screens below 1280px)
        <div
          className="main-project-card duration-300 ease-in md:grid md:grid-cols-2 sm:flex sm:flex-col bg-cover gap-10 p-10"
          style={{
            backgroundImage: `${
              theme === SupportedTheme.LIGHT ? project.bgLight : project.bgDark
            }`
          }}
          key={project.name}
        >
          <img
            src={project.img}
            className="main-project-img sm:h-[20rem] md:h-[18rem] lg:h-[22rem] w-full"
            alt=""
          />
          <div className="main-project-content flex flex-col justify-between">
            <div className="flex flex-col mt-5 sm:mt-0">
              <p className="main-project-title font-semibold text-3xl pb-5">
                {project.name}
              </p>
              <p className="main-project-description text-base leading-8 pb-2">
                {project.description}
              </p>
              <p className="main-project-time text-sm text-projects-subText pb-2">
                {project.role}
              </p>
            </div>
            <div className="main-project-frameworks flex flex-col ">
              {project.frameworks.map((framework) => (
                <div className="inline-flex items-center" key={framework}>
                  <ArrowSmRightIcon className="text-projecs-arrow w-5 mr-3" />
                  <p className="text-[15px] leading-7">{framework}</p>
                </div>
              ))}
            </div>
            <div className="spacer-div sm:mt-3"></div>
            {/* TODO: Make these buttons responsive for screens <520px */}
            <div className="main-project-buttons flex flex-row items-center justify-start text-sm mt-5 sm:mt-0">
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
              {project.npm ? (
                <div className="inline-flex">
                  <div className="mr-4"></div>
                  <ExternalLinkButton
                    to={project.npm}
                    linkProps={{
                      target: "_blank"
                    }}
                  >
                    View on NPM
                  </ExternalLinkButton>
                </div>
              ) : null}
            </div>
            <div className="main-project-small-buttons flex flex-row items-center justify-around text-sm mt-5">
              <SmallExternalLinkButton type="Github" href={project.gitRepo} />
              <SmallExternalLinkButton type="Website" href={project.website} />
              {project.npm ? (
                <SmallExternalLinkButton type="NPM" href={project.npm} />
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
