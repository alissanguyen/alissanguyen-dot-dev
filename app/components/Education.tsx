import * as React from "react";
import { schools } from "~/constants";
import SchoolIcon from "~/assets/graduation.png";

interface Props {}

const Education: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1 className="font-bold mb-5">Education</h1>
      {schools.map((school) => (
        <div className="text-lg flex flex-row justify-between mb-5 max-w-2xl items-center" key={school.name}>
          <div className="inline-flex items-center">
            <img src={SchoolIcon} className="w-5 mr-5" />
            <li className="list-none font-light" >
              {school.name}
            </li>
          </div>
          <p className="text-base font-light italic text-right">
            {school.duration}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
