import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const HeadingOne: React.FC = (props) => {
  const { theme } = useTheme();
  return (
    <h2
      className={`BlogPost__HeadingOne text-4xl xs:text-5xl custom2:text-6xl mb-5 mt-5 font-medium ${
        theme === SupportedTheme.LIGHT ? "text-emerald-500" : "text-teal-400"
      }`}
    >
      {props.children}
    </h2>
  );
};

export default HeadingOne;
