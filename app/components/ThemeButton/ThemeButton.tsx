import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
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
  const sun = "/svg/sun.svg";
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
          <img className="theme-icon select-none" src={sun} alt="" />
        ) : (
          <MoonIcon onBlogRoute={!props.hasStripeHeader} />
        )}
      </button>
    </div>
  );
};

interface MoonIconProps {
  onBlogRoute: boolean;
}
const MoonIcon: React.FC<MoonIconProps> = (props) => (
  <img
    src={props.onBlogRoute ? "/svg/moon-blog.svg" : "/svg/moon.svg"}
    alt=""
    className="theme-icon flex items-center m-auto justify-center w-8 select-none"
  />
);
export default ThemeButton;
