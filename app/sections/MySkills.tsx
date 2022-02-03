import * as React from "react";
import { abilities, skills } from "~/constants";

const MySkills: React.FC = ({}) => {
  return (
    <div className="skills-container">
      <div className="skills-section-and-chart-wrapper grid grid-cols-6 gap-10">
        <div className="flex flex-col col-span-4">
          <h1 className="text-5xl font-bold mb-10">
            Technologies I have been working with
          </h1>

          <div
            className={`skills-wrapper grid  grid-cols-5 gap-10 max-w-6xl m-auto`}
          >
            {skills.map((skill) => (
              <div
                className="skill-card relative left-0 top-0 w-full p-4 h-full w-full items-center text-center"
                key={skill.id}
              >
                <div className="blurred absolute left-0 top-0 w-full h-full"></div>
                <div className=" flex flex-col justify-between">
                  <img src={skill.icon} alt="" className="w-[3.5rem]" />
                  <p className="text-sm">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="abilities-wrapper col-span-2">
          <p className="text-2xl">Why Me ?</p>
          {abilities.map((ability) => (
            <li
              key={abilities.findIndex((ability) => ability === ability)}
              className="ability-card flex justify-center items-center text-center my-5"
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
