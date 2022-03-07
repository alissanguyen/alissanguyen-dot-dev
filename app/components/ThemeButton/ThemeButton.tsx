import * as React from "react";
import { useModalContext } from "~/providers/ModalProvider";
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

const getClassName = (theme: SupportedTheme) => {
  return theme === SupportedTheme.LIGHT
    ? "border-2 border-gray-400 hover:border-black"
    : "border-2 border-gray-400 hover:border-white";
};

const ThemeButton: React.FC<Props> = (props) => {
  const { theme, updateTheme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const sun = "/svg/sun.svg";
  const shadow = getShadowClassName(theme, props.hasStripeHeader);
  const mobileSun = "/svg/mobileSun.svg";
  const className = getClassName(theme);
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
    <>
      {!modalIsOpen ? (
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
      ) : (
        <div className="ThemeButton_Wrapper">
          <button
            className={`rounded-full px-5 py-3 inline-flex items-center justify-center ${className}`}
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
              <div className="inline-flex items-center justify-center text-base">
                <img
                  className="theme-icon select-none mr-4 w-5"
                  src={mobileSun}
                  alt=""
                />
                <p className="text-black">Switch to dark mode</p>
              </div>
            ) : (
              <div className="inline-flex items-center justify-center text-base">
                <img
                  src="/svg/moon-blog.svg"
                  alt="theme button"
                  className="theme-icon flex items-center m-auto justify-center w-5 select-none"
                />
                <p className="ml-4 text-gray-200 hover:text-white">
                  Switch to light mode
                </p>
              </div>
            )}
          </button>
        </div>
      )}
    </>
  );
};

interface MoonIconProps {
  onBlogRoute: boolean;
}
const MoonIcon: React.FC<MoonIconProps> = (props) => (
  <img
    src={props.onBlogRoute ? "/svg/moon-blog.svg" : "/svg/moon.svg"}
    alt="theme button"
    className="theme-icon flex items-center m-auto justify-center w-8 select-none"
  />
);
export default ThemeButton;
