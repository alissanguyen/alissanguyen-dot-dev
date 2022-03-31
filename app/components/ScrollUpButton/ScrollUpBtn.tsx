import * as React from "react";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const ScrollUpBtn: React.FC = ({}) => {
  const [showScrollUpBtn, setShowScrollUpBtn] = React.useState<boolean>(false);
  const { theme } = useTheme();

  function handleDisplayScrollBtn() {
    const introductionContainer = document.getElementById("AboutMe");
    if (introductionContainer) {
      const introContainerHeight = introductionContainer.clientHeight;
      const shouldDisplayScrollBtn =
        window.scrollY >= introContainerHeight - 300;
      setShowScrollUpBtn(shouldDisplayScrollBtn);
    }
  }

  React.useEffect(() => {
    document.addEventListener("scroll", handleDisplayScrollBtn);
  }, []);

  return (
    <button
      className={`ScrollUp__Button fixed ${
        !showScrollUpBtn ? "invisible opacity-0" : "visible opacity-1"
      } transition-all ease-in-out duration-1000 right-8 bottom-4 z-[10000]`}
      id="scrollUpBtn"
      name="Scroll to top"
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 ${
          theme === SupportedTheme.LIGHT
            ? "text-gray-400 hover:text-black"
            : "text-gray-500 hover:text-white"
        } ease-in duration-100`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
    </button>
  );
};

export default ScrollUpBtn;
