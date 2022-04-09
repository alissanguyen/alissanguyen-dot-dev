import * as React from "react";
import { mainProjects } from "~/constants";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import ExternalLinkButton from "~/components/ExternalLinkButton/ExternalLinkButton";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import SmallExternalLinkButton from "~/components/ExternalLinkButton/SmallExternalLinkButton";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";

const FeaturedProjects: React.FC = ({}) => {
  const { theme } = useTheme();
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const animationClassName = wasInViewAtLeastOnce
    ? "project-slide-up"
    : undefined;
  return (
    <div
      className={`main-projects-wrapper text-projects-text grid grid-cols-1 gap-10 z-10`}
      ref={setRef}
    >
      <img
        src="/images/background/Gradient.svg"
        alt="Decorative background"
        className="gradient-blob absolute opacity-60"
      />
      {mainProjects.map((project, index) => (
        <div
          className={`FeaturedProject__Card ${animationClassName} duration-300 ease-in md:grid md:grid-cols-2 sm:flex sm:flex-col bg-cover gap-10 p-7 xs:p-10`}
          style={{
            backgroundImage: `${
              theme === SupportedTheme.LIGHT ? project.bgLight : project.bgDark
            }`,
            animationDuration: `${index + 1.25}s`
          }}
          key={project.name}
        >
          <img
            src={project.img}
            className="main-project-img sm:h-[20rem] md:h-[18rem] lg:h-[22rem] w-full"
            title={`Image of ${project.name} project`}
            loading="lazy"
            alt={`Image of ${project.name} project`}
          />
          <div className="main-project-content flex flex-col justify-between">
            <div className="flex flex-col mt-5 sm:mt-0">
              <p className="main-project-title font-semibold text-2xl sm:text-3xl pb-5">
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

            {!project.inProgress ? (
              <div className="main-project-small-buttons flex flex-row items-center justify-between text-sm mt-5">
                <SmallExternalLinkButton
                  type="Github"
                  href={project.gitRepo}
                  accessibilityName="Visit Github repository"
                />
                <SmallExternalLinkButton
                  type="Website"
                  href={project.website}
                  accessibilityName="Visit website"
                />
                {project.npm ? (
                  <SmallExternalLinkButton
                    type="NPM"
                    href={project.npm}
                    accessibilityName="Visit NPM page"
                  />
                ) : null}
              </div>
            ) : null}

            {project.inProgress ? (
              <span className="WorkInProgress__Label uppercase bg-indigo-400 text-white text-center text-base xs:text-lg py-2 px-6 mt-2 w-fit rounded-full">
                Work In Progress
              </span>
            ) : (
              <div className="main-project-buttons flex flex-row items-center justify-start text-sm mt-5 sm:mt-0">
                <ExternalLinkButton
                  to={project.gitRepo}
                  linkProps={{
                    target: "_blank"
                  }}
                  accessibilityName="Visit Github repository"
                >
                  View source
                </ExternalLinkButton>
                <div className="mr-4"></div>
                <ExternalLinkButton
                  to={project.website}
                  linkProps={{
                    target: "_blank"
                  }}
                  accessibilityName="Visit Website"
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
                      accessibilityName="Visit NPM package"
                    >
                      View on NPM
                    </ExternalLinkButton>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
