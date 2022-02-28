import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

const ThemeButton: React.FC = (props) => {
  const { theme, updateTheme } = useTheme();

  const handleToggleTheme = (oldTheme: SupportedTheme) => {
    updateTheme(
      oldTheme === SupportedTheme.DARK
        ? SupportedTheme.LIGHT
        : SupportedTheme.DARK
    );
  };

  const nextTheme =
    theme === SupportedTheme.DARK ? SupportedTheme.LIGHT : SupportedTheme.DARK;

  const generateFormData = () => {
    const form = new FormData();
    form.append("theme", nextTheme);
    return form;
  };

  const isChecked = theme === SupportedTheme.DARK ? false : true;

  return (
    <div className="switch relative focus:outline-2 ">
      <input
        type="checkbox"
        name="theme"
        defaultChecked={isChecked}
        value={theme}
        onChange={() => {
          handleToggleTheme(theme);

          fetch("/setTheme?index", {
            method: "POST",
            body: generateFormData(),
            credentials: "same-origin"
          });
        }}
        className=" top-0 right-0 bottom-0 left-0 opacity-0 absolute w-full h-full cursor-pointer"
      />
      <label htmlFor="toggle" className="block h-full relative w-4/5">
        {theme === SupportedTheme.DARK ? (
          <div className="flex absolute">
            <MoonIcon className="theme-icon moon-dark m-auto" />
          </div>
        ) : (
          <div className="flex absolute">
            <SunIcon className="theme-icon sun-light m-auto" />
          </div>
        )}
      </label>
      <span className="inline-block absolute right-0"></span>
    </div>
  );
};

export default ThemeButton;
