import * as React from "react";
import { LinksFunction } from "@remix-run/node";
import styles from "./ResumeButton.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
const ResumeButton: React.FC = () => {
  return (
    <a href="/resume.pdf" download={"AlissaNguyen_Resume.pdf"} className="ResumeButton__Wrapper">
      <button
        className="slide text-lg"
        name="Download Resume"
        aria-label="Resume"
      >
        Download Resume
      </button>
    </a>
  );
};

export default ResumeButton;
