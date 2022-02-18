import * as React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import ResponsiveNavMenu from "./ResponsiveNavMenu";

const topLevelLinks: { href: string; displayName: string }[] = [
  {
    href: "/blog",
    displayName: "Blog"
  },
  {
    href: "/#portfolio",
    displayName: "Portfolio"
  },
  {
    href: "/#projects",
    displayName: "Projects"
  },
  {
    href: "/#contact",
    displayName: "Contact"
  }
];

const NavBar: React.FC = (props) => {
  return (
    <div className="nav-bar-wrapper w-full">
      <StripeNavbar />
      <nav className="desktop-navbar mx-auto max-w-screen-lg w-full px-14 lg:px-0 py-10 flex flex-row items-center justify-between text-navBar-link text-xl grid-flow-col">
        <div className="nav-logo text-3xl font-medium uppercase text-navBar-linkHover hover:text-navBar-link focus:text-navBar-link underlined">
          <a href="/">Alissa N</a>
        </div>
        {topLevelLinks.map((link) => (
          <a
            className="nav-link dark underlined hover:text-navBar-linkHover focus:text-navBar-linkHover links-wrapper w-fit"
            href={link.href}
          >
            {link.displayName}
          </a>
        ))}
        <div className="desktop-theme-btn col-span-1">
          <ThemeButton />
        </div>
      </nav>
      <div className="mobile-navbar-wrapper flex max-w-screen-lg w-full px-14 py-10">
        <div className="nav-logo text-3xl font-medium uppercase text-navBar-linkHover hover:text-navBar-link focus:text-navBar-link underlined">
          <a href="/" className="flex w-max">Alissa N</a>
        </div>
        <ResponsiveNavMenu links={topLevelLinks} />
      </div>
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
