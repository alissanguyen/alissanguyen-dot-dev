import * as React from "react";
import { useLocation } from "remix";
import { fixedWidthLayoutClasses } from "~/constants";
import ThemeButton from "../ThemeButton/ThemeButton";
import ResponsiveNavMenu from "./ResponsiveNavMenu";
import HomeLightIcon from "~/assets/home-light.svg";
import HomeDarkIcon from "~/assets/home-dark.svg";
import PhoneLightIcon from "~/assets/phone-light.svg";
import PhoneDarkIcon from "~/assets/phone-dark.svg";
import { useTheme } from "~/providers/ThemeProvider";
import { SupportedTheme } from "~/types";

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
  const location = useLocation();
  const hasStripeBackground = !location.pathname.startsWith("/blog");

  return (
    <div>
      {hasStripeBackground ? (
        <DefaultNavBar hasStripeHeader={true} />
      ) : (
        <BlogNavBar hasStripeHeader={false} />
      )}
    </div>
  );
};

export default NavBar;

interface NavbarProps {
  hasStripeHeader: boolean;
}
const DefaultNavBar: React.FC<NavbarProps> = (props) => {
  return (
    <div className="nav-bar-wrapper w-full flex">
      <div id="stripes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="desktop-navbar mx-auto max-w-screen-lg w-full px-14 lg:px-0 py-10 flex flex-row items-center justify-between text-navBar-link text-xl grid-flow-col">
        <div className="nav-logo text-3xl font-medium uppercase text-navBar-linkHover hover:text-navBar-link focus:text-navBar-link underlined">
          <a href="/">Alissa N</a>
        </div>
        {topLevelLinks.map((link) => (
          <a
            className="nav-link dark underlined hover:text-navBar-linkHover focus:text-navBar-linkHover links-wrapper w-fit"
            href={link.href}
            key={link.displayName}
          >
            {link.displayName}
          </a>
        ))}
        <div className="desktop-theme-btn col-span-1">
          <ThemeButton hasStripeHeader={props.hasStripeHeader} />
        </div>
      </nav>
      <div className="mobile-navbar-wrapper flex flex-row items-center max-w-screen-lg w-full px-8 py-10">
        <div className="flex nav-logo text-3xl font-medium uppercase text-navBar-linkHover hover:text-navBar-link focus:text-navBar-link underlined h-fit">
          <a href="/" className="flex w-max">
            Alissa N
          </a>
        </div>
        <ResponsiveNavMenu links={topLevelLinks} />
      </div>
    </div>
  );
};

const BlogNavBar: React.FC<NavbarProps> = (props) => {
  const { theme } = useTheme();
  return (
    <div className="w-screen py-10">
      <div
        className={`nav-bar-wrapper w-full flex justify-between flex-row ${fixedWidthLayoutClasses}`}
      >
        <div className="nav-logo text-3xl font-medium uppercase text-blog-lgText hover:text-navBar-link focus:text-navBar-link underlined w-fit h-fit">
          <a href="/">Alissa N</a>
        </div>
        <div className="inline-flex items-center justify-center">
          <ContactBtn theme={theme} />
          <HomeBtn theme={theme} />
          <ThemeButton hasStripeHeader={props.hasStripeHeader} />
        </div>
      </div>
    </div>
  );
};

interface BtnProps {
  theme: SupportedTheme;
}
const HomeBtn: React.FC<BtnProps> = (props) => {
  return (
    <a href="/" target="_blank" className="mr-8">
      <img
        src={props.theme === SupportedTheme.DARK ? HomeDarkIcon : HomeLightIcon}
        alt="Home"
        className="w-8 hover:opacity-80"
      />
    </a>
  );
};

const ContactBtn: React.FC<BtnProps> = (props) => {
  return (
    <a href="/#contact" target="_blank" className="mr-8">
      <img
        src={
          props.theme === SupportedTheme.DARK ? PhoneDarkIcon : PhoneLightIcon
        }
        alt="Contact"
        className="w-7 hover:opacity-80"
      />
    </a>
  );
};
