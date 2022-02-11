import * as React from "react";
import Logo from "../../assets/personal/name.png";
import { LinksFunction } from "remix";
import styles from "./NavBar.css";
import BlogButton from "../BlogButton/BlogButton";
import ResumeButton from "../ResumeButton/ResumeButton";
import ThemeButton from "../ThemeButton/ThemeButton";
import { SupportedTheme } from "~/types";

interface Props {
  toggleTheme: () => void;
  theme: SupportedTheme;
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ];
};
const NavBar: React.FC<Props> = (props) => {
  return (
    <div className="nav-bar-wrapper w-full">
      {/* TODO: Use variables for CSS colors */}
      <StripeNavbar />
      <nav className="navbar py-5 mx-auto px-20">
        <div className="navbar-content flex flex-row items-center justify-between">
          <img
            src={Logo}
            alt="Alissa N"
            className="navbar-logo hover:scale-105 duration-100"
          />

          <div className="nav-links-wrapper flex flex-row items-center justify-between text-white w-1/4">
            <a
              className="nav-link underlined hover:text-teal-200"
              href="#Portfolio"
            >
              Portfolio
            </a>
            <a
              className="nav-link underlined hover:text-teal-200"
              href="#Projects"
            >
              Projects
            </a>
            <a
              className="nav-link underlined hover:text-teal-200"
              href="#Contact"
            >
              Contact
            </a>
          </div>

          <BlogButton />
          <ResumeButton />
          <ThemeButton theme={props.theme} setTheme={props.toggleTheme} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

const StripeNavbar = () => {
  return (
    <div id="stripes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
