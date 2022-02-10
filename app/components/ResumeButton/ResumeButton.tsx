import * as React from "react";
import { LinksFunction } from "remix";
import { SupportedTheme } from "~/types";
import styles from "./ResumeButton.css";

interface Props {
  //   theme: SupportedTheme;
}

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

const ResumeButton: React.FC<Props> = (props) => {
  return (
    <div className="resume-button h-12 py-3 px-5 text-center uppercase relative after:absolute after:bottom-0 after:w-0 after:left-1/2 after:bg-transparent hover:cursor-pointer text-base font-normal">
      Download Resume
    </div>
  );
};

export default ResumeButton;
