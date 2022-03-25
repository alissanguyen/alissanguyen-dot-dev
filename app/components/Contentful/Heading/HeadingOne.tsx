import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const HeadingOne: React.FC = (props) => {
  const { theme } = useTheme();
  return (
    <h1
      className={`BlogPost__HeadingOne text-6xl mb-5 mt-20 font-medium ${
        theme === SupportedTheme.LIGHT ? "text-emerald-500" : "text-teal-400"
      }`}
    >
      {props.children}
    </h1>
  );
};

export default HeadingOne;
