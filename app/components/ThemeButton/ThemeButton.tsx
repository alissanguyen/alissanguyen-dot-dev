import * as React from "react";
import { useModalContext } from "~/providers/ModalProvider";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";
import { BsMoon, BsSun } from "react-icons/bs";

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
const mobileSun = "/svg/mobileSun.svg";

const ThemeButton: React.FC<Props> = (props) => {
  const { theme, updateTheme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const sun = "/svg/sun.svg";
  const shadow = getShadowClassName(theme, props.hasStripeHeader);
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

  function toggleTheme(theme: SupportedTheme) {
    requestAnimationFrame(() => {
      handleToggleTheme(theme);

      fetch("/setTheme?index", {
        method: "POST",
        body: generateFormData(),
        credentials: "same-origin"
      });
    });
  }
  return (
    <>
      {!modalIsOpen ? (
        <div className="ThemeButton_Wrapper">
          <button
            name="Switch to dark theme"
            className={`theme-container ${shadow}`}
            onClick={() => toggleTheme(theme)}
          >
            {theme === SupportedTheme.LIGHT ? (
              <img
                className="theme-icon select-none"
                src={sun}
                alt="Sun icon"
                title="Sun"
              />
            ) : (
              <MoonIcon onBlogRoute={!props.hasStripeHeader} />
            )}
          </button>
        </div>
      ) : (
        <div className="ThemeButton_Wrapper">
          <button
            name="Switch to light mode"
            className={`rounded-full px-5 py-3 inline-flex items-center justify-center ${className}`}
            onClick={() => toggleTheme(theme)}
          >
            {theme === SupportedTheme.LIGHT ? (
              <div className="inline-flex items-center justify-center text-base">
                <img
                  className="theme-icon select-none mr-4 w-5"
                  src={mobileSun}
                  alt="Sun icon"
                  title="Sun"
                />
                <p className="text-black">Switch to dark mode</p>
              </div>
            ) : (
              <div className="inline-flex items-center justify-center text-base">
                <img
                  src="/svg/moon-blog.svg"
                  alt="Moon icon"
                  title="Moon"
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
    alt="Moon icon"
    title="Moon"
    className="theme-icon flex items-center m-auto justify-center w-8 select-none"
  />
);
export default ThemeButton;

export const SimplifiedThemeButton: React.FC = () => {
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
  function toggleTheme(theme: SupportedTheme) {
    requestAnimationFrame(() => {
      handleToggleTheme(theme);

      fetch("/setTheme?index", {
        method: "POST",
        body: generateFormData(),
        credentials: "same-origin"
      });
    });
  }
  return (
    <div className="SimplifiedThemeButton_Wrapper">
      <button
        name="light theme"
        className={`rounded-full px-5 py-3 inline-flex items-center justify-center `}
        onClick={() => toggleTheme(theme)}
      >
        {theme === SupportedTheme.LIGHT ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-600 hover:text-black ease-in duration-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-400 hover:text-white ease-in duration-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
