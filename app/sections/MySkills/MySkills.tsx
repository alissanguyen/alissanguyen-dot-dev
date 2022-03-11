import * as React from "react";
import { abilities, skills } from "~/constants";
import anime from "animejs";
import styles from "./MySkills.css";
import { LinksFunction } from "remix";
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
          alt=""
          className="eclipse absolute"
        />
        <Title />
        <div className="skills-wrapper md:grid md:grid-cols-5 lg:grid-cols-7 gap-5">
          <div className="grid grid-cols-2 custom3:grid-cols-3 custom2:grid-cols-4 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 gap-5 lg:gap-y-10">
            {skills.map((skill, index) => (
              <div
                className={`skill-card ${className} relative left-0 top-0 w-full p-4 h-full w-full items-center text-center`}
                key={skill.id}
                style={{
                  animationDelay: `${1 + index}`
                }}
              >
                <div className="flex flex-col justify-between items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-[3rem] h-[3rem]"
                  />
                  <p className="text-sm text-textSmColor mt-2">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
          <ul className="abilities-wrapper mt-5 md:mt-0 md:col-span-3 lg:col-span-4 flex flex-col justify-start">
            {abilities.map((ability, index) => (
              <div key={ability}>
                <li
                  className={`ability-card ${className} flex justify-center items-center text-left p-8`}
                  style={{
                    animationDelay: `${1 + index}`
                  }}
                >
                  <p className="text-base text-textSmColor leading-8">
                    {ability}
                  </p>
                </li>
                <div className="spacer-div mt-5"></div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;

const Title = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();

  const letterClassname = wasInViewAtLeastOnce ? "title-letter" : undefined;

  React.useEffect(() => {
    const letters = document.getElementsByClassName("title-letter");

    setTimeout(() => {
      for (let i = 0; i < letters.length; i++) {
        anime({
          targets: letters[i],
          easing: "easeInQuad",
          translateX: ["5px", "0"],
          delay: 50 * i
        });

        anime({
          targets: letters[i],
          easing: "easeInQuad",
          opacity: 1,
          delay: 60 * i
        });
      }
    }, 500);
  }, [wasInViewAtLeastOnce]);
  return (
    <span
      id="skill-title"
      className="inline-flex text-4xl xs:text-5xl custom2:text-6xl md:text-6xl font-medium mb-10 xs:mb-12 custom2:mb-14 text-textLgColor"
      ref={setRef}
    >
      <span className={`${letterClassname} opacity-0`}>M</span>
      <span className={`${letterClassname} opacity-0`}>y</span>
      <span className={`${letterClassname} opacity-0`}>&nbsp;</span>
      <span className={`${letterClassname} opacity-0`}>S</span>
      <span className={`${letterClassname} opacity-0`}>k</span>
      <span className={`${letterClassname} opacity-0`}>i</span>
      <span className={`${letterClassname} opacity-0`}>l</span>
      <span className={`${letterClassname} opacity-0`}>l</span>
      <span className={`${letterClassname} opacity-0`}>s</span>
    </span>
  );
};
