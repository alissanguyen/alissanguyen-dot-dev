import * as React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Logo from "../../assets/name.png";
import { LinksFunction } from "remix";
import styles from "./NavBar.css";
import BlogButton from "../BlogButton/BlogButton";
import ResumeButton from "../ResumeButton/ResumeButton";
interface Props {}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ];
};
const NavBar: React.FC<Props> = ({}) => {
  return (
    <div className="nav-bar-wrapper w-full">
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
          <div className="theme-buttons-wrapper flex flex-row items-center text-white">
            <SunIcon className="h-10 text-teal-300 mr-2" />
            <MoonIcon className="h-10 text-teal-300" />
          </div>
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
