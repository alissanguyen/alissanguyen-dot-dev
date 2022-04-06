import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const HeadingThree: React.FC = (props) => {
  const { theme } = useTheme();

  return (
    <h4
      className={`BlogPost__HeadingThree text-2xl font-medium xs:font-normal xs:text-3xl custom2:text-4xl leading-10 mb-5 mt-10 ${
        theme === SupportedTheme.LIGHT ? "text-sky-600" : "text-sky-400"
      }`}
    >
      {props.children}
    </h4>
  );
};

export default HeadingThree;
