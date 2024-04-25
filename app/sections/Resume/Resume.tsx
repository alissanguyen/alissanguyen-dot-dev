import * as React from "react";
import SparkleSVG from '~/components/SparkleSVG';
import Education from './Education';
import styles from "./Resume.css";
import { LinksFunction } from "@remix-run/node";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";


export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const Resume: React.FC = ({ }) => {
  return (
      <div className='flex flex-col items-start justify-center gap-14 mb-20' id="Portfolio">
          <div className='flex flex-row items-center text-2xl gap-3 font-medium rounded-3xl border-2 border-gray-300 text-textSmColor px-8 py-2'>
              <SparkleSVG />
              <h2>Resume</h2>
          </div>
          <Education />
          <div className="spacer-div mt-10"></div>
          <WorkExperience/>
          <Skills/>
      </div>
  )
}

export default Resume
