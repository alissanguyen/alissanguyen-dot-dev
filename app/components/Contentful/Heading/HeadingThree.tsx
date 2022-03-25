import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const HeadingThree: React.FC = (props) => {
  const { theme } = useTheme();

  return (
    <h3
      className={`BlogPost__HeadingThree text-4xl leading-10 mb-5 mt-14 ${
        theme === SupportedTheme.LIGHT ? "text-sky-600" : "text-sky-400"
      }`}
    >
      {props.children}
    </h3>
  );
};

export default HeadingThree;
