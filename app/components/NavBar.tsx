import * as React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import BlogButton from "./BlogButton";
interface Props {}

const NavBar: React.FC<Props> = ({}) => {
  return (
    <div className="sticky top-0 nav-bar-wrapper flex flex-row justify-between items-center w-full p-10">
      <Logo />

      {/* // TODO: Implement this */}
      <div className="theme-button-wrapper flex flex-row items-center">
        <BlogButton />
        <div className="inline-flex items-center ml-10">
          <SunIcon className="h-10 text-pink-300 mr-2" />
          <MoonIcon className="h-10 text-pink-300" />
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
      let splitText = element.innerHTML.split("");
      element.innerText = "";
      let delay = 0;

      splitText.forEach((el) => {
        let span = document.createElement("span");

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
  });

  return (
    <p
      className="logo-text cursor-default text-gray-900 inline-block font-semibold text-4xl w-max"
      id="logo"
    >
      ALISSA NG
    </p>
  );
};
