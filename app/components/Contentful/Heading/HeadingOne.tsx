import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const HeadingOne: React.FC = (props) => {
  const { theme } = useTheme();
  return (
    <span
      className={`BlogPost__HeadingOne text-3xl custom3:text-4xl xs:text-6xl mb-5 mt-20 font-medium ${
        theme === SupportedTheme.LIGHT ? "text-emerald-500" : "text-teal-400"
      }`}
    >
      {props.children}
    </span>
  );
};

export default HeadingOne;
