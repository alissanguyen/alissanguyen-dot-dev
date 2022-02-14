import * as React from "react";
import Logo from "../../assets/personal/name.png";
import BlogButton from "../BlogButton/BlogButton";
import ResumeButton from "../ResumeButton/ResumeButton";
import ThemeButton from "../ThemeButton/ThemeButton";

const NavBar: React.FC = (props) => {
  return (
    <div className="nav-bar-wrapper w-full">
      <StripeNavbar />
      <nav className="navbar py-5 mx-auto xl:px-20 lg:px-5 md:px-5">
        <div className="navbar-content flex flex-row items-center justify-between lg:text-lg">
          <img
            src={Logo}
            alt="Alissa N"
            className="navbar-logo hover:scale-105 duration-100 h-24"
          />

          <div className="nav-links-wrapper lg:flex flex-row items-center justify-between text-navBar-link lg:w-1/4">
            <a
              className="nav-link dark underlined hover:text-navBar-linkHover"
              href="#Portfolio"
            >
              Portfolio
            </a>
            <a
              className="nav-link underlined hover:text-navBar-linkHover"
              href="#Projects"
            >
              Projects
            </a>
            <a
              className="nav-link underlined hover:text-navBar-linkHover"
              href="#Contact"
            >
              Contact
            </a>
          </div>

          <div className="nav-blog-btn">
            <BlogButton />
          </div>
          <div className="nav-resume-btn">
            <ResumeButton />
          </div>
          <ThemeButton />
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
