import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

interface Props {
  url: string;
}

const HyperLink: React.FC<Props> = (props) => {
  const { theme } = useTheme();
  return (
    <a
      href={props.url}
      className={`BlogPost__HyperLink font-medium ${
        theme === SupportedTheme.LIGHT
          ? "text-blue-500 hover:text-black"
          : "text-cyan-400 hover:text-white"
      } ease-in duration-100`}
    >
      {props.children}
    </a>
  );
};

export default HyperLink;
