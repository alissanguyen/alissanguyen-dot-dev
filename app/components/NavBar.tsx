import * as React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ArrowRightIcon } from "@heroicons/react/outline";
interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <div className="nav-bar-wrapper w-full">
      <div className="max-w-screen-lg flex flex-row justify-between items-center p-10 mx-auto px-20">
        <Logo />
        <div className="theme-button-wrapper flex flex-row items-center text-gray-900 text-xl rounded-md uppercase">
          <a
            href="/blog"
            target="_blank"
            className="blog-button inline-flex items-center px-8 py-4 text-sm font-semibold uppercase relative"
          >
            <i className="fas fa-rss mr-3"></i>
            <p>My Blog</p>
          </a>
          <div className="inline-flex items-center ml-10">
            <SunIcon className="h-10 text-teal-300 mr-2" />
            <MoonIcon className="h-10 text-teal-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const Logo = () => {
  React.useEffect(() => {
    const text = document.getElementById("logo");
    const createSplitText = (element: HTMLElement) => {
      const splitText = element.innerHTML.split("");
      element.innerText = "";

      let delay = 0;

      splitText.forEach((el) => {
        const span = document.createElement("span");

        if (el === " ") {
          span.innerHTML = "&nbsp";
        } else {
          span.classList.add("letter");
          span.classList.add("enter");
          span.innerText = el;
          span.style.animationDelay = delay + "s";
          delay += 0.1;
        }
        if (text) {
          text.appendChild(span);
        }
      });
    };

    const removeAnimation = () => {
      const animatedObject = document.querySelectorAll(".letter");

      animatedObject.forEach((el: any) => {
        el.style.animationDelay = 0 + "s";
        el.classList.remove("enter");
      });
    };

    if (text) {
      createSplitText(text);
    }

    window.onload = () => {
      setTimeout(() => {
        removeAnimation();
      }, 2000);
    };
  }, []);

  return (
    <p
      className="logo-text cursor-default text-gray-900 inline-block font-semibold text-4xl w-max"
      id="logo"
    >
      ALISSA NG
    </p>
  );
};
