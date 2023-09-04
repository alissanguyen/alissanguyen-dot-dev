import * as React from "react";
import { abilities, skills } from "~/constants";
import styles from "./MySkills.css";
import { LinksFunction } from "@remix-run/node";
import { useWasInViewAtLeastOnce } from "~/hooks/useWasInViewAtLeastOnce";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const MySkills: React.FC = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "show" : "hide";
  return (
    <section className={`h-fit ${className}`} ref={setRef}>
      <div className="skills-section-container">
        <img
          src="/images/background/Eclipse.svg"
          alt="Decorative background eclipse"
          className="eclipse absolute"
        />
        <div className="Skills__Wrapper md:grid md:grid-cols-5 lg:grid-cols-7 gap-5">
          <div className="Skills__SkillCards__Wrapper grid grid-cols-3 gap-2 custom2:grid-cols-5 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 custom3:gap-5 lg:gap-y-10 ">
            {skills.map((skill, index) => (
              <div
                className={`Skills__SkillCard flex ${className} relative left-0 top-0 w-full p-4 h-full items-center text-center`}
                key={skill.id}
                style={{
                  animationDelay: `${1 + index}`
                }}
              >
                <div className="flex flex-col items-center w-full">
                  <img
                    src={skill.icon}
                    alt={skill.name + " icon"}
                    className="w-[4rem] h-[4rem]"
                    title={skill.name}
                    loading="lazy"
                  />
                  <p className="text-sm sm:text-base text-textSmColor mt-2">
                    {skill.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ul className="abilities-wrapper mt-5 md:mt-0 md:col-span-3 lg:col-span-4 flex flex-col justify-start">
            {abilities.map((ability, index) => (
              <li key={ability}>
                <div
                  className={`ability-card ${className} flex justify-center items-center text-left p-8`}
                  style={{
                    animationDelay: `${1 + index}`
                  }}
                >
                  <p className="text-base text-textSmColor leading-8">
                    {ability}
                  </p>
                </div>
                <div className="spacer-div mt-5"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;

