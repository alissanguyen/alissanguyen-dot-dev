import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import Moon from "../../assets/moon.svg";
interface Props {
  hasStripeHeader: boolean;
}

const getShadowClassName = (
  theme: SupportedTheme,
  hasStripeHeader: boolean
) => {
  if (theme === SupportedTheme.LIGHT) {
    return hasStripeHeader ? "shadow-light-stripe" : "shadow-light";
  } else {
    return hasStripeHeader ? "shadow-dark-stripe" : "shadow-dark";
  }
};

const ThemeButton: React.FC<Props> = (props) => {
  const { theme, updateTheme } = useTheme();

  console.log("hasStripeHeader", props.hasStripeHeader);

  // Default design of theme button does not account for color constrast between box shadow and stripes header
  const sun =
    "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
  const shadow = getShadowClassName(theme, props.hasStripeHeader);

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

  return (
    <div className="ThemeButton_Wrapper">
      <button
        className={`theme-container ${shadow}`}
        onClick={() => {
          handleToggleTheme(theme);

          fetch("/setTheme?index", {
            method: "POST",
            body: generateFormData(),
            credentials: "same-origin"
          });
        }}
      >
        {theme === SupportedTheme.LIGHT ? (
          <img className="theme-icon" src={sun} alt="" />
        ) : (
          <MoonIcon />
        )}
      </button>
    </div>
  );
};

const MoonIcon = () => (
  <img
    src={Moon}
    alt=""
    className="theme-icon flex items-center m-auto justify-center w-8"
  />
);
export default ThemeButton;
