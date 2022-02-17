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
      <nav className="navbar mx-auto max-w-screen-lg px-14 lg:px-0 py-10 flex flex-row items-center justify-between text-navBar-link text-lg">
        <div className="nav-logo text-2xl font-medium uppercase text-navBar-linkHover hover:text-navBar-link underlined">
          <a href="/">Alissa N</a>
        </div>
        {topLevelLinks.map((link) => (
          <a
            className="nav-link dark underlined hover:text-navBar-linkHover links-wrapper"
            href={link.href}
          >
            {link.displayName}
          </a>
        ))}

        <div className="mobile-menu">
          <ResponsiveNavMenu links={topLevelLinks} />
        </div>
        <div className="desktop-theme-btn">
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
