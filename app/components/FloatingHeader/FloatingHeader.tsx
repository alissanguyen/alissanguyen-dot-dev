import styles from "./FloatingHeader.css";
import * as React from "react";
import { LinksFunction } from "remix";
import { NAVBAR_ID } from "~/constants";
import ShareSection from "./ShareSection";
import ProgressBar from "./ProgressBar";
import { BsFillArrowLeftCircleFill, BsArrowLeftCircle } from "react-icons/bs";
import { SimplifiedThemeButton } from "../ThemeButton/ThemeButton";

interface Props {
  postTitle: string;
  postSlug: string;
}

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

const FloatingHeader: React.FC<Props> = (props) => {
  const [shouldShowFloatingHeader, setShouldShowFloatingHeader] =
    React.useState(false);

  const [progress, setProgress] = React.useState(0);

  function fillScrollLine() {
    requestAnimationFrame(() => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const navBar: HTMLElement | null = document.getElementById(NAVBAR_ID);

      if (navBar) {
        const navbarContainerHeight = navBar.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        setProgress(percentScrolled);

        setShouldShowFloatingHeader(
          calculateShouldShowFloatingHeader(scrolled, navbarContainerHeight)
        );
      }
    });
  }

  React.useEffect(() => {
    /**
     * Call it once initially to handle cases where users refresh halfway down
     * the page. In those cases, they haven't scrolled yet but they should still
     * see the progress bar.
     */
    fillScrollLine();

    window.addEventListener("scroll", fillScrollLine);

    return () => {
      window.removeEventListener("scroll", fillScrollLine);
    };
  }, []);

  return (
    <div
      className={`floating-header text-xl ${
        shouldShowFloatingHeader ? "floating-active" : ""
      }`}
      id="Floating__Header"
    >
      <div className="floating-header-logo font-medium ml-4 text-post-bodyTextLg">
        <a href="https://www.alissanguyen.dev/blog">
          <span className="hidden xs:flex">Alissa Nguyen's Blog</span>
          <div className="FloatingHeader__GoBackButton inline-flex items-center justify-center xs:hidden font-normal pl-2">
            <BsFillArrowLeftCircleFill className="FloatingHeader__GoBackArrowSVG w-5 mr-2" />
            <span className="FloatingHeader__GoBackLabel text-lg pb-1">
              Back
            </span>
          </div>
        </a>
      </div>
      <span className="floating-header-divider text-post-bodyTextLg">—</span>
      <div className="floating-header-title font-medium">{props.postTitle}</div>
      <ProgressBar progress={progress} />
      <SimplifiedThemeButton />
      <ShareSection title={props.postTitle} slug={props.postSlug} />
    </div>
  );
};

const calculateShouldShowFloatingHeader = (
  amountScrolledInPixels: number,
  containerHeightInPixels: number
): boolean => {
  return amountScrolledInPixels >= containerHeightInPixels;
};

export default FloatingHeader;
