import * as React from "react";
import { abilities, skills } from "~/constants";
import anime from "animejs";

const MySkills: React.FC = ({}) => {
  return (
    <div className="skills-section-container px-20">
      <div className="skills-section-and-chart-wrapper grid grid-cols-6 gap-10">
        <div className="flex flex-col col-span-4">
          <Title />
          <div
            className={`skills-wrapper grid grid-cols-4 gap-10 max-w-6xl`}
          >
            {skills.map((skill) => (
              <div
                className="skill-card relative left-0 top-0 w-full p-4 h-full w-full items-center text-center"
                key={skill.id}
              >
                <div className=" flex flex-col justify-between items-center">
                  <img src={skill.icon} alt="" className="w-[3.5rem]" />
                  <p className="text-sm">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="abilities-wrapper col-span-2 ">
          {abilities.map((ability) => (
            <li
              key={abilities.findIndex((ability) => ability === ability)}
              className="ability-card flex justify-center items-center text-left my-5 p-8"
            >
              <p className="text-base">{ability}</p>
            </li>
          ))}
        </ul>
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
          delay: 50 * i,
        });

        anime({
          targets: letters[i],
          easing: "easeInQuad",
          opacity: 1,
          delay: 60 * i,
        });
      }
    }, 500);
  });
  return (

    <span id="skill-title" className="inline-flex text-7xl font-bold mb-14">
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
