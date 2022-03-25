import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const HeadingFour: React.FC = (props) => {
  const { theme } = useTheme();
  return (
    <h4
      className={`BlogPost__HeadingFour text-3xl mb-5 mt-10 ${
        theme === SupportedTheme.LIGHT ? "text-purple-500" : "text-fuchsia-400"
      } font-medium`}
    >
      {props.children}
    </h4>
  );
};

export default HeadingFour;
