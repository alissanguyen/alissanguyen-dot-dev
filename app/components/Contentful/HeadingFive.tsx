import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

interface Props {}

const HeadingFive: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  return (
    <h5
      className={`text-3xl mb-5 mt-10 ${
        theme === SupportedTheme.LIGHT ? "text-blue-600" : "text-sky-500"
      } font-medium`}
    >
      {props.children}
    </h5>
  );
};

export default HeadingFive;
