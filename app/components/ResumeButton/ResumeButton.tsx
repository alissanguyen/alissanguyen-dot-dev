import * as React from "react";
import { LinksFunction } from "remix";
import styles from "./ResumeButton.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
const ResumeButton: React.FC = () => {
  return (
    <a href="/images/AlissaNguyen_Resume.pdf" download={"AlissaNguyen_Resume.pdf"}>
      <button
        className="resume-button px-5 py-2 text-center uppercase relative after:absolute after:bottom-0 after:w-0 after:left-1/2 after:bg-transparent hover:cursor-pointer focus:cursor-pointer lg:text-base font-normal select-none rounded-xl"
        name="Download Resume"
        aria-label="Resume"
      >
        Download Resume
      </button>
    </a>
  );
};

export default ResumeButton;
