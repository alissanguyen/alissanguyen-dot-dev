import * as React from "react";
import { abilities, skills } from "~/constants";
import anime from "animejs";
import styles from "./MySkills.css";
import { LinksFunction } from "remix";
import Blob1 from "../../assets/background/Eclipse.svg";
import Blob2 from "../../assets/background/Gradient.svg";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const MySkills: React.FC = ({}) => {
  return (
    <div className="skills-section-container md:p-20 lg:p-5 xl:p-0">
      <div className="skills-section-and-chart-wrapper ">
        <Title />
        <img src={Blob1} alt="" className="eclipse absolute" />
        <img src={Blob2} alt="" className="gradient-blob absolute" />
        <div className="experience-wrapper grid grid-cols-7 gap-10">
          <div
            className={`skills-wrapper grid grid-cols-4 gap-10 max-w-6xl col-span-4`}
          >
            {skills.map((skill) => (
              <div
                className="skill-card relative left-0 top-0 w-full p-4 h-full w-full items-center text-center"
                key={skill.id}
              >
                <div className=" flex flex-col justify-between items-center">
                  <img src={skill.icon} alt="" className="w-[3rem] h-[3rem]" />
                  <p className="text-sm text-textSmColor mt-2">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="abilities-wrapper col-span-3">
            {abilities.map((ability) => (
              <div key={ability}>
                <li className="ability-card flex justify-center items-center text-left p-8">
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
    </div>
  );
};

export default MySkills;

const Title = () => {
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
  });
  return (
    <span
      id="skill-title"
      className="inline-flex text-7xl font-medium mb-14 text-textLgColor"
    >
      <span className="title-letter opacity-0">M</span>
      <span className="title-letter opacity-0">y</span>
      <span className="title-letter opacity-0">&nbsp;</span>
      <span className="title-letter opacity-0">E</span>
      <span className="title-letter opacity-0">x</span>
      <span className="title-letter opacity-0">p</span>
      <span className="title-letter opacity-0">e</span>
      <span className="title-letter opacity-0">r</span>
      <span className="title-letter opacity-0">i</span>
      <span className="title-letter opacity-0">e</span>
      <span className="title-letter opacity-0">n</span>
      <span className="title-letter opacity-0">c</span>
      <span className="title-letter opacity-0">e</span>
    </span>
  );
};
