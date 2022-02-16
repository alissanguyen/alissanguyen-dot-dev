import * as React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import HamburgerMenu from "./HamburgerMenu";
import { PhoneIcon } from "@heroicons/react/outline"
import { RssIcon } from "@heroicons/react/outline";



const NavBar: React.FC = (props) => {
  return (
    <div className="nav-bar-wrapper w-full">
      <StripeNavbar />
      <nav className="navbar mx-auto max-w-screen-lg px-20 lg:px-0 py-10 flex flex-row items-center justify-between text-navBar-link text-lg">
        <div className="nav-logo text-2xl font-medium uppercase text-navBar-linkHover hover:text-navBar-link underlined">
          <a href="/">Alissa N</a>
        </div>
        <a
          className="nav-link dark underlined hover:text-navBar-linkHover"
          href="/blog"
        >
          Blog
        </a>
        <a
          className="nav-link dark underlined hover:text-navBar-linkHover"
          href="/#Portfolio"
        >
          Portfolio
        </a>
        <a
          className="nav-link underlined hover:text-navBar-linkHover"
          href="/#Projects"
        >
          Projects
        </a>
        <a
          className="nav-link underlined hover:text-navBar-linkHover"
          href="/#Contact"
        >
          Contact
        </a>

        {/* <div className="md:hidden">
          <HamburgerMenu />
        </div> */}
        <ThemeButton />
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
