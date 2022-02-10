import * as React from "react";
import { LinksFunction } from "remix";
import styles from "./ModeButton.css";
import { SupportedTheme } from "~/types";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

interface Props {
  setTheme: () => void;
  theme: SupportedTheme;
}
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
const ModeButton: React.FC<Props> = (props) => {
  const handleToggleMode = () => {
    props.setTheme();
  };
  return (
    <div className="switch relative">
      <input
        type="checkbox"
        name="toggle"
        onClick={handleToggleMode}
        className="top-0 right-0 bottom-0 left-0 opacity-0 absolute w-full h-full cursor-pointer"
      />
      <label htmlFor="toggle" className="block h-full relative w-4/5">
        {props.theme === SupportedTheme.DARK ? (
          <i className="block absolute">
            <MoonIcon className="mode-icon moon-dark m-auto" />
          </i>
        ) : (
          <i className="block absolute">
            <SunIcon className="mode-icon sun-light m-auto" />
          </i>
        )}
      </label>
      <span className="inline-block absolute right-0"></span>
    </div>
  );
};

export default ModeButton;
